/**
 * Building data access
 *
 */
import * as _ from 'lodash';
import { ITask } from 'pg-promise';

import db from '../../db';
import { tileCache } from '../../tiles/rendererDefinition';
import { BoundingBox } from '../../tiles/types';
import * as buildingDataAccess from '../dataAccess/building';
import * as likeDataAccess from '../dataAccess/like';
import { UserError } from '../errors/general';

import { processBuildingUpdate } from './domainLogic/processBuildingUpdate';

// data type note: PostgreSQL bigint (64-bit) is handled as string in JavaScript, because of
// JavaScript numerics are 64-bit double, giving only partial coverage.

const TransactionMode = db.$config.pgp.txMode.TransactionMode;
const isolationLevel = db.$config.pgp.txMode.isolationLevel;

// Create a transaction mode (serializable, read-write):
const serializable = new TransactionMode({
    tiLevel: isolationLevel.serializable,
    readOnly: false
});

async function getLatestRevisionId() {
    try {
        const data = await db.oneOrNone(
            `SELECT MAX(log_id) from logs`
        );
        return data == undefined ? undefined : data.max;
    } catch(err) {
        console.error(err);
        return undefined;
    }
}


async function queryBuildingsAtPoint(lng: number, lat: number) {
    try {
        return await db.manyOrNone(
            `SELECT b.*
            FROM buildings as b, geometries as g
            WHERE
                b.geometry_id = g.geometry_id
            AND
                ST_Intersects(
                    ST_Transform(
                        ST_SetSRID(ST_Point($1, $2), 4326),
                        3857
                    ),
                    geometry_geom
                )
            `,
            [lng, lat]
        );
    } catch(error) {
        console.error(error);
        return undefined;
    }
}

async function queryBuildingsByReference(key: string, ref: string) {
    try {
        if (key === 'elstat_id') {
            return await db.manyOrNone(
                `SELECT
                    *
                FROM
                    buildings
                WHERE
                    ref_elstat_id = $1
                `,
                [ref]
            );
        } 
        // else if (key === 'uprn') {
        //     return await db.manyOrNone(
        //         `SELECT
        //             b.*
        //         FROM
        //             buildings as b, building_properties as p
        //         WHERE
        //             b.building_id = p.building_id
        //         AND
        //             p.uprn = $1
        //         `,
        //         [ref]
        //     );
        // } 
        else {
            return { error: 'Key must be UPRN or TOID' };
        }
    } catch(err) {
        console.error(err);
        return undefined;
    }
}

async function getCurrentBuildingDataById(id: number) {
    return db.one(
        'SELECT * FROM buildings WHERE building_id = $1',
        [id]
    );
}

async function getBuildingById(id: number) {
    try {
        const building = await getCurrentBuildingDataById(id);

        building.edit_history = await getBuildingEditHistory(id);

        return building;
    } catch(error) {
        console.error(error);
        return undefined;
    }
}

async function getBuildingEditHistory(id: number) {
    try {
        return await db.manyOrNone(
            `SELECT log_id as revision_id, forward_patch, reverse_patch, date_trunc('minute', log_timestamp) as revision_timestamp, username
            FROM logs, users
            WHERE building_id = $1 AND logs.user_id = users.user_id
            ORDER BY log_timestamp DESC`,
            [id]
        );
    } catch(error) {
        console.error(error);
        return [];
    }
}

async function getBuildingLikeById(buildingId: number, userId: string) {
    try {
        const res = await db.oneOrNone(
            'SELECT true as like FROM building_user_likes WHERE building_id = $1 and user_id = $2 LIMIT 1',
            [buildingId, userId]
        );
        return res && res.like;
    } catch(error) {
        console.error(error);
        return undefined;
    }
}

// async function getBuildingUPRNsById(id: number) {
//     try {
//         return await db.any(
//             'SELECT uprn, parent_uprn FROM building_properties WHERE building_id = $1',
//             [id]
//         );
//     } catch(error) {
//         console.error(error);
//         return undefined;
//     }
// }

async function saveBuilding(buildingId: number, building: any, userId: string): Promise<object> { // TODO add proper building type
    return await updateBuildingData(buildingId, userId, async () => {
        const processedBuilding: any = await processBuildingUpdate(buildingId, building);
        
        // remove read-only fields from consideration
        delete processedBuilding.building_id;
        delete processedBuilding.revision_id;
        delete processedBuilding.geometry_id;

        // return whitelisted fields to update
        return pickAttributesToUpdate(processedBuilding, BUILDING_FIELD_WHITELIST);
    });
}

async function likeBuilding(buildingId: number, userId: string) {
    return await updateBuildingData(
        buildingId,
        userId,
        async (t) => {
            // return total like count after update
            return {
                likes_total: await likeDataAccess.getBuildingLikeCount(buildingId, t)
            };
        },
        (t) => {
            return likeDataAccess.addBuildingUserLike(buildingId, userId, t);
        },
    );
}

async function unlikeBuilding(buildingId: number, userId: string) {
    return await updateBuildingData(
        buildingId,
        userId,
        async (t) => {
            // return total like count after update
            return {
                likes_total: await likeDataAccess.getBuildingLikeCount(buildingId, t)
            };
        },
        async (t) => {
            return likeDataAccess.removeBuildingUserLike(buildingId, userId, t);
        },
    );
}

// === Utility functions ===

function pickAttributesToUpdate(obj: any, fieldWhitelist: Set<string>) {
    const subObject = {};
    for (let [key, value] of Object.entries(obj)) {
        if(fieldWhitelist.has(key)) {
            subObject[key] = value;
        }
    }
    return subObject;
}

/**
 * Carry out an update of the buildings data. Allows for running any custom database operations before the main update.
 * All db hooks get passed a transaction.
 * @param buildingId The ID of the building to update
 * @param userId The ID of the user updating the data
 * @param getUpdateValue Function returning the set of attribute to update for the building
 * @param preUpdateDbAction Any db operations to carry out before updating the buildings table (mostly intended for updating the user likes table)
 */
async function updateBuildingData(
    buildingId: number,
    userId: string,
    getUpdateValue: (t: ITask<any>) => Promise<object>,
    preUpdateDbAction?: (t: ITask<any>) => Promise<void>,
): Promise<object> {
    return await db.tx({mode: serializable}, async t => {
        if (preUpdateDbAction != undefined) {
            await preUpdateDbAction(t);
        }

        const update = await getUpdateValue(t);

        const oldBuilding = await buildingDataAccess.getBuildingData(buildingId, true, t);

        const patches = compare(oldBuilding, update);
        console.log('Patching', buildingId, patches);
        const [forward, reverse] = patches;
        if (Object.keys(forward).length === 0) {
            throw new UserError('No change provided');
        }

        const revisionId = await buildingDataAccess.insertEditHistoryRevision(buildingId, userId, forward, reverse, t);

        const updatedData = await buildingDataAccess.updateBuildingData(buildingId, forward, revisionId, t);

        expireBuildingTileCache(buildingId);

        return updatedData;
    });
}

function privateQueryBuildingBBOX(buildingId: number){
    return db.one(
        `SELECT
            ST_XMin(envelope) as xmin,
            ST_YMin(envelope) as ymin,
            ST_XMax(envelope) as xmax,
            ST_YMax(envelope) as ymax
        FROM (
            SELECT
                ST_Envelope(g.geometry_geom) as envelope
            FROM buildings as b, geometries as g
            WHERE
                b.geometry_id = g.geometry_id
            AND
                b.building_id = $1
        ) as envelope`,
        [buildingId]
    );
}

async function expireBuildingTileCache(buildingId: number) {
    const bbox = await privateQueryBuildingBBOX(buildingId);
    const buildingBbox: BoundingBox = [bbox.xmax, bbox.ymax, bbox.xmin, bbox.ymin];
    tileCache.removeAllAtBbox(buildingBbox);
}

const BUILDING_FIELD_WHITELIST = new Set([
    'ref_osm_id',
    // 'location_name',
    'location_number',
    // 'location_street',
    // 'location_line_two',
    'location_town',
    'location_postcode',
    'location_latitude',
    'location_longitude',

    'current_landuse_ground_floor',
    'current_landuse_floor',

    'type_class',
    'side_distances',

    'year_built',
    'reconstruction_year',
    'date_source',
    'date_source_link',

    'size_storeys_core',
    'size_storeys_basement',
    'size_height_apex',

    'size_floor_area_ground',
    'size_floor_area_total',
    'size_width_frontage',

    'pilotis' ,
    'high_ground_floor',
    
    'construction_core_material',
    'construction_roof_covering',
    'construction_front_cover_material',
    'construction_side_cover_material',

    'has_sidewalk',
    'sidewalk_width',
    'road_width',
    'sidewalk_accessibility',
    'sidewalk_lawn',
    'sidewalk_trees',
    'noise_level',
    'has_pavement',
    'has_cycling_track',
    'has_parodia_stoa',
    'has_egkarsia_stoa',

    'inside_protected_area',
     'name_of_protected_area',
     'fek_issue_protected',
     'fek_number_protected',
     'fek_date_protected',

    'inside_archaelogical_area',
    'name_of_archaelogical_area',
    'fek_issue_archaelogical',
    'fek_number_archaelogical',
    'fek_date_archaelogical',

    'inside_energy_area',
    'name_of_energy_area',
    'fek_issue_energy',
    'fek_number_energy',
    'fek_date_energy',
    // 'officially_protected',

    'officially_preserved',
    'preservation_designation',
    'name_of_officially_preserved_building',
    'fek_issue_officially_preserved',
    'fek_number_officially_preserved',
    'fek_date_officially_preserved',

    'officially_monument',
    'monument_designation',
    'name_of_officially_monument_building',
    'fek_issue_officially_monument',
    'fek_number_officially_monument',
    'fek_date_officially_monument',


    'has_photovoltaic_panels',
    'building_state',
    'visible_collapse_risk',

    'ownership_type',

]);

/**
 * Compare old and new data objects, generate shallow merge patch of changed fields
 * - forward patch is object with {keys: new_values}
 * - reverse patch is object with {keys: old_values}
 *
 * @param {object} oldObj
 * @param {object} newObj
 * @param {Set} whitelist
 * @returns {[object, object]}
 */
function compare(oldObj: object, newObj: object): [object, object] {
    const reverse = {};
    const forward = {};
    for (const [key, value] of Object.entries(newObj)) {
        if (!_.isEqual(oldObj[key], value)) {
            reverse[key] = oldObj[key];
            forward[key] = value;
        }
    }
    return [forward, reverse];
}

export {
    queryBuildingsAtPoint,
    queryBuildingsByReference,
    getCurrentBuildingDataById,
    getBuildingById,
    getBuildingLikeById,
    getBuildingEditHistory,
    // getBuildingUPRNsById,
    saveBuilding,
    likeBuilding,
    unlikeBuilding,
    getLatestRevisionId
};

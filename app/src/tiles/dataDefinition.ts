import { strictParseInt } from "../parse";

import { DataConfig } from "./types";

const LAYER_QUERIES = {
    base_light: `
        SELECT
            geometry_id
        FROM
            buildings`,
    base_night: `
        SELECT
            geometry_id
        FROM
            buildings`,
    number_labels: `
        SELECT
            geometry_id,
            location_number
        FROM
            buildings`,
    highlight: `
        SELECT
            geometry_id
        FROM
            buildings
        WHERE building_id = !@highlight!`,
    year_built: `
        SELECT
            geometry_id,
            year_built
        FROM
            buildings
        WHERE year_built IS NOT NULL`,
    size_storeys_core: `
        SELECT
            geometry_id,
            size_storeys_core
        FROM
            buildings
        WHERE
            size_storeys_core IS NOT NULL`,
    size_height: `
        SELECT
            geometry_id,
            size_height_apex AS size_height
        FROM
            buildings
        WHERE
            size_height_apex IS NOT NULL`,
    construction_core_material: `
        SELECT
            geometry_id,
            construction_core_material
        FROM
            buildings
        WHERE
            construction_core_material IS NOT NULL`,
    location: `
        SELECT
            geometry_id,
            (
                case when location_name IS NULL then 0 else 1 end +
                case when location_number IS NULL then 0 else 1 end +
                case when location_street IS NULL then 0 else 1 end +
                case when location_line_two IS NULL then 0 else 1 end +
                case when location_town IS NULL then 0 else 1 end +
                case when location_postcode IS NULL then 0 else 1 end +
                case when location_latitude IS NULL then 0 else 1 end +
                case when location_longitude IS NULL then 0 else 1 end +
                case when ref_elstat_id IS NULL then 0 else 1 end +
                case when ref_osm_id IS NULL then 0 else 1 end
            ) AS location_info_count
        FROM
            buildings`,
    likes: `
        SELECT
            geometry_id,
            likes_total AS likes
        FROM
            buildings
        WHERE
            likes_total > 0`,
    community_local_significance_total: `
        SELECT
            geometry_id,
            community_local_significance_total
        FROM
            buildings
        WHERE
            community_local_significance_total > 0
    `,
    community_in_public_ownership: `
        SELECT
            geometry_id,
            CASE
                WHEN community_public_ownership = 'Not in public/community ownership' THEN false
                ELSE true
            END AS in_public_ownership
        FROM
            buildings
        WHERE
            community_public_ownership IS NOT NULL
    `,
    // planning_combined: `
    //     SELECT
    //         geometry_id,
    //         (
    //             CASE
    //                 WHEN planning_list_cat = 'Listed Building' and planning_list_grade = 'I' THEN 'Grade I Listed'
    //                 WHEN planning_list_cat = 'Listed Building' and planning_list_grade = 'II*' THEN 'Grade II* Listed'
    //                 WHEN planning_list_cat = 'Listed Building' and planning_list_grade = 'II' THEN 'Grade II Listed'
    //                 WHEN planning_in_local_list THEN 'Locally Listed'
    //                 ELSE 'None'
    //             END
    //         ) AS listing_type,
    //         planning_in_conservation_area
    //     FROM buildings
    //     WHERE
    //         planning_in_conservation_area
    //         OR planning_in_local_list
    //         OR planning_list_cat IS NOT NULL`,
    planning_combined: `
    SELECT
        geometry_id,
        inside_archaelogical_area,
        inside_energy_area,
        officially_preserved,
        monument_designation,
        officially_monument
    FROM buildings
    WHERE
        inside_archaelogical_area IS NOT NULL
        OR inside_energy_area IS NOT NULL
        OR officially_preserved IS NOT NULL 
        OR monument_designation IS NOT NULL
        OR officially_monument IS NOT NULL`,
    // conservation_area: `
    //     SELECT
    //         geometry_id
    //     FROM
    //         buildings
    //     WHERE
    //         planning_in_conservation_area = true`,           
    sust_dec: `
        SELECT
            geometry_id,
            sust_dec::text AS sust_dec
        FROM
            buildings
        WHERE
            sust_dec IS NOT NULL`,
    use: `
         SELECT
             geometry_id,
             CASE
                WHEN  current_landuse_floor = current_landuse_ground_floor THEN current_landuse_ground_floor
             ELSE 
                CASE
                    WHEN current_landuse_floor IS NOT NULL AND current_landuse_ground_floor IS NOT NULL THEN 20
                    ELSE null
                END
             END
  
             AS use
         FROM
             buildings
         WHERE
         current_landuse_ground_floor IS NOT NULL OR current_landuse_floor IS NOT NULL`,
    use_ground: `
                SELECT
                    geometry_id,
                    current_landuse_ground_floor
                FROM
                    buildings
                WHERE
                current_landuse_ground_floor IS NOT NULL`,
    use_floor: `
                SELECT
                    geometry_id,
                    current_landuse_floor
                FROM
                    buildings
                WHERE
                current_landuse_floor IS NOT NULL`,
    type_class: `
                SELECT
                    geometry_id,
                    type_class
                FROM
                    buildings
                WHERE
                type_class IS NOT NULL`,
    side_distances: `
                SELECT
                    geometry_id,
                    side_distances
                FROM
                    buildings
                WHERE
                side_distances IS NOT NULL`,
    sidewalk_width: `
                SELECT
                    geometry_id,
                    sidewalk_width
                FROM
                    buildings
                WHERE
                sidewalk_width IS NOT NULL`,
    noise_level: `
                SELECT
                    geometry_id,
                    noise_level
                FROM
                    buildings
                WHERE
                noise_level IS NOT NULL`,
    building_state: `
                SELECT
                    geometry_id,
                    building_state
                FROM
                    buildings
                WHERE
                building_state IS NOT NULL`,
    ownership_type: `
                SELECT
                    geometry_id,
                    ownership_type
                FROM
                    buildings
                WHERE
                ownership_type IS NOT NULL`,
    dynamics_demolished_count: `
        SELECT
            geometry_id,
            jsonb_array_length(demolished_buildings) as demolished_buildings_count,
            dynamics_has_demolished_buildings
        FROM
            buildings
        WHERE jsonb_array_length(demolished_buildings) > 0 OR dynamics_has_demolished_buildings = FALSE`,
};

const GEOMETRY_FIELD = 'geometry_geom';

function getBuildingLayerNames() {
    return Object.keys(LAYER_QUERIES);
}

function getAllLayerNames() {
    return ['highlight', ...getBuildingLayerNames()];
}

function getDataConfig(tileset: string): DataConfig {
    const table = LAYER_QUERIES[tileset];

    if (table == undefined) {
        throw new Error('Invalid tileset requested');
    }

    const query = `(
        SELECT
            d.*,
            g.geometry_geom
        FROM (
            ${table}
        ) AS d
        JOIN
            geometries AS g
        ON d.geometry_id = g.geometry_id
    ) AS data
    `;

    return {
        geometry_field: GEOMETRY_FIELD,
        table: query
    };
}

function getLayerVariables(tileset: string, dataParams: any): object {
    if (tileset == 'highlight') {
        let { highlight, base } = dataParams;

        highlight = strictParseInt(highlight);
        base = base || 'default';

        if (isNaN(highlight) || base.match(/^\w+$/) == undefined) {
            throw new Error('Bad parameters for highlight layer');
        }

        return {
            highlight,
            base_data_layer: base
        };
    }

    return {};
}

export {
    getBuildingLayerNames,
    getAllLayerNames,
    getDataConfig,
    getLayerVariables
};

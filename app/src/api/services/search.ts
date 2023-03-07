/**
 * Search table access
 * - to support navigation around the map
 * - some separation from building attributes - here we might use other points of interest
 *   or cues to broadly locate the user (postcode, borough name...)
 * - this DOES expose geometry, another reason to keep this clearly separated from building
 *   data
 */
import db from '../../db';

function queryLocation(term) {
    const limit = 5;
    term = term + '%';
    // return db.manyOrNone(
    //     `SELECT
    //         search_str, search_class, ST_AsGeoJSON(center), zoom,
    //         search_str <-> $1 AS dist
    //     FROM
    //         search_locations
    //     ORDER BY
    //         dist
    //     LIMIT $2;`,
    //     [term, limit]
    // ).catch((error) => {
    //     console.error(error);
    //     return undefined;
    // });

    return db.manyOrNone(
        `SELECT
        tk, ST_AsGeoJSON(ST_Envelope(ST_Transform(geom, 4326)))
    FROM
        tk where tk::text like $1
        group by tk, geom
        LIMIT $2;
  ;`,
        [term, limit]
    ).catch((error) => {
        console.error(error);
        return undefined;
    });
}

export {
    queryLocation
};

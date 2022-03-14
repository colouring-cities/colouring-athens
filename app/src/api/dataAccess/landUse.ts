import db from '../../db';

export async function getLandUseGroupFromClass(classes: string[]): Promise<string[]> {
    if (classes.length === 0) return [];

    return (await db.many(
        `
        SELECT DISTINCT parent.description
        FROM reference_tables.buildings_landuse_group AS parent
        JOIN reference_tables.buildings_landuse_class AS child
        ON child.parent_group_id = parent.landuse_id
        WHERE child.description IN ($1:csv)
        ORDER BY parent.description`,
        [classes]
    )).map(x => x.description);
}

export async function getLandUseOrderFromGroup(groups: string[]): Promise<string> {
    if(groups.length === 0) return null;

    const orders = (await db.many(
        `
        SELECT DISTINCT parent.description
        FROM reference_tables.buildings_landuse_order AS parent
        JOIN reference_tables.buildings_landuse_group AS child
        ON child.parent_order_id = parent.landuse_id
        WHERE child.description IN ($1:csv)
        ORDER BY parent.description
        `,
        [groups]
    )).map(x => x.description);

    if(orders.length === 1) {
        return orders[0];
    } else if (orders.length > 1) {
        return 'Mixed Use';
    } else return null;
}

export async function isLandUseGroupAllowed(group: string): Promise<boolean> {
    let groupResult = await db.oneOrNone(`
        SELECT landuse_id
        FROM reference_tables.buildings_landuse_group
        WHERE description = $1
        `, [group]
    );

    return (groupResult != undefined);
}


export async function getLandUse(classes: string[]): Promise<string[]> {
    if (classes.length === 0) return [];
    return (await db.many(
        `
        SELECT description_gr AS value
        FROM reference_tables.buildings_landuse_group`,
        [classes]
    )).map(x => x.description);
}

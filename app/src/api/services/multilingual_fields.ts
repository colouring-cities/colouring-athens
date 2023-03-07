import db from '../../db';

interface MultiLingualOption {
    // value: string;
    // label: string;
    language: string;
}


interface MultiLingualLabel {
    // label: string;
    // language: string;
}
// type GetMultiLingualOptionsFn = (language: string) => Promise<MultiLingualOption[]>;
type GetMultiLingualOptionsFn = (language: string) => Promise<MultiLingualOption[]>;

const multiLingualFunctionMap: { [fieldName: string]: GetMultiLingualOptionsFn } = {
    
    current_landuse_ground_floor: getLanduseOptions,
    current_landuse_floor: getLanduseOptions,

    type_class: getTypeOptions,
    side_distances: getSideDistancesOptions,

    year_built: getYearBuiltOptions,
    date_source: getDateSourceOptions,

    

    construction_core_material: getConstructionMaterialOptions,
    construction_roof_covering: getRoofOptions,
    construction_front_cover_material: getCoverMaterialOptions,
    construction_side_cover_material: getCoverMaterialOptions,

    noise_level: getNoiseLevelOptions,

    preservation_designation: getPreservationDesignationOptions,
    monument_designation: getMonumentDesignationOptions,

    // fek_issue: getFekIssueOptions,
    fek_issue_archaelogical: getFekIssueOptions,
    fek_issue_energy: getFekIssueOptions,
    fek_issue_protected: getFekIssueOptions,
    fek_issue_officially_preserved: getFekIssueOptions,
    fek_issue_officially_monument: getFekIssueOptions,

    building_state: getBuildingStateOptions,

    ownership_type: getOwnershipOptions,
};

type GetMultiLingualLabelFn = (id: number, language: string) => Promise<MultiLingualLabel>;

const multiLingualLabelFunctionMap: { [fieldName: string]: GetMultiLingualLabelFn } = {
    
    current_landuse_ground_floor: getLanduseLabel,
    current_landuse_floor: getLanduseLabel,

    type_class: getTypeLabel,
    side_distances: getSideDistancesLabel,

    year_built: getYearBuiltLabel,
    date_source: getDateSourceLabel,

    construction_core_material: getConstructionMaterialLabel,
    construction_roof_covering: getRoofLabel,
    construction_front_cover_material: getCoverMaterialLabel,
    construction_side_cover_material: getCoverMaterialLabel,

    noise_level: getNoiseLevelLabel,

    preservation_designation: getPreservationDesignationLabel,
    monument_designation: getMonumentDesignationLabel,

    fek_issue_archaelogical: getFekIssueLabel,
    fek_issue_energy: getFekIssueLabel,
    fek_issue_protected: getFekIssueLabel,
    fek_issue_officially_preserved: getFekIssueLabel,
    fek_issue_officially_monument: getFekIssueLabel,


    building_state: getBuildingStateLabel,

    ownership_type: getOwnershipLabel,
};


function getLanduseOptions(language: string = 'gr') {
    switch (language) {
        case 'gr':
            return db.manyOrNone(
                `SELECT
                    landuse_id AS value,
                    description_gr AS label
                FROM reference_tables.landuse_classifications`
            );
            break;
        default:
            return db.manyOrNone(
                `SELECT
                    landuse_id AS value,
                    description_en AS label
                FROM reference_tables.landuse_classifications`
            );
            break;
    }

}

function getTypeOptions(language: string = 'gr') {
    switch (language) {
        case 'gr':
            return db.manyOrNone(
                `SELECT
                    typec_id AS value,
                    description_gr AS label
                    FROM reference_tables.type_classifications`
            );
            break;
        default:
            return db.manyOrNone(
                `SELECT
                typec_id AS value,
                description_en AS label
                FROM reference_tables.type_classifications`
            );
            break;
    }

}
function getSideDistancesOptions(language: string = 'gr') {
    switch (language) {
        case 'gr':
            return db.manyOrNone(
                `SELECT
                side_distances_id AS value,
                    description_gr AS label
                    FROM reference_tables.side_distances_classifications`
            );
            break;
        default:
            return db.manyOrNone(
                `SELECT
                side_distances_id AS value,
                description_en AS label
                FROM reference_tables.side_distances_classifications`
            );
            break;
    }

}
function getYearBuiltOptions(language: string = 'gr') {

    


    switch (language) {
        case 'gr':
            return db.manyOrNone(
                `SELECT
                year_built_id AS value,
                    description_gr AS label
                    FROM reference_tables.year_built_classifications`
            );
            break;
        default:
            return db.manyOrNone(
                `SELECT
                year_built_id AS value,
                description_en AS label
                FROM reference_tables.year_built_classifications`
            );
            break;
    }

}
function getDateSourceOptions(language: string = 'gr') {
    switch (language) {
        case 'gr':
            return db.manyOrNone(
                `SELECT
                date_source_id AS value,
                    description_gr AS label
                    FROM reference_tables.date_source`
            );
            break;
        default:
            return db.manyOrNone(
                `SELECT
                date_source_id AS value,
                description_en AS label
                FROM reference_tables.date_source`
            );
            break;
    }

}
function getConstructionMaterialOptions(language: string = 'gr') {
    switch (language) {
        case 'gr':
            return db.manyOrNone(
                `SELECT
                construction_material_id AS value,
                    description_gr AS label
                    FROM reference_tables.construction_material_classifications`
            );
            break;
        default:
            return db.manyOrNone(
                `SELECT
                construction_material_id AS value,
                description_en AS label
                FROM reference_tables.construction_material_classifications`
            );
            break;
    }
}
function getRoofOptions(language: string = 'gr') {
    switch (language) {
        case 'gr':
            return db.manyOrNone(
                `SELECT
                roof_id AS value,
                    description_gr AS label
                    FROM reference_tables.roof_classifications`
            );
            break;
        default:
            return db.manyOrNone(
                `SELECT
                roof_id AS value,
                description_en AS label
                FROM reference_tables.roof_classifications`
            );
            break;
    }
}
function getCoverMaterialOptions(language: string = 'gr') {
    switch (language) {
        case 'gr':
            return db.manyOrNone(
                `SELECT
                cover_material_id AS value,
                    description_gr AS label
                    FROM reference_tables.cover_material_classifications`
            );
            break;
        default:
            return db.manyOrNone(
                `SELECT
                cover_material_id AS value,
                description_en AS label
                FROM reference_tables.cover_material_classifications`
            );
            break;
    }
}
function getNoiseLevelOptions(language: string = 'gr') {
    switch (language) {
        case 'gr':
            return db.manyOrNone(
                `SELECT
                noise_level_id AS value,
                    description_gr AS label
                    FROM reference_tables.noise_level_classifications`
            );
            break;
        default:
            return db.manyOrNone(
                `SELECT
                noise_level_id AS value,
                description_en AS label
                FROM reference_tables.noise_level_classifications`
            );
            break;
    }
}
function getFekIssueOptions(language: string = 'gr') {
    switch (language) {
        case 'gr':
            return db.manyOrNone(
                `SELECT
                fek_id AS value,
                    description_gr AS label
                    FROM reference_tables.fek_issue`
            );
            break;
        default:
            return db.manyOrNone(
                `SELECT
                fek_id AS value,
                description_en AS label
                FROM reference_tables.fek_issue`
            );
            break;
    }
}
function getPreservationDesignationOptions(language: string = 'gr') {
    switch (language) {
        case 'gr':
            return db.manyOrNone(
                `SELECT
                preservation_designation_id AS value,
                    description_gr AS label
                    FROM reference_tables.preservation_designation_classifications`
            );
            break;
        default:
            return db.manyOrNone(
                `SELECT
                preservation_designation_id AS value,
                description_en AS label
                FROM reference_tables.preservation_designation_classifications`
            );
            break;
    }
}
function getMonumentDesignationOptions(language: string = 'gr') {
    switch (language) {
        case 'gr':
            return db.manyOrNone(
                `SELECT
                monument_designation_id AS value,
                    description_gr AS label
                    FROM reference_tables.monument_designation_classifications`
            );
            break;
        default:
            return db.manyOrNone(
                `SELECT
                monument_designation_id AS value,
                description_en AS label
                FROM reference_tables.monument_designation_classifications`
            );
            break;
    }
}
function getBuildingStateOptions(language: string = 'gr') {
    switch (language) {
        case 'gr':
            return db.manyOrNone(
                `SELECT
                building_state_id AS value,
                    description_gr AS label
                    FROM reference_tables.building_state_classifications`
            );
            break;
        default:
            return db.manyOrNone(
                `SELECT
                building_state_id AS value,
                description_en AS label
                FROM reference_tables.building_state_classifications`
            );
            break;
    }
}
function getOwnershipOptions(language: string = 'gr') {
    switch (language) {
        case 'gr':
            return db.manyOrNone(
                `SELECT
                ownership_id AS value,
                    description_gr AS label
                    FROM reference_tables.ownership_classifications`
            );
            break;
        default:
            return db.manyOrNone(
                `SELECT
                ownership_id AS value,
                description_en AS label
                FROM reference_tables.ownership_classifications`
            );
            break;
    }
}




function getLanduseLabel(id: number, language: string = 'gr') {
    switch (language) {
        case 'gr':
            return db.manyOrNone(
                `SELECT
                    description_gr AS label
                FROM reference_tables.landuse_classifications 
                WHERE landuse_id = $1`, [id]
            );
            break;

        default:
            return db.manyOrNone(
                `SELECT
                    description_en AS label
                FROM reference_tables.landuse_classifications 
                WHERE landuse_id = $1`, [id]
            );
            break;
    }
}

function getTypeLabel(id: number, language: string = 'gr') {
    switch (language) {
        case 'gr':
            return db.manyOrNone(
                `SELECT
                    description_gr AS label
                FROM reference_tables.type_classifications 
                WHERE typec_id = $1`, [id]
            );
            break;

        default:
            return db.manyOrNone(
                `SELECT
                    description_en AS label
                FROM reference_tables.type_classifications 
                WHERE typec_id = $1`, [id]
            );
            break;
    }
}
function getSideDistancesLabel(id: number, language: string = 'gr') {
    switch (language) {
        case 'gr':
            return db.manyOrNone(
                `SELECT
                    description_gr AS label
                FROM reference_tables.side_distances_classifications 
                WHERE side_distances_id = $1`, [id]
            );
            break;

        default:
            return db.manyOrNone(
                `SELECT
                    description_en AS label
                FROM reference_tables.side_distances_classifications 
                WHERE side_distances_id = $1`, [id]
            );
            break;
    }
}
function getYearBuiltLabel(id: number, language: string = 'gr') {
    switch (language) {
        case 'gr':
            return db.manyOrNone(
                `SELECT
                    description_gr AS label
                FROM reference_tables.year_built_classifications 
                WHERE year_built_id = $1`, [id]
            );
            break;

        default:
            return db.manyOrNone(
                `SELECT
                    description_en AS label
                FROM reference_tables.year_built_classifications 
                WHERE year_built_id = $1`, [id]
            );
            break;
    }
}
function getDateSourceLabel(id: number, language: string = 'gr') {
    switch (language) {
        case 'gr':
            return db.manyOrNone(
                `SELECT
                    description_gr AS label
                FROM reference_tables.date_source 
                WHERE date_source_id = $1`, [id]
            );
            break;

        default:
            return db.manyOrNone(
                `SELECT
                    description_en AS label
                FROM reference_tables.date_source 
                WHERE date_source_id = $1`, [id]
            );
            break;
    }
}
function getConstructionMaterialLabel(id: number, language: string = 'gr') {
    switch (language) {
        case 'gr':
            return db.manyOrNone(
                `SELECT
                    description_gr AS label
                FROM reference_tables.construction_material_classifications
                WHERE construction_material_id = $1`, [id]
            );
            break;

        default:
            return db.manyOrNone(
                `SELECT
                    description_en AS label
                FROM reference_tables.construction_material_classifications 
                WHERE construction_material_id = $1`, [id]
            );
            break;
    }
}
function getRoofLabel(id: number, language: string = 'gr') {
    switch (language) {
        case 'gr':
            return db.manyOrNone(
                `SELECT
                    description_gr AS label
                FROM reference_tables.roof_classifications
                WHERE roof_id = $1`, [id]
            );
            break;

        default:
            return db.manyOrNone(
                `SELECT
                    description_en AS label
                FROM reference_tables.roof_classifications 
                WHERE roof_id = $1`, [id]
            );
            break;
    }
}
function getCoverMaterialLabel(id: number, language: string = 'gr') {
    switch (language) {
        case 'gr':
            return db.manyOrNone(
                `SELECT
                    description_gr AS label
                FROM reference_tables.cover_material_classifications
                WHERE cover_material_id = $1`, [id]
            );
            break;

        default:
            return db.manyOrNone(
                `SELECT
                    description_en AS label
                FROM reference_tables.cover_material_classifications 
                WHERE cover_material_id = $1`, [id]
            );
            break;
    }
}
function getNoiseLevelLabel(id: number, language: string = 'gr') {
    switch (language) {
        case 'gr':
            return db.manyOrNone(
                `SELECT
                    description_gr AS label
                FROM reference_tables.noise_level_classifications
                WHERE noise_level_id = $1`, [id]
            );
            break;

        default:
            return db.manyOrNone(
                `SELECT
                    description_en AS label
                FROM reference_tables.noise_level_classifications 
                WHERE noise_level_id = $1`, [id]
            );
            break;
    }
}
function getFekIssueLabel(id: number, language: string = 'gr') {
    switch (language) {
        case 'gr':
            return db.manyOrNone(
                `SELECT
                    description_gr AS label
                FROM reference_tables.fek_issue
                WHERE fek_id = $1`, [id]
            );
            break;

        default:
            return db.manyOrNone(
                `SELECT
                    description_en AS label
                FROM reference_tables.fek_issue 
                WHERE fek_id = $1`, [id]
            );
            break;
    }
}
function getPreservationDesignationLabel(id: number, language: string = 'gr') {
    switch (language) {
        case 'gr':
            return db.manyOrNone(
                `SELECT
                    description_gr AS label
                FROM reference_tables.preservation_designation_classifications
                WHERE preservation_designation_id = $1`, [id]
            );
            break;

        default:
            return db.manyOrNone(
                `SELECT
                    description_en AS label
                FROM reference_tables.preservation_designation_classifications 
                WHERE preservation_designation_id = $1`, [id]
            );
            break;
    }
}
function getMonumentDesignationLabel(id: number, language: string = 'gr') {
    switch (language) {
        case 'gr':
            return db.manyOrNone(
                `SELECT
                    description_gr AS label
                FROM reference_tables.monument_designation_classifications
                WHERE monument_designation_id = $1`, [id]
            );
            break;

        default:
            return db.manyOrNone(
                `SELECT
                    description_en AS label
                FROM reference_tables.monument_designation_classifications 
                WHERE monument_designation_id = $1`, [id]
            );
            break;
    }
}
function getBuildingStateLabel(id: number, language: string = 'gr') {
    switch (language) {
        case 'gr':
            return db.manyOrNone(
                `SELECT
                    description_gr AS label
                FROM reference_tables.building_state_classifications
                WHERE building_state_id = $1`, [id]
            );
            break;

        default:
            return db.manyOrNone(
                `SELECT
                    description_en AS label
                FROM reference_tables.building_state_classifications 
                WHERE building_state_id = $1`, [id]
            );
            break;
    }
}
function getOwnershipLabel(id: number, language: string = 'gr') {
    switch (language) {
        case 'gr':
            return db.manyOrNone(
                `SELECT
                    description_gr AS label
                FROM reference_tables.ownership_classifications
                WHERE ownership_id = $1`, [id]
            );
            break;

        default:
            return db.manyOrNone(
                `SELECT
                    description_en AS label
                FROM reference_tables.ownership_classifications 
                WHERE ownership_id = $1`, [id]
            );
            break;
    }
}


export function getMultiLingualOptions(fieldName: string, language: string) {
    const optionsFn = multiLingualFunctionMap[fieldName];

    if (optionsFn == undefined) {
        throw new Error(`multilingual options not available for field '${fieldName}'`);
    }

    return optionsFn(language);
}


export function getMultiLingualLabel(fieldName: string, id: number, language: string) {
    const labelFn = multiLingualLabelFunctionMap[fieldName];

    if (labelFn == undefined) {
        throw new Error(`Error`);
    }

    return labelFn(id, language);
}

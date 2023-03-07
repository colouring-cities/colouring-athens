import { valueType } from '../../helpers';

/** Configuration for a single data field */
export interface DataFieldConfig {

    /**
     * Default: false
     */
    perUser?: boolean;

    /**
     * Allow editing the field through the API?
     */
    edit: boolean;

    /**
     * Should the editing of the field be allowed - but only when
     * the change is a result of an edit of another field, from which this field is derived.
     * Example: editing Land Use Group modifies Land Use Order, too, because LU Order is automatically derived from LU Group.
     * But Land Use Order itself cannot be modified directly by users.
     * Default: false
     */
    derivedEdit?: boolean;

    /**
     * Allow verifying the field value?
     * Default: false;
     */
    verify?: boolean;

    /**
     * Should the update value be formatted as JSON text?
     * E.g. if the database column is of type json, the object coming from
     * the HTTP request body needs to be formatted as json by pg-promise
     * See more on formatting here https://vitaly-t.github.io/pg-promise/formatting.html#.format
     * Default: false
     */
    asJson?: boolean;

    /**
     * Should the formatted value be cast to a different type when inserting to db?
     * Useful when the JS object from request needs to be mapped to a Postgres-specific column
     * E.g. can map a complex object to jsonb (need to format it as text json, too, with the asJson option above)
     * (Add more options here as they become necessary)
     * Default: undefined
     */
    sqlCast?: 'json' | 'jsonb';
}

export const buildingAttributesConfig = valueType<DataFieldConfig>()({ /* eslint-disable @typescript-eslint/camelcase */
    ref_elstat_id: {
        edit: false
    },
    ref_osm_id: {
        edit: false,
    },
    location_name: {
        edit: false,
        verify: true,
    },
    location_number: {
        edit: true,
        verify: true,
    },
    location_street: {
        edit: false,
        verify: true,
    },
    location_line_two: {
        edit: false,
    },
    location_town: {
        edit: false,
    },
    location_postcode: {
        edit: false,
    },
    location_latitude: {
        edit: true,
    },
    location_longitude: {
        edit: true,
    },

    current_landuse_ground_floor: {
        edit: true,
        verify: true,
    },

    current_landuse_floor: {
        edit: true,
        verify: true,
    },


    type_class: {
        edit: true,
        verify: true,
    },

    side_distances: {
        edit: true,
        verify: true,
    },

    date_year: {
        edit: true,
        verify: true,
    },

    year_built: {
        edit: true,
        verify: true,
    },
    reconstruction_year: {
        edit: true,
        verify: true,
    },

    date_source: {
        edit: true,
    },

    date_source_link: {
        edit: true,
    },

  
    size_storeys_core: {
        edit: true,
        verify: true,
    },
    size_storeys_basement: {
        edit: true,
        verify: true,
    },
    size_height_apex: {
        edit: true,
        verify: true,
    },
    size_floor_area_ground: {
        edit: true,
    },
    size_floor_area_total: {
        edit: true,
    },
    size_width_frontage: {
        edit: true,
    },
    pilotis: {
        edit: true,
        verify: true,
    },
    high_ground_floor: {
        edit: true,
        verify: true,
    },
 
    construction_core_material: {
        edit: true,
        verify: true,
    },
    construction_roof_covering: {
        edit: true,
        verify: true,
    },
    construction_front_cover_material: {
        edit: true,
        verify: true,
    },
    construction_side_cover_material: {
        edit: true,
        verify: true,
    },

    has_sidewalk: {
        edit: true,
        verify: true,
    },

    sidewalk_width: {
        edit: true,
        verify: true,
    },

    road_width: {
        edit: true,
        verify: true,
    },

    sidewalk_accessibility: {
        edit: true,
        verify: true,
    },

    sidewalk_lawn: {
        edit: true,
        verify: true,
    },

    sidewalk_trees: {
        edit: true,
        verify: true,
    },

    noise_level: {
        edit: true,
        verify: true,
    },

    has_pavement: {
        edit: true,
        verify: true,
    },

    has_cycling_track: {
        edit: true,
        verify: true,
    },

    has_parodia_stoa: {
        edit: true,
        verify: true,
    },

    has_egkarsia_stoa: {
        edit: true,
        verify: true,
    },

    allowed_far: {
        edit: true,
        verify: true,
    },
    allowed_plot_coverage: {
        edit: true,
        verify: true,
    },
    maximum_building_height: {
        edit: true,
        verify: true,
    },


    inside_archaelogical_area: {
        edit: true,
        verify: true,
    },
    name_of_archaelogical_area: {
        edit: false,
    },
    fek_issue_archaelogical: {
        edit: true,
        verify: true,
    },
    fek_number_archaelogical: {
        edit: true,
        verify: true,
    },
    fek_date_archaelogical: {
        edit: true,
        verify: true,
    },

    inside_energy_area: {
        edit: true,
        verify: true,
    },
    name_of_energy_area: {
        edit: false,
    },
    fek_issue_energy: {
        edit: true,
        verify: true,
    },
    fek_number_energy: {
        edit: true,
        verify: true,
    },
    fek_date_energy: {
        edit: true,
        verify: true,
    },


    inside_protected_area: {
        edit: true,
        verify: true,
    },
    name_of_protected_area: {
        edit: false,
    },
    fek_issue_protected: {
        edit: true,
        verify: true,
    },
    fek_number_protected: {
        edit: true,
        verify: true,
    },
    fek_date_protected: {
        edit: true,
        verify: true,
    },

    officially_preserved: {
        edit: true,
        verify: true,
    },
    preservation_designation: {
        edit: true,
        verify: true,
    },
    name_of_officially_preserved_building: {
        edit: false,
    },
    fek_issue_officially_preserved: {
        edit: true,
        verify: true,
    },
    fek_number_officially_preserved: {
        edit: true,
        verify: true,
    },
    fek_date_officially_preserved: {
        edit: true,
        verify: true,
    },

    officially_monument: {
        edit: true,
        verify: true,
    },
    monument_designation: {
        edit: true,
        verify: true,
    },
    name_of_officially_monument_building: {
        edit: false,
    },
    fek_issue_officially_monument: {
        edit: true,
        verify: true,
    },
    fek_number_officially_monument: {
        edit: true,
        verify: true,
    },
    fek_date_officially_monument: {
        edit: true,
        verify: true,
    },

    // fek_issue: {
    //     edit: true,
    // },

    has_photovoltaic_panels: {
        edit: true,
    },

    building_state: {
        edit: true,
    },

    visible_collapse_risk: {
        edit: true,
    },

    dynamics_has_demolished_buildings: {
        edit: true,
        verify: true
    },

    demolished_buildings: {
        edit: true,
        verify: false,
        asJson: true,
        sqlCast: 'jsonb',
    },

    ownership_type: {
        edit: true,
        verify: true
    },

    likes_total: {
        edit: false,
        derivedEdit: true,
        verify: false
    },
    community_local_significance_total: {
        edit: false,
        derivedEdit: true,
        verify: false
    },
    community_activities: {
        edit: true,
        verify: false
    },
    community_public_ownership: {
        edit: true,
        verify: true
    },
    community_public_ownership_sources: {
        edit: true,
        verify: false
    }

});


export const buildingUserAttributesConfig = valueType<DataFieldConfig>()({
    community_like: {
        perUser: true,
        edit: true,
        verify: false,
    },
    community_type_worth_keeping: {
        perUser: true,
        edit: true,
        verify: false
    },
    community_type_worth_keeping_reasons: {
        perUser: true,
        edit: true,
        verify: false
    },
    community_local_significance: {
        perUser: true,
        edit: true,
        verify: false
    }
});

export const allAttributesConfig = Object.assign({}, buildingAttributesConfig, buildingUserAttributesConfig);

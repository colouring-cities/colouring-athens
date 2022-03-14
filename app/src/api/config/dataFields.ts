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
        edit: true,
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
    },

    side_distances: {
        edit: true,
    },

    year_built: {
        edit: true,
    },
    date_source: {
        edit: true,
    },

    construction_core_material: {
        edit: true,
    },
    construction_roof_covering: {
        edit: true,
    },
    construction_front_cover_materials: {
        edit: true,
    },
    construction_side_cover_materials: {
        edit: true,
    },

    noise_level: {
        edit: true,
    },

    preservation_designation: {
        edit: true,
    },
    monument_designation: {
        edit: true,
    },

    fek_issue: {
        edit: true,
    },
    building_state: {
        edit: true,
    },

    ownership_type: {
        edit: true,
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

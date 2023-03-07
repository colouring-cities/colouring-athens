/**
 * This file defines all the valid tileset names that can be obtained from the tilserver.
 * Adjust the values here if modifying the list of styles in the tileserver.
 */

export type BuildingMapTileset = 
    'year_built' |
    'size_storeys_core' |
    'size_height' |
    'construction_core_material' |
    'location' |
    'likes' |
    'community_local_significance_total' |
    // 'community_in_public_ownership' |
    'planning_combined' |
    'inside_archaelogical_area' |
    'sust_dec' |
    // 'building_attachment_form' |
    'type_class' |
    'side_distances' |
    'sidewalk_width' |
    'noise_level' |
    'ownership_type' | 
    'building_state' | 
    'use' |
    'use_ground' |
    'use_floor' |
    'dynamics_demolished_count';

export type SpecialMapTileset = 'base_light' | 'base_night' | 'highlight' | 'number_labels';

export type MapTileset = BuildingMapTileset | SpecialMapTileset;

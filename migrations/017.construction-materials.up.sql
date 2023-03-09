-- Core Construction Material
ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS construction_core_material integer,
ADD
    FOREIGN KEY (construction_core_material) REFERENCES reference_tables.construction_material_classifications (construction_material_id);

-- Cover Materials
ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS construction_front_cover_material integer,
ADD
    FOREIGN KEY (construction_front_cover_material) REFERENCES reference_tables.cover_material_classifications (cover_material_id);

ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS construction_side_cover_material integer,
ADD
    FOREIGN KEY (construction_side_cover_material) REFERENCES reference_tables.cover_material_classifications (cover_material_id);

-- Main Roof Covering
ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS construction_roof_covering integer,
ADD
    FOREIGN KEY (construction_roof_covering) REFERENCES reference_tables.roof_classifications (roof_id);
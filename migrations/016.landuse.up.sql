-- Create use and fields

ALTER TABLE buildings
  ADD COLUMN IF NOT EXISTS current_landuse_ground_floor integer,
  ADD FOREIGN KEY (current_landuse_ground_floor)
  REFERENCES reference_tables.landuse_classifications (landuse_id);


ALTER TABLE buildings
  ADD COLUMN IF NOT EXISTS current_landuse_floor integer,
  ADD FOREIGN KEY (current_landuse_floor)
  REFERENCES reference_tables.landuse_classifications (landuse_id);



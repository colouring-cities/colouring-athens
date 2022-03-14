-- Drop location fields

ALTER TABLE buildings DROP COLUMN IF EXISTS location_name;
ALTER TABLE buildings DROP COLUMN IF EXISTS location_number;
ALTER TABLE buildings DROP COLUMN IF EXISTS location_street;
ALTER TABLE buildings DROP COLUMN IF EXISTS location_line_two;
ALTER TABLE buildings DROP COLUMN IF EXISTS location_town;
ALTER TABLE buildings DROP COLUMN IF EXISTS location_postcode;

ALTER TABLE buildings DROP COLUMN IF EXISTS location_latitude;
ALTER TABLE buildings DROP COLUMN IF EXISTS location_longitude;

-- Drop date fields

ALTER TABLE buildings DROP COLUMN IF EXISTS year_built;
ALTER TABLE buildings DROP COLUMN IF EXISTS reconstruction_year;
ALTER TABLE buildings DROP COLUMN IF EXISTS date_source;
ALTER TABLE buildings DROP COLUMN IF EXISTS date_source_detail;

-- Drop size fields
ALTER TABLE buildings DROP COLUMN IF EXISTS size_storeys_core;
ALTER TABLE buildings DROP COLUMN IF EXISTS size_storeys_basement;
ALTER TABLE buildings DROP COLUMN IF EXISTS pilotis;
ALTER TABLE buildings DROP COLUMN IF EXISTS high_ground_floor;

ALTER TABLE buildings DROP COLUMN IF EXISTS size_height_apex;
ALTER TABLE buildings DROP COLUMN IF EXISTS size_floor_area_ground;
ALTER TABLE buildings DROP COLUMN IF EXISTS size_floor_area_total;
ALTER TABLE buildings DROP COLUMN IF EXISTS size_width_frontage;

-- Drop like-me fields
DROP TABLE IF EXISTS building_user_likes;
ALTER TABLE buildings DROP COLUMN IF EXISTS likes_total;

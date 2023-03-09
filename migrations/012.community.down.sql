-- Remove community fields

-- Ownership type, enumerate type from:
ALTER TABLE buildings DROP COLUMN IF EXISTS ownership_type;

-- Ownerhsip perception, would you describe this as a community asset?
-- Boolean yes / no
ALTER TABLE buildings DROP COLUMN IF EXISTS ownership_perception;

-- Historic ownership type / perception
-- Has this building ever been used for community or public services activities?
-- Boolean yes / no
ALTER TABLE buildings DROP COLUMN IF EXISTS ownership_historic;

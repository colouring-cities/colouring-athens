ALTER TABLE
    buildings DROP COLUMN IF EXISTS energy_class;

ALTER TABLE
    buildings DROP COLUMN IF EXISTS has_photovoltaic_panels;

ALTER TABLE
    buildings DROP COLUMN IF EXISTS building_state;

ALTER TABLE
    buildings DROP COLUMN IF EXISTS visible_collapse_risk;
CREATE TYPE energy_class
AS ENUM ('A+',
    'A',
    'B+',
    'B',
    'Γ',
    'Δ',
    'Ε',
    'Ζ',
    'Η');

ALTER TABLE buildings
    ADD COLUMN IF NOT EXISTS energy_class;

-- photovoltaic panels
ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS has_photovoltaic_panels boolean DEFAULT 'n';

-- building state

ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS building_state integer,
ADD
    FOREIGN KEY (building_state) REFERENCES reference_tables.building_state_classifications (building_state_id);

-- visible collapse risk
ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS visible_collapse_risk boolean DEFAULT 'n';
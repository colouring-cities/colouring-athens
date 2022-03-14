--sidewalk
ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS has_sidewalk boolean DEFAULT 'n';

ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS sidewalk_width real;

ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS road_width real;

ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS sidewalk_accessibility boolean DEFAULT 'n';

ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS sidewalk_lawn boolean DEFAULT 'n';

ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS sidewalk_trees boolean DEFAULT 'n';

ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS noise_level integer,
ADD
    FOREIGN KEY (noise_level) REFERENCES reference_tables.noise_level_classifications (noise_level_id);

ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS has_pavement boolean DEFAULT 'n';

ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS has_cycling_track boolean DEFAULT 'n';

ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS has_parodia_stoa boolean DEFAULT 'n';

ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS has_egkarsia_stoa boolean DEFAULT 'n';


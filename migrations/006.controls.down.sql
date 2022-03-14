ALTER TABLE
    buildings DROP COLUMN IF EXISTS inside_protected_area;

ALTER TABLE
    buildings DROP COLUMN IF EXISTS inside_archaelogical_area;

ALTER TABLE
    buildings DROP COLUMN IF EXISTS inside_energy_area;

ALTER TABLE
    buildings DROP COLUMN IF EXISTS officially_protected;

ALTER TABLE
    buildings DROP COLUMN IF EXISTS officially_preserved;

ALTER TABLE
    buildings DROP COLUMN IF EXISTS preservation_designation;

ALTER TABLE
    buildings DROP COLUMN IF EXISTS officially_monument;

ALTER TABLE
    buildings DROP COLUMN IF EXISTS monument_designation;

ALTER TABLE
    buildings DROP COLUMN IF EXISTS fek_issue;

ALTER TABLE
    buildings DROP COLUMN IF EXISTS fek_number;

ALTER TABLE
    buildings DROP COLUMN IF EXISTS fek_date;
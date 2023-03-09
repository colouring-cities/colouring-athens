-- inside protected area
ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS inside_protected_area boolean DEFAULT 'n';

-- inside archaelogical area
ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS inside_archaelogical_area boolean DEFAULT 'n';

-- inside energy area
ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS inside_energy_area boolean DEFAULT 'n';


--officially protected
ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS officially_protected boolean DEFAULT 'n';

--officially preserved
ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS officially_preserved boolean DEFAULT 'n';


ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS preservation_designation integer,
ADD
    FOREIGN KEY (preservation_designation) REFERENCES reference_tables.preservation_designation_classifications (preservation_designation_id);


--officially monument
ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS officially_monument boolean DEFAULT 'n';


ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS monument_designation integer,
ADD
    FOREIGN KEY (monument_designation) REFERENCES reference_tables.monument_designation_classifications (monument_designation_id);


ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS fek_issue integer,
ADD
    FOREIGN KEY (fek_issue) REFERENCES reference_tables.fek_issue (fek_id);


ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS fek_number numeric(4,0);


ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS fek_date date;


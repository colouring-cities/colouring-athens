--For multilingual fields
CREATE SCHEMA IF NOT EXISTS reference_tables;

--Then create the tables
CREATE TABLE IF NOT EXISTS reference_tables.landuse_classifications (
        landuse_id serial PRIMARY KEY,
        description_en VARCHAR(128) NOT NULL,
        description_gr VARCHAR(128) NOT NULL
);

CREATE TABLE IF NOT EXISTS reference_tables.type_classifications (
        typec_id serial PRIMARY KEY,
        description_en VARCHAR(128) NOT NULL,
        description_gr VARCHAR(128) NOT NULL
);

CREATE TABLE IF NOT EXISTS reference_tables.side_distances_classifications (
        side_distances_id serial PRIMARY KEY,
        description_en VARCHAR(128) NOT NULL,
        description_gr VARCHAR(128) NOT NULL
);

CREATE TABLE IF NOT EXISTS reference_tables.year_built_classifications (
        year_built_id serial PRIMARY KEY,
        description_en VARCHAR(128) NOT NULL,
        description_gr VARCHAR(128) NOT NULL
);

CREATE TABLE IF NOT EXISTS reference_tables.date_source (
        date_source_id serial PRIMARY KEY,
        description_en VARCHAR(128) NOT NULL,
        description_gr VARCHAR(128) NOT NULL
);

CREATE TABLE IF NOT EXISTS reference_tables.construction_material_classifications (
        construction_material_id serial PRIMARY KEY,
        description_en VARCHAR(128) NOT NULL,
        description_gr VARCHAR(128) NOT NULL
);

CREATE TABLE IF NOT EXISTS reference_tables.roof_classifications (
        roof_id serial PRIMARY KEY,
        description_en VARCHAR(128) NOT NULL,
        description_gr VARCHAR(128) NOT NULL
);

CREATE TABLE IF NOT EXISTS reference_tables.cover_material_classifications (
        cover_material_id serial PRIMARY KEY,
        description_en VARCHAR(128) NOT NULL,
        description_gr VARCHAR(128) NOT NULL
);

CREATE TABLE IF NOT EXISTS reference_tables.noise_level_classifications (
        noise_level_id serial PRIMARY KEY,
        description_en VARCHAR(128) NOT NULL,
        description_gr VARCHAR(128) NOT NULL
);

CREATE TABLE IF NOT EXISTS reference_tables.fek_issue (
        fek_id serial PRIMARY KEY,
        description_en VARCHAR(128) NOT NULL,
        description_gr VARCHAR(128) NOT NULL
);

CREATE TABLE IF NOT EXISTS reference_tables.preservation_designation_classifications (
        preservation_designation_id serial PRIMARY KEY,
        description_en VARCHAR(128) NOT NULL,
        description_gr VARCHAR(128) NOT NULL
);

CREATE TABLE IF NOT EXISTS reference_tables.monument_designation_classifications (
        monument_designation_id serial PRIMARY KEY,
        description_en VARCHAR(128) NOT NULL,
        description_gr VARCHAR(128) NOT NULL
);

CREATE TABLE IF NOT EXISTS reference_tables.building_state_classifications (
        building_state_id serial PRIMARY KEY,
        description_en VARCHAR(128) NOT NULL,
        description_gr VARCHAR(128) NOT NULL
);

CREATE TABLE IF NOT EXISTS reference_tables.ownership_classifications (
        ownership_id serial PRIMARY KEY,
        description_en VARCHAR(128) NOT NULL,
        description_gr VARCHAR(128) NOT NULL
);



--populate with data

INSERT INTO reference_tables.landuse_classifications
(description_en, description_gr)
VALUES
('Residential', 'Κατοικία'),
('Small industries & Workshops','Βιοτεχνία, Εργαστήρια & Συνεργεία'),
('Industry','Βιομηχανία'),
('Wholesale & Warehouses','Χονδρεμπόριο & Αποθήκες'),
('Retail','Λιανικό εμπόριο'),
('Catering & Leisure','Εστίαση & Αναψυχή'),
('Sports','Αθλητισμός'),
('Personal services','Προσωπικές υπηρεσίες'),
('Administration, Offices & Services','Διοίκηση, Γραφεία & Υπηρεσίες'),
('Education','Εκπαίδευση'),
('Health & Welfare','Υγεία & Πρόνοια'),
('Culture','Πολιτισμός'),
('Under construction','Υπό ανέγερση'),
('Unused','Χωρίς χρήση'),
('Parking','Στάθμευση'),
('Church & Worship spaces','Εκκλησία & Χώροι λατρείας'),
('Transportation','Μεταφορές'),
('Infrastructure facilities','Εγκαταστάσεις υποδομών'),
('Other','Λοιπές χρήσεις'),
('Mixed use','Μικτή χρήση');


INSERT INTO reference_tables.type_classifications
(description_en, description_gr)
VALUES
('Single-family home', 'Μονοκατοικία'),
('Duplex', 'Διπλοκατοικία'),
('Apartment building','Πολυκατοικία'),
('Office building','Κτίριο γραφείων'),
('Commercial building','Εμπορικό ακίνητο'),
('Other','Άλλο');


INSERT INTO reference_tables.side_distances_classifications
(description_en, description_gr)
VALUES
('Detached from all side neighboring buildings','Σε απόσταση από όλα τα πλαϊνά γειτονικά κτίρια'),
('Attached to all side neighboring buildings','Σε επαφή με τα πλαϊνά γειτονικά κτίρια'),
('Attached to some and detached from others side neighboring buildings','Σε επαφή με κάποια και σε απόσταση από άλλα πλαϊνά γειτονικά κτίρια');


INSERT INTO reference_tables.year_built_classifications
(description_en, description_gr)
VALUES
('Before 1920', 'Προ 1920'),
('1920-1955', '1920-1955'),
('1955-1985','1955-1985'),
('1985-2010','1985-2010'),
('After 2010','Μετά το 2010');


INSERT INTO reference_tables.date_source
(description_en, description_gr)
VALUES
('Expert estimate/knowledge of building', 'Γνώση/γνωμάτευση ειδικού για το κτίριο'),
('Historical document', 'Ιστορικό έγγραφο'),
('Historical map','Ιστορικός χάρτης'),
('Other document/publication','Άλλο έγγραφο/δημοσίευση'),
('Online database','Διαδικτυακή βάση δεδομένων'),
('Film/video','Ταινία/βίντεο'),
('Other website','Άλλη ιστοσελίδα'),
('Other','Άλλο');


INSERT INTO reference_tables.construction_material_classifications
(description_en, description_gr)
VALUES
('Reinforced concrete', 'Οπλισμένο σκυρόδεμα'),
('Stone', 'Λιθόκτιστο'),
('Brick','Πλινθόκτιστο'),
('Metal structure','Μεταλλική κατασκευή'),
('Wood','Ξύλινη κατασκευή'),
('Mixed','Σύμμικτη κατασκευή');


INSERT INTO reference_tables.roof_classifications
(description_en, description_gr)
VALUES
('Flat roof', 'Οριζόντιο δώμα'),
('Sloping roof', 'Κεκλιμένη στέγη');


INSERT INTO reference_tables.cover_material_classifications
(description_en, description_gr)
VALUES
('Light-coloured plaster', 'Σοβάς ανοιχτού χρώματος'),
('Dark-coloured plaster', 'Σοβάς σκούρου χρώματος'),
('Glass curtain or other reflective surface','Υαλοπέτασμα ή άλλη ανακλαστική επιφάνεια'),
('Metal panel','Μεταλλικό πανέλο'),
('Stone','Πέτρα'),
('Green planted facade','Πράσινη φυτεμένη όψη'),
('Other','Άλλο');

INSERT INTO reference_tables.noise_level_classifications
(description_en, description_gr)
VALUES
('Low', 'Χαμηλό'),
('Moderate', 'Μέτριο'),
('High','Υψηλό'),
('Too high','Πολύ υψηλό');


INSERT INTO reference_tables.fek_issue
(description_en, description_gr)
VALUES
('ΑΑΠ', 'ΑΑΠ'),
('Α', 'Α'),
('Β','Β'),
('Γ','Γ'),
('Δ','Δ');


INSERT INTO reference_tables.preservation_designation_classifications
(description_en, description_gr)
VALUES
('Listed building or listed part of a building', 'Διατηρητέο κτίριο ή διατηρητέο τμήμα κτιρίου'),
('Listed use or name of building', 'Διατηρητέα χρήση, όνομα ή επωνυμία κτιρίου'),
('Listed building complex','Διατηρητέο συγκρότημα κτιρίων');

INSERT INTO reference_tables.monument_designation_classifications
(description_en, description_gr)
VALUES
('Ancient monument', 'Αρχαίο μνημείο'),
('Newer monument built before the last hundred years', 'Νεότερο μνημείο προγενέστερο των εκάστοτε τελευταίων εκατό ετών'),
('Newer monument built within the last hundred years','Νεότερο μνημείο μεταγενέστερο των εκάστοτε τελευταίων εκατό ετών');


INSERT INTO reference_tables.building_state_classifications
(description_en, description_gr)
VALUES
('Good', 'Καλή'),
('Moderate', 'Μέτρια'),
('Bad','Κακή'),
('Ruin','Ερείπιο');


INSERT INTO reference_tables.ownership_classifications
(description_en, description_gr)
VALUES
('Owned by central government', 'Ιδιοκτησίας δημοσίου'),
('Owned by local government', 'Ιδιοκτησίας Ο.Τ.Α.'),
('Owned by nonprofit body','Ιδιοκτησίας μη κερδοσκοπικού φορέα'),
('Private ownership','Ιδιωτικό');


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
('House', 'Κατοικία'),
('Βιοτεχνία, επαγγελματικά εργαστήρια, συνεργείο','Βιοτεχνία, επαγγελματικά εργαστήρια, συνεργείο'),
('Βιομηχανία','Βιομηχανία'),
('Χονδρεμπόριο, αποθήκες','Χονδρεμπόριο, αποθήκες'),
('Λιανικό εμπόριο','Λιανικό εμπόριο'),
('Εστίαση, αναψυχή','Εστίαση, αναψυχή'),
('Αθλητισμός','Αθλητισμός'),
('Προσωπικές υπηρεσίες','Προσωπικές υπηρεσίες'),
('Διοίκηση, γραφεία, υπηρεσίες','Διοίκηση, γραφεία, υπηρεσίες'),
('Εκπαίδευση','Εκπαίδευση'),
('Περίθαλψη, υγεία, πρόνοια','Περίθαλψη, υγεία, πρόνοια'),
('Πολιτισμός, σύλλογοι','Πολιτισμός, σύλλογοι'),
('Υπό ανέγερση','Υπό ανέγερση'),
('Χωρίς χρήση','Χωρίς χρήση'),
('Λοιπές χρήσεις','Λοιπές χρήσεις'),
('Στάθμευση','Στάθμευση'),
('Εκκλησία, θρησκευτικοί χώροι','Εκκλησία, θρησκευτικοί χώροι'),
('Μεταφορές','Μεταφορές'),
('Εγκαταστάσεις υποδομών (ύδρευση, ενέργεια, επικοινωνίες)','Εγκαταστάσεις υποδομών (ύδρευση, ενέργεια, επικοινωνίες)');


INSERT INTO reference_tables.type_classifications
(description_en, description_gr)
VALUES
('Μονοκατοικία', 'Μονοκατοικία'),
('Διπλοκατοικία', 'Διπλοκατοικία'),
('Πολυκατοικία','Πολυκατοικία'),
('Κτίριο γραφείων','Κτίριο γραφείων'),
('Εμπορικό ακίνητο','Εμπορικό ακίνητο'),
('Άλλο','Άλλο');


INSERT INTO reference_tables.side_distances_classifications
(description_en, description_gr)
VALUES
('Σε απόσταση από όλα τα πλαϊνά γειτονικά κτίρια', 'Σε απόσταση από όλα τα πλαϊνά γειτονικά κτίρια'),
('Σε επαφή με τα πλαϊνά γειτονικά κτίρια', 'Σε επαφή με τα πλαϊνά γειτονικά κτίρια'),
('Σε επαφή με κάποια και σε απόσταση από άλλα πλαϊνά γειτονικά κτίρια','Σε επαφή με κάποια και σε απόσταση από άλλα πλαϊνά γειτονικά κτίρια');


INSERT INTO reference_tables.year_built_classifications
(description_en, description_gr)
VALUES
('Προ 1920', 'Προ 1920'),
('1920-1955', '1920-1955'),
('1955-1985','1955-1985'),
('1985-2010','1985-2010'),
('Μετά το 2010','Μετά το 2010');


INSERT INTO reference_tables.date_source
(description_en, description_gr)
VALUES
('Γνώση/γνωμάτευση ειδικού για το κτίριο', 'Γνώση/γνωμάτευση ειδικού για το κτίριο'),
('Ιστορικό έγγραφο', 'Ιστορικό έγγραφο'),
('Ιστορικός χάρτης','Ιστορικός χάρτης'),
('Άλλο έγγραφο/δημοσίευση','Άλλο έγγραφο/δημοσίευση'),
('Διαδικτυακή βάση δεδομένων','Διαδικτυακή βάση δεδομένων'),
('Ταινία/βίντεο','Ταινία/βίντεο'),
('Άλλη ιστοσελίδα','Άλλη ιστοσελίδα'),
('Άλλο','Άλλο');


INSERT INTO reference_tables.construction_material_classifications
(description_en, description_gr)
VALUES
('Οπλισμένο σκυρόδεμα', 'Οπλισμένο σκυρόδεμα'),
('Λιθόκτιστο', 'Λιθόκτιστο'),
('Πλινθόκτιστο','Πλινθόκτιστο'),
('Μεταλλική κατασκευή','Μεταλλική κατασκευή'),
('Ξύλινη κατασκευή','Ξύλινη κατασκευή'),
('Σύμμικτη κατασκευή','Σύμμικτη κατασκευή');


INSERT INTO reference_tables.roof_classifications
(description_en, description_gr)
VALUES
('Οριζόντιο δώμα', 'Οριζόντιο δώμα'),
('Κεκλιμένη στέγη', 'Κεκλιμένη στέγη');


INSERT INTO reference_tables.cover_material_classifications
(description_en, description_gr)
VALUES
('Σοβάς ανοιχτού χρώματος', 'Σοβάς ανοιχτού χρώματος'),
('Σοβάς σκούρου χρώματος', 'Σοβάς σκούρου χρώματος'),
('Υαλοπέτασμα ή άλλη ανακλαστική επιφάνεια','Υαλοπέτασμα ή άλλη ανακλαστική επιφάνεια'),
('Μεταλλικό πανέλο','Μεταλλικό πανέλο'),
('Πέτρα','Πέτρα'),
('Πράσινη φυτεμένη όψη','Πράσινη φυτεμένη όψη'),
('Άλλο','Άλλο');


INSERT INTO reference_tables.noise_level_classifications
(description_en, description_gr)
VALUES
('Χαμηλό', 'Χαμηλό'),
('Μέτριο', 'Μέτριο'),
('Υψηλό','Υψηλό'),
('Πολύ υψηλό','Πολύ υψηλό');


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
('Διατηρητέο κτίριο ή διατηρητέο τμήμα κτιρίου', 'Διατηρητέο κτίριο ή διατηρητέο τμήμα κτιρίου'),
('Διατηρητέα χρήση, όνομα ή επωνυμία κτιρίου', 'Διατηρητέα χρήση, όνομα ή επωνυμία κτιρίου'),
('Διατηρητέο συγκρότημα κτιρίων','Διατηρητέο συγκρότημα κτιρίων');


INSERT INTO reference_tables.monument_designation_classifications
(description_en, description_gr)
VALUES
('Αρχαίο μνημείο', 'Αρχαίο μνημείο'),
('Νεότερο μνημείο προγενέστερο των εκάστοτε τελευταίων εκατό ετών', 'Νεότερο μνημείο προγενέστερο των εκάστοτε τελευταίων εκατό ετών'),
('Νεότερο μνημείο μεταγενέστερο των εκάστοτε τελευταίων εκατό ετών','Νεότερο μνημείο μεταγενέστερο των εκάστοτε τελευταίων εκατό ετών');


INSERT INTO reference_tables.building_state_classifications
(description_en, description_gr)
VALUES
('Καλή', 'Καλή'),
('Μέτρια', 'Μέτρια'),
('Κακή','Κακή'),
('Ερείπιο','Ερείπιο');


INSERT INTO reference_tables.ownership_classifications
(description_en, description_gr)
VALUES
('Δημόσιο', 'Δημόσιο'),
('Ο.Τ.Α.', 'Ο.Τ.Α.'),
('Κοινωφελής φορέας','Κοινωφελής φορέας'),
('Ιδιώτης','Ιδιώτης');
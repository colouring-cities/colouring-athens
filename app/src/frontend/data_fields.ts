

export enum Category {
    Location = 'Location',
    Use = 'Use',
    Type = 'Type',
    Age = 'Age',
    SizeShape = 'SizeShape',
    Construction = 'Construction',
    Streetscape = 'Streetscape',
    Team = 'Team',
    Sustainability = 'Sustainability',
    Community = 'Community',
    Planning = 'Planning',
    Like = 'Like',

    Unknown = 'Unknown'
}

export const categories = {
    [Category.Location]: {
        slug: 'location',
        name: 'Location'
    },
    [Category.Use]: {
        slug: 'use',
        name: 'Land Use'
    },
    [Category.Type]: {
        slug: 'type',
        name: 'Type'
    },
    [Category.Age]: {
        slug: 'age',
        name: 'Age'
    },
    [Category.SizeShape]: {
        slug: 'size',
        name: 'Size & Shape'
    },
    [Category.Construction]: {
        slug: 'construction',
        name: 'Construction'
    },
    [Category.Streetscape]: {
        slug: 'streetscape',
        name: 'Streetscape'
    },
    [Category.Team]: {
        slug: 'team',
        name: 'Team'
    },
    [Category.Sustainability]: {
        slug: 'sustainability',
        name: 'Sustainability'
    },
    [Category.Community]: {
        slug: 'community',
        name: 'Community'
    },
    [Category.Planning]: {
        slug: 'planning',
        name: 'Planning'
    },
    [Category.Like]: {
        slug: 'like',
        name: 'Like Me!'
    }
};

export const categoriesOrder: Category[] = [
    Category.Location,
    Category.Use,
    Category.Type,
    Category.Age,
    Category.SizeShape,
    Category.Construction,
    Category.Streetscape,
    Category.Team,
    Category.Sustainability,
    Category.Community,
    Category.Planning,
    Category.Like,
];

/**
 * This interface is used only in code which uses dataFields, not in the dataFields definition itself
 * Cannot make dataFields an indexed type ({[key: string]: DataFieldDefinition}),
 * because then we wouldn't have type-checking for whether a given key exists on dataFields,
 * e.g. dataFields.foo_bar would not be highlighted as an error.
 */
export interface DataFieldDefinition {
    category: Category;
    title: string;
    tooltip?: string;
}

export const dataFields = {
    location_name: {
        category: Category.Location,
        title: "Building Name",
        tooltip: "May not be needed for many buildings.",
    },
    location_number: {
        category: Category.Location,
        title: "Building number",
    },
    location_street: {
        category: Category.Location,
        title: "Street",
        //tooltip: ,
    },
    location_line_two: {
        category: Category.Location,
        title: "Address line 2",
        //tooltip: ,
    },
    location_town: {
        category: Category.Location,
        title: "Town",
        //tooltip: ,
    },
    location_postcode: {
        category: Category.Location,
        title: "Postcode",
        //tooltip: ,
    },
    ref_elstat_id: {
        category: Category.Location,
        title: "ELSTAT ID",
        tooltip: "ELSTAT ID",
    },

    /**
     * UPRNs is not part of the buildings table, but the string fields 
     * are included here for completeness
     */
    // uprns: {
    //     category: Category.Location,
    //     title: "UPRNs",
    //     tooltip: "Unique Property Reference Numbers (to be filled automatically)"
    // },

    ref_osm_id: {
        category: Category.Location,
        title: "OSM ID",
        tooltip: "OpenStreetMap feature ID",
    },
    location_latitude: {
        category: Category.Location,
        title: "Latitude",
    },
    location_longitude: {
        category: Category.Location,
        title: "Longitude",
    },

    // current_landuse_group: {
    //     category: Category.LandUse,
    //     title: "Current Land Use (Group)",
    //     tooltip: "Land use Groups as classified by [NLUD](https://www.gov.uk/government/statistics/national-land-use-database-land-use-and-land-cover-classification)"
    // },
    // current_landuse_order: {
    //     category: Category.LandUse,
    //     title: "Current Land Use (Order)",
    //     tooltip: "Land use Order as classified by [NLUD](https://www.gov.uk/government/statistics/national-land-use-database-land-use-and-land-cover-classification)"
    // },

    // Current Use

    current_landuse_ground_floor: {
        category: Category.Use,
        title_gr: "Υφιστάμενη χρήση ισογείου",
        tooltip_gr: "Υφιστάμενη χρήση ισογείου",
        title_en: "Current ground floor use",
        tooltip_en: "Current floor use"
    },

    current_landuse_floor: {
        category: Category.Use,
        title_gr: "Υφιστάμενη επικρατούσα χρήση ορόφων",
        tooltip_gr: "Υφιστάμενη επικρατούσα χρήση ορόφων",
        title_en: "Current floor use",
        tooltip_en: "Current floor use"
    },


    // Type

    type_class: {
        category: Category.Type,
        title_gr: "Προορισμός κτιρίου",
        tooltip_gr: "Προορισμός κτιρίου",
        title_en: "Προορισμός κτιρίου",
        tooltip_en: "Προορισμός κτιρίου"
    },

    side_distances: {
        category: Category.Type,
        title_gr: "Πλαϊνές αποστάσεις από γειτονικά κτίρια",
        tooltip_gr: "Πλαϊνές αποστάσεις από γειτονικά κτίρια",
        title_en: "Πλαϊνές αποστάσεις από γειτονικά κτίρια",
        tooltip_en: "Πλαϊνές αποστάσεις από γειτονικά κτίρια"
    },


    year_built: {
        category: Category.Age,
        title_gr: "Έτος έναρξης κατασκευής",
        tooltip_gr: "Έτος έναρξης κατασκευής",
        title_en: "Έτος έναρξης κατασκευής",
        tooltip_en: "Έτος έναρξης κατασκευής"
    },

    reconstruction_year: {
        category: Category.Age,
        title_gr: "Έτος τελευταίας ανακατασκευής κτιρίου",
        tooltip_gr: "Έτος τελευταίας ανακατασκευής κτιρίου",
        title_en: "Έτος τελευταίας ανακατασκευής κτιρίου",
        tooltip_en: "Έτος τελευταίας ανακατασκευής κτιρίου"
    },


    date_source: {
        category: Category.Age,
        title_gr: "Πηγή πληροφορίας",
        tooltip_gr: "Πηγή πληροφορίας",
        title_en: "Πηγή πληροφορίας",
        tooltip_en: "Πηγή πληροφορίας"
    },


    date_source_link: {
        category: Category.Age,
        title_gr: "Σύνδεσμος πηγής",
        tooltip_gr: "Σύνδεσμος πηγής",
        title_en: "Σύνδεσμος πηγής",
        tooltip_en: "Σύνδεσμος πηγής"
    },


    size_storeys_core: {
        category: Category.SizeShape,
        title_gr: "Αριθμός κύριων ορόφων",
        tooltip_gr: "Αριθμός κύριων ορόφων",
        title_en: "Αριθμός κύριων ορόφων",
        tooltip_en: "Αριθμός κύριων ορόφων"
    },

    
    size_storeys_basement: {
        category: Category.SizeShape,
        title_gr: "Αριθμός υπόγειων ορόφων",
        tooltip_gr: "Αριθμός υπόγειων ορόφων",
        title_en: "Αριθμός υπόγειων ορόφων",
        tooltip_en: "Αριθμός υπόγειων ορόφων"
    },

    
    pilotis: {
        category: Category.SizeShape,
        title_gr: "Υπάρχει pilotis;",
        tooltip_gr: "Υπάρχει pilotis;",
        title_en: "Υπάρχει pilotis;",
        tooltip_en: "Υπάρχει pilotis;"
    },

    
    high_ground_floor: {
        category: Category.SizeShape,
        title_gr: "Υπάρχει ισόγειο μεγάλου ύψους με πατάρι;",
        tooltip_gr: "Υπάρχει ισόγειο μεγάλου ύψους με πατάρι;",
        title_en: "Υπάρχει ισόγειο μεγάλου ύψους με πατάρι;",
        tooltip_en: "Υπάρχει ισόγειο μεγάλου ύψους με πατάρι;"
    },


    construction_core_material: {
        category: Category.Construction,
        title_gr: "Υλικό κατασκευής ",
        tooltip_gr: "Υλικό κατασκευής ",
        title_en: "Υλικό κατασκευής ",
        tooltip_en: "Υλικό κατασκευής "
    },

    construction_roof_covering: {
        category: Category.Construction,
        title_gr: "Τρόπος κάλυψης κτιρίου",
        tooltip_gr: "Τρόπος κάλυψης κτιρίου",
        title_en: "Τρόπος κάλυψης κτιρίου",
        tooltip_en: "Τρόπος κάλυψης κτιρίου"
    },

    construction_front_cover_materials: {
        category: Category.Construction,
        title_gr: "Υλικό κάλυψης κύριας όψης",
        tooltip_gr: "Υλικό κάλυψης κύριας όψης",
        title_en: "Υλικό κάλυψης κύριας όψης",
        tooltip_en: "Υλικό κάλυψης κύριας όψης"
    },

    construction_side_cover_materials: {
        category: Category.Construction,
        title_gr: "Υλικό κάλυψης πλάγιων όψεων",
        tooltip_gr: "Υλικό κάλυψης πλάγιων όψεων",
        title_en: "Υλικό κάλυψης πλάγιων όψεων",
        tooltip_en: "Υλικό κάλυψης πλάγιων όψεων"
    },


    has_sidewalk: {
        category: Category.Streetscape,
        title_gr: "Υπάρχει πεζοδρόμιο;",
        tooltip_gr: "Υπάρχει πεζοδρόμιο;",
        title_en: "Υπάρχει πεζοδρόμιο;",
        tooltip_en: "Υπάρχει πεζοδρόμιο;"
    },

    sidewalk_width: {
        category: Category.Streetscape,
        title_gr: "Πλάτος πεζοδρομίου (μέσος όρος)",
        tooltip_gr: "Πλάτος πεζοδρομίου (μέσος όρος)",
        title_en: "Πλάτος πεζοδρομίου (μέσος όρος)",
        tooltip_en: "Πλάτος πεζοδρομίου (μέσος όρος)"
    },

    road_width: {
        category: Category.Streetscape,
        title_gr: "Πλάτος δρόμου (μέσος όρος)",
        tooltip_gr: "Πλάτος δρόμου (μέσος όρος)",
        title_en: "Πλάτος δρόμου (μέσος όρος)",
        tooltip_en: "Πλάτος δρόμου (μέσος όρος)"
    },

    sidewalk_accessibility: {
        category: Category.Streetscape,
        title_gr: "Δυνατότητα ανεμπόδιστης κίνησης ΑΜΕΑ στο πεζοδρόμιο",
        tooltip_gr: "Δυνατότητα ανεμπόδιστης κίνησης ΑΜΕΑ στο πεζοδρόμιο",
        title_en: "Δυνατότητα ανεμπόδιστης κίνησης ΑΜΕΑ στο πεζοδρόμιο",
        tooltip_en: "Δυνατότητα ανεμπόδιστης κίνησης ΑΜΕΑ στο πεζοδρόμιο"
    },

    sidewalk_lawn: {
        category: Category.Streetscape,
        title_gr: "Ύπαρξη πρασιάς",
        tooltip_gr: "Ύπαρξη πρασιάς",
        title_en: "Ύπαρξη πρασιάς",
        tooltip_en: "Ύπαρξη πρασιάς"
    },

    sidewalk_trees: {
        category: Category.Streetscape,
        title_gr: "Ύπαρξη δενδροφύτευσης στο πεζοδρόμιο",
        tooltip_gr: "Ύπαρξη δενδροφύτευσης στο πεζοδρόμιο",
        title_en: "Ύπαρξη δενδροφύτευσης στο πεζοδρόμιο",
        tooltip_en: "Ύπαρξη δενδροφύτευσης στο πεζοδρόμιο"
    },

    noise_level: {
        category: Category.Streetscape,
        title_gr: "Επίπεδο θορύβου στο πεζοδρόμιο",
        tooltip_gr: "Επίπεδο θορύβου στο πεζοδρόμιο",
        title_en: "Επίπεδο θορύβου στο πεζοδρόμιο",
        tooltip_en: "Επίπεδο θορύβου στο πεζοδρόμιο"
    },

    has_pavement: {
        category: Category.Streetscape,
        title_gr: "Ύπαρξη πεζόδρομου",
        tooltip_gr: "Ύπαρξη πεζόδρομου",
        title_en: "Ύπαρξη πεζόδρομου",
        tooltip_en: "Ύπαρξη πεζόδρομου"
    },

    has_cycling_track: {
        category: Category.Streetscape,
        title_gr: "Ύπαρξη ποδηλατόδρομου",
        tooltip_gr: "Ύπαρξη ποδηλατόδρομου",
        title_en: "Ύπαρξη ποδηλατόδρομου",
        tooltip_en: "Ύπαρξη ποδηλατόδρομου"
    },

    has_parodia_stoa: {
        category: Category.Streetscape,
        title_gr: "Ύπαρξη παρόδιας στοάς",
        tooltip_gr: "Ύπαρξη παρόδιας στοάς",
        title_en: "Ύπαρξη παρόδιας στοάς",
        tooltip_en: "Ύπαρξη παρόδιας στοάς"
    },

    has_egkarsia_stoa: {
        category: Category.Streetscape,
        title_gr: "Ύπαρξη εγκάρσιας στοάς",
        tooltip_gr: "Ύπαρξη εγκάρσιας στοάς",
        title_en: "Ύπαρξη εγκάρσιας στοάς",
        tooltip_en: "Ύπαρξη εγκάρσιας στοάς"
    },


    inside_protected_area: {
        category: Category.Planning,
        title_gr: "Βρίσκεται το κτίριο εντός προστατευόμενης περιοχής;",
        tooltip_gr: "Βρίσκεται το κτίριο εντός προστατευόμενης περιοχής;",
        title_en: "Βρίσκεται το κτίριο εντός προστατευόμενης περιοχής;",
        tooltip_en: "Βρίσκεται το κτίριο εντός προστατευόμενης περιοχής;"
    },

    inside_archaelogical_area: {
        category: Category.Planning,
        title_gr: "Βρίσκεται το κτίριο εντός περιοχής χαρακτηρισμένης ως ‘Αρχαιολογικού Χώρου’ από το Υπουργείο Πολιτισμού και Αθλητισμού;",
        tooltip_gr: "Βρίσκεται το κτίριο εντός περιοχής χαρακτηρισμένης ως ‘Αρχαιολογικού Χώρου’ από το Υπουργείο Πολιτισμού και Αθλητισμού;",
        title_en: "Βρίσκεται το κτίριο εντός περιοχής χαρακτηρισμένης ως ‘Αρχαιολογικού Χώρου’ από το Υπουργείο Πολιτισμού και Αθλητισμού;",
        tooltip_en: "Βρίσκεται το κτίριο εντός περιοχής χαρακτηρισμένης ως ‘Αρχαιολογικού Χώρου’ από το Υπουργείο Πολιτισμού και Αθλητισμού;"
    },

    inside_energy_area: {
        category: Category.Planning,
        title_gr: "Βρίσκεται το κτίριο εντός τμήματος πόλεως χαρακτηρισμένου ως προστατευόμενου από το Υπουργείο Περιβάλλοντος και Ενέργειας;",
        tooltip_gr: "Βρίσκεται το κτίριο εντός τμήματος πόλεως χαρακτηρισμένου ως προστατευόμενου από το Υπουργείο Περιβάλλοντος και Ενέργειας;",
        title_en: "Βρίσκεται το κτίριο εντός τμήματος πόλεως χαρακτηρισμένου ως προστατευόμενου από το Υπουργείο Περιβάλλοντος και Ενέργειας;",
        tooltip_en: "Βρίσκεται το κτίριο εντός τμήματος πόλεως χαρακτηρισμένου ως προστατευόμενου από το Υπουργείο Περιβάλλοντος και Ενέργειας;"
    },

    officially_protected: {
        category: Category.Planning,
        title_gr: "Βρίσκεται το κτίριο υπό επίσημο καθεστώς προστασίας;",
        tooltip_gr: "Βρίσκεται το κτίριο υπό επίσημο καθεστώς προστασίας;",
        title_en: "Βρίσκεται το κτίριο υπό επίσημο καθεστώς προστασίας;",
        tooltip_en: "Βρίσκεται το κτίριο υπό επίσημο καθεστώς προστασίας;"
    },

    officially_preserved: {
        category: Category.Planning,
        title_gr: "Έχει χαρακτηριστεί το κτίριο ή τμήμα του κτιρίου ως διατηρητέο, ή ανήκει το κτίριο σε συγκρότημα κτιρίων χαρακτηρισμένο ως διατηρητέο από το Υπουργείο Περιβάλλοντος και Ενέργειας;",
        tooltip_gr: "Έχει χαρακτηριστεί το κτίριο ή τμήμα του κτιρίου ως διατηρητέο, ή ανήκει το κτίριο σε συγκρότημα κτιρίων χαρακτηρισμένο ως διατηρητέο από το Υπουργείο Περιβάλλοντος και Ενέργειας;",
        title_en: "Έχει χαρακτηριστεί το κτίριο ή τμήμα του κτιρίου ως διατηρητέο, ή ανήκει το κτίριο σε συγκρότημα κτιρίων χαρακτηρισμένο ως διατηρητέο από το Υπουργείο Περιβάλλοντος και Ενέργειας;",
        tooltip_en: "Έχει χαρακτηριστεί το κτίριο ή τμήμα του κτιρίου ως διατηρητέο, ή ανήκει το κτίριο σε συγκρότημα κτιρίων χαρακτηρισμένο ως διατηρητέο από το Υπουργείο Περιβάλλοντος και Ενέργειας;"
    },

    preservation_designation: {
        category: Category.Planning,
        title_gr: "Αν ναι, χαρακτηρισμός κτιρίου:",
        tooltip_gr: "Αν ναι, χαρακτηρισμός κτιρίου:",
        title_en: "Αν ναι, χαρακτηρισμός κτιρίου:",
        tooltip_en: "Αν ναι, χαρακτηρισμός κτιρίου:"
    },

    officially_monument: {
        category: Category.Planning,
        title_gr: "Έχει χαρακτηριστεί το κτίριο ως μνημείο από το Υπουργείο Πολιτισμού και Αθλητισμού; ",
        tooltip_gr: "Έχει χαρακτηριστεί το κτίριο ως μνημείο από το Υπουργείο Πολιτισμού και Αθλητισμού; ",
        title_en: "Έχει χαρακτηριστεί το κτίριο ως μνημείο από το Υπουργείο Πολιτισμού και Αθλητισμού; ",
        tooltip_en: "Έχει χαρακτηριστεί το κτίριο ως μνημείο από το Υπουργείο Πολιτισμού και Αθλητισμού; "
    },

    monument_designation: {
        category: Category.Planning,
        title_gr: "Αν ναι, χαρακτηρισμός κτιρίου:",
        tooltip_gr: "Αν ναι, χαρακτηρισμός κτιρίου:",
        title_en: "Αν ναι, χαρακτηρισμός κτιρίου:",
        tooltip_en: "Αν ναι, χαρακτηρισμός κτιρίου:"
    },

    fek_issue: {
        category: Category.Planning,
        title_gr: "Τεύχος ΦΕΚ",
        tooltip_gr: "Τεύχος ΦΕΚ",
        title_en: "Τεύχος ΦΕΚ",
        tooltip_en: "Τεύχος ΦΕΚ"
    },

    fek_number: {
        category: Category.Planning,
        title_gr: "Αριθμός ΦΕΚ",
        tooltip_gr: "Αριθμός ΦΕΚ",
        title_en: "Αριθμός ΦΕΚ",
        tooltip_en: "Αριθμός ΦΕΚ"
    },

    fek_date: {
        category: Category.Planning,
        title_gr: "Ημερομηνία ΦΕΚ",
        tooltip_gr: "Ημερομηνία ΦΕΚ",
        title_en: "Ημερομηνία ΦΕΚ",
        tooltip_en: "Ημερομηνία ΦΕΚ"
    },

    has_photovoltaic_panels: {
        category: Category.Sustainability,
        title_gr: "Υπάρχει εγκατάσταση φωτοβολταϊκών πανέλων;",
        tooltip_gr: "Υπάρχει εγκατάσταση φωτοβολταϊκών πανέλων;",
        title_en: "Υπάρχει εγκατάσταση φωτοβολταϊκών πανέλων;",
        tooltip_en: "Υπάρχει εγκατάσταση φωτοβολταϊκών πανέλων;"
    },

    building_state: {
        category: Category.Sustainability,
        title_gr: "Γενική κατάσταση κτιρίου",
        tooltip_gr: "Γενική κατάσταση κτιρίου",
        title_en: "Γενική κατάσταση κτιρίου",
        tooltip_en: "Γενική κατάσταση κτιρίου"
    },

    visible_collapse_risk: {
        category: Category.Sustainability,
        title_gr: "Διατρέχει ορατό κίνδυνο κατάρρευσης;",
        tooltip_gr: "Διατρέχει ορατό κίνδυνο κατάρρευσης;",
        title_en: "Διατρέχει ορατό κίνδυνο κατάρρευσης;",
        tooltip_en: "Διατρέχει ορατό κίνδυνο κατάρρευσης;"
    },



    likes_total: {
        category: Category.Like,
        title: "Total number of likes"
    }

};

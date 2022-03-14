import { Category } from './categories-config';


/**
 * This interface is used only in code which uses dataFields, not in the dataFields definition itself
 * Cannot make dataFields an indexed type ({[key: string]: DataFieldDefinition}),
 * because then we wouldn't have type-checking for whether a given key exists on dataFields,
 * e.g. dataFields.foo_bar would not be highlighted as an error.
 */

export interface DataFieldDefinition {
    /**
     * The primary category to which the field belongs.
     * 
     * A field could be displayed in several categories, but this value will be used
     * when a single category needs to be shown in the context of a field, e.g.
     * in the case of edit history or the copy-paste tool (multi-edit)
     *  */
    category: Category;

    /**
     * The human-readable title of the field to be displayed as label.
     */
    title: string;

    /**
     * Text to be displayed in the hint tooltip next to the input field.
     * 
     * This supports a simple Markdown-like syntax for embedding clickable URLs in the hint
     * for example "see [here](http://example.com/info.html) for more information"
     */
    tooltip?: string;

    /**
     * If the defined type is an array, this describes the fields of each array item.
     * The nested fields don't currently need a category field to be defined.
     */
    items?: { [key: string]: Omit<DataFieldDefinition, 'category'> };


    /**
     * If the defined type is a dictionary, this describes the types of the dictionary's fields
     */
    fields?: { [key: string]: Omit<DataFieldDefinition, 'category'> }

    /**
     * The example is used to determine the runtime type in which the attribute data is stored (e.g. number, string, object)
     * This gives the programmer auto-complete of all available building attributes when implementing a category view.
     * 
     * E.g. if the field is a text value, an empty string ("") is the simplest example.
     * 
     * Making it semantically correct is useful but not necessary.
     * E.g. for building attachment form, you could use "Detached" as example
     */
    example: any;

    /**
     * Whether the field is a field that has an independent value for each user.
     * For example, user building likes are one of such fields.
     * By default this is false - fields are treated as not user-specific.
     */
    perUser?: boolean;
}



export const buildingUserFields = {
    community_like: {
        perUser: true,
        category: Category.Community,
        title: "Do you like this building and think it contributes to the city?",
        example: true,
    },
    community_type_worth_keeping: {
        perUser: true,
        category: Category.Community,
        title: "Do you think this **type** of building is generally worth keeping?",
        example: true,
    },
    community_type_worth_keeping_reasons: {
        perUser: true,
        category: Category.Community,
        title: 'Why is this type of building worth keeping?',
        fields: {
            external_design: {
                title: "because the external design contributes to the streetscape"
            },
            internal_design: {
                title: 'because the internal design works well'
            },
            adaptable: {
                title: 'because the building is adaptable / can be reused to make the city more sustainable'
            },
            other: {
                title: 'other'
            }
        },
        example: {
            external_design: true,
            internal_design: true,
            adaptable: false,
            other: false
        }
    },

    community_local_significance: {
        perUser: true,
        category: Category.Community,
        title: "Do you think this building should be recorded as a local heritage asset?",
        example: true
    }
};

// const { t, i18n };



// const { t, i18n } = useTranslation();

export const dataFields = { /* eslint-disable @typescript-eslint/camelcase */

    location_name: {
        category: Category.Location,
        title: "Building Name",
        tooltip: "May not be needed for many buildings.",
        example: "The Cruciform",
    },
    location_number: {
        category: Category.Location,
        title: "Building number",
        example: '12b',
        tooltip: 'Numbers with an optional lowercase letter are accepted, e.g. 141 or 12b'
    },
    location_street: {
        category: Category.Location,
        title: "Street",
        example: "Gower Street",
        //tooltip: ,
    },
    location_line_two: {
        category: Category.Location,
        title: "Address line 2",
        example: "Flat 21",
        //tooltip: ,
    },
    location_town: {
        category: Category.Location,
        title: "Town",
        example: "London",
        //tooltip: ,
    },
    location_postcode: {
        category: Category.Location,
        title: "Postcode",
        example: "W1W 6TR",
        //tooltip: ,
    },
    ref_elstat_id: {
        category: Category.Location,
        title: "ELSTAT ID",
        tooltip: "elstat",
        example: "",
    },

    /**
     * UPRNs is not part of the buildings table, but the string fields 
     * are included here for completeness
     */
    // uprns: {
    //     category: Category.Location,
    //     title: "UPRNs",
    //     tooltip: "Unique Property Reference Numbers (to be filled automatically)",
    //     example: [{uprn: "", parent_uprn: "" }, {uprn: "", parent_uprn: "" }],
    // },

    ref_osm_id: {
        category: Category.Location,
        title: "OSM ID",
        tooltip: "OpenStreetMap feature ID",
        example: "",
    },
    location_latitude: {
        category: Category.Location,
        title: "Latitude",
        example: 12.4564,
    },
    location_longitude: {
        category: Category.Location,
        title: "Longitude",
        example: 0.12124,
    },



    current_landuse_ground_floor: {
        category: Category.Use,
        title_gr: "Υφιστάμενη χρήση ισογείου",
        tooltip_gr: "Υφιστάμενη χρήση ισογείου",
        title_en: "Current ground floor use",
        tooltip_en: "Current ground floor use",
        // example: "",
    },
    current_landuse_floor: {
        category: Category.Use,
        title_gr: "Υφιστάμενη χρήση ορόφων",
        tooltip_gr: "Υφιστάμενη χρήση ορόφων",
        title_en: "Current floor use",
        tooltip_en: "Current floor use",
        // example_gr: "",
    },

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
        tooltip_en: "Έτος έναρξης κατασκευής",
        // example: 1981
    },

    reconstruction_year: {
        category: Category.Age,
        title_gr: "Έτος τελευταίας ανακατασκευής κτιρίου",
        tooltip_gr: "Έτος τελευταίας ανακατασκευής κτιρίου",
        title_en: "Έτος τελευταίας ανακατασκευής κτιρίου",
        tooltip_en: "Έτος τελευταίας ανακατασκευής κτιρίου",
        example: 1983
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
        tooltip_en: "Σύνδεσμος πηγής",
        example: "https://example.com"
    },


    size_storeys_core: {
        category: Category.Size,
        title_gr: "Αριθμός κύριων ορόφων",
        tooltip_gr: "Αριθμός κύριων ορόφων",
        title_en: "Αριθμός κύριων ορόφων",
        tooltip_en: "Αριθμός κύριων ορόφων",
        example: 2,
    },


    size_storeys_basement: {
        category: Category.Size,
        title_gr: "Αριθμός υπόγειων ορόφων",
        tooltip_gr: "Αριθμός υπόγειων ορόφων",
        title_en: "Αριθμός υπόγειων ορόφων",
        tooltip_en: "Αριθμός υπόγειων ορόφων",
        example: 2,
    },

    size_height_apex: {
        category: Category.Size,
        title_gr: "Ύψος (μ)",
        tooltip_gr: "Height (m)",
        title_en: "Height (m)",
        tooltip_en: "Height (m)",
        example: 100.5,
        //tooltip: ,
    },

    size_floor_area_ground: {
        category: Category.Size,
        title_gr: "Επιφάνεια ισογείου",
        tooltip_gr: "Επιφάνεια ισογείου",
        title_en: "Επιφάνεια ισογείου",
        tooltip_en: "Επιφάνεια ισογείου",
        example: 1245.6,
        //tooltip: ,
    },
    size_floor_area_total: {
        category: Category.Size,
        title_gr: "Επιφάνεια οικοπέδου",
        tooltip_gr: "Επιφάνεια οικοπέδου",
        title_en: "Επιφάνεια οικοπέδου",
        tooltip_en: "Επιφάνεια οικοπέδου",
        example: 2001.7,
        //tooltip: ,
    },
    size_width_frontage: {
        category: Category.Size,
        title_gr: "Υλοποιημένη δόμηση",
        tooltip_gr: "Υλοποιημένη δόμηση",
        title_en: "Υλοποιημένη δόμηση",
        tooltip_en: "Υλοποιημένη δόμηση",
        example: 12.2,
        //tooltip: ,
    },


    pilotis: {
        category: Category.Size,
        title_gr: "Υπάρχει pilotis;",
        tooltip_gr: "Υπάρχει pilotis;",
        title_en: "Υπάρχει pilotis;",
        tooltip_en: "Υπάρχει pilotis;",
        example: true,
    },


    high_ground_floor: {
        category: Category.Size,
        title_gr: "Υπάρχει ισόγειο μεγάλου ύψους με πατάρι;",
        tooltip_gr: "Υπάρχει ισόγειο μεγάλου ύψους με πατάρι;",
        title_en: "Υπάρχει ισόγειο μεγάλου ύψους με πατάρι;",
        tooltip_en: "Υπάρχει ισόγειο μεγάλου ύψους με πατάρι;",
        example: true
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
        tooltip_en: "Υπάρχει πεζοδρόμιο;",
        example: true
    },

    sidewalk_width: {
        category: Category.Streetscape,
        title_gr: "Πλάτος πεζοδρομίου (μέσος όρος)",
        tooltip_gr: "Πλάτος πεζοδρομίου (μέσος όρος)",
        title_en: "Πλάτος πεζοδρομίου (μέσος όρος)",
        tooltip_en: "Πλάτος πεζοδρομίου (μέσος όρος)",
        example: 2.5
    },

    road_width: {
        category: Category.Streetscape,
        title_gr: "Πλάτος δρόμου (μέσος όρος)",
        tooltip_gr: "Πλάτος δρόμου (μέσος όρος)",
        title_en: "Πλάτος δρόμου (μέσος όρος)",
        tooltip_en: "Πλάτος δρόμου (μέσος όρος)",
        example: 3.5
    },

    sidewalk_accessibility: {
        category: Category.Streetscape,
        title_gr: "Δυνατότητα ανεμπόδιστης κίνησης ΑΜΕΑ στο πεζοδρόμιο",
        tooltip_gr: "Δυνατότητα ανεμπόδιστης κίνησης ΑΜΕΑ στο πεζοδρόμιο",
        title_en: "Δυνατότητα ανεμπόδιστης κίνησης ΑΜΕΑ στο πεζοδρόμιο",
        tooltip_en: "Δυνατότητα ανεμπόδιστης κίνησης ΑΜΕΑ στο πεζοδρόμιο",
        example: true
    },

    sidewalk_lawn: {
        category: Category.Streetscape,
        title_gr: "Ύπαρξη πρασιάς",
        tooltip_gr: "Ύπαρξη πρασιάς",
        title_en: "Ύπαρξη πρασιάς",
        tooltip_en: "Ύπαρξη πρασιάς",
        example: true
    },

    sidewalk_trees: {
        category: Category.Streetscape,
        title_gr: "Ύπαρξη δενδροφύτευσης στο πεζοδρόμιο",
        tooltip_gr: "Ύπαρξη δενδροφύτευσης στο πεζοδρόμιο",
        title_en: "Ύπαρξη δενδροφύτευσης στο πεζοδρόμιο",
        tooltip_en: "Ύπαρξη δενδροφύτευσης στο πεζοδρόμιο",
        example: true
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
        tooltip_en: "Ύπαρξη πεζόδρομου",
        example: true
    },

    has_cycling_track: {
        category: Category.Streetscape,
        title_gr: "Ύπαρξη ποδηλατόδρομου",
        tooltip_gr: "Ύπαρξη ποδηλατόδρομου",
        title_en: "Ύπαρξη ποδηλατόδρομου",
        tooltip_en: "Ύπαρξη ποδηλατόδρομου",
        example: true
    },

    has_parodia_stoa: {
        category: Category.Streetscape,
        title_gr: "Ύπαρξη παρόδιας στοάς",
        tooltip_gr: "Ύπαρξη παρόδιας στοάς",
        title_en: "Ύπαρξη παρόδιας στοάς",
        tooltip_en: "Ύπαρξη παρόδιας στοάς",
        example: true
    },

    has_egkarsia_stoa: {
        category: Category.Streetscape,
        title_gr: "Ύπαρξη εγκάρσιας στοάς",
        tooltip_gr: "Ύπαρξη εγκάρσιας στοάς",
        title_en: "Ύπαρξη εγκάρσιας στοάς",
        tooltip_en: "Ύπαρξη εγκάρσιας στοάς",
        example: true
    },


    inside_protected_area: {
        category: Category.Planning,
        title_gr: "Βρίσκεται το κτίριο εντός προστατευόμενης περιοχής;",
        tooltip_gr: "Βρίσκεται το κτίριο εντός προστατευόμενης περιοχής;",
        title_en: "Βρίσκεται το κτίριο εντός προστατευόμενης περιοχής;",
        tooltip_en: "Βρίσκεται το κτίριο εντός προστατευόμενης περιοχής;",
        example: true
    },

    inside_archaelogical_area: {
        category: Category.Planning,
        title_gr: "Βρίσκεται το κτίριο εντός περιοχής χαρακτηρισμένης ως ‘Αρχαιολογικού Χώρου’ από το Υπουργείο Πολιτισμού και Αθλητισμού;",
        tooltip_gr: "Βρίσκεται το κτίριο εντός περιοχής χαρακτηρισμένης ως ‘Αρχαιολογικού Χώρου’ από το Υπουργείο Πολιτισμού και Αθλητισμού;",
        title_en: "Βρίσκεται το κτίριο εντός περιοχής χαρακτηρισμένης ως ‘Αρχαιολογικού Χώρου’ από το Υπουργείο Πολιτισμού και Αθλητισμού;",
        tooltip_en: "Βρίσκεται το κτίριο εντός περιοχής χαρακτηρισμένης ως ‘Αρχαιολογικού Χώρου’ από το Υπουργείο Πολιτισμού και Αθλητισμού;",
        example: true
    },

    inside_energy_area: {
        category: Category.Planning,
        title_gr: "Βρίσκεται το κτίριο εντός τμήματος πόλεως χαρακτηρισμένου ως προστατευόμενου από το Υπουργείο Περιβάλλοντος και Ενέργειας;",
        tooltip_gr: "Βρίσκεται το κτίριο εντός τμήματος πόλεως χαρακτηρισμένου ως προστατευόμενου από το Υπουργείο Περιβάλλοντος και Ενέργειας;",
        title_en: "Βρίσκεται το κτίριο εντός τμήματος πόλεως χαρακτηρισμένου ως προστατευόμενου από το Υπουργείο Περιβάλλοντος και Ενέργειας;",
        tooltip_en: "Βρίσκεται το κτίριο εντός τμήματος πόλεως χαρακτηρισμένου ως προστατευόμενου από το Υπουργείο Περιβάλλοντος και Ενέργειας;",
        example: true
    },

    officially_protected: {
        category: Category.Planning,
        title_gr: "Βρίσκεται το κτίριο υπό επίσημο καθεστώς προστασίας;",
        tooltip_gr: "Βρίσκεται το κτίριο υπό επίσημο καθεστώς προστασίας;",
        title_en: "Βρίσκεται το κτίριο υπό επίσημο καθεστώς προστασίας;",
        tooltip_en: "Βρίσκεται το κτίριο υπό επίσημο καθεστώς προστασίας;",
        example: true
    },

    officially_preserved: {
        category: Category.Planning,
        title_gr: "Έχει χαρακτηριστεί το κτίριο ή τμήμα του κτιρίου ως διατηρητέο, ή ανήκει το κτίριο σε συγκρότημα κτιρίων χαρακτηρισμένο ως διατηρητέο από το Υπουργείο Περιβάλλοντος και Ενέργειας;",
        tooltip_gr: "Έχει χαρακτηριστεί το κτίριο ή τμήμα του κτιρίου ως διατηρητέο, ή ανήκει το κτίριο σε συγκρότημα κτιρίων χαρακτηρισμένο ως διατηρητέο από το Υπουργείο Περιβάλλοντος και Ενέργειας;",
        title_en: "Έχει χαρακτηριστεί το κτίριο ή τμήμα του κτιρίου ως διατηρητέο, ή ανήκει το κτίριο σε συγκρότημα κτιρίων χαρακτηρισμένο ως διατηρητέο από το Υπουργείο Περιβάλλοντος και Ενέργειας;",
        tooltip_en: "Έχει χαρακτηριστεί το κτίριο ή τμήμα του κτιρίου ως διατηρητέο, ή ανήκει το κτίριο σε συγκρότημα κτιρίων χαρακτηρισμένο ως διατηρητέο από το Υπουργείο Περιβάλλοντος και Ενέργειας;",
        example: true
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
        tooltip_en: "Έχει χαρακτηριστεί το κτίριο ως μνημείο από το Υπουργείο Πολιτισμού και Αθλητισμού; ",
        example: true
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
        tooltip_en: "Αριθμός ΦΕΚ",
        example: 1234
    },

    fek_date: {
        category: Category.Planning,
        title_gr: "Ημερομηνία ΦΕΚ",
        tooltip_gr: "Ημερομηνία ΦΕΚ",
        title_en: "Ημερομηνία ΦΕΚ",
        tooltip_en: "Ημερομηνία ΦΕΚ"
    },

    energy_class : {
        category: Category.Sustainability,
        title_gr: "Ενεργειακή κλάση κτιρίου",
        tooltip_gr: "Ενεργειακή κλάση κτιρίου",
        title_en: "Ενεργειακή κλάση κτιρίου",
        tooltip_en: "Ενεργειακή κλάση κτιρίου",
        example: "B+",
    },

    has_photovoltaic_panels: {
        category: Category.Sustainability,
        title_gr: "Υπάρχει εγκατάσταση φωτοβολταϊκών πανέλων;",
        tooltip_gr: "Υπάρχει εγκατάσταση φωτοβολταϊκών πανέλων;",
        title_en: "Υπάρχει εγκατάσταση φωτοβολταϊκών πανέλων;",
        tooltip_en: "Υπάρχει εγκατάσταση φωτοβολταϊκών πανέλων;",
        example: true
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
        tooltip_en: "Διατρέχει ορατό κίνδυνο κατάρρευσης;",
        example: true
    },

    likes_total: {
        category: Category.Community,
        title_gr: "Total number of likes",
        example_gr: 100,
        tooltip_gr: "People who like the building and think it contributes to the city.",
        title_en: "Total number of likes",
        example_en: 100,
        tooltip_en: "People who like the building and think it contributes to the city.",
    },

    community_local_significance_total: {
        category: Category.Community,
        title_gr: "People who think the building should be recorded as one of local significance",
        title_en: "People who think the building should be recorded as one of local significance",
        example: 100,
    },

    community_activities: {
        category: Category.Community,
        title_gr: "Has this ever been used for community activities in the past?",
        tooltip_gr: "E.g. youth club, place of worship, GP surgery, pub",
        title_en: "Has this ever been used for community activities in the past?",
        tooltip_en: "E.g. youth club, place of worship, GP surgery, pub",
        example: true
    },
    // community_activities_dates: {
    //     category: Category.Community,
    //     title: "When was this building used for community activities?"
    // },


    community_public_ownership: {
        category: Category.Community,
        title_gr: "Is the building in public/community ownership?",
        example_gr: "Not in public/community ownership",
        title_en: "Is the building in public/community ownership?",
        example: "Not in public/community ownership"
    },

    community_public_ownership_sources: {
        category: Category.Community,
        title_gr: "Community ownership source link",
        title_en: "Community ownership source link",
        example: ["https://example.com"]
    },

    ownership_type: {
        category: Category.Community,
        title_gr: "Ιδιοκτησιακό καθεστώς",
        tooltip_gr: "Ιδιοκτησιακό καθεστώς",
        title_en: "Ιδιοκτησιακό καθεστώς",
        tooltip_en: "Ιδιοκτησιακό καθεστώς",
    },

    dynamics_has_demolished_buildings: {
        category: Category.Dynamics,
        title: 'Were any other buildings ever built on this site?',
        example: true,
    },

    demolished_buildings: {
        category: Category.Dynamics,
        title: 'Past (demolished) buildings on this site',
        items: {
            year_constructed: {
                title: 'Construction year',
                example: { min: 1989, max: 1991 },
            },
            year_demolished: {
                title: 'Demolition year',
                example: { min: 1993, max: 1994 },
            },
            lifespan: {
                title: 'Lifespan',
                example: "2-5",
            },
            overlap_present: {
                title: 'Roughly what percentage of this building was inside the current site boundary?',
                tooltip: '',
                example: "25%"
            },
            links: {
                title: 'Links / sources',
                example: ["", ""]
            }
        },
        example: [
            {
                year_constructed: { min: 1989, max: 1991 },
                year_demolished: { min: 1993, max: 1994 },
                lifespan: "2-5", overlap_present: "50%", links: ["", ""]
            }
        ]
    }
};

export const allFieldsConfig = { ...dataFields, ...buildingUserFields };


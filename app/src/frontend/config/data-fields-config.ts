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
    slug?: string;
    title_en?: string;
    title_gr?: string;
    multilingual: boolean;
    /**
     * Text to be displayed in the hint tooltip next to the input field.
     * 
     * This supports a simple Markdown-like syntax for embedding clickable URLs in the hint
     * for example "see [here](http://example.com/info.html) for more information"
     */
    tooltip_en?: string;
    tooltip_gr?: string;
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
        slug: 'community_like',
        perUser: true,
        category: Category.Community,
        title_en: "Do you like this building and think it contributes to the city?",
        title_gr: "Σας αρέσει αυτό το κτίριο και πιστεύετε ότι συνεισφέρει στην πόλη;",
        example: true,
    },
    community_type_worth_keeping: {
        slug: 'community_type_worth_keeping',
        perUser: true,
        category: Category.Community,
        title_en: "Do you think this **type** of building is generally worth keeping?",
        title_gr: "Πιστεύετε ότι ο συγκεκριμένος τύπος κτιρίου αξίζει να διατηρηθεί;",
        example: true,
    },
    community_type_worth_keeping_reasons: {
        slug: 'community_type_worth_keeping_reasons',
        perUser: true,
        category: Category.Community,
        title_en: 'Why is this type of building worth keeping?',
        title_gr: 'Γιατί αξίζει να διατηρηθεί αυτό το είδος κτιρίου;',
        fields: {
            external_design: {
                title_en: "because the external design contributes to the streetscape",
                title_gr: "γιατί ο εξωτερικός σχεδιασμός συμβάλλει στη βελτίωση της ποιότητας του δημόσιου χώρου",
            },
            internal_design: {
                title_en: 'because the internal design works well',
                title_gr: 'επειδή ο εσωτερικός σχεδιασμός λειτουργεί καλά',
            },
            adaptable: {
                title_en: 'because the building is adaptable / can be reused to make the city more sustainable',
                title_gr: 'επειδή το κτίριο είναι προσαρμόσιμο / μπορεί να επαναχρησιμοποιηθεί κάνοντας την πόλη πιο βιώσιμη'
            },
            other: {
                title_en: 'other',
                title_gr: 'άλλο'
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
        slug: 'community_local_significance',
        title_en: "Do you think this building should be recorded as a local heritage asset?",
        title_gr: "Πιστεύετε ότι το κτίριο πρέπει να καταγραφεί ως στοιχείο πολιτιστικής κληρονομιάς;",
        example: true
    }
};

// const { t, i18n };



// const { t, i18n } = useTranslation();

export const dataFields = { /* eslint-disable @typescript-eslint/camelcase */

    location_name: {
        category: Category.Location,
        slug: 'location_name',
        title_en: "Building Name",
        title_gr: "Όνομα Κτιρίου",
        tooltip: "May not be needed for many buildings.",
        example: "The Cruciform",
    },
    location_number: {
        category: Category.Location,
        slug: 'location_number',
        title_en: "Building Number",
        title_gr: "Αριθμός",
        example: '12b',
        tooltip_en: 'Numbers with an optional lowercase letter are accepted, e.g. 141 or 12b',
        tooltip_gr: "Γίνονται δεκτοί και αριθμοί με ένα πεζό γράμμα, π.χ. 141 ή 12β"
    },
    location_street: {
        category: Category.Location,
        slug: 'location_street',
        title_en: "Street",
        title_gr: "Όνομα Δρόμου",
        example: "Gower Street",
        //tooltip: ,
    },
    // location_line_two: {
    //     category: Category.Location,
    //     title_en: "Building Name",
    //     title_gr: "Όνομα Κτιρίου",
    //     example: "Flat 21",
    //     //tooltip: ,
    // },
    location_town: {
        category: Category.Location,
        slug: 'location_town',
        title_en: "Town",
        title_gr: "Πόλη",
        example: "Athens",
        //tooltip: ,
    },
    location_postcode: {
        category: Category.Location,
        slug: 'location_postcode',
        title_en: "Postcode",
        title_gr: "Ταχυδρομικός Κώδικας",
        example: "44 200",
        //tooltip: ,
    },
    ref_elstat_id: {
        category: Category.Location,
        slug: 'ref_elstat_id',
        title_en: "ELSTAT ID",
        title_gr: "ID Ο.Τ. ΕΛΣΤΑΤ 2001",
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
        slug: 'ref_osm_id',
        title_en: "OSM ID",
        title_gr: "OSM ID",
        tooltip: "OpenStreetMap feature ID",
        example: "",
    },
    location_latitude: {
        category: Category.Location,
        slug: 'location_latitude',
        title_en: "Latitude",
        title_gr: "Γεωγραφικό μήκος",
        example: 12.4564,
    },
    location_longitude: {
        category: Category.Location,
        slug: 'location_longitude',
        title_en: "Longitude",
        title_gr: "Γεωγραφικό πλάτος",
        example: 0.12124,
    },



    current_landuse_ground_floor: {
        category: Category.Use,
        slug: 'current_landuse_ground_floor',
        title_gr: "Υφιστάμενη χρήση ισογείου",
        tooltip_gr: "Επικρατούσα χρήση στο επίπεδο του ισογείου",
        title_en: "Dominant ground floor use",
        tooltip_en: "Dominant ground floor use",
        // example: "",
        multilingual: true
    },
    current_landuse_floor: {
        category: Category.Use,
        slug: 'current_landuse_floor',
        title_gr: "Υφιστάμενη επικρατούσα χρήση ορόφων",
        tooltip_gr: "Επικρατούσα χρήση στους ορόφους",
        title_en: "Dominant upper floors use",
        tooltip_en: "Dominant upper floors use",
        multilingual: true
    },

    type_class: {
        category: Category.Type,
        slug: 'type_class',
        title_gr: "Προορισμός κτιρίου",
        tooltip_gr: "",
        title_en: "Original building use",
        tooltip_en: "",
        multilingual: true
    },

    side_distances: {
        category: Category.Type,
        slug: 'side_distances',
        title_gr: "Πλαϊνές αποστάσεις από γειτονικά κτίρια",
        tooltip_gr: "",
        title_en: "Adjacency/configuration",
        tooltip_en: "",
        multilingual: true
    },

    date_year: {
        category: Category.Age,
        slug: 'date_year',
        title_gr: "Έτος κατασκευής κτιρίου (καλύτερη εκτίμηση)",
        tooltip_gr: "",
        title_en: "Year built (best estimate)",
        tooltip_en: "",
        example: 1981
    },


    year_built: {
        category: Category.Age,
        slug: 'year_built',
        title_gr: "Περίοδος κατασκευής κτιρίου (καλύτερη εκτίμηση)",
        tooltip_gr: "",
        title_en: "Period built (best estimate)",
        tooltip_en: "",
        multilingual: true
        // example: 1981
    },

    reconstruction_year: {
        category: Category.Age,
        slug: 'reconstruction_year',
        title_gr: "Έτος τελευταίας ανακατασκευής κτιρίου",
        tooltip_gr: "",
        title_en: "Year of latest major reconstruction",
        tooltip_en: "",
        example: 1983
    },


    date_source: {
        category: Category.Age,
        slug: 'date_source',
        title_gr: "Πηγή πληροφορίας",
        tooltip_gr: "Πηγή για το έτος αρχικής κατασκευής του κτιρίου",
        title_en: "Source details",
        tooltip_en: "Source for the year built",
        multilingual: true
    },


    date_source_link: {
        category: Category.Age,
        slug: 'date_source_link',
        title_gr: "Σύνδεσμος πηγής",
        tooltip_gr: "URL με αναφορά στην ηλικία και το έτος κατασκευής",
        title_en: "Text and Image Links",
        tooltip_en: "URL for age and date reference",
        example: "https://example.com"
    },


    size_storeys_core: {
        category: Category.Size,
        slug: 'size_storeys_core',
        title_gr: "Αριθμός κύριων ορόφων",
        tooltip_gr: "Αριθμός ορόφων πάνω από τη στάθμη του πεζοδρομίου",
        title_en: "Core storeys",
        tooltip_en: "Number of storeys above pavement level",
        example: 2,
    },


    size_storeys_basement: {
        category: Category.Size,
        slug: 'size_storeys_basement',
        title_gr: "Αριθμός υπόγειων ορόφων",
        tooltip_gr: "Αριθμός ορόφων κάνω από τη στάθμη του πεζοδρομίου",
        title_en: "Basement storeys",
        tooltip_en: "Number of storeys below pavement level",
        example: 2,
    },

    size_height_apex: {
        category: Category.Size,
        slug: 'size_height_apex',
        title_gr: "Συνολικό ύψος κτιρίου (μ)",
        tooltip_gr: "",
        title_en: "Total building height (m)",
        tooltip_en: "",
        example: 100.5,
        //tooltip: ,
    },

    size_floor_area_ground: {
        category: Category.Size,
        slug: 'size_floor_area_ground',
        title_gr: "Επιφάνεια ισογείου",
        tooltip_gr: "",
        title_en: "Ground floor level area",
        tooltip_en: "",
        example: 1245.6,
        //tooltip: ,
    },
    size_floor_area_total: {
        category: Category.Size,
        slug: 'size_floor_area_total',
        title_gr: "Επιφάνεια οικοπέδου",
        tooltip_gr: "",
        title_en: "Plot area",
        tooltip_en: "",
        example: 2001.7,
        //tooltip: ,
    },
    size_width_frontage: {
        category: Category.Size,
        slug: 'size_width_frontage',
        title_gr: "Υλοποιημένη δόμηση",
        tooltip_gr: "",
        title_en: "FAR",
        tooltip_en: "",
        example: 12.2,
        //tooltip: ,
    },


    pilotis: {
        category: Category.Size,
        slug: 'pilotis',
        title_gr: "Υπάρχει pilotis;",
        tooltip_gr: "",
        title_en: "Is there a pilotis?",
        tooltip_en: "",
        example: true,
    },


    high_ground_floor: {
        category: Category.Size,
        slug: 'high_ground_floor',
        title_gr: "Υπάρχει ισόγειο μεγάλου ύψους με πατάρι;",
        tooltip_gr: "",
        title_en: "Is there a high ground floor level with a mezzanine?",
        tooltip_en: "",
        example: true
    },


    construction_core_material: {
        category: Category.Construction,
        slug: 'construction_core_material',
        title_gr: "Υλικό κατασκευής",
        tooltip_gr: "Κύριο υλικό κατασκευής",
        title_en: "Construction material",
        tooltip_en: "The main structural material",
        multilingual: true
    },

    construction_roof_covering: {
        category: Category.Construction,
        slug: 'construction_roof_covering',
        title_gr: "Τρόπος κάλυψης κτιρίου",
        tooltip_gr: "",
        title_en: "Main Roof Covering",
        tooltip_en: "",
        multilingual: true
    },

    construction_front_cover_material: {
        category: Category.Construction,
        slug: 'construction_front_cover_material',
        title_gr: "Υλικό κάλυψης κύριας όψης",
        tooltip_gr: "Κύριο υλικό κάλυψης της κύριας όψης",
        title_en: "Material of front facade",
        tooltip_en: "The main finishing material of the front facade",
        multilingual: true
    },

    construction_side_cover_material: {
        category: Category.Construction,
        slug: 'construction_side_cover_material',
        title_gr: "Υλικό κάλυψης πλάγιων όψεων",
        tooltip_gr: "Κύριο υλικό κάλυψης των πλάγιων όψεων και της πίσω όψης",
        title_en: "Material of secondary facades",
        tooltip_en: "The main finishing material of the side and back facades",
        multilingual: true
    },


    has_sidewalk: {
        category: Category.Streetscape,
        slug: 'has_sidewalk',
        title_gr: "Υπάρχει πεζοδρόμιο;",
        tooltip_gr: "",
        title_en: "Is there a pavement?",
        tooltip_en: "",
        example: true
    },

    sidewalk_width: {
        category: Category.Streetscape,
        slug: 'sidewalk_width',
        title_gr: "Πλάτος πεζοδρομίου (μέσος όρος)",
        tooltip_gr: "Πλάτος πεζοδρομίου σε μέτρα, π.χ. 1.5",
        title_en: "Pavement width (average)",
        tooltip_en: "Pavement width in meters, e.g. 1.5",
        example: 2.5
    },

    road_width: {
        category: Category.Streetscape,
        slug: 'road_width',
        title_gr: "Πλάτος δρόμου (μέσος όρος)",
        tooltip_gr: "Πλάτος δρόμου σε μέτρα, π.χ. 4.5",
        title_en: "Street width (average)",
        tooltip_en: "Street width in meters, e.g. 4.5",
        example: 3.5
    },

    sidewalk_accessibility: {
        category: Category.Streetscape,
        slug: 'sidewalk_accessibility',
        title_gr: "Δυνατότητα ανεμπόδιστης κίνησης στο πεζοδρόμιο για όλους",
        tooltip_gr: "",
        title_en: "Is the pavement accesible by all social groups?",
        tooltip_en: "",
        example: true
    },

    sidewalk_lawn: {
        category: Category.Streetscape,
        slug: 'sidewalk_lawn',
        title_gr: "Ύπαρξη πρασιάς",
        tooltip_gr: "",
        title_en: "Is there a building setback?",
        tooltip_en: "",
        example: true
    },

    sidewalk_trees: {
        category: Category.Streetscape,
        slug: 'sidewalk_trees',
        title_gr: "Ύπαρξη δενδροφύτευσης στο πεζοδρόμιο",
        tooltip_gr: "",
        title_en: "Are there planted trees at the pavement?",
        tooltip_en: "",
        example: true
    },

    noise_level: {
        category: Category.Streetscape,
        slug: 'noise_level',
        title_gr: "Επίπεδο θορύβου στο πεζοδρόμιο",
        tooltip_gr: "",
        title_en: "Level of noise",
        tooltip_en: "",
        multilingual: true
    },

    has_pavement: {
        category: Category.Streetscape,
        slug: 'has_pavement',
        title_gr: "Ύπαρξη πεζόδρομου",
        tooltip_gr: "",
        title_en: "Is there a pedestrian street?",
        tooltip_en: "",
        example: true
    },

    has_cycling_track: {
        category: Category.Streetscape,
        slug: 'has_cycling_track',
        title_gr: "Ύπαρξη ποδηλατόδρομου",
        tooltip_gr: "",
        title_en: "Is there a bicycle lane?",
        tooltip_en: "",
        example: true
    },

    has_parodia_stoa: {
        category: Category.Streetscape,
        slug: 'has_parodia_stoa',
        title_gr: "Ύπαρξη παρόδιας στοάς",
        tooltip_gr: "",
        title_en: "Is there a covered walkway parallel to the street?",
        tooltip_en: "",
        example: true
    },

    has_egkarsia_stoa: {
        category: Category.Streetscape,
        slug: 'has_egkarsia_stoa',
        title_gr: "Ύπαρξη εγκάρσιας στοάς",
        tooltip_gr: "",
        title_en: "Is there a passageway that crosses the building?",
        tooltip_en: "",
        example: true
    },


    allowed_far: {
        category: Category.Streetscape,
        slug: 'allowed_far',
        title_gr: "Θεσμοθετημένος συντελεστής δόμησης",
        tooltip_gr: "",
        title_en: "Allowed FAR",
        tooltip_en: "",
        example: 2.5
    },

    allowed_plot_coverage: {
        category: Category.Streetscape,
        slug: 'allowed_plot_coverage',
        title_gr: "Επιτρεπόμενη κάλυψη",
        tooltip_gr: "",
        title_en: "Allowed plot coverage",
        tooltip_en: "",
        example: 2.5
    },

    maximum_building_height: {
        category: Category.Streetscape,
        slug: 'maximum_building_height',
        title_gr: "Μέγιστο επιτρεπόμενο ύψος",
        tooltip_gr: "",
        title_en: "Maximum building height",
        tooltip_en: "",
        example: 2.5
    },


    // inside_protected_area: {
    //     category: Category.Planning,
    //     title_gr: "Βρίσκεται το κτίριο εντός προστατευόμενης περιοχής;",
    //     tooltip_gr: "Βρίσκεται το κτίριο εντός προστατευόμενης περιοχής;",
    //     title_en: "Βρίσκεται το κτίριο εντός προστατευόμενης περιοχής;",
    //     tooltip_en: "Βρίσκεται το κτίριο εντός προστατευόμενης περιοχής;",
    //     example: true
    // },
    // name_of_protected_area: {
    //     category: Category.Planning,
    //     title_gr: "Βρίσκεται το κτίριο εντός περιοχής χαρακτηρισμένης ως ‘Αρχαιολογικού Χώρου’ από το Υπουργείο Πολιτισμού και Αθλητισμού;",
    //     tooltip_gr: "Βρίσκεται το κτίριο εντός περιοχής χαρακτηρισμένης ως ‘Αρχαιολογικού Χώρου’ από το Υπουργείο Πολιτισμού και Αθλητισμού;",
    //     title_en: "Βρίσκεται το κτίριο εντός περιοχής χαρακτηρισμένης ως ‘Αρχαιολογικού Χώρου’ από το Υπουργείο Πολιτισμού και Αθλητισμού;",
    //     tooltip_en: "Βρίσκεται το κτίριο εντός περιοχής χαρακτηρισμένης ως ‘Αρχαιολογικού Χώρου’ από το Υπουργείο Πολιτισμού και Αθλητισμού;",
    //     example: "",
    // },

    // fek_issue_protected: {
    //     category: Category.Planning,
    //     title_gr: "Τεύχος ΦΕΚ",
    //     tooltip_gr: "",
    //     title_en: "OGG Issue",
    //     tooltip_en: ""
    // },

    // fek_number_protected: {
    //     category: Category.Planning,
    //     title_gr: "Αριθμός ΦΕΚ",
    //     tooltip_gr: "",
    //     title_en: "OGG Number",
    //     tooltip_en: "",
    //     example: 1
    // },

    // fek_date_protected: {
    //     category: Category.Planning,
    //     title_gr: "Ημερομηνία ΦΕΚ",
    //     tooltip_gr: "",
    //     title_en: "OGG Date",
    //     tooltip_en: ""
    // },

    inside_archaelogical_area: {
        category: Category.Planning,
        slug: 'inside_archaelogical_area',
        title_gr: "Βρίσκεται το κτίριο εντός περιοχής χαρακτηρισμένης ως ‘Αρχαιολογικού Χώρου’ από το Υπουργείο Πολιτισμού και Αθλητισμού;",
        tooltip_gr: "",
        title_en: " Is the building located within an area characterised as 'Archaelogoical Site' by the Ministry of Culture and Sports?",
        tooltip_en: "",
        example: true
    },
    name_of_archaelogical_area: {
        category: Category.Planning,
        slug: 'name_of_archaelogical_area',
        title_gr: "Όνομα προστατευόμενης περιοχής",
        tooltip_gr: "",
        title_en: "Name of protected area",
        tooltip_en: "",
        example: "",
    },

    fek_issue_archaelogical: {
        category: Category.Planning,
        slug: 'fek_issue_archaelogical',
        title_gr: "Τεύχος ΦΕΚ",
        tooltip_gr: "",
        title_en: "OGG Issue",
        tooltip_en: "",
        multilingual: true
    },

    fek_number_archaelogical: {
        category: Category.Planning,
        slug: 'fek_number_archaelogical',
        title_gr: "Αριθμός ΦΕΚ",
        tooltip_gr: "",
        title_en: "OGG Number",
        tooltip_en: "",
        example: 1
    },

    fek_date_archaelogical: {
        category: Category.Planning,
        slug: 'fek_date_archaelogical',
        title_gr: "Ημερομηνία ΦΕΚ",
        tooltip_gr: "",
        title_en: "OGG Date",
        tooltip_en: ""
    },


    inside_energy_area: {
        category: Category.Planning,
        slug: 'inside_energy_area',
        title_gr: "Βρίσκεται το κτίριο εντός τμήματος πόλεως χαρακτηρισμένου ως προστατευόμενου από το Υπουργείο Περιβάλλοντος και Ενέργειας;",
        tooltip_gr: "",
        title_en: "Is the building located within an area characterised as protected by the Ministry of Environment and Energy?",
        tooltip_en: "",
        example: true
    },
    name_of_energy_area: {
        category: Category.Planning,
        slug: 'name_of_energy_area',
        title_gr: "Όνομα προστατευόμενου τμήματος πόλεως",
        tooltip_gr: "",
        title_en: "Όνομα προστατευόμενου τμήματος πόλεως",
        tooltip_en: "",
        example: "",
    },

    fek_issue_energy: {
        category: Category.Planning,
        slug: 'fek_issue_energy',
        title_gr: "Τεύχος ΦΕΚ",
        tooltip_gr: "",
        title_en: "OGG Issue",
        tooltip_en: "",
        multilingual: true
    },

    fek_number_energy: {
        category: Category.Planning,
        slug: 'fek_number_energy',
        title_gr: "Αριθμός ΦΕΚ",
        tooltip_gr: "",
        title_en: "OGG Number",
        tooltip_en: "",
        example: 1
    },

    fek_date_energy: {
        category: Category.Planning,
        slug: 'fek_date_energy',
        title_gr: "Ημερομηνία ΦΕΚ",
        tooltip_gr: "",
        title_en: "OGG Date",
        tooltip_en: ""
    },

    // officially_protected: {
    //     category: Category.Planning,
    //     title_gr: "Βρίσκεται το κτίριο υπό επίσημο καθεστώς προστασίας;",
    //     tooltip_gr: "Βρίσκεται το κτίριο υπό επίσημο καθεστώς προστασίας;",
    //     title_en: "Βρίσκεται το κτίριο υπό επίσημο καθεστώς προστασίας;",
    //     tooltip_en: "Βρίσκεται το κτίριο υπό επίσημο καθεστώς προστασίας;"
    // },

    officially_preserved: {
        category: Category.Planning,
        slug: 'officially_preserved',
        title_gr: "Έχει χαρακτηριστεί το κτίριο ή τμήμα του κτιρίου ως διατηρητέο, ή ανήκει το κτίριο σε συγκρότημα κτιρίων χαρακτηρισμένο ως διατηρητέο από το Υπουργείο Περιβάλλοντος και Ενέργειας;",
        tooltip_gr: "",
        title_en: "Has the building or part of the building been characterised as listed, or does the building belong to a complex characterised as listed by the Ministry of Environment and Energy?",
        tooltip_en: "",
        example: true
    },

    preservation_designation: {
        category: Category.Planning,
        slug: 'preservation_designation',
        title_gr: "Αν ναι, χαρακτηρισμός κτιρίου:",
        tooltip_gr: "",
        title_en: "If yes, characterisation of the building:",
        tooltip_en: "",
        multilingual: true
    },
    name_of_officially_preserved_building: {
        category: Category.Planning,
        slug: 'name_of_officially_preserved_building',
        title_gr: "Όνομα προστατευόμενου κτιρίου",
        tooltip_gr: "",
        title_en: "Name of protected building",
        tooltip_en: "",
        example: "",
    },

    fek_issue_officially_preserved: {
        category: Category.Planning,
        slug: 'fek_issue_officially_preserved',
        title_gr: "Τεύχος ΦΕΚ",
        tooltip_gr: "",
        title_en: "OGG Issue",
        tooltip_en: "",
        multilingual: true
    },

    fek_number_officially_preserved: {
        category: Category.Planning,
        slug: 'fek_number_officially_preserved',
        title_gr: "Αριθμός ΦΕΚ",
        tooltip_gr: "",
        title_en: "OGG Number",
        tooltip_en: "",
        example: 1
    },

    fek_date_officially_preserved: {
        category: Category.Planning,
        slug: 'fek_date_officially_preserved',
        title_gr: "Ημερομηνία ΦΕΚ",
        tooltip_gr: "",
        title_en: "OGG Date",
        tooltip_en: ""
    },

    officially_monument: {
        category: Category.Planning,
        slug: 'officially_monument',
        title_gr: "Έχει χαρακτηριστεί το κτίριο ως μνημείο από το Υπουργείο Πολιτισμού και Αθλητισμού;",
        tooltip_gr: "",
        title_en: "Has the building been characterised as monument by the Ministry of Culture and Sports?",
        tooltip_en: "",
        example: true
    },

    monument_designation: {
        category: Category.Planning,
        slug: 'monument_designation',
        title_gr: "Αν ναι, χαρακτηρισμός κτιρίου:",
        tooltip_gr: "",
        title_en: "If yes, characterisation of the building:",
        tooltip_en: "",
        multilingual: true
    },
    name_of_officially_monument_building: {
        category: Category.Planning,
        slug: 'name_of_officially_monument_building',
        title_gr: "Όνομα προστατευόμενου κτιρίου",
        tooltip_gr: "",
        title_en: "Name of protected building",
        tooltip_en: "",
        example: "",
    },

    fek_issue_officially_monument: {
        category: Category.Planning,
        slug: 'fek_issue_officially_monument',
        title_gr: "Τεύχος ΦΕΚ",
        tooltip_gr: "",
        title_en: "OGG Issue",
        tooltip_en: "",
        multilingual: true
    },

    fek_number_officially_monument: {
        category: Category.Planning,
        slug: 'fek_number_officially_monument',
        title_gr: "Αριθμός ΦΕΚ",
        tooltip_gr: "",
        title_en: "OGG Number",
        tooltip_en: "",
        example: 1
    },

    fek_date_officially_monument: {
        category: Category.Planning,
        slug: 'fek_date_officially_monument',
        title_gr: "Ημερομηνία ΦΕΚ",
        tooltip_gr: "",
        title_en: "OGG Date",
        tooltip_en: ""
    },


    energy_class : {
        category: Category.Sustainability,
        slug: 'energy_class',
        title_gr: "Ενεργειακή κλάση κτιρίου",
        tooltip_gr: "",
        title_en: "Building energy class",
        tooltip_en: "",
        example: "B+",
    },

    has_photovoltaic_panels: {
        category: Category.Sustainability,
        slug: 'has_photovoltaic_panels',
        title_gr: "Υπάρχει εγκατάσταση φωτοβολταϊκών πανέλων;",
        tooltip_gr: "",
        title_en: "Is there a photovoltaic panel installation?",
        tooltip_en: "",
        example: true
    },

    building_state: {
        category: Category.Sustainability,
        slug: 'building_state',
        title_gr: "Γενική κατάσταση κτιρίου",
        tooltip_gr: "",
        title_en: "General condition of the building",
        tooltip_en:"",
        multilingual: true
    },

    visible_collapse_risk: {
        category: Category.Sustainability,
        slug: 'visible_collapse_risk',
        title_gr: "Διατρέχει ορατό κίνδυνο κατάρρευσης;",
        tooltip_gr: "",
        title_en: "Is there a visible risk of collapse?",
        tooltip_en: "",
        example: true
    },

    likes_total: {
        category: Category.Community,
        slug: 'likes_total',
        title_gr: "Συνολικός αριθμός likes",
        example_gr: 100,
        tooltip_gr: "Άτομα που τους αρέσει το κτίριο και πιστεύουν ότι συνεισφέρει στην πόλη",
        title_en: "Total number of likes",
        example_en: 100,
        tooltip_en: "People who like the building and think it contributes to the city.",
    },

    community_local_significance_total: {
        category: Category.Community,
        slug: 'community_local_significance_total',
        title_gr: "'Ανθρωποι που πιστεύουν ότι το κτίριο θα πρέπει να καταγραφεί ως κτίριο τοπικής σημασίας",
        title_en: "People who think the building should be recorded as one of local significance",
        example: 100,
    },

    community_activities: {
        category: Category.Community,
        slug: 'community_activities',
        title_gr: "Έχει/είχε χρησιμοποιηθεί το συγκεκριμένο κτίριο για κοινωφελείς χρήσεις;",
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
        slug: 'community_public_ownership',
        title_gr: "Is the building in public/community ownership?",
        example_gr: "Not in public/community ownership",
        title_en: "Is the building in public/community ownership?",
        example: "Not in public/community ownership"
    },

    community_public_ownership_sources: {
        category: Category.Community,
        slug: 'community_public_ownership_sources',
        title_gr: "Σύνδεσμος πηγής για μη ιδιωτικά κτίρια",
        title_en: "Community ownership source link",
        example: ["https://example.com"]
    },

    ownership_type: {
        category: Category.Community,
        slug: 'ownership_type',
        title_gr: "Ιδιοκτησιακό καθεστώς",
        tooltip_gr: "",
        title_en: "Type of ownership",
        tooltip_en: "",
        multilingual: true
    },

    dynamics_has_demolished_buildings: {
        category: Category.Dynamics,
        slug: 'dynamics_has_demolished_buildings',
        title_en: 'Were any other buildings ever built on this site?',
        title_gr: 'Χτίστηκαν ποτέ άλλα κτίρια σε αυτήν την τοποθεσία;',
        example: true,
    },

    demolished_buildings: {
        category: Category.Dynamics,
        slug: 'demolished_buildings',
        title: 'Past (demolished) buildings on this site',
        items: {
            year_constructed: {
                title_en: 'Construction year',
                title_gr: 'Έτος κατασκευής',
                example: { min: 1989, max: 1991 },
            },
            year_demolished: {
                title_en: 'Demolition year',
                title_gr: 'Έτος κατεδάφισης',
                example: { min: 1993, max: 1994 },
            },
            lifespan: {
                title_en: 'Lifespan',
                title_gr: 'Διάρκεια ζωής',
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


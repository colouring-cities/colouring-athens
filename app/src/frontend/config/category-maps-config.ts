import { Category } from './categories-config';
import { BuildingMapTileset } from './tileserver-config';

export type LegendElement = {
    color: string;
    border?: string;
    text_en: string;
    text_gr: string;
} | {
    subtitle_en: string;
    subtitle_gr: string;
};

export interface LegendConfig {
    title_en: string;
    title_gr: string;
    description_en?: string;
    description_gr?: string;
    disclaimer_en?: string;
    disclaimer_gr?: string;
    elements: LegendElement[];
}

export interface CategoryMapDefinition {
    mapStyle: BuildingMapTileset;
    legend: LegendConfig;
}

export const defaultMapCategory = Category.Use;

export const categoryMapsConfig: { [key in Category]: CategoryMapDefinition[] } = {
    [Category.Age]: [{
        mapStyle: 'year_built',
        legend: {
            title_en: 'Period built',
            title_gr: 'Περίοδος κατασκευής',
            elements: [
                { color: 'rgb(255, 249, 184)', text_en: 'After 2010', text_gr: 'Μετά το 2010' },
                { color: 'rgb(251, 175, 39)', text_en: '1985-2010' , text_gr: '1985-2010'},
                { color: 'rgb(230, 113, 29)', text_en: '1955-1985', text_gr: '1955-1985' },
                { color: 'rgb(143, 3, 3)', text_en: '1920-1955', text_gr: '1920-1955' },
                { color: 'rgb(143, 83, 133)', text_en: 'Before 1920', text_gr: 'Προ 1920' }
            ]
        },
    }],
    [Category.Size]: [
        {
            mapStyle: 'size_storeys_core',
            legend: {
                title_en: 'Number of core storeys',
                title_gr: 'Αριθμός κύριων ορόφων',
                elements: [
                    { color: '#f7f4f9', text_en: '1', text_gr: '1' },
                    { color: '#e7e1ef', text_en: '2', text_gr: '2' },
                    { color: '#d4b9da', text_en: '3', text_gr: '3' },
                    { color: '#c994c7', text_en: '4' , text_gr: '4'},
                    { color: '#df65b0', text_en: '5', text_gr: '5' },
                    { color: '#e7298a', text_en: '6' , text_gr: '6'},
                    { color: '#ce1256', text_en: '7' , text_gr: '7'},
                    { color: '#980043', text_en: '≥8' , text_gr: '≥8'}
                ]
            },
        },
        {
            mapStyle: 'size_height',
            legend: {
                title_en: 'Height (m)',
                title_gr: 'Ύψος (μ)',
                elements: [
                    { color: 'rgb(245, 245, 250)', text_en: '0-3', text_gr: '0-3' },
                    { color: 'rgb(217, 225, 242)', text_en: '3-6', text_gr: '3-6' },
                    { color: 'rgb(180, 198, 231)', text_en: '6-9', text_gr: '6-9' },
                    { color: 'rgb(142, 169, 219)', text_en: '9-12', text_gr: '9-12' },
                    { color: 'rgb(120, 150, 196)', text_en: '12-15' , text_gr: '12-15'},
                    { color: 'rgb(103, 124, 163)', text_en: '15-18', text_gr: '15-18' },
                    { color: 'rgb(114, 116, 181)', text_en: '18-30', text_gr: '18-30' },
                    { color: 'rgb(72, 75, 153)', text_en: '≥30', text_gr: '≥30' }
                ]
            },
        }
    ],
    [Category.Team]: [{
        mapStyle: undefined,
        legend: {
            title_en: 'Team',
            title_gr: 'Team',
            elements: []
        },
    }],
    [Category.Construction]: [{
        mapStyle: 'construction_core_material',
        legend: {
            title_en: 'Construction',
            title_gr: 'Κατασκευή',
            elements: [
                { color: "rgb(252, 168, 157)", text_en: "Reinforced concrete" , text_gr: 'Οπλισμένο σκυρόδεμα'},
                { color: "rgb(255, 255, 227)", text_en: "Stone", text_gr: 'Λιθόκτιστο' },
                { color: "rgb(245, 217, 107)", text_en: "Brick", text_gr: 'Πλινθόκτιστο' },
                { color: "rgb(190, 255, 232)", text_en: "Metal structure", text_gr: 'Μεταλλική κατασκευή' },
                { color: "rgb(150, 97, 59)", text_en: "Wood", text_gr: 'Ξύλινη κατασκευή' },
                { color: "rgb(196, 138, 133)", text_en: "Mixed", text_gr: 'Σύμμικτη κατασκευή' },
            ]
        },
    }],
    [Category.Location]: [{
        mapStyle: 'location',
        legend: {
            title_en: 'Location',
            title_gr: 'Τοποθεσία',
            description_en: '% data collected',
            description_gr: '% συλλογής δεδομένων',
            elements: [
                { color: '#084081', text_en: '≥80%', text_gr: '≥80%' },
                { color: '#0868ac', text_en: '60–80%', text_gr: '60–80%' },
                { color: '#43a2ca', text_en: '40–60%' , text_gr: '40–60%'},
                { color: '#7bccc4', text_en: '20–40%', text_gr: '20–40%' },
                { color: '#bae4bc', text_en: '<20%', text_gr: '<20%' }
            ]
        },
    }],
    [Category.Community]: [
        {
            mapStyle: 'likes',
            legend: {
                title_en: 'Like Me',
                title_gr: 'Μου αρέσει',
                elements: [
                    { color: '#bd0026', text_en: '👍👍👍👍 100+' , text_gr: '👍👍👍👍 100+'},
                    { color: '#e31a1c', text_en: '👍👍👍 50–99' , text_gr: '👍👍👍 50–99'},
                    { color: '#fc4e2a', text_en: '👍👍 20–49' , text_gr: '👍👍 20–49'},
                    { color: '#fd8d3c', text_en: '👍👍 10–19', text_gr: '👍👍 10–19' },
                    { color: '#feb24c', text_en: '👍 3–9', text_gr: '👍 3–9' },
                    { color: '#fed976', text_en: '👍 2' , text_gr: '👍 2'},
                    { color: '#ffe8a9', text_en: '👍 1' , text_gr: '👍 1'}
                ]
            }
        },
        {
            mapStyle: 'community_local_significance_total',
            legend: {
                title_en: 'Local Significance',
                title_gr: 'Τοπική Αξία',
                description_en: 'People who think the building should be locally listed',
                description_gr: 'Πόσοι πιστεύουν ότι το κτίριο αξίζει να προστατευθεί',
                elements: [
                    { color: '#bd0026', text_en: '100+', text_gr: '100+' },
                    { color: '#e31a1c', text_en: '50–99', text_gr: '50–99' },
                    { color: '#fc4e2a', text_en: '20–49' , text_gr: '20–49'},
                    { color: '#fd8d3c', text_en: '10–19', text_gr: '10–19' },
                    { color: '#feb24c', text_en: '3–9', text_gr: '3–9' },
                    { color: '#fed976', text_en: '2', text_gr: '2' },
                    { color: '#ffe8a9', text_en: '1', text_gr: '1' }
                ]
            }
        },
        {
            mapStyle: 'ownership_type',
            legend: {
                title_en: 'Public Ownership',
                title_gr: 'Δημόσια Ιδιοκτησία',
                description_en: 'Is the building in some form of public/community ownership',
                description_gr: 'Ανήκει το κτίριο στον ευρύτερο δημόσιο τομέα;',
                elements: [
                    { color: '#1166ff', text_en: 'Yes', text_gr: 'Ναι' },
                    { color: '#ffaaa0', text_en: 'No', text_gr: 'Όχι' }
                ]
            }
        }
    ],
    [Category.Planning]: [{
        mapStyle: 'planning_combined',
        legend: {
            title_en: 'Statutory protections',
            title_gr: 'Προστατευόμενα κτίρια',
            disclaimer_en: 'All data relating to designated buildings should be checked on the National Heritage List for England or local authority websites where used for planning or development purposes',
            disclaimer_gr: 'Όλα τα δεδομένα σχετικά με τα προστατευόμενα κτίρια πρέπει να ελέγχονται με βάση τις λίστες του Υπουργείου Περιβάλλοντος και Ενέργειας και του Υπουργείου Πολιτισμού και Αθλητισμού και βάσει της τοπικής νομοθεσίας.',
            elements: [
                { color: '#95beba', text_en: 'In protected area' , text_gr: 'Εντός προστατευόμενης περιοχής'},
                { color: '#c72e08', text_en: 'Listed' , text_gr: 'Διατηρητέο'},
                // { color: '#e75b42', text_en: 'Ancient Monument', text_gr: 'Αρχαίο Μνημείο' },
                { color: '#ffbea1', text_en: 'Monument', text_gr: 'Μνημείο' },
                { color: '#858ed4', text_en: 'Listed & Monument', text_gr: 'Διατηρητέο & Μνημείο' },
            ]
        },
    }],
    [Category.Sustainability]: [{
        mapStyle: 'building_state',
        legend: {
            title_en: 'Sustainability',
            title_gr: 'Βιωσιμότητα',
            description_en: 'Maintenance level of building',
            description_gr: 'Κατάσταση συντήρησης κτιρίου',
            elements: [
                { color: "rgb(44, 159, 41)", text_en: 'Good', text_gr: 'Καλή' },
                { color: "rgb(251, 175, 39)", text_en: 'Moderate', text_gr: 'Μέτρια' },
                { color: "rgb(230, 113, 29)", text_en: 'Bad', text_gr: 'Κακή' },
                { color: "rgb(143, 3, 3)", text_en: 'Ruin', text_gr: 'Ερείπιο' },
            ]
        },
    }],
    [Category.Type]: [
        {
            mapStyle: 'type_class',
            legend: {
                title_en: 'Original building use',
                title_gr: 'Προορισμός κτιρίου',
                elements: [
                    { color: 'rgb(195, 225, 235)', text_en: "Single-family home" , text_gr: 'Μονοκατοικία'},
                    { color: 'rgb(106, 157, 186)', text_en: "Duplex" , text_gr: 'Διπλοκατοικία'},
                    { color: 'rgb(149, 222, 216)', text_en: "Apartment building" , text_gr: 'Πολυκατοικία'},
                    { color: 'rgb(104, 171, 165)', text_en: "Office building", text_gr: 'Κτίριο γραφείων' },
                    { color: 'rgb(172, 201, 143)', text_en: "Commercial building", text_gr: 'Εμπορικό ακίνητο' },
                    { color: 'rgb(109, 138, 81)', text_en: "Other", text_gr: 'Άλλο' }
                ]
            },
        },
        {
            mapStyle: 'side_distances',
            legend: {
                title_en: 'Adjacency/configuration',
                title_gr: 'Πλαϊνές αποστάσεις από γειτονικά κτίρια',
                elements: [
                    { color: "rgb(242, 162, 185)", text_en: "Detached" , text_gr: 'Σε απόσταση'},
                    { color: "rgb(171, 143, 176)", text_en: "Semi-Detached", text_gr: 'Σε μερική επαφή' },
                    { color: "rgb(56, 145, 209)", text_en: "Attached", text_gr: 'Σε πλήρη επαφή' },
                ]
            },
        }
    ],
    [Category.Use]: [

        {
            mapStyle: 'use_ground',
            legend: {
                title_en: 'Dominant ground floor use',
                title_gr: 'Επικρατούσα χρήση ισογείου',
                elements: [
                    { color: 'rgb(255, 140, 0)', text_en: 'Mixed Use', text_gr: 'Μικτή χρήση' },
                    { subtitle_en: 'Single use:',subtitle_gr: 'Μία χρήση:' },
                    { color: 'rgb(245, 245, 143)', text_en: 'Residential', text_gr: 'Κατοικία' },
                    { color: 'rgb(229, 5, 13)', text_en: 'Retail', text_gr: 'Λιανικό εμπόριο' },
                    { color: 'rgb(201, 148, 199)', text_en: 'Industry & Workshops', text_gr: 'Βιομηχανία & Βιοτεχνία' },
                    { color: 'rgb(150, 97, 59)', text_en: 'Wholesale & Warehouses' , text_gr: 'Χονδρεμπόριο & Αποθήκες'},
                    { color: 'rgb(83, 245, 221)', text_en: 'Offices & Services', text_gr: 'Γραφεία & Υπηρεσίες' },
                    { color: 'rgb(255, 191, 191)', text_en: 'Recreation & Leisure', text_gr: 'Αναψυχή και διασκέδαση' },
                    { color: 'rgb(56, 145, 209)', text_en: 'Education' , text_gr: 'Εκπαίδευση'},
                    { color: 'rgb(115, 204, 209)', text_en: 'Health', text_gr: 'Υγεία' },
                    { color: 'rgb(179, 222, 105)', text_en: 'Transport', text_gr: 'Μεταφορές' },
                    { color: 'rgb(204, 204, 204)', text_en: 'Utilities & Infrastructure', text_gr: 'Εγκαταστάσεις υποδομών' },
                    { color: 'rgb(137, 137, 68)', text_en: 'Under construction', text_gr: 'Υπό ανέγερση' },
                    { color: 'rgb(255, 255, 255)', text_en: 'Unused - Vacant' , text_gr: 'Κενό - χωρίς χρήση'},
                    { color: 'rgb(108, 111, 142)', text_en: 'Other ', text_gr: 'Λοιπές χρήσεις' },
                ]
            },
        },
        {
            mapStyle: 'use_floor',
            legend: {
                title_en: 'Dominant floors use',
                title_gr: 'Επικρατούσα χρήση ορόφων',
                elements: [
                    { color: 'rgb(255, 140, 0)', text_en: 'Mixed Use', text_gr: 'Μικτή χρήση' },
                    { subtitle_en: 'Single use:',subtitle_gr: 'Μία χρήση:' },
                    { color: 'rgb(245, 245, 143)', text_en: 'Residential', text_gr: 'Κατοικία' },
                    { color: 'rgb(229, 5, 13)', text_en: 'Retail', text_gr: 'Λιανικό εμπόριο' },
                    { color: 'rgb(201, 148, 199)', text_en: 'Industry & Workshops', text_gr: 'Βιομηχανία & Βιοτεχνία' },
                    { color: 'rgb(150, 97, 59)', text_en: 'Wholesale & Warehouses' , text_gr: 'Χονδρεμπόριο & Αποθήκες'},
                    { color: 'rgb(83, 245, 221)', text_en: 'Offices & Services', text_gr: 'Γραφεία & Υπηρεσίες' },
                    { color: 'rgb(255, 191, 191)', text_en: 'Recreation & Leisure', text_gr: 'Αναψυχή και διασκέδαση' },
                    { color: 'rgb(56, 145, 209)', text_en: 'Education' , text_gr: 'Εκπαίδευση'},
                    { color: 'rgb(115, 204, 209)', text_en: 'Health', text_gr: 'Υγεία' },
                    { color: 'rgb(179, 222, 105)', text_en: 'Transport', text_gr: 'Μεταφορές' },
                    { color: 'rgb(204, 204, 204)', text_en: 'Utilities & Infrastructure', text_gr: 'Εγκαταστάσεις υποδομών' },
                    { color: 'rgb(137, 137, 68)', text_en: 'Under construction', text_gr: 'Υπό ανέγερση' },
                    { color: 'rgb(255, 255, 255)', text_en: 'Unused - Vacant' , text_gr: 'Κενό - χωρίς χρήση'},
                    { color: 'rgb(108, 111, 142)', text_en: 'Other ', text_gr: 'Λοιπές χρήσεις' },
                ]
            },
        },
        {
            mapStyle: 'use',
            legend: {
                title_en: 'Dominant building use',
                title_gr: 'Επικρατούσα χρήση κτιρίου',
                elements: [
                    { color: 'rgb(255, 140, 0)', text_en: 'Mixed Use', text_gr: 'Μικτή χρήση' },
                    { subtitle_en: 'Single use:',subtitle_gr: 'Μία χρήση:' },
                    { color: 'rgb(245, 245, 143)', text_en: 'Residential', text_gr: 'Κατοικία' },
                    { color: 'rgb(229, 5, 13)', text_en: 'Retail', text_gr: 'Λιανικό εμπόριο' },
                    { color: 'rgb(201, 148, 199)', text_en: 'Industry & Workshops', text_gr: 'Βιομηχανία & Βιοτεχνία' },
                    { color: 'rgb(150, 97, 59)', text_en: 'Wholesale & Warehouses' , text_gr: 'Χονδρεμπόριο & Αποθήκες'},
                    { color: 'rgb(83, 245, 221)', text_en: 'Offices & Services', text_gr: 'Γραφεία & Υπηρεσίες' },
                    { color: 'rgb(255, 191, 191)', text_en: 'Recreation & Leisure', text_gr: 'Αναψυχή και διασκέδαση' },
                    { color: 'rgb(56, 145, 209)', text_en: 'Education' , text_gr: 'Εκπαίδευση'},
                    { color: 'rgb(115, 204, 209)', text_en: 'Health', text_gr: 'Υγεία' },
                    { color: 'rgb(179, 222, 105)', text_en: 'Transport', text_gr: 'Μεταφορές' },
                    { color: 'rgb(204, 204, 204)', text_en: 'Utilities & Infrastructure', text_gr: 'Εγκαταστάσεις υποδομών' },
                    { color: 'rgb(137, 137, 68)', text_en: 'Under construction', text_gr: 'Υπό ανέγερση' },
                    { color: 'rgb(255, 255, 255)', text_en: 'Unused - Vacant' , text_gr: 'Κενό - χωρίς χρήση'},
                    { color: 'rgb(108, 111, 142)', text_en: 'Other ', text_gr: 'Λοιπές χρήσεις' },
                ]
            },
        },
    ],
    [Category.Streetscape]: [        
        {
        mapStyle: 'sidewalk_width',
        legend: {
            title_en: 'Pavement width (m)',
            title_gr: 'Πλάτος πεζοδρομίου (μ)',
            elements: [
                { color: 'rgb(143, 3, 3)', text_en: "Without pavement", text_gr: 'Χωρίς πεζοδρόμιο' },
                { color: 'rgb(229, 5, 13)', text_en: "0-0.5", text_gr: '0-0,5' },
                { color: 'rgb(230, 113, 29)', text_en: "0.5-1.0", text_gr: '0,5-1,0' },
                { color: 'rgb(251, 175, 39)', text_en: "1.0-1.5" , text_gr: '1,0-1,5'},
                { color: 'rgb(157, 203, 60)', text_en: "1.5-3.0", text_gr: '1,5-3,0' },
                { color: 'rgb(44, 159, 41)', text_en: ">3.0" , text_gr: '>3,0'}
            ]
        },
    },
    {
        mapStyle: 'noise_level',
        legend: {
            title_en: 'Street noise level',
            title_gr: 'Επίπεδο θορύβου',
            elements: [
                { color: "rgb(44, 159, 41)", text_en: "Low" , text_gr: 'Χαμηλό'},
                { color: "rgb(251, 175, 39)", text_en: "Moderate", text_gr: 'Μέτριο' },
                { color: "rgb(230, 113, 29)", text_en: "High", text_gr: 'Υψηλό' },
                { color: "rgb(143, 3, 3)", text_en: "Too High" , text_gr: 'Πολύ υψηλό'},
            ]
        },
    }
],
    [Category.Dynamics]: [{
        mapStyle: 'dynamics_demolished_count',
        legend: {
            title_en: 'Dynamics',
            title_gr: 'Dynamics',
            description_en: 'Demolished buildings on the same site',
            description_gr: 'Κατεδαφισμένα κτίρια στο ίδιο οικόπεδο',
            elements: [
                {
                    text_en: '7+', text_gr: '7+',
                    color: '#bd0026',
                }, {
                    text_en: '6', text_gr: '6',
                    color: '#e31a1c',
                }, {
                    text_en: '5', text_gr: '5',
                    color: '#fc4e2a',
                }, {
                    text_en: '4', text_gr: '4',
                    color: '#fd8d3c',
                }, {
                    text_en: '3', text_gr: '3',
                    color: '#feb24c',
                }, {
                    text_en: '2', text_gr: '2',
                    color: '#fed976',
                }, {
                    text_en: '1', text_gr: '1',
                    color: '#ffe8a9',
                }, {
                    text_en: 'None', text_gr: 'Κανένα',
                    color: '#0C7BDC'
                }
            ],
        },
    }]

};

/**
 * An enumeration of all categories in the system.
 * The string value is also the category URL slug.
 */
export enum Category {
    Location = 'location',
    Use = 'use',
    Type = 'type',
    Age = 'age',
    Size = 'size',
    Construction = 'construction',
    Streetscape = 'streetscape',
    Team = 'team',
    Planning = 'planning',
    Sustainability = 'sustainability',
    Dynamics = 'dynamics',
    Community = 'community',
}

/**
 * This is the sole configuration variable that defines the order of the categories
 * in the category grid. The order in the enum definition or the other configs does
 * not affect the order of the grid.
 */
export const categoriesOrder: Category[] = [
    Category.Location,
    Category.Use,
    Category.Type,
    Category.Age,
    Category.Size,
    Category.Construction,
    Category.Streetscape,
    Category.Team,
    Category.Planning,
    Category.Sustainability,
    Category.Dynamics,
    Category.Community,
];

interface CategoryDefinition {
    inactive?: boolean;
    slug: string;
    name_gr: string;
    name_en: string;
    aboutUrl: string;
    intro_gr: string;
    intro_en: string;
}

export const categoriesConfig: {[key in Category]: CategoryDefinition} = {
    [Category.Age]: {
        slug: 'age',
        name_gr: 'Ηλικία',
        name_en: 'Age',
        aboutUrl: 'https://pages.colouring.london/age',
        intro_gr: '',
        intro_en: 'Building age data can support energy analysis and help predict long-term change.',
    },
    [Category.Size]: {
        slug: 'size',
        name_gr: 'Μέγεθος',
        name_en: 'Size',
        aboutUrl: 'https://pages.colouring.london/shapeandsize',
        intro_gr: '',
        intro_en: 'How big are buildings?',
    },
    [Category.Team]: {
        inactive: true,
        slug: 'team',
        name_gr: 'Ομάδα σχεδιασμού',
        name_en: 'Team',
        aboutUrl: 'https://pages.colouring.london/team',
        intro_gr: '',
        intro_en: 'Who built the buildings? Coming soon…',
    },
    [Category.Construction]: {
        slug: 'construction',
        name_gr: 'Κατασκευή',
        name_en: 'Construction',
        aboutUrl: 'https://pages.colouring.london/construction',
        intro_gr: '',
        intro_en: 'How are buildings built?',
    },
    [Category.Location]: {
        slug: 'location',
        name_gr: 'Τοποθεσία',
        name_en: 'Location',
        aboutUrl: 'https://pages.colouring.london/location',
        intro_gr: '',
        intro_en: 'Where are the buildings? Address, location and cross-references.',
    },
    [Category.Community]: {
        slug: 'community',
        name_gr: 'Κοινότητα',
        name_en: 'Community',
        aboutUrl: 'https://pages.colouring.london/community',
        intro_gr: '',
        intro_en: 'How does this building work for the local community?',
    },
    [Category.Planning]: {
        slug: 'planning',
        name_gr: 'Προγραμματισμός',
        name_en: 'Planning',
        aboutUrl: 'https://pages.colouring.london/planning',
        intro_gr: '',
        intro_en: 'Planning controls relating to protection and reuse.',
    },
    [Category.Sustainability]: {
        slug: 'sustainability',
        name_gr: 'Βιωσιμότητα',
        name_en: 'Sustainability',
        aboutUrl: 'https://pages.colouring.london/sustainability',
        intro_gr: '',
        intro_en: 'Are buildings energy efficient?',
    },
    [Category.Type]: {
        slug: 'type',
        name_gr: 'Τύπος',
        name_en: 'Type',
        aboutUrl: 'https://pages.colouring.london/buildingtypology',
        intro_gr: '',
        intro_en: 'How were buildings previously used?',
    },
    [Category.Use]: {
        slug: 'use',
        name_gr: 'Χρήση',
        name_en: 'Current Use',
        aboutUrl: 'https://pages.colouring.london/use',
        intro_gr: '',
        intro_en: 'How are buildings used, and how does use change over time?',
    },
    [Category.Streetscape]: {
        inactive: true,
        slug: 'streetscape',
        name_gr: 'Περιβάλλων χώρος',
        name_en: 'Streetscape',
        aboutUrl: 'https://pages.colouring.london/greenery',
        intro_gr: '',
        intro_en: "What's the building's context? Coming soon…",
    },
    [Category.Dynamics]: {
        slug: 'dynamics',
        name_gr: 'Δυναμικές',
        name_en: 'Dynamics',
        aboutUrl: 'https://pages.colouring.london/dynamics',
        intro_gr: '',
        intro_en: 'How has the site of this building changed over time?'
    },
};

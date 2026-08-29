export const SITE = {
  name: "VAUCLUSE AMÉNAGEMENT INTÉRIEUR",

  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,

  legalName: "GROUMA PLÂTRERIE & AMÉNAGEMENT VAUCLUSE",

  owner: "Jaoid Grouma",

  description:
    "Vaucluse Aménagement Intérieur réalise vos travaux de plâtrerie, isolation, peinture, agencement et transformation intérieure à Carpentras et dans le Vaucluse.",

  shortDescription:
    "Plâtrerie • Isolation • Peinture • Agencement",

  seoTitle:
    "Plaquiste à Carpentras | Vaucluse Aménagement Intérieur",

  location: {
    city: "Carpentras",
    postalCode: "84200",
    department: "Vaucluse",
    country: "FR",
  },

  address: {
    street: "26 rue des Remparts",
    postalCode: "84200",
    city: "Carpentras",
    country: "France",
  },

  contact: {
    phoneDisplay: "07 66 04 42 60",
    phoneInternational: "+33766044260",
    email: "grouma.m@gmail.com",
  },

  business: {
    siren: "502442726",
    siret: "50244272600035",
    ape: "4331Z",
  },

  services: [
    "Plâtrerie",
    "Cloisons",
    "Doublages",
    "Faux plafonds",
    "Isolation intérieure",
    "Peinture intérieure",
    "Placo décoratif",
    "Transformation intérieure",
  ],

  audiences: [
    "Particuliers",
    "Entreprises",
    "Maîtrise d’œuvre",
    "SCI",
    "Collectivités",
  ],

  serviceArea: [
    "Carpentras",
    "Vaucluse",
  ],
} as const

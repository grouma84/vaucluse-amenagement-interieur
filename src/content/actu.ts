export const ACTU_FILTERS = [
    "Tous",
    "Chantiers",
    "Conseils",
    "Avant / Après",
    "Déco",
    "Isolation",
] as const

export const ACTU_FEATURED = {
    primary: {
        category: "CHANTIER",
        title: "Placo décoratif : volumes et éclairage intégré",
        excerpt:
            "Mur TV, volumes sur mesure et plafond décoratif : une réalisation pensée pour structurer la pièce et intégrer l’éclairage.",
        image:
            "/images/realisations/plafond-decoratif-mur-tv-eclaire.jpg",
        imageAlt:
            "Mur TV en placo décoratif avec volumes et éclairage intégré",
        href: "/placo-decoratif-carpentras",
        cta: "Voir la réalisation",
    },

    secondary: [
        {
            category: "CONSEIL",
            title: "Pourquoi prévoir l’éclairage avant de fermer l’ouvrage ?",
            excerpt:
                "LED, spots, prises et câbles doivent être anticipés avant la fermeture des volumes en placo.",
            image:
                "/images/realisations/plafond-a-niveaux-avec-cable.jpg",
            imageAlt:
                "Plafond en placo à plusieurs niveaux avec réservation pour les équipements",
            href: "/placo-decoratif-carpentras",
            cta: "Lire le conseil",
        },
        {
            category: "IDÉE DÉCO",
            title: "Des niches rondes directement intégrées dans le mur",
            excerpt:
                "Les formes peuvent être adaptées aux dimensions disponibles pour devenir une véritable partie de l’aménagement.",
            image:
                "/images/realisations/niches-rondes-placo-decoratif-mur.jpg",
            imageAlt:
                "Mur en placo décoratif avec trois niches rondes intégrées",
            href: "/placo-decoratif-carpentras",
            cta: "Voir les possibilités",
        },
    ],
} as const

export const ACTU_FEED = {
    reel: {
        category: "CHANTIER EN VIDÉO",
        title: "Du plafond existant aux volumes décoratifs",
        video: "/videos/plafond deco.mp4",
        href: "/placo-decoratif-carpentras",
    },

    question: {
        question:
            "Peut-on créer une nouvelle pièce dans un grand espace ?",
        answer:
            "Une cloison peut permettre de redistribuer un volume existant pour créer une chambre, un bureau, un dressing ou séparer différents usages.",
        href: "/cloisons-doublages-carpentras",
    },

    chantier: {
        category: "CHANTIER",
        title: "Créer des volumes et donner du relief au plafond",
        excerpt:
            "Ossature, niveaux, réservations et finitions : le plafond peut être travaillé pour structurer visuellement la pièce tout en intégrant les contraintes techniques.",
        image:
            "/images/realisations/plafond-a-niveaux-avec-cable.jpg",
        imageAlt:
            "Plafond en placo à plusieurs niveaux en cours de réalisation",
        href: "/placo-decoratif-carpentras",
    },
} as const
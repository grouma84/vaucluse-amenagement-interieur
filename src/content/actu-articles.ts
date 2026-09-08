export type ActuArticle = {
    slug: string
    category: string
    title: string
    excerpt: string
    image: string
    imageAlt: string
    publishedAt: string
    location?: string
    intro: string
    paragraphs: string[]
    next?: string
    serviceHref?: string
    serviceLabel?: string
}

export const ACTU_ARTICLES: ActuArticle[] = [
    {
        slug: "doublage-ossature-chantier-neuf",

        category: "CHANTIER PARTICULIER",

        title:
            "Doublage sur ossature : Chantier prêt pour les cloisons",

        excerpt:
            "Réalisation du doublage des murs sur ossature métallique. Prochaine étape : tracer et réaliser les cloisons.",

        image:
            "/images/actu/doublage-ossature-chantier-neuf.jpg",

        imageAlt:
            "Doublage des murs sur ossature métallique dans un chantier neuf",

        publishedAt: "2026-09-06",

        location: "Vaucluse",

        intro:
            "Sur ce chantier particulier neuf, réalisation du doublage des murs sur ossature métallique.",

        paragraphs: [
            "Les plaques sont posées et les gaines sont laissés en attente.",
            "Le doublage est maintenant suffisamment avancé pour passer à la prochaine étape : le traçage des cloisons.",
            "C’est à partir de là que les différentes pièces vont commencer à prendre forme.",
        ],

        next:
            "À suivre : traçage et réalisation des cloisons.",

        serviceHref:
            "/cloisons-doublages-carpentras",

        serviceLabel:
            "Voir nos travaux de cloisons et doublages",
    },
    {
        slug: "isolation-laine-de-bois-chaleur-vaucluse",

        category: "CHANTIER • ISOLATION",

        title:
            "Pourquoi la laine de bois retarde la chaleur: ce que ça change vraiment l'été dans le Vaucluse",

        excerpt:
            "Avec les fortes chaleurs dans le Vaucluse, l’isolation ne sert plus seulement à garder le chaud l’hiver. Sur ce chantier, laine de bois et membrane sont mises en œuvre avant la fermeture du doublage.",

        image:
            "/images/actu/isolation-laine-de-bois-chaleur-vaucluse.jpg",

        imageAlt:
            "Plaquiste posant une membrane devant une isolation en laine de bois dans le Vaucluse",

        publishedAt: "2026-09-08",

        location: "Vaucluse",

        intro:
            "Dans le bâtiment, quand on parle isolation, on pense souvent au froid. Dans le Vaucluse, avec les fortes chaleurs, il faut aussi regarder comment la maison va se comporter en plein été.",

        paragraphs: [
            "Sur ce chantier, l'isolation en laine de bois est posée dans le doublage. Avant de fermer avec les plaques de plâtre, place maintenant à la pose de la membrane.",

            "La laine de bois est particulièrement adaptée au confort d'été : sa densité lui permet de ralentir la montée en température de la paroi. C'est ce qu'on appelle le déphasage thermique. En clair, quand un mur exposé au soleil chauffe pendant plusieurs heures, l'isolant retarde le moment où cette chaleur atteint l'intérieur de la pièce.",

            "Dans le Vaucluse, ce n'est pas un détail. L'objectif n'est pas de promettre une maison fraîche sans climatisation, mais de limiter la vitesse à laquelle elle monte en température pendant les épisodes de forte chaleur.",

            "La membrane, elle, joue un autre rôle : elle assure la continuité de l'étanchéité à l'air et régule la circulation de la vapeur d'eau dans la paroi. Sur le chantier, c'est souvent aux raccords que tout se joue : autour des fenêtres, dans les angles, au passage des gaines. C'est là qu'il faut être le plus rigoureux avant de fermer.",

            "Un bon isolant derrière une plaque de plâtre ne suffit donc pas à lui seul. C'est l'ensemble — isolant, membrane, raccords et qualité de pose — qui fait la performance réelle de la paroi.",

            "Isoler une maison dans le Vaucluse ne se résume plus à calculer des économies de chauffage. Il faut aussi anticiper la manière dont elle va se comporter après plusieurs jours de forte chaleur.",
        ],

        next:
            "À suivre : fermeture du doublage et pose des plaques de plâtre.",

        serviceHref:
            "/isolation-interieure-carpentras",

        serviceLabel:
            "Voir nos travaux d’isolation intérieure",
    },
]

export function getActuArticleBySlug(slug: string) {
    return ACTU_ARTICLES.find((article) => article.slug === slug)
}
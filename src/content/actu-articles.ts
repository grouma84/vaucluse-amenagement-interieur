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
]

export function getActuArticleBySlug(slug: string) {
    return ACTU_ARTICLES.find((article) => article.slug === slug)
}
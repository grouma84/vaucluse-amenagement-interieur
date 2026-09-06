import type { MetadataRoute } from "next"
import { SITE } from "@/config/site"
import { ACTU_ARTICLES } from "@/content/actu-articles"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE.siteUrl || "http://localhost:3000"

  return [
    {
      url: `${baseUrl}/`,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/faux-plafond-carpentras`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cloisons-doublages-carpentras`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/placo-decoratif-carpentras`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/isolation-interieure-carpentras`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/realisations`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/actu`,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    ...ACTU_ARTICLES.map((article) => ({
      url: `${baseUrl}/actu/${article.slug}`,
      lastModified: article.publishedAt,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),

    {
      url: `${baseUrl}/mentions-legales`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ]
}
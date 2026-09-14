import type { MetadataRoute } from "next"

import { createPublicSupabaseClient } from "@/lib/supabase-public"

export const dynamic = "force-dynamic"

const SITE_URL =
  "https://www.vaucluse-amenagement-interieur.fr"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const supabase = createPublicSupabaseClient()

  // ========================================================
  // PAGES FIXES DU SITE
  // ========================================================

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
    },
    {
      url: `${SITE_URL}/actu`,
    },
    {
      url: `${SITE_URL}/realisations`,
    },
    {
      url: `${SITE_URL}/cloisons-doublages-carpentras`,
    },
    {
      url: `${SITE_URL}/isolation-interieure-carpentras`,
    },
    {
      url: `${SITE_URL}/faux-plafond-carpentras`,
    },
    {
      url: `${SITE_URL}/placo-decoratif-carpentras`,
    },
    {
      url: `${SITE_URL}/mentions-legales`,
    },
  ]

  // ========================================================
  // ARTICLES PUBLIES
  // ========================================================

  const {
    data: articlesData,
    error: articlesError,
  } = await supabase
    .from("articles")
    .select(`
      slug,
      published_at
    `)
    .eq("status", "published")
    .order("published_at", {
      ascending: false,
    })

  if (articlesError) {
    console.error(
      "Erreur sitemap articles :",
      articlesError.message
    )
  }

  const articlePages: MetadataRoute.Sitemap =
    (articlesData ?? []).map((article) => ({
      url: `${SITE_URL}/actu/${article.slug}`,

      ...(article.published_at
        ? {
          lastModified: new Date(
            article.published_at
          ),
        }
        : {}),
    }))

  // ========================================================
  // REELS PUBLIES
  // ========================================================

  const {
    data: reelsData,
    error: reelsError,
  } = await supabase
    .from("reels")
    .select(`
      slug,
      published_at
    `)
    .eq("status", "published")
    .order("published_at", {
      ascending: false,
    })

  if (reelsError) {
    console.error(
      "Erreur sitemap Reels :",
      reelsError.message
    )
  }

  const reelPages: MetadataRoute.Sitemap =
    (reelsData ?? []).map((reel) => ({
      url: `${SITE_URL}/actu/reel/${reel.slug}`,

      ...(reel.published_at
        ? {
          lastModified: new Date(
            reel.published_at
          ),
        }
        : {}),
    }))

  // ========================================================
  // SITEMAP FINAL
  // ========================================================

  return [
    ...staticPages,
    ...articlePages,
    ...reelPages,
  ]
}
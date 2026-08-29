import type { MetadataRoute } from "next"
import { SITE } from "@/config/site"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE.siteUrl || "http://localhost:3000"

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap: `${baseUrl}/sitemap.xml`,
  }
}

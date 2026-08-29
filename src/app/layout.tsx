import type { Metadata } from "next"
import "./globals.css"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { SITE } from "@/config/site"
import { LocalBusinessJsonLd } from "@/components/seo/LocalBusinessJsonLd"

export const metadata: Metadata = {
  title: {
    default: SITE.seoTitle,
    template: `%s | ${SITE.name}`,
  },

  description: SITE.description,

  applicationName: SITE.name,

  authors: [
    {
      name: SITE.owner,
    },
  ],

  creator: SITE.name,
  publisher: SITE.name,

  category: "Travaux de plâtrerie",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: SITE.name,
    title: SITE.seoTitle,
    description: SITE.description,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className="bg-white text-zinc-950 antialiased">
        <LocalBusinessJsonLd />

        <Header />

        <div className="pt-16">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  )
}

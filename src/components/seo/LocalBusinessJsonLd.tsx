import { SITE } from "@/config/site"

export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",

    "@type": [
      "LocalBusiness",
      "HomeAndConstructionBusiness",
    ],

    name: SITE.name,
    legalName: SITE.legalName,
    description: SITE.description,
    url: SITE.siteUrl,
    "@id": `${SITE.siteUrl}/#business`,

    telephone: SITE.contact.phoneInternational,
    email: SITE.contact.email,

    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      postalCode: SITE.address.postalCode,
      addressLocality: SITE.address.city,
      addressCountry: SITE.location.country,
    },

    areaServed: [
      {
        "@type": "City",
        name: SITE.location.city,
      },
      {
        "@type": "AdministrativeArea",
        name: SITE.location.department,
      },
    ],

    knowsAbout: SITE.services,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  )
}
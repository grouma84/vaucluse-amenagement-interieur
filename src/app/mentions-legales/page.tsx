import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site VAUCLUSE AMÉNAGEMENT INTÉRIEUR.",
  alternates: {
    canonical: "/mentions-legales",
  },
}

export default function MentionsLegalesPage() {
  return (
    <main className="bg-white px-6 py-16 text-zinc-950 sm:px-10 lg:py-24">
      <div className="mx-auto max-w-4xl">

        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
          Informations légales
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Mentions légales
        </h1>

        <div className="mt-12 space-y-12 leading-7 text-zinc-600">

          <section>
            <h2 className="text-2xl font-semibold text-zinc-950">
              Éditeur du site
            </h2>

            <div className="mt-4 space-y-1">
              <p>GROUMA PLÂTRERIE & AMÉNAGEMENT VAUCLUSE</p>
              <p>Site exploité sous le nom : VAUCLUSE AMÉNAGEMENT INTÉRIEUR</p>
              <p>Entreprise individuelle — Jaoid Grouma</p>
              <p>26 rue des Remparts, 84200 Carpentras</p>
              <p>SIREN : 502 442 726</p>
              <p>SIRET : 502 442 726 00035</p>
              <p>Code APE : 4331Z — Travaux de plâtrerie</p>
              <p>Téléphone : 07 66 04 42 60</p>
              <p>Email : grouma.m@gmail.com</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-950">
              Responsable de publication
            </h2>

            <p className="mt-4">
              Jaoid Grouma.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-950">
              Hébergement
            </h2>

            <div className="mt-4 space-y-1">
              <p>Netlify, Inc.</p>
              <p>101 2nd Street</p>
              <p>San Francisco, CA 94105</p>
              <p>États-Unis</p>
              <p>Téléphone : +1 415 691 1573</p>
              <p>Email : support@netlify.com</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-950">
              Propriété intellectuelle
            </h2>

            <p className="mt-4">
              Les textes, photographies de chantiers, éléments graphiques
              et contenus présents sur ce site sont protégés par les règles
              applicables à la propriété intellectuelle. Toute reproduction
              ou réutilisation sans autorisation préalable est interdite,
              sauf disposition légale contraire.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-950">
              Données personnelles
            </h2>

            <p className="mt-4">
              Le formulaire présent sur le site prépare un message destiné
              à être envoyé via WhatsApp. Les informations saisies dans ce
              formulaire ne sont pas enregistrées par le site avant
              l’ouverture de WhatsApp.
            </p>

            <p className="mt-4">
              Lorsque vous utilisez WhatsApp, vous quittez ce site et les
              conditions ainsi que la politique de confidentialité du
              service WhatsApp s’appliquent.
            </p>

            <p className="mt-4">
              Vous pouvez également contacter directement VAUCLUSE AMÉNAGEMENT INTÉRIEUR
              par téléphone ou par email.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-950">
              Cookies
            </h2>

            <p className="mt-4">
              Dans sa version actuelle, le site n’utilise pas de cookies
              publicitaires ni de dispositif de suivi marketing.
            </p>
          </section>

        </div>
      </div>
    </main>
  )
}

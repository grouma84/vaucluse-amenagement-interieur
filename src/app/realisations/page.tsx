import type { Metadata } from "next"
import Link from "next/link"
import { GalleryGrid } from "@/components/GalleryGrid"

export const metadata: Metadata = {
  title: "Réalisations",
  description:
    "Découvrez des réalisations de plâtrerie, plafonds, isolation et aménagement intérieur réalisées par VAUCLUSE AMÉNAGEMENT INTÉRIEUR dans le Vaucluse.",
  alternates: {
    canonical: "/realisations",
  },
}

export default function RealisationsPage() {
  return (
    <main>

      <section className="bg-zinc-950 px-6 py-16 text-white sm:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">
            Réalisations
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Voir ce qui se passe avant les finitions.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Ossatures, plafonds, isolation, doublages et pose des plaques :
            une sélection d’étapes réelles de chantier.
          </p>

        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight">
              Les réalisations GROUMA
            </h2>

            <p className="mt-4 leading-7 text-zinc-600">
              Utilisez les catégories pour retrouver plus rapidement
              les travaux qui correspondent à votre projet.
            </p>
          </div>

          <GalleryGrid />

        </div>
      </section>

      <section className="bg-stone-100 px-6 py-16 sm:px-10 lg:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
              Votre chantier
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Vous avez un projet similaire ?
            </h2>

            <p className="mt-3 text-zinc-600">
              Quelques photos et une courte description suffisent pour commencer.
            </p>
          </div>

          <Link
            href="/#contact"
            className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-md bg-zinc-950 px-6 py-3 font-semibold text-white transition hover:bg-zinc-800"
          >
            Parler de mon projet
          </Link>

        </div>
      </section>

    </main>
  )
}

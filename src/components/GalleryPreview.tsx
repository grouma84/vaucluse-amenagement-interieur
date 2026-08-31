import Image from "next/image"
import Link from "next/link"
import { FEATURED_REALISATIONS } from "@/content/featured-realisations"

export function GalleryPreview() {
  return (
    <section
      id="realisations"
      className="bg-zinc-950 px-6 py-20 text-white sm:px-10 lg:py-28"
      aria-labelledby="realisations-title"
    >
      <div className="mx-auto max-w-7xl">

        <div className="max-w-3xl">

          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">
            Réalisations
          </p>

          <h2
            id="realisations-title"
            className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Réalisations de plâtrerie, isolation et faux plafonds
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
            Ossatures, faux plafonds, isolation et pose des plaques : découvrez quelques étapes de chantier et notre savoir-faire en plâtrerie à Carpentras et dans le Vaucluse.
          </p>

        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {FEATURED_REALISATIONS.map((photo) => (
            <figure
              key={photo.src}
              className="group overflow-hidden bg-zinc-900"
            >

              <div className="relative aspect-[4/3] overflow-hidden">

                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />

              </div>

              <figcaption className="p-6">

                <h3 className="text-lg font-semibold">
                  {photo.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {photo.caption}
                </p>

              </figcaption>

            </figure>
          ))}

        </div>

        <div className="mt-10">

          <Link
            href="/realisations"
            className="inline-flex min-h-12 items-center justify-center rounded-md border border-zinc-700 px-6 py-3 font-semibold transition hover:bg-white hover:text-zinc-950"
          >
            Voir toutes les réalisations
          </Link>

        </div>

      </div>
    </section>
  )
}

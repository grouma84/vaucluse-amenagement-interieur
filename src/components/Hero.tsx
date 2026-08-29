import Image from "next/image"
import Link from "next/link"
import { HOME_CONTENT } from "@/content/homepage"

export function Hero() {
  const hero = HOME_CONTENT.hero

  return (
    <section
      className="bg-zinc-950 text-white"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto grid min-h-[78vh] max-w-7xl lg:grid-cols-2">

        <div className="flex items-center px-6 py-20 sm:px-10 lg:px-14 lg:py-24">
          <div className="max-w-2xl">

            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">
              {hero.eyebrow}
            </p>

            <h1
              id="hero-title"
              className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
            >
              {hero.title}
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
              {hero.description}
            </p>

            <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400">
              {hero.supportingText}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <Link
                href={hero.primaryCta.href}
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-white px-6 py-3 font-semibold text-zinc-950 transition hover:bg-zinc-200"
              >
                {hero.primaryCta.label}
              </Link>

              <Link
                href={hero.secondaryCta.href}
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-zinc-700 px-6 py-3 font-semibold transition hover:bg-zinc-900"
              >
                {hero.secondaryCta.label}
              </Link>

            </div>

            <p className="mt-8 text-sm leading-6 text-zinc-500">
              {hero.audiences}
            </p>

          </div>
        </div>

        <div className="relative min-h-[480px] lg:min-h-full">

          <Image
            src="/images/realisations/ossature-metallique-faux-plafond-en-cours.jpg"
            alt="Ossature métallique d'un faux plafond en cours de réalisation sur un chantier de plâtrerie"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

          <p className="absolute bottom-5 left-5 right-5 text-sm text-white/80">
            Réalisation GROUMA PLÂTRERIE — faux plafond en cours de chantier
          </p>

        </div>

      </div>
    </section>
  )
}

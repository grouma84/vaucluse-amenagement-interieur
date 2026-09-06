import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import ActuFeed from "@/components/actu/ActuFeed"
import EnBref from "@/components/actu/EnBref"
import ActuCTA from "@/components/actu/ActuCTA"

import { ACTU_FEATURED, ACTU_FILTERS } from "@/content/actu"

export const metadata: Metadata = {
    title: "Actu",
    description:
        "Chantiers, conseils, réalisations et idées d’aménagement intérieur dans le Vaucluse par Vaucluse Aménagement Intérieur.",
    alternates: {
        canonical: "/actu",
    },
    openGraph: {
        title: "Actu | Vaucluse Aménagement Intérieur",
        description:
            "Le terrain, les idées et les chantiers : réalisations, conseils et aménagement intérieur dans le Vaucluse.",
        url: "/actu",
        siteName: "VAUCLUSE AMÉNAGEMENT INTÉRIEUR",
        locale: "fr_FR",
        type: "website",
    },
}

export default function ActuPage() {
    return (
        <main className="bg-white text-zinc-950">

            {/* INTRO */}
            <section className="relative overflow-hidden border-b border-zinc-200 bg-[#f6f4ef]">
                {/* Ambiance visuelle très légère */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 right-0 hidden w-[52%] lg:block"
                >
                    <Image
                        src="/images/realisations/plafond-decoratif-mur-tv-eclaire.jpg"
                        alt=""
                        fill
                        sizes="50vw"
                        className="object-cover opacity-[0.11]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-[#f6f4ef] via-[#f6f4ef]/85 to-[#f6f4ef]/25" />
                </div>

                <div className="relative mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:py-16">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">
                            Actu
                        </p>

                        <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                            Le terrain, les idées, les chantiers.
                        </h1>

                        <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
                            Réalisations, conseils pratiques, questions clients et idées
                            d’aménagement intérieur dans le Vaucluse.
                        </p>
                    </div>

                    {/* FILTRES — visuels uniquement pendant la Phase A */}
                    <nav
                        aria-label="Catégories de l'actu"
                        className="mt-9 flex gap-2 overflow-x-auto pb-2"
                    >
                        {ACTU_FILTERS.map((filter, index) => (
                            <span
                                key={filter}
                                className={
                                    index === 0
                                        ? "shrink-0 rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-semibold text-white"
                                        : "shrink-0 rounded-full border border-zinc-300 bg-white/70 px-5 py-2.5 text-sm font-medium text-zinc-700"
                                }
                            >
                                {filter}
                            </span>
                        ))}
                    </nav>
                </div>
            </section>

            {/* À LA UNE */}
            <section className="px-6 py-16 sm:px-10 lg:py-20">
                <div className="mx-auto max-w-7xl">

                    <div className="flex items-end justify-between gap-6">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                                Sélection
                            </p>

                            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                                À la une
                            </h2>
                        </div>

                        <p className="hidden max-w-md text-right text-sm leading-6 text-zinc-500 sm:block">
                            Des sujets concrets issus du terrain, des réalisations et des
                            questions rencontrées autour de l’aménagement intérieur.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 lg:grid-cols-[2fr_1fr]">

                        {/* SUJET PRINCIPAL */}
                        <article className="group relative min-h-[500px] overflow-hidden rounded-2xl bg-zinc-950 text-white">
                            <Image
                                src={ACTU_FEATURED.primary.image}
                                alt={ACTU_FEATURED.primary.imageAlt}
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 66vw"
                                className="object-cover transition duration-700 group-hover:scale-[1.02]"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/5" />

                            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9 lg:p-10">
                                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">
                                    {ACTU_FEATURED.primary.category}
                                </p>

                                <h3 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                                    {ACTU_FEATURED.primary.title}
                                </h3>

                                <p className="mt-4 max-w-2xl leading-7 text-zinc-200">
                                    {ACTU_FEATURED.primary.excerpt}
                                </p>

                                <Link
                                    href={ACTU_FEATURED.primary.href}
                                    className="mt-6 inline-flex min-h-11 items-center justify-center rounded-md bg-white px-5 py-2.5 font-semibold text-zinc-950 transition hover:bg-zinc-200"
                                >
                                    {ACTU_FEATURED.primary.cta}
                                    <span className="ml-2" aria-hidden="true">
                                        →
                                    </span>
                                </Link>
                            </div>
                        </article>

                        {/* SUJETS SECONDAIRES */}
                        <div className="grid gap-5">
                            {ACTU_FEATURED.secondary.map((item) => (
                                <article
                                    key={item.title}
                                    className="group relative min-h-[240px] overflow-hidden rounded-2xl bg-zinc-950 text-white"
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.imageAlt}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 33vw"
                                        className="object-cover transition duration-700 group-hover:scale-[1.03]"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/20" />

                                    <div className="relative z-10 flex min-h-[240px] max-w-[85%] flex-col justify-end p-6 sm:p-7">
                                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
                                            {item.category}
                                        </p>

                                        <h3 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
                                            {item.title}
                                        </h3>

                                        <p className="mt-3 line-clamp-2 text-sm leading-6 text-zinc-200">
                                            {item.excerpt}
                                        </p>

                                        <Link
                                            href={item.href}
                                            className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold underline decoration-white/30 underline-offset-4 transition hover:decoration-white"
                                        >
                                            {item.cta}
                                            <span aria-hidden="true">→</span>
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <ActuFeed />
            <EnBref />
            <ActuCTA />

        </main>
    )
}
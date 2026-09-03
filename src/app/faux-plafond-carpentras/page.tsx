import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Faux plafond à Carpentras",
    description:
        "Création et rénovation de faux plafonds en plaques de plâtre à Carpentras et dans le Vaucluse : ossature, isolation selon le projet et finitions.",
    alternates: {
        canonical: "/faux-plafond-carpentras",
    },
  openGraph: {
    title: "Faux plafond à Carpentras",
    description:
      "Création et rénovation de faux plafonds en plaques de plâtre à Carpentras et dans le Vaucluse : ossature, isolation selon le projet et finitions.",
    url: "/faux-plafond-carpentras",
    siteName: "VAUCLUSE AMÉNAGEMENT INTÉRIEUR",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/realisations/ossature-metallique-faux-plafond-en-cours.jpg",
        alt: "Ossature métallique d’un faux plafond en cours de réalisation",
      },
    ],
  },
}

const CHANTIER_STEPS = [
    {
        number: "01",
        title: "Comprendre le plafond existant",
        text: "Avant de choisir une solution, il faut regarder l’état du support, la hauteur disponible, les contraintes de la pièce et le résultat recherché.",
    },
    {
        number: "02",
        title: "Définir la structure",
        text: "Le type d’ossature et le niveau du futur plafond sont définis selon la configuration du chantier et les ouvrages à intégrer.",
    },
    {
        number: "03",
        title: "Poser l’ossature et les plaques",
        text: "L’ossature métallique est mise en place avant la pose des plaques de plâtre et, lorsque le projet le prévoit, de l’isolation adaptée.",
    },
    {
        number: "04",
        title: "Préparer les finitions",
        text: "Les joints et la préparation des surfaces permettent ensuite d’obtenir un plafond prêt à recevoir la finition prévue au chantier.",
    },
] as const

const REALISATIONS = [
    {
        src: "/images/realisations/ossature-metallique-faux-plafond-en-cours.jpg",
        alt: "Ossature métallique d’un faux plafond en cours de réalisation",
        caption: "Mise en place de l’ossature métallique avant fermeture du plafond.",
    },
    {
        src: "/images/realisations/faux-plafond-plaques-platre-en-cours.jpg",
        alt: "Faux plafond en plaques de plâtre en cours de réalisation",
        caption: "Pose des plaques de plâtre sur un faux plafond en cours de chantier.",
    },
    {
        src: "/images/realisations/plafond-entre-poutres-en-cours.jpg",
        alt: "Plafond en plaques de plâtre réalisé entre des poutres en bois",
        caption: "Réalisation d’un plafond en plaques de plâtre entre des poutres apparentes.",
    },
] as const

export default function FauxPlafondCarpentrasPage() {
    return (
        <main>
            {/* HERO */}
            <section className="bg-zinc-950 text-white">
                <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
                    <div className="flex items-center px-6 py-20 sm:px-10 lg:px-14 lg:py-24">
                        <div className="max-w-2xl">
                            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">
                                Plâtrerie • Carpentras & Vaucluse
                            </p>

                            <h1 className="text-3xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                                Faux plafond à Carpentras
                            </h1>

                            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
                                Création et rénovation de faux plafonds en plaques de plâtre
                                pour remettre un plafond de niveau, transformer une pièce,
                                intégrer les contraintes techniques du projet ou améliorer
                                son confort intérieur.
                            </p>

                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                <Link
                                    href="/#contact"
                                    className="inline-flex min-h-12 items-center justify-center rounded-md bg-white px-6 py-3 font-semibold text-zinc-950 transition hover:bg-zinc-200"
                                >
                                    Parler de mon projet
                                </Link>

                                <Link
                                    href="/realisations"
                                    className="inline-flex min-h-12 items-center justify-center rounded-md border border-zinc-700 px-6 py-3 font-semibold transition hover:bg-zinc-900"
                                >
                                    Voir les réalisations
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="relative min-h-[420px] lg:min-h-full">
                        <Image
                            src="/images/realisations/ossature-metallique-faux-plafond-en-cours.jpg"
                            alt="Ossature métallique d’un faux plafond en cours de réalisation"
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                        <p className="absolute bottom-5 left-5 right-5 text-sm text-white/80">
                            Ossature métallique d’un faux plafond en cours de chantier
                        </p>
                    </div>
                </div>
            </section>

            {/* INTRO */}
            <section className="bg-white px-6 py-20 text-zinc-950 sm:px-10 lg:py-28">
                <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
                            Faux plafonds
                        </p>

                        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                            Création et rénovation de plafonds en plaques de plâtre
                        </h2>
                    </div>

                    <div className="space-y-5 text-lg leading-8 text-zinc-600">
                        <p>
                            Un faux plafond peut répondre à plusieurs situations :
                            reprendre un plafond ancien ou irrégulier, modifier la hauteur
                            d’une pièce, créer un nouveau volume ou préparer l’intégration
                            des équipements prévus dans le projet.
                        </p>

                        <p>
                            La solution dépend toujours de la pièce et du support existant.
                            Avant de fermer le plafond, il faut notamment tenir compte de
                            la structure, des réseaux présents et, lorsque cela fait partie
                            du projet, de l’isolation.
                        </p>

                        <p>
                            VAUCLUSE AMÉNAGEMENT INTÉRIEUR intervient à Carpentras et dans
                            le Vaucluse pour les travaux de faux plafond, de plâtrerie et
                            d’aménagement intérieur.
                        </p>
                    </div>
                </div>
            </section>

            {/* BESOINS */}
            <section className="bg-zinc-100 px-6 py-20 text-zinc-950 sm:px-10 lg:py-28">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
                            Votre projet
                        </p>

                        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                            Dans quels cas réaliser un faux plafond ?
                        </h2>
                    </div>

                    <div className="mt-12 grid gap-px overflow-hidden border border-zinc-200 bg-zinc-200 md:grid-cols-3">
                        <article className="bg-white p-8">
                            <h3 className="text-xl font-semibold">
                                Reprendre un plafond ancien
                            </h3>
                            <p className="mt-4 leading-7 text-zinc-600">
                                Lorsque le support est irrégulier ou difficile à reprendre
                                directement, un nouveau plafond peut permettre de recréer
                                une surface adaptée aux finitions prévues.
                            </p>
                        </article>

                        <article className="bg-white p-8">
                            <h3 className="text-xl font-semibold">
                                Transformer le volume d’une pièce
                            </h3>
                            <p className="mt-4 leading-7 text-zinc-600">
                                Une nouvelle hauteur ou une retombée de plafond peut servir
                                à restructurer visuellement un espace ou accompagner un
                                projet d’aménagement intérieur.
                            </p>
                        </article>

                        <article className="bg-white p-8">
                            <h3 className="text-xl font-semibold">
                                Prévoir isolation et équipements
                            </h3>
                            <p className="mt-4 leading-7 text-zinc-600">
                                L’espace créé au-dessus du plafond peut, selon la
                                configuration du chantier, permettre d’intégrer une
                                isolation ou les éléments techniques prévus dans le projet.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            {/* MÉTHODE */}
            <section className="bg-white px-6 py-20 text-zinc-950 sm:px-10 lg:py-28">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
                            Réalisation
                        </p>

                        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                            De l’ossature métallique aux finitions
                        </h2>

                        <p className="mt-5 text-lg leading-8 text-zinc-600">
                            Un faux plafond ne se résume pas à poser des plaques. La
                            préparation de la structure et l’anticipation des contraintes
                            du chantier conditionnent la qualité du résultat final.
                        </p>
                    </div>

                    <div className="mt-14 grid gap-8 md:grid-cols-2">
                        {CHANTIER_STEPS.map((step) => (
                            <article
                                key={step.number}
                                className="border-t border-zinc-300 pt-6"
                            >
                                <span className="text-sm font-semibold text-zinc-400">
                                    {step.number}
                                </span>

                                <h3 className="mt-4 text-xl font-semibold">
                                    {step.title}
                                </h3>

                                <p className="mt-3 max-w-xl leading-7 text-zinc-600">
                                    {step.text}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* PHOTOS */}
            <section className="bg-zinc-950 px-6 py-20 text-white sm:px-10 lg:py-28">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">
                            Chantiers
                        </p>

                        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                            Exemples de faux plafonds en cours de réalisation
                        </h2>

                        <p className="mt-5 text-lg leading-8 text-zinc-400">
                            Quelques étapes réelles de chantier : création de l’ossature,
                            pose des plaques et travail autour des éléments existants.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-6 md:grid-cols-3">
                        {REALISATIONS.map((photo) => (
                            <figure key={photo.src}>
                                <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
                                    <Image
                                        src={photo.src}
                                        alt={photo.alt}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover"
                                    />
                                </div>

                                <figcaption className="mt-4 text-sm leading-6 text-zinc-400">
                                    {photo.caption}
                                </figcaption>
                            </figure>
                        ))}
                    </div>

                    <div className="mt-10">
                        <Link
                            href="/realisations"
                            className="inline-flex items-center gap-2 font-semibold underline decoration-zinc-600 underline-offset-4 transition hover:decoration-white"
                        >
                            Découvrir les autres réalisations
                            <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* LOCAL */}
            <section className="bg-white px-6 py-20 text-zinc-950 sm:px-10 lg:py-28">
                <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
                            Secteur d’intervention
                        </p>

                        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                            Faux plafond à Carpentras et dans le Vaucluse
                        </h2>
                    </div>

                    <div className="space-y-5 text-lg leading-8 text-zinc-600">
                        <p>
                            Le chantier peut concerner une seule pièce comme s’intégrer
                            dans une rénovation intérieure plus complète comprenant
                            cloisons, doublages, isolation, joints ou peinture.
                        </p>

                        <p>
                            Pour un besoin centré sur le confort thermique ou acoustique,
                            consultez notre page{" "}
                            <Link
                                href="/isolation-interieure-carpentras"
                                className="font-semibold text-zinc-950 underline decoration-zinc-300 underline-offset-4 transition hover:decoration-zinc-950"
                            >
                                isolation intérieure à Carpentras
                            </Link>
                            . Pour les plafonds à plusieurs niveaux, retombées ou
                            volumes esthétiques, découvrez aussi le{" "}
                            <Link
                                href="/placo-decoratif-carpentras"
                                className="font-semibold text-zinc-950 underline decoration-zinc-300 underline-offset-4 transition hover:decoration-zinc-950"
                            >
                                placo décoratif à Carpentras
                            </Link>
                            .
                        </p>

                        <p>
                            Chaque projet est étudié selon l’existant et le résultat
                            recherché afin de déterminer la solution de plâtrerie adaptée.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="bg-zinc-100 px-6 py-20 text-zinc-950 sm:px-10 lg:py-28">
                <div className="mx-auto max-w-4xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
                        Questions fréquentes
                    </p>

                    <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                        Questions sur les faux plafonds
                    </h2>

                    <div className="mt-10 divide-y divide-zinc-300 border-y border-zinc-300">
                        <article className="py-7">
                            <h3 className="text-lg font-semibold">
                                Peut-on refaire uniquement le plafond d’une pièce ?
                            </h3>
                            <p className="mt-3 leading-7 text-zinc-600">
                                Oui. Le chantier peut être limité au plafond lorsque le reste
                                de la pièce ne nécessite pas de travaux de plâtrerie.
                            </p>
                        </article>

                        <article className="py-7">
                            <h3 className="text-lg font-semibold">
                                Peut-on ajouter de l’isolation dans un faux plafond ?
                            </h3>
                            <p className="mt-3 leading-7 text-zinc-600">
                                Cela peut être possible selon la configuration du plafond,
                                l’espace disponible et l’objectif recherché. La solution doit
                                être définie en fonction du chantier.
                            </p>
                        </article>

                        <article className="py-7">
                            <h3 className="text-lg font-semibold">
                                Faites-vous également les joints et la peinture ?
                            </h3>
                            <p className="mt-3 leading-7 text-zinc-600">
                                Selon le projet, la prestation peut aller de la création du
                                plafond à la réalisation des joints et à la préparation ou
                                finition peinture.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            {/* CTA FINAL */}
            <section className="bg-zinc-950 px-6 py-20 text-white sm:px-10">
                <div className="mx-auto max-w-4xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">
                        Votre plafond
                    </p>

                    <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                        Un projet de faux plafond à Carpentras&nbsp;?
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
                        Expliquez votre projet, l’état actuel du plafond et ce que vous
                        souhaitez obtenir. Nous pourrons partir de la situation réelle
                        du chantier.
                    </p>

                    <div className="mt-8">
                        <Link
                            href="/#contact"
                            className="inline-flex min-h-12 items-center justify-center rounded-md bg-white px-6 py-3 font-semibold text-zinc-950 transition hover:bg-zinc-200"
                        >
                            Parler de mon projet
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
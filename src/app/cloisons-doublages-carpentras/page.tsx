import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Cloisons et doublages à Carpentras",
    description:
        "Création de cloisons et doublages en plaques de plâtre à Carpentras et dans le Vaucluse : séparation de pièces, habillage des murs, isolation et finitions.",
    alternates: {
        canonical: "/cloisons-doublages-carpentras",
    },
    openGraph: {
        title: "Cloisons et doublages à Carpentras",
        description:
            "Création de cloisons et doublages en plaques de plâtre à Carpentras et dans le Vaucluse : séparation de pièces, habillage des murs, isolation et finitions.",
        url: "/cloisons-doublages-carpentras",
        siteName: "VAUCLUSE AMÉNAGEMENT INTÉRIEUR",
        locale: "fr_FR",
        type: "website",
        images: [
            {
                url: "/images/realisations/cloison-plaques-platre-ossature-en-cours.jpg",
                alt: "Cloison en plaques de plâtre avec ossature métallique en cours de réalisation",
            },
        ],
    },
}

const CHANTIER_STEPS = [
    {
        number: "01",
        title: "Comprendre l’espace et le besoin",
        text: "Création d’une nouvelle pièce, séparation d’un volume, reprise d’un mur ou amélioration du confort : la solution dépend d’abord de l’usage recherché et de l’existant.",
    },
    {
        number: "02",
        title: "Définir l’implantation et l’ossature",
        text: "L’emplacement des cloisons ou du doublage, l’épaisseur nécessaire et la structure métallique sont définis selon les contraintes du chantier.",
    },
    {
        number: "03",
        title: "Prévoir l’isolation si nécessaire",
        text: "Selon le projet, une isolation thermique ou acoustique peut être intégrée avant la fermeture des parois.",
    },
    {
        number: "04",
        title: "Poser les plaques et préparer les finitions",
        text: "Les plaques de plâtre sont posées sur l’ossature puis les joints et les surfaces sont préparés pour recevoir la finition prévue.",
    },
] as const

const REALISATIONS = [
    {
        src: "/images/realisations/cloison-plaques-platre-ossature-en-cours.jpg",
        alt: "Cloison en plaques de plâtre avec ossature métallique en cours de réalisation",
        caption:
            "Ossature métallique et plaques de plâtre partiellement posées pour créer une séparation intérieure.",
    },
    {
        src: "/images/realisations/pose-isolation-doublage-murs.jpg",
        alt: "Doublage de murs avec isolation entre les montants métalliques",
        caption:
            "Isolation intégrée dans le doublage avant fermeture complète des parois.",
    },
    {
        src: "/images/realisations/ossature-metallique-cloison-isolation.jpg",
        alt: "Ossature métallique d’une cloison avec isolation en cours de chantier",
        caption:
            "Cloison ouverte montrant l’ossature et l’isolation avant fermeture.",
    },
] as const

export default function CloisonsDoublagesCarpentrasPage() {
    return (
        <main>
            {/* HERO */}
            <section className="bg-zinc-950 text-white">
                <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
                    <div className="flex items-center px-6 py-20 sm:px-10 lg:px-14 lg:py-24">
                        <div className="max-w-2xl">
                            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">
                                Créer • Séparer • Transformer un espace
                            </p>

                            <h1 className="text-3xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                                Cloisons et doublages à Carpentras
                            </h1>

                            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
                                Vous souhaitez créer une chambre, un bureau, séparer une
                                grande pièce ou reprendre un mur existant&nbsp;? Décrivez
                                simplement le résultat recherché&nbsp;: la solution
                                technique vient ensuite.
                            </p>

                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                <Link
                                    href="/#contact"
                                    className="inline-flex min-h-12 items-center justify-center rounded-md bg-white px-6 py-3 font-semibold text-zinc-950 transition hover:bg-zinc-200"
                                >
                                    Voir si mon projet est réalisable
                                </Link>

                                <Link
                                    href="/realisations"
                                    className="inline-flex min-h-12 items-center justify-center rounded-md border border-zinc-700 px-6 py-3 font-semibold transition hover:bg-zinc-900"
                                >
                                    Voir comment je travaille
                                </Link>
                            </div>

                            <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-400">
                                Quelques informations et photos suffisent pour commencer à
                                comprendre votre projet.
                            </p>
                        </div>
                    </div>

                    <div className="relative min-h-[420px] lg:min-h-full">
                        <Image
                            src="/images/realisations/cloison-plaques-platre-ossature-en-cours.jpg"
                            alt="Cloison en plaques de plâtre avec ossature métallique en cours de réalisation"
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                        <p className="absolute bottom-5 left-5 right-5 text-sm text-white/80">
                            Cloison en plaques de plâtre en cours de réalisation
                        </p>
                    </div>
                </div>
            </section>

            {/* RECONNAISSANCE DU BESOIN */}
            <section className="bg-white px-6 py-20 text-zinc-950 sm:px-10 lg:py-28">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
                            Votre besoin
                        </p>

                        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                            Vous êtes peut-être dans cette situation
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-zinc-600">
                            Avant de choisir une cloison, un doublage ou une isolation,
                            partons de ce que vous souhaitez réellement obtenir dans votre
                            logement.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-px overflow-hidden border border-zinc-200 bg-zinc-200 md:grid-cols-2">
                        <article className="bg-white p-8 sm:p-10">
                            <p className="text-sm font-semibold text-amber-700">01</p>

                            <h3 className="mt-4 text-2xl font-semibold">
                                Il me manque une pièce
                            </h3>

                            <p className="mt-4 leading-7 text-zinc-600">
                                Une grande pièce ou un volume existant peut parfois être
                                redistribué pour créer une chambre, un bureau, un dressing
                                ou un nouvel espace utile.
                            </p>
                        </article>

                        <article className="bg-white p-8 sm:p-10">
                            <p className="text-sm font-semibold text-amber-700">02</p>

                            <h3 className="mt-4 text-2xl font-semibold">
                                Je veux séparer une grande pièce
                            </h3>

                            <p className="mt-4 leading-7 text-zinc-600">
                                Une cloison peut permettre de transformer un même volume en
                                deux espaces avec des usages différents et mieux organisés.
                            </p>
                        </article>

                        <article className="bg-white p-8 sm:p-10">
                            <p className="text-sm font-semibold text-amber-700">03</p>

                            <h3 className="mt-4 text-2xl font-semibold">
                                Je veux reprendre un mur existant
                            </h3>

                            <p className="mt-4 leading-7 text-zinc-600">
                                Lorsqu’un mur est irrégulier ou difficile à finir, un
                                doublage peut permettre de recréer une nouvelle paroi
                                adaptée au projet.
                            </p>
                        </article>

                        <article className="bg-white p-8 sm:p-10">
                            <p className="text-sm font-semibold text-amber-700">04</p>

                            <h3 className="mt-4 text-2xl font-semibold">
                                Je veux moins entendre d’une pièce à l’autre
                            </h3>

                            <p className="mt-4 leading-7 text-zinc-600">
                                Selon la configuration, une cloison ou un doublage peut
                                intégrer une isolation acoustique adaptée au besoin.
                            </p>
                            <Link
                                href="/isolation-interieure-carpentras"
                                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-zinc-950 underline decoration-amber-400 underline-offset-4 transition hover:decoration-zinc-950"
                            >
                                En savoir plus sur l’isolation intérieure
                                <span aria-hidden="true">→</span>
                            </Link>
                        </article>
                    </div>

                    <div className="mt-10 border-l-4 border-amber-600 bg-zinc-50 p-6 sm:p-8">
                        <h3 className="text-xl font-semibold">
                            Vous ne savez pas s’il vous faut une cloison ou un doublage&nbsp;?
                        </h3>

                        <p className="mt-3 max-w-3xl leading-7 text-zinc-600">
                            Ce n’est pas un problème. Vous n’avez pas besoin de connaître
                            la solution technique avant de me contacter. Expliquez
                            simplement l’espace actuel et ce que vous souhaitez créer,
                            séparer ou améliorer.
                        </p>

                        <Link
                            href="/#contact"
                            className="mt-5 inline-flex items-center gap-2 font-semibold text-zinc-950 underline decoration-amber-400 underline-offset-4 transition hover:decoration-zinc-950"
                        >
                            Décrire ce que je veux obtenir
                            <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CLOISON VS DOUBLAGE */}
            <section className="bg-zinc-100 px-6 py-20 text-zinc-950 sm:px-10 lg:py-28">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
                            Deux besoins différents
                        </p>

                        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                            Cloison ou doublage : quelle différence&nbsp;?
                        </h2>
                    </div>

                    <div className="mt-12 grid gap-px overflow-hidden border border-zinc-200 bg-zinc-200 md:grid-cols-2">
                        <article className="bg-white p-8 sm:p-10">
                            <h3 className="text-2xl font-semibold">
                                La cloison pour créer ou séparer
                            </h3>

                            <p className="mt-4 leading-7 text-zinc-600">
                                Une cloison permet de modifier la distribution intérieure sans
                                intervenir sur la structure porteuse du bâtiment. Elle peut
                                servir à créer une pièce supplémentaire, un couloir, un
                                dressing ou une séparation entre deux usages.
                            </p>
                        </article>

                        <article className="bg-white p-8 sm:p-10">
                            <h3 className="text-2xl font-semibold">
                                Le doublage pour habiller un mur
                            </h3>

                            <p className="mt-4 leading-7 text-zinc-600">
                                Un doublage est réalisé devant une paroi existante. Il permet
                                de recréer une surface adaptée aux finitions et peut également
                                intégrer une isolation lorsque la configuration du chantier
                                le permet.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            {/* MÉTHODE */}
            <section className="bg-zinc-100 px-6 py-20 text-zinc-950 sm:px-10 lg:py-28">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
                            Réalisation
                        </p>

                        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                            De l’implantation de l’ossature aux finitions
                        </h2>

                        <p className="mt-5 text-lg leading-8 text-zinc-600">
                            La qualité d’une cloison ou d’un doublage dépend autant de la
                            préparation du chantier que de la pose des plaques de plâtre.
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
                            Exemples de cloisons et doublages en cours de réalisation
                        </h2>

                        <p className="mt-5 text-lg leading-8 text-zinc-400">
                            Ossatures métalliques, plaques de plâtre et isolation :
                            quelques étapes visibles avant les finitions.
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
                            Cloisons et doublages à Carpentras et dans le Vaucluse
                        </h2>
                    </div>

                    <div className="space-y-5 text-lg leading-8 text-zinc-600">
                        <p>
                            Le chantier peut concerner une simple séparation intérieure
                            comme la redistribution complète de plusieurs pièces ou le
                            doublage de murs existants.
                        </p>

                        <p>
                            Chaque projet est étudié selon l’espace disponible, le support,
                            l’usage recherché et les éventuelles contraintes d’isolation ou
                            de finition.
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
                        Questions sur les cloisons et doublages
                    </h2>

                    <div className="mt-10 divide-y divide-zinc-300 border-y border-zinc-300">
                        <article className="py-7">
                            <h3 className="text-lg font-semibold">
                                Peut-on créer une chambre dans une grande pièce ?
                            </h3>

                            <p className="mt-3 leading-7 text-zinc-600">
                                Oui, selon la configuration de l’espace. Une cloison peut
                                permettre de redistribuer le volume afin de créer une pièce
                                supplémentaire.
                            </p>
                        </article>

                        <article className="py-7">
                            <h3 className="text-lg font-semibold">
                                Quelle est la différence entre une cloison et un doublage ?
                            </h3>

                            <p className="mt-3 leading-7 text-zinc-600">
                                Une cloison sert principalement à séparer deux espaces. Un
                                doublage est réalisé devant un mur existant pour créer une
                                nouvelle paroi et éventuellement intégrer une isolation.
                            </p>
                        </article>

                        <article className="py-7">
                            <h3 className="text-lg font-semibold">
                                Peut-on isoler une cloison ou un doublage ?
                            </h3>

                            <p className="mt-3 leading-7 text-zinc-600">
                                Oui, lorsque le projet et la configuration le permettent.
                                L’isolation est choisie selon la paroi et l’objectif thermique
                                ou acoustique recherché.
                            </p>
                        </article>

                        <article className="py-7">
                            <h3 className="text-lg font-semibold">
                                Faites-vous également les joints et la peinture ?
                            </h3>

                            <p className="mt-3 leading-7 text-zinc-600">
                                Selon le chantier, la prestation peut comprendre la pose des
                                plaques, les joints, la préparation des supports et la
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
                        Votre aménagement
                    </p>

                    <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                        Un projet de cloison ou de doublage à Carpentras&nbsp;?
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
                        Expliquez l’espace actuel et ce que vous souhaitez créer ou
                        modifier. Quelques informations et des photos permettent déjà de
                        mieux comprendre le projet.
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
import Link from "next/link"

const QUESTIONS = [
    {
        question: "Quelle place prend un doublage intérieur ?",
        answer:
            "L’épaisseur dépend de l’ossature, de l’isolant éventuel et de la configuration du mur.",
        href: "/cloisons-doublages-carpentras",
        label: "Cloisons & doublages",
    },
    {
        question: "Peut-on intégrer des spots dans un faux plafond ?",
        answer:
            "Oui, à condition d’anticiper les réservations, alimentations et contraintes techniques avant la fermeture.",
        href: "/faux-plafond-carpentras",
        label: "Faux plafonds",
    },
    {
        question: "Peut-on créer des formes arrondies en placo ?",
        answer:
            "Certaines formes, niches, cadres et volumes particuliers peuvent être réalisés selon l’espace et la faisabilité.",
        href: "/placo-decoratif-carpentras",
        label: "Placo décoratif",
    },
    {
        question: "Peut-on isoler un plafond par l’intérieur ?",
        answer:
            "Selon la configuration, une isolation peut être intégrée au plafond pour agir sur le confort thermique ou acoustique.",
        href: "/isolation-interieure-carpentras",
        label: "Isolation",
    },
] as const

export default function EnBref() {
    return (
        <section className="bg-[#f6f4ef] px-6 py-20 text-zinc-950 sm:px-10 lg:py-24">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

                    {/* INTRO */}
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                            En bref
                        </p>

                        <h2 className="mt-4 max-w-lg text-3xl font-semibold tracking-tight sm:text-4xl">
                            Des réponses rapides à vos questions.
                        </h2>

                        <p className="mt-5 max-w-md leading-7 text-zinc-600">
                            Des sujets concrets pour comprendre les possibilités avant
                            d’aller plus loin dans votre projet.
                        </p>
                    </div>

                    {/* QUESTIONS */}
                    <div className="divide-y divide-zinc-300 border-y border-zinc-300">
                        {QUESTIONS.map((item) => (
                            <article
                                key={item.question}
                                className="group py-6 sm:py-7"
                            >
                                <Link
                                    href={item.href}
                                    className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center"
                                >
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-700">
                                            {item.label}
                                        </p>

                                        <h3 className="mt-2 text-lg font-semibold tracking-tight sm:text-xl">
                                            {item.question}
                                        </h3>

                                        <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600">
                                            {item.answer}
                                        </p>
                                    </div>

                                    <span
                                        aria-hidden="true"
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 text-lg transition group-hover:border-zinc-950 group-hover:bg-zinc-950 group-hover:text-white"
                                    >
                                        →
                                    </span>
                                </Link>
                            </article>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}
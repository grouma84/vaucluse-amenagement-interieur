import Link from "next/link"

export default function ActuCTA() {
    return (
        <section className="bg-white px-6 pb-20 pt-8 sm:px-10 lg:pb-28 lg:pt-10">
            <div className="mx-auto max-w-7xl">

                <div className="relative overflow-hidden rounded-2xl bg-zinc-950 px-7 py-12 text-white sm:px-10 lg:px-14 lg:py-14">

                    {/* AMBIANCE DISCRÈTE */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0"
                    >
                        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-amber-500/[0.08] blur-3xl" />
                        <div className="absolute bottom-0 left-[35%] h-px w-[45%] bg-gradient-to-r from-transparent via-amber-300/30 to-transparent" />
                    </div>

                    <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_auto]">

                        {/* TEXTE */}
                        <div className="max-w-3xl">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                                Un projet à nous montrer ?
                            </p>

                            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                                Une photo peut suffire pour commencer.
                            </h2>

                            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
                                Un mur, un plafond ou une pièce à transformer&nbsp;?
                                Expliquez simplement ce que vous souhaitez obtenir. Quelques
                                photos permettent ensuite de mieux comprendre l’espace et les
                                contraintes du projet.
                            </p>
                        </div>

                        {/* ACTION */}
                        <div className="lg:text-right">
                            <Link
                                href="/#contact"
                                className="inline-flex min-h-12 items-center justify-center rounded-md bg-amber-400 px-6 py-3 font-semibold text-zinc-950 transition hover:bg-amber-300"
                            >
                                Parler de mon projet
                                <span className="ml-2" aria-hidden="true">
                                    →
                                </span>
                            </Link>

                            <p className="mt-3 text-sm text-zinc-500">
                                Premier échange sans engagement.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}
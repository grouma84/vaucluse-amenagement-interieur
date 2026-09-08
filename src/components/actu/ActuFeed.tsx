import { ACTU_FEED } from "@/content/actu"

import ChantierCard from "./ChantierCard"
import ReelCard from "./ReelCard"
import { ACTU_ARTICLES } from "@/content/actu-articles"

export default function ActuFeed() {
    return (
        <section className="border-t border-zinc-200 bg-white px-6 py-20 text-zinc-950 sm:px-10 lg:py-28">
            <div className="mx-auto max-w-7xl">

                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                        Derniers contenus
                    </p>

                    <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                        Le fil
                    </h2>
                </div>

                {/* REELS */}
                <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:max-w-3xl">
                    <ReelCard
                        video={ACTU_FEED.reel.video}
                        category={ACTU_FEED.reel.category}
                        title={ACTU_FEED.reel.title}
                        href={ACTU_FEED.reel.href}
                    />

                    <ReelCard
                        video="/images/realisations/chantier_doublage_particulier.mp4"
                        category="CHANTIER EN VIDÉO"
                        title="Doublage sur ossature : une étape du chantier"
                        href="/actu/doublage-ossature-chantier-neuf"
                    />
                </div>

                {/* CHANTIER LARGE */}
                <div className="space-y-5">
                    {[...ACTU_ARTICLES]
                        .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
                        .map((article) => (
                            <ChantierCard
                                key={article.slug}
                                category={article.category}
                                title={article.title}
                                excerpt={article.excerpt}
                                image={article.image}
                                imageAlt={article.imageAlt}
                                href={`/actu/${article.slug}`}
                            />
                        ))}
                </div>

            </div>
        </section>
    )
}
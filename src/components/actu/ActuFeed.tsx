import ChantierCard from "./ChantierCard"
import ReelCard from "./ReelCard"

export type PublicActuArticle = {
    id: string
    slug: string
    category: string
    title: string
    excerpt: string
    imageUrl: string
    imageAlt: string
    publishedAt: string
}

export type PublicActuReel = {
    id: string
    title: string
    category: string
    videoUrl: string
    href: string
    publishedAt: string
}

type ActuFeedProps = {
    articles: PublicActuArticle[]
    reels: PublicActuReel[]
}

export default function ActuFeed({
    articles,
    reels,
}: ActuFeedProps) {
    return (
        <section className="border-t border-zinc-200 bg-white px-6 py-20 text-zinc-950 sm:px-10 lg:py-28">
            <div className="mx-auto max-w-7xl">

                {/* TITRE DU FIL */}
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                        Derniers contenus
                    </p>

                    <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                        Le fil
                    </h2>
                </div>

                {/* REELS SUPABASE */}
                {reels.length > 0 && (
                    <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:max-w-3xl">
                        {reels.map((reel) => (
                            <ReelCard
                                key={reel.id}
                                video={reel.videoUrl}
                                category={reel.category}
                                title={reel.title}
                                href={reel.href}
                            />
                        ))}
                    </div>
                )}

                {/* ARTICLES SUPABASE */}
                {articles.length > 0 && (
                    <div className="mt-14 space-y-5">
                        {articles.map((article) => (
                            <ChantierCard
                                key={article.id}
                                category={article.category}
                                title={article.title}
                                excerpt={article.excerpt}
                                image={article.imageUrl}
                                imageAlt={article.imageAlt}
                                href={`/actu/${article.slug}`}
                            />
                        ))}
                    </div>
                )}

                {/* CAS OÙ IL N'Y A ENCORE AUCUN CONTENU */}
                {reels.length === 0 && articles.length === 0 && (
                    <div className="mt-10 rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 px-6 py-12 text-center">
                        <p className="font-medium text-zinc-700">
                            Aucun contenu publié pour le moment.
                        </p>
                    </div>
                )}

            </div>
        </section>
    )
}
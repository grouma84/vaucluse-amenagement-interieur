import { ACTU_FEED } from "@/content/actu"

import ChantierCard from "./ChantierCard"
import QuestionCard from "./QuestionCard"
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

                {/* PREMIÈRE LIGNE */}
                <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                    <ReelCard
                        video={ACTU_FEED.reel.video}
                        category={ACTU_FEED.reel.category}
                        title={ACTU_FEED.reel.title}
                        href={ACTU_FEED.reel.href}
                    />

                    <QuestionCard
                        question={ACTU_FEED.question.question}
                        answer={ACTU_FEED.question.answer}
                        href={ACTU_FEED.question.href}
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
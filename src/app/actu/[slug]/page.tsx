import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import {
    ACTU_ARTICLES,
    getActuArticleBySlug,
} from "@/content/actu-articles"

type ArticlePageProps = {
    params: Promise<{
        slug: string
    }>
}

export const dynamicParams = false

export function generateStaticParams() {
    return ACTU_ARTICLES.map((article) => ({
        slug: article.slug,
    }))
}

export async function generateMetadata({
    params,
}: ArticlePageProps): Promise<Metadata> {
    const { slug } = await params
    const article = getActuArticleBySlug(slug)

    if (!article) {
        return {
            title: "Article introuvable",
        }
    }

    return {
        title: article.title,
        description: article.excerpt,

        alternates: {
            canonical: `/actu/${article.slug}`,
        },

        openGraph: {
            title: article.title,
            description: article.excerpt,
            url: `/actu/${article.slug}`,
            siteName: "VAUCLUSE AMÉNAGEMENT INTÉRIEUR",
            locale: "fr_FR",
            type: "article",
            images: [
                {
                    url: article.image,
                    alt: article.imageAlt,
                },
            ],
        },
    }
}

function formatDate(date: string) {
    return new Intl.DateTimeFormat("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(new Date(`${date}T12:00:00`))
}

export default async function ActuArticlePage({
    params,
}: ArticlePageProps) {
    const { slug } = await params
    const article = getActuArticleBySlug(slug)

    if (!article) {
        notFound()
    }

    return (
        <main className="bg-white text-zinc-950">

            {/* EN-TÊTE ARTICLE */}
            <section className="border-b border-zinc-200 bg-[#f6f4ef] px-6 pb-14 pt-16 sm:px-10 lg:pb-20 lg:pt-20">
                <div className="mx-auto max-w-5xl">

                    <Link
                        href="/actu"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 transition hover:text-zinc-950"
                    >
                        <span aria-hidden="true">←</span>
                        Retour à l’actu
                    </Link>

                    <p className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                        {article.category}
                    </p>

                    <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                        {article.title}
                    </h1>

                    <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600 sm:text-xl">
                        {article.excerpt}
                    </p>

                    <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-zinc-500">
                        <time dateTime={article.publishedAt}>
                            {formatDate(article.publishedAt)}
                        </time>

                        {article.location && (
                            <>
                                <span aria-hidden="true">•</span>
                                <span>{article.location}</span>
                            </>
                        )}
                    </div>

                </div>
            </section>

            {/* PHOTO PRINCIPALE */}
            <section className="px-6 pt-10 sm:px-10 lg:pt-14">
                <div className="mx-auto max-w-5xl">
                    <figure>
                        <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100 sm:aspect-[16/10]">
                            <Image
                                src={article.image}
                                alt={article.imageAlt}
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 1024px"
                                className="object-cover"
                            />
                        </div>

                        <figcaption className="mt-3 text-sm leading-6 text-zinc-500">
                            {article.imageAlt}
                        </figcaption>
                    </figure>
                </div>
            </section>

            {/* CONTENU */}
            <article className="px-6 py-14 sm:px-10 lg:py-20">
                <div className="mx-auto max-w-3xl">

                    <p className="text-xl font-medium leading-9 text-zinc-900">
                        {article.intro}
                    </p>

                    <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-600">
                        {article.paragraphs.map((paragraph) => (
                            <p key={paragraph}>
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {article.next && (
                        <div className="mt-10 border-l-4 border-amber-500 bg-[#f6f4ef] px-6 py-5">
                            <p className="font-semibold text-zinc-950">
                                {article.next}
                            </p>
                        </div>
                    )}

                </div>
            </article>

            {/* SERVICE ASSOCIÉ */}
            {article.serviceHref && article.serviceLabel && (
                <section className="border-y border-zinc-200 bg-zinc-50 px-6 py-10 sm:px-10">
                    <div className="mx-auto flex max-w-3xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                                Travaux concernés
                            </p>

                            <p className="mt-2 font-semibold text-zinc-950">
                                {article.serviceLabel}
                            </p>
                        </div>

                        <Link
                            href={article.serviceHref}
                            className="inline-flex w-fit items-center gap-2 font-semibold text-zinc-950 underline decoration-zinc-300 underline-offset-4 transition hover:decoration-zinc-950"
                        >
                            En savoir plus
                            <span aria-hidden="true">→</span>
                        </Link>

                    </div>
                </section>
            )}

            {/* CTA FINAL */}
            <section className="px-6 py-16 sm:px-10 lg:py-20">
                <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl bg-zinc-950 px-7 py-10 text-white sm:px-10 lg:px-14 lg:py-12">

                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                        Votre projet
                    </p>

                    <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">

                        <div>
                            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                                Vous avez un chantier à nous montrer ?
                            </h2>

                            <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-300">
                                Quelques photos et une courte explication permettent déjà de
                                comprendre ce que vous souhaitez faire.
                            </p>
                        </div>

                        <Link
                            href="/#contact"
                            className="inline-flex min-h-12 w-fit items-center justify-center rounded-md bg-white px-6 py-3 font-semibold text-zinc-950 transition hover:bg-zinc-200"
                        >
                            Parler de mon projet
                            <span className="ml-2" aria-hidden="true">
                                →
                            </span>
                        </Link>

                    </div>
                </div>
            </section>

        </main>

    )
}
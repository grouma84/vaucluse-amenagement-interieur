import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { createPublicSupabaseClient } from "@/lib/supabase-public"

type ReelPageProps = {
    params: Promise<{
        slug: string
    }>
}

export const dynamic = "force-dynamic"

async function getReel(slug: string) {
    const supabase = createPublicSupabaseClient()

    const { data, error } = await supabase
        .from("reels")
        .select(`
      id,
      slug,
      title,
      category,
      excerpt,
      content,
      video_path,
      location,
      service_label,
      service_href,
      published_at
    `)
        .eq("slug", slug)
        .eq("status", "published")
        .maybeSingle()

    if (error) {
        throw new Error(
            `Impossible de charger le Reel : ${error.message}`
        )
    }

    if (!data) {
        return null
    }

    const { data: videoData } = supabase.storage
        .from("actu-videos")
        .getPublicUrl(data.video_path)

    return {
        ...data,
        videoUrl: videoData.publicUrl,
    }
}

export async function generateMetadata({
    params,
}: ReelPageProps): Promise<Metadata> {
    const { slug } = await params

    const reel = await getReel(slug)

    if (!reel) {
        return {
            title: "Projet introuvable",
        }
    }

    return {
        title: reel.title,
        description: reel.excerpt,

        alternates: {
            canonical: `/actu/reel/${reel.slug}`,
        },

        openGraph: {
            title: reel.title,
            description: reel.excerpt,
            url: `/actu/reel/${reel.slug}`,
            siteName:
                "VAUCLUSE AMÉNAGEMENT INTÉRIEUR",
            locale: "fr_FR",
            type: "article",
        },
    }
}

function formatDate(date: string | null) {
    if (!date) {
        return ""
    }

    return new Intl.DateTimeFormat("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(new Date(date))
}

export default async function ReelPage({
    params,
}: ReelPageProps) {
    const { slug } = await params

    const reel = await getReel(slug)

    if (!reel) {
        notFound()
    }

    const paragraphs: string[] = String(
        reel.content ?? ""
    )
        .split(/\n\s*\n/)
        .map((paragraph: string) =>
            paragraph.trim()
        )
        .filter(
            (paragraph: string) =>
                paragraph.length > 0
        )

    return (
        <main className="bg-white text-zinc-950">

            {/* ==================================================
          HEADER
      ================================================== */}

            <section className="border-b border-zinc-200 bg-[#f6f4ef] px-6 pb-14 pt-16 sm:px-10 lg:pb-20 lg:pt-20">

                <div className="mx-auto max-w-5xl">

                    <Link
                        href="/actu"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 transition hover:text-zinc-950"
                    >
                        <span aria-hidden="true">
                            ←
                        </span>

                        Retour à l’actu
                    </Link>

                    <p className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                        {reel.category}
                    </p>

                    <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                        {reel.title}
                    </h1>

                    <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600 sm:text-xl">
                        {reel.excerpt}
                    </p>

                    <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-zinc-500">

                        {reel.published_at && (
                            <time
                                dateTime={reel.published_at}
                            >
                                {formatDate(
                                    reel.published_at
                                )}
                            </time>
                        )}

                        {reel.location && (
                            <>
                                <span aria-hidden="true">
                                    •
                                </span>

                                <span>
                                    {reel.location}
                                </span>
                            </>
                        )}

                    </div>

                </div>

            </section>

            {/* ==================================================
          VIDEO
      ================================================== */}

            <section className="px-6 pt-10 sm:px-10 lg:pt-14">

                <div className="mx-auto max-w-5xl">

                    <div className="overflow-hidden rounded-2xl bg-black">

                        <video
                            src={reel.videoUrl}
                            controls
                            playsInline
                            preload="metadata"
                            className="mx-auto max-h-[80vh] w-full bg-black object-contain"
                        >
                            Votre navigateur ne permet pas
                            l'affichage de cette vidéo.
                        </video>

                    </div>

                </div>

            </section>

            {/* ==================================================
          CONTENU
      ================================================== */}

            <article className="px-6 py-14 sm:px-10 lg:py-20">

                <div className="mx-auto max-w-3xl">

                    <div className="space-y-6 text-lg leading-8 text-zinc-600">

                        {paragraphs.map(
                            (
                                paragraph: string,
                                index: number
                            ) => (
                                <p
                                    key={`${reel.id}-${index}`}
                                >
                                    {paragraph}
                                </p>
                            )
                        )}

                    </div>

                </div>

            </article>

            {/* ==================================================
          TRAVAUX CONCERNES
      ================================================== */}

            <section className="border-y border-zinc-200 bg-zinc-50 px-6 py-10 sm:px-10">

                <div className="mx-auto flex max-w-3xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                    <div>

                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                            Travaux concernés
                        </p>

                        <p className="mt-2 font-semibold text-zinc-950">
                            {reel.service_label}
                        </p>

                    </div>

                    <Link
                        href={reel.service_href}
                        className="inline-flex w-fit items-center gap-2 font-semibold text-zinc-950 underline decoration-zinc-300 underline-offset-4 transition hover:decoration-zinc-950"
                    >
                        En savoir plus

                        <span aria-hidden="true">
                            →
                        </span>
                    </Link>

                </div>

            </section>

            {/* ==================================================
          CTA
      ================================================== */}

            <section className="px-6 py-16 sm:px-10 lg:py-20">

                <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl bg-zinc-950 px-7 py-10 text-white sm:px-10 lg:px-14 lg:py-12">

                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                        Votre projet
                    </p>

                    <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">

                        <div>

                            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                                Vous avez un projet similaire ?
                            </h2>

                            <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-300">
                                Parlez-nous de votre chantier et
                                envoyez quelques photos pour nous
                                permettre de comprendre votre projet.
                            </p>

                        </div>

                        <Link
                            href="/#contact"
                            className="inline-flex min-h-12 w-fit items-center justify-center rounded-md bg-white px-6 py-3 font-semibold text-zinc-950 transition hover:bg-zinc-200"
                        >
                            Parler de mon projet

                            <span
                                className="ml-2"
                                aria-hidden="true"
                            >
                                →
                            </span>
                        </Link>

                    </div>

                </div>

            </section>

        </main>
    )
}
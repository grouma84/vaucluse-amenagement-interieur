"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import { supabase } from "@/lib/supabase-browser"

type ArticleRow = {
    id: string
    slug: string
    title: string
    category: string
    status: string
    image_path: string
    published_at: string | null
    created_at: string
}

type ReelRow = {
    id: string
    slug: string
    title: string
    category: string
    status: string
    video_path: string
    published_at: string | null
    created_at: string
}

type Publication = {
    id: string
    type: "article" | "reel"
    title: string
    category: string
    status: string
    date: string
    href: string
    mediaPath: string
}

function formatDate(date: string) {
    return new Intl.DateTimeFormat("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(new Date(date))
}

export default function AdminPage() {
    const router = useRouter()

    const [loading, setLoading] = useState(true)
    const [email, setEmail] = useState<string | null>(null)

    const [publications, setPublications] = useState<
        Publication[]
    >([])

    const [articlesCount, setArticlesCount] = useState(0)
    const [reelsCount, setReelsCount] = useState(0)

    const [errorMessage, setErrorMessage] = useState("")

    const [deletingKey, setDeletingKey] =
        useState<string | null>(null)

    useEffect(() => {
        async function loadDashboard() {
            setErrorMessage("")

            const {
                data: { user },
                error: userError,
            } = await supabase.auth.getUser()

            if (userError || !user) {
                router.replace("/admin/login")
                return
            }

            setEmail(user.email ?? null)

            const [
                { data: articlesData, error: articlesError },
                { data: reelsData, error: reelsError },
            ] = await Promise.all([
                supabase
                    .from("articles")
                    .select(`
            id,
            slug,
            title,
            category,
            status,
            image_path,
            published_at,
            created_at
          `)
                    .order("created_at", {
                        ascending: false,
                    }),

                supabase
                    .from("reels")
                    .select(`
            id,
            slug,
            title,
            category,
            status,
            video_path,
            published_at,
            created_at
          `)
                    .order("created_at", {
                        ascending: false,
                    }),
            ])

            if (articlesError) {
                setErrorMessage(
                    `Impossible de charger les articles : ${articlesError.message}`
                )

                setLoading(false)
                return
            }

            if (reelsError) {
                setErrorMessage(
                    `Impossible de charger les Reels : ${reelsError.message}`
                )

                setLoading(false)
                return
            }

            const articles =
                (articlesData ?? []) as ArticleRow[]

            const reels =
                (reelsData ?? []) as ReelRow[]

            setArticlesCount(articles.length)
            setReelsCount(reels.length)

            const articlePublications: Publication[] =
                articles.map((article) => ({
                    id: article.id,
                    type: "article",
                    title: article.title,
                    category: article.category,
                    status: article.status,

                    date:
                        article.published_at ??
                        article.created_at,

                    href: `/actu/${article.slug}`,

                    mediaPath: article.image_path,
                }))

            const reelPublications: Publication[] =
                reels.map((reel) => ({
                    id: reel.id,
                    type: "reel",
                    title: reel.title,
                    category: reel.category,
                    status: reel.status,

                    date:
                        reel.published_at ??
                        reel.created_at,

                    href: `/actu/reel/${reel.slug}`,

                    mediaPath: reel.video_path,
                }))

            const merged = [
                ...articlePublications,
                ...reelPublications,
            ].sort(
                (a, b) =>
                    new Date(b.date).getTime() -
                    new Date(a.date).getTime()
            )

            setPublications(merged)
            setLoading(false)
        }

        loadDashboard()
    }, [router])

    async function deletePublication(
        publication: Publication
    ) {
        const publicationLabel =
            publication.type === "article"
                ? "cet article"
                : "ce Reel"

        const confirmed = window.confirm(
            `Supprimer définitivement ${publicationLabel} ?\n\n"${publication.title}"\n\nLa photo ou la vidéo associée sera également supprimée.`
        )

        if (!confirmed) {
            return
        }

        const key =
            `${publication.type}-${publication.id}`

        setDeletingKey(key)
        setErrorMessage("")

        try {
            const table =
                publication.type === "article"
                    ? "articles"
                    : "reels"

            const bucket =
                publication.type === "article"
                    ? "actu-images"
                    : "actu-videos"

            // 1. Supprimer la publication de la base
            const { error: databaseError } =
                await supabase
                    .from(table)
                    .delete()
                    .eq("id", publication.id)

            if (databaseError) {
                throw new Error(
                    `Suppression impossible : ${databaseError.message}`
                )
            }

            // 2. Supprimer le média associé
            if (publication.mediaPath) {
                const { error: storageError } =
                    await supabase.storage
                        .from(bucket)
                        .remove([publication.mediaPath])

                if (storageError) {
                    setErrorMessage(
                        `La publication a été supprimée, mais le fichier média n'a pas pu être supprimé du stockage : ${storageError.message}`
                    )
                }
            }

            // 3. Retirer immédiatement la publication du tableau
            setPublications((current) =>
                current.filter(
                    (item) =>
                        !(
                            item.id === publication.id &&
                            item.type === publication.type
                        )
                )
            )

            // 4. Mettre à jour les compteurs
            if (publication.type === "article") {
                setArticlesCount((count) =>
                    Math.max(0, count - 1)
                )
            } else {
                setReelsCount((count) =>
                    Math.max(0, count - 1)
                )
            }
        } catch (error) {
            const text =
                error instanceof Error
                    ? error.message
                    : "Erreur inconnue."

            setErrorMessage(text)
        } finally {
            setDeletingKey(null)
        }
    }

    async function logout() {
        await supabase.auth.signOut()

        router.replace("/admin/login")
        router.refresh()
    }

    if (loading) {
        return (
            <main className="min-h-screen bg-[#f6f4ef] px-6 py-20 text-zinc-950">
                <div className="mx-auto max-w-5xl">
                    <p className="text-sm text-zinc-500">
                        Chargement de VAI Publisher...
                    </p>
                </div>
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-[#f6f4ef] px-6 py-16 text-zinc-950 sm:px-10 lg:py-20">

            <div className="mx-auto max-w-5xl">

                {/* EN-TÊTE */}

                <header className="flex flex-col gap-6 border-b border-zinc-300 pb-8 sm:flex-row sm:items-end sm:justify-between">

                    <div>

                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                            Administration
                        </p>

                        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                            VAI Publisher
                        </h1>

                        <p className="mt-3 max-w-xl text-zinc-600">
                            Publiez et suivez les articles et les
                            Reels de la rubrique Actu.
                        </p>

                    </div>

                    <div className="flex flex-col items-start gap-2 sm:items-end">

                        {email && (
                            <p className="text-sm text-zinc-500">
                                Connecté : {email}
                            </p>
                        )}

                        <button
                            type="button"
                            onClick={logout}
                            className="text-sm font-semibold text-zinc-700 underline decoration-zinc-300 underline-offset-4 transition hover:text-zinc-950"
                        >
                            Se déconnecter
                        </button>

                    </div>

                </header>

                {/* NOUVELLE PUBLICATION */}

                <section className="py-12">

                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                        Nouvelle publication
                    </p>

                    <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
                        Que voulez-vous publier ?
                    </h2>

                    <div className="mt-8 grid gap-5 md:grid-cols-2">

                        <Link
                            href="/admin/articles/nouveau"
                            className="group rounded-2xl border border-zinc-200 bg-white p-7 transition hover:border-zinc-400 hover:shadow-sm sm:p-8"
                        >

                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-950 text-2xl text-white">
                                +
                            </div>

                            <h3 className="mt-8 text-2xl font-semibold tracking-tight">
                                Créer un article
                            </h3>

                            <p className="mt-3 leading-7 text-zinc-600">
                                Photo, texte et chantier détaillé avec
                                lien automatique vers la prestation
                                concernée.
                            </p>

                            <span className="mt-8 inline-flex items-center gap-2 font-semibold">
                                Créer l'article

                                <span
                                    className="transition group-hover:translate-x-1"
                                    aria-hidden="true"
                                >
                                    →
                                </span>
                            </span>

                        </Link>

                        <Link
                            href="/admin/reels/nouveau"
                            className="group rounded-2xl border border-zinc-200 bg-white p-7 transition hover:border-zinc-400 hover:shadow-sm sm:p-8"
                        >

                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-2xl font-semibold text-zinc-950">
                                +
                            </div>

                            <h3 className="mt-8 text-2xl font-semibold tracking-tight">
                                Ajouter un Reel
                            </h3>

                            <p className="mt-3 leading-7 text-zinc-600">
                                Vidéo de chantier avec sa propre page
                                projet et son tunnel vers la prestation.
                            </p>

                            <span className="mt-8 inline-flex items-center gap-2 font-semibold">
                                Ajouter un Reel

                                <span
                                    className="transition group-hover:translate-x-1"
                                    aria-hidden="true"
                                >
                                    →
                                </span>
                            </span>

                        </Link>

                    </div>

                </section>

                {/* PUBLICATIONS */}

                <section className="border-t border-zinc-300 py-10">

                    <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

                        <div>

                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                                Contenus
                            </p>

                            <h2 className="mt-3 text-2xl font-semibold">
                                Dernières publications
                            </h2>

                            <p className="mt-2 text-sm text-zinc-500">
                                {articlesCount} article
                                {articlesCount !== 1 ? "s" : ""}
                                {" • "}
                                {reelsCount} Reel
                                {reelsCount !== 1 ? "s" : ""}
                            </p>

                        </div>

                        <Link
                            href="/actu"
                            target="_blank"
                            className="text-sm font-semibold underline decoration-zinc-300 underline-offset-4"
                        >
                            Voir la page Actu →
                        </Link>

                    </div>

                    {/* MESSAGE D'ERREUR */}

                    {errorMessage && (
                        <div className="mt-8 rounded-xl border border-red-200 bg-red-50 p-5 text-sm text-red-700">
                            {errorMessage}
                        </div>
                    )}

                    {/* LISTE */}

                    {publications.length > 0 && (
                        <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white">

                            {publications.map(
                                (publication, index) => {
                                    const publicationKey =
                                        `${publication.type}-${publication.id}`

                                    const deleting =
                                        deletingKey === publicationKey

                                    return (
                                        <article
                                            key={publicationKey}
                                            className={
                                                index === 0
                                                    ? "p-6 sm:p-7"
                                                    : "border-t border-zinc-200 p-6 sm:p-7"
                                            }
                                        >

                                            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                                                <div className="min-w-0">

                                                    <div className="flex flex-wrap items-center gap-2">

                                                        <span
                                                            className={
                                                                publication.type ===
                                                                    "article"
                                                                    ? "rounded-full bg-zinc-950 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white"
                                                                    : "rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-zinc-950"
                                                            }
                                                        >
                                                            {publication.type ===
                                                                "article"
                                                                ? "Article"
                                                                : "Reel"}
                                                        </span>

                                                        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500">
                                                            {
                                                                publication.category
                                                            }
                                                        </span>

                                                    </div>

                                                    <h3 className="mt-3 text-lg font-semibold leading-7 sm:text-xl">
                                                        {publication.title}
                                                    </h3>

                                                    <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-zinc-500">

                                                        <span>
                                                            {formatDate(
                                                                publication.date
                                                            )}
                                                        </span>

                                                        <span aria-hidden="true">
                                                            •
                                                        </span>

                                                        <span>
                                                            {publication.status ===
                                                                "published"
                                                                ? "Publié"
                                                                : "Brouillon"}
                                                        </span>

                                                    </div>

                                                </div>

                                                {/* ACTIONS */}

                                                <div className="flex shrink-0 items-center gap-5">

                                                    <Link
                                                        href={publication.href}
                                                        target="_blank"
                                                        className="inline-flex items-center gap-2 font-semibold text-zinc-950 underline decoration-zinc-300 underline-offset-4 transition hover:decoration-zinc-950"
                                                    >
                                                        Voir

                                                        <span aria-hidden="true">
                                                            →
                                                        </span>
                                                    </Link>

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            deletePublication(
                                                                publication
                                                            )
                                                        }
                                                        disabled={deleting}
                                                        className="text-sm font-semibold text-red-700 underline decoration-red-200 underline-offset-4 transition hover:decoration-red-700 disabled:cursor-not-allowed disabled:opacity-50"
                                                    >
                                                        {deleting
                                                            ? "Suppression..."
                                                            : "Supprimer"}
                                                    </button>

                                                </div>

                                            </div>

                                        </article>
                                    )
                                }
                            )}

                        </div>
                    )}

                    {/* AUCUNE PUBLICATION */}

                    {publications.length === 0 && (
                        <div className="mt-8 rounded-2xl border border-dashed border-zinc-300 bg-white/50 px-6 py-12 text-center">

                            <p className="font-medium text-zinc-700">
                                Aucune publication.
                            </p>

                            <p className="mt-2 text-sm text-zinc-500">
                                Créez votre premier article ou votre
                                premier Reel.
                            </p>

                        </div>
                    )}

                </section>

            </div>

        </main>
    )
}
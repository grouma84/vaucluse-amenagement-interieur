"use client"

import { FormEvent, useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { supabase } from "@/lib/supabase-browser"
import {
    SERVICE_CATEGORIES,
    getServiceCategory,
} from "@/content/service-categories"

const MAX_VIDEO_SIZE = 50 * 1024 * 1024
const ALLOWED_VIDEO_TYPES = ["video/mp4"]

function slugify(value: string) {
    return value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
}

function safeFileName(fileName: string) {
    const extension =
        fileName.split(".").pop()?.toLowerCase() || "mp4"

    const baseName = fileName
        .replace(/\.[^/.]+$/, "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")

    return `${baseName || "video"}.${extension}`
}

async function createUniqueSlug(title: string) {
    const baseSlug = slugify(title)

    if (!baseSlug) {
        throw new Error(
            "Impossible de générer l'adresse du Reel."
        )
    }

    let candidate = baseSlug
    let suffix = 2

    while (true) {
        const { data, error } = await supabase
            .from("reels")
            .select("id")
            .eq("slug", candidate)
            .maybeSingle()

        if (error) {
            throw new Error(
                `Vérification du slug impossible : ${error.message}`
            )
        }

        if (!data) {
            return candidate
        }

        candidate = `${baseSlug}-${suffix}`
        suffix += 1
    }
}

export default function NewReelPage() {
    const router = useRouter()

    const [checkingAuth, setCheckingAuth] = useState(true)
    const [publishing, setPublishing] = useState(false)

    const [video, setVideo] = useState<File | null>(null)
    const [title, setTitle] = useState("")
    const [excerpt, setExcerpt] = useState("")
    const [content, setContent] = useState("")
    const [location, setLocation] = useState("Vaucluse")

    const [serviceCategory, setServiceCategory] =
        useState("isolation")

    const [message, setMessage] = useState("")

    useEffect(() => {
        async function checkAuth() {
            const {
                data: { user },
            } = await supabase.auth.getUser()

            if (!user) {
                router.replace("/admin/login")
                return
            }

            setCheckingAuth(false)
        }

        checkAuth()
    }, [router])

    const selectedService =
        getServiceCategory(serviceCategory)

    async function handleSubmit(
        event: FormEvent<HTMLFormElement>
    ) {
        event.preventDefault()

        setMessage("")

        if (!video) {
            setMessage("❌ Choisissez une vidéo.")
            return
        }

        if (!ALLOWED_VIDEO_TYPES.includes(video.type)) {
            setMessage(
                "❌ Format non autorisé. Utilisez une vidéo MP4."
            )
            return
        }

        if (video.size > MAX_VIDEO_SIZE) {
            setMessage(
                "❌ La vidéo dépasse la limite de 50 Mo."
            )
            return
        }

        if (!title.trim()) {
            setMessage("❌ Le titre est obligatoire.")
            return
        }

        if (!excerpt.trim()) {
            setMessage("❌ Le résumé est obligatoire.")
            return
        }

        if (!content.trim()) {
            setMessage(
                "❌ La description du chantier est obligatoire."
            )
            return
        }

        if (!selectedService) {
            setMessage(
                "❌ Sélectionnez un type de travaux valide."
            )
            return
        }

        setPublishing(true)

        let uploadedPath: string | null = null

        try {
            const {
                data: { user },
            } = await supabase.auth.getUser()

            if (!user) {
                throw new Error(
                    "Votre session administrateur a expiré."
                )
            }

            const slug = await createUniqueSlug(title)

            const now = new Date()

            const year = String(now.getFullYear())

            const month = String(
                now.getMonth() + 1
            ).padStart(2, "0")

            const filename = safeFileName(video.name)

            uploadedPath =
                `reels/${year}/${month}/${slug}-${filename}`

            const { error: uploadError } =
                await supabase.storage
                    .from("actu-videos")
                    .upload(uploadedPath, video, {
                        cacheControl: "3600",
                        upsert: false,
                    })

            if (uploadError) {
                throw new Error(
                    `Upload vidéo impossible : ${uploadError.message}`
                )
            }

            const { error: insertError } =
                await supabase
                    .from("reels")
                    .insert({
                        slug,
                        title: title.trim(),

                        category: "CHANTIER EN VIDÉO",

                        excerpt: excerpt.trim(),
                        content: content.trim(),

                        video_path: uploadedPath,

                        location:
                            location.trim() || null,

                        service_label:
                            selectedService.label,

                        service_href:
                            selectedService.href,

                        status: "published",

                        published_at:
                            new Date().toISOString(),
                    })

            if (insertError) {
                await supabase.storage
                    .from("actu-videos")
                    .remove([uploadedPath])

                uploadedPath = null

                throw new Error(
                    `Création du Reel impossible : ${insertError.message}`
                )
            }

            setMessage(
                `✅ Reel publié.

Page du projet :
/actu/reel/${slug}

Travaux concernés :
${selectedService.label}

Page service :
${selectedService.href}`
            )

            setVideo(null)
            setTitle("")
            setExcerpt("")
            setContent("")
            setLocation("Vaucluse")
        } catch (error) {
            const text =
                error instanceof Error
                    ? error.message
                    : "Erreur inconnue."

            setMessage(`❌ ${text}`)
        } finally {
            setPublishing(false)
        }
    }

    if (checkingAuth) {
        return (
            <main className="min-h-screen bg-[#f6f4ef] px-6 py-20">
                <div className="mx-auto max-w-4xl">
                    <p className="text-sm text-zinc-500">
                        Chargement de VAI Publisher...
                    </p>
                </div>
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-[#f6f4ef] px-6 py-12 text-zinc-950 sm:px-10 lg:py-16">
            <div className="mx-auto max-w-4xl">

                <header>
                    <Link
                        href="/admin"
                        className="text-sm font-semibold text-zinc-600 underline decoration-zinc-300 underline-offset-4"
                    >
                        ← Retour à VAI Publisher
                    </Link>

                    <p className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                        Nouvelle publication
                    </p>

                    <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                        Ajouter un Reel
                    </h1>

                    <p className="mt-4 max-w-2xl leading-7 text-zinc-600">
                        Le Reel apparaîtra dans le fil Actu.
                        « Voir le projet » ouvrira automatiquement
                        sa propre page avec la vidéo et les
                        explications du chantier.
                    </p>
                </header>

                <form
                    onSubmit={handleSubmit}
                    className="mt-10 space-y-8"
                >

                    <section className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8">
                        <h2 className="text-xl font-semibold">
                            1. Vidéo
                        </h2>

                        <p className="mt-2 text-sm text-zinc-500">
                            MP4 — 50 Mo maximum.
                        </p>

                        <input
                            type="file"
                            accept="video/mp4"
                            onChange={(event) =>
                                setVideo(
                                    event.target.files?.[0] ?? null
                                )
                            }
                            className="mt-5 block w-full"
                            required
                        />
                    </section>

                    <section className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8">
                        <h2 className="text-xl font-semibold">
                            2. Le projet
                        </h2>

                        <div className="mt-6 grid gap-6">

                            <div>
                                <label className="text-sm font-semibold">
                                    Titre
                                </label>

                                <input
                                    value={title}
                                    onChange={(event) =>
                                        setTitle(event.target.value)
                                    }
                                    className="mt-2 w-full rounded-lg border border-zinc-300 px-4 py-3"
                                    placeholder="Ex. Doublage entre poutres à Cairanne"
                                    required
                                />
                            </div>

                            <div>
                                <label className="text-sm font-semibold">
                                    Résumé
                                </label>

                                <textarea
                                    value={excerpt}
                                    onChange={(event) =>
                                        setExcerpt(event.target.value)
                                    }
                                    rows={3}
                                    className="mt-2 w-full rounded-lg border border-zinc-300 px-4 py-3"
                                    placeholder="Quelques lignes pour présenter rapidement le chantier."
                                    required
                                />
                            </div>

                            <div>
                                <label className="text-sm font-semibold">
                                    Description du chantier
                                </label>

                                <textarea
                                    value={content}
                                    onChange={(event) =>
                                        setContent(event.target.value)
                                    }
                                    rows={8}
                                    className="mt-2 w-full rounded-lg border border-zinc-300 px-4 py-3"
                                    placeholder="Décrivez les travaux réalisés, les contraintes du chantier et le résultat."
                                    required
                                />
                            </div>

                            <div>
                                <label className="text-sm font-semibold">
                                    Lieu
                                </label>

                                <input
                                    value={location}
                                    onChange={(event) =>
                                        setLocation(event.target.value)
                                    }
                                    className="mt-2 w-full rounded-lg border border-zinc-300 px-4 py-3"
                                    placeholder="Ex. Cairanne"
                                />
                            </div>

                        </div>
                    </section>

                    <section className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8">

                        <h2 className="text-xl font-semibold">
                            3. Travaux concernés
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-zinc-500">
                            Cette sélection détermine automatiquement
                            la page service proposée après la
                            présentation du projet.
                        </p>

                        <select
                            value={serviceCategory}
                            onChange={(event) =>
                                setServiceCategory(
                                    event.target.value
                                )
                            }
                            className="mt-6 w-full rounded-lg border border-zinc-300 bg-white px-4 py-3"
                        >
                            {SERVICE_CATEGORIES.map(
                                (service) => (
                                    <option
                                        key={service.value}
                                        value={service.value}
                                    >
                                        {service.label}
                                    </option>
                                )
                            )}
                        </select>

                        {selectedService && (
                            <div className="mt-5 rounded-xl bg-zinc-50 p-5">

                                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500">
                                    Page service automatique
                                </p>

                                <p className="mt-2 font-semibold">
                                    {selectedService.label}
                                </p>

                                <p className="mt-1 break-all text-sm text-zinc-500">
                                    {selectedService.href}
                                </p>

                            </div>
                        )}

                    </section>

                    <section className="rounded-2xl bg-zinc-950 p-6 text-white sm:p-8">

                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                            Publication
                        </p>

                        <h2 className="mt-3 text-2xl font-semibold">
                            Publier ce projet
                        </h2>

                        <p className="mt-3 max-w-xl leading-7 text-zinc-300">
                            VAI Publisher créera automatiquement
                            la page détaillée du Reel.
                        </p>

                        <button
                            type="submit"
                            disabled={publishing}
                            className="mt-7 min-h-12 rounded-lg bg-amber-400 px-7 py-3 font-semibold text-zinc-950 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {publishing
                                ? "Publication en cours..."
                                : "Publier le Reel"}
                        </button>

                    </section>

                </form>

                {message && (
                    <pre className="mt-8 whitespace-pre-wrap rounded-xl bg-white p-6 text-sm leading-6 shadow-sm">
                        {message}
                    </pre>
                )}

            </div>
        </main>
    )
}
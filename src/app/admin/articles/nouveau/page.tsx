"use client"

import { FormEvent, useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { supabase } from "@/lib/supabase-browser"
import {
    SERVICE_CATEGORIES,
    getServiceCategory,
} from "@/content/service-categories"

const MAX_IMAGE_SIZE = 10 * 1024 * 1024

const ALLOWED_IMAGE_TYPES = [
    "image/jpeg",
    "image/png",
    "image/webp",
]

const ARTICLE_CATEGORIES = [
    "CHANTIER PARTICULIER",
    "CHANTIER PRO",
    "RÉALISATION",
    "CONSEIL",
] as const

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
        fileName.split(".").pop()?.toLowerCase() || "jpg"

    const baseName = fileName
        .replace(/\.[^/.]+$/, "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")

    return `${baseName || "image"}.${extension}`
}

async function createUniqueSlug(title: string) {
    const baseSlug = slugify(title)

    if (!baseSlug) {
        throw new Error(
            "Impossible de générer l'adresse de l'article."
        )
    }

    let candidate = baseSlug
    let suffix = 2

    while (true) {
        const { data, error } = await supabase
            .from("articles")
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

export default function NewArticlePage() {
    const router = useRouter()

    const [checkingAuth, setCheckingAuth] = useState(true)
    const [publishing, setPublishing] = useState(false)

    const [photo, setPhoto] = useState<File | null>(null)

    const [category, setCategory] =
        useState("CHANTIER PARTICULIER")

    const [title, setTitle] = useState("")
    const [excerpt, setExcerpt] = useState("")
    const [intro, setIntro] = useState("")
    const [content, setContent] = useState("")
    const [imageAlt, setImageAlt] = useState("")
    const [location, setLocation] = useState("Vaucluse")
    const [nextText, setNextText] = useState("")

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

        if (!photo) {
            setMessage("❌ Choisissez une photo.")
            return
        }

        if (!ALLOWED_IMAGE_TYPES.includes(photo.type)) {
            setMessage(
                "❌ Format non autorisé. Utilisez JPG, PNG ou WEBP."
            )
            return
        }

        if (photo.size > MAX_IMAGE_SIZE) {
            setMessage(
                "❌ La photo dépasse la limite de 10 Mo."
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

        if (!intro.trim()) {
            setMessage(
                "❌ L'introduction est obligatoire."
            )
            return
        }

        if (!content.trim()) {
            setMessage(
                "❌ Le contenu de l'article est obligatoire."
            )
            return
        }

        if (!imageAlt.trim()) {
            setMessage(
                "❌ La description de la photo est obligatoire."
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

            const filename = safeFileName(photo.name)

            uploadedPath =
                `articles/${year}/${month}/${slug}-${filename}`

            const { error: uploadError } =
                await supabase.storage
                    .from("actu-images")
                    .upload(uploadedPath, photo, {
                        cacheControl: "3600",
                        upsert: false,
                    })

            if (uploadError) {
                throw new Error(
                    `Upload photo impossible : ${uploadError.message}`
                )
            }

            const { error: insertError } =
                await supabase
                    .from("articles")
                    .insert({
                        slug,

                        category,

                        title: title.trim(),
                        excerpt: excerpt.trim(),
                        intro: intro.trim(),
                        content: content.trim(),

                        image_path: uploadedPath,
                        image_alt: imageAlt.trim(),

                        location:
                            location.trim() || null,

                        next_text:
                            nextText.trim() || null,

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
                    .from("actu-images")
                    .remove([uploadedPath])

                uploadedPath = null

                throw new Error(
                    `Création de l'article impossible : ${insertError.message}`
                )
            }

            setMessage(
                `✅ Article publié.

Page de l'article :
/actu/${slug}

Travaux concernés :
${selectedService.label}

Page service :
${selectedService.href}`
            )

            setPhoto(null)
            setTitle("")
            setExcerpt("")
            setIntro("")
            setContent("")
            setImageAlt("")
            setLocation("Vaucluse")
            setNextText("")
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
                        Créer un article
                    </h1>

                    <p className="mt-4 max-w-2xl leading-7 text-zinc-600">
                        Présentez un chantier, une réalisation ou
                        un conseil. VAI Publisher créera
                        automatiquement la page de l'article et
                        son lien vers la prestation concernée.
                    </p>
                </header>

                <form
                    onSubmit={handleSubmit}
                    className="mt-10 space-y-8"
                >

                    {/* PHOTO */}

                    <section className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8">

                        <h2 className="text-xl font-semibold">
                            1. Photo principale
                        </h2>

                        <p className="mt-2 text-sm text-zinc-500">
                            JPG, PNG ou WEBP — 10 Mo maximum.
                        </p>

                        <input
                            type="file"
                            accept="image/jpeg,image/png,image/webp"
                            onChange={(event) =>
                                setPhoto(
                                    event.target.files?.[0] ?? null
                                )
                            }
                            className="mt-5 block w-full"
                            required
                        />

                        <div className="mt-6">

                            <label className="text-sm font-semibold">
                                Description de la photo
                            </label>

                            <input
                                value={imageAlt}
                                onChange={(event) =>
                                    setImageAlt(event.target.value)
                                }
                                className="mt-2 w-full rounded-lg border border-zinc-300 px-4 py-3"
                                placeholder="Ex. Pose d'une ossature métallique sur un chantier à Cairanne"
                                required
                            />

                            <p className="mt-2 text-xs leading-5 text-zinc-500">
                                Décrivez simplement ce que montre la
                                photo.
                            </p>

                        </div>

                    </section>

                    {/* ARTICLE */}

                    <section className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8">

                        <h2 className="text-xl font-semibold">
                            2. L'article
                        </h2>

                        <div className="mt-6 grid gap-6">

                            <div>
                                <label className="text-sm font-semibold">
                                    Type de publication
                                </label>

                                <select
                                    value={category}
                                    onChange={(event) =>
                                        setCategory(event.target.value)
                                    }
                                    className="mt-2 w-full rounded-lg border border-zinc-300 bg-white px-4 py-3"
                                >
                                    {ARTICLE_CATEGORIES.map(
                                        (articleCategory) => (
                                            <option
                                                key={articleCategory}
                                                value={articleCategory}
                                            >
                                                {articleCategory}
                                            </option>
                                        )
                                    )}
                                </select>
                            </div>

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
                                    placeholder="Ex. Isolation intérieure d'une maison à Cairanne"
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
                                    placeholder="Quelques lignes visibles dans la page Actu et en haut de l'article."
                                    required
                                />
                            </div>

                            <div>
                                <label className="text-sm font-semibold">
                                    Introduction
                                </label>

                                <textarea
                                    value={intro}
                                    onChange={(event) =>
                                        setIntro(event.target.value)
                                    }
                                    rows={4}
                                    className="mt-2 w-full rounded-lg border border-zinc-300 px-4 py-3"
                                    placeholder="Présentez rapidement le chantier et ce qui a été réalisé."
                                    required
                                />
                            </div>

                            <div>
                                <label className="text-sm font-semibold">
                                    Contenu de l'article
                                </label>

                                <textarea
                                    value={content}
                                    onChange={(event) =>
                                        setContent(event.target.value)
                                    }
                                    rows={10}
                                    className="mt-2 w-full rounded-lg border border-zinc-300 px-4 py-3"
                                    placeholder={`Décrivez les travaux réalisés.

Vous pouvez séparer les paragraphes avec une ligne vide.`}
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

                            <div>
                                <label className="text-sm font-semibold">
                                    À retenir
                                </label>

                                <textarea
                                    value={nextText}
                                    onChange={(event) =>
                                        setNextText(event.target.value)
                                    }
                                    rows={3}
                                    className="mt-2 w-full rounded-lg border border-zinc-300 px-4 py-3"
                                    placeholder="Optionnel : une information importante à mettre en évidence."
                                />
                            </div>

                        </div>

                    </section>

                    {/* SERVICE */}

                    <section className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8">

                        <h2 className="text-xl font-semibold">
                            3. Travaux concernés
                        </h2>

                        <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500">
                            Choisissez la prestation correspondant
                            au chantier. VAI Publisher ajoutera
                            automatiquement le bon lien à la fin de
                            l'article.
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
                            <div className="mt-5 rounded-xl border border-zinc-200 bg-zinc-50 p-5">

                                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500">
                                    Page service automatique
                                </p>

                                <p className="mt-2 font-semibold text-zinc-950">
                                    {selectedService.label}
                                </p>

                                <p className="mt-1 break-all text-sm text-zinc-500">
                                    {selectedService.href}
                                </p>

                            </div>
                        )}

                    </section>

                    {/* PUBLICATION */}

                    <section className="rounded-2xl bg-zinc-950 p-6 text-white sm:p-8">

                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                            Publication
                        </p>

                        <h2 className="mt-3 text-2xl font-semibold">
                            Publier cet article
                        </h2>

                        <p className="mt-3 max-w-xl leading-7 text-zinc-300">
                            L'article apparaîtra automatiquement
                            dans la page Actu et possédera sa propre
                            adresse.
                        </p>

                        <button
                            type="submit"
                            disabled={publishing}
                            className="mt-7 min-h-12 rounded-lg bg-amber-400 px-7 py-3 font-semibold text-zinc-950 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {publishing
                                ? "Publication en cours..."
                                : "Publier l'article"}
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
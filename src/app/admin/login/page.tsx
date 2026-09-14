"use client"

import { FormEvent, useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import { supabase } from "@/lib/supabase-browser"

export default function AdminLoginPage() {
    const router = useRouter()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [loading, setLoading] = useState(false)
    const [checkingSession, setCheckingSession] = useState(true)

    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        async function checkSession() {
            const {
                data: { user },
            } = await supabase.auth.getUser()

            if (user) {
                router.replace("/admin")
                return
            }

            setCheckingSession(false)
        }

        checkSession()
    }, [router])

    async function handleLogin(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        setErrorMessage("")
        setLoading(true)

        const { error } = await supabase.auth.signInWithPassword({
            email: email.trim(),
            password,
        })

        if (error) {
            setErrorMessage(
                "Connexion impossible. Vérifiez votre adresse e-mail et votre mot de passe."
            )

            setLoading(false)
            return
        }

        router.replace("/admin")
        router.refresh()
    }

    if (checkingSession) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-[#f6f4ef] px-6 text-zinc-950">
                <p className="text-sm text-zinc-500">
                    Vérification de la connexion...
                </p>
            </main>
        )
    }

    return (
        <main className="flex min-h-screen items-center justify-center bg-[#f6f4ef] px-6 py-16 text-zinc-950">

            <div className="w-full max-w-md">

                {/* IDENTITÉ */}
                <div className="text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">
                        VAI Publisher
                    </p>

                    <h1 className="mt-4 text-4xl font-semibold tracking-tight">
                        Administration
                    </h1>

                    <p className="mt-3 leading-7 text-zinc-600">
                        Connectez-vous pour publier les contenus de la rubrique Actu.
                    </p>
                </div>

                {/* FORMULAIRE */}
                <form
                    onSubmit={handleLogin}
                    className="mt-10 rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm sm:p-8"
                >
                    <div>
                        <label
                            htmlFor="email"
                            className="text-sm font-semibold text-zinc-800"
                        >
                            Adresse e-mail
                        </label>

                        <input
                            id="email"
                            type="email"
                            autoComplete="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="votre@email.fr"
                            required
                            className="mt-2 w-full rounded-lg border border-zinc-300 bg-white px-4 py-3.5 outline-none transition focus:border-zinc-950"
                        />
                    </div>

                    <div className="mt-5">
                        <label
                            htmlFor="password"
                            className="text-sm font-semibold text-zinc-800"
                        >
                            Mot de passe
                        </label>

                        <input
                            id="password"
                            type="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            placeholder="••••••••••••"
                            required
                            className="mt-2 w-full rounded-lg border border-zinc-300 bg-white px-4 py-3.5 outline-none transition focus:border-zinc-950"
                        />
                    </div>

                    {errorMessage && (
                        <div
                            role="alert"
                            className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700"
                        >
                            {errorMessage}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="mt-7 flex min-h-12 w-full items-center justify-center rounded-lg bg-zinc-950 px-5 py-3 font-semibold text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {loading ? "Connexion..." : "Se connecter"}
                    </button>
                </form>

                <p className="mt-6 text-center text-xs leading-5 text-zinc-500">
                    Accès réservé à l’administration de Vaucluse Aménagement Intérieur.
                </p>

            </div>

        </main>
    )
}
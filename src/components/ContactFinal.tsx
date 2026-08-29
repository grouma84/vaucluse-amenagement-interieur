"use client"

import { useState, type FormEvent } from "react"

const PHONE_DISPLAY = "07 66 04 42 60"
const PHONE_INTERNATIONAL = "33766044260"
const EMAIL = "grouma.m@gmail.com"

export function ContactFinal() {
  const [status, setStatus] = useState("")

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = new FormData(event.currentTarget)

    const nom = String(form.get("nom") || "")
    const telephone = String(form.get("telephone") || "")
    const commune = String(form.get("commune") || "")
    const projet = String(form.get("projet") || "")
    const message = String(form.get("message") || "")

    const text = [
      "Bonjour VAUCLUSE AMÉNAGEMENT INTÉRIEUR,",
      "",
      "Je souhaite vous parler d’un projet.",
      "",
      `Nom : ${nom}`,
      `Téléphone : ${telephone}`,
      `Commune : ${commune}`,
      `Projet : ${projet}`,
      message ? `Précisions : ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n")

    const url = `https://wa.me/${PHONE_INTERNATIONAL}?text=${encodeURIComponent(text)}`

    setStatus("Votre demande est prête. WhatsApp va s’ouvrir.")
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <section
      id="contact"
      className="bg-zinc-950 px-6 py-20 text-white sm:px-10 lg:py-28"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

        <div>

          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">
            Contact
          </p>

          <h2
            id="contact-title"
            className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Parlons de votre projet.
          </h2>

          <p className="mt-6 max-w-lg text-lg leading-8 text-zinc-400">
            Quelques informations et, si possible ensuite, des photos permettent
            déjà de mieux comprendre votre demande.
          </p>

          <div className="mt-10 border-t border-zinc-800">

            <div className="border-b border-zinc-800 py-6">
              <p className="text-sm text-zinc-500">
                Téléphone
              </p>

              <a
                href="tel:+33766044260"
                className="mt-1 inline-block text-2xl font-semibold hover:text-amber-300"
              >
                {PHONE_DISPLAY}
              </a>
            </div>

            <div className="border-b border-zinc-800 py-6">
              <p className="text-sm text-zinc-500">
                Email
              </p>

              <a
                href={`mailto:${EMAIL}`}
                className="mt-1 inline-block font-semibold hover:text-amber-300"
              >
                {EMAIL}
              </a>
            </div>

            <div className="py-6">
              <p className="text-sm text-zinc-500">
                Secteur
              </p>

              <p className="mt-1 font-semibold">
                Carpentras • Vaucluse
              </p>
            </div>

          </div>

        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-7 text-zinc-950 sm:p-10"
        >

          <h3 className="text-2xl font-semibold tracking-tight">
            Expliquez-moi votre projet
          </h3>

          <p className="mt-2 text-sm leading-6 text-zinc-500">
            Quelques lignes suffisent pour commencer.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">

            <label className="block">
              <span className="text-sm font-semibold">
                Votre nom
              </span>

              <input
                required
                name="nom"
                type="text"
                autoComplete="name"
                className="mt-2 min-h-12 w-full border border-zinc-300 bg-white px-4 outline-none transition focus:border-zinc-950"
              />
            </label>

            <label className="block">
              <span className="text-sm font-semibold">
                Téléphone
              </span>

              <input
                required
                name="telephone"
                type="tel"
                autoComplete="tel"
                className="mt-2 min-h-12 w-full border border-zinc-300 bg-white px-4 outline-none transition focus:border-zinc-950"
              />
            </label>

            <label className="block">
              <span className="text-sm font-semibold">
                Commune du chantier
              </span>

              <input
                required
                name="commune"
                type="text"
                className="mt-2 min-h-12 w-full border border-zinc-300 bg-white px-4 outline-none transition focus:border-zinc-950"
              />
            </label>

            <label className="block">
              <span className="text-sm font-semibold">
                Votre projet
              </span>

              <select
                required
                name="projet"
                defaultValue=""
                className="mt-2 min-h-12 w-full border border-zinc-300 bg-white px-4 outline-none transition focus:border-zinc-950"
              >
                <option value="" disabled>
                  Choisir
                </option>

                <option>Créer une pièce</option>
                <option>Transformer un espace</option>
                <option>Refaire murs ou plafonds</option>
                <option>Isolation intérieure</option>
                <option>Placo décoratif</option>
                <option>Placo, joints et peinture</option>
                <option>Projet professionnel</option>
                <option>Autre projet</option>
              </select>
            </label>

          </div>

          <label className="mt-6 block">
            <span className="text-sm font-semibold">
              Quelques précisions
            </span>

            <textarea
              name="message"
              rows={5}
              placeholder="Exemple : refaire un plafond, créer une chambre, isoler un mur..."
              className="mt-2 w-full resize-y border border-zinc-300 bg-white px-4 py-3 outline-none transition focus:border-zinc-950"
            />
          </label>

          <button
            type="submit"
            className="mt-7 inline-flex min-h-13 w-full items-center justify-center bg-zinc-950 px-6 py-4 font-semibold text-white transition hover:bg-zinc-800"
          >
            Préparer ma demande sur WhatsApp
          </button>

          {status && (
            <p className="mt-4 text-sm text-zinc-600">
              {status}
            </p>
          )}

          <p className="mt-5 text-xs leading-5 text-zinc-500">
            Ce formulaire prépare un message WhatsApp. Les informations saisies
            ne sont pas enregistrées par le site.
          </p>

        </form>

      </div>
    </section>
  )
}

"use client"

import Image from "next/image"
import { useMemo, useState } from "react"
import { REALISATIONS } from "@/content/realisations"

const CATEGORY_LABELS: Record<string, string> = {
  plafond: "Plafonds",
  cloison: "Cloisons",
  isolation: "Isolation",
  doublage: "Doublages",
  renovation: "Rénovation",
  decoratif: "Décoratif",
  "joints-finitions": "Finitions",
  autre: "Autres",
}

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = useMemo(() => {
    const unique = Array.from(
      new Set(REALISATIONS.map((photo) => photo.category))
    )

    return unique.filter(Boolean)
  }, [])

  const visiblePhotos =
    activeCategory === "all"
      ? REALISATIONS
      : REALISATIONS.filter(
          (photo) => photo.category === activeCategory
        )

  return (
    <>
      <div className="mt-10 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveCategory("all")}
          className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
            activeCategory === "all"
              ? "border-zinc-950 bg-zinc-950 text-white"
              : "border-zinc-300 bg-white text-zinc-700 hover:border-zinc-500"
          }`}
        >
          Tous
        </button>

        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              activeCategory === category
                ? "border-zinc-950 bg-zinc-950 text-white"
                : "border-zinc-300 bg-white text-zinc-700 hover:border-zinc-500"
            }`}
          >
            {CATEGORY_LABELS[category] ?? category}
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm text-zinc-500">
        {visiblePhotos.length} réalisation
        {visiblePhotos.length > 1 ? "s" : ""} affichée
        {visiblePhotos.length > 1 ? "s" : ""}
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visiblePhotos.map((photo) => (
          <figure
            key={photo.src}
            className="group overflow-hidden bg-zinc-100"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-zinc-200">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-[1.02]"
              />
            </div>

            <figcaption className="p-5">
              <p className="text-sm leading-6 text-zinc-600">
                {photo.caption}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  )
}

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Placo décoratif à Carpentras",
  description:
    "Placo décoratif à Carpentras : niches, meuble TV, retombées, plafonds décoratifs, éclairages intégrés et formes sur mesure dans le Vaucluse.",
  alternates: {
    canonical: "/placo-decoratif-carpentras",
  },
}

const CHANTIER_STEPS = [
  {
    number: "01",
    title: "Comprendre l’espace et l’usage",
    text: "Mur TV, niches, plafond décoratif ou volume particulier : le projet commence par l’usage recherché, les dimensions disponibles et les contraintes de la pièce.",
  },
  {
    number: "02",
    title: "Définir les formes et les proportions",
    text: "Les lignes, profondeurs, hauteurs et réservations sont définies avant la réalisation afin que l’ouvrage s’intègre naturellement dans l’espace.",
  },
  {
    number: "03",
    title: "Construire l’ossature et prévoir les réservations",
    text: "L’ossature est réalisée selon la forme prévue. Les passages de câbles, éclairages ou équipements doivent être anticipés avant la fermeture de l’ouvrage.",
  },
  {
    number: "04",
    title: "Poser les plaques et préparer les finitions",
    text: "Les plaques de plâtre sont ajustées aux volumes créés, puis les joints et les surfaces sont préparés pour recevoir la finition prévue au chantier.",
  },
] as const

const REALISATIONS = [
  {
    src: "/images/realisations/plafond-decoratif-mur-tv-eclaire.jpg",
    alt: "Mur TV avec éléments décoratifs arrondis et plafond éclairé",
    caption:
      "Composition murale autour d’un téléviseur avec volumes décoratifs et éclairages intégrés.",
  },
  {
    src: "/images/realisations/plafond-a-niveaux-avec-cable.jpg",
    alt: "Plafond à plusieurs niveaux avec réservation périphérique en cours de réalisation",
    caption:
      "Création de niveaux et de retombées au plafond avant la mise en place complète des finitions.",
  },
  {
    src: "/images/realisations/finition-joints-plaques-platre-plafond.jpg",
    alt: "Retombée de plafond en plaques de plâtre avec joints en cours de finition",
    caption:
      "Préparation des joints et raccords d’un plafond avec retombée avant la finition finale.",
  },
] as const

export default function PlacoDecoratifCarpentrasPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-zinc-950 text-white">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="flex items-center px-6 py-20 sm:px-10 lg:px-14 lg:py-24">
            <div className="max-w-2xl">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">
                Plâtrerie décorative • Carpentras & Vaucluse
              </p>

              <h1 className="text-3xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                Placo décoratif à Carpentras
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
                Création de niches, meubles TV intégrés, retombées, plafonds
                décoratifs et formes en plaques de plâtre conçues selon l’espace,
                l’usage et le rendu recherché.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/#contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-md bg-white px-6 py-3 font-semibold text-zinc-950 transition hover:bg-zinc-200"
                >
                  Parler de mon projet
                </Link>

                <Link
                  href="/realisations"
                  className="inline-flex min-h-12 items-center justify-center rounded-md border border-zinc-700 px-6 py-3 font-semibold transition hover:bg-zinc-900"
                >
                  Voir les réalisations
                </Link>
              </div>
            </div>
          </div>

          <div className="relative min-h-[420px] lg:min-h-full">
            <Image
              src="/images/realisations/plafond-decoratif-mur-tv-eclaire.jpg"
              alt="Pièce avec mur TV décoratif et plafond éclairé"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

            <p className="absolute bottom-5 left-5 right-5 text-sm text-white/80">
              Exemple de placo décoratif avec volumes et éclairage intégré
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white px-6 py-20 text-zinc-950 sm:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
              Aménagement sur mesure
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Le placo ne sert pas seulement à créer des murs
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-zinc-600">
            <p>
              Les plaques de plâtre peuvent aussi servir à composer des volumes
              directement intégrés à l’architecture intérieure : niches, habillage
              d’un mur TV, retombées, plafonds à plusieurs niveaux ou éléments
              décoratifs particuliers.
            </p>

            <p>
              L’intérêt est de construire l’ouvrage selon les dimensions réelles de
              la pièce plutôt que d’ajouter un élément standard. Les proportions,
              les réservations et les finitions sont définies en fonction du projet.
            </p>

            <p>
              VAUCLUSE AMÉNAGEMENT INTÉRIEUR étudie les projets de placo décoratif à
              Carpentras et dans le Vaucluse, en neuf comme en rénovation.
            </p>
          </div>
        </div>
      </section>

      {/* USAGES */}
      <section className="bg-zinc-100 px-6 py-20 text-zinc-950 sm:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
              Possibilités
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Que peut-on créer en placo décoratif&nbsp;?
            </h2>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-zinc-200 bg-zinc-200 md:grid-cols-2">
            <article className="bg-white p-8 sm:p-10">
              <h3 className="text-2xl font-semibold">
                Meuble TV et habillage mural intégré
              </h3>

              <p className="mt-4 leading-7 text-zinc-600">
                Un mur TV peut être structuré avec des volumes en plaques de plâtre
                afin d’intégrer l’écran, créer des zones décoratives ou prévoir des
                passages de câbles adaptés au projet.
              </p>
            </article>

            <article className="bg-white p-8 sm:p-10">
              <h3 className="text-2xl font-semibold">
                Niches et rangements ouverts
              </h3>

              <p className="mt-4 leading-7 text-zinc-600">
                Des niches peuvent être intégrées dans un habillage ou une
                contre-cloison pour créer des espaces décoratifs ou fonctionnels
                adaptés aux dimensions de la pièce.
              </p>
            </article>

            <article className="bg-white p-8 sm:p-10">
              <h3 className="text-2xl font-semibold">
                Retombées et plafonds à plusieurs niveaux
              </h3>

              <p className="mt-4 leading-7 text-zinc-600">
                Le travail du plafond permet de créer des différences de niveau,
                des bandeaux ou des retombées afin de structurer visuellement une
                pièce ou préparer l’intégration d’un éclairage.
              </p>
            </article>

            <article className="bg-white p-8 sm:p-10">
              <h3 className="text-2xl font-semibold">
                Formes et volumes particuliers
              </h3>

              <p className="mt-4 leading-7 text-zinc-600">
                Selon la faisabilité du projet, le placo peut permettre de réaliser
                des lignes, cadres, arrondis ou volumes particuliers qui deviennent
                directement une partie de l’aménagement intérieur.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ÉCLAIRAGE */}
      <section className="bg-white px-6 py-20 text-zinc-950 sm:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
              Anticiper les détails
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Prévoir l’éclairage et les équipements avant de fermer l’ouvrage
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-zinc-600">
            <p>
              Une réalisation décorative peut nécessiter des réservations pour des
              rubans LED, spots, câbles de télévision, prises ou autres équipements.
              Ces éléments doivent être pensés avant la fermeture des volumes.
            </p>

            <p>
              L’objectif est d’éviter de créer un bel ouvrage puis de devoir le
              reprendre pour passer un câble ou déplacer un équipement. La
              coordination entre la forme du placo et les besoins techniques fait
              donc partie de la préparation du chantier.
            </p>

            <p>
              Pour un faux plafond plus classique ou une remise à niveau, consultez
              également la page{" "}
              <Link
                href="/faux-plafond-carpentras"
                className="font-semibold text-zinc-950 underline decoration-zinc-300 underline-offset-4 transition hover:decoration-zinc-950"
              >
                faux plafond à Carpentras
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* MÉTHODE */}
      <section className="bg-zinc-100 px-6 py-20 text-zinc-950 sm:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
              Réalisation
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Du projet aux volumes finis
            </h2>

            <p className="mt-5 text-lg leading-8 text-zinc-600">
              Une réalisation décorative demande de définir les proportions et les
              détails avant de commencer l’ossature.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {CHANTIER_STEPS.map((step) => (
              <article
                key={step.number}
                className="border-t border-zinc-300 pt-6"
              >
                <span className="text-sm font-semibold text-zinc-400">
                  {step.number}
                </span>

                <h3 className="mt-4 text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-3 max-w-xl leading-7 text-zinc-600">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTOS */}
      <section className="bg-zinc-950 px-6 py-20 text-white sm:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">
              Réalisations
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Exemples de placo décoratif et de volumes sur mesure
            </h2>

            <p className="mt-5 text-lg leading-8 text-zinc-400">
              Mur TV, plafond à plusieurs niveaux et préparation des finitions :
              quelques exemples de volumes réalisés en plaques de plâtre.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {REALISATIONS.map((photo) => (
              <figure key={photo.src}>
                <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>

                <figcaption className="mt-4 text-sm leading-6 text-zinc-400">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/realisations"
              className="inline-flex items-center gap-2 font-semibold underline decoration-zinc-600 underline-offset-4 transition hover:decoration-white"
            >
              Découvrir les autres réalisations
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FINITIONS */}
      <section className="bg-white px-6 py-20 text-zinc-950 sm:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
              Finitions
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Un ouvrage décoratif dépend aussi de la qualité des finitions
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-zinc-600">
            <p>
              Les angles, raccords, joints et surfaces visibles participent
              directement au résultat final. Une forme bien dessinée perd son intérêt
              si les transitions ou les finitions restent approximatives.
            </p>

            <p>
              Selon le périmètre du chantier, la prestation peut comprendre la
              préparation des supports et la finition peinture afin de conserver une
              continuité entre la création du volume et son rendu final.
            </p>

            <p>
              Lorsqu’un projet implique également la création d’une nouvelle paroi,
              consultez la page{" "}
              <Link
                href="/cloisons-doublages-carpentras"
                className="font-semibold text-zinc-950 underline decoration-zinc-300 underline-offset-4 transition hover:decoration-zinc-950"
              >
                cloisons et doublages à Carpentras
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* LOCAL */}
      <section className="bg-zinc-100 px-6 py-20 text-zinc-950 sm:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
              Secteur d’intervention
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Placo décoratif à Carpentras et dans le Vaucluse
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-zinc-600">
            <p>
              Le projet peut concerner une seule niche, un mur TV, un plafond
              décoratif ou un ensemble de volumes coordonnés dans une pièce.
            </p>

            <p>
              Chaque demande est étudiée selon les dimensions disponibles, la nature
              des supports, les équipements à intégrer et le niveau de finition
              recherché.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-6 py-20 text-zinc-950 sm:px-10 lg:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
            Questions fréquentes
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Questions sur le placo décoratif
          </h2>

          <div className="mt-10 divide-y divide-zinc-300 border-y border-zinc-300">
            <article className="py-7">
              <h3 className="text-lg font-semibold">
                Peut-on créer un meuble TV en placo&nbsp;?
              </h3>

              <p className="mt-3 leading-7 text-zinc-600">
                Oui, selon la configuration du mur et les dimensions disponibles.
                L’ouvrage peut intégrer différents volumes, niches ou réservations
                autour de la télévision.
              </p>
            </article>

            <article className="py-7">
              <h3 className="text-lg font-semibold">
                Peut-on intégrer des LED dans une réalisation en placo&nbsp;?
              </h3>

              <p className="mt-3 leading-7 text-zinc-600">
                Oui, si les réservations et alimentations nécessaires sont prévues
                avant la fermeture de l’ouvrage. La forme du placo et les besoins
                électriques doivent être coordonnés dès la préparation.
              </p>
            </article>

            <article className="py-7">
              <h3 className="text-lg font-semibold">
                Les niches peuvent-elles être réalisées sur mesure&nbsp;?
              </h3>

              <p className="mt-3 leading-7 text-zinc-600">
                Oui. Les dimensions peuvent être adaptées à l’espace disponible, aux
                objets à intégrer et aux proportions recherchées dans la pièce.
              </p>
            </article>

            <article className="py-7">
              <h3 className="text-lg font-semibold">
                Peut-on créer un plafond décoratif à plusieurs niveaux&nbsp;?
              </h3>

              <p className="mt-3 leading-7 text-zinc-600">
                Oui, lorsque la hauteur disponible et la configuration du plafond le
                permettent. Les différents niveaux doivent être définis en fonction
                du rendu recherché et des équipements éventuels à intégrer.
              </p>
            </article>

            <article className="py-7">
              <h3 className="text-lg font-semibold">
                Faites-vous aussi les joints et la peinture&nbsp;?
              </h3>

              <p className="mt-3 leading-7 text-zinc-600">
                Selon le chantier, la prestation peut comprendre la création de
                l’ouvrage, les joints, la préparation des supports et la finition
                peinture.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-zinc-950 px-6 py-20 text-white sm:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">
            Votre idée
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Un projet de placo décoratif à Carpentras&nbsp;?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
            Expliquez ce que vous souhaitez créer et, si possible, transmettez
            quelques photos de la pièce ou du mur concerné. Elles permettent déjà de
            mieux comprendre les volumes disponibles.
          </p>

          <div className="mt-8">
            <Link
              href="/#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-white px-6 py-3 font-semibold text-zinc-950 transition hover:bg-zinc-200"
            >
              Parler de mon projet
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

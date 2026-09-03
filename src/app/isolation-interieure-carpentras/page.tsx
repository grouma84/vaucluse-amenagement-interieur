import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Isolation intérieure à Carpentras",
  description:
    "Isolation intérieure à Carpentras : murs, doublages et plafonds pour améliorer le confort thermique et acoustique, été comme hiver, dans le Vaucluse.",
  alternates: {
    canonical: "/isolation-interieure-carpentras",
  },
  openGraph: {
    title: "Isolation intérieure à Carpentras",
    description:
      "Isolation intérieure à Carpentras : murs, doublages et plafonds pour améliorer le confort thermique et acoustique, été comme hiver, dans le Vaucluse.",
    url: "/isolation-interieure-carpentras",
    siteName: "VAUCLUSE AMÉNAGEMENT INTÉRIEUR",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/realisations/isolation-mur-ossature-metallique.jpg",
        alt: "Isolation intérieure d’un mur entre une ossature métallique",
      },
    ],
  },
}

const CHANTIER_STEPS = [
  {
    number: "01",
    title: "Observer la paroi et le problème de confort",
    text: "Mur froid, pièce difficile à rafraîchir, plafond sous toiture ou nuisance sonore : la solution dépend de la paroi, de son état et du confort recherché.",
  },
  {
    number: "02",
    title: "Vérifier l’existant avant de refermer",
    text: "Humidité, ventilation, état du support et contraintes techniques doivent être examinés avant de créer un doublage ou un plafond isolé.",
  },
  {
    number: "03",
    title: "Mettre en place l’isolation et l’ossature",
    text: "L’isolant et l’ossature sont mis en œuvre selon la configuration du chantier, l’épaisseur disponible et la paroi à traiter.",
  },
  {
    number: "04",
    title: "Fermer les parois et préparer les finitions",
    text: "Les plaques de plâtre sont posées puis les joints et surfaces sont préparés pour la finition prévue au chantier.",
  },
] as const

const REALISATIONS = [
  {
    src: "/images/realisations/isolation-mur-ossature-metallique.jpg",
    alt: "Isolation intérieure d’un mur entre montants métalliques en cours de réalisation",
    caption:
      "Isolation d’un mur en cours de pose entre une ossature métallique avant fermeture en plaques de plâtre.",
  },
  {
    src: "/images/realisations/pose-isolation-doublage-murs.jpg",
    alt: "Isolation intégrée dans un doublage de murs en cours de chantier",
    caption:
      "Isolation intégrée dans le doublage avant la fermeture complète des parois.",
  },
  {
    src: "/images/realisations/ossature-metallique-plafond-isolation.jpg",
    alt: "Isolation visible au-dessus d’une ossature métallique de plafond",
    caption:
      "Ossature de plafond avec isolation apparente avant la pose complète des plaques.",
  },
] as const

export default function IsolationInterieureCarpentrasPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-zinc-950 text-white">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="flex items-center px-6 py-20 sm:px-10 lg:px-14 lg:py-24">
            <div className="max-w-2xl">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">
                Isolation intérieure • Carpentras & Vaucluse
              </p>

              <h1 className="text-3xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                Isolation intérieure à Carpentras
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
                Isolation des murs, doublages et plafonds pour améliorer le
                confort thermique et acoustique d’un logement, en hiver comme
                pendant les périodes de forte chaleur.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/#contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-md bg-white px-6 py-3 font-semibold text-zinc-950 transition hover:bg-zinc-200"
                >
                  Parler de mon problème de confort
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
              src="/images/realisations/isolation-mur-ossature-metallique.jpg"
              alt="Isolation intérieure d’un mur entre une ossature métallique"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

            <p className="absolute bottom-5 left-5 right-5 text-sm text-white/80">
              Isolation intérieure d’un mur avant fermeture en plaques de plâtre
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white px-6 py-20 text-zinc-950 sm:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
              Confort thermique et acoustique
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Isoler une paroi pour améliorer le confort de la pièce
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-zinc-600">
            <p>
              L’isolation intérieure peut concerner un mur donnant sur
              l’extérieur, un doublage, un plafond ou une séparation intérieure.
              L’objectif dépend du chantier : limiter les échanges thermiques,
              améliorer le confort acoustique ou traiter plusieurs besoins à la
              fois.
            </p>

            <p>
              La solution ne se résume pas à ajouter un isolant. La nature du
              support, l’espace disponible, la ventilation, l’humidité éventuelle
              et la finition souhaitée doivent être pris en compte avant de
              refermer la paroi.
            </p>

            <p>
              VAUCLUSE AMÉNAGEMENT INTÉRIEUR intervient à Carpentras et dans le
              Vaucluse pour les travaux d’isolation intérieure associés aux
              doublages, plafonds et ouvrages en plaques de plâtre.
            </p>
          </div>
        </div>
      </section>

      {/* CONFORT ETE */}
      <section className="bg-amber-50 px-6 py-20 text-zinc-950 sm:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-800">
                Fortes chaleurs
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Confort d’été : mieux protéger l’intérieur pendant les fortes chaleurs
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-zinc-700">
              <p>
                Dans une habitation qui chauffe rapidement, l’isolation d’un mur
                ou d’un plafond peut contribuer à ralentir les échanges de chaleur
                à travers la paroi et à améliorer le confort intérieur.
              </p>

              <p>
                Elle ne constitue toutefois pas, à elle seule, une solution
                « anti-canicule ». Le confort d’été dépend aussi de l’exposition,
                de la toiture, des vitrages, des protections solaires, de la
                ventilation et de la manière dont le logement est utilisé pendant
                les heures les plus chaudes.
              </p>

              <p>
                C’est pourquoi le chantier doit être étudié selon la pièce et le
                bâtiment, plutôt que de promettre un résultat identique dans tous
                les logements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ZONES A ISOLER */}
      <section className="bg-zinc-100 px-6 py-20 text-zinc-950 sm:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
              Parois concernées
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Murs, doublages et plafonds : où intervenir&nbsp;?
            </h2>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-zinc-200 bg-zinc-200 md:grid-cols-3">
            <article className="bg-white p-8">
              <h3 className="text-xl font-semibold">
                Isolation intérieure des murs
              </h3>

              <p className="mt-4 leading-7 text-zinc-600">
                Un doublage isolé peut être réalisé devant un mur existant pour
                améliorer le confort de la pièce tout en recréant une paroi prête
                à recevoir les finitions.
              </p>
            </article>

            <article className="bg-white p-8">
              <h3 className="text-xl font-semibold">
                Isolation des plafonds
              </h3>

              <p className="mt-4 leading-7 text-zinc-600">
                Selon la configuration, un plafond suspendu peut permettre
                d’intégrer une isolation et de traiter une partie des échanges
                thermiques ou des nuisances sonores provenant du dessus.
              </p>
            </article>

            <article className="bg-white p-8">
              <h3 className="text-xl font-semibold">
                Isolation acoustique intérieure
              </h3>

              <p className="mt-4 leading-7 text-zinc-600">
                Certaines cloisons, contre-cloisons ou plafonds peuvent intégrer
                une isolation destinée à améliorer le confort acoustique entre
                pièces ou vis-à-vis d’une paroi existante.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* DIAGNOSTIC */}
      <section className="bg-white px-6 py-20 text-zinc-950 sm:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
              Avant de fermer la paroi
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Ne pas masquer un problème d’humidité ou de ventilation
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-zinc-600">
            <p>
              Si un mur présente des traces d’humidité, des infiltrations, des
              remontées ou une dégradation anormale, il faut d’abord identifier
              et traiter l’origine du problème.
            </p>

            <p>
              Créer un doublage isolé devant une paroi humide sans traiter la cause
              peut seulement cacher le problème et compliquer son évolution.
            </p>

            <p>
              De la même manière, une isolation ne doit pas être pensée sans tenir
              compte de la ventilation du logement et de la configuration réelle
              des pièces.
            </p>
          </div>
        </div>
      </section>

      {/* METHODE */}
      <section className="bg-zinc-100 px-6 py-20 text-zinc-950 sm:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
              Réalisation
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              De l’examen de la paroi aux finitions
            </h2>

            <p className="mt-5 text-lg leading-8 text-zinc-600">
              Une isolation intérieure durable commence par une bonne lecture de
              l’existant avant la pose de l’ossature et des plaques.
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
              Chantiers
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Exemples d’isolation intérieure en cours de réalisation
            </h2>

            <p className="mt-5 text-lg leading-8 text-zinc-400">
              Isolation des murs, doublages et plafonds avant la fermeture des
              ouvrages en plaques de plâtre.
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

      {/* LIENS SERVICES */}
      <section className="bg-white px-6 py-20 text-zinc-950 sm:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
              Travaux associés
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Isolation, doublage et plafond sont souvent liés
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-zinc-600">
            <p>
              L’isolation d’un mur est souvent intégrée dans un doublage en plaques
              de plâtre. Pour comprendre la différence entre une cloison et un
              doublage, consultez la page{" "}
              <Link
                href="/cloisons-doublages-carpentras"
                className="font-semibold text-zinc-950 underline decoration-zinc-300 underline-offset-4 transition hover:decoration-zinc-950"
              >
                cloisons et doublages à Carpentras
              </Link>
              .
            </p>

            <p>
              Lorsque le besoin concerne principalement le plafond, la page{" "}
              <Link
                href="/faux-plafond-carpentras"
                className="font-semibold text-zinc-950 underline decoration-zinc-300 underline-offset-4 transition hover:decoration-zinc-950"
              >
                faux plafond à Carpentras
              </Link>{" "}
              présente les possibilités de création, de reprise et d’intégration
              technique.
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
              Isolation intérieure à Carpentras et dans le Vaucluse
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-zinc-600">
            <p>
              Le chantier peut concerner une pièce difficile à chauffer ou à
              rafraîchir, un mur extérieur, un plafond sous toiture ou un besoin
              d’amélioration acoustique.
            </p>

            <p>
              Chaque projet est étudié selon la paroi, l’espace disponible, le
              problème de confort rencontré et les finitions prévues.
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
            Questions sur l’isolation intérieure
          </h2>

          <div className="mt-10 divide-y divide-zinc-300 border-y border-zinc-300">
            <article className="py-7">
              <h3 className="text-lg font-semibold">
                L’isolation intérieure aide-t-elle pendant les fortes chaleurs&nbsp;?
              </h3>

              <p className="mt-3 leading-7 text-zinc-600">
                Elle peut contribuer à réduire les échanges de chaleur à travers
                certaines parois et améliorer le confort. Le résultat dépend
                toutefois aussi de la toiture, des fenêtres, de l’exposition, des
                protections solaires et de la ventilation du logement.
              </p>
            </article>

            <article className="py-7">
              <h3 className="text-lg font-semibold">
                Peut-on isoler un mur par l’intérieur&nbsp;?
              </h3>

              <p className="mt-3 leading-7 text-zinc-600">
                Oui, selon l’état du mur et la configuration de la pièce. Une
                isolation peut notamment être intégrée derrière un doublage en
                plaques de plâtre.
              </p>
            </article>

            <article className="py-7">
              <h3 className="text-lg font-semibold">
                Peut-on isoler un plafond&nbsp;?
              </h3>

              <p className="mt-3 leading-7 text-zinc-600">
                Oui, lorsque la configuration le permet. Un plafond suspendu peut
                recevoir une isolation avant la pose des plaques de plâtre.
              </p>
            </article>

            <article className="py-7">
              <h3 className="text-lg font-semibold">
                Peut-on isoler un mur qui présente de l’humidité&nbsp;?
              </h3>

              <p className="mt-3 leading-7 text-zinc-600">
                Il faut d’abord identifier et traiter l’origine de l’humidité.
                Refermer une paroi sans traiter la cause peut masquer le problème
                au lieu de le résoudre.
              </p>
            </article>

            <article className="py-7">
              <h3 className="text-lg font-semibold">
                L’isolation peut-elle aussi améliorer le confort acoustique&nbsp;?
              </h3>

              <p className="mt-3 leading-7 text-zinc-600">
                Oui, selon la paroi et le système mis en œuvre. Une cloison, un
                doublage ou un plafond peuvent intégrer une isolation adaptée à un
                objectif acoustique.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-zinc-950 px-6 py-20 text-white sm:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">
            Votre confort
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Une pièce trop chaude, trop froide ou difficile à isoler à Carpentras&nbsp;?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
            Expliquez le problème rencontré et, si possible, transmettez quelques
            photos de la paroi ou du plafond concerné. Elles permettent déjà de
            mieux comprendre la configuration avant l’étude du chantier.
          </p>

          <div className="mt-8">
            <Link
              href="/#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-white px-6 py-3 font-semibold text-zinc-950 transition hover:bg-zinc-200"
            >
              Parler de mon problème de confort
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

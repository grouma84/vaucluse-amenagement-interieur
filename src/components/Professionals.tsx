import Link from "next/link"

const SERVICES = [
  "Cloisons et contre-cloisons",
  "Doublages",
  "Faux plafonds et plafonds suspendus",
  "Isolation intérieure",
  "Habillages et coffrages",
  "Traitement des joints et préparation des supports",
  "Peinture intérieure",
  "Ouvrages spécifiques en plaques de plâtre",
] as const

export function Professionals() {
  return (
    <section
      id="professionnels"
      className="bg-zinc-900 px-6 py-20 text-white sm:px-10 lg:py-28"
      aria-labelledby="professionals-title"
    >
      <div className="mx-auto max-w-7xl">

        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">
            Professionnels & collectivités
          </p>

          <h2
            id="professionals-title"
            className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Lot Plâtrerie • Isolation • Peinture
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            Intervention en neuf et rénovation pour les donneurs d’ordre
            professionnels et publics dans le Vaucluse.
          </p>

          <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
            Le périmètre peut comprendre les ouvrages de plâtrerie,
            l’isolation intérieure, le traitement des joints, la préparation
            des supports et la peinture selon le chantier confié.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">

          <article className="border border-zinc-700 p-7 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-zinc-500">
              Entreprises & maîtrise d’œuvre
            </p>

            <h3 className="mt-4 text-2xl font-semibold tracking-tight">
              Réalisation de lots de plâtrerie et finitions
            </h3>

            <p className="mt-4 leading-7 text-zinc-400">
              Architectes, maîtres d’œuvre, constructeurs, entreprises générales,
              promoteurs et SCI peuvent transmettre leurs plans, métrés ou éléments
              de consultation pour étude du lot.
            </p>
          </article>

          <article className="border border-zinc-700 p-7 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-zinc-500">
              Collectivités & acteurs publics
            </p>

            <h3 className="mt-4 text-2xl font-semibold tracking-tight">
              Travaux sur bâtiments et équipements publics
            </h3>

            <p className="mt-4 leading-7 text-zinc-400">
              Communes, intercommunalités, département, établissements publics
              et gestionnaires de patrimoine peuvent consulter GROUMA PLÂTRERIE
              pour des travaux de plâtrerie, isolation, plafonds et peinture.
            </p>
          </article>

        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr]">

          <div className="border-t border-zinc-700">
            {SERVICES.map((item) => (
              <div
                key={item}
                className="border-b border-zinc-700 py-4 text-zinc-300"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="flex items-start lg:justify-end">
            <div className="max-w-md">

              <p className="leading-7 text-zinc-400">
                Chaque demande est étudiée selon le périmètre des travaux,
                les documents disponibles, les contraintes du chantier
                et le calendrier prévisionnel.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col">

                <Link
                  href="/#contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-md bg-white px-6 py-3 font-semibold text-zinc-950 transition hover:bg-zinc-200"
                >
                  Transmettre une consultation
                </Link>

                <a
                  href="tel:+33766044260"
                  className="inline-flex min-h-12 items-center justify-center rounded-md border border-zinc-700 px-6 py-3 font-semibold transition hover:border-zinc-500"
                >
                  Échanger sur un chantier
                </a>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

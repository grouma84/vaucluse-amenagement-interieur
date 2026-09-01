export function About() {
  return (
    <section
      id="a-propos"
      className="bg-white px-6 py-20 text-zinc-950 sm:px-10 lg:py-28"
      aria-labelledby="about-title"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

        <div className="flex min-h-[320px] flex-col justify-between bg-zinc-950 p-8 text-white sm:p-10">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">
              VAUCLUSE AMÉNAGEMENT INTÉRIEUR
            </p>

            <p className="mt-6 text-3xl font-semibold tracking-tight">
              Artisan plaquiste
            </p>

            <p className="mt-2 text-zinc-400">
              Plus de 25 ans de métier
            </p>
          </div>

          <div className="border-t border-zinc-800 pt-6 text-sm leading-6 text-zinc-400">
            Carpentras • Vaucluse
            <br />
            Neuf • Rénovation
          </div>

        </div>

        <div className="flex items-center">
          <div className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
              L’expérience derrière chaque chantier
            </p>

            <h2
              id="about-title"
              className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
            >
              Un interlocuteur unique, du projet aux finitions.
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-600">
              VAUCLUSE AMÉNAGEMENT INTÉRIEUR s’appuie sur plus de 25 ans
              d’expérience en plâtrerie. Chaque chantier est étudié selon l’existant,
              les contraintes du bâtiment et le résultat recherché.
            </p>

            <p className="mt-5 text-lg leading-8 text-zinc-600">
              Vous échangez directement avec la personne qui étudie votre projet,
              organise l’intervention et réalise les travaux.
            </p>

            <p className="mt-5 leading-7 text-zinc-500">
              L’objectif est simple : définir clairement la solution avant de commencer
              et réaliser un travail adapté au chantier, sans proposer plus que
              nécessaire.
            </p>

          </div>
        </div>

      </div>
    </section>
  )
}

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
              Jaoid Grouma
            </p>

            <p className="mt-2 text-zinc-400">
              Plaquiste
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
              Qui est derrière l’entreprise ?
            </p>

            <h2
              id="about-title"
              className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
            >
              Un interlocuteur qui connaît le chantier.
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-600">
              Je suis Jaoid Grouma, plaquiste de métier depuis plus de 25 ans.
              J’interviens sur des travaux de plâtrerie, isolation et transformation
              intérieure, en neuf comme en rénovation.
            </p>

            <p className="mt-5 text-lg leading-8 text-zinc-600">
              Vous échangez directement avec la personne qui étudie votre projet
              et intervient sur le chantier.
            </p>

            <p className="mt-5 leading-7 text-zinc-500">
              Mon objectif n’est pas de vous vendre une solution avant d’avoir vu
              le problème. Il faut d’abord comprendre l’espace, le support et le
              résultat recherché.
            </p>

          </div>
        </div>

      </div>
    </section>
  )
}

const STEPS = [
  {
    number: "01",
    title: "Comprendre le projet",
    text: "La première étape consiste à regarder l’espace, le support et ce que vous souhaitez réellement obtenir.",
  },
  {
    number: "02",
    title: "Définir les travaux",
    text: "Les ouvrages prévus, les principales étapes et le périmètre de l’intervention sont définis avant le démarrage.",
  },
  {
    number: "03",
    title: "Réaliser le chantier",
    text: "Cloisons, plafonds, isolation, ouvrages spécifiques ou finitions sont réalisés selon ce qui a été convenu.",
  },
  {
    number: "04",
    title: "Contrôler les finitions",
    text: "Les ouvrages réalisés sont contrôlés avant la fin de l’intervention et les éventuels points importants sont repris.",
  },
] as const

export function Method() {
  return (
    <section
      id="methode"
      className="bg-stone-100 px-6 py-20 text-zinc-950 sm:px-10 lg:py-28"
      aria-labelledby="method-title"
    >
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
              Le chantier
            </p>

            <h2
              id="method-title"
              className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
            >
              Un chantier de plâtrerie clair, de l’étude aux finitions
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
              Un chantier ne se résume pas à poser des plaques.
              Il faut comprendre le besoin, choisir la bonne solution
              et savoir précisément ce qui est prévu.
            </p>
          </div>

          <div className="border-t border-zinc-300">

            {STEPS.map((step) => (
              <article
                key={step.number}
                className="grid gap-4 border-b border-zinc-300 py-7 sm:grid-cols-[70px_1fr]"
              >
                <span className="text-sm font-semibold text-zinc-400">
                  {step.number}
                </span>

                <div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    {step.title}
                  </h3>

                  <p className="mt-2 max-w-xl leading-7 text-zinc-600">
                    {step.text}
                  </p>
                </div>
              </article>
            ))}

          </div>

        </div>
      </div>
    </section>
  )
}

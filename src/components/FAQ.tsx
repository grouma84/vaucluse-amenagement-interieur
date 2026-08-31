const FAQ_ITEMS = [
  {
    question: "Travaillez-vous dans le neuf et la rénovation ?",
    answer:
      "Oui. VAUCLUSE AMÉNAGEMENT INTÉRIEUR intervient aussi bien sur des constructions neuves que sur des projets de rénovation intérieure : cloisons, doublages, plafonds, isolation, joints et finitions selon le chantier.",
  },
  {
    question: "Pouvez-vous intervenir uniquement pour refaire un plafond ?",
    answer:
      "Oui. Un chantier peut concerner uniquement un plafond, par exemple pour reprendre un plafond ancien, créer un faux plafond, intégrer une isolation ou préparer de nouvelles finitions.",
  },
  {
    question: "Peut-on poser du placo devant un mur humide ?",
    answer:
      "Il faut d’abord identifier l’origine de l’humidité. Recouvrir directement un mur humide peut masquer le problème au lieu de le résoudre. La solution de plâtrerie doit être choisie après avoir compris l’état du support.",
  },
  {
    question: "Faites-vous aussi les joints et la peinture ?",
    answer:
      "Oui, selon le projet. La prestation peut comprendre la pose des plaques, le traitement des joints, la préparation des supports et la finition peinture afin de conserver une continuité sur les murs et plafonds.",
  },
  {
    question: "Dans quel secteur intervenez-vous ?",
    answer:
      "L’activité est basée à Carpentras et les interventions sont étudiées dans le Vaucluse selon la nature et l’importance du chantier.",
  },
] as const

export function FAQ() {
  return (
    <section
      id="faq"
      className="bg-stone-100 px-6 py-20 text-zinc-950 sm:px-10 lg:py-28"
      aria-labelledby="faq-title"
    >
      <div className="mx-auto max-w-5xl">

        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
            Questions fréquentes
          </p>

          <h2
            id="faq-title"
            className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Questions fréquentes sur les travaux de plâtrerie
          </h2>
        </div>

        <div className="mt-12 border-t border-zinc-300">

          {FAQ_ITEMS.map((item) => (
            <details
              key={item.question}
              className="group border-b border-zinc-300"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-semibold">
                {item.question}

                <span
                  className="text-2xl font-light text-zinc-400 transition group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>

              <p className="max-w-3xl pb-7 pr-8 leading-7 text-zinc-600">
                {item.answer}
              </p>
            </details>
          ))}

        </div>

      </div>
    </section>
  )
}

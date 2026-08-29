export const HOME_CONTENT = {
  hero: {
    eyebrow: "GROUMA PLÂTRERIE",
    title: "Plâtrerie, isolation et transformation intérieure",
    description:
      "Création de pièces, cloisons, plafonds, isolation, placo décoratif et finitions à Carpentras et dans le Vaucluse.",
    supportingText:
      "Vous avez un projet en neuf ou en rénovation ? Parlons d’abord de ce que vous voulez obtenir, puis de la solution la plus adaptée.",
    primaryCta: { label: "Parler de mon projet", href: "/contact" },
    secondaryCta: { label: "Je suis professionnel", href: "/#professionnels" },
    audiences: "Particuliers • Architectes • Maîtres d’œuvre • Entreprises • SCI",
  },
  services: {
    title: "Que souhaitez-vous faire ?",
    intro:
      "Chaque chantier part d’un besoin concret. Voici les demandes que GROUMA PLÂTRERIE prend en charge le plus souvent.",
    items: [
      {
        id: "creer-piece",
        title: "Créer une nouvelle pièce",
        subtitle: "Chambre, bureau, dressing ou séparation intérieure.",
        description:
          "Vous avez un grand volume à diviser ou besoin d’une pièce supplémentaire ? Création de cloisons, isolation si nécessaire, réservations, joints et finitions selon le projet.",
        cta: "Créer un nouvel espace",
      },
      {
        id: "transformer-espace",
        title: "Transformer un espace existant",
        subtitle: "Donner une nouvelle fonction à une pièce peu utilisée.",
        description:
          "Garage, grande pièce, remise ou espace mal organisé : l’objectif est de récupérer des mètres carrés utiles sans forcément agrandir.",
        cta: "Étudier la transformation",
      },
      {
        id: "murs-plafonds",
        title: "Refaire murs et plafonds",
        subtitle: "Reprendre un support abîmé, irrégulier ou ancien.",
        description:
          "Mur difficile à récupérer, plafond fissuré, plafond à remettre de niveau ou habillage à refaire. La solution est choisie selon l’état réel du support : réparation, doublage, faux plafond, reprise des joints ou préparation avant peinture.",
        cta: "Montrer le problème",
      },
      {
        id: "isolation",
        title: "Améliorer l’isolation intérieure",
        subtitle: "Plus de confort thermique ou acoustique.",
        description:
          "Mur froid, pièce bruyante, plafond à isoler ou séparation entre deux espaces. Mise en œuvre de solutions d’isolation intérieure adaptées à la paroi et au projet, sans masquer un problème qui doit être traité en amont.",
        cta: "Parler de mon problème de confort",
      },
      {
        id: "placo-decoratif",
        title: "Créer en placo décoratif",
        subtitle: "Niches, volumes, plafonds et formes sur mesure.",
        description:
          "Le placo ne sert pas seulement à fermer un mur. Il peut aussi permettre de créer des niches, meubles TV intégrés, retombées, gorges lumineuses, plafonds à plusieurs niveaux ou formes particulières.",
        cta: "Voir ce qu’il est possible de créer",
      },
      {
        id: "finitions",
        title: "Aller jusqu’aux finitions",
        subtitle: "Placo, joints et peinture dans la continuité du chantier.",
        description:
          "Lorsque le projet le permet, la prestation peut aller de la création de l’ouvrage jusqu’à la préparation et à la finition peinture. L’objectif : éviter de multiplier les intervenants pour les murs et plafonds.",
        cta: "Demander une finition complète",
      },
    ],
  },
} as const

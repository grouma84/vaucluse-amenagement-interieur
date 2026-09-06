# README — /actu

## 1. Objet

La route `/actu` est le média de marque de **VAUCLUSE AMÉNAGEMENT INTÉRIEUR**.

Elle ne doit pas prendre la forme d’un blog d’entreprise classique.  
Le modèle visé est un **flux éditorial social-first** : rapide à parcourir, très visuel, composé de formats différents (chantier, conseil, vidéo verticale, avant/après, question client, idée déco), tout en conservant une structure technique adaptée au référencement naturel.

Le site joue le rôle de **source centrale et durable**.  
Les réseaux sociaux servent de canaux de distribution.

---

## 2. Objectifs

La page `/actu` doit :

1. Montrer le travail réel sur le terrain.
2. Répondre aux questions concrètes des particuliers.
3. Donner des idées d’aménagement intérieur.
4. Renforcer la crédibilité de l’entreprise.
5. Créer des contenus indexables par Google et les moteurs IA.
6. Envoyer naturellement les lecteurs vers les pages services pertinentes.
7. Transformer une partie de l’audience en demandes de projet.

La priorité reste l’utilité et la preuve.  
La fréquence de publication ne doit jamais conduire à produire du contenu artificiel ou répétitif.

---

## 3. Principes éditoriaux

Chaque sujet doit partir d’au moins un de ces éléments :

- un chantier réel ;
- une question réellement utile à un client ;
- une difficulté rencontrée dans un logement ;
- une transformation avant/après ;
- une idée d’aménagement ;
- une explication technique simple ;
- une erreur fréquente à éviter.

Le contenu doit parler d’abord du **besoin du client**, puis de la technique.

Exemple :

Mauvais angle :

> Les avantages du doublage en plaques de plâtre.

Angle recherché :

> Votre mur est froid : faut-il forcément perdre beaucoup de place pour l’isoler ?

---

## 4. Types de contenus

Les formats initiaux sont limités à :

- `CHANTIER`
- `CONSEIL`
- `REEL`
- `QUESTION CLIENT`
- `AVANT / APRÈS`
- `IDÉE`
- `ISOLATION`

Les catégories doivent rester peu nombreuses et compréhensibles immédiatement.

---

## 5. Architecture de la route

### Route principale

```text
/actu
```

### Pages éditoriales individuelles

Chaque contenu important doit pouvoir disposer d’une URL propre :

```text
/actu/isolation-plafond-poutres-cairanne
/actu/faux-plafond-piece-carpentras
/actu/mur-tv-placo-eclairage-led
```

La page `/actu` est un **feed**.  
Les pages `/actu/[slug]` constituent la mémoire éditoriale et les pages indexables durables.

---

## 6. Architecture visuelle validée — Desktop

Largeur de référence : **1440 px**.

Conteneur principal :

```text
max-width ≈ 1280 px
centré
marges latérales ≈ 32 à 40 px
```

Ordre exact :

```text
HEADER
↓
INTRO ACTU
↓
FILTRES
↓
À LA UNE
↓
LE FIL
↓
EN BREF
↓
SUITE DU FIL
↓
CTA FINAL
↓
FOOTER
```

### 6.1 Intro

Contenu :

```text
ACTU

Le terrain, les idées, les chantiers.

Réalisations, conseils pratiques, questions clients
et idées d’aménagement intérieur dans le Vaucluse.
```

Contraintes :

- pas de grand hero commercial ;
- hauteur raisonnable ;
- H1 très lisible ;
- arrivée rapide sur les contenus.

### 6.2 Filtres

Ordre initial :

```text
Tous
Chantiers
Conseils
Avant / Après
Déco
Isolation
```

Aspect :

- onglets sobres ;
- faible hauteur ;
- contour fin ;
- onglet actif noir ;
- scroll horizontal sur mobile.

### 6.3 À la une

Desktop :

```text
2/3 largeur : sujet principal
1/3 largeur : 2 sujets secondaires empilés
```

Sujet principal :

- grande image ;
- catégorie ;
- lieu si pertinent ;
- titre fort ;
- phrase courte ;
- CTA.

Sujets secondaires :

- un conseil ;
- une idée déco ou un avant/après.

### 6.4 Le fil

Le fil ne doit pas utiliser une grille uniforme de blog.

Formats mélangés :

```text
REEL 9:16
QUESTION CLIENT
AVANT / APRÈS
CHANTIER LARGE
IDÉE
CONSEIL
```

La différence de formats fait partie de l’identité éditoriale.

### 6.5 En bref

Bloc de questions / réponses rapides.

Exemples :

```text
Pourquoi certaines fissures réapparaissent-elles ?
Quelle épaisseur prend un doublage intérieur ?
Peut-on intégrer des spots dans un faux plafond ?
Peut-on réaliser des niches arrondies en placo ?
```

Le bloc doit être très rapide à parcourir.

### 6.6 CTA final

Texte de principe :

```text
UN PROJET À NOUS MONTRER ?

Une photo peut suffire pour commencer.

Ajoutez quelques photos de votre pièce et parlons de votre projet.
```

CTA :

```text
Envoyer mes photos
```

---

## 7. Architecture visuelle validée — Mobile

Le mobile est prioritaire.

Largeur de référence : **390 px**.

Règles :

- contenu à environ 20–24 px des bords ;
- flux vertical ;
- filtres en scroll horizontal ;
- grandes images pleine largeur du conteneur ;
- cartes textuelles courtes ;
- Reel vertical centré ;
- titres de cartes courts ;
- descriptions limitées à quelques lignes ;
- CTA facilement accessible.

Ordre mobile :

```text
HEADER
↓
INTRO
↓
FILTRES HORIZONTAUX
↓
SUJET À LA UNE
↓
CONSEIL
↓
REEL
↓
QUESTION CLIENT
↓
AVANT / APRÈS
↓
CHANTIER
↓
EN BREF
↓
SUITE DU FIL
↓
CTA
↓
FOOTER
```

---

## 8. Dimensions de référence

Desktop :

- Intro : environ 220–260 px de hauteur maximum.
- H1 : environ 52–56 px.
- Filtres : environ 42–46 px.
- Bloc À la une : environ 500–540 px de hauteur visuelle.
- Image sujet principal : ratio proche de 16:9.
- Reel : ratio strict 9:16.
- Reel desktop : environ 300–340 px de large.
- Espacement entre grandes sections : environ 88–112 px.
- Gap entre cartes : environ 20–24 px.

Mobile :

- H1 : environ 38–44 px.
- Reel : environ 260–300 px de large.
- Images : largeur du conteneur.
- Espacement vertical entre contenus : environ 28–40 px.

Ces valeurs sont des références, pas des contraintes absolues.

---

## 9. Identité visuelle

La page doit rester cohérente avec le site existant.

Palette :

- noir profond ;
- blanc / blanc cassé ;
- gris très clair ;
- ambre pour les accents.

Principes :

- grandes images ;
- beaucoup d’espace ;
- bordures fines ;
- peu d’ombres ;
- pas de couleurs différentes pour chaque catégorie ;
- petites capitales ambre pour identifier les formats ;
- aucune esthétique de blog WordPress classique.

Le rendu recherché est :

> média local contemporain + chantier réel + architecture intérieure.

---

## 10. Premiers contenus à afficher

Ordre de départ recommandé :

### 1 — À la une / Chantier
**Isolation et plafond entre poutres à Cairanne**

### 2 — Conseil
**Peut-on isoler un mur sans perdre trop de place ?**

### 3 — Idée déco
**Pourquoi prévoir LED, câbles et prises avant de fermer un mur TV en placo ?**

### 4 — Reel
**De l’existant au résultat — plafond décoratif**

Vidéo verticale 9:16.

### 5 — Question client
**Je veux créer une chambre dans une grande pièce : quelle solution ?**

### 6 — Avant / Après
Transformation d’un plafond ou d’un mur TV.

### 7 — Chantier local
Réalisation à Carpentras, Monteux ou autre commune réellement documentée.

### 8 — Idée déco
**3 façons de créer un mur TV en placo**

Les lieux ne doivent être indiqués que lorsqu’ils sont réellement connus.

---

## 11. SEO

La conception visuelle social-first ne doit pas réduire la qualité SEO.

### `/actu`

Doit posséder :

- title ;
- meta description ;
- canonical ;
- Open Graph ;
- H1 unique ;
- liens internes.

### Contenus individuels

Chaque sujet important doit disposer :

- d’une URL propre ;
- d’un titre spécifique ;
- d’un H1 unique ;
- d’une meta description utile ;
- d’un canonical ;
- d’un Open Graph propre ;
- d’images avec `alt` descriptifs ;
- de liens vers les services concernés.

Ne pas créer de pages uniquement pour multiplier artificiellement les variantes géographiques.

---

## 12. Données éditoriales

La page ne doit pas être construite avec tous les articles écrits directement dans `page.tsx`.

Prévoir une source de données dédiée :

```text
src/content/actu.ts
```

Chaque contenu pourra suivre une structure proche de :

```ts
{
  slug: "isolation-plafond-poutres-cairanne",
  type: "chantier",
  title: "Isolation et plafond entre poutres à Cairanne",
  excerpt: "...",
  image: "/images/...",
  video: null,
  location: "Cairanne",
  publishedAt: "2026-09-05",
  featured: true,
  serviceHref: "/isolation-interieure-carpentras"
}
```

Aucune information fictive ne doit être introduite pour remplir les cartes.

---

## 13. Architecture technique prévue

Structure cible :

```text
src/
├── app/
│   ├── actu/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│
├── components/
│   ├── actu/
│   │   ├── ActuHero.tsx
│   │   ├── ActuFilters.tsx
│   │   ├── FeaturedActu.tsx
│   │   ├── ActuFeed.tsx
│   │   ├── ActuCard.tsx
│   │   ├── ReelCard.tsx
│   │   ├── QuestionCard.tsx
│   │   ├── BeforeAfterCard.tsx
│   │   ├── EnBref.tsx
│   │   └── ActuCTA.tsx
│
└── content/
    └── actu.ts
```

Les composants existants `Header` et `Footer` doivent être réutilisés via l’architecture actuelle du site, sans duplication inutile.

---

## 14. Intégration au site existant

Le projet actuel utilise :

```text
src/app
src/components
src/config
src/content
```

La nouvelle fonctionnalité doit respecter cette organisation.

Éléments existants à préserver :

```text
src/app/layout.tsx
src/components/Header.tsx
src/components/Footer.tsx
src/config/site.ts
src/app/sitemap.ts
```

À terme, `/actu` devra être ajouté :

- à la navigation si validé ;
- au sitemap ;
- au maillage interne du site.

Ces changements ne doivent être effectués qu’après validation de la première version de `/actu`.

---

## 15. Performance

Priorités :

- `next/image` pour les images ;
- tailles d’images adaptées ;
- vidéos raisonnablement compressées ;
- pas d’autoplay sonore ;
- `muted`, `playsInline` pour les vidéos automatiques ;
- limiter les scripts client ;
- privilégier les Server Components lorsque l’interactivité n’est pas nécessaire.

Les filtres peuvent nécessiter un composant client, mais le reste de la page doit rester aussi simple que possible.

---

## 16. Règles de construction

1. Ne pas modifier les pages services pendant la création de `/actu`.
2. Construire `/actu` d’abord avec quelques contenus réels.
3. Ne pas publier de contenu fictif présenté comme un chantier réel.
4. Ne pas créer immédiatement `/actu/[slug]` tant que la page feed n’est pas validée visuellement.
5. Vérifier desktop et mobile avant chaque étape suivante.
6. Exécuter `git diff --check` et `npm run build` avant chaque commit.
7. Ne pas publier sur `main` avant validation visuelle locale.

---

## 17. Ordre d’implémentation

### Phase A — socle
- créer `src/content/actu.ts`;
- créer `src/app/actu/page.tsx`;
- afficher l’intro, les filtres et le bloc À la une.

### Phase B — feed
- créer les cartes ;
- Reel ;
- Question client ;
- Avant / Après ;
- chantier ;
- idée.

### Phase C — fin de page
- En bref ;
- suite du fil ;
- CTA final.

### Phase D — responsive
- contrôle desktop ;
- contrôle tablette ;
- contrôle mobile.

### Phase E — SEO / intégration
- metadata `/actu`;
- sitemap ;
- navigation ;
- liens internes.

### Phase F — articles individuels
- créer `/actu/[slug]`;
- modèle éditorial ;
- données structurées si pertinentes ;
- maillage vers les pages services.

---

## 18. Critère de validation

La page est validée si :

- elle ne ressemble pas à un blog traditionnel ;
- elle est immédiatement compréhensible ;
- le premier écran donne envie de parcourir les contenus ;
- les formats sont visuellement différenciés ;
- le mobile ressemble à un feed naturel ;
- les contenus réels dominent la page ;
- aucun élément n’est inventé ;
- le lecteur peut atteindre facilement une page service ou le contact ;
- l’ajout d’un nouveau contenu peut se faire principalement depuis `src/content/actu.ts`.

---

## 19. Principe directeur

> **Le chantier devient le contenu. Le site devient la mémoire. Les réseaux deviennent la distribution.**

export type ProductProject = {
  slug: "la-parallaxe" | "probalab" | "ferdinand" | "ro-nutritionniste" | "odysio";
  name: string;
  code: string;
  status: string;
  statusTone: "cyan" | "amber" | "sage";
  visual: "phone" | "browser" | "identity";
  statement: string;
  category: string;
  summary: string;
  linkLabel?: string;
  description: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  icon: string;
  imageAlt: string;
  href?: string;
  waitLabel?: string;
  platforms: string[];
  technologies: string[];
  capabilities: string[];
  role: string;
  demonstrates: string;
};

export const projects: ProductProject[] = [
  {
    slug: "la-parallaxe",
    name: "La Parallaxe",
    code: "PROJET 01 / LA PARALLAXE",
    status: "Site en ligne",
    statusTone: "sage",
    visual: "browser",
    statement: "Une expérience de vulgarisation scientifique où l’émerveillement ouvre la voie à la compréhension.",
    category: "Culture scientifique",
    summary: "Un site pour explorer des sujets scientifiques par couches, distinguer les faits établis des hypothèses et garder les sources à portée de regard.",
    linkLabel: "Visiter le site",
    description:
      "La Parallaxe propose de découvrir la science autrement : un premier regard pour s’étonner, un second pour comprendre. Chaque exploration relie une scène visuelle, des niveaux de profondeur, des interactions et des sources, sans transformer une hypothèse en certitude.",
    image: "/projects/la-parallaxe-cosmos.webp",
    imageWidth: 1672,
    imageHeight: 941,
    icon: "/projects/la-parallaxe-icon.png",
    imageAlt: "Scène cosmique de La Parallaxe autour d’un trou noir",
    href: "https://laparallaxe.fr",
    platforms: ["Web", "Site publié"],
    technologies: ["HTML", "CSS", "JavaScript", "Design de marque"],
    capabilities: ["Explications par couches", "Interactions", "Sources"],
    role: "Identité, conception et développement d’une expérience éditoriale interactive",
    demonstrates: "Rendre un sujet complexe accessible sans effacer ses nuances, ses limites ni les sources qui permettent de le vérifier.",
  },
  {
    slug: "probalab",
    name: "ProbaLab",
    code: "PROJET 02 / PROBALAB",
    status: "Développement actif",
    statusTone: "cyan",
    visual: "phone",
    statement: "Une idée imaginée avec un ami, devenue un écosystème web et mobile.",
    category: "Data & décisions",
    summary: "Une idée pensée avec un ami pour mieux comprendre les paris sportifs, suivre ses décisions et en tirer des leçons. Un écosystème web et mobile qui assume aussi les limites de ses données.",
    linkLabel: "Visiter le site",
    description:
      "ProbaLab est né d’une idée pensée avec un ami : rendre les décisions liées aux paris sportifs plus lisibles et responsables. Le projet réunit lecture du marché, analyse factuelle, suivi de bankroll, journal et apprentissage — avec une règle importante : les données doivent aussi savoir dire quand elles ne savent pas.",
    image: "/projects/probalab-comparaison.webp",
    imageWidth: 390,
    imageHeight: 844,
    icon: "/projects/probalab-icon.png",
    imageAlt: "Interface mobile du site ProbaLab : comparaison d’une cote avec le consensus du marché, sur un exemple pédagogique",
    href: "https://www.probalab.net",
    platforms: ["Web", "iOS", "Android"],
    technologies: ["Next.js", "React Native", "Python", "PostgreSQL", "Supabase"],
    capabilities: ["Data pipeline", "Analyse", "Abonnements", "Notifications", "IA visuelle"],
    role: "Conception et développement de l’écosystème web et mobile",
    demonstrates: "Relier des données complexes, rendre l’analyse lisible et expliciter les limites de l’information.",
  },
  {
    slug: "ferdinand",
    name: "Ferdinand",
    code: "PROJET 03 / FERDINAND",
    status: "Produit en évolution",
    statusTone: "amber",
    visual: "phone",
    statement: "Mon idée d’un assistant personnel discret qui n’oublie jamais l’essentiel.",
    category: "Assistant du quotidien",
    summary: "Véhicules, contrats, entretien : rassembler les échéances du quotidien dans un assistant calme, pour ne plus avoir à tout garder en tête.",
    waitLabel: "Application en développement",
    description:
      "Ferdinand est né de toutes ces échéances du quotidien que l’on note quelque part avant de les oublier : véhicules, appareils, contrats ou entretien. J’explore avec lui l’idée d’un majordome numérique calme, fiable et réellement utile.",
    image: "/projects/ferdinand-app.jpg",
    imageWidth: 1320,
    imageHeight: 2868,
    icon: "/projects/ferdinand-icon.png",
    imageAlt: "Tableau de bord de l’application Ferdinand",
    platforms: ["iOS", "Android", "Web"],
    technologies: ["Expo", "React Native", "TypeScript", "Supabase", "Push"],
    capabilities: ["Échéances", "Récurrence", "Notifications", "Mode sombre", "Accessibilité"],
    role: "Conception et développement d’un assistant du quotidien",
    demonstrates: "Transformer un besoin récurrent en parcours simple, avec rappels, suivi et attention aux détails.",
  },
  {
    slug: "ro-nutritionniste",
    name: "Ro Nutritionniste",
    code: "PROJET 04 / RO NUTRITIONNISTE",
    status: "Prototype avancé",
    statusTone: "sage",
    visual: "browser",
    statement: "Un univers nutritionnel doux transformé en expérience web complète.",
    category: "Expérience web",
    summary: "Une démonstration pensée pour un nutritionniste : une identité chaleureuse, des recettes et des rendez-vous réunis dans une expérience cohérente.",
    linkLabel: "Visiter le site",
    description:
      "J’ai conçu pour Romain ONESTA une démonstration de site qui réunit présentation, recettes, contenus, prise de rendez-vous et outils de personnalisation. Ce projet me permet d’explorer une interface plus éditoriale et chaleureuse, sans perdre la précision du produit.",
    image: "/projects/ro-nutritionniste-site.webp",
    imageWidth: 1280,
    imageHeight: 720,
    icon: "/projects/ro-nutritionniste-icon.webp",
    imageAlt: "Accueil du site Ro Nutritionniste : identité sauge, assiette équilibrée et accompagnement de Romain ONESTA",
    href: "https://ro-nutritionniste.vercel.app",
    platforms: ["Web", "Démo interactive"],
    technologies: ["Next.js", "React", "TypeScript", "Vercel", "Design system"],
    capabilities: ["Recettes", "Rendez-vous", "Générateur", "Contenus", "Administration"],
    role: "Conception de l’interface et développement de la démonstration",
    demonstrates: "Comprendre un métier et réunir ses contenus et ses outils dans une expérience cohérente.",
  },
  {
    slug: "odysio",
    name: "Odysio",
    code: "PROJET 05 / ODYSIO",
    status: "Projet en pause",
    statusTone: "cyan",
    visual: "identity",
    statement: "Un carnet d’explorateur qui transforme les habitudes en quêtes personnelles.",
    category: "Habitudes & narration",
    summary: "Et si les habitudes devenaient une aventure ? Un prototype mobile mêlant quêtes, progression et narration, testé sur iOS puis mis en pause.",
    description:
      "Odysio donne une dimension narrative aux habitudes : quêtes, progression, XP, chapitres, avatar et rappels contextualisés. Une version iOS a été testée sur appareil ; j’ai volontairement mis le projet en pause avant de poursuivre le widget, les achats sandbox et le lancement public.",
    image: "/projects/odysio-icon.png",
    imageWidth: 1024,
    imageHeight: 1024,
    icon: "/projects/odysio-icon.png",
    imageAlt: "Icône actuelle de l’application Odysio",
    waitLabel: "Prototype en pause",
    platforms: ["iOS", "TestFlight"],
    technologies: ["Expo", "React Native", "TypeScript", "Supabase", "RevenueCat"],
    capabilities: ["Quêtes", "Narration IA", "Progression", "Chapitres", "Notifications"],
    role: "Conception et développement d’un prototype mobile",
    demonstrates: "Explorer l’engagement par la narration et l’IA, tester sur appareil et prioriser la suite du produit.",
  },
];

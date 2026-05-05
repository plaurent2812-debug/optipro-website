export interface Offer {
  id: string;
  name: string;
  description: string;
  price: string;
  delay?: string;
  features: string[];
}

export interface OfferCategory {
  id: 'artisans' | 'tpe' | 'pme-ops' | 'projets';
  icon: string;
  tagline: string;
  title: string;
  subtitle: string;
  description: string;
  offers: Offer[];
  ctaLabel: string;
  ctaHref: string;
}

export const offerCategories: OfferCategory[] = [
  {
    id: 'artisans',
    icon: '🔧',
    tagline: 'Pour les indépendants',
    title: 'Artisans & commerçants',
    subtitle: 'Des outils simples, livrés rapidement.',
    description:
      'Vous êtes seul ou à quelques personnes. Vous avez besoin de visibilité et de gagner du temps sur l\'admin, sans vous lancer dans un gros projet.',
    offers: [
      {
        id: 'pack-visibilite',
        name: 'Pack Visibilité',
        description: 'Pour exister en ligne proprement et capter les clients qui cherchent sur Google.',
        price: '690 € HT',
        delay: '3-5 jours',
        features: [
          'Fiche Google Business optimisée',
          'Mini-site 1 page (présentation, contact, horaires)',
          'Formation 1h pour gérer votre fiche',
        ],
      },
      {
        id: 'sheets-devis',
        name: 'Sheets Devis / Factures',
        description: 'Un fichier prêt à l\'emploi pour ne plus jamais refaire un devis à la main.',
        price: '390 € HT',
        delay: '2-3 jours',
        features: [
          'Modèles de devis et factures personnalisés',
          'Calculs automatiques (HT / TVA / TTC)',
          'Suivi des paiements intégré',
          'Formation à l\'utilisation',
        ],
      },
      {
        id: 'bot-telegram',
        name: 'Bot Telegram Notifs',
        description: 'Recevez une notification sur votre téléphone à chaque événement important.',
        price: '290 € HT',
        delay: '1-2 jours',
        features: [
          'Nouvelle demande de contact sur votre site',
          'Paiement reçu',
          'Rappel de devis à envoyer',
          'Configuration sur mesure',
        ],
      },
      {
        id: 'formation-1h',
        name: 'Formation ponctuelle',
        description: 'Une heure en visio sur le sujet de votre choix.',
        price: '120 € HT',
        delay: '1h visio',
        features: [
          'Fiche Google, gestion admin, prise en main outil',
          'Bases de l\'IA pour le quotidien',
          'Au choix selon votre besoin',
        ],
      },
    ],
    ctaLabel: 'Parler de mon besoin',
    ctaHref: '/contact?cible=artisans',
  },
  {
    id: 'tpe',
    icon: '🏢',
    tagline: 'Pour les TPE structurées',
    title: 'TPE & PME',
    subtitle: 'Des outils pros, pensés pour votre métier.',
    description:
      'Vous avez une équipe, des process qui s\'alourdissent, et vous voulez structurer sans tout casser. Chaque outil est construit sur mesure.',
    offers: [
      {
        id: 'site-pro',
        name: 'Site vitrine pro',
        description: 'Un vrai site sur mesure, pas un template. Pensé comme un outil commercial.',
        price: 'à partir de 2 400 € HT',
        delay: '2-3 semaines',
        features: [
          '3-5 pages, design unique, responsive',
          'SEO local + fiche Google optimisée',
          'Formulaire de contact intelligent',
          'Formation 2h incluse',
        ],
      },
      {
        id: 'sheets-pro',
        name: 'Sheets automatisé pro',
        description: 'Un fichier métier avec des automatisations avancées (formules, scripts, liaisons).',
        price: 'à partir de 590 € HT',
        delay: '3-5 jours',
        features: [
          'Devis, factures, suivi clients, indicateurs',
          'Scripts et automatisations avancées',
          'Documentation personnalisée',
        ],
      },
      {
        id: 'bot-telegram-pro',
        name: 'Bot Telegram avancé',
        description: 'Bien plus que des notifs : interagir avec vos outils depuis votre téléphone.',
        price: 'à partir de 390 € HT',
        delay: '2-4 jours',
        features: [
          'Créer un devis depuis Telegram',
          'Recevoir un rapport quotidien automatisé',
          'Actions personnalisées selon votre métier',
        ],
      },
      {
        id: 'formation-pro',
        name: 'Formation sur mesure',
        description: 'Une heure ou plus sur l\'usage pro de l\'IA ou sur un outil livré.',
        price: 'à partir de 150 € HT',
        delay: '1h ou 2h visio',
        features: [
          'IA pour votre métier (prompts, outils)',
          'Prise en main complète d\'un outil livré',
          'Documentation personnalisée',
        ],
      },
    ],
    ctaLabel: 'Discuter de mon projet',
    ctaHref: '/contact?cible=tpe',
  },
  {
    id: 'pme-ops',
    icon: '📦',
    tagline: 'Pour les PME logistique, transport, BTP',
    title: 'PME ops & exploitation',
    subtitle: '10 ans à piloter des flux tendus, appliqués à votre opérationnel.',
    description:
      "Vous dirigez ou pilotez l'exploitation d'une PME (transport, logistique, BTP, distribution). Vos process tiennent par habitude, vos KPIs sont éparpillés, et vos sous-traitants ne se synchronisent pas avec votre ERP. Je passe par votre métier avant de proposer la moindre solution.",
    offers: [
      {
        id: 'audit-ops',
        name: 'Audit ops',
        description: "Diagnostic de votre exploitation : flux, outils, ERP, sous-traitants, reporting. Restitution écrite avec plan d'action chiffré.",
        price: '1 200 € HT',
        delay: '1 semaine',
        features: [
          'Cartographie complète des flux (entrants, sortants, internes)',
          'Audit ERP/TMS/WMS et points de friction',
          'Identification des gisements de temps et de coûts',
          "Plan d'action priorisé avec ROI estimé",
        ],
      },
      {
        id: 'reporting-auto',
        name: 'Automatisation reporting hebdo',
        description: "Vos KPIs (taux de service, marge transport, retards, sous-traitance) consolidés automatiquement chaque lundi matin.",
        price: '2 500 € HT',
        delay: '2 semaines',
        features: [
          'Connexion à vos sources (ERP, Excel, TMS, GPS)',
          'Tableau de bord hebdomadaire automatisé',
          "Alertes sur dérives (taux de service, retards, dépassements)",
          'Formation équipe + documentation',
        ],
      },
      {
        id: 'process-sous-traitants',
        name: 'Refonte process sous-traitants',
        description: "Cadrage opérationnel et outillage pour piloter 10 à 50 sous-traitants : ordres de service, suivi terrain, facturation.",
        price: 'Sur devis',
        delay: '4-8 semaines',
        features: [
          'Cadrage avec vos exploitants et chefs de chantier',
          'Outil de pilotage sur mesure (web app ou Sheets+scripts)',
          'Synchronisation avec ERP / facturation',
          'Formation terrain et accompagnement 1 mois',
        ],
      },
      {
        id: 'accompagnement-mensuel',
        name: 'Accompagnement mensuel ops',
        description: "Un point hebdomadaire, un consultant qui comprend l'exploitation, des évolutions continues sur vos outils.",
        price: '800 € HT / mois',
        delay: 'Engagement 6 mois',
        features: [
          '1 point hebdo de 1h (visio ou présentiel PACA)',
          "4h d'évolutions/optimisations par mois (reportables)",
          'Support prioritaire sous 4h ouvrées',
          'Veille IA/automatisation appliquée à votre métier',
        ],
      },
    ],
    ctaLabel: 'Parler de mon exploitation',
    ctaHref: '/contact?cible=pme-ops',
  },
  {
    id: 'projets',
    icon: '🚀',
    tagline: 'Projets structurants',
    title: 'Projets sur mesure',
    subtitle: 'Pour les transformations complètes.',
    description:
      'Site complet avec espace client, web app, intégrations API, automatisations multi-outils. Des projets ambitieux qui demandent un vrai cadrage.',
    offers: [
      {
        id: 'audit',
        name: 'Audit approfondi',
        description: 'Avant tout devis complexe, on cadre le projet ensemble. Cet audit est déduit si la mission est signée.',
        price: '490 € HT',
        delay: '1 semaine',
        features: [
          '3-4h d\'analyse de votre activité',
          'Rapport écrit avec recommandations',
          'Devis précis pour la suite',
          'Déduit du devis final si mission signée',
        ],
      },
      {
        id: 'site-complet',
        name: 'Site complet + espace client',
        description: 'Un site avec catalogue, espace client, mode édition en ligne et admin dédiée.',
        price: 'à partir de 5 000 € HT',
        delay: '4-6 semaines',
        features: [
          'Catalogue produits (jusqu\'à 1000+ références)',
          'Espace client (devis, factures, commandes)',
          'Mode édition en ligne pour l\'admin',
          'Suivi des performances intégré',
        ],
      },
      {
        id: 'web-app',
        name: 'Web app sur mesure',
        description: 'Une application dédiée à votre activité : CRM, planning, outil métier spécifique.',
        price: 'Sur devis',
        delay: '4-12 semaines',
        features: [
          'Cahier des charges co-construit',
          'Architecture adaptée à votre volume',
          'Intégrations avec vos outils existants',
          'Formation et documentation complète',
        ],
      },
      {
        id: 'transformation',
        name: 'Transformation complète',
        description: 'Site + espace client + admin + automatisations + intégrations. Le projet qui change tout.',
        price: 'à partir de 10 000 € HT',
        delay: '6-10 semaines',
        features: [
          'Audit approfondi inclus',
          'Site complet avec catalogue et espace client',
          'Intégration API (Pennylane, CRM, etc.)',
          'Automatisations et notifications sur mesure',
          'Formation + accompagnement 1 mois',
        ],
      },
    ],
    ctaLabel: 'Cadrer mon projet',
    ctaHref: '/contact?cible=projets',
  },
];

export interface Subscription {
  name: string;
  price: string;
  description: string;
  features: string[];
}

export const subscription: Subscription = {
  name: 'Suivi & Évolution',
  price: '180 € HT / mois',
  description:
    'Pour les clients qui veulent garder leur outil à jour et le faire évoluer sans re-devis à chaque fois.',
  features: [
    'Maintenance technique (hébergement, mises à jour)',
    '1h d\'évolution incluse par mois (reportable 3 mois)',
    'Support prioritaire sous 24h ouvrées',
    'Point trimestriel pour anticiper les besoins',
    'Engagement 6 mois minimum',
  ],
};

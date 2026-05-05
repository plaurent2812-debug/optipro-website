export interface Offer {
  id: string;
  name: string;
  description: string;
  price: string;
  delay?: string;
  features: string[];
  /** Option(s) additionnelle(s) que le client peut ajouter à l'offre principale */
  options?: Array<{ name: string; price: string; description?: string }>;
}

export interface OfferCategory {
  id: 'artisans' | 'pme-ops' | 'projets';
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
    tagline: 'Pour les artisans, indépendants et TPE',
    title: 'Artisans & TPE',
    subtitle: 'Démarrer en ligne proprement, sans payer pour ce qui ne sert pas.',
    description:
      "Vous êtes seul ou à quelques personnes. Vous voulez exister en ligne, capter les clients qui cherchent sur Google, et avoir un site qui ressemble à votre activité — pas un template parmi mille.",
    offers: [
      {
        id: 'pack-visibilite',
        name: 'Pack Visibilité',
        description: "Pour exister en ligne proprement et capter les clients qui cherchent sur Google. Le minimum vital pour un artisan ou un indépendant qui démarre.",
        price: '890 € HT',
        delay: '3-5 jours',
        features: [
          'Fiche Google Business optimisée (catégories, zone, photos)',
          'Mini-site 1 page (présentation, contact, horaires)',
          'Optimisation locale pour votre ville et alentours',
          'Formation 1h pour gérer votre fiche en autonomie',
        ],
      },
      {
        id: 'site-pro',
        name: 'Site vitrine pro',
        description: "Un vrai site sur mesure (3-5 pages), pas un template. Pensé comme un outil commercial qui génère des contacts.",
        price: 'à partir de 2 400 € HT',
        delay: '1 semaine',
        features: [
          '3-5 pages, design unique, responsive mobile',
          'SEO local + fiche Google Business optimisée',
          'Formulaire de contact intelligent (anti-spam, notif instantanée)',
          'Formation 2h incluse pour mettre à jour le contenu',
          '30 jours de support après mise en ligne',
        ],
        options: [
          {
            name: 'Notification Telegram',
            price: '+ 500 € HT',
            description: 'Recevez une notification Telegram instantanée à chaque demande de contact, en plus de l\'email.',
          },
        ],
      },
    ],
    ctaLabel: 'Parler de mon besoin',
    ctaHref: '/contact?cible=artisans',
  },
  {
    id: 'pme-ops',
    icon: '📦',
    tagline: 'Pour les PME logistique, transport, BTP',
    title: 'PME ops & exploitation',
    subtitle: '10 ans à piloter des flux tendus, appliqués à votre opérationnel.',
    description:
      "Vous dirigez ou pilotez l'exploitation d'une PME (transport, logistique, BTP, distribution). Vos process tiennent par habitude, vos KPIs sont éparpillés, vos sous-traitants ne se synchronisent pas avec votre ERP. Je passe par votre métier avant de proposer la moindre solution.",
    offers: [
      {
        id: 'audit-ops',
        name: 'Audit ops',
        description: "Diagnostic complet de votre exploitation : flux, outils, ERP, sous-traitants, reporting. Restitution écrite avec plan d'action chiffré et ROI estimé.",
        price: 'à partir de 1 500 € HT — sur devis',
        delay: '1 semaine',
        features: [
          'Cartographie complète des flux (entrants, sortants, internes)',
          'Audit ERP/TMS/WMS et points de friction',
          'Identification des gisements de temps et de coûts',
          "Plan d'action priorisé avec ROI estimé par chantier",
          'Restitution écrite + visio de cadrage 1h',
        ],
      },
      {
        id: 'reporting-auto',
        name: 'Automatisation reporting hebdo',
        description: "Vos KPIs (taux de service, marge transport, retards, sous-traitance) consolidés automatiquement chaque lundi matin. Plus de 3h passées à jongler entre Excel, TMS et compta.",
        price: 'à partir de 3 500 € HT — sur devis',
        delay: '2-3 semaines',
        features: [
          'Connexion à vos sources (ERP, Excel, TMS, GPS)',
          'Tableau de bord hebdomadaire automatisé',
          'Alertes sur dérives (taux de service, retards, dépassements)',
          'Formation équipe + documentation utilisateur',
        ],
      },
      {
        id: 'process-sous-traitants',
        name: 'Refonte process sous-traitants',
        description: "Cadrage opérationnel et outillage pour piloter 10 à 50 sous-traitants : ordres de service, suivi terrain, facturation, conformité documentaire.",
        price: 'Sur devis',
        delay: '4-8 semaines',
        features: [
          'Cadrage avec vos exploitants et chefs de chantier',
          'Outil de pilotage sur mesure (web app ou Sheets+scripts)',
          'Synchronisation avec ERP / facturation',
          'Formation terrain et accompagnement 1 mois',
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
    subtitle: 'Pour les sites complexes et les outils métier dédiés.',
    description:
      "Site avec catalogue, espace client, intégrations API, ou web app métier dédiée à votre activité. Des projets ambitieux qui demandent un vrai cadrage avant tout devis.",
    offers: [
      {
        id: 'site-complet',
        name: 'Site complet + espace client',
        description: 'Un site avec catalogue produits, espace client, mode édition en ligne, back-office dédié. Possibilité d\'inclure intégrations API (Pennylane, CRM…) et automatisations sur mesure dans le devis.',
        price: 'à partir de 6 500 € HT — sur devis',
        delay: '4-6 semaines',
        features: [
          'Catalogue produits (jusqu\'à 1000+ références)',
          'Espace client (devis, factures, commandes en ligne)',
          'Mode édition en ligne pour l\'admin',
          'Suivi des performances intégré (analytics, conversion)',
          'Intégrations API et automatisations en option (chiffrées au devis)',
        ],
      },
      {
        id: 'web-app',
        name: 'Web app sur mesure',
        description: 'Une application dédiée à votre activité : CRM, planning, outil métier spécifique, dashboard exécutif.',
        price: 'Sur devis',
        delay: '4-12 semaines',
        features: [
          'Cahier des charges co-construit',
          'Architecture adaptée à votre volume',
          'Intégrations avec vos outils existants',
          'Formation et documentation complète',
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
  name: 'Maintenance technique',
  price: '90 € HT / mois',
  description:
    "Pour garder votre site ou votre outil sécurisé et à jour, sans surprise. Les évolutions sont facturées à la demande.",
  features: [
    'Hébergement et nom de domaine maintenus',
    'Mises à jour techniques et sécurité',
    'Support technique sous 48h ouvrées',
    'Évolutions ponctuelles facturées 80 €/h HT',
    'Sans engagement, résiliable au mois',
  ],
};

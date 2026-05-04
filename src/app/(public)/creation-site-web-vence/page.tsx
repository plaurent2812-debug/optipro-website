import type { Metadata } from 'next';
import LandingPage from '@/components/seo/LandingPage';

export const metadata: Metadata = {
  title: 'Création de site web à Vence — Artisans, TPE, indépendants',
  description:
    "Création de site web professionnel à Vence et sur la Côte d'Azur. Sites artisans dès 690€, livrés en 3-5 jours. Audit gratuit par Pierre Laurent, basé à Vence (06).",
  alternates: {
    canonical: '/creation-site-web-vence',
  },
  openGraph: {
    title: 'Création de site web à Vence — OptiPro',
    description:
      'Sites web sur mesure pour artisans et TPE de la Côte d&apos;Azur. Livraison rapide, prix affichés, audit gratuit.',
    url: 'https://www.opti-pro.fr/creation-site-web-vence',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.opti-pro.fr' },
        { '@type': 'ListItem', position: 2, name: 'Création site web Vence', item: 'https://www.opti-pro.fr/creation-site-web-vence' },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://www.opti-pro.fr/creation-site-web-vence#service',
      name: 'Création de site web à Vence',
      serviceType: 'Création de site web',
      provider: { '@id': 'https://www.opti-pro.fr/#organization' },
      areaServed: [
        { '@type': 'City', name: 'Vence' },
        { '@type': 'City', name: 'Nice' },
        { '@type': 'City', name: 'Antibes' },
        { '@type': 'City', name: 'Cannes' },
        { '@type': 'City', name: 'Grasse' },
        { '@type': 'AdministrativeArea', name: 'Alpes-Maritimes' },
      ],
      offers: {
        '@type': 'Offer',
        priceCurrency: 'EUR',
        price: '690',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'EUR',
          price: 690,
          valueAddedTaxIncluded: false,
        },
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Combien coûte un site web pour un artisan à Vence ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Le Pack Visibilité OptiPro démarre à 690€ HT pour un site 1 page (présentation, contact, horaires) avec fiche Google Business optimisée et formation incluse. Les sites professionnels 3-5 pages démarrent à 2 400€ HT. Tous les prix sont affichés publiquement sur la page Services.',
          },
        },
        {
          '@type': 'Question',
          name: 'Combien de temps faut-il pour créer un site à Vence ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '3 à 5 jours pour un site 1 page (Pack Visibilité). 2 à 3 semaines pour un site professionnel 3-5 pages. 4 à 6 semaines pour un site complet avec espace client. Tous les délais sont engagés contractuellement.',
          },
        },
        {
          '@type': 'Question',
          name: 'Êtes-vous basé à Vence ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oui. OptiPro est basé à Vence (06140), Provence-Alpes-Côte d&apos;Azur. Les rendez-vous en présentiel sont possibles sur Vence, Nice, Antibes, Cannes, Grasse et toute la Côte d&apos;Azur. Le travail à distance est possible partout en France.',
          },
        },
        {
          '@type': 'Question',
          name: 'L&apos;audit est-il vraiment gratuit ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oui. Chaque mission démarre par un appel découverte gratuit de 30 minutes, sans engagement. Pour les projets complexes, un audit approfondi à 490€ HT peut être proposé — il est intégralement déduit du devis si la mission est signée.',
          },
        },
        {
          '@type': 'Question',
          name: 'Faites-vous de la sous-traitance ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Non. Pierre Laurent, fondateur d&apos;OptiPro, gère l&apos;intégralité de chaque projet : analyse, conception, développement, livraison et formation. Aucune sous-traitance, aucun commercial intermédiaire.',
          },
        },
      ],
    },
  ],
};

export default function CreationSiteWebVencePage() {
  return (
    <LandingPage
      badge="Création web · Vence · Côte d'Azur"
      h1="Création de site web à Vence pour artisans et TPE"
      intro="Pierre Laurent, basé à Vence (06140), conçoit et développe des sites web sur mesure pour les artisans, indépendants et TPE de la Côte d'Azur. Pas de template générique, pas de sous-traitance — juste un interlocuteur, des prix affichés et des délais respectés."
      painSection={{
        title: "Pourquoi un site générique à 29€/mois ne suffit-il pas pour un artisan local ?",
        points: [
          "Les templates ne reflètent pas votre métier ni votre zone d'intervention",
          "Pas d'optimisation pour la recherche locale (Vence, Nice, Antibes…)",
          "Aucun lien avec votre fiche Google Business",
          "Vous payez tous les mois pour un site que vous ne possédez pas",
          "Personne pour vous accompagner quand un client n'arrive pas à vous joindre",
        ],
      }}
      featuredOffer={{
        name: 'Pack Visibilité',
        price: '690 € HT',
        delay: '3-5 jours',
        description: "Pour exister en ligne proprement et capter les clients qui cherchent un artisan sur Google à Vence et alentour.",
        features: [
          'Fiche Google Business optimisée avec catégories et zone',
          'Mini-site 1 page (présentation, services, contact, horaires)',
          'Optimisation locale (Vence, Nice, Antibes, Côte d\'Azur)',
          'Formulaire de contact connecté à votre email',
          '1h de formation pour gérer votre fiche Google',
        ],
      }}
      process={[
        {
          step: '1',
          title: 'Échange découverte (30 min, gratuit)',
          description: "On fait le point sur votre activité, votre zone d'intervention et ce qui vous différencie. Je vous propose une orientation claire — Pack Visibilité, site pro ou autre — selon votre besoin réel.",
        },
        {
          step: '2',
          title: 'Audit et cadrage',
          description: "Je passe en revue votre présence en ligne actuelle (site existant, Google Business, réseaux). Vous recevez un diagnostic écrit avec recommandations priorisées et un devis ferme.",
        },
        {
          step: '3',
          title: 'Conception et développement',
          description: "Maquette validée avant développement. Site construit sur Next.js (technologie moderne, rapide, optimisée Google). Vous suivez l'avancement par lien direct.",
        },
        {
          step: '4',
          title: 'Mise en ligne et formation',
          description: "Mise en production, configuration du nom de domaine, optimisation SEO local. Formation en visio pour gérer votre fiche Google Business et répondre aux avis. Support 30 jours inclus.",
        },
      ]}
      faq={[
        {
          question: 'Combien coûte un site web pour un artisan à Vence ?',
          answer: 'Le Pack Visibilité OptiPro démarre à 690€ HT pour un site 1 page avec fiche Google Business et formation incluse. Les sites professionnels 3-5 pages démarrent à 2 400€ HT. Tous les prix sont affichés publiquement.',
        },
        {
          question: 'Combien de temps faut-il pour créer un site ?',
          answer: '3 à 5 jours pour un site 1 page (Pack Visibilité). 2 à 3 semaines pour un site professionnel 3-5 pages. 4 à 6 semaines pour un site complet avec espace client. Tous les délais sont engagés contractuellement.',
        },
        {
          question: 'Êtes-vous basé à Vence ?',
          answer: "Oui. OptiPro est basé à Vence (06140). Les rendez-vous en présentiel sont possibles sur Vence, Nice, Antibes, Cannes, Grasse et toute la Côte d'Azur. Le travail à distance est possible partout en France.",
        },
        {
          question: "L'audit est-il vraiment gratuit ?",
          answer: "Oui. Chaque mission démarre par un appel découverte gratuit de 30 minutes, sans engagement. Pour les projets complexes, un audit approfondi à 490€ HT peut être proposé — il est intégralement déduit du devis si la mission est signée.",
        },
        {
          question: 'Faites-vous de la sous-traitance ?',
          answer: "Non. Pierre Laurent gère l'intégralité de chaque projet : analyse, conception, développement, livraison et formation. Aucune sous-traitance, aucun commercial intermédiaire.",
        },
      ]}
      localMentions={['Vence', 'Nice', 'Antibes', 'Cannes', 'Grasse', "Côte d'Azur"]}
      jsonLd={jsonLd}
    />
  );
}

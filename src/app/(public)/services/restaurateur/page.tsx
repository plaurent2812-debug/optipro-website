import type { Metadata } from 'next';
import LandingPage from '@/components/seo/LandingPage';

export const metadata: Metadata = {
  title: 'Site web et outils digitaux pour restaurateur',
  description:
    'Site web restaurant, gestion des réservations, fiche Google Business optimisée. Solutions sur mesure pour restaurateurs indépendants. Basé à Vence (06).',
  alternates: {
    canonical: '/services/restaurateur',
  },
  openGraph: {
    title: 'Site web et outils digitaux pour restaurateurs — OptiPro',
    description:
      "Site web, menu numérique, gestion des avis Google : tout pour qu'un restaurateur indépendant gagne du temps et des couverts.",
    url: 'https://www.opti-pro.fr/services/restaurateur',
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
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.opti-pro.fr/services' },
        { '@type': 'ListItem', position: 3, name: 'Restaurateur', item: 'https://www.opti-pro.fr/services/restaurateur' },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://www.opti-pro.fr/services/restaurateur#service',
      name: 'Site web et outils digitaux pour restaurateur',
      serviceType: 'Solutions digitales pour restauration',
      description:
        "Site web restaurant, gestion réservations propriétaires (sans commission TheFork), fiche Google Business optimisée, gestion des avis. Solutions sur mesure pour restaurateurs indépendants.",
      provider: { '@id': 'https://www.opti-pro.fr/#organization' },
      areaServed: [
        { '@type': 'City', name: 'Vence' },
        { '@type': 'City', name: 'Nice' },
        { '@type': 'City', name: 'Antibes' },
        { '@type': 'City', name: 'Cannes' },
        { '@type': 'City', name: 'Grasse' },
        { '@type': 'City', name: 'Mougins' },
        { '@type': 'City', name: 'Cagnes-sur-Mer' },
        { '@type': 'AdministrativeArea', name: 'Alpes-Maritimes' },
        { '@type': 'AdministrativeArea', name: "Provence-Alpes-Côte d'Azur" },
        { '@type': 'Country', name: 'France' },
      ],
      audience: { '@type': 'Audience', name: 'Restaurateurs, gérants de bistrot, traiteurs' },
      offers: [
        {
          '@type': 'Offer',
          name: 'Pack Visibilité restaurant',
          price: '690',
          priceCurrency: 'EUR',
          priceSpecification: { '@type': 'PriceSpecification', price: '690', priceCurrency: 'EUR', valueAddedTaxIncluded: false },
          availability: 'https://schema.org/InStock',
          deliveryLeadTime: { '@type': 'QuantitativeValue', value: '5', unitCode: 'DAY' },
        },
        {
          '@type': 'Offer',
          name: 'Site web restaurant complet',
          price: '2900',
          priceCurrency: 'EUR',
          priceSpecification: { '@type': 'PriceSpecification', price: '2900', priceCurrency: 'EUR', valueAddedTaxIncluded: false },
          availability: 'https://schema.org/InStock',
          deliveryLeadTime: { '@type': 'QuantitativeValue', value: '14', unitCode: 'DAY' },
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: "Pourquoi un restaurant a-t-il besoin d'un site web propre en 2026 ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Avant de réserver une table, 9 personnes sur 10 vérifient le menu, les horaires, les photos et les avis sur Google. Un restaurant sans site ou avec une page Facebook obsolète perd ces clients au profit de ceux qui ont fait l'effort. Un site simple et rapide à charger sur mobile permet aussi d'intégrer un module de réservation et d'afficher le menu sans dépendre de TheFork ou Uber Eats.",
          },
        },
        {
          '@type': 'Question',
          name: 'Combien coûte un site web pour un restaurant ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pour un site complet (présentation, menu, photos, réservation, avis Google intégrés), comptez à partir de 2 900€ HT. Pour démarrer rapidement avec une présence pro, le Pack Visibilité à 690€ HT couvre site 1 page + fiche Google Business optimisée. Tous les prix sont affichés publiquement.',
          },
        },
        {
          '@type': 'Question',
          name: 'Comment gérer les avis Google pour mon restaurant ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Je vous forme à répondre aux avis (positifs et négatifs) de manière professionnelle, à demander des avis aux clients satisfaits via un lien direct, et à signaler les avis abusifs. C'est inclus dans tous les packs incluant la fiche Google Business. La gestion active des avis impacte directement votre visibilité dans le Local Pack Google Maps.",
          },
        },
        {
          '@type': 'Question',
          name: "Pouvez-vous m'aider à réduire ma dépendance à TheFork / Uber Eats ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oui. La stratégie consiste à capter les recherches Google directement avec votre propre site et fiche Google Business optimisée, puis à proposer la réservation/commande via un canal sans commission. ROI typiquement observé dans le secteur : 3 à 6 mois selon votre zone et la concurrence locale.',
          },
        },
      ],
    },
  ],
};

export default function RestaurateurPage() {
  return (
    <LandingPage
      badge="Pour restaurateurs indépendants"
      h1="Site web et outils digitaux pour restaurateurs"
      intro="Vous êtes excellent en cuisine et en salle, pas devant un écran. OptiPro construit pour les restaurateurs indépendants des outils simples : site web rapide, menu en ligne, gestion des avis Google, automatisation des réservations. Pour reprendre la main sur votre image et réduire la dépendance aux plateformes."
      painSection={{
        title: 'Pourquoi votre restaurant perd-il des couverts chaque semaine ?',
        points: [
          "Votre site est lent, illisible sur mobile, ou inexistant",
          "Le menu sur Google est obsolète depuis 6 mois",
          "Les avis Google récents sont sans réponse",
          "Vous payez 12-15% de commission à chaque réservation TheFork",
          "Pas le temps de poster sur Instagram entre le service midi et le service du soir",
        ],
      }}
      featuredOffer={{
        name: 'Site professionnel restaurateur',
        price: 'à partir de 2 900 € HT',
        delay: '2-3 semaines',
        description: "Un site rapide sur mobile, mis à jour facilement, qui montre vos plats, votre équipe et capte des réservations directement.",
        features: [
          'Site 3-5 pages : accueil, menu, équipe, contact, réservation',
          'Photos optimisées pour Google et le mobile',
          'Module de réservation intégré (sans commission)',
          'Fiche Google Business optimisée + intégration des avis',
          'Formation : mise à jour du menu, réponse aux avis, demande d\'avis',
        ],
      }}
      process={[
        {
          step: '1',
          title: 'Échange découverte (30 min, gratuit)',
          description: "On parle du restaurant : positionnement, clientèle, services (midi, soir, traiteur, livraison), problèmes prioritaires. Je vous propose une orientation claire selon votre contexte.",
        },
        {
          step: '2',
          title: 'Audit digital gratuit',
          description: "Je vérifie votre site actuel, votre fiche Google Business, vos avis et votre stratégie réseaux sociaux. Vous recevez un état des lieux écrit avec actions priorisées en 48h.",
        },
        {
          step: '3',
          title: 'Conception et développement',
          description: "Maquette validée avant développement. Site optimisé pour le mobile (la majorité des consultations restaurant). Module de réservation connecté à votre boîte mail ou à votre logiciel de caisse.",
        },
        {
          step: '4',
          title: 'Mise en ligne et formation',
          description: "Mise en production, optimisation SEO local, configuration de votre Google Business. Formation sur la mise à jour du menu, la réponse aux avis, et la collecte d'avis client. Support 30 jours inclus.",
        },
      ]}
      faq={[
        {
          question: "Pourquoi un restaurant a-t-il besoin d'un site web propre en 2026 ?",
          answer: "Avant de réserver, 9 personnes sur 10 vérifient le menu, les horaires, les photos et les avis sur Google. Un restaurant sans site ou avec une page Facebook obsolète perd ces clients. Un site simple permet d'intégrer la réservation et d'afficher le menu sans dépendre de TheFork ou Uber Eats.",
        },
        {
          question: 'Combien coûte un site web pour un restaurant ?',
          answer: "Pour un site complet (présentation, menu, photos, réservation, avis intégrés), comptez à partir de 2 900€ HT. Pour démarrer rapidement, le Pack Visibilité à 690€ HT couvre site 1 page + fiche Google Business. Tous les prix sont affichés.",
        },
        {
          question: 'Comment gérer les avis Google pour mon restaurant ?',
          answer: "Je vous forme à répondre aux avis, demander des avis aux clients satisfaits via un lien direct, et signaler les avis abusifs. C'est inclus dans tous les packs avec fiche Google Business. La gestion active des avis impacte directement votre visibilité dans le Local Pack Google Maps.",
        },
        {
          question: "Pouvez-vous m'aider à réduire ma dépendance à TheFork / Uber Eats ?",
          answer: "Oui. La stratégie consiste à capter les recherches Google directement avec votre propre site et fiche Google Business optimisée, puis à proposer la réservation via un canal sans commission. ROI typiquement observé : 3 à 6 mois.",
        },
      ]}
      localMentions={['Vence', 'Nice', 'Antibes', 'Cannes', 'Grasse', "toute la PACA et la France à distance"]}
      industryContext={{
        title: "Restauration sur la Côte d'Azur en 2026 — pourquoi votre site est plus rentable que TheFork",
        intro:
          "La restauration française a une particularité : elle vit avec une commission TheFork moyenne de 7 % sur chaque couvert réservé via la plateforme. Sur un ticket moyen de 35 €/personne, c'est 2,45 € par client qui s'envole. Un restaurant qui fait 80 couverts/jour via TheFork laisse plus de 71 000 € par an en commissions. Votre propre site web bien optimisé peut récupérer une partie de ce flux à 0 % de commission.",
        keyFacts: [
          {
            stat: '9 sur 10',
            label: 'consultent le menu, les photos et les avis Google avant de réserver',
            source: 'Google Consumer Survey 2023',
          },
          {
            stat: '7 %',
            label: 'commission TheFork standard sur chaque couvert réservé',
            source: 'TheFork conditions générales',
          },
          {
            stat: '34 %',
            label: "des restaurants en France n'ont pas mis à jour leur menu en ligne depuis 6 mois",
            source: 'Étude UMIH 2024',
          },
          {
            stat: '2,45 €',
            label: 'perdus par couvert sur un ticket moyen de 35 € via TheFork',
          },
        ],
        miniCases: [
          {
            situation:
              "Un restaurant de spécialités niçoises à Nice Vieux-Nice, 60 couverts/jour dont 70 % via TheFork. Site daté en flash, menu obsolète, photos floues. Visibilité Google Maps faible.",
            result:
              "Site complet avec module de réservation propriétaire (sans commission), photos pro du chef, menu structuré en JSON-LD. Après 4 mois, 35 % des réservations passent par le site direct. Économie estimée : 2 100 €/mois en commissions.",
          },
          {
            situation:
              "Un bistrot familial à Tourrettes-sur-Loup, 30 couverts/service, déjà bien noté sur Google (4,7/5). Mais aucun site web et fiche Google Business à moitié remplie (pas de menu, photos vieilles de 2018).",
            result:
              "Pack Visibilité + photos pro + menu PDF cliquable. Pas de site complexe — la fiche Google Business renforcée a suffi à augmenter les appels de réservation de 40 %.",
          },
        ],
        insight:
          "Sur la Côte d'Azur, la saison touristique change la donne : 70 % des recherches « restaurant + ville » se font sur mobile pendant les vacances scolaires françaises et l'été. Un site rapide, géolocalisé et avec menu visible en 2 secondes capte ce trafic — TheFork ne reste qu'un complément, pas le canal principal.",
      }}
      jsonLd={jsonLd}
    />
  );
}

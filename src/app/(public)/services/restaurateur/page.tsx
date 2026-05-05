import type { Metadata } from 'next';
import LandingPage from '@/components/seo/LandingPage';

export const metadata: Metadata = {
  title: 'Site web et outils digitaux pour restaurateur — OptiPro',
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
      provider: { '@id': 'https://www.opti-pro.fr/#organization' },
      areaServed: [
        { '@type': 'AdministrativeArea', name: "Provence-Alpes-Côte d'Azur" },
        { '@type': 'Country', name: 'France' },
      ],
      audience: { '@type': 'Audience', name: 'Restaurateurs, gérants de bistrot, traiteurs' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Pourquoi un restaurant a-t-il besoin d&apos;un site web propre en 2026 ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Avant de réserver une table, 9 personnes sur 10 vérifient le menu, les horaires, les photos et les avis sur Google. Un restaurant sans site ou avec une page Facebook obsolète perd ces clients au profit de ceux qui ont fait l&apos;effort. Un site simple et rapide à charger sur mobile permet aussi d&apos;intégrer un module de réservation et d&apos;afficher le menu sans dépendre de TheFork ou Uber Eats.',
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
            text: 'Je vous forme à répondre aux avis (positifs et négatifs) de manière professionnelle, à demander des avis aux clients satisfaits via un lien direct, et à signaler les avis abusifs. C&apos;est inclus dans tous les packs incluant la fiche Google Business. La gestion active des avis impacte directement votre visibilité dans le Local Pack Google Maps.',
          },
        },
        {
          '@type': 'Question',
          name: 'Pouvez-vous m&apos;aider à réduire ma dépendance à TheFork / Uber Eats ?',
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
      jsonLd={jsonLd}
    />
  );
}

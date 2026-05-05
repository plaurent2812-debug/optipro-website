import type { Metadata } from 'next';
import LandingPage from '@/components/seo/LandingPage';

export const metadata: Metadata = {
  title: 'Site web et automatisation pour plombier — OptiPro',
  description:
    'Création de site web, automatisation des devis et factures pour plombiers indépendants. Pack à 690€, livré en 3-5 jours. Basé à Vence (06), interventions PACA.',
  alternates: {
    canonical: '/services/plombier',
  },
  openGraph: {
    title: 'Site web et outils digitaux pour plombiers — OptiPro',
    description:
      "Outils sur mesure pour plombiers : site web, automatisation devis, fiche Google Business. Sans jargon, prix affichés.",
    url: 'https://www.opti-pro.fr/services/plombier',
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
        { '@type': 'ListItem', position: 3, name: 'Plombier', item: 'https://www.opti-pro.fr/services/plombier' },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://www.opti-pro.fr/services/plombier#service',
      name: 'Création de site web et automatisation pour plombier',
      serviceType: 'Solutions digitales pour plombiers',
      provider: { '@id': 'https://www.opti-pro.fr/#organization' },
      areaServed: [
        { '@type': 'AdministrativeArea', name: "Provence-Alpes-Côte d'Azur" },
        { '@type': 'Country', name: 'France' },
      ],
      audience: { '@type': 'Audience', name: 'Plombiers, plombiers-chauffagistes, sanitaire' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Pourquoi un plombier a-t-il besoin d&apos;un site web ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Plus de 80% des particuliers cherchent un plombier sur Google avant d&apos;appeler. Sans site web ni fiche Google Business, vous êtes invisible face aux concurrents qui ont fait l&apos;effort. Un site simple permet aussi d&apos;afficher votre zone d&apos;intervention, vos spécialités (dépannage, chauffage, sanitaire) et de capter les urgences hors horaires.',
          },
        },
        {
          '@type': 'Question',
          name: 'Combien coûte un site web pour un plombier ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Le Pack Visibilité OptiPro à 690€ HT inclut un site 1 page, votre fiche Google Business optimisée et une formation. C&apos;est suffisant pour la majorité des plombiers indépendants. Pour un site multi-pages avec présentation des services, comptez à partir de 2 400€ HT.',
          },
        },
        {
          '@type': 'Question',
          name: 'Comment automatiser mes devis et factures ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'OptiPro propose un fichier Sheets prêt à l&apos;emploi (390€ HT) avec calcul automatique HT/TVA/TTC, suivi des paiements, et numérotation automatique. Pour aller plus loin, un Bot Telegram (290€ HT) vous notifie en temps réel à chaque demande de devis ou paiement reçu.',
          },
        },
        {
          '@type': 'Question',
          name: 'Travaillez-vous avec des plombiers en dehors de la PACA ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oui. Le présentiel est possible sur la Côte d&apos;Azur (Vence, Nice, Antibes, Cannes, Grasse). Pour les plombiers ailleurs en France, tout se fait à distance : appel découverte, validation des maquettes par lien, formation en visio. La majorité des projets se réalisent à 100% en remote.',
          },
        },
      ],
    },
  ],
};

export default function PlombierPage() {
  return (
    <LandingPage
      badge="Pour plombiers indépendants"
      h1="Site web et outils digitaux pour plombiers"
      intro="Vous excellez dans la plomberie, pas dans Excel. OptiPro construit pour les plombiers et plombiers-chauffagistes des outils simples : site web, automatisation des devis, notifications Telegram pour les urgences. Pas de jargon, prix affichés, livraison rapide."
      painSection={{
        title: "Quels sont les vrais blocages d'un plombier indépendant aujourd'hui ?",
        points: [
          "Vous perdez 2-3h par semaine à recopier des devis dans Excel",
          "Les particuliers vous cherchent sur Google et ne vous trouvent pas (pas de site, fiche Google vide)",
          "Les relances de paiement passent à la trappe entre deux dépannages",
          "Vous manquez des urgences parce que vous ne voyez pas l'email à temps",
          "Vous payez 49€/mois pour un logiciel de devis dont vous utilisez 5%",
        ],
      }}
      featuredOffer={{
        name: 'Pack Visibilité',
        price: '690 € HT',
        delay: '3-5 jours',
        description: "Le minimum vital pour qu'un particulier qui tape « plombier [votre ville] » sur Google vous trouve, vous appelle, et vous fasse confiance.",
        features: [
          'Fiche Google Business optimisée (catégorie, zone d\'intervention, photos)',
          'Site 1 page : présentation, services, zones, contact',
          'Numéro de téléphone cliquable depuis mobile',
          'Optimisation locale pour votre ville et alentours',
          '1h de formation Google Business + gestion des avis',
        ],
      }}
      process={[
        {
          step: '1',
          title: 'Appel découverte (30 min, gratuit)',
          description: "On parle de votre activité : zone d'intervention, spécialités (dépannage, chauffage, sanitaire), spécificités locales. Je vous oriente vers la solution adaptée à votre besoin réel — pas vers la plus chère.",
        },
        {
          step: '2',
          title: 'Premier appel gratuit (30 min)',
          description: "Je vérifie votre fiche Google Business actuelle (si elle existe), votre référencement local et votre processus de devis. Vous recevez un état des lieux écrit en 48h.",
        },
        {
          step: '3',
          title: 'Construction sur mesure',
          description: "Site web, fichier de devis automatisé, ou bot Telegram — selon ce qui vous fait gagner le plus de temps. Maquette validée avant tout développement. Délai garanti.",
        },
        {
          step: '4',
          title: 'Formation et autonomie',
          description: "Vous repartez avec les codes pour gérer votre Google Business, mettre à jour votre site et utiliser vos outils en autonomie. Documentation écrite + visio enregistrée.",
        },
      ]}
      faq={[
        {
          question: "Pourquoi un plombier a-t-il besoin d'un site web ?",
          answer: "Plus de 80% des particuliers cherchent un plombier sur Google avant d'appeler. Sans site ni fiche Google, vous êtes invisible face aux concurrents. Un site simple permet d'afficher votre zone d'intervention, vos spécialités (dépannage, chauffage, sanitaire) et de capter les urgences hors horaires.",
        },
        {
          question: 'Combien coûte un site web pour un plombier ?',
          answer: "Le Pack Visibilité à 690€ HT inclut un site 1 page, votre fiche Google Business optimisée et une formation. C'est suffisant pour la majorité des plombiers indépendants. Pour un site multi-pages avec présentation des services, comptez à partir de 2 400€ HT.",
        },
        {
          question: 'Comment automatiser mes devis et factures ?',
          answer: "OptiPro propose un fichier Sheets prêt à l'emploi (390€ HT) avec calcul automatique HT/TVA/TTC, suivi des paiements et numérotation automatique. Pour aller plus loin, un Bot Telegram (290€ HT) vous notifie en temps réel à chaque demande de devis ou paiement reçu.",
        },
        {
          question: 'Travaillez-vous avec des plombiers en dehors de la PACA ?',
          answer: "Oui. Le présentiel est possible sur la Côte d'Azur (Vence, Nice, Antibes, Cannes, Grasse). Pour les plombiers ailleurs en France, tout se fait à distance : appel découverte, validation des maquettes, formation en visio.",
        },
      ]}
      localMentions={['Vence', 'Nice', 'Antibes', 'Cannes', 'Grasse', "toute la PACA et la France à distance"]}
      jsonLd={jsonLd}
    />
  );
}

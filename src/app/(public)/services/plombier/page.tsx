import type { Metadata } from 'next';
import LandingPage from '@/components/seo/LandingPage';

export const metadata: Metadata = {
  title: 'Site web et automatisation pour plombier',
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
      description:
        "Création de sites web, automatisation des devis et factures, notifications Telegram pour les urgences. Solutions sur mesure pour plombiers indépendants et plombiers-chauffagistes.",
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
      audience: { '@type': 'Audience', name: 'Plombiers, plombiers-chauffagistes, sanitaire' },
      offers: [
        {
          '@type': 'Offer',
          name: 'Pack Visibilité plombier',
          price: '690',
          priceCurrency: 'EUR',
          priceSpecification: { '@type': 'PriceSpecification', price: '690', priceCurrency: 'EUR', valueAddedTaxIncluded: false },
          availability: 'https://schema.org/InStock',
          deliveryLeadTime: { '@type': 'QuantitativeValue', value: '5', unitCode: 'DAY' },
        },
        {
          '@type': 'Offer',
          name: 'Site web professionnel plombier',
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
          name: "Pourquoi un plombier a-t-il besoin d'un site web ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Plus de 80% des particuliers cherchent un plombier sur Google avant d'appeler. Sans site web ni fiche Google Business, vous êtes invisible face aux concurrents qui ont fait l'effort. Un site simple permet aussi d'afficher votre zone d'intervention, vos spécialités (dépannage, chauffage, sanitaire) et de capter les urgences hors horaires.",
          },
        },
        {
          '@type': 'Question',
          name: 'Combien coûte un site web pour un plombier ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Le Pack Visibilité OptiPro à 690€ HT inclut un site 1 page, votre fiche Google Business optimisée et une formation. C'est suffisant pour la majorité des plombiers indépendants. Pour un site multi-pages avec présentation des services, comptez à partir de 2 900€ HT.",
          },
        },
        {
          '@type': 'Question',
          name: 'Comment automatiser mes devis et factures ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Pour la facturation, je recommande directement des outils SaaS éprouvés (Pennylane, Indy, Henrri) — pas la peine de réinventer la roue. Si votre besoin est plus spécifique (devis avec calculs métier complexes, intégration à un ERP, etc.), je le construis sur mesure dans le cadre d'un site professionnel ou d'une mission ops dédiée.",
          },
        },
        {
          '@type': 'Question',
          name: 'Travaillez-vous avec des plombiers en dehors de la PACA ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui. Le présentiel est possible sur la Côte d'Azur (Vence, Nice, Antibes, Cannes, Grasse). Pour les plombiers ailleurs en France, tout se fait à distance : appel découverte, validation des maquettes par lien, formation en visio. La majorité des projets se réalisent à 100% en remote.",
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
          title: 'État des lieux écrit (48h)',
          description: "Je vérifie votre fiche Google Business actuelle (si elle existe), votre référencement local et votre processus de devis. Vous recevez un diagnostic écrit en 48h avec recommandations priorisées.",
        },
        {
          step: '3',
          title: 'Construction sur mesure',
          description: "Site web, fichier de devis automatisé, ou bot Telegram — selon ce qui vous fait gagner le plus de temps. Maquette validée avant tout développement. Délai engagé contractuellement.",
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
          answer: "Le Pack Visibilité à 690€ HT inclut un site 1 page, votre fiche Google Business optimisée et une formation. C'est suffisant pour la majorité des plombiers indépendants. Pour un site multi-pages avec présentation des services, comptez à partir de 2 900€ HT.",
        },
        {
          question: 'Comment automatiser mes devis et factures ?',
          answer: "Pour la facturation, je recommande directement des outils SaaS éprouvés (Pennylane, Indy, Henrri) — pas la peine de réinventer la roue. Si votre besoin est plus spécifique (devis avec calculs métier complexes, intégration à un ERP, etc.), je le construis sur mesure dans le cadre d'un site professionnel ou d'une mission ops dédiée.",
        },
        {
          question: 'Travaillez-vous avec des plombiers en dehors de la PACA ?',
          answer: "Oui. Le présentiel est possible sur la Côte d'Azur (Vence, Nice, Antibes, Cannes, Grasse). Pour les plombiers ailleurs en France, tout se fait à distance : appel découverte, validation des maquettes, formation en visio.",
        },
      ]}
      localMentions={['Vence', 'Nice', 'Antibes', 'Cannes', 'Grasse', "toute la PACA et la France à distance"]}
      industryContext={{
        title: "La réalité du plombier indépendant en 2026 — pourquoi le digital n'est plus un luxe",
        intro:
          "Pendant 5 ans chez Factory, j'ai piloté 15 à 20 sous-traitants BTP au quotidien (plomberie, électricité, climatisation, second œuvre). J'ai vu de l'intérieur ce qui distingue les plombiers qui gagnent leur vie sereinement de ceux qui s'épuisent. Voici ce que j'ai appris, appliqué à la réalité d'un plombier indépendant des Alpes-Maritimes.",
        keyFacts: [
          {
            stat: '83 %',
            label: "des particuliers cherchent un plombier sur Google avant d'appeler",
            source: 'BVA Local Search 2024',
          },
          {
            stat: '6 à 8 h',
            label: "consacrées chaque semaine à l\'administratif (devis, factures, relances)",
            source: 'CAPEB',
          },
          {
            stat: '17 %',
            label: "des plombiers indépendants en PACA n'ont aucune fiche Google Business",
            source: 'Estimation propre, échantillon Vence-Nice 2026',
          },
          {
            stat: '42 €/h',
            label: "taux horaire moyen facturable d\'un plombier indépendant en France",
            source: 'INSEE 2024',
          },
        ],
        miniCases: [
          {
            situation:
              "Un plombier de Cagnes-sur-Mer, 8 ans d'activité, 2 chantiers par jour, fait ses devis le dimanche soir sur Excel. Il loupe régulièrement des urgences car les emails arrivent en mode silencieux.",
            result:
              "Pack Visibilité OptiPro + bot Telegram urgences (+500 €). Le téléphone notifie chaque demande de devis en temps réel. Gain estimé : 4 à 6 heures par semaine, et environ 15 % de chantiers urgents capturés en plus.",
          },
          {
            situation:
              "Un plombier-chauffagiste d'Antibes facture 60 % de son CA sur des installations de pompes à chaleur (PAC). Son site n'en parle nulle part — il rate tout le trafic SEO sur « installation pompe à chaleur Antibes ».",
            result:
              "Site multi-pages avec page dédiée PAC (technique, certifications RGE, MaPrimeRénov'). 3 mois après mise en ligne, 7 demandes de devis qualifiées par mois sur cette seule entrée.",
          },
        ],
        insight:
          "La spécificité d'un plombier sur la Côte d'Azur : la concurrence est forte dans les centres-villes (Nice, Cannes, Antibes), mais les arrière-pays (Vence, Saint-Paul, Tourrettes-sur-Loup, La Colle-sur-Loup) sont sous-couverts. Une fiche Google bien faite avec zone d'intervention précise vous fait remonter sur des recherches que vos concurrents ignorent.",
      }}
      jsonLd={jsonLd}
    />
  );
}

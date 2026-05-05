import type { Metadata } from 'next';
import AProposPageClient from './AProposPageClient';

export const metadata: Metadata = {
  title: 'À propos — Pierre Laurent | OptiPro',
  description:
    "Pierre Laurent, fondateur d'OptiPro — 10 ans en exploitation logistique : ERP déployé, 8 500 références gérées, 7 M€ ADV piloté. Aujourd'hui au service des artisans, TPE et PME logistique/transport/BTP.",
  alternates: {
    canonical: '/a-propos',
  },
  openGraph: {
    title: 'À propos — Pierre Laurent | OptiPro',
    description:
      "10 ans en exploitation logistique. ERP déployé, 8 500 références gérées, 7 M€ ADV piloté. Aujourd'hui au service des artisans, TPE et PME ops.",
    url: '/a-propos',
    type: 'profile',
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://www.opti-pro.fr/a-propos#pierre-laurent',
  name: 'Pierre Laurent',
  jobTitle: "Fondateur d'OptiPro · Consultant exploitation & IA opérationnelle",
  description:
    "Fondateur d'OptiPro. 10 ans en exploitation logistique : déploiement complet d'un ERP EBP chez Eddifis, 8 500 références gérées chez DBS Drive, 7 M€ ADV piloté chez Factory, dépôt événementiel chez GL Events Live.",
  url: 'https://www.opti-pro.fr/a-propos',
  telephone: '+33670259333',
  knowsLanguage: ['fr', 'en'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Vence',
    postalCode: '06140',
    addressRegion: 'Alpes-Maritimes',
    addressCountry: 'FR',
  },
  worksFor: { '@id': 'https://www.opti-pro.fr/#organization' },
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Afipe',
  },
  knowsAbout: [
    'Exploitation logistique',
    'Pilotage des flux',
    'Déploiement ERP (EBP)',
    'Coordination de sous-traitants',
    'Reporting opérationnel et KPIs',
    'Approvisionnement et gestion des stocks',
    'Logistique événementielle',
    'Automatisation des process métier',
    'IA appliquée aux opérations',
    'Création de filiale et structuration process',
    'Pilotage ADV (Administration des Ventes)',
    'Coordination artisans BTP',
    'Outils sur mesure pour TPE/PME',
  ],
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.opti-pro.fr' },
    { '@type': 'ListItem', position: 2, name: 'À propos', item: 'https://www.opti-pro.fr/a-propos' },
  ],
};

export default function AProposPage() {
  return (
    <>
      <script type="application/ld+json">{JSON.stringify(personJsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      <AProposPageClient />
    </>
  );
}

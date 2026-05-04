import type { Metadata } from 'next';
import AProposPageClient from './AProposPageClient';

export const metadata: Metadata = {
  title: 'À propos — Pierre Laurent | OptiPro',
  description:
    "Pierre Laurent, fondateur d'OptiPro — 10 ans de logistique et pilotage de projets au service des artisans et TPE. Basé à Vence (06).",
  alternates: {
    canonical: '/a-propos',
  },
  openGraph: {
    title: 'À propos — Pierre Laurent | OptiPro',
    description:
      "10 ans à piloter des process et coordonner des artisans — maintenant au service des TPE et indépendants. Basé à Vence (06).",
    url: '/a-propos',
    type: 'profile',
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://www.opti-pro.fr/a-propos#pierre-laurent',
  name: 'Pierre Laurent',
  jobTitle: "Fondateur d'OptiPro",
  description:
    "Fondateur d'OptiPro. 10 ans de logistique, pilotage de projets et déploiement d'outils ERP au service des artisans et TPE.",
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
    'Logistique',
    'Optimisation des process',
    'ERP',
    'Coordination artisans',
    'Pilotage de projets',
    'Automatisation',
    'Outils sur mesure',
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

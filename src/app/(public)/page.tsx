import type { Metadata } from 'next';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  title: { absolute: 'OptiPro — Conseil & développement sur mesure pour artisans et TPE | Vence' },
  description:
    "Création de sites web, automatisation, conseil exploitation — OptiPro accompagne artisans, TPE et PME logistique/transport/BTP. Basé à Vence, PACA. Premier appel gratuit.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'OptiPro — Conseil & développement sur mesure',
    description:
      'Je libère le temps des Artisans et TPE en optimisant et automatisant leurs processus.',
    url: 'https://www.opti-pro.fr',
    type: 'website',
    locale: 'fr_FR',
    images: [
      {
        url: '/og-image.jpg?v=2',
        width: 1200,
        height: 626,
        alt: 'OptiPro — Conseil & développement sur mesure',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OptiPro — Conseil & développement sur mesure',
    description:
      'Je libère le temps des Artisans et TPE en optimisant et automatisant leurs processus.',
    images: ['/og-image.jpg?v=2'],
  },
};

const homepageJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.opti-pro.fr/#webpage',
      url: 'https://www.opti-pro.fr/',
      name: 'OptiPro — Conseil & développement sur mesure pour artisans et TPE',
      description:
        "Création de sites web, automatisation, conseil exploitation pour artisans, TPE et PME logistique/transport/BTP. Basé à Vence, PACA. Premier appel gratuit.",
      isPartOf: { '@id': 'https://www.opti-pro.fr/#website' },
      about: { '@id': 'https://www.opti-pro.fr/#organization' },
      inLanguage: 'fr-FR',
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: 'https://www.opti-pro.fr/og-image.jpg?v=2',
        width: 1200,
        height: 626,
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.opti-pro.fr/#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Accueil',
          item: 'https://www.opti-pro.fr/',
        },
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json">{JSON.stringify(homepageJsonLd)}</script>
      <HomePageClient />
    </>
  );
}

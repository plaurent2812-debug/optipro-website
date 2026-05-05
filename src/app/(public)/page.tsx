import type { Metadata } from 'next';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  title: 'OptiPro — Conseil & développement sur mesure | Vence',
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

export default function HomePage() {
  return <HomePageClient />;
}

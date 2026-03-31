import type { Metadata } from 'next';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  title: 'OptiPro — Conseil & développement sur mesure | Vence',
  description:
    'Audit gratuit, création de sites web et applications sur mesure, automatisation — OptiPro accompagne artisans, TPE et indépendants à Vence et en région PACA.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'OptiPro — Conseil & développement sur mesure',
    description:
      'Audit gratuit, création de sites et web apps sur mesure, automatisation pour artisans, TPE et indépendants.',
    type: 'website',
    locale: 'fr_FR',
  },
};

export default function HomePage() {
  return <HomePageClient />;
}

import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.opti-pro.fr'),
  title: {
    default: 'OptiPro — Conseil & développement sur mesure',
    template: '%s | OptiPro',
  },
  description:
    'Audit, création de sites et web apps sur mesure, automatisation — OptiPro accompagne artisans, TPE et indépendants dans leur transformation numérique.',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'OptiPro',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.opti-pro.fr/#organization',
      name: 'OptiPro',
      description:
        'Conseil & développement sur mesure pour artisans, TPE et indépendants. Audit gratuit, création de sites web et applications, automatisation.',
      url: 'https://www.opti-pro.fr',
      email: 'p.laurent@opti-pro.fr',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Vence',
        postalCode: '06140',
        addressRegion: "Provence-Alpes-Côte d'Azur",
        addressCountry: 'FR',
      },
      areaServed: [
        {
          '@type': 'AdministrativeArea',
          name: "Provence-Alpes-Côte d'Azur",
        },
        {
          '@type': 'Country',
          name: 'France',
        },
      ],
      founder: {
        '@type': 'Person',
        name: 'Pierre Laurent',
        sameAs: 'https://www.linkedin.com/in/pierre-laurent-809410123',
      },
      image: 'https://www.opti-pro.fr/opengraph-image.png',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.opti-pro.fr/logo.png',
        width: 200,
        height: 60,
      },
      telephone: '+33670259333',
      sameAs: [
        'https://www.linkedin.com/in/pierre-laurent-809410123',
      ],
      availableLanguage: 'fr',
      priceRange: 'Sur devis',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.opti-pro.fr/#website',
      url: 'https://www.opti-pro.fr',
      name: 'OptiPro',
      publisher: { '@id': 'https://www.opti-pro.fr/#organization' },
      inLanguage: 'fr-FR',
    },
  ],
};

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <Header />
      <PageTransition>{children}</PageTransition>
      <Footer />
    </ThemeProvider>
  );
}

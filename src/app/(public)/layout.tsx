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
  other: {
    'geo.region': 'FR-06',
    'geo.placename': 'Vence',
    'geo.position': '43.72226;7.11382',
    'ICBM': '43.72226, 7.11382',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': 'https://www.opti-pro.fr/#organization',
      name: 'OptiPro',
      description:
        'Conseil & développement sur mesure pour artisans, TPE et indépendants. Premier appel gratuit, création de sites web et applications, automatisation.',
      url: 'https://www.opti-pro.fr',
      email: 'p.laurent@opti-pro.fr',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Vence (sur rendez-vous)',
        addressLocality: 'Vence',
        postalCode: '06140',
        addressRegion: "Provence-Alpes-Côte d'Azur",
        addressCountry: 'FR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 43.72226,
        longitude: 7.11382,
      },
      areaServed: [
        { '@type': 'City', name: 'Vence' },
        { '@type': 'City', name: 'Nice' },
        { '@type': 'City', name: 'Antibes' },
        { '@type': 'City', name: 'Cannes' },
        { '@type': 'City', name: 'Grasse' },
        { '@type': 'City', name: 'Mougins' },
        { '@type': 'City', name: 'Cagnes-sur-Mer' },
        { '@type': 'City', name: 'Saint-Laurent-du-Var' },
        { '@type': 'AdministrativeArea', name: 'Alpes-Maritimes' },
        { '@type': 'AdministrativeArea', name: "Provence-Alpes-Côte d'Azur" },
        { '@type': 'Country', name: 'France' },
      ],
      serviceArea: {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: 43.72226,
          longitude: 7.11382,
        },
        geoRadius: '50000',
      },
      founder: {
        '@type': 'Person',
        '@id': 'https://www.opti-pro.fr/a-propos#pierre-laurent',
        name: 'Pierre Laurent',
        url: 'https://www.opti-pro.fr/a-propos',
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
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
      ],
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

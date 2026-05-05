import type { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact — Réserver un premier appel',
  description:
    "Premier appel de 30 min gratuit pour parler de votre situation. Pierre Laurent vous recontacte sous 24h. Basé à Vence (06).",
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contactez OptiPro — Premier appel gratuit',
    description:
      "30 min pour parler de votre situation. Réponse sous 24h.",
  },
};

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.opti-pro.fr' },
        { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://www.opti-pro.fr/contact' },
      ],
    },
    {
      '@type': 'ContactPage',
      '@id': 'https://www.opti-pro.fr/contact#webpage',
      url: 'https://www.opti-pro.fr/contact',
      name: 'Contacter OptiPro — Pierre Laurent',
      isPartOf: { '@id': 'https://www.opti-pro.fr/#website' },
      about: { '@id': 'https://www.opti-pro.fr/#organization' },
      inLanguage: 'fr-FR',
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json">{JSON.stringify(contactJsonLd)}</script>
      <ContactPageClient />
    </>
  );
}

import type { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact — Demandez votre audit gratuit',
  description:
    'Contactez OptiPro pour un audit gratuit de vos outils et process. Pierre Laurent vous recontacte sous 24h. Basé à Vence (06).',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contactez OptiPro — Audit gratuit',
    description:
      'Demandez votre audit gratuit. Réponse garantie sous 24h.',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.opti-pro.fr' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://www.opti-pro.fr/contact' },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      <ContactPageClient />
    </>
  );
}

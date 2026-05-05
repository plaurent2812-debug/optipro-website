import type { Metadata } from 'next';
import Image from 'next/image';
import ServiceStep from '@/components/ui/ServiceStep';
import AuditCta from '@/components/ui/AuditCta';
import { services } from '@/data/services';
import { offerCategories } from '@/data/offers';
import OffersSection from './OffersSection';

export const metadata: Metadata = {
  title: 'Services & tarifs — Création web, automatisation | OptiPro',
  description:
    'Nos offres claires pour artisans, TPE et projets structurants : sites sur mesure, automatisations, IA et accompagnement. Prix affichés pour les petites prestations, sur devis pour les projets complexes.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Services & tarifs OptiPro — Artisans, TPE, projets sur mesure',
    description:
      'Des formules claires selon votre taille et votre besoin. Prix affichés, audit approfondi pour les projets complexes.',
  },
};

const offerCatalogJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'OfferCatalog',
  name: 'Catalogue des services OptiPro',
  itemListElement: offerCategories.flatMap((cat) =>
    cat.offers.map((offer) => ({
      '@type': 'Offer',
      name: offer.name,
      description: offer.description,
      category: cat.title,
      areaServed: 'FR',
      seller: { '@id': 'https://www.opti-pro.fr/#organization' },
    })),
  ),
};

const demarcheJsonLd = {
  '@context': 'https://schema.org',
  '@graph': services.map((s) => ({
    '@type': 'Service',
    name: s.title,
    description: s.longDescription,
    provider: { '@id': 'https://www.opti-pro.fr/#organization' },
    areaServed: 'FR',
  })),
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Les prix sont-ils affichés ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui pour les offres artisans (Pack Visibilité 890€ HT, Site vitrine pro dès 2 400€ HT). Pour les missions PME ops et projets sur mesure, le prix exact dépend de la complexité réelle — j'affiche un point de départ (\"à partir de X€\") et le devis précis est cadré après le premier appel découverte gratuit.",
      },
    },
    {
      '@type': 'Question',
      name: 'Comment se passe un projet PME ops ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Premier appel découverte gratuit (30 min). Si on peut bosser ensemble, on enchaîne sur un audit ops complet (à partir de 1 500€ HT, 1 semaine, livrable écrit). À partir de cet audit, je vous remets un devis précis pour la suite (automatisation reporting, refonte process sous-traitants, etc.).",
      },
    },
    {
      '@type': 'Question',
      name: 'Travaillez-vous uniquement à Vence ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Non, OptiPro accompagne des clients partout en France. Basé à Vence (06), Pierre travaille aussi bien en local (présentiel sur la Côte d\'Azur) qu\'à 100% à distance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quels types de clients accompagnez-vous ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Deux cibles principales. (1) Artisans, indépendants et TPE qui veulent une présence en ligne sérieuse (Pack Visibilité, Site vitrine pro). (2) PME logistique, transport, BTP, distribution qui veulent structurer leur exploitation (audit ops, automatisation reporting, refonte process sous-traitants).",
      },
    },
    {
      '@type': 'Question',
      name: 'Est-ce que je garde la main sur mes outils après le projet ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui. Chaque projet inclut une formation et une documentation. Vous êtes autonome sur vos outils. Pour ceux qui veulent juste de la sérénité technique, je propose une maintenance technique à 90€/mois HT (hébergement, mises à jour, sécurité, support 48h). Les évolutions ponctuelles sont facturées à 80€/h HT au cas par cas.",
      },
    },
  ],
};

export default function ServicesPage() {
  return (
    <main style={{ paddingTop: '6rem' }}>
      <script type="application/ld+json">{JSON.stringify(offerCatalogJsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify(demarcheJsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.opti-pro.fr' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.opti-pro.fr/services' },
        ],
      })}</script>

      {/* Hero */}
      <section style={{ padding: '3rem 0 4rem', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <div
            style={{
              display: 'inline-block',
              padding: '0.4rem 1rem',
              background: 'var(--accent-light)',
              color: 'var(--accent)',
              borderRadius: '999px',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.02em',
              marginBottom: '1.5rem',
              textTransform: 'uppercase',
            }}
          >
            Services &amp; tarifs
          </div>
          <h1
            style={{
              fontSize: '2.75rem',
              fontWeight: 800,
              color: 'var(--primary)',
              marginBottom: '1.25rem',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
            }}
          >
            Des solutions adaptées à votre réalité, pas à mes templates
          </h1>
          <p
            style={{
              color: 'var(--secondary)',
              fontSize: '1.15rem',
              lineHeight: 1.7,
            }}
          >
            Artisan solo, TPE structurée ou projet de transformation complète —
            chaque situation appelle une réponse différente. Voici comment
            j&apos;accompagne chacune.
          </p>
        </div>
      </section>

      {/* Offres */}
      <OffersSection />

      {/* Démarche */}
      <section style={{ padding: '5rem 0 3rem' }}>
        <div className="container">
          <div style={{ maxWidth: '720px', margin: '0 auto 3rem', textAlign: 'center' }}>
            <h2
              style={{
                fontSize: '2.25rem',
                fontWeight: 800,
                color: 'var(--primary)',
                letterSpacing: '-0.03em',
                marginBottom: '1rem',
                lineHeight: 1.15,
              }}
            >
              Notre démarche
            </h2>
            <p
              style={{
                fontSize: '1.1rem',
                color: 'var(--secondary)',
                lineHeight: 1.6,
              }}
            >
              Une méthode claire en 4 étapes, adaptée à chaque projet.
            </p>
          </div>
          <div className="timeline">
            {services.map((s) => (
              <ServiceStep key={s.id} step={s} detailed />
            ))}
          </div>
        </div>
      </section>

      {/* Qui est Pierre */}
      <section style={{ padding: '3rem 0 4rem', background: 'var(--background)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="pierre-section">
            <div className="pierre-avatar" style={{ width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
              <Image
                src="/pierre-laurent.png"
                alt="Pierre Laurent, fondateur d'OptiPro"
                width={80}
                height={80}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="pierre-content">
              <h3>Pierre Laurent</h3>
              <p style={{ marginBottom: '0.75rem' }}>
                Fondateur d&apos;OptiPro. 10 ans à optimiser des process dans des
                entreprises avant de mettre cette expérience au service des
                artisans, TPE et indépendants.
              </p>
              <p>
                Un interlocuteur unique du début à la fin. Pas de commercial, pas
                de sous-traitance — c&apos;est moi qui analyse, conçois et
                développe vos outils.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '2rem 0 5rem' }}>
        <div className="container">
          <AuditCta />
        </div>
      </section>
    </main>
  );
}

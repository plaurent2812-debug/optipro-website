import type { Metadata } from 'next';
import { loadMagnet } from '@/lib/magnets';
import MagnetView from '@/components/ressources/MagnetView';
import NewsletterForm from '@/components/newsletter/NewsletterForm';

export const metadata: Metadata = {
  title:
    "Diagnostic 30 min — 10 process à automatiser dans une PME logistique / transport / BTP",
  description:
    "Guide gratuit pour responsables d'exploitation : 10 process opérationnels (reporting, devis transporteurs, sous-traitants…) avec prompts testés, ordres de grandeur de gain et mises en garde.",
  alternates: { canonical: '/ressources/diagnostic-pme' },
  openGraph: {
    title:
      'Guide gratuit — 10 process à automatiser dans une PME logistique / transport / BTP',
    description:
      "Reporting, devis transporteurs, sous-traitants, planning, hausses tarifaires… avec les prompts testés.",
    url: '/ressources/diagnostic-pme',
    type: 'article',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.opti-pro.fr' },
        { '@type': 'ListItem', position: 2, name: 'Ressources', item: 'https://www.opti-pro.fr/ressources' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Diagnostic 30 min PME',
          item: 'https://www.opti-pro.fr/ressources/diagnostic-pme',
        },
      ],
    },
    {
      '@type': 'Article',
      '@id': 'https://www.opti-pro.fr/ressources/diagnostic-pme#article',
      headline:
        'Diagnostic 30 min — 10 process à automatiser dans une PME logistique / transport / BTP',
      author: { '@id': 'https://www.opti-pro.fr/a-propos#pierre-laurent' },
      publisher: { '@id': 'https://www.opti-pro.fr/#organization' },
      inLanguage: 'fr-FR',
      url: 'https://www.opti-pro.fr/ressources/diagnostic-pme',
    },
  ],
};

export default async function DiagnosticPMEPage() {
  const magnet = await loadMagnet('diagnostic-pme');

  return (
    <main style={{ paddingTop: '5rem' }}>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>

      {/* Hero */}
      <section style={{ padding: '3rem 0 2rem' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <span
            style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              background: 'rgba(249, 115, 22, 0.08)',
              border: '1px solid rgba(249, 115, 22, 0.2)',
              borderRadius: '999px',
              color: 'var(--accent)',
              fontSize: '0.85rem',
              fontWeight: 600,
              marginBottom: '1.5rem',
              letterSpacing: '0.02em',
            }}
          >
            Guide gratuit · PDF
          </span>
          <h1
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              fontWeight: 800,
              color: 'var(--primary)',
              marginBottom: '1.25rem',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
            }}
          >
            {magnet.title}
          </h1>
          <p
            style={{
              color: 'var(--secondary)',
              fontSize: '1.1rem',
              lineHeight: 1.7,
            }}
          >
            10 process opérationnels passés en revue : reporting hebdo, comparaison
            de devis transporteurs, suivi documentaire sous-traitants, planning
            d&apos;affrètement, hausses tarifaires… Avec les prompts testés, les
            ordres de grandeur de gain, et les mises en garde indispensables.
          </p>
        </div>
      </section>

      {/* Form en haut */}
      <section style={{ padding: '1rem 0 3rem' }}>
        <div className="container">
          <NewsletterForm
            source="magnet-pme-top"
            magnet="pme"
            defaultSector="logistique"
            variant="card"
            title="Recevez le guide en PDF"
            description="Entrez votre email, confirmez l'inscription, recevez le PDF dans la foulée. Newsletter Ops & IA en bonus chaque jeudi. Désinscription en 1 clic."
          />
        </div>
      </section>

      {/* Aperçu HTML du contenu */}
      <section style={{ padding: '3rem 0', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2
            style={{
              fontSize: '1.3rem',
              fontWeight: 700,
              color: 'var(--primary)',
              marginBottom: '1.5rem',
              textAlign: 'center',
            }}
          >
            Aperçu du contenu
          </h2>
          <MagnetView magnet={magnet} />
        </div>
      </section>

      {/* Form en bas — réminder */}
      <section style={{ padding: '3rem 0', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <NewsletterForm
            source="magnet-pme-bottom"
            magnet="pme"
            defaultSector="logistique"
            variant="card"
            title="Téléchargez le PDF"
            description="Le contenu ci-dessus en version PDF mise en page, à garder sous le coude. Recevez-le par email en moins d'une minute."
          />
        </div>
      </section>
    </main>
  );
}

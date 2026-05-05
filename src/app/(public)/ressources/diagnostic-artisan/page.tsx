import type { Metadata } from 'next';
import { loadMagnet } from '@/lib/magnets';
import MagnetView from '@/components/ressources/MagnetView';
import NewsletterForm from '@/components/newsletter/NewsletterForm';

export const metadata: Metadata = {
  title:
    "Diagnostic 30 min — 10 tâches admin que l'IA fait à votre place quand vous êtes artisan",
  description:
    "Guide gratuit pour artisans, indépendants et TPE : 10 tâches admin (devis, relance facture, avis Google, fiche My Business…) avec les prompts copiables pour les automatiser.",
  alternates: { canonical: '/ressources/diagnostic-artisan' },
  openGraph: {
    title:
      "Guide gratuit — 10 tâches admin que l'IA fait à votre place quand vous êtes artisan",
    description:
      'Devis, relance facture, avis Google, fiche My Business, CGV, contrats. 10 prompts copiables.',
    url: '/ressources/diagnostic-artisan',
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
          name: 'Diagnostic 30 min Artisan',
          item: 'https://www.opti-pro.fr/ressources/diagnostic-artisan',
        },
      ],
    },
    {
      '@type': 'Article',
      '@id': 'https://www.opti-pro.fr/ressources/diagnostic-artisan#article',
      headline:
        "Diagnostic 30 min — 10 tâches admin que l'IA fait à votre place quand vous êtes artisan",
      author: { '@id': 'https://www.opti-pro.fr/a-propos#pierre-laurent' },
      publisher: { '@id': 'https://www.opti-pro.fr/#organization' },
      inLanguage: 'fr-FR',
      url: 'https://www.opti-pro.fr/ressources/diagnostic-artisan',
    },
  ],
};

export default async function DiagnosticArtisanPage() {
  const magnet = await loadMagnet('diagnostic-artisan');

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
            10 tâches admin qui reviennent toutes les semaines chez les artisans
            indépendants : devis depuis 3 lignes de notes, relance facture, avis
            Google, fiche My Business, CGV, contrats. Chaque tâche est documentée
            avec le prompt copiable et les variantes.
          </p>
        </div>
      </section>

      {/* Form en haut */}
      <section style={{ padding: '1rem 0 3rem' }}>
        <div className="container">
          <NewsletterForm
            source="magnet-artisan-top"
            magnet="artisan"
            defaultSector="artisan-tpe"
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

      {/* Form en bas */}
      <section style={{ padding: '3rem 0', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <NewsletterForm
            source="magnet-artisan-bottom"
            magnet="artisan"
            defaultSector="artisan-tpe"
            variant="card"
            title="Téléchargez le PDF"
            description="Le contenu ci-dessus en version PDF mise en page, à garder sous le coude. Recevez-le par email en moins d'une minute."
          />
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import NewsletterForm from '@/components/newsletter/NewsletterForm';

export const metadata: Metadata = {
  title: 'Newsletter Ops & IA — OptiPro',
  description:
    "Chaque jeudi : un cas terrain ops, un prompt testé, une mise en garde. Pour artisans, TPE et PME logistique/transport/BTP. Lisible en 5 minutes.",
  alternates: { canonical: '/newsletter' },
  openGraph: {
    title: 'Newsletter Ops & IA — OptiPro',
    description:
      'Chaque jeudi : un cas terrain ops, un prompt testé, une mise en garde. Lisible en 5 minutes.',
    url: '/newsletter',
    type: 'website',
  },
};

export default function NewsletterPage() {
  return (
    <main style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
      <section style={{ padding: '3rem 0 2rem' }}>
        <div className="container" style={{ maxWidth: '720px', textAlign: 'center' }}>
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
            Newsletter hebdo · gratuite
          </span>
          <h1
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.6rem)',
              fontWeight: 800,
              color: 'var(--primary)',
              marginBottom: '1.25rem',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
            }}
          >
            Ops &amp; IA — un email par jeudi, lisible en 5 minutes
          </h1>
          <p
            style={{
              color: 'var(--secondary)',
              fontSize: '1.1rem',
              lineHeight: 1.7,
              marginBottom: '2rem',
            }}
          >
            Un cas terrain. Un prompt testé. Une mise en garde. Pour artisans, TPE
            et PME logistique/transport/BTP. Pas de blabla, pas de pub. Désinscription
            en 1 clic.
          </p>
        </div>
      </section>

      <section style={{ padding: '0 0 4rem' }}>
        <div className="container">
          <NewsletterForm source="newsletter-page" variant="card" />
        </div>
      </section>

      <section style={{ padding: '3rem 0', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 800,
              color: 'var(--primary)',
              marginBottom: '1.5rem',
              textAlign: 'center',
            }}
          >
            Vous préférez démarrer par un guide complet ?
          </h2>
          <p
            style={{
              color: 'var(--secondary)',
              textAlign: 'center',
              fontSize: '1rem',
              marginBottom: '2rem',
            }}
          >
            Deux guides PDF gratuits — choisissez celui qui correspond à votre activité :
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.25rem',
            }}
          >
            <Link
              href="/ressources/diagnostic-pme"
              style={{
                display: 'block',
                padding: '1.5rem',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                textDecoration: 'none',
                transition: 'border-color 0.15s, transform 0.15s',
              }}
            >
              <div
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontWeight: 700,
                  marginBottom: '0.5rem',
                }}
              >
                Pour les PME ops
              </div>
              <h3
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'var(--primary)',
                  marginBottom: '0.5rem',
                }}
              >
                10 process à automatiser dans une PME logistique / transport / BTP
              </h3>
              <p
                style={{
                  color: 'var(--secondary)',
                  fontSize: '0.9rem',
                  lineHeight: 1.6,
                }}
              >
                Reporting hebdo, comparaison de devis transporteurs, suivi documentaire
                sous-traitants… Avec les prompts testés et les mises en garde.
              </p>
            </Link>
            <Link
              href="/ressources/diagnostic-artisan"
              style={{
                display: 'block',
                padding: '1.5rem',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                textDecoration: 'none',
                transition: 'border-color 0.15s, transform 0.15s',
              }}
            >
              <div
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontWeight: 700,
                  marginBottom: '0.5rem',
                }}
              >
                Pour les artisans
              </div>
              <h3
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'var(--primary)',
                  marginBottom: '0.5rem',
                }}
              >
                10 tâches admin que l&apos;IA fait à votre place
              </h3>
              <p
                style={{
                  color: 'var(--secondary)',
                  fontSize: '0.9rem',
                  lineHeight: 1.6,
                }}
              >
                Devis depuis 3 lignes de notes, relance facture, avis Google, fiche
                Google My Business. 10 prompts copiables.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

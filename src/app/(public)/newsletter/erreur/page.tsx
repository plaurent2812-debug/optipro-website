import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Erreur de confirmation — OptiPro',
  description: 'Le lien de confirmation est invalide ou expiré.',
  robots: { index: false, follow: false },
};

interface Props {
  searchParams: Promise<{ raison?: string }>;
}

const RAISON_MESSAGES: Record<string, string> = {
  'token-manquant': 'Le lien de confirmation est incomplet.',
  'token-invalide': 'Le lien de confirmation est invalide ou a déjà été utilisé.',
  'db-error': "Erreur technique côté serveur. Réessayez dans quelques instants.",
};

export default async function NewsletterErreurPage({ searchParams }: Props) {
  const { raison } = await searchParams;
  const message =
    (raison && RAISON_MESSAGES[raison]) ??
    'Une erreur est survenue lors de la confirmation.';

  return (
    <main style={{ paddingTop: '7rem', paddingBottom: '6rem' }}>
      <section style={{ padding: '2rem 0' }}>
        <div
          className="container"
          style={{ maxWidth: '600px', textAlign: 'center' }}
        >
          <h1
            style={{
              fontSize: '2rem',
              fontWeight: 800,
              color: 'var(--primary)',
              marginBottom: '1rem',
              letterSpacing: '-0.02em',
            }}
          >
            Confirmation impossible
          </h1>
          <p
            style={{
              color: 'var(--secondary)',
              fontSize: '1.05rem',
              lineHeight: 1.7,
              marginBottom: '1rem',
            }}
          >
            {message}
          </p>
          <p
            style={{
              color: 'var(--muted)',
              fontSize: '0.95rem',
              marginBottom: '2rem',
            }}
          >
            Pour ré-essayer ou pour récupérer votre guide, écrivez-moi à{' '}
            <a
              href="mailto:p.laurent@opti-pro.fr"
              style={{ color: 'var(--accent)' }}
            >
              p.laurent@opti-pro.fr
            </a>
            .
          </p>
          <Link
            href="/newsletter"
            style={{
              display: 'inline-block',
              padding: '0.85rem 1.5rem',
              background: 'var(--accent)',
              color: 'white',
              fontWeight: 700,
              borderRadius: '8px',
              textDecoration: 'none',
            }}
          >
            Retour à la page newsletter
          </Link>
        </div>
      </section>
    </main>
  );
}

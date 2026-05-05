import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Inscription confirmée — OptiPro',
  description: 'Votre inscription à la newsletter OptiPro est confirmée.',
  robots: { index: false, follow: false },
};

interface Props {
  searchParams: Promise<{ deja?: string }>;
}

export default async function ConfirmePage({ searchParams }: Props) {
  const { deja } = await searchParams;
  const isAlready = deja === '1';

  return (
    <main style={{ paddingTop: '7rem', paddingBottom: '6rem' }}>
      <section style={{ padding: '2rem 0' }}>
        <div
          className="container"
          style={{ maxWidth: '600px', textAlign: 'center' }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              background: 'rgba(34, 197, 94, 0.12)',
              color: '#16a34a',
              fontSize: '2.5rem',
              fontWeight: 800,
              marginBottom: '1.5rem',
            }}
          >
            ✓
          </div>
          <h1
            style={{
              fontSize: '2rem',
              fontWeight: 800,
              color: 'var(--primary)',
              marginBottom: '1rem',
              letterSpacing: '-0.02em',
            }}
          >
            {isAlready
              ? 'Vous êtes déjà inscrit'
              : 'Inscription confirmée'}
          </h1>
          <p
            style={{
              color: 'var(--secondary)',
              fontSize: '1.05rem',
              lineHeight: 1.7,
              marginBottom: '1.5rem',
            }}
          >
            {isAlready
              ? "Votre inscription à la newsletter OptiPro était déjà confirmée. Le prochain numéro arrivera jeudi prochain."
              : "Merci. Si vous avez demandé un guide, il vient de partir vers votre boîte mail (vérifiez vos spams si besoin). Sinon, le prochain numéro de la newsletter arrivera jeudi prochain."}
          </p>
          <p
            style={{
              color: 'var(--muted)',
              fontSize: '0.95rem',
              marginBottom: '2.5rem',
            }}
          >
            En attendant, jetez un œil aux ressources du blog ou à la page services.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Link
              href="/blog"
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
              Lire les articles
            </Link>
            <Link
              href="/services"
              style={{
                display: 'inline-block',
                padding: '0.85rem 1.5rem',
                color: 'var(--primary)',
                fontWeight: 600,
                border: '1px solid var(--border)',
                borderRadius: '8px',
                textDecoration: 'none',
              }}
            >
              Voir les services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

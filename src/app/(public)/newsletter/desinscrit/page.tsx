import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Désinscription confirmée — OptiPro',
  description: 'Votre désinscription de la newsletter OptiPro est confirmée.',
  robots: { index: false, follow: false },
};

interface Props {
  searchParams: Promise<{ erreur?: string }>;
}

export default async function DesinscritPage({ searchParams }: Props) {
  const { erreur } = await searchParams;
  const hasError = erreur === '1';

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
            {hasError ? 'Lien invalide' : 'Désinscription confirmée'}
          </h1>
          <p
            style={{
              color: 'var(--secondary)',
              fontSize: '1.05rem',
              lineHeight: 1.7,
              marginBottom: '2rem',
            }}
          >
            {hasError ? (
              <>
                Le lien de désinscription est invalide ou expiré. Écrivez à{' '}
                <a
                  href="mailto:p.laurent@opti-pro.fr"
                  style={{ color: 'var(--accent)' }}
                >
                  p.laurent@opti-pro.fr
                </a>{' '}
                et je désinscris votre adresse manuellement.
              </>
            ) : (
              <>
                Vous ne recevrez plus la newsletter OptiPro. Vos coordonnées
                seront supprimées de notre base sous 30 jours conformément au
                RGPD.
              </>
            )}
          </p>
          <Link
            href="/"
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
            Retour à l&apos;accueil
          </Link>
        </div>
      </section>
    </main>
  );
}

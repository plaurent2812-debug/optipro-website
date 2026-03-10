import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div style={{
      minHeight: 'calc(100vh - var(--header-height) - 300px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '4rem 1.5rem',
    }}>
      <div style={{
        fontSize: '6rem',
        fontWeight: '800',
        color: 'var(--accent)',
        lineHeight: '1',
        marginBottom: '1rem',
      }}>
        404
      </div>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--primary)' }}>
        Page introuvable
      </h1>
      <p style={{ color: 'var(--muted)', marginBottom: '2rem', maxWidth: '500px', fontSize: '1.125rem' }}>
        La page que vous cherchez n&apos;existe pas ou a été déplacée.
      </p>
      <Button href="/" variant="primary">
        Retour à l&apos;accueil
      </Button>
    </div>
  );
}

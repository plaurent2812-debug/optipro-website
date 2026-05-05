'use client';

import { useState, useTransition } from 'react';
import styles from './NewsletterForm.module.css';

export type NewsletterSector =
  | 'transport'
  | 'btp'
  | 'logistique'
  | 'artisan-tpe'
  | 'autre';

export type NewsletterMagnet = 'pme' | 'artisan';

interface Props {
  /** Source d'inscription (pour le tracking) — ex: 'home', 'blog-footer', 'article-end', 'magnet-pme' */
  source: string;
  /** Magnet associé : 'pme' = guide PME logistique, 'artisan' = guide artisan/TPE */
  magnet?: NewsletterMagnet;
  /** Secteur pré-sélectionné (utile sur les pages /ressources/) */
  defaultSector?: NewsletterSector;
  /** Variante visuelle */
  variant?: 'inline' | 'card';
  /** Titre custom (sinon défaut) */
  title?: string;
  /** Description custom (sinon défaut) */
  description?: string;
}

const SECTOR_LABELS: Record<NewsletterSector, string> = {
  transport: 'Transport',
  btp: 'BTP',
  logistique: 'Logistique',
  'artisan-tpe': 'Artisan / TPE',
  autre: 'Autre',
};

export default function NewsletterForm({
  source,
  magnet,
  defaultSector,
  variant = 'card',
  title,
  description,
}: Props) {
  const [email, setEmail] = useState('');
  const [sector, setSector] = useState<NewsletterSector>(
    defaultSector ?? 'artisan-tpe',
  );
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'already' | 'error'
  >('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [isPending, startTransition] = useTransition();

  const defaultTitle = magnet
    ? 'Recevez le guide gratuitement'
    : 'Newsletter Ops & IA';
  const defaultDescription = magnet
    ? 'Entrez votre email, confirmez votre inscription, et recevez le guide en PDF dans votre boîte mail. Désinscription en 1 clic, jamais de spam.'
    : 'Chaque jeudi : un cas terrain, un prompt, une mise en garde. Lisible en 5 minutes. Pas de spam, désinscription en 1 clic.';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    if (!consent) {
      setErrorMsg('Vous devez accepter pour recevoir les emails.');
      return;
    }
    setStatus('loading');

    startTransition(async () => {
      try {
        const res = await fetch('/api/newsletter/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email,
            sector,
            source,
            magnet,
            consent,
          }),
        });
        const data = await res.json();
        if (!res.ok) {
          setStatus('error');
          setErrorMsg(data.error ?? 'Erreur — réessayez dans quelques instants.');
          return;
        }
        if (data.alreadyConfirmed) {
          setStatus('already');
          return;
        }
        setStatus('success');
      } catch {
        setStatus('error');
        setErrorMsg('Erreur réseau. Vérifiez votre connexion et réessayez.');
      }
    });
  };

  if (status === 'success') {
    return (
      <div className={`${styles.root} ${styles[variant]} ${styles.success}`}>
        <div className={styles.successIcon}>✓</div>
        <h3 className={styles.successTitle}>C&apos;est presque bon</h3>
        <p className={styles.successText}>
          Un email de confirmation vient de partir vers <strong>{email}</strong>.
          Cliquez sur le lien dedans pour valider votre inscription{magnet ? ' et recevoir le guide' : ''}.
        </p>
        <p className={styles.successHint}>
          Pensez à vérifier vos spams si vous ne le voyez pas dans 2-3 minutes.
        </p>
      </div>
    );
  }

  if (status === 'already') {
    return (
      <div className={`${styles.root} ${styles[variant]} ${styles.success}`}>
        <div className={styles.successIcon}>✓</div>
        <h3 className={styles.successTitle}>Vous êtes déjà inscrit</h3>
        <p className={styles.successText}>
          L&apos;adresse <strong>{email}</strong> est déjà confirmée dans la newsletter.
          Le prochain numéro arrivera jeudi prochain.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.root} ${styles[variant]}`}
    >
      <h3 className={styles.title}>{title ?? defaultTitle}</h3>
      <p className={styles.description}>{description ?? defaultDescription}</p>

      <div className={styles.field}>
        <label htmlFor={`nl-email-${source}`} className={styles.label}>
          Email professionnel
        </label>
        <input
          id={`nl-email-${source}`}
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="prenom@entreprise.fr"
          className={styles.input}
          disabled={status === 'loading' || isPending}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor={`nl-sector-${source}`} className={styles.label}>
          Votre secteur
        </label>
        <select
          id={`nl-sector-${source}`}
          value={sector}
          onChange={(e) => setSector(e.target.value as NewsletterSector)}
          className={styles.input}
          disabled={status === 'loading' || isPending}
        >
          {Object.entries(SECTOR_LABELS).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <label className={styles.consent}>
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          disabled={status === 'loading' || isPending}
        />
        <span>
          J&apos;accepte de recevoir la newsletter Ops &amp; IA d&apos;OptiPro. Je peux me désinscrire à tout moment via le lien dans chaque email.
        </span>
      </label>

      {errorMsg && <p className={styles.error}>{errorMsg}</p>}

      <button
        type="submit"
        disabled={status === 'loading' || isPending || !consent || !email}
        className={styles.submit}
      >
        {status === 'loading' || isPending
          ? 'Envoi…'
          : magnet
            ? 'Recevoir le guide'
            : "S'inscrire"}
      </button>

      <p className={styles.legal}>
        Vos données sont traitées conformément à notre{' '}
        <a href="/confidentialite">politique de confidentialité</a>. Aucune
        revente. Aucun spam.
      </p>
    </form>
  );
}

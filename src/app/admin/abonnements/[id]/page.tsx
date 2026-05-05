import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import styles from '../../clients/clients.module.css'
import { ABONNEMENT_STATUT_LABELS, PERIODICITE_LABELS, formatDate, formatMontant } from '@/lib/utils'
import AbonnementActions from './AbonnementActions'

export const dynamic = 'force-dynamic'

export default async function AbonnementDetailPage(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params
  const supabase = await createClient()

  const { data: abo, error } = await supabase
    .from('abonnements')
    .select('*, clients(*)')
    .eq('id', id)
    .single()

  if (error || !abo) notFound()

  const { data: factures } = await supabase
    .from('factures')
    .select('id, numero, statut, date_emission, montant_ht')
    .eq('abonnement_id', id)
    .order('date_emission', { ascending: false })

  const client = abo.clients as { id: string; prenom: string | null; nom: string; entreprise: string | null } | null

  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <div>
          <Link href="/admin/abonnements" className={styles.actionBtn} style={{ marginBottom: '1rem' }}>
            ← Retour aux abonnements
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.25rem', flexWrap: 'wrap' }}>
            <h1 className={styles.title}>{abo.nom}</h1>
            <span className={`${styles.badge} ${abo.statut === 'actif' ? styles['badge--client_actif'] : styles['badge--client_inactif']}`}>
              {ABONNEMENT_STATUT_LABELS[abo.statut] ?? abo.statut}
            </span>
          </div>
          {client && (
            <p className={styles.subtitle}>
              Pour : <Link href={`/admin/clients/${client.id}`} style={{ color: '#4F46E5', fontWeight: 600, textDecoration: 'none' }}>
                {client.prenom} {client.nom} {client.entreprise && `(${client.entreprise})`}
              </Link>
            </p>
          )}
        </div>

        <AbonnementActions
          abonnementId={abo.id}
          statut={abo.statut}
        />
      </div>

      <div className={styles.formGrid}>
        <div className={styles.card} style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', margin: 0, paddingBottom: '1rem', borderBottom: '1px solid #E5E7EB' }}>
            Détails du contrat
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: '1rem', fontSize: '0.95rem' }}>
            <strong style={{ color: '#6B7280' }}>Montant :</strong>
            <span style={{ color: '#111827', fontWeight: 700 }}>
              {formatMontant(abo.montant_mensuel_ht)} HT / {PERIODICITE_LABELS[abo.periodicite] ?? abo.periodicite}
            </span>

            <strong style={{ color: '#6B7280' }}>Périodicité :</strong>
            <span style={{ color: '#374151' }}>{PERIODICITE_LABELS[abo.periodicite] ?? abo.periodicite}</span>

            <strong style={{ color: '#6B7280' }}>Démarré le :</strong>
            <span style={{ color: '#374151' }}>{formatDate(abo.date_debut)}</span>

            <strong style={{ color: '#6B7280' }}>Terminé le :</strong>
            <span style={{ color: '#374151' }}>{formatDate(abo.date_fin) || '—'}</span>

            <strong style={{ color: '#6B7280' }}>Prochaine facture :</strong>
            <span style={{ color: '#374151' }}>{formatDate(abo.prochaine_facturation) || '—'}</span>
          </div>

          {abo.description && (
            <div style={{ marginTop: '0.5rem', padding: '1rem', background: '#F9FAFB', borderRadius: '8px', fontSize: '0.9rem', color: '#4B5563' }}>
              <strong style={{ display: 'block', marginBottom: '0.5rem', color: '#374151' }}>Description :</strong>
              {abo.description}
            </div>
          )}
        </div>

        <div className={styles.card} style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h2 style={{ fontSize: '1.25rem', margin: 0, paddingBottom: '1rem', borderBottom: '1px solid #E5E7EB' }}>
            Factures émises ({factures?.length ?? 0})
          </h2>

          {!factures || factures.length === 0 ? (
            <p style={{ color: '#6B7280', fontSize: '0.9rem', margin: 0 }}>
              Aucune facture émise depuis cet abonnement. Cliquez sur &quot;Facturer maintenant&quot; pour générer la première.
            </p>
          ) : (
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {factures.map((f) => (
                <li key={f.id}>
                  <Link href={`/admin/factures/${f.id}`} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.6rem 0.8rem', background: '#F9FAFB', borderRadius: '6px', textDecoration: 'none', color: '#111827', border: '1px solid #E5E7EB' }}>
                    <span style={{ fontWeight: 600 }}>{f.numero}</span>
                    <span style={{ color: '#6B7280', fontSize: '0.9rem' }}>
                      {formatDate(f.date_emission)} · {formatMontant(f.montant_ht)} · {f.statut}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

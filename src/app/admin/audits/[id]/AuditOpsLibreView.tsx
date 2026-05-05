'use client'

import { useState, useTransition } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import styles from '../../clients/clients.module.css'
import { formatDate } from '@/lib/utils'
import { deleteAuditAction, updateAuditNotesAction } from '../actions'

interface Props {
  audit: {
    id: string
    date_audit: string
    secteur: string | null
    effectif: string | null
    ca_annuel: string | null
    notes_generales: string | null
    statut: string
    client_id: string | null
  }
  client: { id: string; nom: string; prenom: string | null; entreprise: string | null; email: string | null; telephone: string | null } | null
}

export default function AuditOpsLibreView({ audit, client }: Props) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [notes, setNotes] = useState(audit.notes_generales ?? '')
  const [savedAt, setSavedAt] = useState<Date | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSave = () => {
    setError(null)
    startTransition(async () => {
      const r = await updateAuditNotesAction(audit.id, notes)
      if (r?.error) setError(r.error)
      else setSavedAt(new Date())
    })
  }

  const handleDelete = () => {
    if (!confirm('Supprimer cet audit définitivement ?')) return
    startTransition(async () => {
      const r = await deleteAuditAction(audit.id)
      if (r?.error) alert(r.error)
      else router.push('/admin/audits')
    })
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <div>
          <Link href="/admin/audits" className={styles.actionBtn} style={{ marginBottom: '1rem' }}>
            ← Retour aux audits
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.25rem', flexWrap: 'wrap' }}>
            <h1 className={styles.title}>Audit ops sur mesure</h1>
            <span
              className={styles.badge}
              style={{ background: '#FEF3C7', color: '#92400E', border: '1px solid #FCD34D' }}
            >
              📦 PME ops · libre
            </span>
          </div>
          {client && (
            <p className={styles.subtitle}>
              Pour : <Link href={`/admin/clients/${client.id}`} style={{ color: '#4F46E5', fontWeight: 600, textDecoration: 'none' }}>
                {client.prenom} {client.nom} {client.entreprise && `(${client.entreprise})`}
              </Link>
              {' · '}
              {formatDate(audit.date_audit)}
            </p>
          )}
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            type="button"
            onClick={handleDelete}
            disabled={isPending}
            className={styles.secondaryBtn}
            style={{ color: '#DC2626', borderColor: '#FCA5A5' }}
          >
            🗑 Supprimer
          </button>
        </div>
      </div>

      <div
        style={{
          background: '#EFF6FF',
          border: '1px solid #BFDBFE',
          borderRadius: '8px',
          padding: '1rem 1.25rem',
          marginBottom: '1.5rem',
          fontSize: '0.9rem',
          color: '#1E40AF',
          lineHeight: 1.6,
        }}
      >
        <strong style={{ display: 'block', marginBottom: '0.4rem' }}>
          ℹ Audit ops sur mesure
        </strong>
        Pas de grille, pas de scoring auto. Cet espace sert uniquement à <strong>tracer dans OptiPro</strong>{' '}
        un audit que vous menez à la main pour une PME logistique, transport ou BTP. Notez ici vos
        observations, vos recommandations et le devis estimé. Le PDF/livrable client se fait hors
        OptiPro (Word, Pages, Notion, etc.).
      </div>

      <div className={styles.formGrid}>
        <div className={styles.card} style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h2 style={{ fontSize: '1.25rem', margin: 0, paddingBottom: '0.5rem', borderBottom: '1px solid #E5E7EB' }}>
            Contexte client
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: '0.75rem', fontSize: '0.95rem' }}>
            <strong style={{ color: '#6B7280' }}>Secteur :</strong>
            <span>{audit.secteur || '—'}</span>
            <strong style={{ color: '#6B7280' }}>Effectif :</strong>
            <span>{audit.effectif || '—'}</span>
            <strong style={{ color: '#6B7280' }}>CA annuel :</strong>
            <span>{audit.ca_annuel || '—'}</span>
            <strong style={{ color: '#6B7280' }}>Date audit :</strong>
            <span>{formatDate(audit.date_audit)}</span>
          </div>
        </div>

        <div className={styles.card} style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h2 style={{ fontSize: '1.25rem', margin: 0, paddingBottom: '0.5rem', borderBottom: '1px solid #E5E7EB' }}>
            Notes &amp; observations
          </h2>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Ce que vous avez observé pendant l'audit : flux, ERP/TMS, sous-traitants, reporting, KPIs, frictions, recommandations, devis estimé..."
            rows={14}
            style={{
              padding: '0.75rem',
              borderRadius: '8px',
              border: '1px solid #D1D5DB',
              fontSize: '0.95rem',
              fontFamily: 'inherit',
              resize: 'vertical',
              lineHeight: 1.6,
            }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '0.85rem', color: '#6B7280' }}>
              {savedAt && `✓ Enregistré à ${savedAt.toLocaleTimeString('fr-FR')}`}
              {error && <span style={{ color: '#DC2626' }}>{error}</span>}
            </span>
            <button
              type="button"
              onClick={handleSave}
              disabled={isPending}
              className={styles.primaryBtn}
            >
              {isPending ? '⏳…' : '💾 Enregistrer'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

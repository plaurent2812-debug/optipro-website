'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import {
  suspendreAbonnementAction,
  reactiverAbonnementAction,
  terminerAbonnementAction,
  deleteAbonnementAction,
} from '../actions'
import { genererFactureAbonnementAction } from '../../factures/actions'
import styles from '../../clients/clients.module.css'

interface Props {
  abonnementId: string
  statut: string
}

export default function AbonnementActions({ abonnementId, statut }: Props) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [message, setMessage] = useState<{ type: 'error' | 'success'; text: string } | null>(null)

  const run = async (label: string, fn: () => Promise<{ error?: string; success?: boolean; message?: string; factureId?: string } | void>) => {
    setMessage(null)
    startTransition(async () => {
      const r = await fn()
      if (r && 'error' in r && r.error) {
        setMessage({ type: 'error', text: r.error })
      } else {
        setMessage({ type: 'success', text: (r && 'message' in r && r.message) || `${label} OK` })
      }
    })
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
        {statut === 'actif' && (
          <>
            <button
              type="button"
              className={styles.primaryBtn}
              style={{ background: '#059669' }}
              disabled={isPending}
              onClick={() => {
                if (!confirm('Générer une facture brouillon pour cet abonnement ?')) return
                run('Facture générée', async () => {
                  const r = await genererFactureAbonnementAction(abonnementId)
                  if (r?.factureId) router.push(`/admin/factures/${r.factureId}`)
                  return r
                })
              }}
            >
              {isPending ? '⏳…' : '💸 Facturer maintenant'}
            </button>
            <button
              type="button"
              className={styles.secondaryBtn}
              style={{ borderColor: '#F59E0B', color: '#F59E0B' }}
              disabled={isPending}
              onClick={() => {
                if (!confirm('Suspendre cet abonnement ? Aucune facture ne sera générée tant qu\'il est suspendu.')) return
                run('Abonnement suspendu', () => suspendreAbonnementAction(abonnementId))
              }}
            >
              ⏸ Suspendre
            </button>
            <button
              type="button"
              className={styles.secondaryBtn}
              style={{ borderColor: '#DC2626', color: '#DC2626' }}
              disabled={isPending}
              onClick={() => {
                if (!confirm('Terminer définitivement cet abonnement ? Cette action est réversible mais l\'abonnement sortira des actifs.')) return
                run('Abonnement terminé', () => terminerAbonnementAction(abonnementId))
              }}
            >
              ✕ Terminer
            </button>
          </>
        )}
        {statut === 'suspendu' && (
          <button
            type="button"
            className={styles.primaryBtn}
            style={{ background: '#059669' }}
            disabled={isPending}
            onClick={() => run('Abonnement réactivé', () => reactiverAbonnementAction(abonnementId))}
          >
            ▶ Réactiver
          </button>
        )}
        {statut === 'termine' && (
          <button
            type="button"
            className={styles.secondaryBtn}
            style={{ color: '#DC2626' }}
            disabled={isPending}
            onClick={() => {
              if (!confirm('Supprimer définitivement cet abonnement et toutes ses traces ? Action irréversible.')) return
              run('Supprimé', () => deleteAbonnementAction(abonnementId))
            }}
          >
            🗑 Supprimer
          </button>
        )}
      </div>
      {message && (
        <span style={{
          fontSize: '0.85rem',
          color: message.type === 'error' ? '#DC2626' : '#059669',
          maxWidth: '350px',
          textAlign: 'right',
        }}>
          {message.text}
        </span>
      )}
    </div>
  )
}

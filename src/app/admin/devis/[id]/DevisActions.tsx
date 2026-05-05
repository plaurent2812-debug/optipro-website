'use client'

import { useTransition, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  archiveDevisAction,
  syncDevisFromPennylaneAction,
  pushDevisToPennylaneAction,
  markDevisAsAcceptedAction,
} from '../actions'
import { convertirDevisEnFactureAction } from '../../factures/actions'
import styles from '../../clients/clients.module.css'

interface DevisActionsProps {
  devisId: string
  statut: string
  hasPennylaneId: boolean
}

export default function DevisActions({ devisId, statut, hasPennylaneId }: DevisActionsProps) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [message, setMessage] = useState<{ type: 'error' | 'success'; text: string } | null>(null)

  const handlePush = () => {
    setMessage(null)
    startTransition(async () => {
      const result = await pushDevisToPennylaneAction(devisId)
      if (result?.error) {
        setMessage({ type: 'error', text: result.error })
      } else if (result?.success) {
        setMessage({ type: 'success', text: result.message || 'Envoyé !' })
      }
    })
  }

  const handleSync = () => {
    setMessage(null)
    startTransition(async () => {
      const result = await syncDevisFromPennylaneAction(devisId)
      if (result?.error) {
        setMessage({ type: 'error', text: result.error })
      } else {
        setMessage({ type: 'success', text: result.message || 'Synchronisé' })
      }
    })
  }

  const handleMarkAccepted = () => {
    if (!confirm('Marquer ce devis comme accepté ? À utiliser quand la vente est fermée hors Pennylane.')) return
    setMessage(null)
    startTransition(async () => {
      const result = await markDevisAsAcceptedAction(devisId)
      if (result?.error) {
        setMessage({ type: 'error', text: result.error })
      } else {
        setMessage({ type: 'success', text: result.message || 'Marqué accepté' })
      }
    })
  }

  const handleConvertirEnFacture = () => {
    if (!confirm('Convertir ce devis en facture ? Une nouvelle facture brouillon sera créée avec les mêmes lignes.')) return
    setMessage(null)
    startTransition(async () => {
      const result = await convertirDevisEnFactureAction(devisId)
      if (result?.error) {
        setMessage({ type: 'error', text: result.error })
      } else if (result?.factureId) {
        router.push(`/admin/factures/${result.factureId}`)
      }
    })
  }

  const handleArchive = () => {
    setMessage(null)
    startTransition(async () => {
      const result = await archiveDevisAction(devisId)
      if (result?.error) {
        setMessage({ type: 'error', text: result.error })
      } else {
        setMessage({ type: 'success', text: result.message || 'Archivé' })
      }
    })
  }

  const canPush = !hasPennylaneId
  const canSync = hasPennylaneId
  const canMarkAccepted = statut === 'envoye' || statut === 'brouillon'
  const canConvert = statut === 'accepte'
  const canArchive = statut !== 'archive'

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>

        {canConvert && (
          <button
            className={styles.primaryBtn}
            style={{ background: '#059669' }}
            onClick={handleConvertirEnFacture}
            disabled={isPending}
            title="Créer une facture à partir de ce devis"
          >
            {isPending ? '⏳…' : '💸 Convertir en facture'}
          </button>
        )}

        {canMarkAccepted && (
          <button
            className={styles.secondaryBtn}
            style={{ borderColor: '#059669', color: '#059669' }}
            onClick={handleMarkAccepted}
            disabled={isPending}
            title="Marquer comme accepté (vente fermée hors Pennylane)"
          >
            {isPending ? '⏳…' : '✓ Marquer accepté'}
          </button>
        )}

        {canPush && (
          <button
            className={styles.primaryBtn}
            onClick={handlePush}
            disabled={isPending}
            title="Envoyer ce devis vers Pennylane"
          >
            {isPending ? '⏳ Envoi...' : '🚀 Envoyer vers Pennylane'}
          </button>
        )}

        {canSync && (
          <button
            className={styles.secondaryBtn}
            style={{ borderColor: '#4F46E5', color: '#4F46E5' }}
            onClick={handleSync}
            disabled={isPending}
            title="Synchroniser le statut depuis Pennylane"
          >
            {isPending ? '⏳ Sync...' : '↻ Sync Pennylane'}
          </button>
        )}

        {canArchive && (
          <button
            className={styles.secondaryBtn}
            style={{ color: '#6B7280' }}
            onClick={handleArchive}
            disabled={isPending}
          >
            {isPending ? '⏳...' : '📦 Archiver'}
          </button>
        )}
      </div>

      {message && (
        <span style={{
          fontSize: '0.85rem',
          color: message.type === 'error' ? '#DC2626' : '#059669',
          maxWidth: '350px',
          textAlign: 'right'
        }}>
          {message.text}
        </span>
      )}
    </div>
  )
}

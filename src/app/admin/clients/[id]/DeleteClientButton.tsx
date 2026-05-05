'use client'

import { useState, useTransition } from 'react'
import { deleteClientAction } from '../actions'
import styles from '../clients.module.css'

export default function DeleteClientButton({ clientId }: { clientId: string }) {
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | null>(null)

  const handleDelete = () => {
    if (!confirm('Supprimer définitivement ce client ? Action irréversible.')) return
    setError(null)
    startTransition(async () => {
      const r = await deleteClientAction(clientId)
      if (r?.error) setError(r.error)
    })
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.4rem' }}>
      <button
        type="button"
        onClick={handleDelete}
        disabled={isPending}
        className={styles.secondaryBtn}
        style={{ color: '#DC2626', borderColor: '#FCA5A5' }}
        title="Supprimer ce client (impossible si des devis/factures sont liés)"
      >
        {isPending ? '⏳…' : '🗑 Supprimer'}
      </button>
      {error && <span style={{ fontSize: '0.8rem', color: '#DC2626', maxWidth: '300px', textAlign: 'right' }}>{error}</span>}
    </div>
  )
}

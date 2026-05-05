'use client'

import { useState, useEffect, useTransition, Suspense } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import styles from '../../clients/clients.module.css'
import { createFactureAndRedirectAction } from '../actions'
import { createClient } from '@/lib/supabase/client'
import { formatMontant } from '@/lib/utils'
import { offerCategories } from '@/data/offers'

type ClientOption = { id: string; prenom: string | null; nom: string; entreprise: string | null }
type DevisOption = { id: string; numero: string; client_id: string; montant_ht: number }

const CATALOG_OFFERS: Array<{ key: string; label: string; description: string; prix: number }> = (() => {
  const list: Array<{ key: string; label: string; description: string; prix: number }> = []
  for (const cat of offerCategories) {
    for (const offer of cat.offers) {
      const match = offer.price.match(/(\d{1,3}(?:[\s.]\d{3})*|\d+)\s*€/)
      const num = match ? Number(match[1].replace(/[\s.]/g, '')) : 0
      list.push({ key: offer.id, label: `${offer.name} (${offer.price})`, description: offer.name, prix: num })
    }
  }
  return list
})()

function NewFactureInner() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const preselectedClient = searchParams.get('client_id') ?? ''
  const preselectedDevis = searchParams.get('devis_id') ?? ''

  const [clientId, setClientId] = useState(preselectedClient)
  const [devisId, setDevisId] = useState(preselectedDevis)
  const [clients, setClients] = useState<ClientOption[]>([])
  const [devisListe, setDevisListe] = useState<DevisOption[]>([])
  const today = new Date().toISOString().slice(0, 10)
  const echeance30 = new Date(); echeance30.setDate(echeance30.getDate() + 30)
  const [dateEmission, setDateEmission] = useState(today)
  const [dateEcheance, setDateEcheance] = useState(echeance30.toISOString().slice(0, 10))
  const [notes, setNotes] = useState('')
  const [lignes, setLignes] = useState([
    { id: '1', description: '', quantite: 1, prix: 0 }
  ])
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    const fetchAll = async () => {
      const supabase = createClient()
      const [clientsRes, devisRes] = await Promise.all([
        supabase.from('clients').select('id, prenom, nom, entreprise').order('nom'),
        supabase.from('devis').select('id, numero, client_id, montant_ht').eq('statut', 'accepte').order('date_emission', { ascending: false }),
      ])
      if (clientsRes.data) setClients(clientsRes.data as ClientOption[])
      if (devisRes.data) setDevisListe(devisRes.data as DevisOption[])
    }
    fetchAll()
  }, [])

  const addLigne = () => {
    setLignes([...lignes, { id: Date.now().toString(), description: '', quantite: 1, prix: 0 }])
  }

  const removeLigne = (id: string) => {
    if (lignes.length === 1) return
    setLignes(lignes.filter(l => l.id !== id))
  }

  const updateLigne = (id: string, field: string, value: string | number) => {
    setLignes(lignes.map(l => l.id === id ? { ...l, [field]: value } : l))
  }

  const totalHT = lignes.reduce((acc, l) => acc + (l.prix * l.quantite), 0)

  const devisFiltered = clientId ? devisListe.filter(d => d.client_id === clientId) : devisListe

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg(null)
    if (!clientId) { setErrorMsg('Sélectionnez un client.'); return }
    if (lignes.some(l => !l.description.trim())) { setErrorMsg('Toutes les lignes doivent avoir une description.'); return }

    startTransition(async () => {
      const result = await createFactureAndRedirectAction({
        client_id: clientId,
        devis_id: devisId || null,
        date_emission: dateEmission,
        date_echeance: dateEcheance || null,
        notes: notes || null,
        lignes: lignes.map(l => ({ description: l.description, quantite: l.quantite, prix_unitaire_ht: l.prix })),
      })
      if (result?.error) setErrorMsg(result.error)
    })
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <div>
          <Link href="/admin/factures" className={styles.actionBtn} style={{ marginBottom: '1rem' }}>
            ← Retour aux factures
          </Link>
          <h1 className={styles.title}>Nouvelle facture</h1>
          <p className={styles.subtitle}>Brouillon créé localement. Synchronisé sur Pennylane à la validation.</p>
        </div>
      </div>

      <div className={styles.card}>
        <form onSubmit={handleSubmit} style={{ padding: '2rem' }}>

          {errorMsg && (
            <div className={styles.errorBanner} style={{ marginBottom: '1.5rem' }}>{errorMsg}</div>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              <div className={styles.formGroup}>
                <label htmlFor="client_id" className={styles.label}>Client <span style={{ color: '#EF4444' }}>*</span></label>
                <select id="client_id" className={styles.select} required value={clientId} onChange={e => { setClientId(e.target.value); setDevisId('') }}>
                  <option value="" disabled>-- Choisir un client --</option>
                  {clients.map(c => (
                    <option key={c.id} value={c.id}>
                      {c.nom} {c.prenom} {c.entreprise ? `(${c.entreprise})` : ''}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="devis_id" className={styles.label}>Devis lié (optionnel)</label>
                <select id="devis_id" className={styles.select} value={devisId} onChange={e => setDevisId(e.target.value)}>
                  <option value="">— Aucun —</option>
                  {devisFiltered.map(d => (
                    <option key={d.id} value={d.id}>{d.numero} ({formatMontant(d.montant_ht)})</option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="date_emission" className={styles.label}>Date d&apos;émission</label>
                <input id="date_emission" type="date" className={styles.input} required value={dateEmission} onChange={e => setDateEmission(e.target.value)} />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="date_echeance" className={styles.label}>Échéance de paiement</label>
                <input id="date_echeance" type="date" className={styles.input} value={dateEcheance} onChange={e => setDateEcheance(e.target.value)} />
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid #E5E7EB', paddingBottom: '0.5rem' }}>
                <h3 style={{ fontSize: '1.1rem', margin: 0 }}>Lignes de facturation</h3>
                <button type="button" onClick={addLigne} className={styles.actionBtn}>+ Ajouter une ligne</button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {lignes.map((ligne) => (
                  <div key={ligne.id} style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 2fr) 100px 130px 40px', gap: '1rem', alignItems: 'end', background: '#F9FAFB', padding: '1rem', borderRadius: '8px', border: '1px solid #E5E7EB' }}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Description</label>
                      <input type="text" required value={ligne.description} onChange={e => updateLigne(ligne.id, 'description', e.target.value)} className={styles.input} placeholder="Ex : Acompte 30 % — Site complet SAPAL" />
                      <select
                        className={styles.select}
                        style={{ marginTop: '0.4rem', fontSize: '0.85rem' }}
                        value=""
                        onChange={(e) => {
                          const offer = CATALOG_OFFERS.find(o => o.key === e.target.value)
                          if (!offer) return
                          setLignes(prev => prev.map(l => l.id === ligne.id ? { ...l, description: offer.description, prix: offer.prix } : l))
                        }}
                      >
                        <option value="">⚡ Insérer une offre du catalogue…</option>
                        {CATALOG_OFFERS.map(o => (
                          <option key={o.key} value={o.key}>{o.label}</option>
                        ))}
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Qté</label>
                      <input type="number" step="0.5" required min="0" value={ligne.quantite} onChange={e => { const v = parseFloat(e.target.value); updateLigne(ligne.id, 'quantite', Number.isNaN(v) ? 0 : v) }} className={styles.input} />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Prix Un. HT</label>
                      <input type="number" step="0.01" required min="0" value={ligne.prix} onChange={e => { const v = parseFloat(e.target.value); updateLigne(ligne.id, 'prix', Number.isNaN(v) ? 0 : v) }} className={styles.input} />
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '40px' }}>
                      <button
                        type="button"
                        onClick={() => removeLigne(ligne.id)}
                        disabled={lignes.length === 1}
                        title={lignes.length === 1 ? 'Au moins une ligne requise' : 'Supprimer la ligne'}
                        style={{ color: lignes.length === 1 ? '#D1D5DB' : '#DC2626', background: 'none', border: 'none', cursor: lignes.length === 1 ? 'not-allowed' : 'pointer', fontSize: '1.2rem' }}
                      >
                        🗑
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
              <div style={{ textAlign: 'right', background: '#F3F4F6', padding: '1rem 2rem', borderRadius: '8px', border: '1px solid #E5E7EB' }}>
                <div style={{ color: '#4B5563', fontSize: '0.9rem', marginBottom: '0.2rem' }}>Net à payer</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827' }}>
                  {formatMontant(totalHT)} <small style={{ fontSize: '60%', color: '#6B7280' }}>HT</small>
                </div>
                <span className={styles.badge} style={{ marginTop: '0.5rem', background: '#E0E7FF' }}>TVA non applicable, art. 293 B du CGI</span>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="notes" className={styles.label}>Notes (mentions légales, conditions)</label>
              <textarea id="notes" className={styles.textarea} value={notes} onChange={e => setNotes(e.target.value)} placeholder="Ex : Paiement par virement sous 30 jours. Pénalités de retard : 3x le taux d'intérêt légal." />
            </div>
          </div>

          <div className={styles.formActions}>
            <button type="button" onClick={() => router.back()} className={styles.secondaryBtn}>Annuler</button>
            <button type="submit" className={styles.submitBtn} disabled={isPending}>
              {isPending ? 'Création…' : 'Créer la facture (brouillon)'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default function NewFacturePage() {
  return (
    <Suspense fallback={<div style={{ padding: '2rem' }}>Chargement…</div>}>
      <NewFactureInner />
    </Suspense>
  )
}

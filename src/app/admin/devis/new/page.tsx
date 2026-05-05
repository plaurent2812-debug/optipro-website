'use client'

import { useState, useActionState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import styles from '../../clients/clients.module.css'
import { createDevisAction } from '../actions'
import { createClient } from '@/lib/supabase/client'
import { formatMontant } from '@/lib/utils'
import { useFormStatus } from 'react-dom'
import { offerCategories } from '@/data/offers'

type ClientOption = { id: string; prenom: string | null; nom: string; entreprise: string | null }

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button type="submit" className={styles.submitBtn} disabled={pending}>
      {pending ? <span className={styles.spinner} /> : 'Générer le devis'}
    </button>
  )
}

// Catalogue d'offres pré-remplies extraites du catalogue public.
// Quand Pierre choisit une offre, les champs description / unité / prix sont remplis.
const CATALOG_OFFERS: Array<{ key: string; label: string; description: string; unite: string; prix: number }> = (() => {
  const list: Array<{ key: string; label: string; description: string; unite: string; prix: number }> = []
  for (const cat of offerCategories) {
    for (const offer of cat.offers) {
      // On extrait un montant numérique simple si l'offre a un prix exact, sinon on laisse à 0.
      const match = offer.price.match(/(\d{1,3}(?:[\s.]\d{3})*|\d+)\s*€/)
      const num = match ? Number(match[1].replace(/[\s.]/g, '')) : 0
      list.push({
        key: offer.id,
        label: `${offer.name} (${offer.price})`,
        description: offer.name,
        unite: 'forfait',
        prix: num,
      })
    }
  }
  return list
})()

function NewDevisInner() {
  const searchParams = useSearchParams()
  const preselectedClient = searchParams.get('client_id') ?? ''

  const [state, formAction] = useActionState(createDevisAction, null)
  const [clients, setClients] = useState<ClientOption[]>([])

  // Builder State : démarre avec une ligne vide (pas de pré-remplissage hors-grille)
  const [lignes, setLignes] = useState([
    { id: '1', description: '', quantite: 1, unite: 'forfait', prix: 0 }
  ])

  useEffect(() => {
    // Charge les clients disponibles côté client pour le dropdown
    const fetchClients = async () => {
      const supabase = createClient()
      const { data } = await supabase.from('clients').select('id, prenom, nom, entreprise').order('nom')
      if (data) setClients(data as ClientOption[])
    }
    fetchClients()
  }, [])

  const addLigne = () => {
    setLignes([
      ...lignes, 
      { id: Date.now().toString(), description: '', quantite: 1, unite: 'forfait', prix: 0 }
    ])
  }

  const removeLigne = (id: string) => {
    if (lignes.length === 1) return // Doit garder au moins une ligne
    setLignes(lignes.filter(l => l.id !== id))
  }

  const updateLigne = (id: string, field: string, value: string | number) => {
    setLignes(lignes.map(l => l.id === id ? { ...l, [field]: value } : l))
  }

  const totalHT = lignes.reduce((acc, ligne) => acc + (ligne.prix * ligne.quantite), 0)

  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <div>
          <Link href="/admin/devis" className={styles.actionBtn} style={{ marginBottom: '1rem' }}>
            ← Retour aux devis
          </Link>
          <h1 className={styles.title}>Nouveau Devis</h1>
          <p className={styles.subtitle}>Générez une proposition commerciale et ajustez le chiffrage.</p>
        </div>
      </div>

      <div className={styles.card}>
        <form action={formAction} style={{ padding: '2rem' }}>
          
          {state?.error && (
            <div className={styles.errorBanner} style={{ marginBottom: '1.5rem' }}>
              {state.error}
            </div>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Sélection du Client */}
            <div className={styles.formGroup} style={{ maxWidth: '400px' }}>
              <label htmlFor="client_id" className={styles.label}>Sélectionnez un Client <span style={{ color: '#EF4444' }}>*</span></label>
              <select id="client_id" name="client_id" className={styles.select} required defaultValue={preselectedClient}>
                <option value="" disabled>-- Choisir dans la liste --</option>
                {clients.map(client => (
                  <option key={client.id} value={client.id}>
                    {client.nom} {client.prenom} {client.entreprise ? `(${client.entreprise})` : ''}
                  </option>
                ))}
              </select>
            </div>

            {/* Lignes de facturation dynamique */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid #E5E7EB', paddingBottom: '0.5rem' }}>
                <h3 style={{ fontSize: '1.1rem', margin: 0 }}>Lignes de Prestation</h3>
                <button type="button" onClick={addLigne} className={styles.actionBtn}>
                  + Ajouter une ligne
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {lignes.map((ligne, index) => (
                  <div key={ligne.id} style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 2fr) 100px 120px 120px 40px', gap: '1rem', alignItems: 'end', background: '#F9FAFB', padding: '1rem', borderRadius: '8px', border: '1px solid #E5E7EB' }}>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Description</label>
                      <input type="text" name={`lignes[${index}][description]`} required value={ligne.description} onChange={e => updateLigne(ligne.id, 'description', e.target.value)} className={styles.input} placeholder="Ex : Site vitrine pro 3-5 pages" />
                      <select
                        className={styles.select}
                        style={{ marginTop: '0.4rem', fontSize: '0.85rem' }}
                        value=""
                        onChange={(e) => {
                          const offer = CATALOG_OFFERS.find(o => o.key === e.target.value)
                          if (!offer) return
                          setLignes(prev => prev.map(l => l.id === ligne.id ? { ...l, description: offer.description, unite: offer.unite, prix: offer.prix } : l))
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
                      <input
                        type="number"
                        name={`lignes[${index}][quantite]`}
                        step="0.5"
                        required
                        min="0"
                        value={ligne.quantite}
                        onChange={e => {
                          const v = parseFloat(e.target.value)
                          updateLigne(ligne.id, 'quantite', Number.isNaN(v) ? 0 : v)
                        }}
                        className={styles.input}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Unité</label>
                      <select name={`lignes[${index}][unite]`} value={ligne.unite} onChange={e => updateLigne(ligne.id, 'unite', e.target.value)} className={styles.select}>
                        <option value="forfait">Forfait</option>
                        <option value="jour">Jour</option>
                        <option value="heure">Heure</option>
                        <option value="mois">Mois</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Prix Un. HT</label>
                      <input
                        type="number"
                        name={`lignes[${index}][prix_unitaire_ht]`}
                        step="0.01"
                        required
                        min="0"
                        value={ligne.prix}
                        onChange={e => {
                          const v = parseFloat(e.target.value)
                          updateLigne(ligne.id, 'prix', Number.isNaN(v) ? 0 : v)
                        }}
                        className={styles.input}
                      />
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '40px' }}>
                      <button
                        type="button"
                        onClick={() => removeLigne(ligne.id)}
                        disabled={lignes.length === 1}
                        title={lignes.length === 1 ? 'Au moins une ligne requise' : 'Supprimer la ligne'}
                        style={{ color: lignes.length === 1 ? '#D1D5DB' : '#DC2626', background: 'none', border: 'none', cursor: lignes.length === 1 ? 'not-allowed' : 'pointer', fontSize: '1.2rem'}}
                      >
                        🗑
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Total */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
              <div style={{ textAlign: 'right', background: '#F3F4F6', padding: '1rem 2rem', borderRadius: '8px', border: '1px solid #E5E7EB' }}>
                <div style={{ color: '#4B5563', fontSize: '0.9rem', marginBottom: '0.2rem' }}>Total Devis</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827' }}>
                  {formatMontant(totalHT)} <small style={{ fontSize: '60%', color: '#6B7280' }}>HT</small>
                </div>
                {/* Note: Auto-entrepreneur => Pas de TVA */}
                <span className={styles.badge} style={{ marginTop: '0.5rem', background: '#E0E7FF' }}>TVA non applicable</span>
              </div>
            </div>

            {/* Notes publiques */}
            <div className={styles.formGroup}>
              <label htmlFor="notes" className={styles.label}>Conditions sur le devis (Notes légales, modalités etc)</label>
              <textarea id="notes" name="notes" className={styles.textarea} defaultValue={"\nCe devis est valable 30 jours à compter de sa date d'émission.\nAcompte de 30% requis à la signature."}></textarea>
            </div>

          </div>

          <div className={styles.formActions}>
            <Link href="/admin/devis" className={styles.secondaryBtn}>Annuler</Link>
            <SubmitButton />
          </div>
        </form>
      </div>
    </div>
  )
}

export default function NewDevisPage() {
  return (
    <Suspense fallback={<div style={{ padding: '2rem' }}>Chargement…</div>}>
      <NewDevisInner />
    </Suspense>
  )
}

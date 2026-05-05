'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createPennylaneInvoice, PennylaneInvoicePayload } from '@/lib/pennylane'

interface FactureLigne {
  description: string
  quantite: number
  prix_unitaire_ht: number
}

/**
 * Récupère le prochain numéro de facture (format F-AAAA-MM-NN).
 */
async function generateFactureNumero(): Promise<string> {
  const supabase = await createClient()
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const prefix = `F-${year}-${month}-`

  const { data } = await supabase
    .from('factures')
    .select('numero')
    .like('numero', `${prefix}%`)
    .order('numero', { ascending: false })
    .limit(1)

  let nextNum = 1
  if (data && data[0]) {
    const lastSeq = parseInt(data[0].numero.replace(prefix, ''), 10)
    if (!Number.isNaN(lastSeq)) nextNum = lastSeq + 1
  }
  return `${prefix}${nextNum}`
}

/**
 * Crée une nouvelle facture en brouillon avec ses lignes.
 */
export async function createFactureAction(payload: {
  client_id: string
  devis_id?: string | null
  abonnement_id?: string | null
  date_emission: string
  date_echeance?: string | null
  notes?: string | null
  lignes: FactureLigne[]
}): Promise<{ error?: string; factureId?: string }> {
  const supabase = await createClient()

  const { data: { user }, error: authError } = await supabase.auth.getUser()
  if (authError || !user) return { error: 'Session expirée.' }

  if (!payload.client_id) return { error: 'Client requis.' }
  if (!payload.lignes || payload.lignes.length === 0) {
    return { error: 'Au moins une ligne est requise.' }
  }

  const numero = await generateFactureNumero()
  const montantHt = payload.lignes.reduce(
    (acc, l) => acc + (l.quantite || 0) * (l.prix_unitaire_ht || 0),
    0,
  )

  const { data: facture, error: factureErr } = await supabase
    .from('factures')
    .insert({
      numero,
      client_id: payload.client_id,
      devis_id: payload.devis_id ?? null,
      abonnement_id: payload.abonnement_id ?? null,
      statut: 'brouillon',
      date_emission: payload.date_emission,
      date_echeance: payload.date_echeance ?? null,
      montant_ht: montantHt,
      notes: payload.notes ?? null,
    })
    .select('id')
    .single()

  if (factureErr || !facture) {
    return { error: factureErr?.message ?? 'Erreur création facture' }
  }

  const lignesPayload = payload.lignes.map((l, i) => ({
    facture_id: facture.id,
    description: l.description,
    quantite: l.quantite,
    prix_unitaire_ht: l.prix_unitaire_ht,
    ordre: i,
  }))

  const { error: lignesErr } = await supabase
    .from('factures_lignes')
    .insert(lignesPayload)

  if (lignesErr) {
    return { error: `Facture créée mais lignes en erreur : ${lignesErr.message}` }
  }

  revalidatePath('/admin/factures')
  revalidatePath('/admin')
  return { factureId: facture.id }
}

/**
 * Convertit un devis accepté en facture (en brouillon).
 * Reprend toutes les lignes du devis.
 */
export async function convertirDevisEnFactureAction(devisId: string): Promise<{ error?: string; factureId?: string }> {
  const supabase = await createClient()

  const { data: { user }, error: authError } = await supabase.auth.getUser()
  if (authError || !user) return { error: 'Session expirée.' }

  const { data: devis, error: devisErr } = await supabase
    .from('devis')
    .select('id, client_id, montant_ht, devis_lignes(description, quantite, prix_unitaire_ht, ordre)')
    .eq('id', devisId)
    .single()

  if (devisErr || !devis || !devis.client_id) {
    return { error: 'Devis introuvable ou sans client.' }
  }

  const lignes = ((devis.devis_lignes ?? []) as Array<{ description: string; quantite: number; prix_unitaire_ht: number; ordre: number }>)
    .sort((a, b) => a.ordre - b.ordre)
    .map((l) => ({
      description: l.description,
      quantite: Number(l.quantite),
      prix_unitaire_ht: Number(l.prix_unitaire_ht),
    }))

  if (lignes.length === 0) return { error: 'Devis sans lignes.' }

  const today = new Date().toISOString().slice(0, 10)
  const echeance = new Date()
  echeance.setDate(echeance.getDate() + 30)

  return createFactureAction({
    client_id: devis.client_id,
    devis_id: devis.id,
    date_emission: today,
    date_echeance: echeance.toISOString().slice(0, 10),
    lignes,
  })
}

/**
 * Génère une facture mensuelle pour un abonnement actif.
 */
export async function genererFactureAbonnementAction(abonnementId: string): Promise<{ error?: string; factureId?: string }> {
  const supabase = await createClient()

  const { data: { user }, error: authError } = await supabase.auth.getUser()
  if (authError || !user) return { error: 'Session expirée.' }

  const { data: abo, error: aboErr } = await supabase
    .from('abonnements')
    .select('id, client_id, nom, montant_mensuel_ht, periodicite')
    .eq('id', abonnementId)
    .single()

  if (aboErr || !abo || !abo.client_id) return { error: 'Abonnement introuvable.' }

  const today = new Date().toISOString().slice(0, 10)
  const echeance = new Date()
  echeance.setDate(echeance.getDate() + 30)

  const periodLabel = abo.periodicite === 'annuel' ? 'annuel' : abo.periodicite === 'trimestriel' ? 'trimestriel' : 'mensuel'

  return createFactureAction({
    client_id: abo.client_id,
    abonnement_id: abo.id,
    date_emission: today,
    date_echeance: echeance.toISOString().slice(0, 10),
    lignes: [
      {
        description: `${abo.nom} — abonnement ${periodLabel}`,
        quantite: 1,
        prix_unitaire_ht: Number(abo.montant_mensuel_ht) || 0,
      },
    ],
  })
}

/**
 * Marque une facture comme payée (paiement reçu).
 */
export async function markFactureAsPaidAction(factureId: string): Promise<{ error?: string; success?: boolean }> {
  const supabase = await createClient()

  const { data: { user }, error: authError } = await supabase.auth.getUser()
  if (authError || !user) return { error: 'Session expirée.' }

  const today = new Date().toISOString().slice(0, 10)
  const { error } = await supabase
    .from('factures')
    .update({ statut: 'payee', date_paiement: today })
    .eq('id', factureId)

  if (error) return { error: error.message }

  revalidatePath(`/admin/factures/${factureId}`)
  revalidatePath('/admin/factures')
  revalidatePath('/admin')
  return { success: true }
}

/**
 * Valide et marque une facture brouillon comme envoyée.
 * Si pas encore poussée vers Pennylane, on le fait au passage.
 */
export async function validateFactureAction(factureId: string): Promise<{ error?: string; success?: boolean }> {
  const supabase = await createClient()

  const { data: { user }, error: authError } = await supabase.auth.getUser()
  if (authError || !user) return { error: 'Session expirée.' }

  const { data: facture } = await supabase
    .from('factures')
    .select('id, statut, pennylane_invoice_id')
    .eq('id', factureId)
    .single()

  if (!facture) return { error: 'Facture introuvable.' }
  if (facture.statut !== 'brouillon') return { error: 'Cette facture n\'est plus en brouillon.' }

  // Si pas encore sur Pennylane, on push d'abord
  if (!facture.pennylane_invoice_id) {
    const pushResult = await pushFactureToPennylaneAction(factureId)
    if (pushResult?.error) return { error: pushResult.error }
  } else {
    // Sinon on bascule juste le statut OptiPro
    await supabase
      .from('factures')
      .update({ statut: 'envoyee' })
      .eq('id', factureId)
  }

  revalidatePath(`/admin/factures/${factureId}`)
  revalidatePath('/admin/factures')
  revalidatePath('/admin')
  return { success: true }
}

/**
 * Envoie une facture existante "Brouillon" du CRM vers Pennylane.
 * Réutilise le pennylane_customer_id du client si dispo (anti-doublon).
 */
export async function pushFactureToPennylaneAction(factureId: string) {
  const supabase = await createClient()

  const { data: { user }, error: authError } = await supabase.auth.getUser()
  if (authError || !user) {
    return { error: 'Session expirée. Veuillez vous reconnecter.' }
  }

  const { data: facture, error } = await supabase
    .from('factures')
    .select(`
      *,
      clients (*),
      factures_lignes (*)
    `)
    .eq('id', factureId)
    .single()

  if (error || !facture) {
    return { error: "Facture introuvable." }
  }

  const client = facture.clients as Record<string, unknown>
  const lignes = facture.factures_lignes as Array<{ description: string; quantite: number; prix_unitaire_ht: number }>

  // Construction du payload : si le client a déjà un pennylane_customer_id,
  // on le réutilise au lieu de re-créer un client (évite les doublons Pennylane).
  const existingCustomerId = client?.pennylane_customer_id as string | null

  const payload: PennylaneInvoicePayload = {
    draft: true,
    invoice: {
      issue_date: facture.date_emission,
      due_date: facture.date_echeance || undefined,
      line_items: lignes.map((l) => ({
        label: l.description,
        quantity: Number(l.quantite),
        unit: 'piece',
        raw_currency_unit_price: String(l.prix_unitaire_ht),
        vat_rate: 'exempt', // Franchise en base de TVA
      })),
    },
  }

  if (existingCustomerId) {
    payload.customer_id = existingCustomerId
  } else {
    payload.create_customer = {
      name: (client?.entreprise as string) || `${client?.prenom ?? ''} ${client?.nom ?? ''}`.trim() || 'Client',
      emails: client?.email ? [client.email as string] : undefined,
      registration_number: (client?.siret as string) || undefined,
      address: (client?.adresse as string) || undefined,
      postal_code: (client?.code_postal as string) || undefined,
      city: (client?.ville as string) || undefined,
    }
  }

  try {
    const pennylaneRes = await createPennylaneInvoice(payload)

    await supabase
      .from('factures')
      .update({ statut: 'envoyee', pennylane_invoice_id: String(pennylaneRes.id) })
      .eq('id', factureId)

    // Si Pennylane a créé un nouveau client (cas !existingCustomerId),
    // on récupère son ID et on l'enregistre côté client OptiPro.
    if (!existingCustomerId && pennylaneRes.customer_id && client?.id) {
      await supabase
        .from('clients')
        .update({ pennylane_customer_id: String(pennylaneRes.customer_id) })
        .eq('id', client.id as string)
    }

    revalidatePath(`/admin/factures/${factureId}`)
    revalidatePath('/admin/factures')
    return { success: true, message: "Brouillon de facture créé sur Pennylane avec succès !" }
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Erreur de connexion avec l'API Pennylane."
    return { error: msg }
  }
}

/**
 * Action server pour redirection après création facture (utilisée par le form).
 */
export async function createFactureAndRedirectAction(payload: {
  client_id: string
  devis_id?: string | null
  abonnement_id?: string | null
  date_emission: string
  date_echeance?: string | null
  notes?: string | null
  lignes: FactureLigne[]
}) {
  const result = await createFactureAction(payload)
  if (result.error || !result.factureId) {
    return { error: result.error ?? 'Erreur inconnue' }
  }
  revalidatePath('/admin/factures')
  redirect(`/admin/factures/${result.factureId}`)
}

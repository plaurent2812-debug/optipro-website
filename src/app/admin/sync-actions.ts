'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import {
  getPennylaneQuote,
  mapPennylaneQuoteStatus,
  getPennylaneInvoice,
  mapPennylaneInvoiceStatus,
  listPennylaneInvoices,
} from '@/lib/pennylane'

/**
 * Cherche dans une facture Pennylane les champs identifiant le client.
 * Pennylane V2 expose plusieurs formes : customer.id, customer_id, company_customer_id, etc.
 * On retourne la première chaîne non vide trouvée.
 */
function extractCustomerId(invoice: Record<string, unknown>): string | null {
  const directKeys = ['customer_id', 'company_customer_id', 'individual_customer_id'];
  for (const key of directKeys) {
    const v = invoice[key];
    if (typeof v === 'string' && v.length > 0) return v;
    if (typeof v === 'number') return String(v);
  }
  const customer = invoice.customer as Record<string, unknown> | undefined;
  if (customer && typeof customer === 'object') {
    const cid = customer.id;
    if (typeof cid === 'string' && cid.length > 0) return cid;
    if (typeof cid === 'number') return String(cid);
  }
  return null;
}

/**
 * Tente de récupérer le pennylane_quote_id lié à une facture, pour matcher
 * la facture au devis OptiPro correspondant.
 */
function extractQuoteId(invoice: Record<string, unknown>): string | null {
  const directKeys = ['quote_id', 'estimate_id', 'source_quote_id'];
  for (const key of directKeys) {
    const v = invoice[key];
    if (typeof v === 'string' && v.length > 0) return v;
    if (typeof v === 'number') return String(v);
  }
  const quote = (invoice.quote ?? invoice.source_quote) as Record<string, unknown> | undefined;
  if (quote && typeof quote === 'object') {
    const qid = quote.id;
    if (typeof qid === 'string' && qid.length > 0) return qid;
    if (typeof qid === 'number') return String(qid);
  }
  return null;
}

function extractInvoiceId(invoice: Record<string, unknown>): string | null {
  const v = invoice.id;
  if (typeof v === 'string') return v;
  if (typeof v === 'number') return String(v);
  return null;
}

function extractInvoiceNumber(invoice: Record<string, unknown>): string | null {
  const v = invoice.invoice_number ?? invoice.number ?? invoice.numero;
  if (typeof v === 'string' && v.length > 0) return v;
  return null;
}

function extractAmountHt(invoice: Record<string, unknown>): number | null {
  const candidates = [
    invoice.amount_excluding_taxes,
    invoice.subtotal,
    invoice.total_excluding_taxes,
    invoice.amount,
  ];
  for (const c of candidates) {
    if (typeof c === 'number') return c;
    if (typeof c === 'string') {
      const n = parseFloat(c);
      if (!Number.isNaN(n)) return n;
    }
  }
  return null;
}

function extractDate(invoice: Record<string, unknown>, ...keys: string[]): string | null {
  for (const k of keys) {
    const v = invoice[k];
    if (typeof v === 'string' && v.length > 0) return v;
  }
  return null;
}

export async function syncAllFromPennylaneAction() {
  const supabase = await createClient()

  const { data: { user }, error: authError } = await supabase.auth.getUser()
  if (authError || !user) {
    return { error: 'Session expirée. Veuillez vous reconnecter.' }
  }

  const results = {
    devis: 0,
    factures: 0,
    facturesNouvelles: 0,
    errors: [] as string[],
  }

  // 1. Sync tous les devis ayant un pennylane_quote_id (statut)
  const { data: devisList } = await supabase
    .from('devis')
    .select('id, numero, statut, pennylane_quote_id, client_id')
    .not('pennylane_quote_id', 'is', null)
    .neq('statut', 'archive')

  if (devisList) {
    for (const devis of devisList) {
      try {
        const pennylaneQuote = await getPennylaneQuote(devis.pennylane_quote_id)
        const newStatus = mapPennylaneQuoteStatus(pennylaneQuote.status)

        if (newStatus && newStatus !== devis.statut) {
          await supabase
            .from('devis')
            .update({ statut: newStatus })
            .eq('id', devis.id)
          results.devis++
        }
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : 'Erreur inconnue'
        results.errors.push(`Devis ${devis.numero}: ${msg}`)
      }
    }
  }

  // 2. Pull TOUTES les factures Pennylane et upsert dans Supabase
  let pennylaneInvoices: Array<Record<string, unknown>> = []
  try {
    pennylaneInvoices = await listPennylaneInvoices()
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Erreur inconnue'
    results.errors.push(`Pull Pennylane: ${msg}`)
  }

  if (pennylaneInvoices.length > 0) {
    // Récupère les clients pour le matching pennylane_customer_id → client_id (uuid)
    const { data: clientsList } = await supabase
      .from('clients')
      .select('id, pennylane_customer_id')
      .not('pennylane_customer_id', 'is', null)

    const clientMap = new Map<string, string>()
    for (const c of clientsList ?? []) {
      if (c.pennylane_customer_id) {
        clientMap.set(String(c.pennylane_customer_id), c.id)
      }
    }

    // Récupère les devis avec pennylane_quote_id pour matcher facture → devis
    const { data: devisWithPennylane } = await supabase
      .from('devis')
      .select('id, pennylane_quote_id')
      .not('pennylane_quote_id', 'is', null)

    const devisMap = new Map<string, string>()
    for (const d of devisWithPennylane ?? []) {
      if (d.pennylane_quote_id) {
        devisMap.set(String(d.pennylane_quote_id), d.id)
      }
    }

    // Récupère les factures déjà connues côté Supabase pour ne pas dupliquer
    const { data: existingFactures } = await supabase
      .from('factures')
      .select('id, statut, pennylane_invoice_id')
      .not('pennylane_invoice_id', 'is', null)

    const existingMap = new Map<string, { id: string; statut: string }>()
    for (const f of existingFactures ?? []) {
      if (f.pennylane_invoice_id) {
        existingMap.set(String(f.pennylane_invoice_id), { id: f.id, statut: f.statut })
      }
    }

    for (const inv of pennylaneInvoices) {
      try {
        const invoiceId = extractInvoiceId(inv)
        if (!invoiceId) continue

        const numero = extractInvoiceNumber(inv) ?? `PL-${invoiceId}`
        const amountHt = extractAmountHt(inv)
        const dateEmission = extractDate(inv, 'date', 'invoice_date', 'issued_at', 'created_at')
        const dateEcheance = extractDate(inv, 'deadline', 'due_date', 'payment_due_date')
        let datePaiement = extractDate(inv, 'paid_at', 'payment_date')
        const rawStatus = (inv.status as string) ?? 'pending'
        const statut = mapPennylaneInvoiceStatus(rawStatus) ?? 'envoyee'
        const customerId = extractCustomerId(inv)
        const clientId = customerId ? clientMap.get(customerId) ?? null : null
        const quoteId = extractQuoteId(inv)
        const devisId = quoteId ? devisMap.get(quoteId) ?? null : null

        // Si la facture est marquée payée mais qu'on n'a pas la date de paiement
        // depuis la liste, on récupère le détail pour avoir paid_at.
        if (statut === 'payee' && !datePaiement) {
          try {
            const detail = await getPennylaneInvoice(invoiceId)
            datePaiement = extractDate(detail as Record<string, unknown>, 'paid_at', 'payment_date', 'last_payment_date') ?? dateEmission
          } catch {
            // En dernier recours, on tombe sur la date d'émission pour ne pas perdre la facture du dashboard
            datePaiement = dateEmission
          }
        }

        const existing = existingMap.get(invoiceId)

        if (existing) {
          // Update : seulement si le statut a changé
          if (existing.statut !== statut) {
            await supabase
              .from('factures')
              .update({
                statut,
                date_paiement: datePaiement,
                montant_ht: amountHt,
              })
              .eq('id', existing.id)
            results.factures++
          }
        } else {
          // Insert nouvelle facture importée depuis Pennylane
          const { error: insertError } = await supabase
            .from('factures')
            .insert({
              numero,
              client_id: clientId,
              devis_id: devisId,
              statut,
              date_emission: dateEmission,
              date_echeance: dateEcheance,
              date_paiement: datePaiement,
              montant_ht: amountHt,
              pennylane_invoice_id: invoiceId,
              notes: clientId
                ? null
                : `⚠ Client Pennylane ID ${customerId ?? 'inconnu'} non rattaché à un client OptiPro. Lier manuellement si besoin.`,
            })

          if (insertError) {
            results.errors.push(`Import facture ${numero}: ${insertError.message}`)
          } else {
            results.facturesNouvelles++
          }
        }
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : 'Erreur inconnue'
        results.errors.push(`Facture Pennylane: ${msg}`)
      }
    }
  }

  // 3. Sync les factures qui ont un pennylane_invoice_id mais qui auraient pu rater l'étape 2
  //    (ex : pagination tronquée). On garde la logique antérieure en filet de sécurité.
  const { data: facturesList } = await supabase
    .from('factures')
    .select('id, numero, statut, pennylane_invoice_id')
    .not('pennylane_invoice_id', 'is', null)
    .not('statut', 'in', '("payee","annulee")')

  if (facturesList) {
    for (const facture of facturesList) {
      try {
        const pennylaneInvoice = await getPennylaneInvoice(facture.pennylane_invoice_id)
        const newStatus = mapPennylaneInvoiceStatus(pennylaneInvoice.status)

        if (newStatus && newStatus !== facture.statut) {
          await supabase
            .from('factures')
            .update({ statut: newStatus })
            .eq('id', facture.id)
          results.factures++
        }
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : 'Erreur inconnue'
        results.errors.push(`Facture ${facture.numero}: ${msg}`)
      }
    }
  }

  revalidatePath('/admin')
  revalidatePath('/admin/devis')
  revalidatePath('/admin/factures')

  const parts: string[] = []
  if (results.devis > 0) parts.push(`${results.devis} devis`)
  if (results.facturesNouvelles > 0) parts.push(`${results.facturesNouvelles} nouvelle(s) facture(s) importée(s)`)
  if (results.factures > 0) parts.push(`${results.factures} facture(s) mise(s) à jour`)

  if (parts.length === 0 && results.errors.length === 0) {
    return { success: true, message: 'Tout est déjà à jour.' }
  }

  const message = parts.length > 0
    ? `Mis à jour : ${parts.join(', ')}.`
    : ''

  if (results.errors.length > 0) {
    return {
      success: true,
      message: `${message} ${results.errors.length} erreur(s).`,
      errors: results.errors,
    }
  }

  return { success: true, message }
}

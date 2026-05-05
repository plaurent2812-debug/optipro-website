'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { ClientStatut } from '@/types/admin'

export async function createClientAction(prevState: any, formData: FormData) {
  const supabase = await createClient()

  // Refresh auth token to ensure RLS sees authenticated user
  const { data: { user }, error: authError } = await supabase.auth.getUser()
  if (authError || !user) {
    return { error: 'Session expirée. Veuillez vous reconnecter.' }
  }

  const rawData = {
    nom: formData.get('nom') as string,
    prenom: formData.get('prenom') as string,
    email: formData.get('email') as string || null,
    telephone: formData.get('telephone') as string || null,
    entreprise: formData.get('entreprise') as string || null,
    adresse: formData.get('adresse') as string || null,
    ville: formData.get('ville') as string || null,
    code_postal: formData.get('code_postal') as string || null,
    siret: formData.get('siret') as string || null,
    notes: formData.get('notes') as string || null,
    statut: (formData.get('statut') as ClientStatut) || 'prospect',
  }

  const { data, error } = await supabase
    .from('clients')
    .insert([rawData])
    .select()
    .single()

  if (error) {
    console.error('Erreur lors de la création du client:', error)
    return { error: `Erreur Supabase: ${error.message} (code: ${error.code})` }
  }

  // Rafraîchit la liste des clients et redirige vers la fiche
  revalidatePath('/admin/clients')
  redirect(`/admin/clients/${data.id}`)
}

/**
 * Supprime un client. Échoue si le client a des devis/factures liés
 * (foreign keys actives — l'utilisateur doit d'abord supprimer manuellement).
 */
export async function deleteClientAction(clientId: string) {
  const supabase = await createClient()

  const { data: { user }, error: authError } = await supabase.auth.getUser()
  if (authError || !user) return { error: 'Session expirée.' }

  // Vérifie qu'il n'y a pas de devis/factures/audits liés
  const [{ count: nbDevis }, { count: nbFactures }, { count: nbAudits }] = await Promise.all([
    supabase.from('devis').select('id', { count: 'exact', head: true }).eq('client_id', clientId),
    supabase.from('factures').select('id', { count: 'exact', head: true }).eq('client_id', clientId),
    supabase.from('audits').select('id', { count: 'exact', head: true }).eq('client_id', clientId),
  ])

  const liens: string[] = []
  if ((nbDevis ?? 0) > 0) liens.push(`${nbDevis} devis`)
  if ((nbFactures ?? 0) > 0) liens.push(`${nbFactures} facture(s)`)
  if ((nbAudits ?? 0) > 0) liens.push(`${nbAudits} audit(s)`)

  if (liens.length > 0) {
    return { error: `Impossible de supprimer : ce client a ${liens.join(', ')} liés. Supprimez-les d'abord.` }
  }

  const { error } = await supabase.from('clients').delete().eq('id', clientId)
  if (error) return { error: error.message }

  revalidatePath('/admin/clients')
  redirect('/admin/clients')
}

export async function updateClientAction(prevState: any, formData: FormData) {
  const supabase = await createClient()

  const { data: { user }, error: authError } = await supabase.auth.getUser()
  if (authError || !user) {
    return { error: 'Session expirée. Veuillez vous reconnecter.' }
  }

  const id = formData.get('id') as string

  const rawData = {
    nom: formData.get('nom') as string,
    prenom: formData.get('prenom') as string,
    email: formData.get('email') as string || null,
    telephone: formData.get('telephone') as string || null,
    entreprise: formData.get('entreprise') as string || null,
    adresse: formData.get('adresse') as string || null,
    ville: formData.get('ville') as string || null,
    code_postal: formData.get('code_postal') as string || null,
    siret: formData.get('siret') as string || null,
    notes: formData.get('notes') as string || null,
    statut: (formData.get('statut') as ClientStatut) || 'prospect',
    updated_at: new Date().toISOString(),
  }

  const { error } = await supabase
    .from('clients')
    .update(rawData)
    .eq('id', id)

  if (error) {
    console.error('Erreur lors de la mise à jour du client:', error)
    return { error: `Erreur Supabase: ${error.message} (code: ${error.code})` }
  }

  revalidatePath(`/admin/clients/${id}`)
  revalidatePath('/admin/clients')
  redirect(`/admin/clients/${id}`)
}

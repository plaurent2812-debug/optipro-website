import { createClient } from '@supabase/supabase-js';

/**
 * Client Supabase service_role pour les opérations serveur qui contournent RLS.
 * À utiliser EXCLUSIVEMENT côté serveur (API routes, server actions).
 * Ne JAMAIS exposer au client.
 */
export function createAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) {
    throw new Error(
      'NEXT_PUBLIC_SUPABASE_URL ou SUPABASE_SERVICE_ROLE_KEY manquante',
    );
  }

  return createClient(url, serviceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get('token');
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ?? 'https://www.opti-pro.fr';

  if (!token) {
    return NextResponse.redirect(`${baseUrl}/newsletter/desinscrit?erreur=1`);
  }

  const supabase = createAdminClient();

  const { error } = await supabase
    .from('newsletter_subscribers')
    .update({
      status: 'unsubscribed',
      unsubscribed_at: new Date().toISOString(),
    })
    .eq('confirmation_token', token);

  if (error) {
    console.error('Newsletter unsubscribe error:', error);
    return NextResponse.redirect(`${baseUrl}/newsletter/desinscrit?erreur=1`);
  }

  return NextResponse.redirect(`${baseUrl}/newsletter/desinscrit`);
}

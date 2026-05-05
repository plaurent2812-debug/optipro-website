import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { createAdminClient } from '@/lib/supabase/admin';
import { magnetDeliveryEmail } from '@/lib/newsletter/emails';
import { generateMagnetPdf } from '@/lib/pdf-generator';
import type { MagnetSlug } from '@/lib/magnets';

// React-PDF + fs require Node.js runtime
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function magnetSlugFromKey(magnetKey: string | null): MagnetSlug | null {
  if (magnetKey === 'pme') return 'diagnostic-pme';
  if (magnetKey === 'artisan') return 'diagnostic-artisan';
  return null;
}

function magnetTitleFromSlug(slug: MagnetSlug): string {
  if (slug === 'diagnostic-pme') {
    return 'Diagnostic 30 min — 10 process à automatiser dans une PME logistique / transport / BTP';
  }
  return "Diagnostic 30 min — 10 tâches admin que l'IA fait à votre place quand vous êtes artisan";
}

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get('token');
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ?? 'https://www.opti-pro.fr';

  if (!token) {
    return NextResponse.redirect(
      `${baseUrl}/newsletter/erreur?raison=token-manquant`,
    );
  }

  const supabase = createAdminClient();

  const { data: subscriber, error } = await supabase
    .from('newsletter_subscribers')
    .select('id, email, sector, status, magnet_sent')
    .eq('confirmation_token', token)
    .maybeSingle();

  if (error || !subscriber) {
    return NextResponse.redirect(
      `${baseUrl}/newsletter/erreur?raison=token-invalide`,
    );
  }

  if (subscriber.status === 'confirmed') {
    return NextResponse.redirect(`${baseUrl}/newsletter/confirme?deja=1`);
  }

  // Confirme l'abonnement
  const { error: updateError } = await supabase
    .from('newsletter_subscribers')
    .update({
      status: 'confirmed',
      confirmed_at: new Date().toISOString(),
    })
    .eq('id', subscriber.id);

  if (updateError) {
    console.error('Newsletter confirm error:', updateError);
    return NextResponse.redirect(
      `${baseUrl}/newsletter/erreur?raison=db-error`,
    );
  }

  // Envoie le magnet (si configuré)
  const magnetSlug = magnetSlugFromKey(subscriber.magnet_sent);
  const apiKey = process.env.RESEND_API_KEY;

  if (magnetSlug && apiKey && !apiKey.startsWith('re_xxx')) {
    try {
      const pdfBuffer = await generateMagnetPdf(magnetSlug);
      const magnetTitle = magnetTitleFromSlug(magnetSlug);
      const unsubscribeUrl = `${baseUrl}/api/newsletter/unsubscribe?token=${token}`;
      const { subject, html } = magnetDeliveryEmail(magnetTitle, unsubscribeUrl);

      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: 'Pierre — OptiPro <p.laurent@opti-pro.fr>',
        to: [subscriber.email],
        subject,
        html,
        replyTo: 'p.laurent@opti-pro.fr',
        attachments: [
          {
            filename: `${magnetSlug}.pdf`,
            content: pdfBuffer,
          },
        ],
      });
    } catch (sendErr) {
      console.error('Magnet delivery error:', sendErr);
      // On ne bloque pas la confirmation si l'envoi du magnet échoue.
      // L'utilisateur verra la page de confirmation et pourra retélécharger.
    }
  }

  return NextResponse.redirect(`${baseUrl}/newsletter/confirme`);
}

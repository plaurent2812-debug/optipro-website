import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { createAdminClient } from '@/lib/supabase/admin';
import { confirmationEmail } from '@/lib/newsletter/emails';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const VALID_SECTORS = [
  'transport',
  'btp',
  'logistique',
  'artisan-tpe',
  'autre',
] as const;
type Sector = (typeof VALID_SECTORS)[number];

const VALID_MAGNETS = ['pme', 'artisan'] as const;
type MagnetKey = (typeof VALID_MAGNETS)[number];

interface SubscribeBody {
  email: string;
  sector: Sector;
  source?: string;
  magnet?: MagnetKey;
  consent: boolean;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<SubscribeBody>;
    const { email, sector, source, magnet, consent } = body;

    // Validation
    if (!email || typeof email !== 'string' || !isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Email invalide' },
        { status: 400 },
      );
    }
    if (!sector || !VALID_SECTORS.includes(sector)) {
      return NextResponse.json(
        { error: 'Secteur invalide' },
        { status: 400 },
      );
    }
    if (consent !== true) {
      return NextResponse.json(
        { error: 'Consentement RGPD requis' },
        { status: 400 },
      );
    }
    if (magnet && !VALID_MAGNETS.includes(magnet)) {
      return NextResponse.json(
        { error: 'Magnet invalide' },
        { status: 400 },
      );
    }

    const normalizedEmail = email.toLowerCase().trim();
    const ipAddress =
      req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      req.headers.get('x-real-ip') ||
      null;
    const userAgent = req.headers.get('user-agent') ?? null;

    const supabase = createAdminClient();

    // Upsert : si déjà inscrit (pending ou confirmed), on regénère le token et on relance le mail.
    // Si unsubscribed, on remet à pending (réinscription).
    const { data: existing } = await supabase
      .from('newsletter_subscribers')
      .select('id, status, confirmation_token, magnet_sent')
      .eq('email', normalizedEmail)
      .maybeSingle();

    let confirmationToken: string;
    let subscriberId: string;

    if (existing) {
      // Si déjà confirmé, on n'envoie pas un nouveau mail de confirmation —
      // on renvoie un état "déjà inscrit" pour que le front affiche un message adapté.
      if (existing.status === 'confirmed') {
        return NextResponse.json(
          { ok: true, alreadyConfirmed: true },
          { status: 200 },
        );
      }
      // Sinon (pending ou unsubscribed), on régénère un token et on remet à pending
      const { data: updated, error: updateError } = await supabase
        .from('newsletter_subscribers')
        .update({
          status: 'pending',
          sector,
          source: source ?? existing.magnet_sent ?? null,
          magnet_sent: magnet ?? existing.magnet_sent ?? null,
          confirmation_token: crypto.randomUUID(),
          unsubscribed_at: null,
          ip_address: ipAddress,
          user_agent: userAgent,
        })
        .eq('id', existing.id)
        .select('confirmation_token')
        .single();

      if (updateError || !updated) {
        console.error('Newsletter update error:', updateError);
        return NextResponse.json(
          { error: 'Erreur serveur' },
          { status: 500 },
        );
      }
      confirmationToken = updated.confirmation_token;
      subscriberId = existing.id;
    } else {
      const { data: inserted, error: insertError } = await supabase
        .from('newsletter_subscribers')
        .insert({
          email: normalizedEmail,
          sector,
          source: source ?? null,
          magnet_sent: magnet ?? null,
          ip_address: ipAddress,
          user_agent: userAgent,
        })
        .select('id, confirmation_token')
        .single();

      if (insertError || !inserted) {
        console.error('Newsletter insert error:', insertError);
        return NextResponse.json(
          { error: 'Erreur serveur' },
          { status: 500 },
        );
      }
      confirmationToken = inserted.confirmation_token;
      subscriberId = inserted.id;
    }

    // Envoi email de confirmation via Resend
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey || apiKey.startsWith('re_xxx') || apiKey === 'placeholder') {
      console.warn(
        '⚠️ DEV MODE : RESEND_API_KEY manquante, email de confirmation non envoyé. Subscriber ID:',
        subscriberId,
        'Token:',
        confirmationToken,
      );
      return NextResponse.json({ ok: true, devMode: true }, { status: 200 });
    }

    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL ?? 'https://www.opti-pro.fr';
    const confirmUrl = `${baseUrl}/api/newsletter/confirm?token=${confirmationToken}`;
    const { subject, html } = confirmationEmail(confirmUrl);

    const resend = new Resend(apiKey);
    const { error: sendError } = await resend.emails.send({
      from: 'OptiPro <p.laurent@opti-pro.fr>',
      to: [normalizedEmail],
      subject,
      html,
      replyTo: 'p.laurent@opti-pro.fr',
    });

    if (sendError) {
      console.error('Resend confirmation error:', sendError);
      return NextResponse.json(
        { error: "Erreur d'envoi email" },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error('Newsletter subscribe error:', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}

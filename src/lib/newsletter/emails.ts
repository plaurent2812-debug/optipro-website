/**
 * Templates HTML pour les emails de la newsletter OptiPro.
 * Style sobre, branded OptiPro, lisibles sur mobile et webmail.
 */

const ACCENT = '#F97316';
const DARK = '#0F172A';
const MUTED = '#64748B';
const BG_LIGHT = '#F8FAFC';
const BORDER = '#E2E8F0';

const baseStyle = `
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
  color: ${DARK};
  line-height: 1.6;
`;

function wrapper(content: string, footerLink?: string): string {
  return `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>OptiPro</title>
</head>
<body style="margin:0; padding:0; background:${BG_LIGHT};">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:${BG_LIGHT};">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="max-width:600px; background:#FFFFFF; border-radius:12px; overflow:hidden; border:1px solid ${BORDER};">
          <tr>
            <td style="background:${DARK}; padding:24px 32px;">
              <div style="${baseStyle} font-size:14px; font-weight:800; letter-spacing:2px; color:${ACCENT};">OPTIPRO</div>
              <div style="${baseStyle} font-size:11px; color:#94A3B8; margin-top:4px;">Conseil ops · Développement · IA opérationnelle</div>
            </td>
          </tr>
          <tr>
            <td style="padding:32px;">
              ${content}
            </td>
          </tr>
          <tr>
            <td style="background:${BG_LIGHT}; padding:20px 32px; border-top:1px solid ${BORDER};">
              <div style="${baseStyle} font-size:12px; color:${MUTED};">
                <strong style="color:${DARK};">Pierre Laurent</strong> — Fondateur OptiPro<br>
                Vence (06) · <a href="mailto:p.laurent@opti-pro.fr" style="color:${ACCENT}; text-decoration:none;">p.laurent@opti-pro.fr</a> · <a href="tel:+33670259333" style="color:${ACCENT}; text-decoration:none;">06 70 25 93 33</a><br>
                <a href="https://www.opti-pro.fr" style="color:${MUTED};">opti-pro.fr</a>
              </div>
              ${
                footerLink
                  ? `<div style="${baseStyle} font-size:11px; color:${MUTED}; margin-top:12px; padding-top:12px; border-top:1px solid ${BORDER};">
                Vous recevez cet email parce que vous vous êtes inscrit à la newsletter OptiPro.
                Pour vous désinscrire, <a href="${footerLink}" style="color:${MUTED};">cliquez ici</a>.
              </div>`
                  : ''
              }
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function button(href: string, label: string): string {
  return `
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin:20px 0;">
    <tr>
      <td style="background:${ACCENT}; border-radius:8px;">
        <a href="${href}" style="${baseStyle} display:inline-block; padding:14px 28px; color:#FFFFFF; font-weight:700; font-size:14px; text-decoration:none;">${label}</a>
      </td>
    </tr>
  </table>`;
}

/**
 * Email de confirmation (double opt-in)
 */
export function confirmationEmail(confirmUrl: string): {
  subject: string;
  html: string;
} {
  const content = `
    <h1 style="${baseStyle} font-size:22px; font-weight:800; margin:0 0 16px;">Confirmez votre inscription</h1>
    <p style="${baseStyle} font-size:14px; color:${MUTED}; margin:0 0 16px;">
      Cliquez sur le bouton ci-dessous pour confirmer votre inscription à la newsletter
      <strong style="color:${DARK};">Ops &amp; IA</strong> par OptiPro. Une fois confirmée, vous recevrez votre guide
      par email dans la foulée.
    </p>
    ${button(confirmUrl, 'Confirmer mon inscription')}
    <p style="${baseStyle} font-size:12px; color:${MUTED}; margin:16px 0 0;">
      Si vous n'êtes pas à l'origine de cette inscription, ignorez simplement cet email.
      Le lien expire dans 7 jours.
    </p>
    <p style="${baseStyle} font-size:11px; color:${MUTED}; margin:8px 0 0; word-break:break-all;">
      Lien direct : ${confirmUrl}
    </p>
  `;

  return {
    subject: 'Confirmez votre inscription — Newsletter Ops & IA OptiPro',
    html: wrapper(content),
  };
}

/**
 * Email de livraison du magnet (après confirmation)
 */
export function magnetDeliveryEmail(
  magnetTitle: string,
  unsubscribeUrl: string,
): {
  subject: string;
  html: string;
} {
  const content = `
    <h1 style="${baseStyle} font-size:22px; font-weight:800; margin:0 0 16px;">Bienvenue dans l'atelier</h1>
    <p style="${baseStyle} font-size:14px; color:${DARK}; margin:0 0 12px;">
      Merci pour la confiance. Votre guide est en pièce jointe :
    </p>
    <div style="${baseStyle} background:${BG_LIGHT}; border:1px solid ${BORDER}; border-left:3px solid ${ACCENT}; padding:16px 20px; border-radius:6px; margin:12px 0;">
      <strong style="color:${DARK};">${magnetTitle}</strong>
    </div>
    <p style="${baseStyle} font-size:14px; color:${DARK}; margin:16px 0 0;">
      Quelques mots de contexte avant de plonger dedans :
    </p>
    <ul style="${baseStyle} font-size:14px; color:${DARK}; padding-left:20px; margin:8px 0;">
      <li>Ce guide n'est pas un cours sur l'IA. C'est une liste de travail.</li>
      <li>Choisissez <strong>un</strong> process cette semaine. Pas dix.</li>
      <li>Mesurez le gain réel sur <strong>votre</strong> cas — pas l'estimation marketing.</li>
    </ul>
    <p style="${baseStyle} font-size:14px; color:${DARK}; margin:16px 0 0;">
      Et si vous voulez creuser votre cas spécifique : 30 minutes d'audit gratuit
      avec moi, sans engagement. Répondez juste à cet email.
    </p>
    <p style="${baseStyle} font-size:14px; color:${DARK}; margin:24px 0 0;">— Pierre</p>
    <p style="${baseStyle} font-size:11px; color:${MUTED}; margin:24px 0 0; padding-top:16px; border-top:1px solid ${BORDER};">
      Tous les jeudis : un cas terrain, un prompt, une mise en garde. Lisible en 5 minutes.
    </p>
  `;

  return {
    subject: `🎁 Votre guide est prêt — ${magnetTitle}`,
    html: wrapper(content, unsubscribeUrl),
  };
}

/**
 * Email de confirmation de désinscription
 */
export function unsubscribeConfirmationEmail(): {
  subject: string;
  html: string;
} {
  const content = `
    <h1 style="${baseStyle} font-size:22px; font-weight:800; margin:0 0 16px;">Désinscription confirmée</h1>
    <p style="${baseStyle} font-size:14px; color:${DARK}; margin:0 0 12px;">
      Vous ne recevrez plus la newsletter OptiPro. Vos coordonnées resteront supprimées
      de notre base sous 30 jours.
    </p>
    <p style="${baseStyle} font-size:14px; color:${MUTED}; margin:0 0 12px;">
      Si vous avez désinscrit par erreur, écrivez à
      <a href="mailto:p.laurent@opti-pro.fr" style="color:${ACCENT};">p.laurent@opti-pro.fr</a>.
    </p>
    <p style="${baseStyle} font-size:14px; color:${DARK}; margin:24px 0 0;">— Pierre</p>
  `;

  return {
    subject: 'Désinscription confirmée — OptiPro',
    html: wrapper(content),
  };
}

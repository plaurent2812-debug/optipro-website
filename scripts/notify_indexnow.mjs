#!/usr/bin/env node
/**
 * Notifie IndexNow (Bing, Yandex, Seznam) à chaque déploiement Vercel.
 * Soumet toutes les URLs publiques pour indexation immédiate.
 *
 * Lancé automatiquement après chaque `next build` via le script "postbuild".
 */

const KEY = "e554e4eb38ee4361afd90c71722e54da";
const HOST = "www.opti-pro.fr";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const URLS = [
  `https://${HOST}/`,
  `https://${HOST}/services`,
  `https://${HOST}/realisations`,
  `https://${HOST}/contact`,
  `https://${HOST}/mentions-legales`,
  `https://${HOST}/confidentialite`,
];

async function notifyIndexNow() {
  // Skip si on n'est pas en production Vercel (build local, preview, dev)
  if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production") {
    console.log(`[IndexNow] Skipped (VERCEL_ENV=${process.env.VERCEL_ENV})`);
    return;
  }

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: URLS,
  };

  try {
    const res = await fetch("https://api.indexnow.org/IndexNow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload),
    });

    if (res.ok || res.status === 202) {
      console.log(`[IndexNow] OK — ${URLS.length} URLs soumises (status ${res.status})`);
    } else {
      const text = await res.text();
      console.warn(`[IndexNow] HTTP ${res.status}: ${text}`);
    }
  } catch (err) {
    console.warn(`[IndexNow] Erreur réseau:`, err.message);
  }
}

notifyIndexNow();

# Action Plan SEO — opti-pro.fr

**Date** : 2026-05-05
**Référence** : [FULL-AUDIT-REPORT.md](./FULL-AUDIT-REPORT.md)

---

## 🔥 Sprint 1 — Critical (à faire dans la journée)

### #1 — Corriger le doublon `| OptiPro | OptiPro` dans 4 titles
**Effort** : 5 min · **Impact** : élevé (CTR SERP)

**Cause** : Le `template: '%s | OptiPro'` du `layout.tsx` ajoute déjà "| OptiPro" automatiquement, mais les pages incluent le suffixe dans leur `title`.

**Correctifs à appliquer** :

| Fichier | Ligne | Avant | Après |
|---|---|---|---|
| `src/app/(public)/blog/page.tsx` | 7 | `'Blog — Conseils pour artisans et TPE \| OptiPro'` | `'Blog — Conseils pour artisans et TPE'` |
| `src/app/(public)/services/plombier/page.tsx` | 5 | `'Site web et automatisation pour plombier — OptiPro'` | `'Site web et automatisation pour plombier'` |
| `src/app/(public)/services/restaurateur/page.tsx` | 5 | `'Site web et outils digitaux pour restaurateur — OptiPro'` | `'Site web et outils digitaux pour restaurateur'` |
| `src/app/(public)/a-propos/page.tsx` | 5 | `'À propos — Pierre Laurent \| OptiPro'` | `'À propos — Pierre Laurent'` |

**Vérification** : `curl -s https://www.opti-pro.fr/blog | grep -oE '<title>[^<]+</title>'` → devrait afficher `Blog — Conseils pour artisans et TPE | OptiPro` (un seul "| OptiPro").

---

### #2 — `/realisations` : noindex ou redirect 301
**Effort** : 10 min · **Impact** : moyen (budget crawl, contenu orphelin)

La page est retirée de la nav et du sitemap mais retourne 200 indexable.

**Option A (recommandée — la page peut rester accessible en interne)** :
Ajouter dans `src/app/(public)/realisations/page.tsx` :
```ts
export const metadata: Metadata = {
  // ...existant
  robots: { index: false, follow: true },
}
```

**Option B (si la page n'a plus aucune valeur)** :
Dans `next.config.ts`, ajouter dans `async redirects()` :
```ts
{ source: '/realisations', destination: '/services', permanent: true }
```

---

### #3 — Politique de confidentialité 404
**Effort** : 10 min · **Impact** : critique (RGPD + signal défiance)

La page existe en `/confidentialite` mais l'audit signale `/politique-de-confidentialite` 404. Vérifier les liens internes :

```bash
grep -rn "politique-de-confidentialite\|/confidentialite" src/components src/app
```

**Correctifs possibles** :
- Si un lien pointe vers `/politique-de-confidentialite` : le corriger en `/confidentialite`
- Ou créer un alias dans `next.config.ts` :
```ts
{ source: '/politique-de-confidentialite', destination: '/confidentialite', permanent: true }
```

---

### #4 — Redirect non-www en 301 (au lieu de 307)
**Effort** : 5 min · **Impact** : élevé (PageRank consolidation)

Vérifier dans le **dashboard Vercel** :
1. Settings → Domains
2. Si `opti-pro.fr` (sans www) est listé : vérifier qu'il a bien "Redirect to www.opti-pro.fr" avec **status code 308 (permanent)**
3. Si Vercel ne propose pas, configurer dans `vercel.json` (ou `vercel.ts`) :

```ts
// vercel.ts
import { type VercelConfig } from '@vercel/config/v1';

export const config: VercelConfig = {
  redirects: [
    {
      source: '/(.*)',
      has: [{ type: 'host', value: 'opti-pro.fr' }],
      destination: 'https://www.opti-pro.fr/$1',
      permanent: true,
    },
  ],
};
```

**Vérification** : `curl -sI https://opti-pro.fr | head -2` → doit afficher `HTTP/2 308` (et non 307).

---

### #5 — Ajouter `streetAddress` au LocalBusiness schema
**Effort** : 2 min · **Impact** : élevé (rich result Google débloqué)

**Fichier** : `src/app/(public)/layout.tsx`, ligne 36-42

**Avant** :
```ts
address: {
  '@type': 'PostalAddress',
  addressLocality: 'Vence',
  postalCode: '06140',
  addressRegion: "Provence-Alpes-Côte d'Azur",
  addressCountry: 'FR',
},
```

**Après** :
```ts
address: {
  '@type': 'PostalAddress',
  streetAddress: 'Vence (06140)',  // ← ajouté (SAB : pas d'adresse rue exacte)
  addressLocality: 'Vence',
  postalCode: '06140',
  addressRegion: "Provence-Alpes-Côte d'Azur",
  addressCountry: 'FR',
},
```

---

## 🚀 Sprint 2 — High (cette semaine)

### #6 — Schema `Person` Pierre référencé partout (BlogPosting)
**Effort** : 30 min · **Impact** : élevé (E-E-A-T propagation)

**Fichier** : `src/app/(public)/blog/[slug]/page.tsx` et `src/app/(public)/blog/page.tsx`

Remplacer chaque `author` JSON-LD inline par une référence à l'`@id` :
```ts
author: {
  "@type": "Person",
  "@id": "https://www.opti-pro.fr/a-propos#pierre-laurent",
  name: "Pierre Laurent",
  url: "https://www.opti-pro.fr/a-propos"
}
```

Et s'assurer que `/a-propos/page.tsx` définit bien le `Person` avec :
```ts
"@id": "https://www.opti-pro.fr/a-propos#pierre-laurent",
sameAs: [
  "https://www.linkedin.com/in/pierre-laurent-809410123"
]
```

---

### #7 — Corriger les HTML entities dans JSON-LD plombier/restaurateur
**Effort** : 15 min · **Impact** : moyen (validité schema)

**Fichiers** :
- `src/app/(public)/services/plombier/page.tsx` lignes ~51, 59, 75
- `src/app/(public)/services/restaurateur/page.tsx` lignes ~51, 59, 67, 75

Rechercher `&apos;`, `&quot;` dans les blocs JSON-LD et remplacer par `'` et `"` directs (les chaînes JS supportent ces caractères Unicode sans encoding).

---

### #8 — Ajouter `WebPage` + `BreadcrumbList` sur la homepage
**Effort** : 20 min · **Impact** : moyen (signal d'ancre Google)

**Fichier** : `src/app/(public)/page.tsx`

Ajouter le JSON-LD via le pattern Next.js standard utilisé déjà dans le projet (Server Component injection sécurisée — voir le pattern dans `layout.tsx` ligne 25+) :

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.opti-pro.fr/#webpage",
      "url": "https://www.opti-pro.fr",
      "name": "OptiPro — Conseil & développement sur mesure",
      "isPartOf": { "@id": "https://www.opti-pro.fr/#website" },
      "about": { "@id": "https://www.opti-pro.fr/#organization" },
      "inLanguage": "fr-FR"
    }
  ]
}
```

---

### #9 — Réécrire H1 homepage pour artisans
**Effort** : 30 min · **Impact** : critique (clarté valeur prop, conversion)

**Avant** : `10 ans d'exploitation x IA opérationnelle`
**Après suggéré** : `Outils digitaux et automatisation pour artisans et TPE — Vence, PACA`

Le storytelling "10 ans d'exploitation" descend en H2 ou en sub-headline. Tester aussi : `Sites web, automatisation et IA pour artisans et TPE — Vence et Côte d'Azur`.

---

### #10 — Améliorer la page `/contact`
**Effort** : 1h · **Impact** : critique (conversion)

**Problèmes** :
- Formulaire en état "Chargement..." sans fallback
- Téléphone non mis en avant comme alternative

**Correctifs** :
1. Mettre **au-dessus du formulaire** : un bloc "Préférez l'appel direct ?" avec gros bouton `tel:+33670259333` et lien `mailto:p.laurent@opti-pro.fr`
2. Identifier la cause du "Chargement..." (probablement un lazy-load ou useEffect non finalisé en SSR)
3. Ajouter un placeholder/skeleton visible plutôt qu'un texte plain

---

## 📈 Sprint 3 — Medium (ce mois-ci)

### #11 — Différenciation pages sectorielles (sortir du near-duplicate)
**Effort** : 1 jour par page · **Impact** : élevé (ranking + intent)

Pour `/services/plombier` et `/services/restaurateur` :
- Ajouter 200+ mots **vraiment** spécifiques métier (pas du copier-coller)
- Inclure 2-3 mini-cas concrets (anonymisés)
- Mentionner la réalité locale ("plombiers de Vence/Antibes/Cagnes...")
- Diversifier les H2 (pas le même squelette pour les 2 pages)

### #12 — Footer NAP complet
**Effort** : 10 min · **Impact** : moyen (signal local)

Ajouter dans le footer : `OptiPro · Vence (06140) · Alpes-Maritimes · 06 70 25 93 33`

### #13 — `FAQPage` schema sur pages sectorielles
**Effort** : 30 min · **Impact** : moyen (GEO/AI search)

Le contenu FAQ existe en HTML. Ajouter le balisage JSON-LD `FAQPage` correspondant.

> ⚠️ Google n'affiche plus les rich results FAQ pour les sites commerciaux depuis août 2023, mais le balisage reste très utile pour Perplexity, ChatGPT, Bing Copilot, et Google AI Overviews.

### #14 — Mentions légales : CNIL + DPO
**Effort** : 30 min · **Impact** : moyen (RGPD + trust)

Dans `/mentions-legales`, ajouter :
- Mention "Responsable de traitement : Pierre Laurent, p.laurent@opti-pro.fr"
- Mention CNIL : "Vous disposez d'un droit d'accès, rectification, effacement..." + lien CNIL pour réclamation
- Hébergeur : Vercel Inc. (440 N Barranca Ave #4133, Covina, CA 91723, USA)

### #15 — Ajouter byline auteur visible sur articles blog
**Effort** : 30 min · **Impact** : élevé (E-E-A-T + AI citation)

En haut de chaque article : `Par Pierre Laurent — [date publication]` avec lien vers `/a-propos`.
En bas : micro-bio 40 mots avec photo + lien.

### #16 — Activer IndexNow sur Vercel
**Effort** : 2 min · **Impact** : faible mais gratuit

Dashboard Vercel → Project → Settings → Integrations → activer IndexNow.

### #17 — `aggregateRating` dès 3 avis Google
**Effort** : Dépend des avis · **Impact** : élevé (rich result + trust)

Une fois la fiche GBP créée et 3+ avis collectés, ajouter au schema LocalBusiness :
```ts
aggregateRating: {
  '@type': 'AggregateRating',
  ratingValue: '5',
  reviewCount: '3',
}
```

---

## 🎯 Sprint 4 — Hors-code (chantier marketing)

Ces actions ne touchent pas le code mais sont **les plus impactantes pour les rankings réels**.

### #18 — Créer / revendiquer fiche Google Business Profile
- business.google.com → créer compte si pas fait
- Catégorie primaire : "Conseiller en informatique" (pas "Agence web")
- Photos, horaires, services, zone desservie
- Lier le site web

### #19 — Inscrire le site dans Google Search Console
- Vérifier domaine via DNS TXT record (OVH)
- Soumettre le sitemap.xml
- Permet ensuite : data CrUX réel, indexation tracking, search performance

### #20 — Créer profils sur annuaires Tier 1
NAP **strictement identique** partout :
- PagesJaunes
- Kompass
- Cylex
- Mappy
- Hoodspot
- Societe.com (probablement déjà auto-généré)

### #21 — Collecter 3-5 avis Google
Demander aux premiers clients un avis Google. Critère : 3 avis minimum pour activer `aggregateRating`.

### #22 — Stratégie YouTube (long terme)
Corrélation r=0.737 avec citations AI. 2-3 vidéos courtes :
- "Comment automatiser ses devis artisan en 2026"
- "Visite guidée d'un audit ops d'un restaurant"
- "Le bon CRM pour un plombier indépendant"

---

## Timeline suggérée

| Sprint | Durée | Priorité | Impact |
|---|---|---|---|
| 1 (Critical fixes) | 1 journée | 🔥 Aujourd'hui | Élevé immédiat |
| 2 (Schema + UX) | 1 semaine | 🚀 Cette semaine | Élevé moyen-terme |
| 3 (Content + structure) | 1 mois | 📈 Ce mois | Moyen long-terme |
| 4 (Hors-code) | Continu | 🎯 Backlog | Élevé long-terme |

---

## Métriques à surveiller (après fixes Sprint 1)

| Metric | Outil | Baseline (avant) | Cible (après) |
|---|---|---|---|
| Pages indexées | Google Search Console | À mesurer | 17 (sitemap moins /realisations) |
| Doublons title | curl scripts | 4 pages | 0 |
| Schema valid | Rich Results Test | LocalBusiness incomplet | Pass complet |
| /realisations noindex | curl + meta robots | Indexable | noindex |
| Redirect non-www | curl -I | 307 | 308/301 |
| Privacy reachable | curl -I | 404 | 200 |

---

## Conclusion

**80% du gain SEO se trouve dans le Sprint 1 (1 journée de travail)**. Les bugs identifiés (titles dupliqués, /realisations 200, redirect 307, privacy 404) sont des erreurs **techniques évitables** qui érodent ta crédibilité auprès de Google.

Les autres chantiers (E-E-A-T, content différencié, GBP, citations) sont des **investissements long-terme** qui ne paieront que dans 3-6 mois.

**Recommandation** : exécuter Sprint 1 ce soir, monitorer 7 jours, puis attaquer Sprint 2.

# Audit SEO complet — opti-pro.fr

**Date** : 2026-05-05
**Site** : https://www.opti-pro.fr
**Méthodologie** : skill `/seo-audit` avec 6 sous-agents spécialisés (technical, content, schema, geo, local, sxo)
**Pages auditées** : 8 pages publiques principales + sitemap (18 URLs au total)

---

## Score global : **65/100**

| Catégorie | Poids | Score | Contribution |
|---|---:|---:|---:|
| Technical SEO | 22% | 74 | 16.3 |
| Content / E-E-A-T | 23% | 67 | 15.4 |
| On-Page SEO | 20% | 58 | 11.6 |
| Schema / JSON-LD | 10% | 70 | 7.0 |
| Performance (CWV) | 10% | 80 | 8.0 |
| AI Search Readiness (GEO) | 10% | 54 | 5.4 |
| Local SEO (SAB) | 5% | 45 | 2.3 |

**Note importante sur les divergences entre agents** : `seo-geo` et `seo-local` ont rapporté "0 schema JSON-LD" alors qu'en réalité la homepage contient bien `LocalBusiness + ProfessionalService + WebSite` (vérification manuelle via curl). Cela vient du fait que `WebFetch` ne renvoie pas toujours le HTML brut. Le score Schema (70) et Local (45) ont été ajustés en conséquence.

---

## Executive Summary

### ✅ Ce qui va bien
- **Sécurité headers complète** : HSTS preload, CSP, X-Frame-Options, X-Content-Type-Options, Permissions-Policy
- **robots.txt impeccable** : `/admin` disallow + bots IA whitelisted (GPTBot, ClaudeBot, PerplexityBot, Google-Extended)
- **Sitemap propre** : 18 URLs, /realisations correctement absent du sitemap
- **JSON-LD homepage solide** : LocalBusiness + ProfessionalService + WebSite avec founder (Person), areaServed, openingHours, sameAs LinkedIn
- **llms.txt riche** : 30+ lignes avec parcours détaillé, services, tarifs, contact — un atout majeur pour les AI search
- **Canonicals corrects** sur toutes les pages testées
- **SSR/SSG confirmé** (`x-nextjs-prerender: 1`) → contenu indexable sans JS
- **Pages géo + sectorielles existent** : `/creation-site-web-vence`, `/services/plombier`, `/services/restaurateur`
- **Crédibilité Pierre** : parcours chronologique chiffré (7 M€, 8 500 SKUs, 80 k€/mois, 400 commandes/jour) — rare dans ce segment

### 🚨 Top 5 Critical
1. **Doublon `| OptiPro | OptiPro`** dans le `<title>` de 4 pages (plombier, restaurateur, blog, a-propos)
2. **`/realisations` retourne 200** sans noindex ni redirect alors que retiré de la nav et du sitemap
3. **`opti-pro.fr` (non-www) → 307** au lieu de 301 permanent
4. **Politique de confidentialité 404** sur `/politique-de-confidentialite` (la page existe en `/confidentialite` mais le lien interne pointe peut-être sur la mauvaise URL)
5. **`streetAddress` manquant** dans le PostalAddress du LocalBusiness → bloque le rich result Google

### 💡 Top 5 Quick Wins (< 30 min chacun, gros ROI)
1. Corriger le template `metadata.title` pour éviter le double suffixe (1 modif dans `layout.tsx`)
2. Ajouter `<meta robots="noindex, follow">` sur `/realisations` ou redirect 301 → `/services`
3. Configurer un redirect 301 (au lieu de 307) sur le domaine non-www dans Vercel
4. Vérifier le lien interne vers `/politique-de-confidentialite` et le pointer sur `/confidentialite` (ou créer la nouvelle URL)
5. Ajouter `streetAddress: "Vence"` dans le PostalAddress du LocalBusiness

---

## 1. Technical SEO (74/100)

### CRITICAL
- **C1** : `/realisations` renvoie 200 sans `noindex`. Page retirée de la nav + sitemap mais reste indexable. Risque de contenu orphelin.
  - **Fix** : `<meta name="robots" content="noindex, follow">` ou redirect 301 vers `/services`
- **C2** : Doublon `| OptiPro | OptiPro` dans 4 titles. Le template `layout.tsx` injecte déjà le suffixe et chaque page le réinjecte.
  - **Fix** : Corriger soit le `template` du `metadata.title` dans `layout.tsx`, soit retirer le suffixe des `title` des pages.

### HIGH
- **H1** : Non-www (`opti-pro.fr`) → 307 (temporaire) au lieu de 301. Risque de duplication PageRank.
  - **Fix** : Configurer redirect 301 dans Vercel (Settings → Domains → ajouter règle de redirect avec `permanent: true`)

### MEDIUM
- **M1** : Sitemap `lastmod` identique pour toutes les URLs (généré au build). Réduit la précision du recrawl Google.
- **M2** : Title `/blog` diverge du H1 ("Blog — Conseils..." vs "Ressources & conseils")
- **M3** : OG image unique pour toutes les pages — opportunité ratée sur les pages sectorielles

### LOW
- **L1** : Schema `WebSite` sans `SearchAction` (sitelinks searchbox)
- **L2** : IndexNow non implémenté (Bing/Yandex)
- **L3** : `x-nextjs-stale-time: 300` (5 min) un peu agressif pour des pages statiques

### PASS
- HTTPS avec HSTS preload, X-Frame-Options DENY, CSP, Permissions-Policy
- robots.txt + sitemap.xml conformes, bots IA whitelisted
- Canonicals auto-référençants corrects
- URL structure : lowercase, tirets, no-trailing-slash, no-params
- SSR confirmé via `x-nextjs-prerender: 1`

---

## 2. Content / E-E-A-T (67/100)

| Pilier E-E-A-T | Score | Justification |
|---|---:|---|
| Experience | 78 | Très fort : parcours détaillé chiffré (Toute la Nutrition, DBS, Eddifis, Factory, GL Events) |
| Expertise | 65 | Solide technique (ERP EBP, Next.js cité, prompts IA précis), mais pas de certifications mentionnées |
| Authoritativeness | 28 | Aucune mention externe, zéro avis client (signalé honnêtement). Plafond actuel — OptiPro lancé avril 2026 |
| Trustworthiness | 71 | SIREN/SIRET, adresse, téléphone affichés. Mais privacy policy 404, pas de mention CNIL/DPO |

### CRITICAL
- **CC1** : `/politique-de-confidentialite` 404 (la page existe en `/confidentialite`). Si le lien dans le footer pointe sur la mauvaise URL → infraction RGPD potentielle.
  - **Fix** : Audit du lien dans footer + mentions légales + formulaire de contact. Si lien existe vers `/politique-de-confidentialite`, soit corriger en `/confidentialite`, soit créer un alias.

### HIGH
- **HC1** : Pages sectorielles thin content relatif :
  - `/services/plombier` : 731 mots
  - `/services/restaurateur` : 741 mots
  - `/creation-site-web-vence` : 710 mots
  - 19-25% de phrases partagées entre pages → near-duplicate
  - **Fix** : Ajouter 200+ mots **vraiment** spécifiques (cas concrets, jargon métier, références locales)
- **HC2** : Aucun article de blog ne dépasse 1 900 mots (cible 1 500+ pure content acceptable mais juste)

### MEDIUM
- **MC1** : Attribution auteur Pierre Laurent absente sur pages services + sectorielles + homepage (présente sur blog uniquement)
- **MC2** : Absence de FAQ schema sur pages sectorielles (alors que le contenu FAQ existe en HTML)
- **MC3** : Mentions légales sans CNIL ni DPO

### LOW
- **LC1** : Aucun lien sortant vers sources tierces
- **LC2** : Dates de mise à jour absentes sur pages services

---

## 3. On-Page SEO (58/100)

### CRITICAL
- **CO1** : H1 homepage opaque pour cible artisan ("10 ans d'exploitation x IA opérationnelle")
  - **Fix** : Réécrire en "Outils digitaux et optimisation ops pour artisans et TPE — Vence, PACA" (descendre le storytelling en H2)
- **CO2** : Page-type mismatch sur pages sectorielles
  - "automatiser devis restaurant" attend une page comparative SaaS, pas une landing de vente
  - "consultant optimisation ops PME" attend une page institutionnelle avec études de cas
  - **Fix** : Créer une page "blog-style" éducative sur ces intents avant de transférer vers l'offre

### HIGH
- **HO1** : Friction formulaire `/contact` — affichage "Chargement du formulaire..." sans fallback visible
  - **Fix** : Mettre numéro de téléphone et lien mailto **au-dessus** du formulaire, pas en-dessous

### MEDIUM
- **MO1** : Prix dispersés (€690, €2 900, €6 500) entre /services et pages sectorielles avec légères variations
  - **Fix** : Source unique de vérité tarifaire (constante centralisée + import partout)
- **MO2** : Absence d'études de cas réelles. "Boulangerie Martin" est lisible comme fictif → érode la confiance

### Scores SXO par page (1-10)

| Page | Clarté valeur | Intent fit | Conversion | Friction | CTA | Total |
|---|---:|---:|---:|---:|---:|---:|
| `/` | 4 | 5 | 6 | 5 | 8 | **5.6** |
| `/services` | 7 | 7 | 7 | 6 | 8 | **7.0** |
| `/services/plombier` | 7 | 6 | 7 | 7 | 8 | **7.0** |
| `/services/restaurateur` | 7 | 5 | 7 | 7 | 8 | **6.8** |
| `/creation-site-web-vence` | 8 | 8 | 7 | 7 | 8 | **7.6** ← meilleure page |
| `/contact` | 6 | 7 | 4 | 3 | 6 | **5.2** ← pire page |

---

## 4. Schema / JSON-LD (70/100)

### Réalité confirmée par inspection manuelle (curl)
La homepage **émet bien** un script JSON-LD valide contenant :
- `LocalBusiness` + `ProfessionalService` (multi-type)
- `WebSite`
- `PostalAddress` (locality, postal code, region, country, **pas de streetAddress**)
- `areaServed` : `AdministrativeArea (PACA)` + `Country (France)`
- `founder` : `Person Pierre Laurent` avec `sameAs` LinkedIn
- `OpeningHoursSpecification` (Lun-Ven 9h-18h)
- `priceRange` : "Sur devis"

### CRITICAL
- **CS1** : `streetAddress` manquant dans le PostalAddress (bloque le rich result LocalBusiness Google)
  - **Fix** : Ajouter `"streetAddress": "Vence"` ou plus précis
- **CS2** : Homepage manque `WebPage` + `BreadcrumbList` propres à la page (le `WebSite` est dans le layout, pas suffisant)

### HIGH
- **HS1** : `Person` Pierre Laurent défini sur `/a-propos` avec `@id: #pierre-laurent` mais les `BlogPosting` ne le réutilisent pas (objet inline, pas de référence à l'@id)
  - **Fix** : Dans `/blog/[slug]/page.tsx` et `/blog/page.tsx`, remplacer l'`author` par `{"@id": "https://www.opti-pro.fr/a-propos#pierre-laurent"}`
- **HS2** : HTML entities dans JSON-LD plombier/restaurateur (`&apos;`, `&quot;`)
  - **Fix** : Remplacer par caractères Unicode directs dans les strings du JSON-LD

### MEDIUM
- **MS1** : FAQPage présent sur pages commerciales — depuis août 2023 Google réserve les rich results FAQ aux sites .gov/.org de santé. **Garder pour le bénéfice GEO/AI** mais ne pas en ajouter pour Google rich results.
- **MS2** : `BlogPosting` listing sans propriété `image`
- **MS3** : `Person` sur `/a-propos` sans `sameAs` LinkedIn (alors qu'il est dans le `founder` du layout)

---

## 5. Performance (CWV) — 80/100 (estimation lab)

Pas de mesure CrUX field data sans accès Search Console. Estimation basée sur les signaux visibles :
- Images avec `loading="lazy"` et `fetchPriority` configurés ✅
- SSR + prerender (`x-nextjs-prerender: 1`) → LCP rapide ✅
- Pas de mesure INP/CLS sans test browser

**Recommandation** : connecter Google Search Console + PageSpeed Insights pour avoir le CrUX field data.

---

## 6. AI Search Readiness / GEO (54/100)

| Plateforme | Score | Gap principal |
|---|---:|---|
| Google AI Overviews | 35 | Schema FAQPage absent sur services |
| ChatGPT Search | 48 | Pas de byline visible sur articles blog |
| Perplexity | 55 | Passages trop courts dans services |
| Bing Copilot | 38 | Schema manquant sur sectorielles |

### Points forts
- llms.txt riche et bien formé ✅
- Bots IA whitelisted dans robots.txt ✅
- Faits chiffrés disponibles dans le parcours Pierre

### Faiblesses
- FAQPage schema absent sur pages les plus stratégiques
- Aucun byline visible sur articles blog
- Statistiques internes non sourcées
- Aucune présence Wikipedia/Reddit/YouTube détectable
- Pas de vidéo (corrélation r=0.737 avec citations AI)

---

## 7. Local SEO / SAB (45/100)

### Type business confirmé : SAB (Service-Area Business)
Pierre se déplace chez ses clients (Vence, Nice, Antibes, Cannes, Grasse, PACA, France à distance). Pas de boutique physique. Pattern correct : pas d'adresse complète publiée, areaServed déclarée.

### NAP Consistency
| Source | NAP cohérent ? |
|---|:-:|
| Header/footer opti-pro.fr | ✅ |
| /creation-site-web-vence | ✅ |
| /services/plombier | ✅ |
| /services/restaurateur | ✅ |
| Schema.org JSON-LD | ⚠️ partiel (manque streetAddress) |

### Findings
- **CL1 CRITICAL** : Aucune fiche Google Business Profile détectable depuis le site (pas de Maps embed, pas de lien vers GBP)
- **CL2 CRITICAL** : Zéro citation Tier 1 (PagesJaunes, Kompass, Cylex, Mappy)
- **HL1 HIGH** : Pas de widget avis Google ni `aggregateRating`
- **HL2 HIGH** : Maillage interne géo faible (pages sectorielles ne lient pas vers `/creation-site-web-vence`)
- **ML1 MEDIUM** : Footer NAP incomplet (téléphone et email mais pas "Vence (06140)")
- **ML2 MEDIUM** : `areaServed` en prose mais pas encodé en schema sur pages sectorielles
- **LL1 LOW** : Pas de meta `geo.region` / `geo.placename` / `geo.position`

---

## Conclusion

Le site **n'a pas régressé** suite aux 24 commits récents. Les fondations techniques sont solides (security headers, robots.txt, sitemap, SSR, schema homepage). Les vraies faiblesses sont structurelles :

1. **Bugs faciles à corriger** (titles dupliqués, /realisations 200, redirect 307→301, privacy 404) — 1-2h de travail
2. **Schema enrichissement** (streetAddress, breadcrumbs, FAQPage, Person référencé partout) — 4-6h
3. **Authority signals manquants** (avis Google, GBP, citations annuaires, témoignages réels) — chantier long terme
4. **Différenciation pages sectorielles** (sortir du near-duplicate) — 1 journée par page

Voir [ACTION-PLAN.md](./ACTION-PLAN.md) pour le plan d'action priorisé avec correctifs concrets.

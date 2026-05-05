# Lessons Learned

| Date | Ce qui s'est passé | Règle |
|------|-------------------|-------|
| 2026-03-28 | Les métriques (50+, 12 clients, 98%) étaient inventées — Pierre les a fait retirer | Ne jamais inventer de chiffres. Demander les vrais chiffres ou ne pas en mettre |
| 2026-03-28 | Le projet Supabase SAPAL est un projet client existant, pas pour OptiPro | Toujours demander avant de toucher à un projet Supabase existant |
| 2026-03-28 | Pierre ne fait pas de marketing — il se concentre sur l'admin, les outils, l'automatisation | Ne pas proposer de features marketing (SEO, réseaux sociaux, etc.) dans les audits |
| 2026-03-28 | Compte GitHub = plaurent2812-debug (pas pl2878dev) | Vérifier le bon compte avant de créer des PR |
| 2026-03-31 | API Pennylane V2 quotes : `expiry_date` → `deadline`, `line_items_attributes` → `invoice_lines` | Les noms de champs V2 diffèrent de V1 — toujours consulter la doc V2 (pennylane.readme.io) |
| 2026-03-31 | API Pennylane V2 : `unit_price_cents` (int centimes) → `raw_currency_unit_price` (string euros) | V2 attend le prix en euros sous forme de string, pas en centimes |
| 2026-03-31 | API Pennylane V2 : `FR_0` n'existe plus pour la TVA → utiliser `exempt` | Pour franchise en base (auto-entrepreneur), le taux TVA V2 est `exempt` |
| 2026-03-31 | API Pennylane V2 : le champ `unit` est obligatoire sur chaque ligne | Toujours inclure `unit: 'piece'` (ou autre) dans les invoice_lines |
| 2026-04-28 | GSAP + Next.js : éviter `self.document` (n'existe pas hors browser global), passer par `rootRef.current?.querySelector` dans le scope du `useGSAP` | Toujours scoper les querySelector via le ref racine, pas via globals |
| 2026-04-28 | gsap.matchMedia : `context.conditions` est typé `Record<string, boolean> \| undefined`, caster vers le type des clés déclarées et vérifier `!conditions` avant usage | Toujours guard nullish + cast explicite des conditions matchMedia |
| 2026-04-28 | Quand un Server Component a besoin d'animations GSAP (Hooks React), créer un wrapper Client Component recevant les données en props ; garder JSON-LD et metadata côté Server | Pattern : page.tsx Server (SEO/data) → Client.tsx (animations + UI) |
| 2026-05-05 | react-pdf : `fontStyle: 'italic'` crash si la variante italic de la font n'est pas enregistrée via `Font.register` (`Could not resolve font for X, fontStyle italic`) | N'utiliser `fontStyle: 'italic'` que si la variante italic est enregistrée. Sinon, simuler via couleur/lineHeight |
| 2026-05-05 | react-pdf côté client + image distante (`<Image src="https://...">`) : risque CSP/CORS/worker. Précharger le logo en data URL via fetch + FileReader plus robuste | Pour les assets PDF côté client, précharger en data URL avant `pdf().toBlob()` |

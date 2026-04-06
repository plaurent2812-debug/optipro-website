# OptiPro — Instructions projet

## Stack
- Next.js 16 (App Router), React 19, TypeScript
- Supabase (PostgreSQL, Auth JWT, Storage)
- CSS Modules + CSS Variables (pas de Tailwind)
- Polices : Outfit + Space Grotesk (Google Fonts)
- Déploiement : Vercel (GitHub CI/CD), domaine optipro.fr (OVH DNS)

## Architecture
- Site vitrine public : `/(public)/*` (accueil, services, réalisations, contact)
- Back-office admin : `/admin/*` — intégré au même Next.js, protégé par middleware Supabase Auth
- Server Actions pour la logique backend (pas d'API REST séparée)

## Intégrations
- **Pennylane API v2** : lecture ET écriture — création clients, devis, factures + sync bidirectionnelle des statuts
- **Resend** : envoi d'emails transactionnels (formulaire contact)
- **React PDF** : génération PDF des rapports d'audit côté client

## Conventions
- CSS Modules pour le scoping — pas de styles globaux sauf variables
- Server Actions dans des fichiers `actions.ts` colocalisés avec la route
- Supment côté serveur (jamais côté client)
- Ne jamais commiter de secrets — tout passe par `.env.local`
- Pas d'API REST séparée — Server Actions uniquement

## Base de données Supabase
Tables : `clients`, `devis`, `devis_lignes`, `factures`, `factures_lignes`, `abonnements`, `audits`, `audit_reponses`, `audit_frictions`, `audit_actions`

## Outils MCP
- **Context7** : consulter avant toute implémentation touchant une API ou librairie
- **Supabase MCP** : inspecter schéma, requêter DB, gérer auth/storage directement

## Contexte métier
- Conseil en optimisation digitale pour TPE/artisans (Pierre Laurent, EI à Vence)
- Back-office : CRM clients, devis/factures avec sync Pennylane, audits diagnostiques avec scoring et plan d'action
- Fondateur solo — privilégier la simplicité et la maintenabilité

## Pièges à éviter
- Next.js 16 + React 19 : éviter les patterns expérimentaux non stabilisés
- Supabase service role : uniquement côté serveur, jamais exposé au client
- Pennylane API v2 avant tout nouvel endpoint

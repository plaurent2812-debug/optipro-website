# Instructions de Déploiement - OptiPro

## 1. Prérequis
- Un compte **Vercel** (gratuit ou pro).
- Accès à la gestion du domaine **optipro.fr** (OVH).
- Le code source (ce dossier) poussé sur un dépôt **GitHub** (recommandé) ou déployé via Vercel CLI.

## 2. Déploiement sur Vercel (Recommandé via GitHub)

1. **Pousser le code sur GitHub** :
   - Créez un nouveau repository sur GitHub (ex: `optipro-website`).
   - Poussez le code local vers ce repository.
     ```bash
     git remote add origin https://github.com/votre-username/optipro-website.git
     git push -u origin main
     ```

2. **Connecter Vercel** :
   - Allez sur [Vercel Dashboard](https://vercel.com/dashboard).
   - Cliquez sur **"Add New..."** -> **"Project"**.
   - Importez le repository `optipro-website`.
   - **Framework Preset** : Next.js (détecté automatiquement).
   - **Build Command** : `next build` (défaut).
   - Cliquez sur **"Deploy"**.

## 3. Configuration du Domaine (optipro.fr)

Une fois le projet déployé sur Vercel :

1. Allez dans l'onglet **Settings** du projet Vercel > **Domains**.
2. Ajoutez votre domaine : `optipro.fr`.
3. Vercel vous donnera des **enregistrements DNS** à configurer chez OVH.
   
   Généralement, pour un domaine racine (`optipro.fr`) :
   - **Type** : A
   - **Nom** : @
   - **Valeur** : 76.76.21.21

   Et pour le sous-domaine (`www.optipro.fr`) :
   - **Type** : CNAME
   - **Nom** : www
   - **Valeur** : cname.vercel-dns.com

4. **Connectez-vous à OVH** :
   - Web Cloud > Domaines > optipro.fr > Zone DNS.
   - Modifiez ou ajoutez les entrées ci-dessus.
   - Supprimez les anciennes entrées (type TXT ou A) qui pointaient vers l'hébergement par défaut d'OVH si nécessaire.

5. Attendez la propagation (quelques minutes à 24h). Vercel générera automatiquement le certificat SSL (HTTPS).

## 4. Maintenance & Mises à jour
- Chaque fois que vous ferez un `git push` sur la branche `main`, Vercel redéploiera automatiquement le site.
- Pour modifier les textes, éditez les fichiers dans `src/app/` et pushez les changements.

## 5. Brancher un Back-office (Railway)
Si vous souhaitez ajouter une base de données ou un CRM plus tard :
- Créez un projet sur **Railway**.
- Déployez une base de données (Postgres) ou votre backend.
- Ajoutez les variables d'environnement dans Vercel (Settings > Environment Variables) pour connecter le front au back.

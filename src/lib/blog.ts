/**
 * Blog OptiPro — données statiques
 *
 * Pas de CMS externe, pas de MDX : la source de vérité du blog
 * est ce fichier. Chaque article est un objet typé `Article` avec
 * du HTML maîtrisé en interne.
 */

export type Article = {
  slug: string;
  titre: string;
  description: string; // meta description ~155 chars
  datePublication: string; // ISO "YYYY-MM-DD"
  tempsLecture: number; // minutes
  categorie: string;
  motsCles: string[];
  contenu: string; // HTML interne maîtrisé (statique, pas d'input utilisateur)
};

export const articles: Article[] = [
  // ────────────────────────────────────────────────────────────────
  // Article 1 — Automatiser ses devis
  // ────────────────────────────────────────────────────────────────
  {
    slug: 'automatiser-devis-artisan',
    titre: "Comment automatiser ses devis en tant qu'artisan (sans se ruiner)",
    description:
      "Finies les heures perdues à recopier des devis dans Excel. Voici comment les artisans du bâtiment peuvent automatiser leur facturation avec des outils simples et abordables.",
    datePublication: '2026-04-15',
    tempsLecture: 6,
    categorie: 'Automatisation',
    motsCles: [
      'devis artisan',
      'automatisation devis',
      'logiciel devis artisan',
      'facturation artisan automatique',
      'artisan bâtiment gestion',
    ],
    contenu: `
<p class="lead">Vous êtes plombier, électricien ou maçon. Vous rentrez du chantier à 18h, fatigué. Et là, au lieu de souffler, vous ouvrez Excel pour faire vos devis. Une heure plus tard, vous avez recopié les mêmes lignes que la semaine dernière, vous avez oublié la TVA sur un poste, et le client n'a toujours pas reçu son chiffrage.</p>

<p>Si vous faites 10 devis par semaine, ça représente <strong>10 heures perdues</strong>. À 50 € de l'heure facturable, c'est 500 € de chiffre d'affaires qui s'envolent chaque semaine. Soit 24 000 € par an. Pour des tâches que des outils peuvent gérer en grande partie à votre place.</p>

<p>Cet article vous explique concrètement comment passer de l'enfer du devis manuel à un système qui tourne presque tout seul, avec des outils accessibles à un artisan indépendant.</p>

<h2>Le devis manuel : un gouffre de temps souvent invisible</h2>

<p>Le problème avec le devis manuel, c'est qu'il ne se voit pas dans la compta. C'est du temps qui disparaît dans un fichier Excel, dans une boîte mail, dans un coin de bureau le dimanche soir. Mais les chiffres sont là.</p>

<p>D'après une enquête de la <em>CAPEB</em> (Confédération de l'Artisanat et des Petites Entreprises du Bâtiment), un artisan du bâtiment passe en moyenne <strong>15 à 20 % de son temps</strong> sur l'administratif. Sur 40 heures par semaine, c'est 6 à 8 heures consacrées à du travail non facturable.</p>

<ul>
  <li><strong>Re-saisie des informations client</strong> à chaque nouveau devis (nom, adresse, téléphone, SIRET).</li>
  <li><strong>Calcul manuel</strong> des quantités, prix unitaires, TVA, totaux HT/TTC. Une erreur sur la TVA et c'est un client mécontent.</li>
  <li><strong>Mise en forme</strong> dans Word ou Excel pour que ça fasse pro.</li>
  <li><strong>Envoi manuel</strong> par email avec pièce jointe PDF générée à la main.</li>
  <li><strong>Suivi</strong> : « Le client a-t-il reçu ? Va-t-il signer ? » — dans la tête, pas dans un système.</li>
</ul>

<p>Multipliez ça par 10 devis par semaine et vous comprenez pourquoi vous travaillez 55 heures pour en facturer 35.</p>

<h2>Les 3 outils pour automatiser ses devis (selon votre profil)</h2>

<p>Bonne nouvelle : il n'est plus nécessaire d'avoir un comptable à temps plein ou un logiciel à 5 000 € pour automatiser. Voici les trois outils qui couvrent 95 % des besoins d'un artisan.</p>

<h3>1. Pennylane — le plus complet (à partir de 29 € HT/mois)</h3>

<p><strong>Pour qui ?</strong> Les artisans qui veulent un outil unique pour devis, factures, comptabilité et suivi de trésorerie. Idéal si vous avez déjà un expert-comptable (Pennylane est conçu pour collaborer avec lui).</p>

<p><strong>Ce qu'il fait bien :</strong></p>
<ul>
  <li>Modèles de devis pré-remplis avec votre logo, mentions légales, conditions de paiement.</li>
  <li>Catalogue produits/prestations : vous tapez « WC suspendu Geberit » et tout se remplit (description, prix, TVA).</li>
  <li>Conversion devis → facture en un clic une fois le chantier terminé.</li>
  <li>Synchronisation bancaire automatique : vous voyez en temps réel qui a payé.</li>
  <li>Relances de paiement programmées (J+7, J+15, J+30) automatiques.</li>
</ul>

<h3>2. Dolibarr — l'option open source (gratuit ou ~10 €/mois en cloud)</h3>

<p><strong>Pour qui ?</strong> Les artisans à l'aise avec l'informatique, qui veulent un outil gratuit et autonome, sans abonnement mensuel.</p>

<p><strong>Ce qu'il fait bien :</strong></p>
<ul>
  <li>Module devis/factures complet et personnalisable.</li>
  <li>Gestion clients/fournisseurs intégrée.</li>
  <li>Possibilité d'auto-héberger (gratuit) ou de prendre un cloud type DoliCloud (~10 €/mois).</li>
</ul>

<p><strong>Le bémol :</strong> l'interface est plus austère et la prise en main demande quelques heures. À réserver aux artisans qui aiment bidouiller.</p>

<h3>3. Batappli — spécialisé bâtiment (à partir de 25 € HT/mois)</h3>

<p><strong>Pour qui ?</strong> Les artisans du bâtiment qui veulent un logiciel qui parle leur métier — métrés, situations de travaux, sous-détails de prix, attestations TVA réduite.</p>

<p><strong>Ce qu'il fait bien :</strong></p>
<ul>
  <li>Bibliothèques de prix bâtiment intégrées (Batiprix, etc.).</li>
  <li>Métrés et calculs de surfaces directement dans le devis.</li>
  <li>Attestations de TVA à 10 % et 5,5 % gérées automatiquement.</li>
  <li>Situations de travaux pour les chantiers longs.</li>
</ul>

<h2>Comment ça marche concrètement (exemple plombier)</h2>

<p>Prenons Marc, plombier installé à Cagnes-sur-Mer. Avant, il faisait ses devis le soir sur Excel : 45 minutes par devis en moyenne. Aujourd'hui, avec Pennylane, voici son nouveau processus :</p>

<ol>
  <li><strong>Sur le chantier (5 min)</strong> : il prend les mesures et photographie l'existant avec son téléphone.</li>
  <li><strong>Au bureau (12 min)</strong> : il ouvre Pennylane sur son téléphone, sélectionne le client (créé une fois pour toutes), pioche dans son catalogue (« Remplacement chauffe-eau 200L », « Pose mitigeur thermostatique »…), ajuste la main-d'œuvre.</li>
  <li><strong>Envoi (1 clic)</strong> : le PDF est généré automatiquement, envoyé par email avec un lien de signature électronique.</li>
  <li><strong>Suivi auto</strong> : si le client n'a pas répondu en 3 jours, Pennylane lui envoie un rappel poli signé du nom de Marc.</li>
</ol>

<p>Total : <strong>18 minutes au lieu de 45</strong>. Sur 10 devis hebdo, Marc récupère 4h30 par semaine. Plus de 200 heures par an. C'est l'équivalent d'un mois de travail.</p>

<h2>Et si on veut aller plus loin ?</h2>

<p>Une fois la base en place, on peut empiler les automatisations malines :</p>

<ul>
  <li><strong>Notifications client automatiques</strong> : « Votre devis a été envoyé », « Votre facture est disponible », « Votre acompte a été reçu ».</li>
  <li><strong>Relances impayés</strong> programmées avec des messages adaptés au stade (rappel cordial → mise en demeure).</li>
  <li><strong>Synchronisation comptable</strong> : votre expert-comptable accède directement à Pennylane, plus besoin de lui envoyer les factures par mail à la fin du mois.</li>
  <li><strong>Tableaux de bord</strong> : CA mensuel, taux de transformation devis → facture, top 10 clients, panier moyen.</li>
  <li><strong>Connexion compte bancaire</strong> : le rapprochement bancaire se fait automatiquement, vous savez qui a payé sans avoir à éplucher vos relevés.</li>
</ul>

<h2>Combien ça coûte vraiment ?</h2>

<p>Faisons le calcul honnête. Pennylane à 29 € HT/mois, ça fait 348 € HT/an. Si vous récupérez ne serait-ce que <strong>4 heures par mois</strong> grâce à l'outil (très conservateur), à 50 € de l'heure facturable, vous gagnez 200 € par mois soit 2 400 € par an. ROI de plus de 600 %.</p>

<p>Et ça, c'est sans compter le confort mental, la baisse des erreurs de TVA, et la pro-image renvoyée au client qui reçoit un devis propre, signé électroniquement, suivi automatiquement.</p>

<h2>Par où commencer ?</h2>

<p>Pas besoin de tout révolutionner d'un coup. Voici la séquence que je recommande aux artisans que j'accompagne :</p>

<ol>
  <li><strong>Semaine 1</strong> : choisir un outil (Pennylane si vous voulez le plus simple) et créer son compte.</li>
  <li><strong>Semaine 2</strong> : importer ou ressaisir vos 20 clients principaux.</li>
  <li><strong>Semaine 3</strong> : construire votre catalogue produits/prestations (les 30 lignes que vous utilisez 80 % du temps).</li>
  <li><strong>Semaine 4</strong> : faire vos premiers devis dessus, en gardant Excel en sécurité.</li>
  <li><strong>Mois 2</strong> : basculer 100 % et fermer Excel pour les devis.</li>
</ol>

<p>En un mois, vous avez basculé. En trois, vous ne pourriez plus revenir en arrière.</p>

<div class="callout">
  <p><strong>Vous voulez gagner du temps sans vous tromper d'outil ?</strong></p>
  <p>Je propose un audit gratuit de 30 minutes pour les artisans : on regarde votre situation actuelle (volume de devis, outils, points de friction), et je vous indique l'outil le plus adapté à votre cas. Pas de blabla commercial, juste du concret.</p>
  <a href="/contact" class="callout-link">Réserver mon audit gratuit →</a>
</div>
`,
  },

  // ────────────────────────────────────────────────────────────────
  // Article 2 — Outils qui font perdre du temps
  // ────────────────────────────────────────────────────────────────
  {
    slug: 'outils-qui-font-perdre-temps-artisans',
    titre:
      "Les 5 outils qui font perdre du temps aux artisans (et comment s'en sortir)",
    description:
      "Excel pour les devis, WhatsApp pour les relances, un cahier pour le planning... Ces outils du quotidien coûtent en réalité des heures aux artisans. Voici comment en sortir.",
    datePublication: '2026-04-08',
    tempsLecture: 5,
    categorie: 'Productivité',
    motsCles: [
      'outils artisan',
      'gestion temps artisan',
      'productivité artisan',
      'organisation artisan',
      'outils numériques artisan',
    ],
    contenu: `
<p class="lead">Vous êtes artisan, pas comptable. Alors pourquoi passez-vous 3 heures par semaine sur Excel ? Pourquoi votre planning est-il dans un cahier que vous trimballez du chantier au bureau ? Pourquoi cherchez-vous le numéro de M. Dupont dans 4 mois de WhatsApp ?</p>

<p>Ce n'est pas votre faute. Ce sont les outils qui sont mal adaptés. Ils étaient « gratuits » ou « pratiques » au début, ils sont devenus une habitude. Mais aujourd'hui, ils coûtent. En temps, en erreurs, en clients perdus.</p>

<p>Voici les 5 outils que je vois revenir chez 9 artisans sur 10 — et comment passer à mieux sans complexifier sa vie.</p>

<h2>Outil 1 — Excel pour les devis</h2>

<p><strong>Le problème :</strong> Excel n'a pas été conçu pour faire des devis. Vous re-saisissez les coordonnées client à chaque fois, vous oubliez de mettre à jour la numérotation, vous calculez la TVA manuellement (et parfois mal), vous exportez en PDF qui se déforme à l'impression. Et surtout, vous n'avez aucune visibilité : qui a reçu son devis ? qui a signé ? qui a oublié ?</p>

<p><strong>Le coût caché :</strong> 30 à 45 minutes par devis × 8 devis/semaine = 4 à 6 heures perdues. Plus les erreurs de TVA qui peuvent coûter cher en cas de contrôle.</p>

<p><strong>L'alternative :</strong> un outil de devis dédié comme Pennylane (29 € HT/mois) ou Henrri (gratuit pour les fonctions de base). Vous gagnez 60 % du temps, vous éliminez les erreurs de calcul, et vous avez un suivi clair.</p>

<h2>Outil 2 — WhatsApp pour les relances clients</h2>

<p><strong>Le problème :</strong> WhatsApp est génial pour discuter. Catastrophique pour piloter une activité. Les messages se mélangent (perso et pro), les conversations se perdent dans le scroll, vous ne pouvez pas chercher « tous les clients qui n'ont pas répondu depuis 7 jours », et surtout… vous oubliez. Combien de devis dorment dans WhatsApp parce que vous avez oublié de relancer ?</p>

<p><strong>Le coût caché :</strong> 1 devis sur 3 non signé faute de relance. Si votre panier moyen est de 1 500 €, c'est plusieurs milliers d'euros par mois qui partent en fumée.</p>

<p><strong>L'alternative :</strong> les relances automatiques d'un outil de devis. Vous envoyez le devis → le système relance à J+3, J+7, J+15, avec votre signature. Vous ne faites plus rien, et le taux de signature monte mécaniquement.</p>

<h2>Outil 3 — Le cahier ou agenda papier pour le planning</h2>

<p><strong>Le problème :</strong> Le cahier, c'est rassurant. Mais : il ne se synchronise pas avec votre téléphone, vous ne pouvez pas le partager avec votre conjoint(e) qui prend les rendez-vous, vous ne pouvez pas voir votre dispo « en deux clics » quand un client vous appelle au feu rouge, et si vous le perdez… c'est la panique.</p>

<p><strong>Le coût caché :</strong> doubles bookings, rendez-vous oubliés, clients qui appellent pour confirmer parce qu'ils n'ont pas eu de rappel. Sans parler du temps passé à le recopier ou à chercher une date.</p>

<p><strong>L'alternative :</strong> Google Calendar (gratuit) ou un agenda intégré à votre outil de gestion. Avantages immédiats : accès depuis le téléphone, partage avec un proche, rappels automatiques aux clients par SMS la veille du rendez-vous (taux de no-show divisé par 3).</p>

<h2>Outil 4 — L'email classique pour les bons de commande fournisseurs</h2>

<p><strong>Le problème :</strong> Vous envoyez un bon de commande à votre grossiste par email, en pièce jointe Word. Vous ne savez pas s'il a été reçu, lu, traité. Vous appelez pour vérifier. Vous oubliez de noter ce que vous avez commandé. Et la facture arrive avec une référence que vous ne reconnaissez pas trois semaines plus tard.</p>

<p><strong>Le coût caché :</strong> erreurs de commande (mauvaise référence, mauvaise quantité), retours de matériel, retards de chantier, surstocks oubliés dans le camion.</p>

<p><strong>L'alternative :</strong> les portails fournisseurs (Cedeo, Rexel, Point.P ont tous des espaces pro avec historique des commandes), ou un outil de gestion qui crée le bon de commande à partir du devis automatiquement.</p>

<h2>Outil 5 — Les virements manuels et relevés papier pour la compta</h2>

<p><strong>Le problème :</strong> Vous faites vos virements à la banque depuis le site web, vous gardez les relevés en PDF dans un dossier, vous envoyez tout ça à votre comptable une fois par trimestre dans une grosse enveloppe ou un email à pièces jointes multiples. Le comptable galère, vous re-classez, et au final vous n'avez aucune visibilité sur votre trésorerie en temps réel.</p>

<p><strong>Le coût caché :</strong> stress de fin de trimestre, honoraires comptables plus élevés (parce que c'est plus long pour lui), aucune anticipation des trous de trésorerie.</p>

<p><strong>L'alternative :</strong> connecter son compte bancaire pro à un outil comme Pennylane ou Indy. Le rapprochement se fait tout seul, le comptable accède en direct, vous voyez votre trésorerie en temps réel, et la TVA se calcule automatiquement.</p>

<h2>Le vrai coût total de ces 5 outils</h2>

<p>Faisons le calcul. Si vous cumulez ces 5 outils « gratuits » :</p>

<ul>
  <li>Excel devis : 5 h/semaine</li>
  <li>WhatsApp relances : 1 h/semaine + devis perdus</li>
  <li>Cahier planning : 1 h/semaine + no-shows</li>
  <li>Email fournisseurs : 1 h/semaine + erreurs</li>
  <li>Virements et relevés : 2 h/semaine + frais comptable</li>
</ul>

<p><strong>Total : 10 heures par semaine</strong>, soit 40 heures par mois. Une semaine entière de travail. Tous les mois.</p>

<p>Pour 50 € HT/mois d'outils bien choisis, vous récupérez cette semaine. Et vous l'utilisez pour faire des chantiers facturables — ou pour souffler.</p>

<h2>Par où commencer ?</h2>

<p>N'essayez pas de tout changer d'un coup. Vous allez vous décourager. La méthode qui marche :</p>

<ol>
  <li><strong>Mois 1</strong> : remplacer Excel par un vrai outil de devis. C'est celui qui a le plus gros impact.</li>
  <li><strong>Mois 2</strong> : connecter le compte bancaire et basculer la compta.</li>
  <li><strong>Mois 3</strong> : passer le planning sur Google Calendar, activer les SMS de rappel.</li>
  <li><strong>Mois 4+</strong> : optimiser les relances, les fournisseurs, etc.</li>
</ol>

<p>En 90 jours, vous avez transformé votre entreprise sans drame. Et vous ne reviendrez plus en arrière.</p>

<div class="callout">
  <p><strong>Vous voulez savoir lesquels de ces outils vous coûtent le plus cher ?</strong></p>
  <p>Je propose un audit gratuit de 30 minutes : on identifie ensemble les 2 ou 3 outils prioritaires à remplacer dans votre cas, avec un plan d'action concret. Sans engagement.</p>
  <a href="/contact" class="callout-link">Réserver mon audit gratuit →</a>
</div>
`,
  },

  // ────────────────────────────────────────────────────────────────
  // Article 3 — Site web artisan : combien ça coûte
  // ────────────────────────────────────────────────────────────────
  {
    slug: 'site-web-artisan-combien-ca-coute',
    titre: 'Site web pour artisan : combien ça coûte vraiment en 2026 ?',
    description:
      "De 0€ à 5000€, les prix d'un site web artisan varient énormément. Ce guide transparent compare les options : DIY, agence, freelance — avec les vrais coûts et pièges à éviter.",
    datePublication: '2026-04-01',
    tempsLecture: 7,
    categorie: 'Site web',
    motsCles: [
      'site web artisan prix',
      'créer site web artisan',
      'combien coûte site artisan',
      'site internet plombier',
      'site web artisan pas cher',
    ],
    contenu: `
<p class="lead">« J'ai besoin d'un site, mais je ne sais pas combien ça coûte. » C'est la phrase que j'entends le plus souvent quand un artisan me contacte. Et c'est normal : sur le marché du site web, on trouve tout et son contraire. 0 € chez Wix, 8 000 € chez une agence, 1 500 € chez un freelance. Qui dit vrai ?</p>

<p>Cet article est un guide transparent. Pas de discours commercial, pas de « ça dépend ». Juste les vrais prix, ce qu'on a pour son argent, et les pièges à éviter en 2026.</p>

<h2>Pourquoi un site est devenu indispensable en 2026</h2>

<p>Avant d'aller dans les prix, posons la question : <em>est-ce que c'est vraiment nécessaire ?</em></p>

<p>Réponse courte : <strong>oui</strong>. Voici pourquoi.</p>

<ul>
  <li><strong>Google est le premier réflexe</strong>. Quand quelqu'un cherche « plombier Vence », il tape sur Google. Sans site, vous n'existez pas dans cette recherche.</li>
  <li><strong>Les avis se vérifient en ligne</strong>. Avant d'appeler, le client va voir vos réalisations, vos avis, vos tarifs.</li>
  <li><strong>Le devis en ligne est devenu un standard</strong>. Un formulaire de contact bien fait fait gagner 30 % de leads supplémentaires par rapport à un simple numéro de téléphone.</li>
  <li><strong>Crédibilité</strong>. Pas de site = entreprise « moins sérieuse » dans l'esprit du client, à tort ou à raison.</li>
</ul>

<p>Maintenant qu'on est d'accord sur le « pourquoi », parlons du « combien ».</p>

<h2>Les 4 options et leurs vrais coûts</h2>

<h3>Option 1 — DIY avec Wix, Squarespace ou Jimdo (0 à 300 €/an)</h3>

<p><strong>Comment ça marche :</strong> vous créez vous-même votre site avec un outil grand public. Templates pré-faits, glisser-déposer, hébergement inclus.</p>

<p><strong>Vrai coût :</strong> 0 € pour la version gratuite (avec pub Wix), 12 à 25 € HT/mois pour une version pro avec votre nom de domaine. Soit 144 à 300 €/an.</p>

<p><strong>Avantages :</strong></p>
<ul>
  <li>Coût bas et prévisible.</li>
  <li>Vous gardez la main sur tout.</li>
  <li>Pas de dépendance à un prestataire.</li>
</ul>

<p><strong>Inconvénients :</strong></p>
<ul>
  <li>Comptez <strong>15 à 30 heures</strong> de travail pour faire un site correct. Si votre temps vaut 50 €/h, c'est 750 à 1 500 € de coût caché.</li>
  <li>Le SEO (référencement Google) y est moyen. Difficile d'apparaître sur « plombier Vence » avec un site Wix mal optimisé.</li>
  <li>Design souvent « déjà-vu » — vous ressemblez à 10 000 autres artisans.</li>
  <li>Performances limitées (vitesse de chargement) qui pénalisent au passage.</li>
</ul>

<p><strong>Pour qui ?</strong> Vous êtes à l'aise avec l'informatique, vous démarrez votre activité, et un site « vitrine simple » suffit dans un premier temps.</p>

<h3>Option 2 — Template WordPress installé par un proche (500 à 1 500 € one-shot)</h3>

<p><strong>Comment ça marche :</strong> vous achetez un template WordPress pro (40 à 80 €), un nom de domaine + hébergement (60 à 100 €/an), et vous trouvez quelqu'un (cousin, freelance débutant, prestataire low-cost) pour l'installer et personnaliser.</p>

<p><strong>Vrai coût :</strong> 500 à 1 500 € à la création + 100 €/an d'hébergement et nom de domaine.</p>

<p><strong>Avantages :</strong></p>
<ul>
  <li>Plus pro qu'un Wix.</li>
  <li>Vous êtes propriétaire de tout (pas dépendant d'une plateforme).</li>
  <li>Bon rapport qualité/prix pour démarrer.</li>
</ul>

<p><strong>Inconvénients :</strong></p>
<ul>
  <li>Maintenance : WordPress demande des mises à jour régulières (sécurité, plugins). Si personne ne s'en occupe, le site se fait pirater.</li>
  <li>Le SEO doit être configuré manuellement.</li>
  <li>Si la personne qui l'a fait disparaît, vous êtes seul face à un système que vous ne maîtrisez pas.</li>
</ul>

<p><strong>Pour qui ?</strong> Vous avez quelqu'un de confiance qui s'y connaît, et vous prévoyez un budget annuel maintenance (~200 €) pour les mises à jour.</p>

<h3>Option 3 — Agence web (2 000 à 8 000 €)</h3>

<p><strong>Comment ça marche :</strong> vous mandatez une agence locale ou en ligne. Cahier des charges, design sur mesure, développement, livraison.</p>

<p><strong>Vrai coût :</strong> 2 000 à 8 000 € selon la taille de l'agence et la complexité. Souvent un contrat de maintenance à 50-100 €/mois en supplément.</p>

<p><strong>Avantages :</strong></p>
<ul>
  <li>Site qualitatif, design unique.</li>
  <li>Équipe complète (graphiste, dev, chef de projet, parfois rédacteur SEO).</li>
  <li>Suivi structuré.</li>
</ul>

<p><strong>Inconvénients :</strong></p>
<ul>
  <li>Cher pour un artisan : 5 000 € + 80 €/mois, c'est 6 000 € la première année.</li>
  <li>Vous parlez à un commercial, puis à un chef de projet, puis à un dev. Pas d'interlocuteur unique.</li>
  <li>Délais souvent longs (3 à 6 mois pour un projet simple).</li>
  <li>Souvent suréquipé pour vos besoins réels.</li>
</ul>

<p><strong>Pour qui ?</strong> TPE ou PME avec un budget conséquent et des besoins complexes (e-commerce, espace client, multi-langues).</p>

<h3>Option 4 — Freelance spécialisé (1 500 à 5 000 €)</h3>

<p><strong>Comment ça marche :</strong> vous travaillez en direct avec un développeur indépendant qui connaît votre métier (artisan, TPE). Pas de commercial, pas de couches intermédiaires.</p>

<p><strong>Vrai coût :</strong> 1 500 à 5 000 € selon la complexité, souvent avec un forfait maintenance optionnel à 30-50 €/mois.</p>

<p><strong>Avantages :</strong></p>
<ul>
  <li>Interlocuteur unique du début à la fin.</li>
  <li>Site sur mesure, optimisé SEO local.</li>
  <li>Délais courts (4 à 8 semaines en général).</li>
  <li>Bon rapport qualité/prix.</li>
</ul>

<p><strong>Inconvénients :</strong></p>
<ul>
  <li>Dépend d'une seule personne — vérifier sa fiabilité (références, avis, ancienneté).</li>
  <li>Si le freelance disparaît, savoir comment récupérer son site.</li>
</ul>

<p><strong>Pour qui ?</strong> La plupart des artisans et TPE. C'est le meilleur compromis qualité/prix dans 80 % des cas.</p>

<h2>Ce qu'un bon site artisan doit absolument avoir</h2>

<p>Quel que soit le budget, ces éléments sont non négociables :</p>

<ul>
  <li><strong>Formulaire de demande de devis</strong> bien visible, court (5 champs max), envoyé directement par email.</li>
  <li><strong>Numéro de téléphone cliquable</strong> en haut de page, visible sur mobile.</li>
  <li><strong>Carte Google Maps</strong> avec votre zone d'intervention.</li>
  <li><strong>Galerie photos de chantiers</strong> (avant/après si possible).</li>
  <li><strong>Avis clients</strong> intégrés (Google, Trustpilot ou témoignages directs).</li>
  <li><strong>Mobile-first</strong> : 70 % de vos visiteurs arrivent depuis un téléphone.</li>
  <li><strong>Pages dédiées par prestation</strong> (« plomberie », « rénovation salle de bain », etc.) pour le SEO.</li>
  <li><strong>Mentions légales et politique de confidentialité</strong> conformes RGPD.</li>
</ul>

<h2>Les 4 pièges à éviter absolument</h2>

<ol>
  <li><strong>Le contrat de maintenance caché</strong>. Certaines agences vendent un site « pas cher » mais avec un abonnement obligatoire à 80 €/mois pendant 3 ans. Faites le calcul total avant de signer.</li>
  <li><strong>Le design générique</strong>. Si votre site ressemble à celui de votre concurrent direct, vous perdez avant même d'avoir commencé.</li>
  <li><strong>Pas de SEO local</strong>. Un site qui n'apparaît pas sur « plombier Vence » est inutile, peu importe son design. Demandez quel travail SEO est prévu.</li>
  <li><strong>Vous ne gardez pas l'accès</strong>. Vérifiez que vous êtes propriétaire du nom de domaine, de l'hébergement, et que vous pouvez récupérer le code si besoin.</li>
</ol>

<h2>SEO local : pourquoi c'est critique pour un artisan</h2>

<p>Le SEO local, c'est la capacité à apparaître quand quelqu'un tape « plombier + ville » ou « électricien + ville ». Pour un artisan, c'est <strong>la</strong> source de leads la plus rentable.</p>

<p>Concrètement, ça passe par :</p>
<ul>
  <li>Une <strong>fiche Google Business Profile</strong> bien remplie (gratuite, à faire en priorité).</li>
  <li>Des <strong>pages locales</strong> sur votre site : « plombier Vence », « plombier Saint-Paul », « plombier Cagnes-sur-Mer ».</li>
  <li>Des <strong>avis clients</strong> réguliers sur votre fiche Google (10-20 avis = changement radical).</li>
  <li>Des <strong>backlinks locaux</strong> (artisans partenaires, fournisseurs, presse locale).</li>
</ul>

<p>Un bon freelance ou une bonne agence intègre tout ça dès la conception. Sinon, votre site est joli mais invisible.</p>

<h2>Mon conseil honnête</h2>

<p>Si vous démarrez et que vous êtes serré, allez sur Wix le temps de gagner de l'argent (3 à 6 mois). Mais à terme, l'option 4 (freelance spécialisé) est celle qui rapporte le plus. Un site bien fait, optimisé SEO local, génère des leads qualifiés tous les mois pendant des années. Le coût (1 500 à 3 000 €) est amorti en 3 à 6 mois.</p>

<p>Évitez les agences sauf si vous avez plus de 5 000 € de budget et des besoins complexes — sinon vous payez pour des structures dont vous n'avez pas besoin.</p>

<div class="callout">
  <p><strong>Vous hésitez sur le bon budget pour votre site ?</strong></p>
  <p>Audit gratuit de 30 minutes : on regarde votre activité, votre concurrence locale, vos objectifs, et je vous donne une fourchette honnête du budget nécessaire — sans pression de vente.</p>
  <a href="/contact" class="callout-link">Réserver mon audit gratuit →</a>
</div>
`,
  },

  // ────────────────────────────────────────────────────────────────
  // Article 4 — Facturation : 3h à 20 min
  // ────────────────────────────────────────────────────────────────
  {
    slug: 'facturation-artisan-gagner-du-temps',
    titre: 'Facturation artisan : passer de 3h à 20 minutes par semaine',
    description:
      "La facturation prend en moyenne 3h par semaine aux artisans. Avec les bons outils et une routine simple, vous pouvez descendre à 20 minutes. Voici comment.",
    datePublication: '2026-03-25',
    tempsLecture: 5,
    categorie: 'Gestion',
    motsCles: [
      'facturation artisan',
      'logiciel facturation artisan',
      'gagner temps facturation',
      'facture artisan automatique',
      'Pennylane artisan',
    ],
    contenu: `
<p class="lead">En France, un artisan passe en moyenne <strong>15 % de son temps sur des tâches administratives</strong>. Sur une semaine de 40 heures, c'est 6 heures. Et la facturation représente la moitié : 3 heures à éditer des factures, les envoyer, relancer les impayés, vérifier qui a payé.</p>

<p>Cet article vous montre comment passer de 3 heures à 20 minutes par semaine. Pas avec une recette miracle, mais avec une méthode simple en 3 étapes que j'ai vue fonctionner chez tous les artisans que j'ai accompagnés.</p>

<h2>Pourquoi la facturation prend autant de temps</h2>

<p>Avant de chercher la solution, comprenons le problème. La facturation est un voleur de temps invisible parce qu'elle se fait par petits bouts. 5 minutes ici, 15 minutes là, le dimanche soir, le lundi matin. Au total, ça pique 3 heures par semaine. Voici les principaux coupables :</p>

<ul>
  <li><strong>La re-saisie manuelle</strong>. Vous avez fait un devis. Le chantier est terminé. Vous re-saisissez les mêmes lignes dans la facture. Au lieu de cliquer sur « convertir le devis en facture », ce qui prend 3 secondes.</li>
  <li><strong>Les erreurs</strong>. Une TVA à 10 % au lieu de 20 %, un montant mal additionné, une faute sur l'adresse du client. Et c'est reparti pour un avoir, une nouvelle facture, des explications.</li>
  <li><strong>Les relances oubliées</strong>. Une facture envoyée le 5 du mois qui n'est pas payée. Vous oubliez de relancer. 60 jours plus tard, vous re-découvrez l'impayé. C'est trop tard, le client est froid.</li>
  <li><strong>La numérotation manuelle</strong>. « C'était quoi le numéro de la dernière facture ? ». Vous ouvrez 3 fichiers Excel pour vérifier.</li>
  <li><strong>L'envoi par email</strong>. Vous tapez le mail, vous joignez le PDF, vous oubliez parfois la pièce jointe…</li>
  <li><strong>Le suivi des paiements</strong>. Vous regardez votre relevé bancaire, vous cochez à la main qui a payé, vous mettez à jour un fichier Excel.</li>
</ul>

<p>Pris séparément, chaque action paraît courte. Cumulés, ils mangent vos soirées et vos dimanches.</p>

<h2>La méthode en 3 étapes</h2>

<h3>Étape 1 — Centraliser : un seul outil pour tout</h3>

<p>Le premier piège, c'est la dispersion. Excel pour les devis, Word pour les factures, un dossier Drive pour les PDF, votre boîte mail pour l'envoi, votre relevé bancaire pour le suivi. Chaque outil ajoute du temps.</p>

<p><strong>La solution :</strong> un outil unique qui fait <em>tout</em>. Devis, conversion en facture, envoi, relances, suivi paiements, lien banque.</p>

<p>Pour un artisan, je recommande Pennylane (29 € HT/mois) ou Indy (gratuit pour les indépendants). Les deux font le job. Indy est plus simple si vous êtes auto-entrepreneur, Pennylane plus complet si vous avez du volume ou une SARL.</p>

<h3>Étape 2 — Automatiser : laisser l'outil faire le travail</h3>

<p>Une fois centralisé, on automatise. Voici ce qui doit tourner sans vous :</p>

<ul>
  <li><strong>Conversion devis → facture en un clic</strong>. Plus jamais de re-saisie.</li>
  <li><strong>Numérotation automatique</strong>. F-2026-0042, F-2026-0043… L'outil incrémente, vous n'y pensez plus.</li>
  <li><strong>Envoi par email automatique</strong> avec PDF joint, signature électronique, message pré-écrit.</li>
  <li><strong>Modèles de factures</strong> avec votre logo, mentions légales, conditions de paiement.</li>
  <li><strong>Calcul automatique de la TVA</strong> (10 %, 20 %, 5,5 % pour le bâtiment).</li>
  <li><strong>Connexion bancaire</strong> : quand le client paie, la facture passe à « Réglée » toute seule.</li>
</ul>

<p>Comptez <strong>2 heures de paramétrage initial</strong>. Une fois fait, tout tourne.</p>

<h3>Étape 3 — Déléguer (à l'outil) : les relances</h3>

<p>Le plus gros voleur de temps après la saisie, c'est la relance des impayés. Et c'est aussi la source N°1 de problèmes de trésorerie. La bonne nouvelle : c'est totalement automatisable.</p>

<p>Configurez une fois pour toutes :</p>
<ul>
  <li><strong>J+7 après échéance</strong> : rappel cordial. « Bonjour, je me permets un petit rappel concernant la facture F-2026-0042. Cordialement, [votre nom]. »</li>
  <li><strong>J+15</strong> : rappel plus ferme avec mention des pénalités de retard légales.</li>
  <li><strong>J+30</strong> : mise en demeure préalable, copie en LRAR si vous le souhaitez.</li>
</ul>

<p>L'outil envoie tout seul, signé en votre nom. Vous n'intervenez que si le client appelle pour discuter.</p>

<p>Résultat constaté : <strong>taux d'impayés divisé par 3</strong>, et 1 à 2 heures par semaine récupérées sur les relances.</p>

<h2>Pennylane : pourquoi c'est le meilleur choix pour beaucoup d'artisans</h2>

<p>Je n'ai aucun lien commercial avec Pennylane (ni aucun autre outil). Mais c'est le plus complet pour un artisan qui veut gagner du temps. Voici pourquoi :</p>

<ul>
  <li><strong>Tout en un</strong> : devis, factures, banque, comptabilité, trésorerie.</li>
  <li><strong>Connexion bancaire automatique</strong> avec quasiment toutes les banques françaises.</li>
  <li><strong>Collaboration expert-comptable</strong> : votre comptable accède directement, plus besoin de tout lui envoyer.</li>
  <li><strong>Application mobile</strong> propre : vous pouvez faire un devis depuis le chantier.</li>
  <li><strong>Tableau de bord trésorerie</strong> : vous voyez en un coup d'œil ce qui rentre, ce qui sort, qui doit payer.</li>
  <li><strong>Support client réactif</strong> en français.</li>
</ul>

<p>Le prix (29 à 49 € HT/mois selon le forfait) est rapidement amorti. Si vous gagnez 2 h/semaine, ça fait 8 h/mois × 50 €/h = 400 € de valeur, pour 29 € investis. Le ROI est évident.</p>

<p><strong>Alternatives</strong> : Indy (gratuit, plus simple, idéal auto-entrepreneurs), Henrri (gratuit pour devis/factures uniquement), Tiime (similaire à Pennylane).</p>

<h2>La routine du vendredi soir (20 minutes)</h2>

<p>Voici la routine que je recommande, à faire chaque vendredi en fin de journée. 20 minutes, montre en main, et vous êtes à jour.</p>

<ol>
  <li><strong>5 min</strong> : convertir les devis signés de la semaine en factures (1 clic par devis).</li>
  <li><strong>5 min</strong> : envoyer les factures aux clients (l'outil fait l'envoi, vous validez).</li>
  <li><strong>3 min</strong> : vérifier le tableau de bord — qui a payé, qui n'a pas payé. Les relances partent toutes seules, vous regardez juste s'il y a une situation à gérer manuellement.</li>
  <li><strong>5 min</strong> : si un client doit être appelé (impayé sérieux, question), passer le coup de fil.</li>
  <li><strong>2 min</strong> : caler les rendez-vous chantier de la semaine suivante avec les clients qui viennent de signer.</li>
</ol>

<p>Et c'est tout. Vous fermez le PC à 18h30. Le week-end est libre.</p>

<h2>Le bénéfice qu'on n'imagine pas</h2>

<p>Au-delà du temps gagné, il y a un effet psychologique énorme. Quand votre facturation tourne sans vous, vous arrêtez d'y penser. Vous ne vous réveillez plus à 3h du matin en vous disant « est-ce que M. Dupont a payé ? ». Vous n'avez plus cette pile invisible de tâches admin qui plombe votre dimanche.</p>

<p>Vous êtes plus reposé, donc plus efficace sur les chantiers. Vous prenez de meilleures décisions commerciales (parce que vous avez les bons chiffres en temps réel). Et surtout, vous reprenez du plaisir à faire votre métier.</p>

<h2>Combien de temps pour mettre tout ça en place ?</h2>

<p>Soyons honnête : ça demande un effort initial. Comptez :</p>

<ul>
  <li><strong>2 heures</strong> pour choisir l'outil et créer le compte.</li>
  <li><strong>3 heures</strong> pour paramétrer (logo, modèles, catalogue produits, mentions légales).</li>
  <li><strong>2 heures</strong> pour importer les clients existants.</li>
  <li><strong>1 heure</strong> pour connecter la banque et configurer les relances automatiques.</li>
</ul>

<p><strong>Total : 8 heures sur 1 semaine</strong>. Un week-end intense, ou 2 soirées de 4h. Investissement payé en 3 semaines à raison de 3h gagnées chaque semaine.</p>

<div class="callout">
  <p><strong>Vous voulez accélérer la mise en place ?</strong></p>
  <p>Je propose un audit gratuit de 30 minutes pour identifier l'outil le plus adapté à votre activité, et un accompagnement de paramétrage si besoin. L'objectif : que vous soyez opérationnel en 2 semaines, pas en 2 mois.</p>
  <a href="/contact" class="callout-link">Réserver mon audit gratuit →</a>
</div>
`,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getRelatedArticles(currentSlug: string, limit = 3): Article[] {
  return articles
    .filter((a) => a.slug !== currentSlug)
    .sort((a, b) => b.datePublication.localeCompare(a.datePublication))
    .slice(0, limit);
}

export function getAllArticles(): Article[] {
  return [...articles].sort((a, b) =>
    b.datePublication.localeCompare(a.datePublication),
  );
}

export function formatDateFr(isoDate: string): string {
  const date = new Date(isoDate);
  return date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

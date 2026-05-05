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

<p>Si vous faites 10 devis par semaine, ça représente <strong>10 heures perdues</strong>. À 50 € de l'heure facturable (hypothèse haute, 48 semaines), c'est l'équivalent de 24 000 € de potentiel CA non facturé sur l'année si vous arriviez à reconvertir ces heures en chantiers. Pour des tâches que des outils peuvent gérer en grande partie à votre place.</p>

<p>Cet article vous explique concrètement comment passer de l'enfer du devis manuel à un système qui tourne presque tout seul, avec des outils accessibles à un artisan indépendant.</p>

<h2>Le devis manuel : un gouffre de temps souvent invisible</h2>

<p>Le problème avec le devis manuel, c'est qu'il ne se voit pas dans la compta. C'est du temps qui disparaît dans un fichier Excel, dans une boîte mail, dans un coin de bureau le dimanche soir. Mais les chiffres sont là.</p>

<p>D'après les retours d'organisations professionnelles comme la <em>CAPEB</em> (Confédération de l'Artisanat et des Petites Entreprises du Bâtiment), un artisan du bâtiment consacrerait en moyenne <strong>15 à 20 % de son temps</strong> à l'administratif. Sur 40 heures par semaine, c'est 6 à 8 heures consacrées à du travail non facturable.</p>

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

<p><em>Note de transparence : je n'ai aucun lien commercial avec Pennylane ni aucun des outils mentionnés dans cet article. Les recommandations reflètent mon avis personnel après tests.</em></p>

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

<p>Pas besoin de tout révolutionner d'un coup. Voici la séquence que je recommande à un artisan qui démarre cette transition :</p>

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
  <p>Je propose un premier appel de 30 minutes, gratuit et sans engagement : vous me décrivez votre situation (volume de devis, outils actuels, points de friction), je vous indique l'outil le plus adapté à votre cas. Si on peut bosser ensemble, on enchaîne. Sinon, je vous oriente.</p>
  <a href="/contact" class="callout-link">Réserver un premier appel →</a>
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
  <p>Premier appel de 30 minutes, gratuit, sans engagement : vous me décrivez votre situation, on identifie ensemble les 2 ou 3 outils prioritaires à remplacer dans votre cas. Si je peux vous être utile, on enchaîne sur un vrai audit. Sinon, je vous oriente.</p>
  <a href="/contact" class="callout-link">Réserver un premier appel →</a>
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
  <p>Premier appel de 30 minutes, gratuit : vous me décrivez votre activité, votre concurrence locale, vos objectifs, et je vous donne une fourchette honnête du budget nécessaire — sans pression de vente.</p>
  <a href="/contact" class="callout-link">Réserver un premier appel →</a>
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

<p>Cet article vous montre comment passer de 3 heures à 20 minutes par semaine. Pas avec une recette miracle, mais avec une méthode simple en 3 étapes, éprouvée pendant 10 ans à coordonner des artisans sous-traitants — et que je reproduirais aujourd'hui chez n'importe quel artisan indépendant.</p>

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

<p>Résultat couramment rapporté par les utilisateurs (témoignages publics éditeurs) : <strong>taux d'impayés divisé par 2 à 3</strong>, et 1 à 2 heures par semaine récupérées sur les relances.</p>

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
  <p>Premier appel de 30 minutes, gratuit, pour identifier l'outil le plus adapté à votre activité. Si vous voulez un accompagnement de paramétrage, on cadre ça ensemble. L'objectif : que vous soyez opérationnel en 2 semaines, pas en 2 mois.</p>
  <a href="/contact" class="callout-link">Réserver un premier appel →</a>
</div>
`,
  },

  // ────────────────────────────────────────────────────────────────
  // Article 5 — Manifeste 2026 : repositionnement ops/exploitation
  // ────────────────────────────────────────────────────────────────
  {
    slug: 'pourquoi-optipro-elargit-pme-logistique-transport-btp',
    titre: "Pourquoi OptiPro élargit aux PME logistique, transport et BTP en 2026",
    description:
      "OptiPro reste accessible aux artisans et TPE — et ouvre un second axe : l'exploitation des PME logistique, transport et BTP. Pourquoi maintenant, et ce que ça change.",
    datePublication: '2026-05-05',
    tempsLecture: 4,
    categorie: 'Manifeste',
    motsCles: [
      'OptiPro repositionnement',
      'consultant exploitation logistique',
      'IA opérationnelle PME',
      'automatisation transport',
      'consultant ops PME',
    ],
    contenu: `
<p class="lead">OptiPro reste un atelier centré sur les TPE, les artisans et les indépendants. Mais à partir de 2026, j'ouvre un second axe : l'<strong>exploitation des PME logistique, transport et BTP</strong>. Pas par opportunisme — par cohérence avec ce que j'ai fait pendant 10 ans.</p>

<h2>D'où ça vient</h2>

<p>Avant OptiPro, j'ai été responsable logistique et exploitation pendant une décennie. Toute la Nutrition (400 commandes/jour), DBS Drive (8 500 références gérées), Eddifis (création complète d'une filiale, ERP EBP déployé personnellement, 80 k€/mois de CA), Factory pendant 5 ans (portefeuille ADV de 7 M€, projets entre 20 k€ et 1 M€, 15 à 20 sous-traitants supervisés au quotidien), puis GL Events Live de septembre 2025 à avril 2026 (dépôt événementiel, équipe de 6, sous-traitants événementiel sur délais ultra-courts). En avril 2026 j'ai quitté l'exploitation pour me consacrer à OptiPro à temps plein.</p>

<p>Quand j'ai lancé OptiPro en 2025, j'ai démarré sur ce que je connaissais aussi très bien : les artisans et les TPE. Parce que j'ai passé une partie de ces 10 ans à coordonner des plombiers, électriciens, chauffagistes, peintres. Et parce que c'est la cible la plus accessible quand on lance une activité de conseil.</p>

<p>Mais en discutant avec d'anciens collègues, dirigeants et sous-traitants croisés pendant ces 10 ans — je me suis rendu compte d'un truc évident : <strong>j'ai un capital opérationnel rare dans le monde du conseil IA</strong>. La plupart des consultants IA n'ont jamais déployé un ERP, jamais coordonné 20 sous-traitants, jamais construit un fichier de KPIs hebdo qui ne casse pas. Moi si.</p>

<h2>Ce qui change concrètement</h2>

<p>OptiPro garde sa cible historique : <strong>artisans, TPE, indépendants</strong>. Pack Visibilité à 890€, Site vitrine pro à partir de 2 400€. Une offre serrée et claire, sans 15 produits qui se ressemblent.</p>

<p>Ce qui s'ajoute : une <strong>nouvelle catégorie "PME ops & exploitation"</strong>, pensée pour les dirigeants et responsables d'exploitation de PME logistique, transport et BTP :</p>

<ul>
  <li><strong>Audit ops</strong> — à partir de 1 500 € HT, 1 semaine. Diagnostic complet : flux, ERP/TMS/WMS, sous-traitants, reporting. Restitution écrite avec plan d'action chiffré.</li>
  <li><strong>Automatisation reporting hebdo</strong> — à partir de 3 500 € HT, 2-3 semaines. Vos KPIs (taux de service, marge transport, retards, sous-traitance) consolidés automatiquement chaque lundi matin.</li>
  <li><strong>Refonte process sous-traitants</strong> — sur devis, 4-8 semaines. Cadrage opérationnel et outillage pour piloter 10 à 50 sous-traitants : OS, suivi terrain, facturation.</li>
</ul>

<p>Pour les sites complexes (catalogue, espace client, intégrations API, web app métier), une troisième catégorie <strong>"Projets sur mesure"</strong> propose un site complet à partir de 6 500 € HT et la web app sur devis selon le cahier des charges.</p>

<h2>Ce qui ne change pas</h2>

<p>Le ton terrain. Les ratés assumés. Pas de hype. J'analyse, je conçois, je construis. Si on bosse ensemble, vous m'avez en direct du diagnostic à la livraison.</p>

<p>Le blog OptiPro continue avec deux types d'articles : ceux pour les artisans/TPE (devis, fiche Google, relances) et ceux pour les responsables d'exploitation PME (reporting hebdo, sous-traitants, KPI ops). Vous filtrez par catégorie sur la page <a href="/blog">/blog</a>.</p>

<h2>Pour qui c'est fait — et pour qui c'est pas</h2>

<p><strong>C'est fait pour vous si</strong> vous dirigez ou pilotez l'exploitation d'une PME (transport, logistique, BTP, distribution, événementiel). Vos process tiennent par habitude. Votre ERP ne se parle pas avec le terrain. Vous passez 3h chaque lundi à monter un reporting que personne ne lit vraiment. Vous avez 10 à 50 sous-traitants pilotés à coups d'emails et d'Excel.</p>

<p><strong>C'est pas fait pour vous si</strong> vous cherchez un consultant IA "transformation digitale" qui vend du LLM custom à 50 k€. OptiPro reste un atelier solo, pas un cabinet. Mes interventions sont chiffrées d'avance, les livrables sont clairs, et le ROI cible est défini noir sur blanc avant signature. Pas de salaire-mission qui s'éternise.</p>

<div class="callout">
  <p><strong>Vous êtes responsable d'exploitation, directeur logistique ou dirigeant PME ?</strong></p>
  <p>Le premier appel découverte est toujours gratuit (30 min, sans engagement). On parle de votre exploitation, pas de la mienne.</p>
  <a href="/contact?cible=pme-ops" class="callout-link">Parler de mon exploitation →</a>
</div>

<p style="margin-top:2rem">— Pierre</p>
`,
  },

  // ────────────────────────────────────────────────────────────────
  // Article 6 — Reporting hebdo : 3h → 4 minutes (méthode)
  // ────────────────────────────────────────────────────────────────
  {
    slug: 'reporting-hebdo-excel-3h-en-4-minutes',
    titre: "Le reporting hebdo Excel que vous mettez 3h à faire — comment l'IA le fait en 4 minutes",
    description:
      "Lundi matin, le reporting transport ou logistique qui mange un après-midi entier. Le prompt exact, l'outil, et la mise en garde sur la confidentialité des données.",
    datePublication: '2026-05-03',
    tempsLecture: 8,
    categorie: 'Logistique',
    motsCles: [
      'reporting hebdomadaire',
      'automatisation Excel transport',
      'IA reporting logistique',
      'TMS export Excel',
      'reporting PME logistique',
    ],
    contenu: `
<p class="lead">Lundi matin. 8h15. Vous ouvrez votre boîte mail. Le directeur général veut son reporting hebdomadaire pour 11h. Vous savez ce qui vous attend : sortir l'export TMS, comparer avec l'export compta, recouper les volumes par client, calculer les marges par tournée, mettre tout ça dans le tableau habituel, formater les couleurs, écrire les trois lignes de commentaire.</p>

<p>Trois heures. Plus si un transporteur a déclaré ses km avec deux jours de retard.</p>

<p>Vous le faites parce qu'il faut le faire. Mais le mardi, le rapport est déjà périmé : il y a eu deux nouveaux affrètements lundi, une rupture chez un client, un litige carburant qui change la marge d'une tournée. Le rapport raconte la semaine d'avant. Pas la semaine en cours.</p>

<p>Cet article décrit <strong>la méthode pour ramener ce reporting de 3h à environ 4-8 minutes</strong> avec un prompt et un fichier. Aucun outil exotique. Pas de code. Une seule règle de méthode.</p>

<h2>Le piège : l'IA face au reporting</h2>

<p>La première erreur, c'est de demander à ChatGPT <em>"fais-moi un reporting transport de la semaine"</em>. Vous obtenez un texte générique sur le reporting transport en général, qui ne sert à rien.</p>

<p>La deuxième erreur, c'est de coller votre Excel et de dire <em>"analyse-moi ça"</em>. Vous obtenez une analyse vague, parfois fausse parce que l'IA hallucine sur des chiffres qu'elle ne sait pas lire correctement.</p>

<p>La bonne approche tient en une phrase : <strong>on demande à l'IA de produire le tableau, pas de l'interpréter</strong>. Et on lui donne tout ce qu'il faut pour le produire — le bon contexte, les bons exports, la bonne structure attendue.</p>

<h2>Le matériel à préparer (15 minutes, une seule fois)</h2>

<p>Avant de pouvoir faire le reporting en 4 minutes la semaine prochaine, il faut 15 minutes pour préparer le terrain. Une seule fois. Après, c'est mécanique.</p>

<p><strong>1. L'export TMS de la semaine.</strong> Format CSV. Colonnes minimales : numéro d'OT, date, client, transporteur, km parcourus, recette, coût d'achat. Si votre TMS sort plus, c'est mieux. Si il sort moins, on s'adapte (voir plus bas).</p>

<p><strong>2. La structure du rapport attendu par le DG.</strong> Vous l'avez sous les yeux toutes les semaines. Ouvrez-le, copiez les en-têtes des colonnes, copiez la liste des clients par ordre habituel, copiez la zone de commentaire. Tout ça va devenir le <strong>template</strong>.</p>

<p><strong>3. Une convention de nommage pour les fichiers.</strong> Toujours <code>export-tms-semaine-XX.csv</code> et <code>template-reporting.xlsx</code>. Ça évite de chercher 10 minutes dans Téléchargements.</p>

<p>C'est tout. Pas de plug-in, pas d'API, pas de connecteur.</p>

<h2>Le prompt exact (à copier-coller)</h2>

<p>Voici le prompt à utiliser chaque lundi. Stockez-le dans une note Apple Notes pinglée ou un Bloc-notes Windows épinglé. Vous le copiez-collez, vous joignez les deux fichiers, vous envoyez.</p>

<pre><code>Tu es l'assistant reporting de notre PME transport. Je te donne deux fichiers :

1. export-tms-semaine-XX.csv : l'export brut de notre TMS pour la
   semaine. Une ligne = un OT (ordre de transport).

2. template-reporting.xlsx : la structure du rapport hebdomadaire
   attendu par notre DG (en-têtes, clients par ordre, format).

Ta mission :

a) Génère le rapport rempli au format Excel, en respectant
   EXACTEMENT la structure du template. Mêmes colonnes, mêmes
   clients, même ordre, même format de cellule.

b) Calcule pour chaque client :
   - le CA (somme des recettes)
   - le coût d'achat (somme des coûts transporteurs)
   - la marge brute (CA - coût)
   - le taux de marge (marge / CA, en %)
   - le nombre d'OT
   - les km totaux

c) Compare avec la semaine précédente si je te fournis le rapport
   de la semaine N-1 en pièce jointe. Si oui, ajoute une colonne
   "Variation N-1" en % pour le CA et la marge.

d) Écris-moi 3 phrases de commentaire à mettre en bas du rapport :
   - Le client le plus rentable de la semaine et pourquoi
   - Le point d'attention (variation négative, marge faible,
     volume anormal)
   - Une recommandation actionnable pour la semaine prochaine

Contraintes IMPORTANTES :
- Si une donnée est manquante dans l'export, écris "n/a" et
  mentionne-le dans le commentaire. NE devine PAS.
- Si tu détectes une incohérence (CA négatif, km à zéro avec
  recette, doublon d'OT), signale-le-moi avant de finaliser le
  rapport.
- Garde TOUS les chiffres en euros, arrondis à l'euro près.
  Pas de centimes.

Livre :
1. Le fichier Excel rempli, prêt à envoyer.
2. Un récap de 5 lignes maximum dans le chat avec les chiffres clés.
3. La liste des incohérences détectées (s'il y en a).</code></pre>

<p>Ce prompt fait <strong>environ 600 mots</strong>. C'est volontaire. C'est ce qui fait la différence entre un résultat moyen et un résultat utilisable.</p>

<h2>Le résultat, en ordre de grandeur</h2>

<p>Ce que vous pouvez raisonnablement attendre :</p>

<ul>
  <li><strong>Avant</strong> : 2h30 à 3h selon la complexité, parfois plus si un transporteur a déclaré ses km en retard.</li>
  <li><strong>Après</strong> : 4 à 8 minutes, dont l'essentiel à uploader les fichiers, vérifier le résultat et corriger 1 à 2 erreurs typiques (un client mal classé, un commentaire à reformuler dans le ton maison).</li>
</ul>

<p>Soit grosso modo <strong>2h30 récupérées chaque semaine</strong>. Sur 45 semaines de boulot, c'est ~110 heures par an. À 80 €/heure de coût chargé, ça représente ~9 000 € de temps qualifié récupéré annuellement. Pour 4 minutes de prompt et 15 minutes de prep une seule fois.</p>

<p>Ces ordres de grandeur sont des estimations issues de la pratique sur des reportings comparables. Le gain réel dépend de la qualité de votre export TMS, de la rigueur du template, et de votre capacité à vérifier rapidement le rendu.</p>

<h2>Mise en garde — confidentialité des données</h2>

<p>Je ne peux pas conclure cet article sans cette section, et c'est la raison pour laquelle beaucoup de directeurs logistique hésitent à se lancer. À raison.</p>

<p><strong>Ce que vous ne devez JAMAIS coller dans un prompt grand public :</strong></p>

<ul>
  <li>Les noms et prénoms de vos clients ou contacts internes.</li>
  <li>Les numéros de téléphone, emails directs, identifiants commerciaux.</li>
  <li>Les conditions tarifaires détaillées par client (vous ne voulez pas que ça parte dans un dataset d'entraînement).</li>
  <li>Les données nominatives des chauffeurs (RGPD).</li>
</ul>

<p><strong>Trois solutions concrètes :</strong></p>

<ol>
  <li><strong>Anonymiser avant l'upload.</strong> Renommez <em>Carrefour Bordeaux</em> en <em>Client A</em>, <em>Société Transport Martin</em> en <em>Transporteur 12</em>. Une simple table de correspondance que vous gardez dans un fichier à part. Vous remettez les vrais noms à la fin.</li>
  <li><strong>Utiliser un compte ChatGPT Team / Claude for Work.</strong> Les conditions diffèrent : pas de réutilisation des données pour l'entraînement, conservation maîtrisée, conformité RGPD documentée. Coût : ~25 €/mois/utilisateur. Pour un reporting qui vous fait gagner 100h/an, le calcul est vite fait.</li>
  <li><strong>Pour les données ultra-sensibles, rester sur du chiffre agrégé.</strong> Vous pouvez très bien envoyer <em>"5 clients représentent 70 % du CA, marges respectives 12 %, 18 %, 22 %, 8 %, 15 %"</em> sans nommer. Le rapport reste utile.</li>
</ol>

<p>⚠ <strong>Ne contournez jamais la règle interne de votre entreprise.</strong> Si votre RSSI a interdit les outils IA grand public, demandez d'abord. Une bonne automatisation refusée par le DSI vaut moins qu'une automatisation médiocre validée.</p>

<h2>Et si votre TMS sort un export mal foutu ?</h2>

<p>C'est le cas le plus fréquent. Les TMS franco-français des années 2010 sortent du CSV avec des séparateurs aléatoires, des dates en JJ/MM/AAAA ou MM/JJ/AAAA selon les exports, des en-têtes en français accentué qui cassent l'encodage.</p>

<p>Trois options :</p>

<ul>
  <li><strong>Une passe de nettoyage avec l'IA.</strong> Demandez-lui de normaliser le CSV avant de produire le rapport. Ajoutez en début de prompt : <em>"Si le séparateur est anormal ou les dates ambiguës, corrige avant de calculer et explique-moi ce que tu as fait."</em></li>
  <li><strong>Un mini-script Python ou JavaScript généré par l'IA</strong>, lancé une fois pour transformer l'export brut en CSV propre. C'est ce que je mets en place lors d'une intervention OptiPro : 30 minutes pour produire un script qui tourne ensuite tout seul.</li>
  <li><strong>Demander à votre éditeur TMS un export propre</strong>, en vous appuyant sur la structure attendue. Vous découvrirez parfois que l'option existe déjà et personne ne l'avait jamais cochée.</li>
</ul>

<div class="callout">
  <p><strong>Vous gérez l'exploitation d'une PME transport, logistique ou BTP ?</strong></p>
  <p>30 minutes au téléphone, gratuit, sans engagement. Vous me décrivez votre stack et vos process, je vous donne 3 leviers concrets sur lesquels vous pourriez gagner du temps — reporting, sous-traitants, ou autres. Si on peut bosser ensemble derrière, on cadre. Sinon, vous repartez avec les pistes.</p>
  <a href="/contact?cible=pme-ops" class="callout-link">Parler de mon exploitation →</a>
</div>

<p style="margin-top:2rem">Le tableau Excel hebdo n'est pas un sujet glamour. Mais c'est probablement le levier IA qui a le meilleur ratio temps-investi / temps-récupéré dans une PME logistique. Un dirigeant qui récupère 2 à 3 heures de temps qualifié par semaine, c'est un dirigeant qui peut enfin regarder ce qui compte vraiment : le développement commercial, la relation client, la stratégie. Pas la maintenance d'un fichier Excel.</p>

<p>— Pierre</p>
`,
  },

  // ────────────────────────────────────────────────────────────────
  // Article 7 — 3 prompts artisan 2026
  // ────────────────────────────────────────────────────────────────
  {
    slug: '3-prompts-qui-font-gagner-5h-par-semaine-artisan',
    titre: "3 prompts qui font gagner 5h par semaine à un artisan en 2026",
    description:
      "Devis depuis 3 lignes de notes, relance facture impayée, réponse à un avis Google négatif. Trois prompts copiables, testés, avec les variantes pour s'adapter à votre métier.",
    datePublication: '2026-05-02',
    tempsLecture: 7,
    categorie: 'Pour les artisans',
    motsCles: [
      'prompts artisan',
      'IA pour artisan',
      'devis automatique artisan',
      'relance facture impayée',
      'réponse avis Google',
    ],
    contenu: `
<p class="lead">Vous êtes plombier, électricien, peintre, paysagiste, coiffeur indépendant, photographe, traiteur. Vous avez une vraie compétence métier, deux mains qui savent faire, et une boîte mail qui déborde le dimanche soir.</p>

<p>Vous savez que l'IA peut vous aider. Vous avez peut-être ouvert un compte ChatGPT, posé deux questions, fermé l'onglet, et oublié.</p>

<p>Cet article ne vous explique pas l'IA. Il vous donne <strong>trois prompts à copier-coller</strong> qui couvrent <strong>80 % de l'admin chronophage</strong> d'un artisan. Pas de théorie. Pas de jargon. Vous lisez, vous copiez, vous adaptez, vous gagnez quelques heures par semaine.</p>

<h2>Ce que vous ne saviez peut-être pas</h2>

<p>L'IA gratuite (version de base de ChatGPT, Claude, Gemini) suffit largement pour les trois prompts ci-dessous. Pas besoin d'abonnement payant pour commencer. La différence entre un résultat médiocre et un résultat utilisable, ce n'est pas l'outil — c'est <strong>la précision du prompt</strong>.</p>

<p>Un bon prompt artisan, c'est 4 ingrédients :</p>
<ol>
  <li><strong>Qui vous êtes</strong> (votre métier, votre contexte).</li>
  <li><strong>Ce que vous voulez</strong> (rédige, écris, propose).</li>
  <li><strong>Le contexte précis</strong> (les notes, le message à traiter, la situation).</li>
  <li><strong>Le format</strong> (longueur, ton, structure).</li>
</ol>

<p>Tous les prompts ci-dessous suivent cette recette. Une fois que vous l'avez comprise, vous pouvez créer les vôtres.</p>

<h2>Prompt 1 — Le devis propre depuis 3 lignes de notes</h2>

<p><strong>Quand l'utiliser :</strong> vous rentrez d'un rendez-vous client. Vous avez pris des notes rapides sur votre téléphone : <em>"salle de bain 6m², lavabo + étanchéité + faïence, 2 jours avec matos"</em>. Il faut transformer ça en devis professionnel pour pouvoir l'envoyer le soir même.</p>

<pre><code>Tu es mon assistant administratif. Je suis [votre métier]. Je
viens de finir un rendez-vous client. Voici mes notes brutes :

[collez vos notes telles quelles, même mal écrites]

Rédige-moi le texte d'un devis professionnel avec :
- Une introduction courte et claire pour le client
- Les prestations détaillées en plusieurs lignes (une ligne par
  poste, format devis classique)
- Une phrase de conclusion qui invite à valider

Ton : direct, sérieux, mais humain. Pas de formule ampoulée
("Madame, Monsieur, soucieux de répondre à vos attentes...").

Si tu manques d'informations sur un point, pose-moi une question
maximum avant de rédiger. Sinon, va directement au devis.

Je ne te demande PAS les prix — je les mets moi-même. Donne juste
le texte.</code></pre>

<p><strong>Ce que vous obtenez en 30 secondes :</strong> un texte de devis propre. Vous le copiez dans votre logiciel de devis (ou Word), vous mettez les chiffres, vous envoyez. <strong>Gain typique : 20 à 30 minutes par devis.</strong></p>

<p><strong>Variante express :</strong> si vos notes font 2 lignes, ajoutez à la fin : <em>"Pose-moi 3 questions maximum si tu manques d'infos."</em></p>

<h2>Prompt 2 — La relance facture sans se mettre mal</h2>

<p><strong>Quand l'utiliser :</strong> la facture a été envoyée il y a trois semaines. Rien. Vous n'osez pas relancer parce que vous n'aimez pas avoir l'air de courir après votre argent. Résultat : la facture dort, et vous, vous bouillez.</p>

<pre><code>Je suis [votre métier]. J'ai envoyé une facture le [date] à un
client, d'un montant de [X] € pour [prestation réalisée]. Elle
devait être payée sous [délai standard, ex: 30 jours], on est
aujourd'hui en retard de [X] jours.

Écris-moi un email de relance :
- Ton courtois, pas accusateur, pas non plus servile
- Rappel clair de la facture (numéro, date, montant) et de son
  échéance
- Propose une solution si le client a un souci (paiement échelonné,
  question sur la prestation à clarifier)
- Fixe une date butoir explicite pour la suite (par exemple
  "merci de m'indiquer avant le X")

Garde ça court : 120 mots maximum. Ton "humain pro" — comme un
artisan sérieux qui ne se laisse pas marcher dessus mais ne
braque pas le client non plus.</code></pre>

<p><strong>Ce que vous obtenez :</strong> un email pro, court, qui règle souvent le problème. Quand ça ne marche pas, vous savez pourquoi (le client a un souci, ou il faut passer à la deuxième relance).</p>

<p><strong>Variante 2e relance :</strong> ajoutez <em>"Il s'agit d'une deuxième relance. Le ton doit rester poli mais plus ferme. Mentionne que sans réponse sous 7 jours, je transmets le dossier."</em></p>

<p><strong>Variante mise en demeure :</strong> demandez le modèle officiel ; l'IA connaît la mise en forme légale française. Vérifiez quand même avec votre comptable avant d'envoyer.</p>

<h2>Prompt 3 — La réponse à l'avis Google qui pique</h2>

<p><strong>Quand l'utiliser :</strong> un client mécontent a laissé un avis 2 étoiles sur Google. Vous le lisez, ça vous agace. Vous avez deux mauvaises options : répondre du tac au tac (le futur client lit la conversation et se dit que vous êtes susceptible) ou ne pas répondre (les futurs clients pensent que vous vous en fichez).</p>

<pre><code>Je suis [votre métier]. Un client vient de laisser cet avis
négatif sur Google :

"[copiez l'avis tel quel, fautes incluses]"

Voici ce qui s'est REELLEMENT passé de mon côté :

[décrivez en 3-4 phrases : le contexte, ce qui s'est mal passé
côté client ET côté vous, ce que vous avez tenté pour résoudre.
Sois honnête, ne minimise pas vos torts s'il y en a, mais ne
t'excuse pas pour des fautes que tu n'as pas commises]

Écris-moi une réponse publique à cet avis. Elle doit :
- Rester calme et professionnelle
- Reconnaître le ressenti du client SANS m'excuser d'une faute
  que je n'ai pas commise
- Proposer une résolution concrète OU un contact en privé pour
  avancer
- Faire bonne impression sur les FUTURS lecteurs de mon profil
  (c'est eux le vrai public, pas le client mécontent)

Donne-moi 3 variantes :
- Version 1 : la plus conciliante (si le tort est partagé)
- Version 2 : neutre et factuelle (si le client exagère)
- Version 3 : ferme mais polie (si le client est de mauvaise foi)</code></pre>

<p><strong>Ce que vous obtenez :</strong> trois versions. Vous choisissez celle qui correspond à la réalité, vous ajustez 2-3 mots pour que ça vous ressemble, vous postez. <strong>Gain : 20 minutes de réflexion stressante en moins, et un profil Google qui reste pro.</strong></p>

<p><strong>Variante avis positif :</strong> <em>"Rédige 5 réponses courtes et chaleureuses à des avis 5 étoiles, sans que ça sonne copier-coller. Variez les formulations."</em></p>

<h2>Le piège : ce que l'IA ne sait PAS faire</h2>

<p>Trois trucs à garder en tête. C'est ce qui sépare les artisans qui exploitent vraiment l'IA de ceux qui se cassent les dents.</p>

<p><strong>1. L'IA ne connaît pas votre marché local.</strong> Elle ne sait pas qu'à Vence un devis salle de bain de 6m² se chiffre différemment qu'à Paris. Pour les chiffres, c'est vous. Toujours.</p>

<p><strong>2. L'IA ne connaît pas votre personnalité.</strong> Si vous avez un humour particulier, une façon de parler à vos clients, l'IA va sortir des textes plus lisses, plus génériques. Il faut les <strong>relire et les ajuster</strong> — toujours. C'est vous le patron.</p>

<p><strong>3. L'IA peut se tromper avec assurance.</strong> Pour les normes techniques, les taux de TVA, les évolutions réglementaires — vérifiez toujours. L'IA ment parfois sans le savoir. Demandez-lui ses sources si c'est un sujet sensible.</p>

<p>La bonne image : l'IA est un <strong>stagiaire ultra-rapide</strong>. Il écrit vite, il propose plein d'idées, il ne fatigue pas. Mais il ne connaît ni votre métier ni vos clients. C'est vous le boss.</p>

<div class="callout">
  <p><strong>Vous voulez 10 prompts de plus, adaptés à votre métier précis ?</strong></p>
  <p>Le diagnostic gratuit OptiPro liste les tâches admin que l'IA peut absorber dans votre quotidien — par métier (plombier, électricien, paysagiste, coiffeur, photographe, traiteur, etc.) — avec les prompts complets et les variantes.</p>
  <a href="/contact?cible=artisans" class="callout-link">Demander mon diagnostic gratuit →</a>
</div>

<p style="margin-top:2rem">— Pierre</p>
`,
  },

  // ────────────────────────────────────────────────────────────────
  // Article 8 — Démarrer avec l'IA quand on n'est pas tech
  // ────────────────────────────────────────────────────────────────
  {
    slug: 'ia-pour-artisan-par-ou-commencer-quand-on-est-pas-tech',
    titre: "L'IA pour un artisan ou un entrepreneur solo : par où commencer quand on n'est pas tech",
    description:
      "Pas besoin de coder. Pas besoin de comprendre les LLM. Juste 3 usages simples, les prompts exacts, et 30 minutes pour démarrer aujourd'hui.",
    datePublication: '2026-04-20',
    tempsLecture: 8,
    categorie: 'Pour les artisans',
    motsCles: [
      'IA artisan débutant',
      'commencer avec ChatGPT artisan',
      'IA TPE indépendant',
      'prompts artisan facile',
      'IA pour entrepreneur solo',
    ],
    contenu: `
<p class="lead">Lundi matin. 7h30. Vous ouvrez votre boîte mail. Trois demandes de devis à faire, une relance de facture qui traîne depuis trois semaines, un avis Google moyen auquel vous n'avez pas répondu. Et votre journée est déjà bouclée — un rendez-vous client à 9h, des dossiers à avancer, un prestataire à gérer.</p>

<p>Vous savez qu'il faudrait vous occuper de toute cette pile admin. Vous savez aussi qu'à la fin de la journée, vous serez trop crevé pour le faire.</p>

<p>Ce n'est pas un problème de compétence. Ce n'est pas un problème de motivation. <strong>C'est un problème de temps.</strong></p>

<p>Et c'est exactement là que l'IA devient utile.</p>

<p>Que vous soyez artisan qui sort des chantiers, commerçant avec une boutique à tenir, ou dirigeant d'une TPE qui court d'une réunion à l'autre — le problème est le même. L'admin mange le temps. L'IA peut en rendre une bonne partie.</p>

<h2>"L'IA, c'est pas pour moi, je suis pas tech"</h2>

<p>Si vous pensez ça, je comprends. C'est exactement ce que je me disais il y a encore quelques années.</p>

<p>Alors mettons une chose au clair.</p>

<p>Je ne suis pas ingénieur. Je n'ai pas fait d'école d'informatique. J'ai passé 10 ans à piloter des flux logistiques — je connais surtout les Excel, les bons de livraison et les clients qui râlent quand une commande est en retard.</p>

<p>Et pourtant, j'utilise l'IA tous les jours. Pour OptiPro, pour préparer mes interventions, pour ma vie perso.</p>

<p><strong>La seule compétence qu'il faut pour démarrer, c'est de savoir écrire un message clair en français.</strong></p>

<p>Pas de code. Pas de formule. Pas de logiciel compliqué.</p>

<p>Vous savez faire ça. Vous le faites déjà quand vous écrivez à un client.</p>

<h2>3 usages concrets qui vont vous faire gagner du temps</h2>

<p>Je vais vous donner <strong>trois prompts exacts</strong>. Vous les copiez, vous les collez dans ChatGPT ou Claude, vous adaptez avec votre contexte. C'est tout.</p>

<h3>Usage n°1 — Transformer 3 lignes de notes en un devis propre</h3>

<p><strong>Le problème :</strong> vous rentrez d'un rendez-vous (client, prospect, fournisseur), vous avez pris des notes rapides sur votre téléphone. Un artisan notera <em>"salle de bain 6m², remplacer lavabo, refaire étanchéité, 2 jours avec matos"</em>. Un consultant notera <em>"accompagnement 3 mois, 2 ateliers/mois, livrable final en PDF"</em>. Dans les deux cas, il faut transformer ces notes en devis professionnel. Normalement, ça prend 30 à 45 minutes.</p>

<pre><code>Tu es mon assistant administratif. Je suis [votre métier], je
viens de finir un rendez-vous client. Voici mes notes :

[collez vos notes brutes]

Rédige-moi un devis professionnel avec :
- Une introduction courte et claire pour le client
- Les prestations détaillées en plusieurs lignes
- Une phrase de conclusion qui invite à valider

Ton : direct, sérieux, mais humain. Pas de formule ampoulée.</code></pre>

<p><strong>Ce que vous obtenez en 30 secondes :</strong> un texte de devis propre, que vous n'avez plus qu'à mettre en forme et à chiffrer. <strong>Gain : 20 à 30 minutes par devis.</strong></p>

<h3>Usage n°2 — Répondre à un avis Google négatif sans perdre son sang-froid</h3>

<p><strong>Le problème :</strong> un client mécontent a laissé un avis 2 étoiles. Vous le lisez, ça vous agace, vous avez envie de répondre du tac au tac. Ou pire : vous ne répondez pas du tout, par peur de dire quelque chose de travers. Les deux sont de mauvaises solutions — les prochains clients qui cherchent votre entreprise vont lire cet avis.</p>

<pre><code>Je suis [votre métier]. Un client vient de laisser cet avis
négatif sur Google :

"[copiez l'avis tel quel]"

Voici ce qui s'est passé de mon côté :
[décrivez en 3-4 phrases ce qui s'est réellement passé]

Écris-moi une réponse publique à cet avis. Elle doit :
- Rester calme et professionnelle
- Reconnaître le ressenti du client sans m'excuser d'une faute
  que je n'ai pas commise
- Proposer une résolution concrète ou un contact en privé
- Faire bonne impression sur les futurs lecteurs de mon profil

Trois variantes, du plus conciliant au plus factuel.</code></pre>

<p><strong>Ce que vous obtenez :</strong> trois versions, vous choisissez celle qui vous ressemble. <strong>Gain : 20 minutes de stress et un profil Google qui reste pro.</strong></p>

<h3>Usage n°3 — Relancer un client qui ne paie pas, sans se mettre mal</h3>

<p><strong>Le problème :</strong> la facture a été envoyée il y a trois semaines. Rien. Vous n'osez pas relancer par peur de passer pour celui qui court après son argent. Ou vous relancez par SMS sur le pouce et ça passe mal. Résultat : soit vous n'êtes pas payé, soit vous perdez le client.</p>

<pre><code>Je suis [votre métier]. J'ai envoyé une facture le [date] à
un client, d'un montant de [X]€ pour [prestation réalisée].
Elle devait être payée sous [délai], on est aujourd'hui
en retard de [X] jours.

Écris-moi un email de relance :
- Ton courtois, pas accusateur
- Rappel clair de la facture et de son échéance
- Propose une solution si le client a un souci (paiement
  échelonné, question sur la prestation)
- Fixe une date butoir pour la suite

Garde ça court : 120 mots max.</code></pre>

<p><strong>Ce que vous obtenez :</strong> un email pro, court, qui règle souvent le problème. <strong>Gain : finies les relances oubliées, et vous êtes payé plus régulièrement.</strong></p>

<h2>L'IA peut aussi vous aider à trouver des clients</h2>

<p>Les trois usages ci-dessus font <strong>gagner du temps</strong>. Mais l'IA peut faire mieux : vous aider à <strong>être visible</strong>.</p>

<p>Un artisan qui ne communique pas, c'est un artisan invisible. Un consultant qui n'a pas de présence en ligne, c'est quelqu'un qu'on oublie entre deux missions. Dans les deux cas, c'est perdre des clients qu'on aurait pu avoir.</p>

<p>Voici quatre trucs concrets :</p>

<p><strong>Rédiger votre fiche Google Business.</strong> La plupart des fiches que je vois sont mal rédigées, vides, ou ressemblent à celles de 50 autres concurrents. Demandez à l'IA de vous rédiger une description de 300 caractères qui met en avant ce qui vous différencie. Précisez : votre métier, votre zone d'intervention, votre spécialité.</p>

<p><strong>Écrire un post réseau social après un chantier, une mission, un livrable.</strong> Vous avez une belle photo avant/après ? Un témoignage client par message ? L'IA peut transformer <em>"on a refait la salle de bain de Mme Durand, elle est contente"</em> ou <em>"j'ai livré la stratégie à X, ils vont implémenter lundi"</em> en un post qui donne envie. En deux minutes.</p>

<p><strong>Créer des idées de posts régulières.</strong> Demandez à l'IA : <em>"donne-moi 10 idées de posts que je peux publier dans les 3 prochains mois, adaptés à un [votre métier] basé à [votre ville]."</em> Vous avez votre planning éditorial. Fini le "je sais pas quoi poster".</p>

<p><strong>Répondre aux demandes depuis votre mobile.</strong> Un prospect vous écrit un message un peu long sur Messenger, WhatsApp ou LinkedIn ? Vous n'avez pas le temps de formuler une réponse propre entre deux rendez-vous ? Copiez son message, demandez une réponse courte et pro à l'IA, adaptez en 30 secondes. Le prospect reçoit une vraie réponse au lieu d'un "ok je vous rappelle".</p>

<h2>Ce que l'IA ne peut PAS faire (et c'est important)</h2>

<p>Je ne vais pas vous vendre du rêve. L'IA a des limites. Voici ce qu'elle <strong>ne sait pas faire</strong>, et qu'il faut garder en tête.</p>

<p><strong>Elle ne connaît pas votre marché local.</strong> Elle ne sait pas que dans votre quartier, un devis de rénovation complète se chiffre différemment qu'à Paris. Elle ne connaît pas non plus les tarifs pratiqués dans votre secteur de conseil. Elle peut vous donner un modèle, mais les chiffres, c'est vous qui les mettez.</p>

<p><strong>Elle ne connaît pas votre personnalité.</strong> Si vous avez un ton particulier, un humour, une façon de parler à vos clients, l'IA va sortir des textes plus lisses, plus génériques. Il faut les relire et les adapter. Toujours.</p>

<p><strong>Elle n'est pas toujours à jour.</strong> Pour les réglementations, les taux de TVA, les normes techniques, les évolutions juridiques, vérifiez toujours. L'IA peut se tromper. Elle le fait même avec beaucoup d'assurance, ce qui est sournois.</p>

<p><strong>Elle ne remplace pas votre savoir-faire.</strong> Un plombier qui ferait rédiger un diagnostic d'installation par une IA sans avoir vu le chantier, c'est un plombier qui court à la catastrophe. Un consultant qui livrerait à son client un rapport généré sans réflexion propre, c'est la même chose. L'IA gère l'administratif, la communication, la paperasse. Pas le métier.</p>

<p>La bonne image, c'est de penser à l'IA comme un <strong>stagiaire ultra-rapide</strong> : il écrit vite, il propose plein d'idées, mais c'est vous le patron. Vous validez. Vous coupez. Vous ajustez.</p>

<h2>Par où commencer concrètement — 30 minutes, aujourd'hui</h2>

<p>Si vous lisez cet article à 10h, vous pouvez avoir votre premier prompt utile envoyé à 10h30.</p>

<p>Voici les 4 étapes :</p>

<p><strong>1. Créer un compte gratuit.</strong> ChatGPT sur chatgpt.com ou Claude sur claude.ai. Les deux fonctionnent, choisissez celui que vous voulez. La version gratuite suffit pour commencer.</p>

<p><strong>2. Copier-coller un des 3 prompts</strong> que je vous ai donnés plus haut. Adaptez les crochets (votre métier, vos notes, votre situation).</p>

<p><strong>3. Lisez ce que ça vous sort.</strong> Ne prenez pas tel quel. Demandez-vous : <em>"est-ce que c'est comme ça que je m'exprimerais ?"</em> Si non, demandez à l'IA de reformuler plus direct, plus simple, ou plus dans votre style.</p>

<p><strong>4. Gardez ce qui vous ressemble. Jetez le reste.</strong> C'est vous qui validez, toujours.</p>

<p>Voilà. Vous avez commencé.</p>

<div class="callout">
  <p><strong>Vous voulez aller plus vite ?</strong></p>
  <p>30 minutes au téléphone avec moi, gratuit, sans engagement : vous me décrivez votre métier et vos process, je vous propose 3 prompts ou outils concrets adaptés à votre activité. Pas de blabla commercial, juste du concret.</p>
  <a href="/contact?cible=artisans" class="callout-link">Réserver un premier appel →</a>
</div>

<p style="margin-top:2rem">L'IA ne remplacera pas votre savoir-faire. Mais elle peut vous libérer du temps pour le pratiquer, pour développer votre activité, et pour rentrer chez vous plus tôt le soir.</p>

<p>Ça vaut peut-être le coup d'essayer 30 minutes.</p>

<p>— Pierre</p>
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

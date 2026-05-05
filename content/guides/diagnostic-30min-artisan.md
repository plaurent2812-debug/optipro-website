# Diagnostic 30 min : 10 tâches admin que l'IA fait à votre place quand vous êtes artisan

**Un guide pratique par Pierre Laurent — OptiPro**

---

## Ce guide est fait pour vous si

Vous êtes artisan, indépendant ou TPE : plombier, électricien, peintre, carreleur, paysagiste, menuisier, maçon, photographe, coiffeur, traiteur, garagiste — peu importe le métier. Ce que vous avez en commun avec les autres artisans qui liront ce guide :

- Vous êtes bon dans votre métier.
- L'admin vous prend 2 à 4 heures par semaine que vous ne facturez pas.
- Vous avez peut-être essayé l'IA, trouvé ça vague, et fermé l'onglet.

Ce guide est différent des tutoriels habituels. Il ne vous explique pas l'IA. Il vous donne les prompts exacts, testés, pour les 10 tâches admin qui reviennent le plus souvent chez les artisans indépendants.

Lisez, copiez, adaptez. C'est tout.

---

## Avant de commencer : deux minutes pour comprendre

**L'outil gratuit suffit.** La version de base de ChatGPT, Claude ou Gemini (toutes gratuites) fait très bien le travail pour ces 10 tâches. Vous n'avez pas besoin d'un abonnement payant pour commencer.

**La qualité dépend du prompt, pas de l'outil.** Un mauvais prompt donne un résultat générique. Un bon prompt donne un résultat utilisable en 30 secondes. Ce guide vous donne les bons prompts.

**La règle d'or :** ne collez jamais dans un outil IA en ligne des données personnelles sensibles de vos clients (numéro de sécurité sociale, coordonnées bancaires, données de santé). Pour les noms, adresses et montants de facture, c'est généralement sans risque sur les outils majeurs — mais anonymisez si vous avez un doute.

---

## Tâche 1 — Transformer vos notes de chantier en devis propre

**Le problème :** vous rentrez d'un rendez-vous. Vous avez des notes sur votre téléphone, parfois deux lignes sur un coin de papier. Transformer ça en devis présentable prend 30 minutes.

**Le prompt :**
```
Tu es mon assistant administratif. Je suis [votre métier, ex: plombier indépendant].
Je viens de visiter un client. Voici mes notes brutes :

[collez vos notes exactement telles que vous les avez écrites]

Transforme ça en texte de devis professionnel :
- Introduction courte et claire
- Liste des prestations détaillées (une ligne par poste)
- Formule de conclusion qui invite à valider

Ton : direct, humain, sérieux. Pas de formule ampoulée.
Ne mets PAS les prix — je les ajoute moi-même dans mon logiciel.
Si tu manques d'une information importante, pose UNE question maximum.
```

**Résultat :** texte prêt à coller dans votre logiciel de devis (Dolibarr, Sellsy, Word, peu importe). Vous ajoutez les prix, vous envoyez.

**Ordre de grandeur du gain :** 20 à 30 minutes par devis.

---

## Tâche 2 — Rédiger un email de relance pour une facture impayée

**Le problème :** la facture dort depuis 3 semaines. Vous n'osez pas relancer parce que vous n'aimez pas avoir l'air de courir après votre argent. Résultat : vous bouillez et la facture attend.

**Le prompt :**
```
Je suis [votre métier]. J'ai émis la facture n°[numéro] le [date] pour un montant de [X] €
(prestation : [description courte]). Délai de paiement convenu : [X] jours.
Retard actuel : [X] jours.

Rédige un email de relance :
- Ton courtois et direct, ni servile ni accusateur
- Rappel clair de la facture (numéro, date, montant, échéance)
- Ouverture si le client a un problème (paiement échelonné, question)
- Date butoir explicite pour une réponse de sa part
- 100 à 120 mots maximum
```

**Variante 2e relance :** ajoutez *"C'est la deuxième relance. Ton plus ferme, toujours poli. Mentionne que sans réponse sous 7 jours, je transmets le dossier à mon comptable."*

**Variante mise en demeure :** *"Rédige une mise en demeure en bonne et due forme selon le droit français."* Vérifiez avec votre comptable avant envoi.

**Ordre de grandeur du gain :** factures réglées plus souvent à la première relance bien rédigée. Gain psychologique : vous n'êtes plus celui qui « emm***e » son client — vous gérez, simplement.

---

## Tâche 3 — Répondre à un avis Google négatif

**Le problème :** un client a laissé un 2 étoiles. Vous avez deux mauvaises options : ignorer (les futurs clients pensent que vous vous en fichez) ou répondre à chaud (vous passez pour quelqu'un d'impulsif). Les deux font du mal à votre profil.

**Le prompt :**
```
Je suis [votre métier]. Un client a laissé cet avis Google :

"[copiez l'avis exactement, fautes incluses]"

Ce qui s'est passé de mon côté :
[3 à 5 phrases honnêtes : le contexte, ce qui a cloché, ce que vous avez tenté]

Rédige 3 versions de réponse publique :
- Version 1 : conciliante (tort partagé)
- Version 2 : neutre et factuelle (client qui exagère)
- Version 3 : ferme et polie (client de mauvaise foi)

La réponse doit : rester calme, reconnaître le ressenti sans admettre une faute inexistante,
proposer un contact privé pour résoudre, faire bonne impression sur les FUTURS lecteurs
(c'est eux le vrai public). 80 mots maximum par version.
```

**Variante avis positif :** *"Rédige 5 réponses courtes à des avis 5 étoiles, variées pour ne pas sonner copier-coller."*

**Gain :** ~20 minutes de stress en moins, un profil Google qui reste professionnel.

---

## Tâche 4 — Rédiger un contrat de prestation simple

**Le problème :** pour les petits chantiers, vous travaillez sans contrat et vous vous en mordez parfois les doigts. Pour les gros chantiers, vous ne savez pas par où commencer.

**Le prompt :**
```
Tu es juriste en droit des contrats français. Génère un contrat de prestation simple
entre un artisan [votre métier] et un client particulier pour :
- Prestation : [description]
- Montant : [X] € TTC
- Durée estimée : [X jours / X semaines]
- Conditions de paiement : [acompte % à la commande, solde à la réception]

Inclure : objet du contrat, obligations de chaque partie, conditions de modification/annulation,
réserves sur imprévus, clause de résiliation, signature et date.
Format : court, lisible par un non-juriste, sans jargon inutile.
```

**Mise en garde obligatoire :** faites relire par votre comptable ou un juriste avant de le signer avec un client important. L'IA produit une base solide, pas un contrat validé.

---

## Tâche 5 — Préparer une réponse à un appel d'offre

**Le problème :** une mairie ou une entreprise vous envoie un appel d'offre. Le dossier est long, le format est intimidant, vous ne savez pas comment présenter votre réponse pour être crédible face à plus gros que vous.

**Le prompt :**
```
Je suis artisan [votre métier], indépendant depuis [X ans], basé à [ville].
Voici les éléments clés du cahier des charges :
[résumez en 5 à 10 lignes : ce qui est demandé, le budget, le délai, les critères de sélection]

Voici mes atouts pour cette mission :
[listez : expériences similaires, références, certifications, délai que vous pouvez tenir]

Structure ma réponse en sections : présentation, compréhension du besoin, méthode proposée,
références, délai et disponibilité, tarif (je le mets moi-même). Ton professionnel et direct.
```

**Gain :** structure claire, réponse qui inspire confiance, sans passer 4 heures sur le format.

---

## Tâche 6 — Créer votre FAQ client

**Le problème :** vous répondez chaque semaine aux mêmes 8 questions : "combien ça coûte", "vous êtes disponible quand", "vous faites les devis gratuits", "vous acceptez le chèque", etc. Chaque réponse prend 5 minutes. Une FAQ sur votre site ou en réponse automatique réglerait ça.

**Le prompt :**
```
Je suis [votre métier], indépendant. Voici les questions que mes clients me posent le plus souvent :
[listez 8 à 12 questions en vrac, même imparfaites]

Rédige une FAQ professionnelle et chaleureuse en [X] questions/réponses.
Ton : humain, direct, sans jargon. Adapté à un artisan de proximité, pas à une grande entreprise.
Réponses courtes (3 à 5 lignes maximum par réponse).
```

**Usage :** à coller sur votre site (page FAQ), à envoyer en pièce jointe aux nouveaux prospects, à utiliser comme base pour un message d'absence automatique.

---

## Tâche 7 — Rédiger une description de votre activité pour Google My Business

**Le problème :** votre fiche Google My Business est incomplète ou écrite à la va-vite. C'est pourtant la première chose qu'un prospect local voit quand il cherche votre métier sur Google.

**Le prompt :**
```
Je suis [votre métier], basé à [ville et zone géographique couverte],
en activité depuis [X ans].

Mes spécialités : [listez 3 à 5]
Mon point différenciant : [ex: intervention sous 24h, 20 ans d'expérience, label RGE, etc.]
Ma clientèle principale : [particuliers / professionnels / les deux]

Rédige la description Google My Business de mon activité :
- 3 versions : courte (50 mots), moyenne (150 mots), longue (300 mots)
- Inclure les mots-clés pertinents pour le référencement local
- Ton : professionnel et de proximité, pas corporate
```

**Gain :** une fiche Google complète et optimisée = plus de clients locaux sans publicité payante.

---

## Tâche 8 — Préparer votre réunion bancaire ou comptable

**Le problème :** rendez-vous dans 3 jours avec votre banquier pour renégocier un prêt, ou avec votre comptable pour faire le point. Vous avez les chiffres en tête mais vous ne savez pas comment les présenter.

**Le prompt :**
```
Je prépare un rendez-vous avec [mon banquier / mon comptable] dans 3 jours.
Sujet : [ex: financement d'un nouveau véhicule utilitaire / point annuel bilan]

Ma situation :
- CA annuel : environ [X] €
- Charges principales : [listez brièvement]
- Ce que je veux obtenir ou discuter : [soyez précis]
- Ce que je crains qu'on me reproche : [ex: irrégularité du chiffre, délai de paiement clients]

Aide-moi à préparer :
1. Les 5 points à aborder dans l'ordre logique
2. Les chiffres à avoir en main
3. Les objections probables et comment y répondre
4. Une question à poser en fin de rendez-vous pour montrer que j'ai réfléchi
```

**Gain :** vous arrivez préparé. Vous paraissez sérieux. Vous repartez avec de meilleures conditions.

---

## Tâche 9 — Rédiger vos conditions générales de vente

**Le problème :** vous n'avez pas de CGV. En cas de litige, c'est vous qui êtes exposé. Pourtant rédiger des CGV semble compliqué et coûteux.

**Le prompt :**
```
Tu es juriste spécialisé en droit de la consommation français. Génère les conditions générales
de vente d'un artisan [votre métier] pour une clientèle [particuliers / professionnels / les deux].

Inclure obligatoirement : objet, devis et commande, prix et paiement, délais, responsabilité,
droit de rétractation (si applicable), règlement des litiges, propriété intellectuelle
(si applicable), protection des données personnelles (RGPD simplifié).

Format : lisible par un client non-juriste. Version complète mais concise.
```

**Mise en garde :** faites valider par un juriste ou votre chambre des métiers avant publication. Certaines clauses varient selon votre activité spécifique.

**Gain :** protection juridique de base sans payer 500 € à un avocat pour une version initiale.

---

## Tâche 10 — Gérer les messages difficiles sur les réseaux ou par email

**Le problème :** un client mécontent vous écrit un message agressif, un concurrent vous attaque sur Facebook, ou un prospect vous pose des questions pièges sur vos tarifs. Vous ne savez pas quoi répondre sans vous mettre dans une mauvaise position.

**Le prompt :**
```
Je suis [votre métier]. J'ai reçu ce message :

"[collez le message exactement tel quel]"

Contexte de mon côté : [3 lignes pour expliquer ce qui s'est passé]

Rédige 3 versions de réponse :
- Version 1 : apaisante et constructive
- Version 2 : neutre et factuelle
- Version 3 : limite mais polie (si le message est injuste ou agressif)

Chaque réponse : 60 à 80 mots. Ton professionnel.
L'objectif est de préserver ma réputation auprès de mes futurs clients.
```

**Gain :** vous ne répondez plus à chaud. Vous choisissez la version qui correspond à la réalité de la situation. Votre réputation en ligne est préservée.

---

## Vos prochaines étapes

**Cette semaine :** choisissez une tâche. Juste une. Testez le prompt. Mesurez le temps gagné.

**Les semaines suivantes :** ajoutez une tâche par semaine. En un mois, vous avez automatisé les 4 ou 5 qui vous coûtent le plus de temps.

**Pour aller plus loin :** chaque jeudi dans la newsletter Ops & IA, un cas terrain avec le prompt complet. Si votre cas ne figure pas dans ce guide, écrivez-moi — certains retours de lecteurs deviennent les sujets de la semaine suivante.

**Si vous voulez aller encore plus vite :** OptiPro propose un Pack Visibilité à 890 € HT (fiche Google + site 1 page + formation, livré en 3-5 jours) et un Site vitrine pro à partir de 2 400 € HT (3-5 pages, design unique, SEO local). Voir [opti-pro.fr/services](https://www.opti-pro.fr/services).

---

*OptiPro — Pierre Laurent*
*Conseil & développement sur mesure pour artisans, TPE et indépendants*
*Site : [opti-pro.fr](https://www.opti-pro.fr)*
*Newsletter Ops & IA : [opti-pro.fr/newsletter](https://www.opti-pro.fr/newsletter)*

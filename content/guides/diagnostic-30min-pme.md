# Diagnostic 30 min : 10 process à automatiser dans une PME logistique / transport / BTP

**Un guide opérationnel par Pierre Laurent — OptiPro**

---

## Avant de commencer

Ce guide n'est pas un cours sur l'IA. C'est une liste de travail.

Chaque process décrit ici est un cas concret rencontré dans des PME du secteur transport, logistique ou BTP. Les prompts sont testés. Les ordres de grandeur de gain sont issus de la pratique sur des reportings et flux comparables — pas d'estimations marketing.

Pour chaque process, vous trouverez :
- **Le symptôme** (ce qui se passe dans votre boîte en ce moment)
- **La solution IA concrète** (outil, prompt, méthode)
- **L'ordre de grandeur du gain** (basé sur des cas comparables)
- **La mise en garde** (ce qui peut foirer si on le fait mal)

Lisez d'abord l'intégralité. Puis choisissez votre priorité. Pas besoin de tout faire d'un coup.

---

## Process 1 — Le reporting hebdo qui bouffe un lundi matin

**Le symptôme :** chaque semaine, quelqu'un passe 2 à 3 heures à compiler l'export TMS, comparer avec la compta, construire le tableau du DG, écrire les commentaires. Le rapport arrive le lundi à 11h30, il est déjà partiellement périmé.

**La solution :** prompt structuré + deux fichiers (export CSV brut + template de rapport). L'IA produit le tableau rempli, les calculs, et un bloc de 3 commentaires. L'humain vérifie et envoie.

**Outil :** ChatGPT (abonnement Team pour les données sensibles) ou Claude.

**Ordre de grandeur du gain :** 2h à 2h30 récupérées par semaine. Sur 45 semaines de travail, c'est ~100 à 110 heures par an. À 80 €/heure de coût chargé, ~8 000 à 9 000 € de temps qualifié récupéré annuellement.

**La mise en garde :** ne jamais coller de noms de clients identifiables, de conditions tarifaires, ou de données chauffeurs dans un outil grand public. Anonymisez d'abord, remettez les vrais noms après.

---

## Process 2 — La comparaison de devis transporteurs

**Le symptôme :** vous avez 4 devis pour le même lot. Chacun utilise sa propre grille, ses propres unités, ses propres conditions d'affrètement. Les comparer prend 45 minutes et on finit souvent par choisir à l'instinct.

**La solution :** vous copiez les 4 devis dans un même prompt et demandez à l'IA de les normaliser dans un tableau comparatif (prix/km, prix/tonne, délai, condition de prise en charge, exclusions). Elle détecte aussi les omissions (un devis sans mention du carburant, un autre sans conditions météo).

**Prompt de base :**
```
Tu es expert en affrètement transport routier. Je te donne 4 devis pour la même prestation.
Normalise-les dans un tableau comparatif avec les colonnes suivantes : prix total HT, prix au km,
prix à la tonne (si applicable), délai annoncé, conditions carburant, conditions météo/ADR,
points manquants. Signale toute clause inhabituellement avantageuse ou désavantageuse.
```

**Ordre de grandeur du gain :** 30 à 45 minutes par décision d'affrètement. Dans une PME qui fait 3 à 5 affrètements par semaine, c'est 2 à 4 heures récupérées par semaine.

**La mise en garde :** l'IA peut mal interpréter des grilles tarifaires complexes (surcharge ADR, multi-étapes). Vérifiez toujours les cas atypiques.

---

## Process 3 — Le suivi documentaire sous-traitants

**Le symptôme :** vous avez 15 à 40 sous-traitants actifs. Chacun doit vous fournir sa carte de transport, son attestation d'assurance, son Kbis, ses licences. Vous les relancez à la main, vous cherchez dans votre boîte mail "où est le document de Transports Durand", vous découvrez à 17h que le permis expire demain.

**La solution :** un tableur simple (Excel ou Google Sheets) avec la liste des sous-traitants, les types de documents requis, les dates d'expiration. L'IA vous rédige les relances email automatiques à copier-coller, adaptées au contexte (premier rappel vs. urgence).

**Version avancée :** intégration avec un Google Sheets connecté à un formulaire de réception — le sous-traitant upload lui-même via un lien Google Form, vous avez la date dans la colonne automatiquement.

**Prompt de relance :**
```
Je suis responsable logistique dans une PME transport. Le sous-traitant [Nom] doit nous fournir
[document] avant le [date]. C'est une [première / deuxième / troisième] relance.
Rédige un email court, professionnel, sans agressivité. Mentionne la conséquence si non-reçu
([suspension de mission / impossibilité de déclaration]). 120 mots maximum.
```

**Ordre de grandeur du gain :** 1h à 1h30 par semaine sur la relance documentaire dans une flotte de 20+ sous-traitants. Plus important encore : la fin des oublis qui vous font passer en mode urgence.

---

## Process 4 — Le traitement des réclamations litige

**Le symptôme :** un client vous écrit pour une livraison en retard, un manquant, une marchandise abîmée. Vous devez répondre vite (chaque heure compte sur la relation), investiguer (logs TMS, photos chauffeur, CMR), et rédiger une réponse qui ne vous engage pas juridiquement sans être froide.

**La solution :** vous donnez à l'IA le message du client + les éléments que vous avez (chronologie de la livraison, état de la marchandise, photos disponibles ou non). Elle vous rédige une réponse en deux parties : accusé de réception immédiat + suite du traitement. Vous relisez et envoyez.

**Gain :** ce n'est pas tant du temps que de la qualité. Le client reçoit une réponse en 30 minutes au lieu de 4 heures, le ton est maîtrisé, la relation est préservée.

**La mise en garde :** ne laissez jamais l'IA rédiger une lettre de refus d'indemnisation ou un aveu de responsabilité sans relecture juridique. C'est sur la forme finale que vous signez.

---

## Process 5 — La mise à jour du planning d'affrètement

**Le symptôme :** le planning du vendredi pour la semaine prochaine prend 2 heures. Vous avez les commandes, les véhicules disponibles, les zones géographiques habituelles, les préférences clients (tel chauffeur pour tel compte). C'est un puzzle que vous faites de tête depuis 15 ans.

**La solution :** vous décrivez à l'IA les contraintes (véhicules disponibles, zones, tonnage, délais, préférences) et demandez une proposition. Elle ne remplace pas votre jugement terrain — elle vous donne un premier jet que vous ajustez. Ce sont les 40 premières minutes (la structure de base) qu'elle prend en charge.

**Prompt de base :**
```
Tu es planificateur transport. Voici mes données :
- Véhicules disponibles lundi : [liste avec tonnage et type]
- Commandes à livrer : [liste avec destination, volume, délai, client]
- Contraintes : [ex: le chauffeur X fait toujours le secteur Nord, le client Y veut une livraison avant 9h]
Propose une première répartition optimisée. Si tu as des doutes sur un choix, dis-le.
```

**Ordre de grandeur du gain :** 45 minutes à 1 heure sur le planning hebdo dans une flotte de 15 à 25 véhicules.

---

## Process 6 — La rédaction des appels d'offre transport

**Le symptôme :** un client vous demande de répondre à son appel d'offre. Vous avez 48 heures. Vous savez quoi proposer mais pas comment le rédiger de façon à être crédible face à un grand groupe.

**La solution :** vous donnez à l'IA le cahier des charges du client + vos éléments de réponse bruts (capacités, zones, références, prix). Elle structure la réponse en sections standard (présentation, capacités, méthode, engagements, tarification, références). Vous validez le fond, elle fait la forme.

**Gain :** pas de gain de temps brut (la réflexion est la même), mais un gain de qualité et de confiance : votre réponse arrive structurée, sans fautes, au format attendu.

---

## Process 7 — Le rapport de conformité véhicules

**Le symptôme :** le contrôle technique est dans 15 jours pour 8 véhicules. Vous devez vérifier la liste de points obligatoires, croiser avec les fiches de maintenance, identifier les points à préparer.

**La solution :** vous donnez à l'IA la liste des véhicules + les dates de dernière intervention + les derniers rapports de contrôle (si vous les avez en texte). Elle génère un tableau de préparation : points à vérifier par véhicule, priorité, délai.

**Gain :** ~1 heure sur la préparation administrative du contrôle. L'essentiel du gain est la structuration, pas la décision technique.

---

## Process 8 — Le compte-rendu de réunion opérationnelle

**Le symptôme :** la réunion du lundi (exploitation, planification, litige) dure 45 minutes. Personne ne prend de notes structurées. Les actions décidées sont dans la tête de chacun. Le mercredi, 3 personnes ont 3 versions de ce qui a été décidé.

**La solution :** vous enregistrez la réunion avec n'importe quel téléphone (Otter, Whisper, ou la transcription native iOS). Vous collez la transcription dans un prompt. L'IA produit : liste des décisions, liste des actions (responsable + deadline), points non résolus à remonter.

**Prompt :**
```
Voici la transcription d'une réunion opérationnelle de 45 minutes dans une PME transport.
Produis : 1) La liste des décisions prises, 2) Les actions avec responsable et date,
3) Les points restés ouverts. Format court, bullet points, sans paraphrase.
Ignore les apartés et discussions hors sujet.
```

**Gain :** ~20 minutes de rédaction de CR + élimination des malentendus sur les décisions.

---

## Process 9 — La gestion des hausses tarifaires transporteurs

**Le symptôme :** votre principal sous-traitant vous annonce +8 % au 1er janvier. Il vous envoie un tableau Excel de 4 pages. Vous devez comprendre l'impact réel sur vos marges, décider si vous acceptez, négocier ou chercher une alternative.

**La solution :** vous donnez à l'IA le tableau tarifaire actuel + le nouveau tableau + votre volume par prestation. Elle calcule l'impact en € par ligne et en global, identifie les postes où la hausse est la plus forte, et peut générer un contre-argument chiffré pour la négociation.

**Gain :** ~2 heures d'analyse tableur remplacées par 20 minutes de vérification.

---

## Process 10 — L'onboarding documentaire d'un nouveau chauffeur

**Le symptôme :** nouveau chauffeur lundi. Vous avez une checklist dans votre tête (permis, FIMO, carte conducteur, visite médicale, contrat, attestation d'assurance personnelle, compte rendu de prise en main). Vous oubliez toujours un truc. Le chauffeur repart le soir avec un dossier incomplet.

**La solution :** l'IA vous génère une checklist onboarding complète adaptée à votre type de transport (national, international, ADR, frigo). Vous l'imprimez une fois, vous la cochez à chaque embauche. Pas d'IA à l'embauche — l'IA a fait le travail en amont pour construire la checklist définitive.

**Prompt :**
```
Tu es juriste spécialisé en droit social transport routier de marchandises en France.
Génère la checklist documentaire complète pour l'embauche d'un chauffeur PL [national / international / ADR].
Documents légaux obligatoires, documents internes à préparer, actions à déclencher en interne
(DPAE, accès badge, remise EPI, etc.). Format checklist à imprimer, cases à cocher.
```

**Mise en garde :** vérifiez la checklist avec votre expert-comptable ou votre gestionnaire de paie — les obligations évoluent. L'IA peut avoir une version légèrement obsolète pour les points réglementaires.

---

## Vos prochaines étapes

Vous avez lu les 10 process. Maintenant :

**Étape 1 — Choisissez un process cette semaine.** Un seul. Celui où vous perdez le plus de temps. Testez-le avec le prompt donné.

**Étape 2 — Notez le gain réel.** Pas estimé : mesuré sur votre cas. Combien de temps avant, combien après. C'est cette donnée qui justifie de passer aux suivants.

**Étape 3 — Venez en parler.** Chaque jeudi dans la newsletter Ops & IA, je publie un cas terrain avec le prompt complet. Si votre cas ne figure pas dans la liste, écrivez-moi — certains cas deviennent des newsletters.

**Si vous voulez aller plus vite :** l'audit OptiPro est un diagnostic ops (1 200 € HT, 1 semaine) où on passe en revue votre stack actuelle, vos flux, vos sous-traitants et votre reporting. On identifie ensemble les 3 leviers les plus rentables pour votre configuration spécifique. Possibilité d'un appel découverte de 30 min gratuit pour évaluer si c'est le bon moment.

---

*OptiPro — Pierre Laurent*
*Conseil ops & IA opérationnelle pour PME logistique, transport et BTP*
*Site : [opti-pro.fr](https://www.opti-pro.fr)*
*Newsletter Ops & IA : [opti-pro.fr/newsletter](https://www.opti-pro.fr/newsletter)*

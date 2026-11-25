---
titre: "Point au 25 novembre : l'adresse attend, l'outil de gestion avance"
date: 2026-11-25
langue: fr
etape: 0
statut: en cours
resume: "L'adresse du siège n'a pas bougé : festival de l'eau, police occupée. Le reste avance : l'outil de gestion de Chantrea Systems est prêt, en khmer, et attend maintenant la relecture certifiée de ses 700 textes."
tags: [démarrage, société, adresse, khmer, odoo]
brouillon: false
---

Une semaine après le [point de départ](/blogsdg/articles/point-de-depart/), voici où j'en suis. Une démarche est bloquée, celle de l'adresse du siège. Le reste avance bien, en particulier l'outil qui fera tourner la société au quotidien.

## L'adresse du siège : rien n'a bougé

C'est le premier blocage de la série, et il est toujours là. Sans adresse de siège, pas de société. Sans société, pas de permis de travail.

Cette semaine, deux choses ont tout arrêté :

- **Le festival de l'eau.** Bon Om Touk, la fête des eaux, est l'un des plus grands congés du pays. Pendant ces jours-là, les administrations tournent au ralenti.
- **La police est occupée.** Elle est mobilisée par le festival, et l'étape qui la concerne attend.

Ce que j'attends exactement de la police pour l'adresse : [À COMPLÉTER PAR STEFAN]

Date à laquelle je peux relancer : [À COMPLÉTER PAR STEFAN]

Le calendrier, lui, ne s'arrête pas : le visa court toujours jusqu'en mars, et la société puis le permis de travail doivent tenir avant. Chaque semaine perdue sur l'adresse se retrouve à la fin.

## Le reste avance : l'outil de gestion de Chantrea Systems

En attendant la société, j'ai construit l'outil qui la fera tourner : la gestion interne et l'espace client. Il repose sur [Odoo](https://www.odoo.com/) 19 en version Community, un logiciel de gestion libre, complété par des modules de la communauté OCA et par des modules écrits pour Chantrea.

**Le dépôt :** [github.com/stefan-cambodia/chantrea-odoo](https://github.com/stefan-cambodia/chantrea-odoo)

Le travail a commencé le 21 novembre. Voici ce qui fonctionne au 22 novembre.

**Pour le client, dans son espace :**

- Il se connecte en khmer, en anglais ou en français, et retrouve la langue de son compte.
- Il demande de l'aide : un ticket, par l'espace client ou par courriel. Il reçoit un accusé de réception dans sa langue, au nom de la société.
- Il voit son matériel (serveurs, réseau, postes, licences) et l'état de chaque garantie, en lecture seule.
- Il accepte et signe un devis en ligne, et télécharge ses documents. Un client ne peut pas voir les documents d'un autre : c'est vérifié par des tests.

**Les documents imprimés, à la cambodgienne :**

- Devis et factures en khmer, avec l'anglais juste en dessous.
- Le total en dollars et en riels, au taux officiel du jour publié par la [Banque nationale du Cambodge](https://www.nbc.gov.kh/). Si le taux officiel n'est pas encore disponible, la facture le dit.
- Les rapports d'intervention, signés sur place par le client.

**Pour moi, côté gestion :**

- Les contrats de maintenance mensuels, qui préparent leur facture en brouillon.
- La fiche de chaque équipement, avec des alertes avant la fin de la garantie. Le logiciel refuse qu'on y range des mots de passe.
- Une double authentification obligatoire pour l'équipe.
- Une sauvegarde chiffrée chaque nuit, et un essai de restauration chaque semaine. La restauration a été vérifiée de bout en bout en local.

**Ce qui n'est pas fait :**

- L'installation sur le vrai serveur : le script est écrit, la mise en ligne n'a pas eu lieu. Date prévue : [À COMPLÉTER PAR STEFAN]
- Et surtout la relecture du khmer, qui fait l'objet de la suite.

## La prochaine étape : faire certifier le khmer

Tous les textes en khmer de l'outil ont été traduits depuis l'anglais par une intelligence artificielle (Claude). Je ne lis pas le khmer. Je ne peux donc pas envoyer à un client cambodgien une facture dont je ne garantis pas le texte.

Ces textes sont réunis dans un seul fichier : [RELECTURE_KM.md](https://github.com/stefan-cambodia/chantrea-odoo/blob/main/docs/RELECTURE_KM.md). Chaque ligne donne le texte khmer, l'original anglais et l'endroit où il apparaît. À chaque relecture, le statut de la ligne passe à « relu » et le compteur avance.

Le fichier compte **700 textes**, en trois parties :

1. **Les documents imprimés** : devis, factures, rapports d'intervention. 65 textes. C'est ce que chaque client a entre les mains, et ce qui passe devant l'administration fiscale.
2. **Les modules Chantrea** : catégories de tickets, courriels, accueil de l'espace client. 65 textes.
3. **Les textes d'Odoo et de l'OCA** que les clients voient. 570 textes.

Aujourd'hui : **0 sur 700 relus.**

L'ordre est fixé : les parties 1 et 2 d'abord, parce que ce sont celles que tous les clients voient, puis la partie 3.

Je cherche quelqu'un dont le khmer est la langue maternelle pour relire et certifier ce fichier. Ce qu'il me reste à décider :

- qui : traducteur certifié, agence de traduction, ou relecteur de confiance : [À COMPLÉTER PAR STEFAN]
- le coût : [À COMPLÉTER PAR STEFAN]
- le délai : [À COMPLÉTER PAR STEFAN]
- si une certification officielle est exigée pour les factures, ou si une relecture suffit. Source officielle : [À COMPLÉTER PAR STEFAN : lien vers le texte de l'administration fiscale sur la langue des factures]

## Ce qui change dans le sommaire

Rien n'est terminé cette semaine. L'étape 3, **trouver un local ou une domiciliation**, reste ouverte et bloque la suite. J'ajoute une étape au parcours, qui peut avancer sans attendre la société : **faire relire et certifier le khmer de l'outil de gestion.**

Je reviendrai sur l'adresse dès que la police aura repris ses dossiers.

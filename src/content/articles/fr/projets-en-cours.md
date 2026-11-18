---
titre: "Les projets en cours : ce que je construis pendant les démarches"
date: 2026-11-18
langue: fr
etape: 0
statut: en cours
resume: "Quatre projets avancent en parallèle de la création de la société : un portail immobilier, une plateforme nautique, une reconstitution d'Angkor à conduire et un terminal Bitcoin. Où en est chacun, et ce qui n'est pas fait."
tags: [projets, démarrage]
brouillon: false
---

Créer la société n'est qu'une moitié du travail. L'autre moitié, c'est ce qu'elle aura à montrer. Pendant que les démarches avancent, je construis quatre projets. Cet article les présente par ce qu'ils font pour la personne qui s'en sert, avec leur état réel au moment où j'écris, y compris ce qui manque.

[À COMPLÉTER PAR STEFAN : le lien entre ces projets et Chantrea Systems. Produits de la société, vitrine de savoir-faire, projets personnels ?]

## 1. Un portail immobilier pour le Cambodge

**Ce que c'est :** un portail de recherche immobilière, vente et location, pour tout le pays.

**Le problème que je veux régler :** au Cambodge, il n'existe pas de base d'annonces partagée entre agences. Un même bien est publié par plusieurs agences, à des prix différents, avec des photos différentes, et des annonces restent en ligne longtemps après la vente.

**Ce que le portail fait :**

- **Un bien = une fiche.** Une seule fiche par bien, avec la liste des agences qui le proposent et le prix de chacune.
- **Une date de dernière confirmation** affichée sur chaque annonce, pour savoir si elle est encore d'actualité.
- **Un filtre « éligible étranger »**, qui ne garde que les biens qu'un étranger peut acheter. Source officielle sur les règles de propriété pour les étrangers : [À COMPLÉTER PAR STEFAN : lien vers le texte]

**Le dépôt :** [github.com/stefan-cambodia/immo](https://github.com/stefan-cambodia/immo)

**Pour qui :** trois publics, chacun dans sa langue. Les expatriés et investisseurs occidentaux (français, anglais), les investisseurs chinois (chinois simplifié), le marché khmer (khmer).

**Où j'en suis :**

- La consultation fonctionne : recherche, carte, fiches.
- Sont engagés : des pages par quartier et par type de bien, un tableau de bord pour les agences, des alertes par email ou Telegram sur des critères enregistrés.
- **Ce qui n'est pas fait :** la lecture automatique des annonces et la traduction automatique sont écrites, mais n'ont jamais tourné en conditions réelles.
- Mise en ligne publique : [À COMPLÉTER PAR STEFAN]

## 2. Cambodia Nautic : une plateforme pour le nautisme

**Ce que c'est :** une plateforme pour les activités nautiques en Asie du Sud-Est : tourisme, location et vente de bateaux, navigation, gestion pour les professionnels, services techniques, communauté. Le Cambodge est le premier marché visé.

**Le dépôt :** [github.com/stefan-cambodia/nautica](https://github.com/stefan-cambodia/nautica)

**Ce que la plateforme fait aujourd'hui :**

- **Côté public :** chercher une activité ou un bateau à louer (date, nombre de participants, prix, proximité), réserver, annuler selon la politique affichée, laisser un avis une fois la sortie terminée. L'interface existe en cinq langues : khmer, anglais, français, chinois, thaï.
- **Côté professionnel :** un espace pour gérer son entreprise, sa flotte, ses activités, ses départs, ses réservations et son équipe, avec des rappels d'entretien des bateaux.

**Ce qui n'est pas fait :**

- **Le paiement en ligne.** Seul le paiement sur place fonctionne. Les cartes et le paiement par QR code demandent des contrats avec des prestataires de paiement, que je n'ai pas.
- **La relecture** du khmer, du chinois et du thaï par des personnes dont c'est la langue.
- Les notifications sur téléphone et par SMS.
- Mise en ligne publique : [À COMPLÉTER PAR STEFAN]

## 3. Angkor à l'échelle réelle, à parcourir en véhicule

**Ce que c'est :** une reconstitution de la région d'Angkor, construite à partir de données géographiques ouvertes, à l'échelle 1:1. Un mètre dans le jeu est un mètre sur place : un trajet y prend le même temps qu'en vrai. Le but est de s'en servir pour des jeux et des simulations de conduite, sur téléphone Android et sur PC.

**Le dépôt :** [github.com/stefan-cambodia/angkor](https://github.com/stefan-cambodia/angkor)

**Ce qui fonctionne :**

- Toute la région est parcourable : 37 × 45 km, du Baray occidental à la rive du Tonlé Sap, en passant par Angkor Thom, Angkor Vat, Siem Reap et Roluos.
- Rien n'est placé à la main : routes, bâtiments, douves et bassins sont à leur position relevée.
- Cinq véhicules à conduire : voiture, moto, scooter, auto-rickshaw et remorque.
- Neuf temples ont leur propre modèle : Angkor Vat et huit temples-montagnes.
- Météo, nuit, phares.
- Sur un téléphone Android de milieu de gamme, cela tourne à 80 images par seconde.

**Ce qui n'est pas fait :**

- C'est un prototype. Tous les visuels sont provisoires : arbres, bâtiments, véhicules et temples sont des volumes simples, sans détail d'architecture.
- Les autres temples, dont le Bayon, ne sont encore que des formes tirées de leur contour sur la carte.
- La hauteur de la plupart des tours est estimée, faute de source.
- Les commandes n'ont pas encore été essayées avec les doigts, une manette ou l'inclinaison du téléphone, et aucun téléphone d'entrée de gamme n'a été mesuré.

## 4. BTC Terminal : un poste de travail pour suivre le Bitcoin

**Ce que c'est :** un écran unique, dans l'esprit d'un terminal Bloomberg, qui réunit ce qu'il faut pour lire le marché du Bitcoin.

**Le dépôt :** [github.com/stefan-cambodia/btcterm](https://github.com/stefan-cambodia/btcterm)

**Ce qu'on y voit :** le prix et ses indicateurs, les carnets d'ordres de plusieurs plateformes, les écarts de prix entre elles, les liquidations, les flux des ETF, le marché des contrats perpétuels, les options, un fil d'actualités, le calendrier macroéconomique, et des alertes réglables. Chaque panneau peut passer en plein écran.

C'est un outil de lecture du marché. Il ne passe aucun ordre.

**Où j'en suis :** [À COMPLÉTER PAR STEFAN : usage personnel ou destiné à d'autres, et ce qui reste à faire]

## Ce que je ne sais pas encore

- Lequel de ces projets passera en premier, et dans quel ordre : [À COMPLÉTER PAR STEFAN]
- Combien de temps j'y consacre à côté des démarches : [À COMPLÉTER PAR STEFAN]
- Ce que chacun a coûté jusqu'ici (hébergement, noms de domaine, outils) : [À COMPLÉTER PAR STEFAN]

Je mettrai cet article à jour quand l'un d'eux changera d'état.

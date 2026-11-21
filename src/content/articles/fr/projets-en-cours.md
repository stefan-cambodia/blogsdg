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

*Mis à jour le 21 novembre 2026. Ce qui a changé depuis la première version, du 18 novembre, est résumé en fin d'article.*

[À COMPLÉTER PAR STEFAN : le lien entre ces projets et Chantrea Systems. Produits de la société, vitrine de savoir-faire, projets personnels ?]

## 1. Un portail immobilier pour le Cambodge

**Ce que c'est :** un portail de recherche immobilière, vente et location, pour tout le pays.

**Le problème que je veux régler :** au Cambodge, il n'existe pas de base d'annonces partagée entre agences. Un même bien est publié par plusieurs agences, à des prix différents, avec des photos différentes, et des annonces restent en ligne longtemps après la vente.

**Ce que le portail fait :**

- **Un bien = une fiche.** Une seule fiche par bien, avec la liste des agences qui le proposent et le prix de chacune.
- **Une date de dernière confirmation** affichée sur chaque annonce, pour savoir si elle est encore d'actualité.
- **Un filtre « éligible étranger »**, qui ne garde que les biens qu'un étranger peut acheter. Source officielle sur les règles de propriété pour les étrangers : [À COMPLÉTER PAR STEFAN : lien vers le texte]

**Le dépôt :** [github.com/stefan-cambodia/immo](https://github.com/stefan-cambodia/immo)

**Pour qui :** les expatriés et investisseurs occidentaux (français, anglais), les investisseurs chinois (chinois simplifié), le marché khmer (khmer). Le russe est devenu la cinquième langue du portail le 5 novembre.

**Où j'en suis (21 novembre) :**

- La consultation fonctionne : recherche, carte, fiches.
- Le catalogue est rempli avec de vraies annonces, collectées chaque jour sur un portail public cambodgien. Après un rattrapage de deux mois de retard le 16 novembre, il compte 3 937 annonces.
- Sont engagés : des pages par quartier et par type de bien, un tableau de bord pour les agences, des alertes par email ou Telegram sur des critères enregistrés.
- **Ce qui n'est pas fait :** la lecture automatique des annonces envoyées par les agences sur Telegram, et la traduction automatique, sont écrites mais n'ont jamais tourné contre le vrai service d'intelligence artificielle, faute de clé d'accès.
- Pas de changement depuis le 16 novembre.
- Mise en ligne publique : [À COMPLÉTER PAR STEFAN]

## 2. Cambodia Nautic : une plateforme pour le nautisme

**Ce que c'est :** une plateforme pour les activités nautiques en Asie du Sud-Est : tourisme, location et vente de bateaux, navigation, gestion pour les professionnels, services techniques, communauté. Le Cambodge est le premier marché visé.

**Le dépôt :** [github.com/stefan-cambodia/nautica](https://github.com/stefan-cambodia/nautica)

**Ce que la plateforme fait aujourd'hui (21 novembre) :**

- **Côté public, sur le site :** chercher une activité ou un bateau à louer (date, nombre de participants, prix, proximité), réserver, annuler selon la politique affichée, laisser un avis une fois la sortie terminée. On peut aussi chercher un bateau à vendre, trouver un port et ses services, s'inscrire en liste d'attente sur un départ complet, et supprimer son compte soi-même. L'interface existe en cinq langues : khmer, anglais, français, chinois, thaï.
- **Côté professionnel :** un espace pour gérer son entreprise, sa flotte, ses activités, ses départs, ses réservations et son équipe, avec des rappels d'entretien des bateaux, des factures et avoirs, des exports comptables et des codes promo.
- **Une application pour téléphone** (Android et iPhone), ajoutée le 19 novembre. Pour le public : les mêmes recherches et réservations, consultables sans connexion. Pour l'équipage : la liste des passagers sans connexion, l'itinéraire, l'enregistrement du trajet GPS, et la déclaration du départ et du retour. Si le retour n'est pas déclaré 30 minutes après l'heure prévue, l'équipe à terre est alertée.
- **L'accessibilité** a été vérifiée le 20 novembre : contrôle automatique sur une cinquantaine de pages du site, texte agrandi à 200 % dans les cinq langues de l'application, lecteurs d'écran des téléphones.
- Ouvrir un nouveau pays se fait dans l'administration, sans toucher au code. L'essai a été fait avec la Thaïlande.

**Ce qui n'est pas fait :**

- **Le paiement en ligne.** Seul le paiement sur place fonctionne. Les cartes et le paiement par QR code demandent des contrats avec des prestataires de paiement, que je n'ai pas.
- **La relecture** du khmer, du chinois et du thaï par des personnes dont c'est la langue. L'outil qui prépare les textes à relire est prêt.
- **Les notifications sur téléphone** sont écrites, mais pas branchées : il faut créer les comptes chez Google (Firebase) et Apple. Pour les SMS, le prestataire n'est pas choisi.
- **La publication sur Google Play et l'App Store** : les fiches et les captures d'écran sont prêtes dans les cinq langues, et la version Android est signée. Manquent les comptes développeur, le logo définitif, des captures avec de vraies annonces et la relecture juridique des textes.
- **L'ouverture au public** : hébergement, nom de domaine, comptes chez les services extérieurs, validations juridiques et comptables. Date de mise en ligne : [À COMPLÉTER PAR STEFAN]

## 3. Angkor à l'échelle réelle, à parcourir en véhicule

**Ce que c'est :** une reconstitution de la région d'Angkor, construite à partir de données géographiques ouvertes, à l'échelle 1:1. Un mètre dans le jeu est un mètre sur place : un trajet y prend le même temps qu'en vrai. Le but est de s'en servir pour des jeux et des simulations de conduite, sur téléphone Android et sur PC.

**Le dépôt :** [github.com/stefan-cambodia/angkor](https://github.com/stefan-cambodia/angkor)

**Ce qui fonctionne :**

- Toute la région est parcourable : 37 × 45 km, du Baray occidental à la rive du Tonlé Sap, en passant par Angkor Thom, Angkor Vat, Siem Reap et Roluos.
- Rien n'est placé à la main : routes, bâtiments, douves et bassins sont à leur position relevée.
- Cinq véhicules à conduire : voiture, moto, scooter, auto-rickshaw et remorque.
- **Vingt temples ont maintenant leur propre modèle**, contre neuf le 18 novembre. Depuis cette date, ils sont reconstruits à partir des relevés de l'École française d'Extrême-Orient : plans, coupes et élévations dessinés entre 1935 et 1971, dont les cotes sont lues une à une. Angkor Vat, les huit temples-montagnes (Phnom Bakheng, Baksei Chamkrong, Bakong, Pré Rup, Mébon oriental, Ta Keo, Phimeanakas, Baphuon), Banteay Srei, Thommanon, Chau Say Tevoda, Neak Pean, Banteay Kdei, Prasat Kravan, Prasat Bei et Banteay Samré. Le Bayon, Ta Prohm et Preah Khan sont commencés : quelques parties seulement.
- **Le centre de Siem Reap** ressemble davantage à la ville : le vieux quartier colonial autour du vieux marché, avec ses galeries à arcades et ses façades colorées, les rues éclairées et plantées d'arbres, les enseignes et guirlandes de Pub Street la nuit, les pagodes et leurs stupas, le quartier administratif français avec ses villas.
- Les villages ont leurs maisons sur pilotis, avec hamacs, jarres, clôtures en bambou, vaches et poules.
- Météo, nuit, phares.
- Sur un téléphone Android de milieu de gamme, cela tournait à 80 images par seconde. Cette mesure date du 18 novembre et n'a pas été refaite depuis l'ajout des nouveaux temples.

**Ce qui n'est pas fait :**

- C'est un prototype. Les visuels restent provisoires. Les temples ont leur volume et leurs étages, sans sculpture.
- Les autres temples ne sont encore que des formes tirées de leur contour sur la carte.
- Quand un relevé ne donne pas une hauteur, elle est estimée selon une règle écrite. Personne n'a encore comparé les modèles avec un relevé sur place.
- Les commandes n'ont pas encore été essayées avec les doigts, une manette ou l'inclinaison du téléphone, et aucun téléphone d'entrée de gamme n'a été mesuré.

## 4. BTC Terminal : un poste de travail pour suivre le Bitcoin

**Ce que c'est :** un écran unique, dans l'esprit d'un terminal Bloomberg, qui réunit ce qu'il faut pour lire le marché du Bitcoin.

**Le dépôt :** [github.com/stefan-cambodia/btcterm](https://github.com/stefan-cambodia/btcterm)

**Ce qu'on y voit :** le prix et ses indicateurs, les carnets d'ordres de plusieurs plateformes, les écarts de prix entre elles, les liquidations, les flux des ETF, le marché des contrats perpétuels, les options, un fil d'actualités, le calendrier macroéconomique, et des alertes réglables. Chaque panneau peut passer en plein écran.

C'est un outil de lecture du marché. Il ne passe aucun ordre.

**Les derniers ajouts (du 5 au 13 novembre) :** un panneau qui met les signaux à l'épreuve, les alertes envoyées jusqu'au téléphone, une synthèse de la journée sur une page, le mouvement attendu par les options d'ici l'échéance, le positionnement des petits porteurs comparé à celui des gros, et des alertes sur les extrêmes de la semaine ou du mois.

**Où j'en suis :** pas de changement depuis le 13 novembre. [À COMPLÉTER PAR STEFAN : usage personnel ou destiné à d'autres, et ce qui reste à faire]

## Ce que je ne sais pas encore

- Lequel de ces projets passera en premier, et dans quel ordre : [À COMPLÉTER PAR STEFAN]
- Combien de temps j'y consacre à côté des démarches : [À COMPLÉTER PAR STEFAN]
- Ce que chacun a coûté jusqu'ici (hébergement, noms de domaine, outils) : [À COMPLÉTER PAR STEFAN]

Je mettrai cet article à jour quand l'un d'eux changera d'état.

## Ce qui a changé depuis la première version

**21 novembre 2026**

- **Cambodia Nautic :** une application pour téléphone (19 novembre), avec un mode sans connexion pour l'équipage, le suivi des sorties et l'alerte en cas de retour en retard. Accessibilité vérifiée (20 novembre). Fiches et captures pour les magasins d'applications prêtes. Le paiement en ligne et l'ouverture au public restent à faire.
- **Angkor :** de neuf à vingt temples modélisés, désormais à partir des relevés de l'École française d'Extrême-Orient. Le centre de Siem Reap redessiné d'après les sources publiées.
- **Portail immobilier :** pas de changement depuis l'article. Précisions ajoutées : le catalogue de vraies annonces (3 937) et le russe comme cinquième langue, deux évolutions antérieures au 18 novembre.
- **BTC Terminal :** pas de changement depuis l'article. Les derniers ajouts, du 5 au 13 novembre, sont décrits.

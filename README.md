# De zéro à Chantrea

Blog de Stefan : la création, étape par étape, d'une société IT au Cambodge.
Site statique Astro, publié sur GitHub Pages : <https://stefan-cambodia.github.io/blogsdg/>

Trois langues : français (à la racine), anglais (`/en/`) et khmer (`/km/`).

Aucun JavaScript envoyé au navigateur, aucun traceur, aucun cookie.

## Prérequis

- Node.js 22.23 ou plus récent (`node --version`)
- Une fois, après le clonage : `npm ci`

## Les commandes

| Commande | Effet |
|---|---|
| `npm run dev` | Site local sur <http://localhost:4321/blogsdg/>, **brouillons compris** |
| `npm run build` | Construit le site final dans `dist/` (sans les brouillons) |
| `npm run preview` | Sert `dist/` en local, exactement comme en ligne |

Astro envoie par défaut des statistiques d'usage anonymes pendant le développement. Pour les couper sur ta machine : `npx astro telemetry disable` (c'est déjà fait dans le déploiement).

## Ajouter un article

1. Crée un fichier dans `src/content/articles/<langue>/`, par exemple
   `src/content/articles/fr/verifier-le-nom.md`.
   Le nom du fichier devient l'adresse : `/articles/verifier-le-nom/`.
2. Commence le fichier par ce frontmatter :

   ```yaml
   ---
   titre: "Vérifier le nom de la société au registre"
   date: 2026-11-25          # date de rédaction, affichée dans l'encadré en bas
   langue: fr                # fr, en ou km
   etape: 1                  # numéro d'étape dans le parcours
   statut: en cours          # « en cours » ou « terminé »
   resume: "Une ou deux phrases qui résument l'article."
   # coutUSD: <montant>      # facultatif : nombre seulement, en USD
   # delai: "<durée>"        # facultatif : texte libre
   tags: [registre, société]
   brouillon: true           # true = visible en local seulement
   traduction: verifier-le-nom  # facultatif, voir plus bas
   ---
   ```

3. Écris le texte en Markdown en dessous.
4. Lance `npm run dev` et relis l'article dans le navigateur.

Si un champ obligatoire manque ou est mal écrit, `npm run build` s'arrête et indique lequel.

L'encadré « Récit d'expérience personnelle… » et la date de rédaction sont ajoutés automatiquement en bas de chaque article.

### Règles de contenu

- Jamais de numéro de passeport ou de visa, d'adresse exacte, de nom d'hébergement, de coordonnées bancaires, ni de nom de personne privée sans son accord.
- Pas de chiffre, délai ou règle inventés : si l'information manque, écrire `[À COMPLÉTER PAR STEFAN]`.
- Quand un article mentionne une règle, mettre le lien vers la source officielle.

Pour retrouver ce qui reste à compléter : `grep -rn "À COMPLÉTER" src/content`

## Traduire un article

1. Crée la traduction dans `src/content/articles/en/` ou `src/content/articles/km/` (le nom de fichier peut être différent ; jusqu'ici, l'anglais et le khmer utilisent le même).
2. Donne-lui `langue: en` ou `langue: km` et **la même valeur `traduction:`** que la version française. Ajoute aussi ce champ à la version française s'il n'y est pas.
3. Remplace `[À COMPLÉTER PAR STEFAN]` par `[TO BE COMPLETED BY STEFAN]`, en anglais comme en khmer, pour pouvoir le retrouver avec `grep`.

Les versions se lient alors les unes aux autres. Un article sans traduction n'apparaît pas du tout dans la partie du site de cette langue.

### Le khmer

- Les textes khmers sont traduits par Claude. Tant qu'une personne dont le khmer est la langue maternelle ne les a pas relus, chaque page khmère commence par cette note, en italique :

  ```
  *អត្ថបទនេះត្រូវបានបកប្រែពីភាសាបារាំងដោយបញ្ញាសិប្បនិម្មិត (Claude) ហើយមិនទាន់ត្រូវបានពិនិត្យដោយអ្នកដែលមានភាសាខ្មែរជាភាសាកំណើតនៅឡើយទេ។*
  ```

  (« Cet article a été traduit du français par une intelligence artificielle (Claude) et n'a pas encore été relu par une personne dont le khmer est la langue maternelle. ») Pour la page À propos, le premier mot est ទំព័រនេះ (« cette page ») au lieu de អត្ថបទនេះ (« cet article »). Une fois la page relue, supprime la note.
- Les tags khmers doivent être écrits exactement pareil d'un article à l'autre : une seule différence de caractère crée une page de tag séparée. Par exemple, « démarrage » s'écrit ការចាប់ផ្ដើម, avec ដ.
- Les adresses des pages khmères restent en lettres latines (`/km/articles/starting-point/`).

## Publier

1. Passe `brouillon: false` (ou supprime la ligne).
2. Vérifie le rendu final : `npm run build && npm run preview`.
3. Fais un commit, puis pousse sur la branche `main` :

   ```bash
   git add .
   git commit -m "Article : vérifier le nom au registre"
   git push origin main
   ```

4. GitHub Actions construit et publie le site en une à deux minutes. Le suivi est dans l'onglet **Actions** du dépôt.

### Réglage GitHub à faire une seule fois

Dans le dépôt sur GitHub : **Settings → Pages → Build and deployment → Source : « GitHub Actions »**.

## Organisation du code

```
src/
  content/articles/<langue>/   les articles (Markdown)
  content/pages/<langue>/      la page « À propos »
  content.config.ts            la liste des champs du frontmatter
  i18n.ts                      langues, textes de l'interface, adresses des pages
  articles.ts                  tri, brouillons, traductions, étapes
  pages/[...path].astro        génère toutes les pages pour chaque langue
  pages/[...lang]/rss.xml.ts   un flux RSS par langue
  views/                       gabarit de chaque type de page
  layouts/Base.astro           en-tête, menu, balises Open Graph, pied de page
  styles/global.css            thème clair/sombre (suit le réglage de l'appareil)
public/                        fichiers copiés tels quels (favicon, image de partage)
```

## Ajouter une langue

1. Dans `src/i18n.ts` : ajouter son code à `LANGS` (et à `CONTENT_LANGS`), une entrée dans `LOCALES`, `ROUTES` et `UI`.
2. Créer `src/content/pages/<langue>/a-propos.md` et les articles dans `src/content/articles/<langue>/`.

Toutes les pages (`/<langue>/…`), le flux RSS et le sélecteur de langue suivent automatiquement. Si l'écriture a besoin d'un autre interligne, l'ajouter dans `src/styles/global.css` avec `:lang(<langue>)`, comme pour le khmer.

## Domaine personnel

Si le blog passe sur un domaine à toi, change `site` et `base` dans `astro.config.mjs` (`base: '/'`), ajoute un fichier `public/CNAME` contenant le domaine, et règle le domaine dans **Settings → Pages**.

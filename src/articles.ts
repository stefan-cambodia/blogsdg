import { getCollection, type CollectionEntry } from 'astro:content';
import { href, type Lang } from './i18n';

export type Article = CollectionEntry<'articles'>;

/** Les brouillons ne sont visibles qu'en local (npm run dev). */
const visible = (a: Article) => import.meta.env.DEV || !a.data.brouillon;

/** Slug d'URL : le nom du fichier, sans le dossier de langue. */
export const articleSlug = (a: Article) => a.id.split('/').slice(1).join('/');

export const articleHref = (a: Article) => href(a.data.langue as Lang, 'articles', articleSlug(a));

/** Articles d'une langue, du plus récent au plus ancien. */
export async function getArticles(lang: Lang) {
  const all = await getCollection('articles', (a) => a.data.langue === lang && visible(a));
  return all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** Autres versions linguistiques d'un article (même champ `traduction`). */
export async function getTranslations(article: Article) {
  const key = article.data.traduction;
  if (!key) return [];
  return getCollection(
    'articles',
    (a) => a.data.traduction === key && a.data.langue !== article.data.langue && visible(a),
  );
}

/** Regroupe les articles par étape, dans l'ordre du parcours. */
export function groupBySteps(articles: Article[]) {
  const steps = new Map<number, Article[]>();
  for (const a of articles) steps.set(a.data.etape, [...(steps.get(a.data.etape) ?? []), a]);
  return [...steps.entries()]
    .sort(([a], [b]) => a - b)
    .map(([etape, list]) => ({
      etape,
      articles: list.sort((a, b) => a.data.date.getTime() - b.data.date.getTime()),
      termine: list.every((a) => a.data.statut === 'terminé'),
    }));
}

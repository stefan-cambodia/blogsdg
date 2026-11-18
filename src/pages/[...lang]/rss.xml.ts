// Un flux RSS par langue : /rss.xml (français), /en/rss.xml, etc.
import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { articleHref, getArticles } from '../../articles';
import { DEFAULT_LANG, LANGS, LOCALES, t, type Lang } from '../../i18n';

export function getStaticPaths() {
  return LANGS.map((lang) => ({
    params: { lang: lang === DEFAULT_LANG ? undefined : lang },
    props: { lang },
  }));
}

export async function GET(context: APIContext) {
  const lang = context.props.lang as Lang;
  const ui = t(lang);
  const articles = await getArticles(lang);
  return rss({
    title: ui.siteTitle,
    description: ui.siteDescription,
    site: context.site!,
    items: articles.map((a) => ({
      title: a.data.titre,
      pubDate: a.data.date,
      description: a.data.resume,
      link: articleHref(a),
      categories: a.data.tags,
    })),
    customData: `<language>${LOCALES[lang].locale}</language>`,
  });
}

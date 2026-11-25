// Langues du site et textes de l'interface.
// Pour ajouter une langue : l'ajouter dans LANGS, LOCALES, ROUTES.* et UI.
// Toutes les pages sont générées automatiquement pour chaque langue de LANGS.

export const LANGS = ['fr', 'en', 'km'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'fr';

// Langues acceptées dans le frontmatter (même si l'interface n'existe pas encore).
export const CONTENT_LANGS = ['fr', 'en', 'km'] as const;

export const LOCALES: Record<Lang, { locale: string; og: string; label: string }> = {
  fr: { locale: 'fr-FR', og: 'fr_FR', label: 'Français' },
  en: { locale: 'en-GB', og: 'en_GB', label: 'English' },
  km: { locale: 'km-KH', og: 'km_KH', label: 'ខ្មែរ' },
};

// Segments d'URL traduits (le khmer garde des segments latins, plus lisibles dans une adresse). La langue par défaut est à la racine, les autres sous /<lang>/.
export const ROUTES = {
  journey: { fr: 'parcours', en: 'journey', km: 'journey' },
  about: { fr: 'a-propos', en: 'about', km: 'about' },
  tags: { fr: 'tags', en: 'tags', km: 'tags' },
  articles: { fr: 'articles', en: 'articles', km: 'articles' },
} satisfies Record<string, Record<Lang, string>>;
export type RouteKey = keyof typeof ROUTES;

export const UI = {
  fr: {
    siteTitle: 'De zéro à Chantrea',
    siteDescription:
      "Le récit, étape par étape, de la création de ma société IT au Cambodge, en tant qu'expatrié qui ne l'a jamais fait.",
    nav: { home: 'Accueil', journey: 'Le parcours', about: 'À propos', tags: 'Tags' },
    latest: 'Derniers articles',
    allArticles: 'Tout le parcours',
    noArticles: 'Aucun article publié pour le moment.',
    noArticlesOtherLang: 'Les articles sont pour l’instant en français :',
    step: 'Étape',
    status: { 'en cours': 'en cours', terminé: 'terminé' },
    cost: 'Coût',
    duration: 'Délai',
    writtenOn: 'Rédigé le',
    draft: 'Brouillon',
    tagged: 'Articles avec le tag',
    allTags: 'Tous les tags',
    readIn: 'Aussi disponible en :',
    disclaimer:
      "Récit d'expérience personnelle, pas un conseil juridique ou fiscal. Les règles changent : vérifiez auprès d'un professionnel agréé.",
    journeyIntro:
      "Chaque étape de la création de la société, dans l'ordre. Une étape est terminée quand tous ses articles le sont.",
    rss: 'Flux RSS',
    footer: 'Récit personnel, sans traceur ni cookie.',
    skip: 'Aller au contenu',
  },
  en: {
    siteTitle: 'From Zero to Chantrea',
    siteDescription:
      'A step-by-step account of setting up my IT company in Cambodia, as an expat who has never done it before.',
    nav: { home: 'Home', journey: 'The journey', about: 'About', tags: 'Tags' },
    latest: 'Latest posts',
    allArticles: 'The whole journey',
    noArticles: 'No posts published yet.',
    noArticlesOtherLang: 'For now, posts are written in French:',
    step: 'Step',
    status: { 'en cours': 'in progress', terminé: 'done' },
    cost: 'Cost',
    duration: 'Time taken',
    writtenOn: 'Written on',
    draft: 'Draft',
    tagged: 'Posts tagged',
    allTags: 'All tags',
    readIn: 'Also available in:',
    disclaimer:
      'Personal experience, not legal or tax advice. Rules change: check with a licensed professional.',
    journeyIntro:
      'Each step of setting up the company, in order. A step is done when all its posts are.',
    rss: 'RSS feed',
    footer: 'A personal account, no trackers, no cookies.',
    skip: 'Skip to content',
  },
  km: {
    siteTitle: 'ពីសូន្យទៅ Chantrea',
    siteDescription:
      'ដំណើររឿងមួយជំហានម្ដងៗ នៃការបង្កើតក្រុមហ៊ុនព័ត៌មានវិទ្យារបស់ខ្ញុំនៅកម្ពុជា ក្នុងនាមជាជនបរទេសដែលមិនធ្លាប់ធ្វើវាពីមុនមក។',
    nav: { home: 'ទំព័រដើម', journey: 'ដំណើរ', about: 'អំពីខ្ញុំ', tags: 'ស្លាក' },
    latest: 'អត្ថបទថ្មីៗ',
    allArticles: 'ដំណើរទាំងមូល',
    noArticles: 'មិនទាន់មានអត្ថបទបោះពុម្ពផ្សាយនៅឡើយទេ។',
    noArticlesOtherLang: 'បច្ចុប្បន្ន អត្ថបទត្រូវបានសរសេរជាភាសាបារាំង៖',
    step: 'ជំហាន',
    status: { 'en cours': 'កំពុងដំណើរការ', terminé: 'បានបញ្ចប់' },
    cost: 'ថ្លៃចំណាយ',
    duration: 'រយៈពេល',
    writtenOn: 'សរសេរនៅថ្ងៃទី',
    draft: 'សេចក្តីព្រាង',
    tagged: 'អត្ថបទដែលមានស្លាក',
    allTags: 'ស្លាកទាំងអស់',
    readIn: 'មានជាភាសា៖',
    disclaimer:
      'នេះជាបទពិសោធន៍ផ្ទាល់ខ្លួន មិនមែនជាដំបូន្មានផ្នែកច្បាប់ ឬពន្ធដារទេ។ ច្បាប់អាចផ្លាស់ប្តូរ៖ សូមពិនិត្យជាមួយអ្នកជំនាញដែលមានអាជ្ញាប័ណ្ណ។',
    journeyIntro:
      'ជំហាននីមួយៗនៃការបង្កើតក្រុមហ៊ុន តាមលំដាប់។ ជំហានមួយត្រូវបានបញ្ចប់ នៅពេលអត្ថបទទាំងអស់របស់វាបានបញ្ចប់។',
    rss: 'ព័ត៌មាន RSS',
    footer: 'ដំណើររឿងផ្ទាល់ខ្លួន គ្មានកម្មវិធីតាមដាន គ្មានខូគី។',
    skip: 'រំលងទៅខ្លឹមសារ',
  },
} satisfies Record<Lang, unknown>;

export const t = (lang: Lang) => UI[lang];

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Préfixe de langue : '' pour le français, 'en/' pour l'anglais. */
export const langPrefix = (lang: Lang) => (lang === DEFAULT_LANG ? '' : `${lang}/`);

/** Chemin relatif au site (sans base) d'une page, ex. 'en/journey/'. */
export function routePath(lang: Lang, key?: RouteKey, ...rest: string[]) {
  const parts = [key ? ROUTES[key][lang] : '', ...rest].filter(Boolean);
  return `${langPrefix(lang)}${parts.map((p) => `${p}/`).join('')}`;
}

/** URL complète avec la base, ex. '/blogsdg/en/journey/'. */
export const href = (lang: Lang, key?: RouteKey, ...rest: string[]) =>
  `${BASE}/${routePath(lang, key, ...rest)}`;

/** Pour getStaticPaths : la valeur du paramètre [...path] d'une route dans chaque langue. */
export const routeParam = (lang: Lang, key: RouteKey, ...rest: string[]) =>
  routePath(lang, key, ...rest).replace(/\/$/, '');

export function formatDate(date: Date, lang: Lang) {
  return new Intl.DateTimeFormat(LOCALES[lang].locale, { dateStyle: 'long', timeZone: 'UTC' }).format(date);
}

/** Slug d'un tag : minuscules, sans accents latins, compatible avec les écritures non latines. */
export function tagSlug(tag: string) {
  return tag
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^\p{L}\p{M}\p{N}]+/gu, '-')
    .replace(/^-|-$/g, '');
}

/** Versions d'une même page dans toutes les langues (pour le sélecteur et hreflang). */
export const alternates = (key?: RouteKey, ...rest: string[]) =>
  LANGS.map((l) => ({ lang: l, url: href(l, key, ...rest) }));

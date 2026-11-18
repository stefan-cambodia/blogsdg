import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { CONTENT_LANGS } from './i18n';

// Articles : src/content/articles/<langue>/<slug>.md
// Le build échoue si un champ obligatoire manque ou est mal rempli.
const articles = defineCollection({
  loader: glob({ base: './src/content/articles', pattern: '**/*.md' }),
  schema: z.object({
    titre: z.string().min(1),
    date: z.coerce.date(), // date de rédaction, affichée dans l'encadré
    langue: z.enum(CONTENT_LANGS),
    etape: z.number().int().min(0),
    statut: z.enum(['en cours', 'terminé']),
    resume: z.string().min(1),
    coutUSD: z.number().min(0).optional(),
    delai: z.string().optional(), // texte libre, ex. "3 semaines"
    tags: z.array(z.string()).default([]),
    brouillon: z.boolean().default(false), // true = visible en local seulement
    traduction: z.string().optional(), // même valeur pour toutes les versions d'un article
  }),
});

// Pages fixes (À propos) : src/content/pages/<langue>/<nom>.md
const pages = defineCollection({
  loader: glob({ base: './src/content/pages', pattern: '**/*.md' }),
  schema: z.object({
    titre: z.string(),
    resume: z.string(),
    langue: z.enum(CONTENT_LANGS),
  }),
});

export const collections = { articles, pages };

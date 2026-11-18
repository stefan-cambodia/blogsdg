// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Adresse publique du site. Si tu passes à un domaine perso :
// site: 'https://ton-domaine.tld' et base: '/'
export default defineConfig({
  site: 'https://stefan-cambodia.github.io',
  base: '/blogsdg',
  trailingSlash: 'always',
  integrations: [sitemap()],
});

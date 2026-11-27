import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
// https://astro.build/config
export default defineConfig({
  site: 'https://tokobungamurahmalang.web.id',
  base: '/',
  devToolbar: { enabled: false },
  build: {
    inlineStylesheets: 'auto',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/invoice'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  }
});

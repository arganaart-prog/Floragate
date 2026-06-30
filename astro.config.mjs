import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://tokobungamurahmalang.com',
  // Ubah 'base' jika dideploy di subfolder GitHub Pages, misal: '/floragate/'
  base: '/',
  devToolbar: { enabled: false },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  }
});
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://tokobungamurahmalang.web.id',
  // GitHub Pages project site: https://arganaart-prog.github.io/Floragate/
  base: '/',
  devToolbar: { enabled: false },
  integrations: [sitemap()],
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  image: {
    // Use sharp for image processing (already installed as devDep)
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: 'lightningcss',
      rollupOptions: {
        output: {
          // Split vendor chunks for better caching
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
        },
      },
    },
  },
});

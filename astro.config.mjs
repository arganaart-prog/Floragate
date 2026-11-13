import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

// Astro integration: ubah CSS blocking → non-blocking di semua HTML output
function nonBlockingCss() {
  return {
    name: 'non-blocking-css',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        // Fix Windows path: URL object → decoded string path
        const distPath = decodeURIComponent(dir.pathname).replace(/^\/([A-Za-z]:)/, '$1');

        function processDir(dirPath) {
          const entries = readdirSync(dirPath);
          for (const entry of entries) {
            const fullPath = join(dirPath, entry);
            const stat = statSync(fullPath);
            if (stat.isDirectory()) {
              processDir(fullPath);
            } else if (entry.endsWith('.html')) {
              let html = readFileSync(fullPath, 'utf-8');
              const before = html;

              // Kumpulkan CSS yang sudah diubah jadi preload
              const preloaded = new Set();
              html = html.replace(
                /<link rel="stylesheet" href="(\/_astro\/[^"]+\.css)">/g,
                (_, href) => {
                  preloaded.add(href);
                  return (
                    `<link rel="preload" href="${href}" as="style" onload="this.onload=null;this.rel='stylesheet'">` +
                    `<noscript><link rel="stylesheet" href="${href}"></noscript>`
                  );
                }
              );

              // Hapus duplikat <link rel="stylesheet"> yang mungkin ditambah Astro sendiri
              for (const href of preloaded) {
                const escapedHref = href.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                html = html.replace(
                  new RegExp(`<link rel="stylesheet" href="${escapedHref}">`, 'g'),
                  ''
                );
              }

              if (html !== before) {
                writeFileSync(fullPath, html, 'utf-8');
              }
            }
          }
        }

        processDir(distPath);
        console.log('[non-blocking-css] ✅ CSS converted to non-blocking preload');
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://tokobungamurahmalang.web.id',
  base: '/',
  devToolbar: { enabled: false },
  build: {
    inlineStylesheets: 'auto',
  },
  integrations: [sitemap(), nonBlockingCss()],
  vite: {
    plugins: [tailwindcss()],
  }
});

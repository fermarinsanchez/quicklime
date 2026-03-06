// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
// En producción (build para GitHub Pages) usamos base; en dev trabajas en /
export default defineConfig({
  site: 'https://fermarinsanchez.github.io',
  base: process.env.NODE_ENV === 'production' ? '/quicklime/' : '/',
  build: {
    // Evitar _astro para que GitHub Pages (Jekyll) no ignore la carpeta de assets
    assets: 'astro',
  },
  integrations: [react()]
});
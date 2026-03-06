// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
// base '/' para que funcione con dominio personalizado (quicklimemusic.com) en la raíz
export default defineConfig({
  site: 'https://quicklimemusic.com',
  base: '/',
  build: {
    // Evitar _astro para que GitHub Pages (Jekyll) no ignore la carpeta de assets
    assets: 'astro',
  },
  integrations: [react()]
});
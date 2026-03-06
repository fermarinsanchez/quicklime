// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
// En producción (build para GitHub Pages) usamos base; en dev trabajas en /
export default defineConfig({
  site: 'https://fermarinsanchez.github.io',
  base: process.env.NODE_ENV === 'production' ? '/quicklime/' : '/',
  integrations: [react()]
});
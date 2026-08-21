// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://tennibel.github.io',
  base: '/perla-machaen-sitio-web/',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
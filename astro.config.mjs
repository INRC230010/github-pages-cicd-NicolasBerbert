import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://INRC230010.github.io',
  base: '/github-pages-cicd-NicolasBerbert',
  output: 'static',
  build: {
    assets: '_astro'
  }
});
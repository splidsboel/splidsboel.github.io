// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // This is a user/org GitHub Pages site, so it's served from the domain root.
  site: 'https://splidsboel.github.io',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});

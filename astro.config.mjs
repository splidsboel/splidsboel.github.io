// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Served from the domain root via the custom domain (CNAME in public/).
  site: 'https://www.splidsboeleg.com',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});

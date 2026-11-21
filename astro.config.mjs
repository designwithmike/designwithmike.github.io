import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.mike-mendez.com',
  server: { port: 4321 },
  devToolbar: { enabled: false },
});

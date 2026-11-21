import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://designwithmike.github.io',
  server: { port: 4321 },
  devToolbar: { enabled: false },
});

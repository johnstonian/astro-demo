import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://kaleidoscopic-fairy-8335ea.netlify.app",
  integrations: [preact()]
});
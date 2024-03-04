import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import qwikdev from "@qwikdev/astro";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react({
      include: "**/react/**/*",
    }),
    qwikdev({
      include: "**/qwik/**/*",
    }),
  ],
  output: "hybrid",
  adapter: node({
    mode: "standalone",
  }),
});

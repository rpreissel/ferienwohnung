import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://ferienwohnung.preissel-hh.de",
  output: "static",
  build: {
    assets: "_assets",
  },
});

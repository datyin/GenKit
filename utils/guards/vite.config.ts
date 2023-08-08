import { defineConfig } from "vite";
import { name } from "./package.json";

export default defineConfig({
  build: {
    minify: false,
    lib: {
      entry: { index: "src/index.ts" },
      name,
      formats: ["es", "cjs", "umd"]
    },
    rollupOptions: {
      external: ["ibantools"],
      output: { globals: { ibantools: "ibantools" } }
    }
  }
});

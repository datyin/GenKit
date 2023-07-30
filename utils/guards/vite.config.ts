import { defineConfig } from "vite";
import { name } from "./package.json";

export default defineConfig({
  build: {
    lib: {
      entry: { index: "src/index.ts" },
      name,
      formats: ["es", "umd"]
    },
    rollupOptions: {
      external: ["ibantools"],
      output: { globals: { ibantools: "ibantools" } }
    }
  }
});

import { defineConfig } from "vite";
import pkg from "./package.json";

export default defineConfig({
  build: {
    ssr: true,
    lib: {
      entry: { index: "./src/index.ts" },
      name: pkg.name,
      formats: ["es", "cjs"]
    }
  }
});

import { defineConfig } from "vite";

export default defineConfig((context) => {
  return {
    build: {
      ssr: true,
      minify: false,
      watch: context.mode === "development" ? {} : null,
      lib: {
        entry: "src/index.ts",
        name: "eslint-config",
        fileName: "index",
        formats: ["es", "cjs"]
      }
    }
  };
});

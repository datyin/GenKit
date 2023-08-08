import { defineConfig } from "vite";
import { name } from "./package.json";

const external = [
  "@microsoft/sp-webpart-base",
  "@genkit/guards",
  "@pnp/queryable",
  "@pnp/sp",
  "@pnp/sp/webs",
  "@pnp/sp/site-users",
  "@pnp/sp/site-groups",
  "@pnp/sp/lists",
  "@pnp/sp/items",
  "@pnp/sp/security"
];

const globals: Record<string, string> = {};

for (const pkg of external) {
  globals[pkg] = pkg;
}

export default defineConfig({
  build: {
    minify: false,
    lib: {
      entry: { index: "src/index.ts" },
      name,
      formats: ["es", "umd"]
    },
    rollupOptions: {
      external,
      output: { globals }
    }
  }
});

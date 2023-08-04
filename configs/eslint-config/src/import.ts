import type { ESLint } from "eslint";

const config: ESLint.ConfigData["overrides"] = [
  {
    files: [
      "*.js",
      "*.cjs",
      "*.mjs",
      "*.jsx",
      "*.node",
      "*.ts",
      "*.tsx",
      "*.cts",
      "*.mts",
      "*.vue"
    ],
    rules: {
      "import/export": "error",
      "import/no-deprecated": "error",
      "import/no-named-as-default": "error",
      "import/no-named-as-default-member": "error",
      "import/no-duplicates": "error",
      "import/order": [
        "error", {
          pathGroups: [
            {
              pattern: "react",
              group: "external",
              position: "before"
            },
            {
              pattern: "react-dom",
              group: "external",
              position: "before"
            },
            {
              pattern: "vue",
              group: "external",
              position: "before"
            },
            {
              pattern: "vite",
              group: "external",
              position: "before"
            }
          ],
          pathGroupsExcludedImportTypes: ["react", "react-dom", "vue", "vite"],
          groups: [
            "builtin",
            "external",
            ["internal", "parent", "sibling", "index"],
            "object",
            "type"
          ],
          alphabetize: {
            order: "asc",
            caseInsensitive: true
          },
          warnOnUnassignedImports: false
        }
      ]
    }
  }
];

export default config;

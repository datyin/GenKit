import type { ESLint } from "eslint";

const config: ESLint.ConfigData["overrides"] = [
  // All JSON files
  {
    files: [
      "*.json",
      "*.json5",
      "*.jsonc"
    ],
    parser: "jsonc-eslint-parser",
    rules: {
      "jsonc/no-bigint-literals": "error",
      "jsonc/no-binary-expression": "error",
      "jsonc/no-binary-numeric-literals": "error",
      "jsonc/no-escape-sequence-in-identifier": "error",
      "jsonc/no-hexadecimal-numeric-literals": "error",
      "jsonc/no-infinity": "error",
      "jsonc/no-nan": "error",
      "jsonc/no-number-props": "error",
      "jsonc/no-numeric-separators": "error",
      "jsonc/no-octal-numeric-literals": "error",
      "jsonc/no-parenthesized": "error",
      "jsonc/no-plus-sign": "error",
      "jsonc/no-regexp-literals": "error",
      "jsonc/no-template-literals": "error",
      "jsonc/no-undefined-value": "error",
      "jsonc/no-unicode-codepoint-escapes": "error",
      "jsonc/vue-custom-block/no-parsing-error": "error",
      "jsonc/no-comments": "off",
      "jsonc/array-bracket-newline": ["error", "consistent"],
      "jsonc/array-bracket-spacing": ["error", "never"],
      "jsonc/array-element-newline": ["error", "consistent"],
      "jsonc/comma-dangle": ["error", "never"],
      "jsonc/comma-style": ["error", "last"],
      "jsonc/indent": ["error", 2],
      "jsonc/key-spacing": ["error", { beforeColon: false, afterColon: true, mode: "strict" }],
      "jsonc/no-dupe-keys": "error",
      "jsonc/no-floating-decimal": "error",
      "jsonc/no-irregular-whitespace": ["error", { skipStrings: true, skipComments: false, skipRegExps: true, skipTemplates: true }],
      "jsonc/no-multi-str": "error",
      "jsonc/no-octal-escape": "error",
      "jsonc/no-sparse-arrays": "error",
      "jsonc/no-useless-escape": "error",
      "jsonc/object-curly-newline": ["error", { consistent: true }],
      "jsonc/object-curly-spacing": ["error", "always"],
      "jsonc/object-property-newline": ["error", { allowAllPropertiesOnSameLine: true }],
      "jsonc/quote-props": "error",
      "jsonc/quotes": ["error", "double"],
      "jsonc/space-unary-ops": ["error", { words: true, nonwords: false }]

    }
  },

  // JSON5 & JSONC files
  {
    files: ["*.json5", "*.jsonc"],
    rules: { "jsonc/no-comments": "off" }
  },

  // JSON files
  {
    files: ["*.json"],
    rules: { "jsonc/no-comments": "error" }
  },

  // tsconfig
  {
    files: [
      "*/tsconfig.json",
      "*/tsconfig.*.json",
      "*/*.tsconfig.json",
      "*/jsconfig.json",
      "*/jsconfig.*.json",
      "*/*.jsconfig.json"
    ],
    rules: { "jsonc/no-comments": "off" }
  },

  // Vue
  {
    files: ["*.vue"],
    rules: { "jsonc/vue-custom-block/no-parsing-error": "error" }
  },

  {
    files: ["tsconfig.json", "tsconfig.*.json"],
    rules: { "jsonc/no-comments": "off" }
  },
  {
    files: ["package.json"],
    rules: {
      "jsonc/sort-keys": [
        "error",
        {
          order: [
            "$schema",
            "private",
            "packageManager",
            "name",
            "description",
            "version",
            "type",
            "icon",
            "bin",
            "main",
            "module",
            "types",
            "typesVersions",
            "exports",
            "unpkg",
            "jsdelivr",
            "files",
            "license",
            "homepage",
            "repository",
            "bugs",
            "sideEffects",
            "activationEvents",
            "keywords",
            "categories",
            "displayName",
            "publisher",
            "author",
            "funding",
            "contributes",
            "engines",
            "scripts",
            "peerDependencies",
            "peerDependenciesMeta",
            "dependencies",
            "optionalDependencies",
            "devDependencies",
            "pnpm",
            "overrides",
            "resolutions",
            "husky",
            "simple-git-hooks",
            "lint-staged",
            "publishConfig",
            "eslintConfig"
          ],
          pathPattern: "^$"
        },
        {
          order: { type: "asc" },
          pathPattern: "^(?:dev|peer|optional|bundled)?[Dd]ependencies$"
        },
        {
          order: ["types", "require", "import", "default"],
          pathPattern: "^exports.*$"
        }
      ]
    }
  }
];

export default config;

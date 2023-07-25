import type { ESLint } from "eslint";

const config: ESLint.ConfigData["overrides"] = [
  {
    files: ["*.toml"],
    parser: "toml-eslint-parser",
    rules: {
      "toml/indent": ["error", 2],
      "toml/keys-order": "error",
      "toml/no-non-decimal-integer": "error",
      "toml/no-space-dots": "error",
      "toml/no-unreadable-number-separator": "error",
      "toml/padding-line-between-tables": "error",
      "toml/precision-of-fractional-seconds": "error",
      "toml/precision-of-integer": "error",
      "toml/quoted-keys": ["error", { prefer: "as-needed" }],
      "toml/vue-custom-block/no-parsing-error": "error",
      "toml/array-bracket-newline": "error",
      "toml/comma-style": "error",
      "toml/inline-table-curly-spacing": "error",
      "toml/key-spacing": "error",
      "toml/spaced-comment": "error",
      "toml/table-bracket-spacing": "error"
    }
  }
];

export default config;

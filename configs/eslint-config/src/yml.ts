import type { ESLint } from "eslint";

const config: ESLint.ConfigData["overrides"] = [
  {
    files: ["*.yaml", "*.yml"],
    parser: "yaml-eslint-parser",
    rules: {
      "yml/block-mapping-colon-indicator-newline": ["error", "never"],
      "yml/block-mapping-question-indicator-newline": ["error", "never"],
      "yml/block-mapping": ["error", "always"],
      "yml/block-sequence-hyphen-indicator-newline": ["error", "never"],
      "yml/block-sequence": ["error", "always"],
      "yml/indent": ["error", 2],
      "yml/no-empty-document": "error",
      "yml/no-empty-key": "error",
      "yml/no-empty-mapping-value": "error",
      "yml/no-empty-sequence-entry": "error",
      "yml/no-tab-indent": "error",
      "yml/plain-scalar": "error",
      "yml/quotes": ["error", { prefer: "double" }],
      "yml/require-string-key": "error",
      "yml/flow-mapping-curly-newline": ["error", { multiline: true }],
      "yml/flow-mapping-curly-spacing": ["error", "always"],
      "yml/flow-sequence-bracket-newline": ["error", { multiline: true }],
      "yml/flow-sequence-bracket-spacing": ["error", "never"],
      "yml/key-spacing": ["error", { beforeColon: false, afterColon: true }],
      "yml/no-irregular-whitespace": ["error", { skipQuotedScalars: true }],
      "yml/no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0, maxBOF: 0 }]
    }
  }
];

export default config;

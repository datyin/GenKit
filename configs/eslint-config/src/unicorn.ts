import type { ESLint } from "eslint";

const config: ESLint.ConfigData["overrides"] = [
  {
    files: [
      "*.js",
      "*.jsx",
      "*.mjs",
      "*.cjs",
      "*.mjsx",
      "*.cjsx",
      "*.node",
      "*.ts",
      "*.tsx",
      "*.mts",
      "*.cts",
      "*.vue"
    ],
    rules: {
      "unicorn/new-for-builtins": "error",
      "unicorn/no-array-for-each": "error",
      "unicorn/no-array-push-push": "error",
      "unicorn/no-for-loop": "error",
      "unicorn/no-instanceof-array": "error",
      "unicorn/no-invalid-remove-event-listener": "error",
      "unicorn/no-unnecessary-await": "error",
      "unicorn/no-zero-fractions": "error",
      "unicorn/no-unused-properties": "warn",
      "unicorn/no-useless-length-check": "error",
      "unicorn/no-useless-promise-resolve-reject": "error",
      "unicorn/number-literal-case": "error",
      "unicorn/prefer-add-event-listener": "error",
      "unicorn/prefer-array-find": "error",
      "unicorn/prefer-array-flat": "error",
      "unicorn/prefer-array-flat-map": "error",
      "unicorn/prefer-array-index-of": "error",
      "unicorn/prefer-array-some": "error",
      "unicorn/prefer-at": "error",
      "unicorn/prefer-blob-reading-methods": "error",
      "unicorn/prefer-code-point": "error",
      "unicorn/prefer-date-now": "error",
      "unicorn/prefer-dom-node-append": "error",
      "unicorn/prefer-dom-node-dataset": "error",
      "unicorn/prefer-dom-node-remove": "error",
      "unicorn/prefer-dom-node-text-content": "error",
      "unicorn/prefer-event-target": "error",
      "unicorn/prefer-includes": "error",
      "unicorn/prefer-keyboard-event-key": "error",
      "unicorn/prefer-modern-dom-apis": "error",
      "unicorn/prefer-modern-math-apis": "error",
      "unicorn/prefer-node-protocol": "error",
      "unicorn/prefer-number-properties": "error",
      "unicorn/prefer-prototype-methods": "error",
      "unicorn/prefer-query-selector": "error",
      "unicorn/prefer-set-size": "error",
      "unicorn/prefer-string-slice": "error",
      "unicorn/prefer-string-starts-ends-with": "error",
      "unicorn/prefer-string-trim-start-end": "error",
      "unicorn/require-array-join-separator": "error",
      "unicorn/require-number-to-fixed-digits-argument": "error",
      "unicorn/switch-case-braces": "error",
      "unicorn/template-indent": "error",
      "unicorn/text-encoding-identifier-case": "error",
      "unicorn/throw-new-error": "error"
    }
  }
];

export default config;

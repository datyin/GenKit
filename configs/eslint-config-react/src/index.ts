import type { ESLint } from "eslint";

const config: ESLint.ConfigData = {
  extends: ["@genkit/eslint-config"],
  plugins: [
    "react",
    "react-hooks",
    "react-refresh"
  ],
  rules: {
    "react/jsx-boolean-value": ["error", "always"],
    "react/jsx-closing-bracket-location": ["error", "tag-aligned"],
    "react/jsx-closing-tag-location": "error",
    "react/jsx-curly-newline": ["error", { multiline: "require", singleline: "forbid" }],
    "react/jsx-curly-spacing": ["error", { when: "never", children: true }],
    "react/jsx-equals-spacing": ["error", "never"],
    "react/jsx-first-prop-new-line": ["error", "multiline"],
    "react/jsx-indent": ["error", 2, { checkAttributes: true, indentLogicalExpressions: true }],
    "react/jsx-indent-props": ["error", "first"],
    "react/jsx-pascal-case": ["error"],
    "react/jsx-one-expression-per-line": ["error", { allow: "literal" }],
    "react/jsx-sort-props": ["error", { callbacksLast: true, shorthandFirst: true, reservedFirst: true, ignoreCase: true }],
    "react/jsx-tag-spacing": ["error", { beforeSelfClosing: "always" }],
    "react/prefer-es6-class": ["error", "always"],
    "react/jsx-wrap-multilines": [
      "error", {
        declaration: "parens-new-line",
        assignment: "parens-new-line",
        return: "parens-new-line",
        arrow: "parens-new-line",
        condition: "parens-new-line",
        logical: "parens-new-line",
        prop: "parens-new-line"
      }
    ],
    "react/jsx-curly-brace-presence": [
      "error", {
        props: "always",
        children: "always",
        propElementValues: "always"
      }
    ],

    "react/jsx-uses-react": "error",
    "react/react-in-jsx-scope": "error",
    "react/jsx-uses-vars": "error",
    "react/jsx-key": "error",
    "react/display-name": ["error", { ignoreTranspilerName: false }],
    "react/hook-use-state": ["error"],
    "react/no-array-index-key": "warn",
    "react/jsx-no-comment-textnodes": "error",
    "react/jsx-no-duplicate-props": ["error", { ignoreCase: true }],
    "react/jsx-no-leaked-render": "error",
    "react/jsx-no-script-url": "error",
    "react/jsx-no-target-blank": ["error"],
    "react/jsx-no-undef": ["error", { allowGlobals: true }],
    "react/no-children-prop": "error",
    "react/no-deprecated": "error",
    "react/no-direct-mutation-state": "error",
    "react/no-find-dom-node": "error",
    "react/no-is-mounted": "error",
    "react/no-render-return-value": "error",
    "react/no-string-refs": "error",
    "react/no-unescaped-entities": "error",
    "react/no-unknown-property": "error",
    "react/require-render-return": "error",

    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }]
  }
};

export default config;

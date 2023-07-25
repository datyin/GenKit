import type { ESLint } from "eslint";

const config: ESLint.ConfigData["overrides"] = [
  {
    files: ["*.md"],
    processor: "markdown/markdown"
  },
  {
    files: ["**/*.md/**"],
    parserOptions: { ecmaFeatures: { impliedStrict: true } },
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "no-undef": "off",
      "@typescript-eslint/no-undef": "off",
      "eol-last": "off",
      "no-unused-expressions": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "strict": "off",
      "unicode-bom": "off"
    }
  }
];

export default config;

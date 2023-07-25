import importer from "./import";
import json from "./json";
import markdown from "./markdown";
import toml from "./toml";
import unicorn from "./unicorn";
import yml from "./yml";
import type { ESLint } from "eslint";

const config: ESLint.ConfigData = {
  plugins: [
    "@typescript-eslint",
    "import",
    "unicorn",
    "html",
    "jsonc",
    "toml",
    "yml",
    "markdown"
  ],
  env: {
    es2022: true,
    node: true,
    browser: true,
    commonjs: true,
    amd: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: null,
    warnOnUnsupportedTypeScriptVersion: false,
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: { jsx: true },
    requireConfigFile: false,
    extraFileExtensions: [".vue"]
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [
          ".js",
          ".jsx",
          ".mjs",
          ".cjs",
          ".node",
          ".ts",
          ".tsx",
          ".mts",
          ".cts",
          ".vue"
        ]
      }
    },
    "import/parsers": {
      [require.resolve("@typescript-eslint/parser")]: [
        ".ts",
        ".tsx",
        ".mts",
        ".cts",
        ".vue"
      ]
    }
  },
  rules: {
    // Formatting
    "semi-spacing": ["error", { before: false, after: true }],
    "no-trailing-spaces": "error",
    "array-element-newline": [
      "error", {
        ArrayExpression: "consistent",
        ArrayPattern: { minItems: 3 }
      }
    ],
    "array-bracket-newline": ["error", { multiline: true }],
    "array-bracket-spacing": ["error", "never"],
    "arrow-parens": ["error", "always"],
    "arrow-spacing": ["error", { before: true, after: true }],
    "comma-style": ["error", "last"],
    "computed-property-spacing": ["error", "never"],
    "dot-location": ["error", "property"],
    "eol-last": ["error", "always"],
    "function-call-argument-newline": ["error", "consistent"],
    "function-paren-newline": ["error", "multiline-arguments"],
    "generator-star-spacing": ["error", { before: true, after: false }],
    "implicit-arrow-linebreak": ["error", "beside"],

    "jsx-quotes": ["error", "prefer-double"],
    "max-statements-per-line": ["error", { max: 1 }],
    "no-mixed-spaces-and-tabs": "error",
    "no-multi-spaces": ["error", { ignoreEOLComments: true }],
    "no-multiple-empty-lines": [
      "error", {
        max: 1,
        maxBOF: 0,
        maxEOF: 0
      }
    ],
    "no-tabs": "error",
    "no-whitespace-before-property": "error",
    "object-curly-newline": ["error", { multiline: true }],
    "object-property-newline": ["error", { allowAllPropertiesOnSameLine: true }],
    "operator-linebreak": [
      "error", "after", {
        overrides: {
          "?": "before",
          ":": "before"
        }
      }
    ],
    "rest-spread-spacing": ["error", "never"],
    "space-in-parens": ["error", "never"],
    "space-unary-ops": ["error"],
    "switch-colon-spacing": ["error", { after: true, before: false }],
    "template-curly-spacing": ["error", "never"],
    "template-tag-spacing": ["error", "never"],
    "unicode-bom": ["warn", "never"],
    "wrap-regex": "error",
    "yield-star-spacing": ["error", { before: true, after: false }],

    // Possible Errors
    "array-callback-return": "error",
    "constructor-super": "error",
    "for-direction": "error",
    "getter-return": "error",
    "no-async-promise-executor": "error",
    "no-await-in-loop": "warn",
    "no-class-assign": "error",
    "no-compare-neg-zero": "error",
    "no-cond-assign": "error",
    "no-constant-binary-expression": "error",
    "no-constant-condition": ["warn", { checkLoops: false }],
    "no-debugger": "warn",
    "no-dupe-args": "error",
    "no-dupe-else-if": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty-character-class": "error",
    "no-empty-pattern": "error",
    "no-ex-assign": "error",
    "no-fallthrough": "error",
    "no-func-assign": "error",
    "no-import-assign": "error",
    "no-inner-declarations": "error",
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": [
      "warn", {
        skipStrings: true,
        skipComments: true,
        skipRegExps: true,
        skipTemplates: true,
        skipJSXText: true
      }
    ],
    "no-obj-calls": "error",
    "no-prototype-builtins": "error",
    "no-self-assign": "error",
    "no-self-compare": "error",
    "no-setter-return": "error",
    "no-sparse-arrays": "error",
    "no-template-curly-in-string": "warn",
    "no-this-before-super": "error",
    "no-unexpected-multiline": "error",
    "no-unreachable": "warn",
    "no-unreachable-loop": "warn",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "no-unsafe-optional-chaining": "error",
    "no-unused-private-class-members": "warn",
    "no-useless-backreference": "error",
    "use-isnan": "error",
    "valid-typeof": "error",

    // Suggestions
    "block-scoped-var": "error",
    "consistent-return": "error",
    "curly": ["error", "multi-line", "consistent"],
    "default-case": "warn",
    "default-case-last": "error",
    "eqeqeq": ["error", "always", { null: "ignore" }],
    "no-alert": "error",
    "no-case-declarations": "error",
    "no-eval": "warn",
    "no-extra-boolean-cast": "error",
    "no-global-assign": "warn",
    "no-nonoctal-decimal-escape": "error",
    "no-octal": "error",
    "no-param-reassign": ["warn", { props: true }],
    "no-regex-spaces": "error",
    "no-shadow-restricted-names": "error",
    "no-var": "error",
    "no-void": "error",
    "no-with": "error",
    "prefer-const": "error",
    "prefer-template": "error",
    "quote-props": ["error", "consistent-as-needed"],
    "require-yield": "error",
    "yoda": "error",

    // TypeScript
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/ban-tslint-comment": "error",
    "@typescript-eslint/class-literal-property-style": "error",
    "@typescript-eslint/consistent-generic-constructors": "error",
    "@typescript-eslint/consistent-indexed-object-style": "error",
    "@typescript-eslint/consistent-type-definitions": "error",
    "@typescript-eslint/consistent-type-imports": [
      "error", {
        prefer: "type-imports",
        disallowTypeAnnotations: true,
        fixStyle: "separate-type-imports"
      }
    ],
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-as-const": "error",
    "@typescript-eslint/prefer-enum-initializers": "error",
    "@typescript-eslint/prefer-literal-enum-member": ["error", { allowBitwiseExpressions: true }],

    // Best Practices
    "@typescript-eslint/ban-ts-comment": "error",

    // @typescript-eslint/ban-types from https://github.com/xojs/eslint-config-xo-typescript/
    "@typescript-eslint/ban-types": [
      "error", {
        extendDefaults: false,
        types: {
          "String": {
            message: "Use `string` instead.",
            fixWith: "string"
          },
          "Number": {
            message: "Use `number` instead.",
            fixWith: "number"
          },
          "Boolean": {
            message: "Use `boolean` instead.",
            fixWith: "boolean"
          },
          "Symbol": {
            message: "Use `symbol` instead.",
            fixWith: "symbol"
          },
          "BigInt": {
            message: "Use `bigint` instead.",
            fixWith: "bigint"
          },
          "Object": {
            message: "The `Object` type is mostly the same as `unknown`. You probably want `Record<string, unknown>` instead. See https://github.com/typescript-eslint/typescript-eslint/pull/848",
            fixWith: "Record<string, unknown>"
          },
          "{}": {
            message: "The `{}` type is mostly the same as `unknown`. You probably want `Record<string, unknown>` instead.",
            fixWith: "Record<string, unknown>"
          },
          "object": {
            message: "The `object` type is hard to use. Use `Record<string, unknown>` instead. See: https://github.com/typescript-eslint/typescript-eslint/pull/848",
            fixWith: "Record<string, unknown>"
          },
          "Function": "Use a specific function type instead, like `() => void`.",
          "[]": "Don't use the empty array type `[]`. It only allows empty arrays. Use `SomeType[]` instead.",
          "[[]]": "Don't use `[[]]`. It only allows an array with a single element which is an empty array. Use `SomeType[][]` instead.",
          "[[[]]]": "Don't use `[[[]]]`. Use `SomeType[][][]` instead."
        }
      }
    ],

    "@typescript-eslint/method-signature-style": ["error", "property"],
    "@typescript-eslint/no-confusing-non-null-assertion": "warn",
    "@typescript-eslint/no-import-type-side-effects": "error",
    "@typescript-eslint/no-invalid-void-type": "error",
    "@typescript-eslint/no-duplicate-enum-values": "error",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-extra-non-null-assertion": "error",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-unsafe-declaration-merging": "error",
    "@typescript-eslint/no-var-requires": "warn",
    "@typescript-eslint/no-this-alias": "error",
    "@typescript-eslint/no-unnecessary-type-constraint": "error",
    "@typescript-eslint/no-useless-empty-export": "error",

    "@typescript-eslint/member-delimiter-style": [
      "error", {
        multiline: {
          delimiter: "semi",
          requireLast: true
        },
        singleline: {
          delimiter: "semi",
          requireLast: true
        }
      }
    ],

    "@typescript-eslint/triple-slash-reference": "error",
    "@typescript-eslint/type-annotation-spacing": "error",

    "@typescript-eslint/unified-signatures": ["error", { ignoreDifferentlyNamedParameters: true }]
  },
  overrides: [
    {
      files: [
        "*.js",
        "*.jsx",
        "*.mjs",
        "*.cjs",
        "*.mjsx",
        "*.cjsx",
        "*.node"
      ],
      rules: {
        "brace-style": ["error", "stroustrup", { allowSingleLine: true }],
        "@typescript-eslint/brace-style": "off",

        "comma-dangle": ["error", "never"],
        "@typescript-eslint/comma-dangle": "off",

        "comma-spacing": ["error", { before: false, after: true }],
        "@typescript-eslint/comma-spacing": "off",

        "default-param-last": ["error"],
        "@typescript-eslint/default-param-last": "off",

        "func-call-spacing": ["error", "never"],
        "@typescript-eslint/func-call-spacing": "off",

        "no-undef": "error",

        "indent": [
          "error", 2, {
            SwitchCase: 1,
            VariableDeclarator: "first",
            MemberExpression: 1,
            FunctionDeclaration: { body: 1, parameters: "first" },
            FunctionExpression: { body: 1, parameters: "first" },
            StaticBlock: { body: 1 },
            CallExpression: { arguments: "first" },
            ArrayExpression: "first",
            ObjectExpression: "first",
            ImportDeclaration: "first",
            flatTernaryExpressions: false,
            offsetTernaryExpressions: false,
            ignoredNodes: [
              "TSUnionType",
              "PropertyDefinition[decorators]",
              "FunctionExpression[params]:has(Identifier[decorators])"
            ]
          }
        ],
        "@typescript-eslint/indent": "off",

        "init-declarations": ["error", "always"],
        "@typescript-eslint/init-declarations": "off",

        "key-spacing": ["error", { beforeColon: false, afterColon: true }],
        "@typescript-eslint/key-spacing": "off",

        "keyword-spacing": ["error", { before: true, after: true }],
        "@typescript-eslint/keyword-spacing": "off",

        "lines-around-comment": [
          "error", {
            beforeBlockComment: true,
            afterBlockComment: false,
            beforeLineComment: true,
            afterLineComment: false,
            allowBlockStart: true,
            allowBlockEnd: false,
            allowObjectStart: true,
            allowObjectEnd: false,
            allowArrayStart: true,
            allowArrayEnd: false,
            allowClassStart: true,
            allowClassEnd: false
          }
        ],
        "@typescript-eslint/lines-around-comment": "off",

        "lines-between-class-members": ["error", "always"],
        "@typescript-eslint/lines-between-class-members": "off",

        "no-array-constructor": "error",
        "@typescript-eslint/no-array-constructor": "off",

        "no-dupe-class-members": "error",
        "@typescript-eslint/no-dupe-class-members": "off",

        "no-extra-semi": "error",
        "@typescript-eslint/no-extra-semi": "off",

        "no-loss-of-precision": "warn",
        "@typescript-eslint/no-loss-of-precision": "off",

        "no-redeclare": "error",
        "@typescript-eslint/no-redeclare": "off",

        "no-unused-vars": ["warn", { args: "none", caughtErrors: "none" }],
        "@typescript-eslint/no-unused-vars": "off",

        "object-curly-spacing": ["error", "always"],
        "@typescript-eslint/object-curly-spacing": "off",

        "padding-line-between-statements": [
          "error",
          { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
          { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"] },
          { blankLine: "always", prev: "directive", next: "*" },
          { blankLine: "any", prev: "directive", next: "directive" },
          { blankLine: "always", prev: "import", next: "*" },
          { blankLine: "any", prev: "import", next: "import" },
          { blankLine: "always", prev: "export", next: "*" },
          { blankLine: "any", prev: "export", next: "export" },
          { blankLine: "always", prev: "cjs-import", next: "*" },
          { blankLine: "any", prev: "cjs-import", next: "cjs-import" },
          { blankLine: "always", prev: "cjs-export", next: "*" },
          { blankLine: "any", prev: "cjs-export", next: "cjs-export" }
        ],
        "@typescript-eslint/padding-line-between-statements": "off",

        "quotes": ["error", "double"],
        "@typescript-eslint/quotes": "off",

        "semi": ["error", "always"],
        "@typescript-eslint/semi": "off",

        "space-before-blocks": ["error", "always"],
        "@typescript-eslint/space-before-blocks": "off",

        "space-infix-ops": ["error"],
        "@typescript-eslint/space-infix-ops": "off"
      }
    },
    {
      files: [
        "*.ts",
        "*.tsx",
        "*.mts",
        "*.cts",
        "*.mtsx",
        "*.ctsx"
      ],
      rules: {
        "brace-style": "off",
        "@typescript-eslint/brace-style": ["error", "stroustrup", { allowSingleLine: true }],

        "comma-dangle": "off",
        "@typescript-eslint/comma-dangle": ["error", "never"],

        "comma-spacing": "off",
        "@typescript-eslint/comma-spacing": ["error", { before: false, after: true }],

        "default-param-last": "off",
        "@typescript-eslint/default-param-last": ["error"],

        "func-call-spacing": "off",
        "@typescript-eslint/func-call-spacing": ["error", "never"],

        "no-undef": "off",

        "indent": "off",
        "@typescript-eslint/indent": [
          "error", 2, {
            SwitchCase: 1,
            VariableDeclarator: "first",
            MemberExpression: 1,
            FunctionDeclaration: { body: 1, parameters: "first" },
            FunctionExpression: { body: 1, parameters: "first" },
            StaticBlock: { body: 1 },
            CallExpression: { arguments: "first" },
            ArrayExpression: "first",
            ObjectExpression: "first",
            ImportDeclaration: "first",
            flatTernaryExpressions: false,
            offsetTernaryExpressions: false,
            ignoredNodes: [
              "TSUnionType",

              // "PropertyDefinition[decorators]",
              "FunctionExpression[params]:has(Identifier[decorators])"
            ]
          }
        ],

        "init-declarations": "off",
        "@typescript-eslint/init-declarations": ["error", "always"],

        "key-spacing": "off",
        "@typescript-eslint/key-spacing": ["error", { beforeColon: false, afterColon: true }],

        "keyword-spacing": "off",
        "@typescript-eslint/keyword-spacing": ["error", { before: true, after: true }],

        "lines-around-comment": "off",
        "@typescript-eslint/lines-around-comment": [
          "error", {
            beforeBlockComment: true,
            afterBlockComment: false,
            beforeLineComment: true,
            afterLineComment: false,
            allowBlockStart: true,
            allowBlockEnd: false,
            allowObjectStart: true,
            allowObjectEnd: false,
            allowArrayStart: true,
            allowArrayEnd: false,
            allowClassStart: true,
            allowClassEnd: false,
            allowEnumStart: true,
            allowEnumEnd: false,
            allowInterfaceStart: true,
            allowInterfaceEnd: false,
            allowModuleStart: true,
            allowModuleEnd: false,
            allowTypeStart: true,
            allowTypeEnd: false
          }
        ],

        "lines-between-class-members": "off",
        "@typescript-eslint/lines-between-class-members": ["error", "always"],

        "no-array-constructor": "off",
        "@typescript-eslint/no-array-constructor": "error",

        "no-dupe-class-members": "off",
        "@typescript-eslint/no-dupe-class-members": "error",

        "no-extra-semi": "off",
        "@typescript-eslint/no-extra-semi": "error",

        "no-loss-of-precision": "off",
        "@typescript-eslint/no-loss-of-precision": "warn",

        "no-redeclare": "off",
        "@typescript-eslint/no-redeclare": ["error", { ignoreDeclarationMerge: true }],

        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["warn", { args: "none", caughtErrors: "none" }],

        "object-curly-spacing": "off",
        "@typescript-eslint/object-curly-spacing": ["error", "always"],

        "padding-line-between-statements": "off",
        "@typescript-eslint/padding-line-between-statements": [
          "error",
          { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
          { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"] },
          { blankLine: "always", prev: "directive", next: "*" },
          { blankLine: "any", prev: "directive", next: "directive" },
          { blankLine: "always", prev: "import", next: "*" },
          { blankLine: "any", prev: "import", next: "import" },
          { blankLine: "always", prev: "export", next: "*" },
          { blankLine: "any", prev: "export", next: "export" },
          { blankLine: "always", prev: "*", next: ["interface", "type"] }
        ],

        "quotes": "off",
        "@typescript-eslint/quotes": ["error", "double"],

        "semi": "off",
        "@typescript-eslint/semi": ["error", "always"],

        "space-before-blocks": "off",
        "@typescript-eslint/space-before-blocks": ["error", "always"],

        "space-infix-ops": "off",
        "@typescript-eslint/space-infix-ops": ["error"]
      }
    },
    ...importer ?? [],
    ...unicorn ?? [],
    ...json ?? [],
    ...toml ?? [],
    ...yml ?? [],
    ...markdown ?? []
  ],
  ignorePatterns: [
    "*.min.*",
    "dist",
    "LICENSE*",
    "output",
    "out",
    "coverage",
    "public",
    "temp",
    "package-lock.json",
    "pnpm-lock.yaml",
    "yarn.lock",
    "__snapshots__",

    // ignore for in lint-staged
    "*.css",
    "*.png",
    "*.ico",
    "*.toml",
    "*.patch",
    "*.txt",
    "*.crt",
    "*.key",
    "Dockerfile",

    // force include
    "!.github",
    "!.vitepress",
    "!.vscode",

    // force exclude
    ".vitepress/dist",
    ".vitepress/cache"
  ]
};

export default config;

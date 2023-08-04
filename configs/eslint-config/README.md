# @genkit/eslint-config

Double Quote, Semi and other best practices.

## Install

```bash
# pnpm
pnpm add -D @genkit/eslint-config

# yarn
yarn add -D @genkit/eslint-config

# npm
npm install -D @genkit/eslint-config
```

## Usage

`.eslintrc.json`
```json
{
  "$schema": "https://json.schemastore.org/eslintrc",
  "root": true,
  "extends": "@genkit/eslint-config"
}
```

`package.json`
```json
{
  "scripts": {
    "lint": "eslint --ext .js,.cjs,.mjs,.jsx,.ts,.cts,.mts,.tsx,.vue,.html,.json,.jsonc,.json5,.yml,.yaml,.toml ."
  }
}
```

#### VSCode
If you are using [Visual Studio Code](https://code.visualstudio.com/) it is recommanded to install [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [editorconfig](https://marketplace.visualstudio.com/items?itemName=editorconfig.editorconfig) extensions.

`.vscode/settings.json`
```json
{
  "prettier.enable": false,
  "editor.defaultFormatter": null,
  "editor.formatOnSave": false,
  "editor.formatOnPaste": false,
  "editor.codeActionsOnSave": {
    "source.fixAll": false,
    "source.fixAll.eslint": true,
    "source.organizeImports": false
  },
  "eslint.validate": [
    "javascript",
    "typescript",
    "javascriptreact",
    "typescriptreact",
    "vue",
    "html",
    "json",
    "jsonc",
    "json5",
    "yaml",
    "yml",
    "toml",
    "markdown"
  ]
}
```

`.editorconfig`
```ini
root = true

[*]
charset = utf-8
end_of_line = lf
insert_final_newline = true
indent_style = space
indent_size = 2
tab_width = 4
trim_trailing_whitespace = true
```

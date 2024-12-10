import js from "@eslint/js"
import svelte from "eslint-plugin-svelte"
import globals from "globals"
import ts from "typescript-eslint"

export default ts.config(
  js.configs.recommended,
  ...ts.configs.recommended,
  ...svelte.configs["flat/recommended"],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      "indent": [
        "error",
        2
      ],
      "eqeqeq": [

        2,
        "smart"
      ],
      "linebreak-style": [
        2,
        "unix"
      ],
      "quotes": [
        2,
        "double"
      ],
      "semi": [
        2,
        "never"
      ],
      "strict": [
        2,
        "never"
      ]
    }
  },
  {
    files: ["**/*.svelte"],
    languageOptions: {
      parserOptions: {
        parser: ts.parser
      }
    }
  },
  {
    ignores: [
      "build/",
      ".svelte-kit/",
      "dist/"
    ]
  }
)

import js from "@eslint/js"
import globals from "globals"

export default ts.config(
  js.configs.recommended,
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
    ignores: [
      "_src/"
    ]
  }
)

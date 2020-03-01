module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    "plugin:@typescript-eslint/recommended",
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    "max-len": ["error", { "code": 120, "ignoreRegExpLiterals": true }],
    "@typescript-eslint/explicit-function-return-type": ["off"],
    "react/destructuring-assignment": ["off"],
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "react/sort-comp": ["error", {
      order: [
        'static-methods',
        'lifecycle',
        'render',
        'everything-else',
      ]
    }],
    "react/jsx-filename-extension": ["error", { "extensions": [".tsx"] }],
    "no-extra-boolean-cast": ["off"],
    "react/jsx-wrap-multilines": ["error", { "logical": "ignore" }],
    "operator-linebreak": ["off"],
    "no-unused-expressions": ["off"],
    "import/extensions": ["off"],
    "import/no-unresolved": ["off"],
    "quotes": ["error", "single"],
    "import/prefer-default-export": ["off"],
  },
};

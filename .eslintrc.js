module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  ignorePatterns: [
    "**/*/*.js",
    "*.js",
    "*.svg",
    "*.json",
    "*.png",
    "package.json",
    "package-lock.json",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    quotes: [
      "error",
      "single",
      {
        avoidEscape: true,
      },
    ],
    semi: ["error", "always"],
    "@typescript-eslint/no-unused-vars": "warn",
    "prefer-destructuring": 2,
    "@typescript-eslint/no-empty-function": 0,
    camelcase: ["error", {properties: "never"}],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        singleQuote: true,
        bracketSpacing: true,
        bracketSameLine: false,
        trailingComma: "all",
        tabWidth: 2,
        semi: true,
      },
    ],
  },
};

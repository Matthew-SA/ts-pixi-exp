module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    jsx: true,
    sourceType: "module",
  },
  extends: [
    "prettier",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  plugins: ["react", "prettier", "react-hooks", "@typescript-eslint", "import"],
  rules: {
    /* Error */
    "import/order": [
      "error",
      {
        "newlines-between": "never",
        alphabetize: { order: "desc", caseInsensitive: true },
      },
    ],
    "prefer-const": "error",
    "prettier/prettier": "error",
    "react-hooks/exhaustive-deps": "error",
    "react-hooks/rules-of-hooks": "error",
    "react/jsx-curly-brace-presence": ["error", { props: "never" }],
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-target-blank": "error",
    "react/no-danger-with-children": "error",
    "react/no-deprecated": "error",
    "react/no-direct-mutation-state": "error",
    "react/no-typos": "error",
  },
};

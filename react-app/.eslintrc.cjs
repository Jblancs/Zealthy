// const vitest = require("eslint-plugin-vitest");

// module.exports = {
//   root: true,
//   env: { browser: true, es2020: true },
//   extends: [
//     "eslint:recommended",
//     "plugin:react/recommended",
//     "plugin:react/jsx-runtime",
//     "plugin:react-hooks/recommended",
//     "plugin:testing-library/react",
//     "plugin:vitest/recommended",
//     "plugin:jest-dom/recommended",
//   ],
//   ignorePatterns: ["dist", ".eslintrc.cjs"],
//   parserOptions: { ecmaVersion: "latest", sourceType: "module" },
//   settings: { react: { version: "18.2" } },
//   plugins: ["react-refresh"],
//   rules: {
//     "react-refresh/only-export-components": [
//       "warn",
//       { allowConstantExport: true },
//     ],
//     "no-unused-vars": "warn", // warning, not error
//     "vitest/expect-expect": "off", // distracting red squiggles while writing tests
//     "react/prop-types": "off", // turn off props validation
//   },
//   globals: {
//     ...vitest.environments.env.globals,
//   },
// };

const vitest = require("eslint-plugin-vitest");

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["@typescript-eslint", "react", "react-hooks", "testing-library", "vitest", "jest-dom", "react-refresh"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:testing-library/react",
    "plugin:vitest/recommended",
    "plugin:jest-dom/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  settings: {
    react: { version: "18.2" }
  },
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "no-unused-vars": "warn", // warning, not error
    "vitest/expect-expect": "off", // distracting red squiggles while writing tests
    "react/prop-types": "off", // turn off props validation
    "@typescript-eslint/no-unused-vars": ["warn"],
    "@typescript-eslint/no-empty-interface": "off",
  },
  globals: {
    ...vitest.environments.env.globals,
  },
};

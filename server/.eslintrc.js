// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "promise"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier",
    "plugin:promise/recommended",
  ],
  overrides: [
    {
      // Turn off any rules that require a TS parser
      files: ["*.js"],
      // fall back to eslint's default - but there is no way to explicitly say "default"
      parser: "espree",
      rules: {
        "@typescript-eslint/prefer-nullish-coalescing": ["off"],
        "@typescript-eslint/no-unnecessary-type-assertion": "off",
        "@typescript-eslint/await-thenable": "off",
      },
    },
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
  env: {
    es2020: true,
  },
  rules: {
    // cant deal with import stuff
    "import/no-unresolved": "off",
    "import/no-named-as-default": "off",
    // increasing maxDepth is expensive, keep at 3 for now
    "import/no-cycle": ["error", { maxDepth: 3, ignoreExternal: true }],
    "import/no-extraneous-dependencies": ["error"],

    // turn off for typescript
    "import/named": "off",

    // Rules beyond eslint recommended
    "no-unused-vars": "off",
    "no-nested-ternary": ["error"],
    "@typescript-eslint/prefer-nullish-coalescing": ["error"],
    "no-unneeded-ternary": ["error"],
    "prefer-object-spread": ["warn"],
    "valid-typeof": ["error"],
    "no-useless-rename": ["error"],
    curly: ["error", "all"],
    "object-shorthand": ["warn"],

    "require-atomic-updates": ["warn"],
    "guard-for-in": ["warn"],
    eqeqeq: ["warn"],
    // TypeScript specifc stuff
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        ignoreRestSiblings: true,
        varsIgnorePattern: "^_",
        argsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/no-shadow": ["error"],

    // this doesn't improve anything
    "@typescript-eslint/no-inferrable-types": ["off"],

    "@typescript-eslint/no-explicit-any": ["error"],
    "@typescript-eslint/no-unnecessary-type-assertion": "error",

    "@typescript-eslint/await-thenable": "error",
  },
};

module.exports = {
  env: {
    es2020: true,
    browser: true,
  },
  extends: ["../.eslintrc.js", "next/core-web-vitals"],
  settings: {
    next: {
      // this is relative to the root of the project
      rootDir: "site/",
    },
  },
  rules: {
    "no-console": ["warn", { allow: ["info", "warn", "error"] }],
    "react-hooks/exhaustive-deps": ["error"],
    "react/jsx-curly-brace-presence": ["error", { props: "never" }],
    "promise/prefer-await-to-then": ["warn"],
  },
  overrides: [
    {
      files: ["*.stories.tsx"],
      rules: {
        "@typescript-eslint/no-empty-function": "off",
      },
    },
  ],
};

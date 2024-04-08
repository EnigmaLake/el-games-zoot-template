module.exports = {
  env: {
    es2020: true,
    browser: true,
  },
  extends: ["../.eslintrc.js"],
  settings: {
    next: {
      // this is relative to the root of the project
      rootDir: "site/",
    },
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

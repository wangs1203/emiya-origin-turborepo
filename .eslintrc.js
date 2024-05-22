// This configuration only applies to the package manager root.
/** @type {import("eslint").Linter.Config} */
module.exports = {
  ignorePatterns: ["apps/**", "packages/**"],
  extends: ["@emiya-turbo-origin/eslint-config/library"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};

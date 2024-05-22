/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['@emiya-turbo-origin/eslint-config/storybook'],
  ignorePatterns: ['!.*.js', '!*.config.ts', '!*.config.js', '!.storybook'],
};

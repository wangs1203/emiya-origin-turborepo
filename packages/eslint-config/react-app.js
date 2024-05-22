/*
 * This is a custom ESLint configuration for use a App
 * that utilizes React.
 */
/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [require.resolve('./react-base')],
  // add rules configurations here
  rules: {
    'import/no-default-export': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
};

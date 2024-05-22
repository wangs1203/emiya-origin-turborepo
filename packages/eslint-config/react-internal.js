/*
 * This is a custom ESLint configuration for use with
 * internal (bundled by their consumer) libraries
 * that utilize React.
 */
/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [require.resolve('./react-base')],
  // add rules configurations here
  // rules: { },
};

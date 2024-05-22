/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [require.resolve('@vercel/style-guide/eslint/jest-react')],
  plugins: ['jest', 'testing-library'],
  env: { jest: true },
};

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['@emiya-turbo-origin/eslint-config/react-internal'],
  parserOptions: {
    project: './tsconfig.lint.json',
    tsconfigRootDir: __dirname,
  },
  overrides: [
    {
      files: ['stories/**/*.{js,jsx,ts,tsx}'],
      extends: ['@emiya-turbo-origin/eslint-config/storybook'],
    },
  ],
};

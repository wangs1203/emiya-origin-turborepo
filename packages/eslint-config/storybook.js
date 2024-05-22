/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    'plugin:storybook/recommended',
    /**
     * move to overrides
     * fix: eslint-plugin-mdx not find module error
     */
    // 'plugin:mdx/recommended',
    require.resolve('./react-base'),
  ],
  plugins: ['react-refresh'],
  // env: {
  //   jest: true,
  // },
  rules: {
    'import/no-default-export': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'tsdoc/syntax': 'off',
  },
  ignorePatterns: [
    // Ignore dotfiles
    '.*.js',
    '*.config.ts',
    '*.config.js',
    'README.md',
    'node_modules/',
    'dist/',
    'build/',
    '**/*.css',
  ],
  overrides: [
    {
      files: ['*.mdx'],
      extends: ['plugin:mdx/recommended'],
    },
  ],
};

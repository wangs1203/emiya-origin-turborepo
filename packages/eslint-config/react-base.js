const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/*
 * This is a custom ESLint configuration for use a library
 * that utilizes React.
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 */
/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    '@vercel/style-guide/eslint/node',
    '@vercel/style-guide/eslint/typescript',
    '@vercel/style-guide/eslint/browser',
    '@vercel/style-guide/eslint/react',
    './rules/base',
  ].map(require.resolve),
  parserOptions: {
    project,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  plugins: ['only-warn'],
  globals: {
    React: true,
    JSX: true,
  },
  ignorePatterns: [
    // Ignore dotfiles
    '.*.js',
    '*.config.ts',
    '*.config.js',
    'node_modules/',
    'dist/',
    'build/',
    '**/*.css',
  ],
  // add rules configurations here
  rules: {
    'tsdoc/syntax': 'off',
    'import/no-named-as-default': 'off',
    'react/no-unescaped-entities': [
      2,
      {
        forbid: [
          {
            char: '>',
            alternatives: ['&gt;'],
          },
          {
            char: '}',
            alternatives: ['&#125;'],
          },
        ],
      },
    ],
  },
};

module.exports = {
  plugins: ['prettier'],
  rules: {
    'import/order': [
      'warn',
      {
        groups: [
          'type',
          'builtin',
          'object',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        pathGroups: [
          {
            pattern: '~/**',
            group: 'external',
            position: 'after',
          },
        ],
        'newlines-between': 'always',
      },
    ],
    'prettier/prettier': 'warn',
  },
  overrides: [
    {
      files: ['*.ts?(x)'],
      rules: {
        '@typescript-eslint/no-explicit-any': [
          'warn',
          { fixToUnknown: false, ignoreRestArgs: true },
        ],
      },
    },
    {
      files: ['*.ts?(x)', '*.js?(x)'],
      rules: {
        // https://eslint.org/docs/rules/max-lines
        'max-lines': [
          'warn',
          {
            max: 500,
            skipBlankLines: true,
            skipComments: true,
          },
        ],
      },
    },
  ],
};

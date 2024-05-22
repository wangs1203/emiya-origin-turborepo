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
    // https://eslint.org/docs/rules/max-lines
    'max-lines': [
      'warn',
      {
        max: 300,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
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
  ],
};

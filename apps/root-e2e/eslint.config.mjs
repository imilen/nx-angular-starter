import playwright from 'eslint-plugin-playwright';
import promise from 'eslint-plugin-promise';
import baseConfig from '../../eslint.config.mjs';

export default [
  playwright.configs['flat/recommended'],
  ...baseConfig,
  promise.configs['flat/recommended'],
  {
    files: ['**/*.ts', '**/*.js'],
    rules: {
      'playwright/expect-expect': [
        'error',
        {
          assertFunctionNames: [],
          assertFunctionPatterns: ['^expect.*'],
        },
      ],
    },
  },
];

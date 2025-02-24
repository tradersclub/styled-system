module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    `plugin:prettier/recommended`, // Make sure this is always the last element in the array.
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {},
  overrides: [
    {
      files: [`*.test.*`, `**/test/**/*.js`],
      env: {
        'jest/globals': true,
      },
    },
  ],
};

const tsconfig = require(`./tsconfig`);

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: `@typescript-eslint/parser`,
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: `module`,
  },
  globals: {
    Atomics: `readonly`,
    SharedArrayBuffer: `readonly`,
  },
  plugins: [`import`, `unicorn`],
  extends: [
    `airbnb`,
    `plugin:react/recommended`,
    `plugin:react-hooks/recommended`,
    `plugin:jsx-a11y/recommended`,
    `plugin:@typescript-eslint/recommended`,
    `plugin:import/recommended`,
    `plugin:import/typescript`,
    `plugin:prettier/recommended`, // Prettier needs to be the last plugin in list.
  ],
  overrides: [
    {
      files: [`*.ts`, `*.tsx`, `*.d.ts`],
      parserOptions: {
        project: `./tsconfig.json`,
      },
    },
  ],
  rules: {
    // ESLint
    'no-shadow': `off`,
    camelcase: `off`,
    'no-mixed-operators': `error`,
    'no-unneeded-ternary': `error`,
    'no-nested-ternary': `off`,
    'no-use-before-define': [`off`],
    'no-restricted-imports': [
      `error`,
      {
        // @TODO: Adjust JSX Transform to work without "import react"
        // paths: [
        //   {
        //     name: `react`,
        //     importNames: [`default`],
        //     message: `Please remove import React.`,
        //   },
        // ],
        patterns: [`..*`], // Blocking ../../ imports
      },
    ],
    'no-lonely-if': `error`,
    // Typescript
    '@typescript-eslint/explicit-function-return-type': `off`,
    '@typescript-eslint/explicit-module-boundary-types': `off`,
    '@typescript-eslint/no-use-before-define': [`error`],
    '@typescript-eslint/no-explicit-any': `error`,
    '@typescript-eslint/no-var-requires': `off`,
    '@typescript-eslint/no-unused-vars': `error`,
    '@typescript-eslint/no-shadow': [`error`],
    '@typescript-eslint/quotes': [
      2,
      `backtick`,
      {
        avoidEscape: true,
      },
    ],
    // React
    'react/jsx-no-bind': `error`,
    'react/no-multi-comp': `off`,
    'react/function-component-definition': [`off`],
    'react/jsx-no-useless-fragment': `off`,
    'react/no-array-index-key': `error`,
    'react/no-unstable-nested-components': `error`,
    'react/prop-types': `off`,
    'react/display-name': `off`,
    'react/jsx-filename-extension': `off`,
    'react/jsx-props-no-spreading': `off`,
    'react/no-unused-prop-types': `off`,
    'react/react-in-jsx-scope': `off`,
    'react/require-default-props': `off`,
    // Imports
    'import/prefer-default-export': `off`,
    'import/no-extraneous-dependencies': [`error`, { devDependencies: true }],
    'import/extensions': [
      `error`,
      `ignorePackages`,
      {
        ts: `never`,
        tsx: `never`,
        js: `never`,
        jsx: `never`,
      },
    ],
    'import/order': [
      `error`,
      {
        groups: [[`builtin`, `external`], `internal`, [`sibling`, `index`]],
        pathGroups: [
          {
            pattern: `react`,
            group: `external`,
            position: `before`,
          },
          {
            pattern: `@tradersclub/**`,
            group: `external`,
            position: `after`,
          },
          ...Object.keys(tsconfig.compilerOptions.paths).map((key) => ({
            pattern: `${key}*`,
            group: `internal`,
            position: `after`,
          })),
        ],
        pathGroupsExcludedImportTypes: [],
        'newlines-between': `always`,
        alphabetize: {
          order: `asc`,
          caseInsensitive: true,
        },
      },
    ],
    // Unicorn
    'unicorn/no-abusive-eslint-disable': `error`,
    'unicorn/explicit-length-check': `error`,
    'unicorn/consistent-function-scoping': `error`,
    'unicorn/consistent-destructuring': `error`,
    'unicorn/no-empty-file': `error`,
    'unicorn/no-for-loop': `error`,
    'unicorn/no-instanceof-array': `error`,
    'unicorn/no-invalid-remove-event-listener': `error`,
    'unicorn/no-lonely-if': `error`,
    'unicorn/no-nested-ternary': `error`,
    'unicorn/no-new-array': `error`,
    'unicorn/no-unused-properties': `error`,
    'unicorn/no-useless-fallback-in-spread': `error`,
    'unicorn/no-useless-length-check': `error`,
    'unicorn/no-useless-spread': `error`,
    'unicorn/prefer-add-event-listener': `error`,
    'unicorn/prefer-array-find': `error`,
    'unicorn/prefer-array-flat': `error`,
    'unicorn/prefer-array-flat-map': `error`,
    'unicorn/prefer-array-index-of': `error`,
    'unicorn/prefer-array-some': `error`,
    'unicorn/prefer-date-now': `error`,
    'unicorn/prefer-ternary': `error`,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: `.`,
      },
    },
    'import/core-modules': [`styled-components`],
    react: {
      version: `detect`,
    },
  },
};

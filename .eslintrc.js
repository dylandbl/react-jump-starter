module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 14,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'jest'],
  rules: {
    'arrow-body-style': 'off',
    'function-paren-newline': 'off',
    'implicit-arrow-linebreak': 'off', // Conflicts with Prettier.
    'import/extensions': 'off',
    'import/no-unresolved': 'off', // Handled by TS.
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'linebreak-style': 0, // May want to reconfigure for your project.
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-undef': 'off', // Handled by TS.
    'no-unused-vars': 'warn',
    'object-curly-newline': 'off',
    'operator-linebreak': 'off', // Conflicts with Prettier.
    'react/destructuring-assignment': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-filename-extension': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off', // Does not work with interfaces.
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};

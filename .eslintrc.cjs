/** @type { import("eslint").Linter.Config } */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: [
      './tsconfig.json',
      './tsconfig.node.json',
      './tsconfig.app.json',
      './components.json',
    ],
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'react/jsx-props-no-spreading': 0,
  },
};

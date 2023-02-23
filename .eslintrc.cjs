module.exports = {
  extends: ['airbnb', 'airbnb-typescript', 'prettier'],
  plugins: ['react', 'import', 'unused-imports', 'simple-import-sort', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'unused-imports/no-unused-imports': 'error',
    'react/require-default-props': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'react/no-unknown-property': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/no-shadow': 'off',
    'prettier/prettier': 'error',
    'jsx-a11y/label-has-associated-control': 'off',
    'react/no-array-index-key': 'off',
    'no-unreachable-loop': 'off',
    'no-restricted-syntax': 'off',
    'guard-for-in': 'off',
    'react/no-this-in-sfc': 'off',
    'no-unsafe-optional-chaining': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'import/no-cycle': 'off',
    'react/no-unstable-nested-components': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'no-return-assign': 'off',
  },
};

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
    'prettier/prettier': 'error',
  },
};

module.exports = {
  extends: ['airbnb', 'airbnb-typescript', 'prettier'],
  plugins: ['import', 'unused-imports', 'simple-import-sort', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'unused-imports/no-unused-imports': 'error',
    'prettier/prettier': 'error',
  },
};

module.exports = {
  tabWidth: 2,
  eslintIntegration: true,
  jsxSingleQuote: true,
  jsxBracketSameLine: true,
  printWidth: 200,
  singleQuote: true,
  semi: false,
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 200,
      },
    },
  ],
  arrowParens: 'always',
}

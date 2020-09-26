module.exports = {
  printWidth: 100,
  tabWidth: 2,
  singleQuote: true,
  semi: true,
  trailingComma: "all",
  bracketSpacing: true,
  jsxBracketSameLine: true,
  arrowParens: "always",
  overrides: [
    {
      files: "*.{js,jsx,tsx,ts,scss,json,html}",
      options: {
        tabWidth: 4,
      },
    },
  ],
};

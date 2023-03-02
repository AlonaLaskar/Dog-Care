module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'prettier'],
  rules: {
    'no-unused-vars': 1,
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': ['off'],
    quotes: ['error', 'single'],
    semi: ['error', 'always']
  },
  overrides: [
    {
      files: ['*/Styled.js'],
      rules: {
        'prettier/prettier': ['warn', {}, { usePrettierrc: true }],
        indent: 'off'
      }
    }
  ]
};

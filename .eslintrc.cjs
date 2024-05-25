/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  overrides: [
    {
      files: [
        'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}',
        'cypress/support/**/*.{js,ts,jsx,tsx}'
      ],
      'extends': [
        'plugin:cypress/recommended'
      ]
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    eqeqeq: "off",
    "no-duplicate-imports": "error",
    "no-empty-pattern": "error",
    "no-import-assign": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "no-unused-vars": "error",
    "prefer-const": ["error", { "ignoreReadBeforeAssign": true }]

  }
}

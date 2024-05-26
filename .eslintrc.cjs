/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  overrides: [
    {
      files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}', 'cypress/support/**/*.{js,ts,jsx,tsx}'],
      extends: ['plugin:cypress/recommended']
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  "plugins": ["check-file"],
  rules: {
    eqeqeq: 'off',
    "vue/multi-word-component-names": "off",
    "vue/no-async-in-computed-properties": "error",
    'no-duplicate-imports': 'error',
    'no-empty-pattern': 'error',
    'no-import-assign': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    camelcase: "error",
    'prefer-const': ['error', { ignoreReadBeforeAssign: true }],
    'check-file/filename-naming-convention': [
      'error',
      {
        'src/components/*.{js,ts,vue}': 'PASCAL_CASE'
      }
    ]
  }
}

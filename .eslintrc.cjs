/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    "no-unused-vars": 1,
    "semi": 2,
    "no-trailing-spaces": 2,
    "no-multi-spaces": 2,
    "no-multiple-empty-lines": 2
  }
};
module.exports = {
   root: true,
   env: {
      node: true,
      es2022: true
   },
   extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
   plugins: ['@typescript-eslint'],
   parser: '@typescript-eslint/parser',
   rules: {
      indent: ['error', 3],
      'no-tabs': ['error', { allowIndentationTabs: true }],
      'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
      '@typescript-eslint/indent': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-interface': 'off'
   }
}

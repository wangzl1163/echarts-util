module.exports = {
   env: {
      node: true,
      es2022: true
   },
   extends: ['eslint:recommended', 'prettier'],
   plugins: ['@typescript-eslint'],
   parser: '@typescript-eslint/parser',
   rules: {
      indent: ['error', 3],
      'no-tabs': ['error', { allowIndentationTabs: true }],
      'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }]
   }
}

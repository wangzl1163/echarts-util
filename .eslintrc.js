module.exports = {
   env: {
      node: true,
      es2021: true
   },
   extends: [
      'eslint:recommended',
      'standard',
      'prettier'
   ],
   plugins: [
      '@typescript-eslint',
      'import',
      'promise',
      'node'
   ],
   parser: '@typescript-eslint/parser',
   rules: {
      indent: ['error', 3],
      'no-tabs': ['error', { allowIndentationTabs: true }],
      'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }]
   }
}

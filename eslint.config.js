import js from '@eslint/js'
import globals from 'globals'
import eslintConfigPrettier from 'eslint-config-prettier/flat'

export default [
    {ignores: ['node_modules/**', 'legacy/**', 'reports/**']},
    js.configs.recommended,
    {
        languageOptions: {ecmaVersion: 'latest', sourceType: 'module', globals: {...globals.node}},
        rules: {
            'operator-assignment': ['error', 'always'],
            'no-undef-init': 'warn',
            'no-else-return': 'error',
            'consistent-return': 'warn',
            'no-multi-assign': 'error',
            'no-param-reassign': ['warn', {props: true}],
        },
    },
    eslintConfigPrettier,
]

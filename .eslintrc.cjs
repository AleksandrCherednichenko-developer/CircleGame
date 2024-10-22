require('@rushstack/eslint-patch/eslint-bulk-suppressions');

module.exports = {
    root: true,
    plugins: ['import', 'unused-imports'],
    globals: { cy: true },
    extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-typescript', 'prettier'],
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        project: './tsconfig.json',
    },
    rules: {
        'no-undef': 'error',
        'no-plusplus': 'warn',
        'no-return-assign': 'error',
        'no-extra-semi': 'off',
        'no-bitwise': ['error', { allow: ['~'] }],
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_+$' }],
        'prefer-destructuring': 'off',
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'vue/component-tags-order': [
            'error',
            {
                order: ['template', 'script:not([setup])', 'script[setup]', 'style:not([scoped])', 'style[scoped]'],
            },
        ],
        'vue/attributes-order': [
            'error',
            {
                order: [
                    'DEFINITION',
                    'LIST_RENDERING',
                    'CONDITIONALS',
                    'RENDER_MODIFIERS',
                    'GLOBAL',
                    ['UNIQUE', 'SLOT'],
                    'TWO_WAY_BINDING',
                    'OTHER_DIRECTIVES',
                    'OTHER_ATTR',
                    'EVENTS',
                    'CONTENT',
                ],
                alphabetical: false,
            },
        ],
        'vue/component-definition-name-casing': ['error', 'PascalCase'],
        'vue/component-name-in-template-casing': [
            'error',
            'PascalCase',
            { registeredComponentsOnly: true, ignores: ['tr'] },
        ],
        'vue/no-irregular-whitespace': [
            'error',
            {
                skipStrings: true,
                skipComments: false,
                skipRegExps: false,
                skipTemplates: false,
                skipHTMLAttributeValues: false,
                skipHTMLTextContents: false,
            },
        ],
        'vue/no-dupe-keys': ['error', { groups: [] }],
        'no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
            'warn',
            {
                vars: 'all',
                varsIgnorePattern: '^_',
                args: 'after-used',
                argsIgnorePattern: '^_',
            },
        ],
    },
};

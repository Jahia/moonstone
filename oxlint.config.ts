import stylistic from '@stylistic/eslint-plugin';
import storybook from 'eslint-plugin-storybook';
import testingLibrary from 'eslint-plugin-testing-library';
import { defineConfig } from 'oxlint';

export default defineConfig({
    plugins: [
        'typescript',
        'react',
        'jsx-a11y',
        'import',
        'unicorn',
        'vitest',
        'promise',
        'oxc',
    ],
    jsPlugins: ['@stylistic/eslint-plugin', 'eslint-plugin-perfectionist'],
    categories: {
        correctness: 'error',
    },
    env: {
        builtin: true,
        browser: true,
        es2024: true,
    },
    rules: {
        // React automatic runtime, no need to import React in scope
        'react/react-in-jsx-scope': 'off',
        'react/display-name': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'typescript/consistent-type-imports': 'error',
        // Never switch to 'interface': its autofix drops implicit index
        'typescript/consistent-type-definitions': ['error', 'type'],
        'typescript/no-shadow': 'error',
        'typescript/no-inferrable-types': 'error',
        'typescript/no-unnecessary-type-assertion': 'error',
        // From tseslint "recommended"; missing from oxlint's correctness category
        'typescript/ban-ts-comment': 'error',
        'typescript/no-explicit-any': 'warn',
        'typescript/no-namespace': 'error',
        'typescript/no-require-imports': 'error',
        'typescript/no-empty-object-type': 'error',
        'typescript/no-unsafe-function-type': 'error',
        'typescript/no-unnecessary-type-constraint': 'error',
        // Deprecation messages go through console.warn
        'no-console': ['warn', { allow: ['warn'] }],
        'eqeqeq': ['error', 'smart'],
        'array-callback-return': 'error',
        'radix': 'error',
        'no-template-curly-in-string': 'error',
        'typescript/no-misused-promises': 'error',
        'typescript/restrict-plus-operands': 'error',
        // A default clause counts as exhaustive
        'typescript/switch-exhaustiveness-check': ['error', {
            considerDefaultExhaustiveForUnions: true,
        }],
        'react/no-array-index-key': 'error',
        'react/no-unstable-nested-components': 'error',
        'react/button-has-type': 'error',
        'react/jsx-no-constructed-context-values': 'error',
        'oxc/no-accumulating-spread': 'error',
        // False positives on computed access (icons[name]); tsc checks this
        'import/namespace': 'off',
        'unicorn/filename-case': 'off',
        'unicorn/no-null': 'off',
        'jsx-a11y/prefer-tag-over-role': 'off',
        // TODO: Will be tackled in a dedicated task and changed to 'error'.
        'jsx-a11y/click-events-have-key-events': 'warn',
        'jsx-a11y/no-noninteractive-element-interactions': 'warn',
        'jsx-a11y/no-static-element-interactions': 'warn',
        'jsx-a11y/aria-role': 'warn',
        'jsx-a11y/interactive-supports-focus': 'warn',
        'jsx-a11y/role-supports-aria-props': 'warn',
        'jsx-a11y/role-has-required-aria-props': 'warn',
        'perfectionist/sort-imports': ['error', {
            type: 'natural',
            ignoreCase: true,
            internalPattern: ['^~/.*'],
            newlinesBetween: 1,
            groups: [
                ['builtin', 'external'],
                ['internal', 'parent', 'sibling', 'index'],
                ['type', 'type-import', 'type-internal', 'type-parent', 'type-sibling', 'type-index'],
                'side-effect',
                'style',
                'side-effect-style',
            ],
        }],
        'perfectionist/sort-named-imports': ['error', {
            type: 'natural',
            ignoreCase: true,
        }],
        'perfectionist/sort-jsx-props': ['error', {
            type: 'natural',
            ignoreCase: true,
            groups: ['boolean-prop', 'shorthand-prop', 'unknown', 'callback'],
            customGroups: [
                {
                    groupName: 'boolean-prop',
                    elementNamePattern: '^((is|has)[A-Z]([A-Za-z0-9]?)+|disabled|readOnly|autoFocus)',
                },
                {
                    groupName: 'callback',
                    elementNamePattern: '^on[A-Z]',
                },
            ],
        }],
        ...stylistic.configs.customize({
            indent: 4,
            quotes: 'single',
            semi: true,
            jsx: true,
            commaDangle: 'always-multiline',
            arrowParens: false,
        }).rules,
        '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
        '@stylistic/jsx-child-element-spacing': 'error',
        // Default 'tag-aligned' fights @stylistic/indent: --fix never converges
        '@stylistic/jsx-closing-tag-location': ['error', 'line-aligned'],
        // Other modes let the fixer split "text {expr}" without {' '}, which
        // changes the rendered output (broke a DataTable test)
        '@stylistic/jsx-one-expression-per-line': ['error', { allow: 'non-jsx' }],
        '@stylistic/object-curly-newline': ['error', {
            ObjectExpression: {
                consistent: true,
                multiline: true,
            },
            ObjectPattern: {
                consistent: true,
                minProperties: 4,
                multiline: true,
            },
        }],
        '@stylistic/object-property-newline': 'error',
        '@stylistic/jsx-max-props-per-line': ['error', {
            maximum: {
                single: 4,
                multi: 1,
            },
        }],
        '@stylistic/jsx-tag-spacing': ['error', {
            afterOpening: 'never',
            beforeClosing: 'never',
            beforeSelfClosing: 'never',
            closingSlash: 'never',
        }],
    },
    overrides: [
        {
            files: ['**/*.{ts,tsx,mts,cts}'],
            rules: {
                // Already checked by the TypeScript compiler
                'no-dupe-class-members': 'off',
                'no-dupe-keys': 'off',
                'no-unsafe-negation': 'off',
                'no-var': 'error',
                'prefer-const': 'error',
                'prefer-rest-params': 'error',
                'prefer-spread': 'error',
            },
        },
        {
            files: ['**/*.stories.{ts,tsx,js,jsx}'],
            jsPlugins: ['eslint-plugin-storybook'],
            rules: {
                ...storybook.configs['flat/recommended'][1].rules,
                // Fixture objects read better with several properties per line
                '@stylistic/object-property-newline': 'off',
                'typescript/no-useless-default-assignment': 'off',
            },
        },
        {
            files: ['src/data/**'],
            rules: {
                // Demo data reads better with several properties per line
                '@stylistic/object-property-newline': 'off',
            },
        },
        {
            files: ['.storybook/main.{js,cjs,mjs,ts}'],
            jsPlugins: ['eslint-plugin-storybook'],
            rules: {
                'storybook/no-uninstalled-addons': 'error',
            },
        },
        {
            files: ['**/*.spec.{ts,tsx,js,jsx}', '**/__tests__/**'],
            jsPlugins: ['eslint-plugin-testing-library'],
            globals: {
                describe: 'readonly',
                it: 'readonly',
                test: 'readonly',
                expect: 'readonly',
                vi: 'readonly',
                beforeAll: 'readonly',
                afterAll: 'readonly',
                beforeEach: 'readonly',
                afterEach: 'readonly',
            },
            rules: {
                ...testingLibrary.configs['flat/react'].rules,
                // Correctness category covers the other vitest rules; these two
                // are downgraded to keep WIP tests committable
                'vitest/expect-expect': 'warn',
                'vitest/no-disabled-tests': 'warn',
                // Not in the correctness category
                'vitest/no-commented-out-tests': 'error',
                'vitest/no-identical-title': 'error',
                // tsc already type-checks mocks at their call sites
                'vitest/require-mock-type-parameters': 'off',
                // Re-render cost is irrelevant in tests
                'react/jsx-no-constructed-context-values': 'off',
                // Fixture objects read better with several properties per line
                '@stylistic/object-property-newline': 'off',
                'jsx-a11y/alt-text': 'off',
                // TODO: ratchet to 'error' after the CSS-modules test migration (~105 hits)
                'testing-library/no-container': 'warn',
                'testing-library/no-node-access': 'warn',
                // Not in flat/react; userEvent simulates real interactions
                'testing-library/prefer-user-event': 'error',
            },
        },
    ],
    ignorePatterns: [
        'node_modules',
        'dist',
        'coverage',
        'storybook-static',
        'src/icons/components',
        'src/__screenshots__',
        '.vitest-attachments',
        '.claude',
        '.yarn',
    ],
});

import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import react from '@vitejs/plugin-react';
import { playwright } from '@vitest/browser-playwright';
import path from 'node:path';
import sbom from 'rollup-plugin-sbom';
/// @ts-check
/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import { patchCssModules } from 'vite-css-modules';

export default defineConfig({
    plugins: [
        patchCssModules(),
        react(),
        sbom({ specVersion: '1.4' }),
    ],
    resolve: {
        alias: {
            '~': path.resolve('./src'),
        },
    },
    build: {
        lib: {
            entry: {
                'index': './src/index.ts',
                'components/DataTable/index': './src/components/DataTable/index.ts',
                // Legacy entrypoints, remove in the future
                'icons/index': './src/icons/index.ts',
                'components/CheckboxGroup/CheckboxItem': './src/components/CheckboxGroup/CheckboxItem/index.ts',
                'icons/components/DefaultEntry': './src/icons/components/DefaultEntry.tsx',
                'icons/components/Information': 'src/icons/components/Information.tsx',
            },
            formats: ['es', 'cjs'],
            cssFileName: 'scoped', // The CSS file produced by Vite only contains classes hashed by CSS modules, hence scoped
        },
        rollupOptions: {
            external: [
                'react',
                'react-dom',
                'react/jsx-runtime',
                // Preserve the import statement in `src/index.ts`
                './legacy-global-bundle.css',
            ],
        },
    },
    assetsInclude: ['**/*.md'],
    test: {
        coverage: {
            provider: 'v8',
            // Omit the default 'text' reporter so the coverage table isn't dumped to the terminal
            reporter: ['html', 'clover', 'json-summary'],
            include: ['src/**/*.{ts,tsx}'],
            exclude: ['src/__mocks__/**', 'src/__storybook__/**', 'src/data/**', 'src/icons/components/**', '**/*.stories.*', '**/*.spec.*'],
        },
        projects: [
            {
                extends: true,
                test: {
                    name: 'unit',
                    setupFiles: ['./vitest.setup.js'],
                    globals: true,
                    environment: 'jsdom',
                    // Pin the system timezone so date/time tests are deterministic
                    env: { TZ: 'UTC' },
                    include: ['src/**/*.spec.tsx'],
                    exclude: ['src/visual*.spec.tsx', 'src/**/*.browser.spec.tsx'],
                    css: true,
                },
            },
            {
                extends: true,
                test: {
                    name: 'browser',
                    include: ['src/**/*.browser.spec.tsx'],
                    exclude: ['src/visual*.spec.tsx'],
                    css: true,
                    globals: true,
                    env: { TZ: 'UTC' },
                    browser: {
                        enabled: true,
                        headless: true,
                        screenshotFailures: false,
                        provider: playwright(),
                        instances: [{ browser: 'chromium' }],
                    },
                },
            },
            {
                extends: true,
                test: {
                    name: 'visual',
                    include: ['src/visual*.spec.tsx'],
                    // It's super fast to take a screenshot, but Vitest will wait until
                    // the default timeout of 15s in case the screenshot does not match
                    testTimeout: 3000,
                    browser: {
                        enabled: true,
                        headless: true,
                        provider: playwright(),
                        instances: [{ browser: 'chromium' }],
                        expect: {
                            toMatchScreenshot: {
                                // Resolve all screenshots to a single directory
                                resolveScreenshotPath: ({
                                    root, testFileDirectory, screenshotDirectory, arg, browserName, platform, ext,
                                }) => `${root}/${testFileDirectory}/${screenshotDirectory}/visual.spec.tsx/${arg}-${browserName}-${platform}${ext}`,
                            },
                        },
                    },
                },
            },
            // Runs the tests for the stories defined in your Storybook config, once per theme.
            // The dark run only covers stories tagged `dark-theme` (components with a reversed variant).
            ...[
                { theme: 'light' },
                {
                    theme: 'dark',
                    tags: { include: ['dark-theme'] },
                },
            ].map(({ theme, tags }) => ({
                extends: true,
                plugins: [
                    storybookTest({
                        configDir: path.resolve('.storybook'),
                        tags,
                        initialGlobals: {
                            theme,
                            backgrounds: { value: theme },
                        },
                    }),
                ],
                test: {
                    name: `storybook-${theme}`,
                    setupFiles: ['./.storybook/vitest.setup.ts'],
                    browser: {
                        enabled: true,
                        headless: true,
                        provider: playwright(),
                        instances: [{ browser: 'chromium' }],
                    },
                },
            })),
        ],
    },
});

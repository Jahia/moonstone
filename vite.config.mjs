/// @ts-check
/// <reference types="vitest/config" />
import {defineConfig} from 'vite';
import path from 'node:path';
import {libInjectCss} from 'vite-plugin-lib-inject-css';
import react from '@vitejs/plugin-react';
import sbom from 'rollup-plugin-sbom';
import {playwright} from '@vitest/browser-playwright';
import {patchCssModules} from 'vite-css-modules';

export default defineConfig({
    plugins: [
        patchCssModules(),
        react(),
        libInjectCss(),
        sbom({specVersion: '1.4'})
    ],
    resolve: {
        alias: {
            '~': path.resolve('./src')
        }
    },
    build: {
        lib: {
            entry: {
                index: './src/index.ts',
                // Produce `scoped.css`, the isolated styles for Moonstone
                scoped: './src/scoped.ts',
                // Legacy entrypoints, remove in the future
                'icons/index': './src/icons/index.ts',
                'components/CheckboxGroup/CheckboxItem': './src/components/CheckboxGroup/CheckboxItem/index.ts',
                'icons/components/DefaultEntry': './src/icons/components/DefaultEntry.tsx',
                'icons/components/Information': 'src/icons/components/Information.tsx'
            },
            formats: ['es', 'cjs']
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'react/jsx-runtime']
        },
        assetsInlineLimit: 0
    },
    assetsInclude: ['**/*.md'],
    test: {
        coverage: {
            provider: 'v8',
            include: ['src/**/*.tsx'],
            exclude: ['src/__mocks__', 'src/__storybook__', 'src/data', '**/*.stories.*']
        },
        projects: [
            {
                extends: true,
                test: {
                    name: 'unit',
                    setupFiles: ['./vitest.setup.js'],
                    globals: true,
                    environment: 'jsdom',
                    include: ['src/**/*.spec.tsx'],
                    exclude: ['src/visual*.spec.tsx'],
                    css: true
                }
            },
            {
                extends: true,
                test: {
                    name: 'visual',
                    include: ['src/visual*.spec.tsx'],
                    // It's super fast to take a screenshot, but Vitest will wait until
                    // the default timeout of 15s in case the screenshot does not match
                    testTimeout: 1000,
                    browser: {
                        enabled: true,
                        headless: true,
                        provider: playwright(),
                        instances: [{browser: 'chromium'}],
                        expect: {
                            toMatchScreenshot: {
                                // Resolve all screenshots to a single directory
                                resolveScreenshotPath: ({root, testFileDirectory, screenshotDirectory, arg, browserName, platform, ext}) => `${root}/${testFileDirectory}/${screenshotDirectory}/visual.spec.tsx/${arg}-${browserName}-${platform}${ext}`
                            }
                        }
                    }
                }
            }
        ]
    }
});

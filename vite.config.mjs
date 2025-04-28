// @ts-check
import {defineConfig} from 'vite';
import path from 'node:path';
import {libInjectCss} from 'vite-plugin-lib-inject-css';
import react from '@vitejs/plugin-react';
import sbom from 'rollup-plugin-sbom';

export default defineConfig({
    plugins: [react(), libInjectCss(), sbom({specVersion: '1.4'})],
    resolve: {
        alias: {
            '~': path.resolve('./src')
        }
    },
    build: {
        lib: {
            entry: {
                index: './src/index.ts',
                // Legacy entrypoints, remove in the future
                'icons/index': './src/icons/index.ts',
                'components/CheckboxGroup/CheckboxItem': './src/components/CheckboxGroup/CheckboxItem/index.ts',
                'icons/components/DefaultEntry': './src/icons/components/DefaultEntry.tsx',
                'icons/components/Information': 'src/icons/components/Information.tsx'
            },
            formats: ['es']
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'react/jsx-runtime']
        },
        assetsInlineLimit: 0
    },
    assetsInclude: ['**/*.md'],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./vitest.setup.js'],
        coverage: {
            provider: 'v8',
            include: ['src/**/*.tsx'],
            exclude: ['src/__mocks__', 'src/__storybook__', 'src/data', '**/*.stories.*']
        }
    }
});

// @ts-check
import {defineConfig} from 'vite';
import path from 'node:path';
import {libInjectCss} from 'vite-plugin-lib-inject-css';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react(), libInjectCss()],
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
    assetsInclude: ['**/*.md']
});

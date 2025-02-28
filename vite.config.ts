import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';
import react from '@vitejs/plugin-react';
import Markdown from 'vite-plugin-md';
import { resolve } from 'path';

export default defineConfig({
    plugins: [react(), Markdown()],
    resolve: {
        alias: {
            '~': resolve(__dirname, 'src'),
        },
    },
    test: {
        globals: true,
        coverage: {
            provider: 'v8', // or 'v8'
            include: ['src/**/*.tsx'], // Optional: If you want to include files in coverage
            exclude: ['src/__mocks__', 'src/__storybook__', 'src/data', '**/*.stories.*'],
        },
        environment: 'jsdom', // Simulates a browser-like environment
        setupFiles: './vitest.setup.ts', // Optional: If you need global test setup
        exclude: [...configDefaults.exclude, 'storybook-static/**'], // Exclude Storybook-generated files
    },
    build: {
        lib: {
            entry: 'src/index.ts',
            name: 'Moonstone',
            formats: ['es', 'cjs'],
            fileName: (format) => `my-library.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom'], // Peer dependencies
        },
    },
    assetsInclude: ['**/*.md'],
});

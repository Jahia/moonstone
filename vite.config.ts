import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Markdown from 'vite-plugin-md';

export default defineConfig({
    plugins: [react(), Markdown()],
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

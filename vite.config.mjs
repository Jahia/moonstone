/// <reference types="vitest/config" />
// @ts-check
import { defineConfig } from 'vite';
import path from 'node:path';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import react from '@vitejs/plugin-react';
import sbom from 'rollup-plugin-sbom';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [react(), libInjectCss(), sbom({
    specVersion: '1.4'
  })],
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
      formats: ['es', 'cjs']
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
    },
    projects: [{
      extends: true,
      plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
      storybookTest({
        configDir: path.join(dirname, '.storybook')
      })],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: 'playwright',
          instances: [{
            browser: 'chromium'
          }]
        },
        setupFiles: ['.storybook/vitest.setup.ts']
      }
    }]
  }
});
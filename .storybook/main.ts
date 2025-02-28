import type { StorybookConfig } from '@storybook/react-vite';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-docs',
        '@storybook/addon-backgrounds',
        '@storybook/addon-a11y',
        '@storybook/addon-controls',
        'storybook-addon-tag-badges'
    ],
    async viteFinal(config) {
        return {
            ...config,
            resolve: {
                alias: {
                    '~': resolve(__dirname, '../src'),
                },
            },
        };
    },
    framework: '@storybook/react-vite',
    typescript: {
        reactDocgen: false,
    }
};

export default config;

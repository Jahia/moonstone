import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
    framework: '@storybook/react-vite',
    typescript: {
        reactDocgen: "react-docgen-typescript",
    },
    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-docs',
        '@storybook/addon-backgrounds',
        '@storybook/addon-a11y',
        '@storybook/addon-controls',
        'storybook-addon-tag-badges'
    ],
    docs: {
        autodocs: true
    }
};

export default config;

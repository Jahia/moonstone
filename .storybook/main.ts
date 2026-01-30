import { defineMain } from '@storybook/react-vite/node';

const config = defineMain({
    framework: '@storybook/react-vite',
    typescript: {
        reactDocgen: "react-docgen-typescript",
    },
    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-docs',
        '@storybook/addon-a11y',
        'storybook-addon-tag-badges'
    ]
});

export default config;

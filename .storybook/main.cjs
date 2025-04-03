const path = require('path');

module.exports = {
    features: {
        postcss: false,
    },

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
    },

    framework: {
        name: '@storybook/react-vite',
        options: {}
    }
};

module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-docs',
        '@storybook/addon-viewport',
        '@storybook/addon-storysource',
        '@storybook/addon-knobs',
        '@storybook/addon-a11y',
        '@storybook/addon-controls'
    ]
};

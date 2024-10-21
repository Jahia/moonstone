const path = require('path');

module.exports = {
    features: {
        postcss: false,
    },

    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-docs',
        '@storybook/addon-backgrounds',
        '@storybook/addon-a11y',
        '@storybook/addon-controls',
        '@storybook/addon-postcss',
        '@storybook/addon-webpack5-compiler-babel',
        '@chromatic-com/storybook'
    ],

    "webpackFinal": async (config) => {
        config.resolve.alias['~'] = path.resolve(__dirname, '../src')
        config.module.rules.push({
            test: /\.scss$/,
            sideEffects: true,
            use: [
                'style-loader',
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: [
                                ["postcss-preset-env"],
                            ],
                        }
                    }
                },
                'sass-loader'
            ]
        });

        return config
    },

    framework: {
        name: '@storybook/react-webpack5',
        options: {}
    },

    docs: {}
};

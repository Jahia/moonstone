const path = require('path');

module.exports = {
    framework: '@storybook/react-webpack5',
    docs: {
        autodocs: true
    },
    stories: [
        '../src/**/*.stories.@(js|jsx|ts|tsx)'
        ],
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-docs',
        '@storybook/addon-backgrounds',
        '@storybook/addon-a11y',
        '@storybook/addon-controls'
    ],
    "webpackFinal": async config => {
        config.resolve.alias['~'] = path.resolve(__dirname, '../src');
        config.module.rules.push({
            test: /\.scss$/,
            sideEffects: true,
            use: ['style-loader', 'css-loader', {
                loader: 'postcss-loader',
                options: {
                    postcssOptions: {
                        plugins: [["postcss-preset-env"]]
                    }
                }
        }, 'sass-loader']
        });
        return config;
    }
};

const path = require('path');
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');


// Export a function. Accept the base config as the only param.
module.exports = async ({config, mode}) => {
    config.module.rules.push({
        test: /\.stories\.jsx?$/,
        loaders: [require.resolve('@storybook/addon-storysource/loader')],
        enforce: 'pre',
    });
    config.module.rules.push({
        test: /\.(stories|story)\.mdx$/,
        use: [
            {
                loader: 'babel-loader',
            },
            {
                loader: '@mdx-js/loader',
                options: {
                    compilers: [createCompiler({})],
                },
            },
        ],
    });
    config.module.rules.push({
        test: /\.scss$/,
        use: [
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        mode: 'local',
                        localIdentName: '[name]__[local]'
                    },
                }
            },
            'sass-loader'
        ],
        include: path.resolve(__dirname, '../')
    });

    // Return the altered config
    return config;
};

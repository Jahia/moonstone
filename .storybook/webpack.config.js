const path = require('path');
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

// Export a function. Accept the base config as the only param.
module.exports = async ({config, mode}) => {
    // Add alias to import files easily
    config.resolve.alias['~'] = path.resolve(__dirname, '../src/');

    config.module.rules.push({
        test: /\.stories\.jsx?$/,
        loaders: [require.resolve('@storybook/source-loader')],
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
        sideEffects: true,
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

    config.module.rules.push({
        test: /\.svg$/,
        issuer: {
            test: /\.jsx?$/
        },
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    template: require('../src/tokens/icons/svgrTemplate'),
                    icon: true,
                    dimensions: false,
                    replaceAttrValues: { '#000': 'currentColor' }
                }
            }
        ],
        include: path.resolve(__dirname, '../')
    });

    // removing the file-loader for svg
    const baseSvgRuleIndex = config.module.rules.findIndex(r => r.test.toString().includes('svg'));
    config.module.rules[baseSvgRuleIndex].test = new RegExp(
        config.module.rules[baseSvgRuleIndex].test.toString()
            .replace('svg|', '')
            .replace(/^\//, '')
            .replace(/\/$/, '')
    );

    // Return the altered config
    return config;
};

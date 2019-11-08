// This exports icons into dist/icons directory so that they are not bundled with library (main.js) but instead
// can be retrieved in applications using @jahia/moonstone/icons. Yet, it is still possible to load icons in components
// created in this library by using ~/icons/asset/<ICON_NAME> in which case they are (react components) are bundled in main.js.
const IconsConfig = {
    entry: './src/icons/index.js',
    output: {
        filename: 'icons/index.js'
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                issuer: {
                    test: /\.jsx?$/
                },
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'icons',
                            name: '[name].js'
                        }
                    },
                    {
                        loader: '@svgr/webpack',
                        options: {
                            template: require('./src/icons/svgrTemplate').template,
                            icon: true,
                            dimensions: false,
                            replaceAttrValues: {'#000': 'currentColor'}
                        }
                    }
                ]
            }
        ]
    }
};

module.exports = IconsConfig;

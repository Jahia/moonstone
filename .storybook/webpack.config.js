const path = require('path');
const jsonImporter = require('node-sass-json-importer');

// Export a function. Accept the base config as the only param.
module.exports = async ({config, mode}) => {
    // Add alias to import files easily
    config.resolve.alias['~'] = path.resolve(__dirname, '../src/');

    // This rule is for non-css module files
    config.module.rules.push({
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
        sideEffects: true,
        use: [
            'style-loader',
            'css-loader',
            {
                loader: 'postcss-loader',
                options: {
                    postcssOptions: {
                        plugins: [['postcss-preset-env']]
                    }
                }
            },
            {
                loader: 'sass-loader',
                // Apply the JSON importer via sass-loader's options.
                options: {
                    sassOptions: {
                        importer: jsonImporter({
                            convertCase: true
                        })
                    }
                }
            }
        ],
        include: path.resolve(__dirname, '../')
    });

    // This rule is for scss files that will be used with css modules
    config.module.rules.push({
        test: /\.module\.scss$/,
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
            {
                loader: 'postcss-loader',
                options: {
                    postcssOptions: {
                        plugins: [['postcss-preset-env']]
                    }
                }
            },
            'sass-loader'
        ],
        include: path.resolve(__dirname, '../')
    });

    // Return the altered config
    return config;
};

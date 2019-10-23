const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const productionPlugins =
  process.env.WEBPACK_MODE === 'production' ?
      [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})] :
      [];

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        library: '',
        libraryTarget: 'commonjs'
    },
    mode: 'development',
    devtool: 'source-map',
    externals: [nodeExternals()],
    resolve: {
        // Add alias to import files easily
        alias: {
            '@': path.resolve(__dirname, 'src/')
        },
        extensions: ['.js', '.json', '.jsx', '.scss']
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/i,
                use: [
                    'style-loader',
                    // Translates CSS into CommonJS
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local'
                            }
                        }
                    },
                    // Compiles Sass to CSS
                    'sass-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            },
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
    },
    plugins: [
        ...productionPlugins,
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ]
};

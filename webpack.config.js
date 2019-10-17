const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
// Const SVGSymbolSprite = require('svg-symbol-sprite-loader')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
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
                loader: 'svg-sprite-loader',
                options: {}
            }
            // {
            //     // The loader transforms imported SVGs in JS objects of SVG data that
            //     // can be used with any icon component
            //     test: /\.svg$/,
            //     use: [
            //         {
            //             loader: 'svg-symbol-sprite-loader',

            //             // optional: Provide a function which returns a customized symbol ID.
            //             // It receives the full file path as an argument
            //             options: {
            //                 symbolId: filePath =>
            //                     `icon-${path.basename(filePath, '.svg')}`
            //             }
            //         }
            //     ]
            // }
        ]
    },
    plugins: [
        ...productionPlugins,
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new SpriteLoaderPlugin()
        // // The plugin will append a script with the sprite hash to head
        // // ⚠️ Order matters, the HTML plugin must be included before the SVG sprite
        // // plugin so that the HTML plugin hooks are registered!
        // new HtmlWebpackPlugin(),

        // // The plugin extracts the imported SVGs into a separate sprite file,
        // new SVGSymbolSprite({
        //     filename: `icon-sprite${
        //         process.env.NODE_ENV === 'production' ? '.[chunkhash]' : ''
        //     }.svg`
        // })()
    ]
};

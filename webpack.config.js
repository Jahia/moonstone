const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const productionPlugins =
  process.env.WEBPACK_MODE === 'production' ?
      [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})] :
      [];

const ComponentsConfig = {
    entry: './dist/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist/lib'),
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
                test: /\.scss$/i,
                sideEffects: true,
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

module.exports = [ComponentsConfig];

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const rules = require('./dist/rulesconfig-wp');
const {CycloneDxWebpackPlugin} = require('@cyclonedx/webpack-plugin');

/** @type {import('@cyclonedx/webpack-plugin').CycloneDxWebpackPluginOptions} */
const cycloneDxWebpackPluginOptions = {
    specVersion: '1.4',
    rootComponentType: 'library',
    outputLocation: './bom'
};

const productionPlugins =
    process.env.WEBPACK_MODE === 'production' ?
        [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})] :
        [];

const ComponentsConfig = {
    entry: './dist/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist/lib'),
        libraryTarget: 'commonjs',
        publicPath: '/'
    },
    mode: 'development',
    devtool: 'source-map',
    externals: [nodeExternals()],
    resolve: {
        extensions: ['.js', '.json', '.jsx', '.scss']
    },
    module: {
        rules
    },
    plugins: [
        ...productionPlugins,
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new CycloneDxWebpackPlugin(cycloneDxWebpackPluginOptions)
    ]
};

module.exports = [ComponentsConfig];

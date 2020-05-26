module.exports = {
    presets: [['@babel/preset-env', {modules:false}], '@babel/preset-react'],
    sourceMaps: true,
    plugins: [
        ['module-resolver', {
            root: ['./src'],
            extensions: [".js", ".jsx", ".es", ".es6", ".mjs", ".svg"],
            alias: {
                '~': './src'
            }
        }]
    ]
};

const isTest = String(process.env.NODE_ENV) === 'test';

module.exports = {
    presets: [['@babel/preset-env', {modules: isTest ? 'commonjs' : false}], '@babel/preset-react'],
    sourceMaps: true,
    plugins: [
        ['module-resolver', {
            root: ['./src'],
            extensions: ['.js', '.jsx', '.es', '.es6', '.mjs', '.svg'],
            alias: {
                '~': './src'
            }
        }]
    ]
};

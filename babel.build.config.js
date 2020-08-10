const babelConfig = require('./babel.config');

module.exports = {
    ...babelConfig,
    plugins: [
        ['module-resolver', {
            root: ['./src'],
            extensions: ['.js', '.jsx', '.es', '.es6', '.mjs', '.svg'],
            alias: {
                '~': './src'
            }
        }],
        ['transform-rename-import', {original: '^(.+?)\\.scss$', replacement: '$1.css'}]
    ]
};

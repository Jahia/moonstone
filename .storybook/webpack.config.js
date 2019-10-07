const path = require('path')

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
    config.module.rules.push({
        test: /\.scss$/,
        use: [
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                    modules: true
                }
            },
            'sass-loader'
        ],
        include: path.resolve(__dirname, '../')
    })

    // Return the altered config
    return config
}

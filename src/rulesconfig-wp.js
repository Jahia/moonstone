const rules = [
    {
        test: /\.css$/,
        include: [
            __dirname
        ],
        sideEffects: true,
        use: [
            {
                loader: 'style-loader',
                options: {
                    attributes: {
                        styleloader: true
                    }
                }
            },
            {
                loader: 'css-loader'
            }
        ]
    },
    {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        include: [
            __dirname
        ],
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                }
            }
        ]
    }
];

module.exports = rules;

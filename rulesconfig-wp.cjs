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
        type: 'asset/resource',
        dependency: {
            not: ['url']
        }
    }
];

module.exports = rules;

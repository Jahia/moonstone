module.exports = {
    dimensions: false,
    typescript: true,
    jsxRuntime: 'automatic',
    prettierConfig: {
        parser: 'babel',
        singleQuote: true,
        trailingComma: 'none'
    },
    outDir: 'src/icons/components',
    svgoConfig: {
        plugins: [
            {
                name: 'removeAttrs',
                params: {
                    attrs: 'fill'
                }
            },
            {name: 'addAttributesToSVGElement',
                params: {
                    attribute: {
                        fill: 'currentColor'
                    }
                }
            },
            {
                name: 'removeDimensions'
            }
        ]
    }
};

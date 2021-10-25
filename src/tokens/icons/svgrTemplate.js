module.exports = function (
    {template},
    opts,
    {imports, componentName, jsx, exports}
) {
    const plugins = ['jsx'];
    if (opts.typescript) {
        plugins.push('typescript');
    }

    const typeScriptTpl = template.smart({plugins});

    return typeScriptTpl.ast`
        import PropTypes from 'prop-types';
        ${imports}
        
        const ${componentName} = ({size, className, ...otherProps}) => {
            const props = Object.assign({}, {size, className, ...otherProps});
            props.className = className + ' moonstone-icon moonstone-icon_' + size;
            return ${jsx};
        };


        ${componentName}.defaultProps = {
          size: 'default',
          className: ''
        };

        ${componentName}.propTypes = {
          size: PropTypes.oneOf('small', 'big', 'default'),
          className: PropTypes.string
        };

        ${exports}
     `;
};

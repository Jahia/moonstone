
exports.template = (
    {template},
    opts,
    {imports, componentName, jsx, exports}
) => {
    return template.ast`
        ${imports}
        import PropTypes from 'prop-types';

        const ${componentName} = initialProps => {
            const props = Object.assign({}, initialProps);
            props.className = initialProps.className + ' moonstone-icon moonstone-icon_' + props.size;
            return ${jsx};
        };

        ${componentName}.defaultProps = {
            size: 'default',
            className: ''
        };

        ${componentName}.propTypes = {
            size: PropTypes.oneOf(['small', 'default', 'big']),
            className: PropTypes.string
        };

        ${exports}
     `;
};

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
    const SVGProps = 'React.SVGProps<SVGSVGElement>';

    return typeScriptTpl.ast`
        ${imports}
        
        type TIconSize = 'small' | 'default' | 'big';
        
        interface IIconProps extends ${SVGProps} {
            size?: TIconSize;
            className?: string;
        }

        const ${componentName} = ({size = 'default', className = '', ...otherProps}: IIconProps) => {
            const props = Object.assign({}, {size, className, ...otherProps});
            props.className = className + ' moonstone-icon moonstone-icon_' + size;
            return ${jsx};
        };

        ${exports}
     `;
};

const template = ({imports, interfaces, componentName, jsx, exports}, {tpl}) => {
    return tpl`

    ${imports};
  
    ${interfaces};

    interface IconProps extends SVGProps<SVGSVGElement> {
        size?: 'small' | 'default' | 'big';
        color?: 'red' | 'yellow' | 'green' | 'blue' | 'purple' | 'gray'
        className?: string;
    }

    const ${componentName} = ({
        size = 'default',
        className = '',
        color,
        ...otherProps
    }: IconProps) => {
        const props = Object.assign({}, {size, className, ...otherProps});
        const classNameColor = color ? ' moonstone-icon_' + color : '';
        props.className = className + ' moonstone-icon moonstone-icon_' + size + classNameColor;
        return ${jsx}
    };
   
  ${exports};
  `;
};

module.exports = template;

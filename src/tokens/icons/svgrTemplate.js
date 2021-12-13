const template = ({imports, interfaces, componentName, jsx, exports}, {tpl}) => {
    return tpl`

    ${imports};
  
    ${interfaces};

    interface IconProps extends SVGProps<SVGSVGElement> {
        size?: 'small' | 'default' | 'big';
        className?: string;
    }

    const ${componentName} = ({
        size = 'default',
        className = '',
        ...otherProps
    }: IconProps) => {
        const props = Object.assign({}, {size, className, ...otherProps});
        props.className = className + ' moonstone-icon moonstone-icon_' + size;
        return ${jsx}
    };
   
  ${exports};
  `;
};

module.exports = template;

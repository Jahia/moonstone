const template = ({imports, interfaces, componentName, jsx, exports}, {tpl}) => {
    return tpl`
    import styles from '../_icons.module.scss';
    import clsx from 'clsx';

    ${imports};

    ${interfaces};

    interface IconProps extends SVGProps<SVGSVGElement> {
        size?: 'small' | 'default' | 'big';
        color?: 'red' | 'yellow' | 'green' | 'blue' | 'deepBlue' | 'purple' | 'gray'
        className?: string;
    }

    const ${componentName} = ({
        size = 'default',
        className = '',
        color,
        ...otherProps
    }: IconProps) => {
        const props = Object.assign({}, {size, className, ...otherProps});
        props.className = clsx(className,
            'moonstone-icon', styles['moonstone-icon'],
            'moonstone-icon_' + size, styles[\`moonstone-icon_\${size}\`],
            color && ['moonstone-icon_' + color, styles[\`moonstone-icon_\${color}\`]]
        );
        return ${jsx}
    };

  ${exports};
  `;
};

module.exports = template;

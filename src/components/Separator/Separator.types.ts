export type SeparatorProps = Omit<React.ComponentPropsWithoutRef<'hr'>, 'className'> & {
    /**
     * The orientation of the separator
     * @default 'horizontal'
     */
    variant?: 'horizontal' | 'vertical';

    /**
     * The margin applied around the separator
     * @default 'small'
     */
    spacing?: 'none' | 'small' | 'medium' | 'big';

    /**
     * How much of the container's width (or height, when vertical) the separator spans
     * @default 'full'
     */
    size?: 'medium' | 'large' | 'full';

    /**
     * Hide the separator if it is the firstChild, lastChild, onlyChild or firstOrLastChild
     * If you don't pass this property then the separator will always be visible
     */
    invisible?: 'firstChild' | 'lastChild' | 'onlyChild' | 'firstOrLastChild';

    /**
     * Additional classname
     */
    className?: string;
};

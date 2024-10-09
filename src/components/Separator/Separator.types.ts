export type SeparatorProps = Omit<React.ComponentPropsWithoutRef<'hr'>, 'className'> & {
    /**
     * Variants: Horizontal or Vertical
     */
    variant?: 'horizontal' | 'vertical',

    /**
     * Vertical spacings
     */
    spacing?: 'none' | 'small' | 'medium' | 'big',

    /**
     * Size
     */
    size?: 'medium' | 'large' | 'full',

    /**
     * Hide the separator if it is the firstChild, lastChild, onlyChild or firstOrLastChild
     * If you don't pass this property then the separator will always be visible
     */
    invisible?: 'firstChild' | 'lastChild' | 'onlyChild' | 'firstOrLastChild',

    /**
     * Additional classname
     */
    className?: string
}

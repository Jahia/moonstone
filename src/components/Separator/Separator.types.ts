type SeparatorSpacing = 'none' | 'small' | 'medium' | 'big';

type SeparatorSize = 'medium' | 'large' | 'full';

type SeparatorVariant = 'horizontal' | 'vertical';

type SeparatorInvisibleType = 'firstChild' | 'lastChild' | 'onlyChild' | 'firstOrLastChild';

export type SeparatorProps = Omit<React.ComponentPropsWithoutRef<'hr'>, 'className'> & {
    /**
     * Variants: Horizontal or Vertical
     */
    variant?: SeparatorVariant,

    /**
     * Vertical spacings
     */
    spacing?: SeparatorSpacing,

    /**
     * Size
     */
    size?: SeparatorSize,

    /**
     * Hide the separator if it is the firstChild, lastChild, onlyChild or firstOrLastChild
     * If you don't pass this property then the separator will always be visible
     */
    invisible?: SeparatorInvisibleType,

    /**
     * Additional classnames
     */
    className?: string
}

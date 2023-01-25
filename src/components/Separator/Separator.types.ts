type SeparatorSpacing = 'none' | 'small' | 'medium' | 'big';
export enum SeparatorSpacings {
    None = 'none',
    Small = 'small',
    Medium = 'medium',
    Big = 'big'
}

type SeparatorSize = 'medium' | 'large' | 'full';
export enum SeparatorSizes {
    Medium = 'medium',
    Large = 'large',
    Full = 'full'
}

type SeparatorVariant = 'horizontal' | 'vertical';
export enum SeparatorVariants {
    Horizontal = 'horizontal',
    Vertical = 'vertical'
}

type SeparatorInvisibleType = 'firstChild' | 'lastChild' | 'onlyChild' | 'firstOrLastChild';
export enum SeparatorInvisible {
    FirstChild = 'firstChild',
    LastChild = 'lastChild',
    OnlyChild = 'onlyChild',
    FirstOrLastChild = 'firstOrLastChild'
}

export type SeparatorProps = React.ComponentPropsWithoutRef<'hr'> & {
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

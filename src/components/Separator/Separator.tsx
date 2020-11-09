import React from 'react';
import classnames from 'clsx';
import './Separator.scss';

type TSeparatorSpacings = 'none' | 'small' | 'medium' | 'big';
export enum SeparatorSpacings {
    NONE = 'none',
    SMALL = 'small',
    MEDIUM = 'medium',
    BIG = 'big'
}

type TSeparatorSizes = 'medium' | 'large' | 'full';
export enum SeparatorSizes {
    MEDIUM = 'medium',
    LARGE = 'large',
    FULL = 'full'
}

type TSeparatorVariants = 'horizontal' | 'vertical';
export enum SeparatorVariants {
    HORIZONTAL = 'horizontal',
    VERTICAL = 'vertical'
}

type TSeparatorInvisible = 'firstChild' | 'lastChild' | 'onlyChild' | 'firstOrLastChild';
export enum SeparatorInvisible {
    FIRST_CHILD = 'firstChild',
    LAST_CHILD = 'lastChild',
    ONLY_CHILD = 'onlyChild',
    FIRST_OR_LAST_CHILD = 'firstOrLastChild'
}

interface ISeparatorProps {
    /**
     * Variants: Horizontal or Vertical
     */
    variant?: TSeparatorVariants,

    /**
     * Vertical spacings
     */
    spacing?: TSeparatorSpacings,

    /**
     * Size
     */
    size?: TSeparatorSizes,

    /**
     * Hide the separator if it is the firstChild, lastChild, onlyChild or firstOrLastChild
     * If you don't pass this property then the separator will always be visible
     */
    invisible?: TSeparatorInvisible,

    /**
     * Additional classname
     */
    className?: string
}

export const Separator: React.FC<ISeparatorProps> = ({
    size = SeparatorSizes.FULL,
    spacing = SeparatorSpacings.SMALL,
    variant = SeparatorVariants.HORIZONTAL,
    invisible = null,
    className,
    ...props
}) => {
    return (
        <hr {...props}
            className={classnames(
                'moonstone-separator',
                `moonstone-separator_${variant}`,
                `moonstone-size_${size}`,
                `moonstone-spacing_${spacing}`,
                invisible && `moonstone-invisible_${invisible}`,
                className
            )}
        />
    );
};

Separator.displayName = 'Separator';

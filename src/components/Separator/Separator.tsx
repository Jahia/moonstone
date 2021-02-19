import React from 'react';
import clsx from 'clsx';
import './Separator.scss';

type TSeparatorSpacings = 'none' | 'small' | 'medium' | 'big';
export enum SeparatorSpacings {
    None = 'none',
    Small = 'small',
    Medium = 'medium',
    Big = 'big'
}

type TSeparatorSizes = 'medium' | 'large' | 'full';
export enum SeparatorSizes {
    Medium = 'medium',
    Large = 'large',
    Full = 'full'
}

type TSeparatorVariants = 'horizontal' | 'vertical';
export enum SeparatorVariants {
    Horizontal = 'horizontal',
    Vertical = 'vertical'
}

type TSeparatorInvisible = 'firstChild' | 'lastChild' | 'onlyChild' | 'firstOrLastChild';
export enum SeparatorInvisible {
    FirstChild = 'firstChild',
    LastChild = 'lastChild',
    OnlyChild = 'onlyChild',
    FirstOrLastChild = 'firstOrLastChild'
}

interface SeparatorProps {
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

export const Separator: React.FC<SeparatorProps> = ({
    size = SeparatorSizes.Full,
    spacing = SeparatorSpacings.Small,
    variant = SeparatorVariants.Horizontal,
    invisible = null,
    className,
    ...props
}) => {
    return (
        <hr {...props}
            className={clsx(
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

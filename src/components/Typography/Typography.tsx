import React from 'react';
import clsx from 'clsx';
import './Typography.scss';
import type {TypographyProps} from './Typography.types';

export const Typography = <C extends React.ElementType = 'p'> ({
    children = '',
    component,
    variant = 'body',
    weight = 'default',
    className = '',
    hasLineThrough = false,
    isItalic = false,
    isUpperCase = false,
    isNowrap = false,
    ...props
}:TypographyProps<C>) => {
    if (!children) {
        return null;
    }

    const Component = component || 'p';

    return (
        <Component
            className={clsx(
                'moonstone-typography',
                `moonstone-variant_${variant}`,
                `moonstone-weight_${weight}`,
                className,
                {'moonstone-nowrap': isNowrap},
                {'moonstone-italic': isItalic},
                {'moonstone-upperCase': isUpperCase},
                {'moonstone-lineThrough': hasLineThrough}
            )}
            {...props}
        >
            {children}
        </Component>
    );
};

Typography.displayName = 'Typography';

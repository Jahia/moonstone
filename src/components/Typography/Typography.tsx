import React from 'react';
import clsx from 'clsx';
import './Typography.scss';
import {TypographyProps} from './Typography.types';

// IsHtml prop should eventually be removed (along with this function) as children supports all React Node types
// including strings and HTML markup
// const filterOutIsHtml = (props: TypographyProps) => {
//     const newProps = {...props};
//     if (newProps.isHtml) {
//         delete newProps.isHtml;
//     }

//     return newProps;
// };

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
    isHtml = false,
    ...props
}: TypographyProps<C>) => {
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

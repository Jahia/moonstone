import React from 'react';
import clsx from 'clsx';
import styles from './Typography.module.scss';
import type {PolymorphicComponent} from '~/types/Polymorphic.types';
import type {BasicTypographyProps, TypographyProps} from './Typography.types';
import {reset} from '~/globals/css-utils.js';

export const Typography = React.forwardRef(<C extends React.ElementType = 'p'> ({
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
}:TypographyProps<C>,
    ref: React.Ref<Element>) => {
    if (!children) {
        return null;
    }

    const Component = component || 'p';

    return (
        <Component
            ref={ref}
            className={clsx(
                reset,
                ['moonstone-typography', styles['moonstone-typography']],
                [`moonstone-variant_${variant}`, styles[`moonstone-variant_${variant}`]],
                [`moonstone-weight_${weight}`, weight !== 'default' && styles[`moonstone-weight_${weight}`]],
                className,
                isNowrap && ['moonstone-nowrap', styles['moonstone-nowrap']],
                isItalic && ['moonstone-italic', styles['moonstone-italic']],
                isUpperCase && ['moonstone-upperCase', styles['moonstone-upperCase']],
                hasLineThrough && ['moonstone-lineThrough', styles['moonstone-lineThrough']]
            )}
            {...props}
        >
            {children}
        </Component>
    );
}) as unknown as PolymorphicComponent<'p', BasicTypographyProps>;

Typography.displayName = 'Typography';

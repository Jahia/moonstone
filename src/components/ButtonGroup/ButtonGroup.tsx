import clsx from 'clsx';
import React from 'react';

import { layout } from '~/globals/css-utils.js';

import type { ButtonGroupProps } from './ButtonGroup.types';

import styles from './ButtonGroup.module.scss';

export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(({
    size = 'default',
    isReversed = false,
    variant = 'default',
    color = 'default',
    className = null,
    children,
    ...props
}, ref) => {
    if (!children || React.Children.count(children) < 1) {
        return null;
    }

    return (
        <div
            className={clsx(
                ['moonstone-buttonGroup', styles['moonstone-buttonGroup']],
                className,
                ['flexRow', layout.flexRow],
                ['alignCenter', layout.alignCenter],
            )}
            ref={ref}
            role="group"
            {...props}
            data-color={color}
            data-size={size}
            data-variant={variant}
        >
            {
                React.Children.map(children, (button) => {
                    if (!React.isValidElement(button)) {
                        return null;
                    }

                    return React.cloneElement(button, {
                        isReversed,
                        color,
                        size,
                        variant,
                    });
                })
            }
        </div>
    );
});

ButtonGroup.displayName = 'ButtonGroup';

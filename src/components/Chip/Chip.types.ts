import * as React from 'react';

export type ChipProps = Omit<React.ComponentPropsWithoutRef<'div'>, 'className'> & {
    /**
     * Chip label
     */
    label?: string;

    /**
     * Chip color
     */
    color?: 'default' | 'accent' | 'success' | 'warning' | 'danger' | 'reassuring' | 'light';

    /**
     * Chip icon
     */
    icon?: React.ReactElement;

    /**
     * Additional classnames
     */
    className?: string;

    /**
     * Whether the chip should be disabled
     */
    isDisabled?: boolean;
}


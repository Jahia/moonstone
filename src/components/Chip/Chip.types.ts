import * as React from 'react';

export type ChipProps = React.ComponentPropsWithoutRef<'div'> & {
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


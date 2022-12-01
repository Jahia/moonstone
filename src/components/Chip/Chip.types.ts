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
     * Additional classname
     */
    // className?: string;
    /**
     * Is this component disabled
     */
    isDisabled?: boolean;
}


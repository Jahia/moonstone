import React from 'react';

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
     * Color variant
     */
    variant?: 'default' | 'bright';
    /**
     * Chip icon
     */
    icon?: React.ReactElement;
    /**
     * Additional classname
     */
    className?: string;
    /**
     * Whether the component should be disabled
     */
    isDisabled?: boolean;
}


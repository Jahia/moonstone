import * as React from 'react';

export type ChipProps = {
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
     * Is this component disabled
     */
    isDisabled?: boolean;
}


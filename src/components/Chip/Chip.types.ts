import * as React from 'react';

export type ChipColor = 'default' | 'accent' | 'success' | 'warning' | 'danger' | 'reassuring';
export const colors = ['default', 'accent', 'success', 'warning', 'danger', 'reassuring'];

export type ChipProps = {
    /**
     * Chip label
     */
    label?: string;
    /**
     * Chip color
     */
    color?: ChipColor;
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


import * as React from 'react';

export type ChipColor = "default" | "accent" | "success" | "warning" | "danger" | "reassuring";

export interface ChipProps {
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
    icon?: React.ReactNode;
    /**
     * Additional classname
     */
    className?: string;
    /**
     * Is this component disabled
     */
    isDisabled?: boolean;
}

export const Chip: React.SFC<ChipProps>;


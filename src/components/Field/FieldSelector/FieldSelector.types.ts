import React from 'react';

export type FieldSelectorProps = Omit<React.ComponentPropsWithRef<'div'>, 'className'> & {
    /**
     * Additional classname
     */
    className?: string;

    /**
     * FieldSelector buttons
     */
    buttons?: React.ReactElement;

    /**
     * FieldSelector isDraggable
     */
    isDraggable?: boolean;

    /**
     * FieldSelector selector
     */
    selector: React.ReactElement;

    /**
     * ID to apply to the selector element for label association
     */
    inputId?: string;

    /**
     * Aria-describedby to apply to the selector for helper text association
     */
    'aria-describedby'?: string;
};

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
};

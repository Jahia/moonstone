import * as React from 'react';

export type FieldSelectorProps = {
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

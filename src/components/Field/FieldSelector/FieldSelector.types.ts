import React from 'react';

/**
 * @deprecated FieldSelector is deprecated and will be removed in a future release.
 */
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
     *
     * @deprecated Only displays the drag handle, it does not handle the drag and drop.
     */
    isDraggable?: boolean;

    /**
     * FieldSelector selector
     */
    selector: React.ReactElement;
};

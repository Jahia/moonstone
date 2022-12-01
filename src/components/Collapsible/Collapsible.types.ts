import React from 'react';

export type CollapsibleProps = React.ComponentPropsWithRef<'div'> & {
    /**
     * Label of collapse section
     */
    label: string;

    /**
     * Identifies the element for accessibility purpose
     */
    // id?: string;

    /**
     * Content of the collapsible
     */
    children: React.ReactNode;

    /**
     * Additional classname
     */
    // className?: string;

    /**
     * Function trigger on click
     */
    onClick?: React.MouseEventHandler;

    /**
     * The expanded state of the collapsible when it is initially rendered.
     */
    isDefaultExpanded?: boolean;

    /**
     * The controlled open state of the collapsible. Must be used in conjunction with onClick.
     */
    isExpanded?: boolean;
}

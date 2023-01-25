import * as React from 'react';

export type BreadcrumbItemProps = React.ComponentPropsWithoutRef<'button'> & {
    /**
     * Additional classnames
     */
    className?: string;

    /**
     * Label of the BreadcrumbItem
     */
    label: string;

    /**
     * Icon display before the label
     */
    icon?: React.ReactElement;

    /**
     * Function triggered on click
     */
    onClick?: React.MouseEventHandler;
}


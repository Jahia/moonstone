import * as React from 'react';

export type BreadcrumbItemProps = {
    /**
     * Additional classname
     */
    className?: string;
    /**
     * Additional classname
     */
    label?: string;
    /**
     * Icon name, if it's empty the item has no icon
     */
    icon?: React.ReactElement;
    /**
     * Function trigger on click
     */
    onClick?: React.MouseEventHandler;
}


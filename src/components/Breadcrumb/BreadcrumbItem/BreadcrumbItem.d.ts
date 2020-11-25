import * as React from 'react';

export interface BreadcrumbItemProps {
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
    icon?: React.ReactElement<any>;
    /**
     * Function trigger on click
     */
    onClick: (...args: any[])=>any;
}

export const BreadcrumbItem: React.SFC<BreadcrumbItemProps>;


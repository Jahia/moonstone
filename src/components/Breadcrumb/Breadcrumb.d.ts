import * as React from 'react';

export interface BreadcrumbProps {
    /**
     * Additional classname
     */
    className?: string;
    /**
     * Content of the component
     */
    children?: React.ReactNode;
}

export const Breadcrumb: React.SFC<BreadcrumbProps>;


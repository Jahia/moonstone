import * as React from 'react';

export type BreadcrumbProps = React.ComponentPropsWithoutRef<'div'> & {
    /**
     * Additional classname
     */
    // className?: string;
    /**
     * Content of the component
     */
    children?: React.ReactNode;
}


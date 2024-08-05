import * as React from 'react';

export type BreadcrumbProps = Omit<React.ComponentPropsWithoutRef<'div'>, 'children'| 'className'> & {
    /**
     * Additional classname
     */
    className?: string;
    /**
     * Content of the component
     */
    children?: React.ReactNode;
}


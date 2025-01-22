import * as React from 'react';
import type {BreadcrumbItemProps} from './BreadcrumbItem/BreadcrumbItem.types';

export type BreadcrumbProps = Omit<React.ComponentPropsWithoutRef<'div'>, 'children'| 'className'> & {
    /**
     * Additional classname
     */
    className?: string;
    /**
     * BreadcrumbItems children
     */
    children?: React.ReactElement<BreadcrumbItemProps> | React.ReactElement<BreadcrumbItemProps>[];
}

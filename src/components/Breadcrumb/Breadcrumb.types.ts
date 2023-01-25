import * as React from 'react';
import type {BreadcrumbItemProps} from './BreadcrumbItem/BreadcrumbItem.types';

export type BreadcrumbProps = React.ComponentPropsWithoutRef<'div'> & {
    /**
     * Additional classnames
     */
    className?: string;

    /**
     * BreadcrumbItems children
     */
    children?: React.ReactElement<BreadcrumbItemProps> | React.ReactElement<BreadcrumbItemProps>[];
}


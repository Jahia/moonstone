import * as React from 'react';

import type { BreadcrumbItemProps } from './BreadcrumbItem/BreadcrumbItem.types';

export type BreadcrumbProps = Omit<React.ComponentPropsWithoutRef<'div'>, 'children' | 'className'> & {
    /**
     * Additional class name.
     */
    className?: string;
    /**
     * The BreadcrumbItem components, from the root to the current page.
     */
    children?: React.ReactElement<BreadcrumbItemProps> | React.ReactElement<BreadcrumbItemProps>[];
};

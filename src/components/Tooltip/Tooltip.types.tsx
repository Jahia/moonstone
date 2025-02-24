import * as React from 'react';

export type TooltipProps = Omit<React.ComponentPropsWithoutRef<'span'>, 'className'> & {
    /**
     * Label display in the tooltip
     */
    label: string;

    /**
     * Tooltip's anchor
     */
    children: React.ReactElement;

    /**
     * Additional classname
     */
    className?: string;

}

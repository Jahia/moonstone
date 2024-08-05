import * as React from 'react';
import type {ButtonProps} from '~/components/Button/Button.types';

export type BreadcrumbItemProps = Omit<ButtonProps, 'variant' | 'size'> & {
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


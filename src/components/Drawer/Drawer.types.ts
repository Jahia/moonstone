import {ReactNode} from 'react';
import type {PaperProps} from '~/components/Paper/Paper.types';

export type DrawerProps = Omit<PaperProps, 'className' | 'children'> & {
    /**
     * Content of the Drawer
     */
    children?: ReactNode;

    /**
     * Whether the Drawer is open
     */
    isOpen?: boolean;

    /**
     * Additional classname
     */
    className?: string;
}

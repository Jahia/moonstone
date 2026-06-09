import {ReactNode} from 'react';

export type DrawerProps = Omit<React.ComponentPropsWithRef<'section'>, 'className' | 'children'> & {
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

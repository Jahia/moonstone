import {ReactNode} from 'react';

export type DrawerProps = Omit<React.ComponentPropsWithRef<'div'>, 'className' | 'children'> & {
    /**
     * Content of the Drawer
     */
    children: ReactNode;

    /**
     * Whether the Drawer is open
     */
    isOpen: boolean;

    /**
     * Callback fired when the open state changes (e.g. ESC key, click outside)
     */
    onOpenChange?: (open: boolean) => void;

    /**
     * Size of the Drawer
     */
    size?: 'small' | 'medium' | 'large';

    /**
     * Additional classname
     */
    className?: string;
}

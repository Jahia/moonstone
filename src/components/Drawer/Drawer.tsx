import React from 'react';
import clsx from 'clsx';
import type {DrawerProps} from './Drawer.types';
import {Paper} from '~/components/Paper';
import styles from './Drawer.module.scss';

export const Drawer = React.forwardRef<HTMLElement, DrawerProps>(({
    className,
    isOpen = false,
    children,
    ...props
}, ref) => {
    return (
        isOpen && (
            <Paper
                ref={ref}
                className={clsx(styles.drawer, className)}
                {...props}
            >
                {children}
            </Paper>
        )
    );
});

Drawer.displayName = 'Drawer';

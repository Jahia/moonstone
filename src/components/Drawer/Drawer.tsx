import React from 'react';
import clsx from 'clsx';
import type {PolymorphicComponent} from '~/types/Polymorphic.types';
import type {PaperProps} from '~/components/Paper/Paper.types';
import type {BasicDrawerProps, DrawerProps} from './Drawer.types';
import {Paper} from '~/components/Paper';
import {usePresence} from '~/hooks';
import styles from './Drawer.module.scss';

export const Drawer = React.forwardRef(<C extends React.ElementType = 'aside'>({
    className,
    isOpen = false,
    children,
    component,
    ...props
}: DrawerProps<C>,
    ref: React.Ref<HTMLElement>) => {
    return (
        isPresent && (
            <Paper
                ref={ref}
                component={component || 'aside'}
                className={clsx(styles.drawer, className)}
                {...props as PaperProps}
            >
                {children}
            </Paper>
        )
    );
}) as unknown as PolymorphicComponent<'aside', BasicDrawerProps>;

Drawer.displayName = 'Drawer';

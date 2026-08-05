import React from 'react';
import clsx from 'clsx';
import type {DrawerProps} from './Drawer.types';
import {Paper} from '~/components/Paper';
import {usePresence} from '~/hooks';
import styles from './Drawer.module.scss';

// Duration of the slide animation, in ms.
// Feeds both the usePresence unmount delay and the CSS (via the --drawer-animation-duration custom property)
const ANIMATION_DURATION = 400;

export const Drawer = React.forwardRef<HTMLElement, DrawerProps>(({
    className,
    isOpen = false,
    children,
    style,
    ...props
}, ref) => {
    const {isPresent, state} = usePresence(isOpen, ANIMATION_DURATION);

    return (
        isPresent && (
            <Paper
                ref={ref}
                className={clsx(styles.drawer, className)}
                {...props}
                style={{...style, '--drawer-animation-duration': `${ANIMATION_DURATION}ms`} as React.CSSProperties}
                data-state={state}
            >
                {children}
            </Paper>
        )
    );
});

Drawer.displayName = 'Drawer';

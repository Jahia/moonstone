import React from 'react';
import clsx from 'clsx';
import type {PolymorphicComponent} from '~/types/Polymorphic.types';
import type {PaperProps} from '~/components/Paper/Paper.types';
import type {BasicDrawerProps, DrawerProps} from './Drawer.types';
import {Paper} from '~/components/Paper';
import {usePresence} from '~/hooks';
import styles from './Drawer.module.scss';

// Duration of the slide animation, in ms.
// Feeds both the usePresence unmount delay and the CSS (via the --drawer-animation-duration custom property)
const ANIMATION_DURATION = 400;

export const Drawer = React.forwardRef(<C extends React.ElementType = 'aside'>({
    className,
    isOpen = false,
    children,
    component,
    style,
    ...props
}: DrawerProps<C>,
    ref: React.Ref<HTMLElement>) => {
    const {isPresent, state} = usePresence(isOpen, ANIMATION_DURATION);

    return (
        isPresent && (
            <Paper
                ref={ref}
                component={component || 'aside'}
                className={clsx(styles.drawer, className)}
                {...props as PaperProps}
                style={{...style, '--drawer-animation-duration': `${ANIMATION_DURATION}ms`} as React.CSSProperties}
                data-state={state}
            >
                {children}
            </Paper>
        )
    );
}) as unknown as PolymorphicComponent<'aside', BasicDrawerProps>;

Drawer.displayName = 'Drawer';

import React from 'react';
import clsx from 'clsx';
import type {PolymorphicComponent} from '~/types/Polymorphic.types';
import type {BasicPaperProps, PaperProps} from '~/components/Paper/Paper.types';
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

    // The <C> resolved by Drawer's own polymorphism can't be statically verified against Paper's
    // independent <C> at the same time, so the merged prop bag is cast once as an escape hatch.
    const paperProps = {
        ref,
        component: component || 'aside',
        className: clsx(styles.drawer, className),
        ...props as BasicPaperProps,
        style: {...style, '--drawer-animation-duration': `${ANIMATION_DURATION}ms`} as React.CSSProperties,
        'data-state': state,
        children
    } as unknown as PaperProps<C>;

    return (
        isPresent && <Paper {...paperProps}/>
    );
}) as unknown as PolymorphicComponent<'aside', BasicDrawerProps>;

Drawer.displayName = 'Drawer';

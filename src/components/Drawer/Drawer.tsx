import { useMergeRefs } from '@floating-ui/react';
import clsx from 'clsx';
import React, { useEffect, useRef } from 'react';

import { Paper } from '~/components/Paper';
import { mergeHandlers, usePresence } from '~/hooks';

import type { BasicDrawerProps, DrawerProps } from './Drawer.types';
import type { BasicPaperProps, PaperProps } from '~/components/Paper/Paper.types';
import type { PolymorphicComponent } from '~/types/Polymorphic.types';

import styles from './Drawer.module.scss';

// Duration of the slide animation, in ms.
// Feeds both the usePresence unmount delay and the CSS (via the --drawer-animation-duration custom property)
const ANIMATION_DURATION = 400;

// The elements Tab reaches: `tabindex="-1"` leaves out the inactive items of a tab list, menu or tree
const FOCUSABLE = ':is(a[href], button, input:not([type="hidden"]), select, textarea, [tabindex]):not(:disabled, [tabindex="-1"])';

export const Drawer = React.forwardRef(<C extends React.ElementType = 'aside'>({
    className,
    isOpen = false,
    onOpenChange,
    children,
    component,
    style,
    ...props
}: DrawerProps<C>,
    ref: React.Ref<HTMLElement>) => {
    const { isPresent, state } = usePresence(isOpen, ANIMATION_DURATION);

    const drawerRef = useRef<HTMLElement>(null);
    const mergedRef = useMergeRefs([drawerRef, ref]);
    const wasOpen = useRef(isOpen);
    const returnFocusTo = useRef<HTMLElement | null>(null);

    // Focus moves only when `isOpen` changes, not on mount: a Drawer rendered open was not opened by the user
    useEffect(() => {
        if (isOpen === wasOpen.current) {
            return;
        }

        wasOpen.current = isOpen;
        if (isOpen) {
            returnFocusTo.current = document.activeElement as HTMLElement | null;
            // The Drawer is still off-screen at the start of its slide-in, so focus must not scroll to it
            drawerRef.current?.querySelector<HTMLElement>(FOCUSABLE)?.focus({ preventScroll: true });
        } else if (drawerRef.current?.contains(document.activeElement)) {
            returnFocusTo.current?.focus();
        }
    }, [isOpen]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        const hasModifier = e.shiftKey || e.ctrlKey || e.metaKey || e.altKey;
        if (e.defaultPrevented || hasModifier || e.key !== 'Escape' || !onOpenChange) {
            return;
        }

        // Stops a Modal around the Drawer from closing on the same Escape
        e.stopPropagation();
        onOpenChange(false);
    };

    // The <C> resolved by Drawer's own polymorphism can't be statically verified against Paper's
    // independent <C> at the same time, so the merged prop bag is cast once as an escape hatch.
    const paperProps = {
        'ref': mergedRef,
        'component': component || 'aside',
        'className': clsx(styles.drawer, className),
        ...mergeHandlers(props, { onKeyDown: handleKeyDown }) as BasicPaperProps,
        'style': {
            ...style,
            '--drawer-animation-duration': `${ANIMATION_DURATION}ms`,
        } as React.CSSProperties,
        'data-state': state,
        children,
    } as unknown as PaperProps<C>;

    return (
        isPresent && <Paper {...paperProps}/>
    );
}) as unknown as PolymorphicComponent<'aside', BasicDrawerProps>;

Drawer.displayName = 'Drawer';

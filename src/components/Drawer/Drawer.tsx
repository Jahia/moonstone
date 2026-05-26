import React from 'react';
import clsx from 'clsx';
import type {DrawerProps} from './Drawer.types';
import {
    useFloating,
    useDismiss,
    useRole,
    useInteractions,
    useMergeRefs,
    FloatingFocusManager,
    FloatingOverlay,
    FloatingPortal
} from '@floating-ui/react';
import {reset} from '~/globals/css-utils.js';
import styles from './Drawer.module.scss';

const DrawerForwardRef: React.ForwardRefRenderFunction<HTMLDivElement, DrawerProps> = ({
    className,
    isOpen = false,
    onOpenChange,
    size = 'medium',
    children,
    ...props
}, ref) => {
    const {refs, context} = useFloating({
        open: isOpen,
        onOpenChange
    });

    const drawerRef = useMergeRefs([refs.setFloating, ref]);

    const role = useRole(context, {role: 'dialog'});
    const dismiss = useDismiss(context, {outsidePressEvent: 'mousedown'});

    const {getFloatingProps} = useInteractions([
        role,
        dismiss
    ]);

    return (
        children && isOpen && (
            <FloatingPortal>
                <FloatingOverlay lockScroll className={clsx('moonstone-drawer_overlay', styles['moonstone-drawer_overlay'])}>
                    <FloatingFocusManager context={context}>
                        <div
                            ref={drawerRef}
                            className={clsx(
                                reset,
                                ['moonstone-drawer', styles['moonstone-drawer']],
                                [`moonstone-drawer_${size}`, styles[`moonstone-drawer_${size}`]],
                                className
                            )}
                            aria-modal="true"
                            {...getFloatingProps()}
                            {...props}
                        >
                            {children}
                        </div>
                    </FloatingFocusManager>
                </FloatingOverlay>
            </FloatingPortal>
        )
    );
};

export const Drawer = React.forwardRef(DrawerForwardRef);

Drawer.displayName = 'Drawer';

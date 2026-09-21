import {
    FloatingFocusManager,
    FloatingOverlay,
    FloatingPortal,
    useClick,
    useDismiss,
    useFloating,
    useId,
    useInteractions,
    useMergeRefs,
    useRole,
} from '@floating-ui/react';
import clsx from 'clsx';
import React from 'react';

import { layout } from '~/globals/css-utils.js';

import type { ModalProps } from './Modal.types';

import styles from './Modal.module.scss';

const ModalForwardRef: React.ForwardRefRenderFunction<HTMLDivElement, ModalProps> = ({
    className,
    isOpen,
    onOpenChange,
    size = 'medium',
    children,
    ...props
}, ref) => {
    const { refs, context } = useFloating({
        open: isOpen,
        onOpenChange,
    });

    const modalRef = useMergeRefs([refs.setFloating, ref]);

    const click = useClick(context);
    const role = useRole(context);
    const dismiss = useDismiss(context, { outsidePressEvent: 'mousedown' });

    const { getFloatingProps } = useInteractions([
        click,
        role,
        dismiss,
    ]);

    const headingId = useId();

    return (
        children && isOpen && (
            <FloatingPortal>
                <FloatingOverlay lockScroll className={clsx('moonstone-modal_overlay', styles['moonstone-modal_overlay'])}>
                    {/* FloatingFocusManager handles context to allow each modal to be treated separately
                (e.g if a modal is inside a modal: pressing esc will only close the last one open) */}
                    <FloatingFocusManager context={context}>
                        <div
                            aria-labelledby={`moonstone-modal_${headingId}`}
                            aria-modal="true"
                            className={clsx(
                                ['moonstone-modal', styles['moonstone-modal']],
                                [`moonstone-modal_${size}`, styles[`moonstone-modal_${size}`]],
                                ['flexCol_nowrap', layout.flexCol_nowrap],
                                className,
                            )}
                            ref={modalRef}
                            {...getFloatingProps()}
                            id={`moonstone-modal_${headingId}`}
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

export const Modal = React.forwardRef(ModalForwardRef);

Modal.displayName = 'Modal';

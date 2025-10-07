import React from 'react';
import clsx from 'clsx';
import type {ModalProps} from './Modal.types';
import './Modal.scss';
import {
    useFloating,
    useDismiss,
    useRole,
    useClick,
    useInteractions,
    useId,
    useMergeRefs,
    FloatingFocusManager,
    FloatingOverlay,
    FloatingPortal
} from '@floating-ui/react';

const ModalForwardRef: React.ForwardRefRenderFunction<HTMLDivElement, ModalProps> = ({
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

    const modalRef = useMergeRefs([refs.setFloating, ref]);

    const click = useClick(context);
    const role = useRole(context);
    const dismiss = useDismiss(context, {outsidePressEvent: 'mousedown'});

    const {getFloatingProps} = useInteractions([
        click,
        role,
        dismiss
    ]);

    const headingId = useId();

    return (
        children && isOpen && (
        <FloatingPortal>
            <FloatingOverlay lockScroll className="moonstone-modal_overlay">
                {/* FloatingFocusManager handles context to allow each modal to be treated separately
                (e.g if a modal is inside a modal: pressing esc will only close the last one open) */}
                <FloatingFocusManager context={context}>
                    <div
                        ref={modalRef}
                        className={clsx('moonstone-modal', `moonstone-modal_${size}`, 'flexCol_nowrap', className)}
                        aria-labelledby={`moonstone-modal_${headingId}`}
                        aria-modal="true"
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

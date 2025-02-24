import React, {useState} from 'react';
import clsx from 'clsx';
import './Modal.scss';
import type {ModalProps} from './Modal.types';
import {useFloating, useInteractions, useClick, FloatingFocusManager} from '@floating-ui/react';
import {Typography} from '~/main';

export const Modal = ({
    label,
    helper,
    children,
    actions,
    className,
    ...props
}: ModalProps) => {
    // Floating UI manages everything from the onClick to the display by using isOpen
    const [isOpen, setIsOpen] = useState(false);

    const {refs, context} = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen
    });

    const click = useClick(context);

    const {getReferenceProps, getFloatingProps} = useInteractions([
        click
    ]);

    return (
        <div
            ref={refs.setReference}
            className={clsx('moonstone-modal_container', className)}
            {...getReferenceProps()}
            {...props}
        >
            {/* children is the element to interact with in order for the modal to pop up */}
            {children}
            {isOpen &&
            // TODO: ensure that closeOnFocusOut works and that clicking outside of the modal closes it.
            <FloatingFocusManager closeOnFocusOut context={context}>
                <div ref={refs.setFloating} className={clsx('moonstone-modal')} {...getFloatingProps()}>
                    {label}
                    {helper &&
                    <Typography variant="caption" color="var(--color-dark_plain60)">{helper}</Typography>}
                    {actions &&
                    <div className={clsx('moonstone-modal_actions')}>
                        {actions}
                    </div>}
                </div>
            </FloatingFocusManager>}
        </div>
    );
};

Modal.displayName = 'Modal';

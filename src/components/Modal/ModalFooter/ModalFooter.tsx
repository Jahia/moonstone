import React from 'react';
import clsx from 'clsx';
import type {ModalFooterProps} from './ModalFooter.types';
import './ModalFooter.scss';

const ModalFooterForwardRef: React.ForwardRefRenderFunction<HTMLDivElement, ModalFooterProps> = ({
    children,
    ...props
}, ref) => {
    return (
        <div
            ref={ref}
            className={clsx('moonstone-modal-footer')}
            {...props}
        >
            {children && children}
        </div>
    );
};

export const ModalFooter = React.forwardRef(ModalFooterForwardRef);

ModalFooter.displayName = 'ModalFooter';

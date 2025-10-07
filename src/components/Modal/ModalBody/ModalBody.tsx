import React from 'react';
import clsx from 'clsx';
import type {ModalBodyProps} from './ModalBody.types';
import './ModalBody.scss';

const ModalBodyForwardRef: React.ForwardRefRenderFunction<HTMLDivElement, ModalBodyProps> = ({
    children,
    className,
    ...props
}, ref) => {
    return (
        children &&
        <div
            ref={ref}
            className={clsx('moonstone-modalBody', className)}
            {...props}
        >
            {children}
        </div>
    );
};

export const ModalBody = React.forwardRef(ModalBodyForwardRef);

ModalBody.displayName = 'ModalBody';

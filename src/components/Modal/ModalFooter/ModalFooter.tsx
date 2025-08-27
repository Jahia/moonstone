import React from 'react';
import clsx from 'clsx';
import type {ModalFooterProps} from './ModalFooter.types';
import './ModalFooter.scss';

const ModalFooterForwardRef: React.ForwardRefRenderFunction<HTMLDivElement, ModalFooterProps> = ({
    children,
    className,
    ...props
}, ref) => {
    return (
        <footer
            ref={ref}
            className={clsx('moonstone-modalFooter', 'alignCenter', 'flexRow_reverse', className)}
            {...props}
        >
            {children && children}
        </footer>
    );
};

export const ModalFooter = React.forwardRef(ModalFooterForwardRef);

ModalFooter.displayName = 'ModalFooter';

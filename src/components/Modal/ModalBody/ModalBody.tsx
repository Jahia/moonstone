import clsx from 'clsx';
import React from 'react';

import type { ModalBodyProps } from './ModalBody.types';

import styles from './ModalBody.module.scss';

const ModalBodyForwardRef: React.ForwardRefRenderFunction<HTMLDivElement, ModalBodyProps> = ({
    children,
    className,
    ...props
}, ref) => {
    return (
        children
        && (
            <div
                className={clsx('moonstone-modalBody', styles['moonstone-modalBody'], className)}
                ref={ref}
                {...props}
            >
                {children}
            </div>
        )
    );
};

export const ModalBody = React.forwardRef(ModalBodyForwardRef);

ModalBody.displayName = 'ModalBody';

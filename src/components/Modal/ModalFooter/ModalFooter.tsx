import React from 'react';
import clsx from 'clsx';
import type {ModalFooterProps} from './ModalFooter.types';
import styles from './ModalFooter.module.scss';
import {layout} from '~/globals/css-utils.js';

const ModalFooterForwardRef: React.ForwardRefRenderFunction<HTMLDivElement, ModalFooterProps> = ({
    children,
    className,
    ...props
}, ref) => {
    return (
        children &&
        <footer
            ref={ref}
            className={clsx(
                ['moonstone-modalFooter', styles['moonstone-modalFooter']],
                ['alignCenter', layout.alignCenter],
                ['flexRow_reverse', layout.flexRow_reverse],
                className
            )}
            {...props}
        >
            {children}
        </footer>
    );
};

export const ModalFooter = React.forwardRef(ModalFooterForwardRef);

ModalFooter.displayName = 'ModalFooter';

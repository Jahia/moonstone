import clsx from 'clsx';
import React from 'react';

import { layout } from '~/globals/css-utils.js';

import type { ModalFooterProps } from './ModalFooter.types';

import styles from './ModalFooter.module.scss';

const ModalFooterForwardRef: React.ForwardRefRenderFunction<HTMLDivElement, ModalFooterProps> = ({
    children,
    className,
    ...props
}, ref) => {
    return (
        children
        && (
            <footer
                className={clsx(
                    ['moonstone-modalFooter', styles['moonstone-modalFooter']],
                    ['alignCenter', layout.alignCenter],
                    ['flexRow_reverse', layout.flexRow_reverse],
                    className,
                )}
                ref={ref}
                {...props}
            >
                {children}
            </footer>
        )
    );
};

export const ModalFooter = React.forwardRef(ModalFooterForwardRef);

ModalFooter.displayName = 'ModalFooter';

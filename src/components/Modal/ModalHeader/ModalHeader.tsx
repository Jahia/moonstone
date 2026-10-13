import clsx from 'clsx';
import React, { useContext, useLayoutEffect } from 'react';

import { ModalContext } from '../Modal.context';
import { Typography } from '~/components';
import { layout } from '~/globals/css-utils.js';

import type { ModalHeaderProps } from './ModalHeader.types';

import styles from './ModalHeader.module.scss';

const ModalHeaderForwardRef: React.ForwardRefRenderFunction<HTMLDivElement, ModalHeaderProps> = ({
    title,
    children,
    className,
    ...props
}, ref) => {
    const modalContext = useContext(ModalContext);

    // Runs before the focus moves into the modal, so the modal is named when it is announced
    useLayoutEffect(() => {
        if (!modalContext || !title) {
            return undefined;
        }

        modalContext.setHasTitle(true);
        return () => modalContext.setHasTitle(false);
    }, [modalContext, title]);

    return (
        title
        && (
            <header
                className={clsx(
                    ['moonstone-modalHeader', styles['moonstone-modalHeader']],
                    ['flexCol_nowrap', layout.flexCol_nowrap],
                    className,
                )}
                ref={ref}
                {...props}
            >
                <Typography component="h4" id={modalContext?.titleId} variant="heading" weight="bold">
                    {title}
                </Typography>
                {children
                    && (
                        <Typography className={clsx('moonstone-banner_content')} component="div" variant="body">
                            {children}
                        </Typography>
                    )}
            </header>
        )
    );
};

export const ModalHeader = React.forwardRef(ModalHeaderForwardRef);

ModalHeader.displayName = 'ModalHeader';

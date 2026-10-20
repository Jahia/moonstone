import clsx from 'clsx';
import React, { useContext } from 'react';

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
    const { titleId } = useContext(ModalContext);

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
                <Typography component="h4" id={titleId} variant="heading" weight="bold">
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

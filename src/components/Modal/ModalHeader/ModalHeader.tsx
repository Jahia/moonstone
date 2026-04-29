import React from 'react';
import clsx from 'clsx';
import type {ModalHeaderProps} from './ModalHeader.types';
import styles from './ModalHeader.module.scss';
import {Typography} from '~/components';
import {layout} from '~/globals/css-utils.js';

const ModalHeaderForwardRef: React.ForwardRefRenderFunction<HTMLDivElement, ModalHeaderProps> = ({
    title,
    children,
    className,
    ...props
}, ref) => {
    return (
        title &&
        <header
            ref={ref}
            className={clsx(
                ['moonstone-modalHeader', styles['moonstone-modalHeader']],
                ['flexCol_nowrap', layout.flexCol_nowrap],
                className
            )}
            {...props}
        >
            <Typography variant="heading" weight="bold" component="h4">
                {title}
            </Typography>
            {children &&
            <Typography variant="body" component="div" className={clsx('moonstone-banner_content')}>
                {children}
            </Typography>}
        </header>
    );
};

export const ModalHeader = React.forwardRef(ModalHeaderForwardRef);

ModalHeader.displayName = 'ModalHeader';

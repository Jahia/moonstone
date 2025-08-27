import React from 'react';
import clsx from 'clsx';
import type {ModalHeaderProps} from './ModalHeader.types';
import './ModalHeader.scss';
import {Typography} from '~/components';

const ModalHeaderForwardRef: React.ForwardRefRenderFunction<HTMLDivElement, ModalHeaderProps> = ({
    title,
    children,
    className,
    ...props
}, ref) => {
    return (
        <header
            ref={ref}
            className={clsx('moonstone-modalHeader', 'flexCol_nowrap', className)}
            {...props}
        >
            {title &&
            <Typography variant="heading" weight="bold" component="h4">
                {title}
            </Typography>}
            {children &&
            <Typography variant="body" component="div" className={clsx('moonstone-banner_content')}>
                {children}
            </Typography>}
        </header>
    );
};

export const ModalHeader = React.forwardRef(ModalHeaderForwardRef);

ModalHeader.displayName = 'ModalHeader';

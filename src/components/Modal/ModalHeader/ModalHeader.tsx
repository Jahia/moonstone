import React from 'react';
import clsx from 'clsx';
import type {ModalHeaderProps} from './ModalHeader.types';
import './ModalHeader.scss';
import {Typography} from '~/components';

const ModalHeaderForwardRef: React.ForwardRefRenderFunction<HTMLDivElement, ModalHeaderProps> = ({
    title,
    children,
    ...props
}, ref) => {
    return (
        <div
            ref={ref}
            className={clsx('moonstone-modal-header')}
            {...props}
        >
            <Typography variant="heading" weight="bold">
                {title}
            </Typography>
            {children &&
            <Typography variant="body" component="div" className={clsx('moonstone-banner_content')}>
                {children}
            </Typography>}
        </div>
    );
};

export const ModalHeader = React.forwardRef(ModalHeaderForwardRef);

ModalHeader.displayName = 'ModalHeader';

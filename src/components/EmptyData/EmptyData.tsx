import React from 'react';
import clsx from 'clsx';
import {Typography} from '~/components';
import {EmptyDataProps} from './EmptyData.types';
import './EmptyData.scss';

export const EmptyData: React.FC<EmptyDataProps> = ({
    title,
    message,
    icon,
    className,
    ...props
}) => {
    return (
        <div
            className={clsx(
                'moonstone-emptyData',
                'flexCol_center',
                'alignCenter',
                className
            )}
            {...props}
        >
            {icon && <div className="moonstone-emptyData_icon">{icon}</div>}
            {title && (
                <Typography variant="heading" weight="semiBold">
                    {title}
                </Typography>
            )}
            {message && <Typography variant="body">{message}</Typography>}
        </div>
    );
};

EmptyData.displayName = 'EmptyData';

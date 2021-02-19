import React from 'react';
import clsx from 'clsx';
import './BreadcrumbItem.scss';
import {Button} from '~/components/Button';
import {BreadcrumbItemProps} from './BreadcrumbItem.types';

export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({className = '', ...props}: BreadcrumbItemProps) => (
    <li className={clsx('moonstone-breadcrumbItem', 'flexRow_center')}>
        <Button {...props}
                variant="ghost"
                size="small"
                className={clsx(className)}
        />
    </li>
);

BreadcrumbItem.displayName = 'BreadcrumbItem';

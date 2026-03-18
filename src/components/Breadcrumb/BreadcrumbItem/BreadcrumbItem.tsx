import React from 'react';
import clsx from 'clsx';
import styles from './BreadcrumbItem.module.scss';
import {Button} from '~/components/Button';
import type {BreadcrumbItemProps} from './BreadcrumbItem.types';

export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({className = '', ...props}) => (
    <li className={clsx('moonstone-breadcrumbItem', styles.breadcrumbItem, 'flexRow_center')}>
        <Button {...props}
                variant="ghost"
                size="small"
                className={clsx(className)}
        />
    </li>
);

BreadcrumbItem.displayName = 'BreadcrumbItem';

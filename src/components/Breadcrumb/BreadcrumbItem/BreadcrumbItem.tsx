import React from 'react';
import clsx from 'clsx';
import styles from './BreadcrumbItem.module.scss';
import {Button} from '~/components/Button';
import type {BreadcrumbItemProps} from './BreadcrumbItem.types';
import {layout} from '~/globals/css-utils.js';

export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({className = '', ...props}) => (
    <li className={clsx(
            ['moonstone-breadcrumbItem', styles['moonstone-breadcrumbItem']],
            ['flexRow_center', layout.flexRow_center]
        )}
    >
        <Button {...props}
                variant="ghost"
                size="small"
                className={clsx(className)}
        />
    </li>
);

BreadcrumbItem.displayName = 'BreadcrumbItem';

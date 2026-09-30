import clsx from 'clsx';
import React from 'react';

import { Button } from '~/components/Button';
import { layout } from '~/globals/css-utils.js';

import type { BreadcrumbItemProps } from './BreadcrumbItem.types';

import styles from './BreadcrumbItem.module.scss';

export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({ className = '', ...props }) => (
    <li className={clsx(
        ['moonstone-breadcrumbItem', styles['moonstone-breadcrumbItem']],
        ['flexRow_center', layout.flexRow_center],
    )}
    >
        <Button
            {...props}
            className={clsx(className)}
            size="small"
            variant="ghost"
        />
    </li>
);

BreadcrumbItem.displayName = 'BreadcrumbItem';

import clsx from 'clsx';
import React from 'react';

import { ArrowDown, ArrowUp } from '~/icons';

import type { SortIndicatorProps } from './SortIndicator.types';

import styles from './SortIndicator.module.scss';

export const SortIndicator: React.FC<SortIndicatorProps> = ({
    direction = 'descending',
    isSorted = false,
    className,
    ...props
}) => {
    const classNameProps = clsx(
        ['moonstone-SortIndicator', styles['moonstone-SortIndicator']],
        isSorted && ['moonstone-SortIndicator-sorted', styles['moonstone-SortIndicator-sorted']],
        className,
    );

    if (direction === 'descending') {
        return <ArrowDown {...props} aria-label="Icon for sorting in descending order" className={classNameProps}/>;
    }

    if (direction === 'ascending') {
        return <ArrowUp {...props} aria-label="Icon for sorting in ascending order" className={classNameProps}/>;
    }
};

SortIndicator.displayName = 'SortIndicator';

import React from 'react';
import clsx from 'clsx';

import type {SortIndicatorProps} from './SortIndicator.types';
import {ArrowDown, ArrowUp} from '~/icons';
import {sortIndicatorStyles as styles} from '../styles';

export const SortIndicator: React.FC<SortIndicatorProps> = ({
    direction = 'descending',
    isSorted = false,
    className,
    ...props
}) => {
    const classNameProps = clsx(
        ['moonstone-SortIndicator', styles['moonstone-SortIndicator']],
        isSorted && ['moonstone-SortIndicator-sorted', styles['moonstone-SortIndicator-sorted']],
        className
    );

    if (direction === 'descending') {
        return <ArrowDown {...props} aria-label="Icon for sorting in descending order" className={classNameProps}/>;
    }

    if (direction === 'ascending') {
        return <ArrowUp {...props} aria-label="Icon for sorting in ascending order" className={classNameProps}/>;
    }
};

SortIndicator.displayName = 'SortIndicator';

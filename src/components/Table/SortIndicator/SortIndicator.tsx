import React from 'react';

import {SortIndicatorProps} from './SortIndicator.types';
import './SortIndicator.scss';
import {ArrowDown, ArrowUp} from '~/icons';
import clsx from 'clsx';

export const SortIndicator: React.FC<SortIndicatorProps> = ({
    direction = 'descending',
    isSorted = false,
    className,
    ...props
}) => {
    const classNameProps = clsx(
        'moonstone-SortIndicator',
        {'moonstone-SortIndicator-sorted': isSorted},
        className
    );

    if (direction === 'descending') {
        return <ArrowDown {...props} className={classNameProps} />;
    }
    if (direction === 'ascending') {
        return <ArrowUp {...props} className={classNameProps} />;
    }
};

SortIndicator.displayName = 'SortIndicator';

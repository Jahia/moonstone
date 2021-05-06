import React from 'react';
import clsx from 'clsx';

import {TableCellProps} from './tableCell.types';
import './TableHeadCell.scss';
import {Typography} from '~/components';
import {capitalize} from '~/utils/helpers';

export const TableHeadCell: React.FC<TableCellProps> = ({
    className,
    component = 'th',
    textAlign = 'left',
    verticalAlign = 'center',
    children,
    ...props
}) => {

    // what's the correct naming convention for these cell scss classes?
    return (
        <Typography
            className={clsx(
                'moonstone-tableHeadCell',
                'textAlign' + capitalize(textAlign),
                'moonstone-verticalAlign' + capitalize(verticalAlign),
                className
            )}
            component={component}
            weight="bold"
            variant="body"
            {...props}
        >
            {children}
        </Typography>
    );
};

TableHeadCell.displayName = 'TableHeadCell';

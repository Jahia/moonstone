import React from 'react';
import clsx from 'clsx';

import {TableCellProps} from './TableCell.types';
import './TableCell.scss';
import {Typography} from '~/components';
import {capitalize} from '~/utils/helpers';

export const TableCell: React.FC<TableCellProps> = ({
    className,
    component = 'td',
    horizontalAlign = 'left',
    verticalAlign = 'center',
    children,
    ...props
}) => {

    // what's the correct naming convention for these cell scss classes?
    return React.createElement(
        component,
        {
            className: clsx(
                'moonstone-table_cell',
                'horizontalAlign' + capitalize(horizontalAlign),
                'verticalAlign' + capitalize(verticalAlign),
                className
            ),
            ...props
        },
        component === 'th'
            // Not sure if we should wrap children in a Typography component here
            // Need a way for user to easily get the styling for th element
            // Could conditionally apply a class for bold text for the Table head cells here too
            ? <Typography weight="bold">{children}</Typography>
            : children
    );
};

TableCell.displayName = 'TableCell';

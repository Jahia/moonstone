import React from 'react';
import clsx from 'clsx';

import {TableCellProps} from './TableCell.types';
import './TableCell.scss';

export const TableCell: React.FC<Partial<TableCellProps>> = ({
    iconStart,
    iconEnd,
    className,
    children,
    ...props
}) => {
    return (
        <div
            className={clsx(
                'moonstone-TableCell',
                'flexRow_nowrap',
                'alignCenter',
                className
            )}
            {...props}
        >

            {iconStart && (
                <iconStart.type
                    {...iconStart.props}
                    className="moonstone-TableCell_iconStart"
                />
            )}

            {children}

            {iconEnd && (
                <iconEnd.type
                    {...iconEnd.props}
                    className="moonstone-TableCell_iconEnd"
                />
            )}

        </div>
    );
};

TableCell.displayName = 'FoundationTableCell';

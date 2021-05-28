import React from 'react';
import clsx from 'clsx';

import {TableCellProps} from './tableCell.types';

export const TableCell: React.FC<Partial<TableCellProps>> = ({iconStart, iconEnd, className, children}) => {
    return (
        <div className={clsx('flexRow', 'alignCenter', className)}>
            {iconStart && (
                <iconStart.type
                    {...iconStart.props}
                    className="moonstone-TableCell_iconStart"
                />
            )}
            <span>{children}</span>
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

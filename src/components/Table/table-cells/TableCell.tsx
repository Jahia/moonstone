import React from 'react';
import clsx from 'clsx';

import {TableCellProps} from './tableCell.types';
import './TableCell.scss';

export const TableCell: React.FC<Partial<TableCellProps>> = ({iconStart, iconEnd, className, children}) => {
    return (
        <div className={clsx(
            'moonstone-TableCell',
            // this can probably be removed before committing
            // 'flexRow_nowrap',
            // 'alignCenter',
            className
        )}>
            {/* {iconStart && (
                <iconStart.type
                    {...iconStart.props}
                    className="moonstone-TableCell_iconStart"
                />
            )} */}
            <div className="moonstone-TableCell_children">{children}</div>
            {/* {iconEnd && (
                <iconEnd.type
                    {...iconEnd.props}
                    className="moonstone-TableCell_iconEnd"
                />
            )} */}
        </div>
    );
};

TableCell.displayName = 'FoundationTableCell';

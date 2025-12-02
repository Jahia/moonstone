import React from 'react';
import clsx from 'clsx';
import type {TableCellWrapperProps} from './TableCellWrapper.types';

export const TableCellWrapper = React.forwardRef<HTMLTableCellElement, TableCellWrapperProps>(
    ({children, className, align = 'left', ...props}, ref) => {
        return (
            <td
                ref={ref}
                className={clsx(
                    'moonstone-TableCellWrapper',
                    `align-${align}`,
                    className
                )}
                {...props}
            >
                <div className="moonstone-TableCell-content">
                    {children}
                </div>
            </td>
        );
    }
);

TableCellWrapper.displayName = 'TableCellWrapper';

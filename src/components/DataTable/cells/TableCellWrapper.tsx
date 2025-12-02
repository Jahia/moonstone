import React from 'react';
import clsx from 'clsx';
import type {TableCellWrapperProps} from './TableCellWrapper.types';

export const TableCellWrapper = React.forwardRef<HTMLDivElement, TableCellWrapperProps>(
    ({children, className, ...props}, ref) => {
        return (
            <div
                ref={ref}
                className={clsx(
                    'moonstone-TableCellWrapper',
                    className
                )}
                style={{
                    width: '100%',
                    ...props.style
                }}
                {...props}
            >
                <div className="moonstone-TableCell-content">
                    {children}
                </div>
            </div>
        );
    }
);

TableCellWrapper.displayName = 'TableCellWrapper';

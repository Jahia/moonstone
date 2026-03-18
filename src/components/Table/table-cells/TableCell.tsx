import React from 'react';
import clsx from 'clsx';

import type {TableCellProps} from './TableCell.types';
import styles from './TableCell.module.scss';

const TableCellForwardRef: React.ForwardRefRenderFunction<HTMLDivElement, TableCellProps> = (
    {
        iconStart,
        iconEnd,
        className,
        children,
        ...props
    }, ref) => {
    return (
        <div ref={ref}
             className={clsx(
                 'moonstone-TableCell',
                 styles.TableCell,
                 'flexRow_nowrap',
                 'alignCenter',
                 className
             )}
             {...props}
        >

            {iconStart && (
                <iconStart.type
                    {...iconStart.props}
                    className={clsx('moonstone-icon_default', iconStart.props.className)}
                />
            )}

            {children}

            {iconEnd && (
                <iconEnd.type
                    {...iconEnd.props}
                    className={clsx('moonstone-icon_default', iconEnd.props.className)}
                />
            )}

        </div>
    );
};

export const TableCell = React.forwardRef(TableCellForwardRef);

TableCell.displayName = 'FoundationTableCell';

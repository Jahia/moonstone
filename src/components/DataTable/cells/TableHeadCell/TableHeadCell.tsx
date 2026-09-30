import clsx from 'clsx';

import { TableCell } from '../TableCell';
import { ArrowDown, ArrowUp } from '~/icons';

import type { TableHeadCellProps } from './TableHeadCell.types';

import styles from './TableHeadCell.module.scss';

export const TableHeadCell = ({
    width,
    align = 'left',
    className,
    children,
    sorting,
    onClick,
    ...props
}: TableHeadCellProps) => {
    const isSortable = Boolean(sorting);
    const isSortActive = (isSortable && sorting?.isActive) ?? false;

    const SortIcon = sorting?.direction === 'descending' ? ArrowDown : ArrowUp;

    return (
        <TableCell
            {...props}
            align={align}
            aria-sort={isSortActive ? sorting?.direction : undefined}
            className={clsx(styles.tableHeadCell, { [styles.sortable]: isSortable }, className)}
            component="th"
            width={width}
            onClick={onClick}
        >
            {children}
            {isSortable && (
                <SortIcon
                    aria-hidden="true"
                    className={clsx(
                        { [styles.sort]: !isSortActive },
                        { [styles.sortActive]: isSortActive },
                    )}
                />
            )}
        </TableCell>
    );
};

TableHeadCell.displayName = 'TableHeadCell';

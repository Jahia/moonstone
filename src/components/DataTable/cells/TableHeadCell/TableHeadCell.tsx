import {ArrowDown, ArrowUp} from '~/icons';
import clsx from 'clsx';
import styles from './TableHeadCell.module.scss';
import {TableCell} from '../TableCell';
import type {TableHeadCellProps} from './TableHeadCell.types';

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
            component="th"
            width={width}
            align={align}
            className={clsx(styles.tableHeadCell, {[styles.sortable]: isSortable}, className)}
            aria-sort={isSortActive ? sorting?.direction : undefined}
            onClick={onClick}
        >
            {children}
            {isSortable && (
                <SortIcon
                    aria-hidden="true"
                    className={clsx(
                        {[styles.sort]: !isSortActive},
                        {[styles.sortActive]: isSortActive}
                    )}
                />
            )}
        </TableCell>
    );
};

TableHeadCell.displayName = 'TableHeadCell';

import {ArrowDown, ArrowUp} from '~/icons';
import clsx from 'clsx';
import './TableHeadCell.scss';
import {TableCell} from './TableCell';
import type {TableHeadCellProps} from './TableHeadCell.types';

export const TableHeadCell = ({
    width,
    align = 'left',
    verticalAlign = 'middle',
    className,
    children,
    sorting,
    onClick,
    ...props
}: TableHeadCellProps) => {
    const isSortable = Boolean(sorting);
    const isActive = sorting?.isActive ?? false;

    const SortIcon = isSortable ?
        (sorting?.direction === 'descending' ? ArrowDown : ArrowUp) :
        null;

    const ariaSort = isSortable && isActive ? sorting?.direction : undefined;

    return (
        <TableCell
            {...props}
            component="th"
            width={width}
            align={align}
            verticalAlign={verticalAlign}
            className={clsx('moonstone-TableHeadCell', className)}
            aria-sort={ariaSort}
            onClick={onClick}
        >
            <span className="flexRow_nowrap alignCenter">
                {children}
                {SortIcon && (
                    <SortIcon
                        aria-hidden="true"
                        className={clsx(
                            'moonstone-tableHeadCell_sort',
                            isActive && 'moonstone-tableHeadCell_sortActive'
                        )}
                    />
                )}
            </span>
        </TableCell>
    );
};

TableHeadCell.displayName = 'TableHeadCell';


/* eslint-disable react/prop-types */
import {ArrowDown, ArrowUp} from '~/icons';
import clsx from 'clsx';
import './TableHeadCell.scss';
import type {TableHeadCellProps} from './TableHeadCell.types';
import {TableCell} from '../cells/TableCell';

export const TableHeadCell: React.FC<TableHeadCellProps> = ({
    width,
    textAlign = 'left',
    verticalAlign = 'middle',
    className,
    children,
    sorting,
    onClick,
    ...props
}) => {
    const isSortable = Boolean(sorting);
    const isActive = sorting?.isActive ?? false;

    const sortClassName = isSortable && clsx(
        'moonstone-tableCellHead_sort',
        {'moonstone-tableCellHead_sortActive': isActive}
    );

    const SortIcon = isSortable ?
        (sorting?.direction === 'descending' ? ArrowDown : ArrowUp) :
        null;

    const ariaSort = isSortable && isActive ? sorting?.direction : undefined;

    return (
        <TableCell
            {...props}
            component="th"
            width={width}
            textAlign={textAlign}
            verticalAlign={verticalAlign}
            className={clsx('moonstone-TableHeadCell', className)}
            aria-sort={ariaSort}
            onClick={onClick}
        >
            <span className="moonstone-TableHeadCell-content flexRow_nowrap alignCenter">
                {children}
                {SortIcon && (
                    <SortIcon
                        aria-hidden="true"
                        className={sortClassName}
                    />
                )}
            </span>
        </TableCell>
    );
};

TableHeadCell.displayName = 'TableHeadCell';

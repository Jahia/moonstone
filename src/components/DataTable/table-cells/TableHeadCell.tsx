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
    iconStart,
    iconEnd,
    children,
    sortDirection,
    isSorted = false,
    onClick,
    ...props
}) => {
    const sortClassName = sortDirection && clsx(
        'moonstone-tableCellHead_sort',
        {'moonstone-tableCellHead_sortActive': isSorted}
    );

    const SortIcon = sortDirection === 'descending' ? ArrowDown : sortDirection === 'ascending' ? ArrowUp : null;

    return (
        <TableCell
            {...props}
            component="th"
            width={width}
            textAlign={textAlign}
            verticalAlign={verticalAlign}
            className={clsx('moonstone-TableHeadCell', className)}
            iconStart={iconStart}
            iconEnd={iconEnd}
            onClick={onClick}
        >
            <span className="moonstone-TableHeadCell-content flexRow_nowrap alignCenter">
                {children}
                {SortIcon && (
                    <SortIcon
                        aria-label={`Icon for sorting in ${sortDirection} order`}
                        className={sortClassName}
                    />
                )}
            </span>
        </TableCell>
    );
};

TableHeadCell.displayName = 'TableHeadCell';

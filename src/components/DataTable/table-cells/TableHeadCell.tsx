/* eslint-disable react/prop-types */
import clsx from 'clsx';
import './TableHeadCell.scss';
import type {TableHeadCellProps} from './TableHeadCell.types';
import {TableCell} from '../cells/TableCell';
import {renderSortIcon} from '../utils/TableHeadCellUtils';

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
    style,
    ...props
}) => {
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
            style={style}
            onClick={onClick}
        >
            {children}
            {renderSortIcon({sortDirection, isSorted})}
        </TableCell>
    );
};

TableHeadCell.displayName = 'TableHeadCell';

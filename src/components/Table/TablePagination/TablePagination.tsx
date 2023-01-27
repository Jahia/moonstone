import React from 'react';
import clsx from 'clsx';

import type {TablePaginationProps} from './TablePagination.types';
import type {DropdownDataOption} from '~/components/Dropdown/Dropdown.types';
import {Button, Dropdown, Typography} from '~/components';
import {ChevronFirstPage, ChevronLastPage, ChevronLeft, ChevronRight} from '~/icons';
import './TablePagination.scss';

const cssClass = 'moonstone-tablePagination';
const cssClass32 = 'moonstone-marginRight32';
const cssClass16 = 'moonstone-marginRight16';

export const TablePagination: React.FC<TablePaginationProps> = ({
    className,
    label = {
        rowsPerPage: 'Rows per page',
        of: 'of'
    },
    rowsPerPage = 10,
    rowsPerPageOptions = [5, 10, 25],
    totalNumberOfRows,
    currentPage,
    onRowsPerPageChange,
    onPageChange,
    ...props
}) => {
    if (currentPage < 1) {
        throw new Error('currentPage must always be >= 1');
    }

    if (rowsPerPageOptions.indexOf(rowsPerPage) === -1) {
        throw new Error('rowsPerPage must exist in rowsPerPageOptions');
    }

    const lastPage = Math.ceil(totalNumberOfRows / rowsPerPage);
    const visibleRowsRangeLeft = ((currentPage - 1) * rowsPerPage) + 1;
    const visibleRowsRangeRight = Math.min(totalNumberOfRows, currentPage * rowsPerPage);

    return (
        <div className={clsx(cssClass, 'flexRow_reverse', 'alignCenter', className)} {...props}>
            <Typography variant="caption">{label.rowsPerPage}</Typography>
            <Dropdown
                className={clsx('alignCenter', cssClass16)}
                data-sel-role="table-pagination-dropdown-rows-per-page"
                data={rowsPerPageOptions.map(opt => ({label: opt.toString(), value: opt.toString()}))}
                value={rowsPerPage.toString()}
                label={rowsPerPage.toString()}
                onChange={(event: React.MouseEvent, item: DropdownDataOption) => onRowsPerPageChange(parseInt(item.value, 10))}
            />
            <Typography
                variant="caption"
                className={clsx(cssClass, 'flexRow_reverse', 'alignCenter', cssClass32)}
                data-sel-role="table-pagination-total-rows"
            >
                {`${visibleRowsRangeLeft}-${visibleRowsRangeRight} ${label.of} ${totalNumberOfRows}`}
            </Typography>
            <Button
                className={clsx(cssClass32)}
                icon={<ChevronFirstPage/>}
                variant="ghost"
                data-sel-role="table-pagination-button-first-page"
                isDisabled={currentPage === 1}
                onClick={() => onPageChange(1)}
            />
            <Button
                className={clsx(cssClass32)}
                icon={<ChevronLeft/>}
                variant="ghost"
                data-sel-role="table-pagination-button-previous-page"
                isDisabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            />
            <Button
                className={clsx(cssClass32)}
                icon={<ChevronRight/>}
                variant="ghost"
                data-sel-role="table-pagination-button-next-page"
                isDisabled={lastPage === currentPage}
                onClick={() => onPageChange(currentPage + 1)}
            />
            <Button
                className={clsx(cssClass16)}
                icon={<ChevronLastPage/>}
                variant="ghost"
                data-sel-role="table-pagination-button-last-page"
                isDisabled={lastPage === currentPage}
                onClick={() => onPageChange(lastPage)}
            />
        </div>
    );
};

TablePagination.displayName = 'TablePagination';

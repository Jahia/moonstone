import React from 'react';
import clsx from 'clsx';

import type {DropdownDataOption} from '~/components/Dropdown/Dropdown.types';
import {Button, Dropdown, Typography} from '~/components';
import {ChevronFirstPage, ChevronLastPage, ChevronLeft, ChevronRight} from '~/icons';
import './DataTablePagination.scss';
import {DataTablePaginationProps} from './DataTablePagination.types';

const cssClass = 'moonstone-pagination';
const cssClass32 = 'moonstone-marginRight32';
const cssClass16 = 'moonstone-marginRight16';

export const DataTablePagination: React.FC<DataTablePaginationProps> = ({
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
        <div className={clsx(cssClass, 'flexRow', 'alignCenter', 'justifyEnd', className)} {...props}>
            <Button
                className={clsx(cssClass16)}
                icon={<ChevronFirstPage/>}
                variant="ghost"
                data-sel-role="pagination-button-first-page"
                isDisabled={currentPage === 1}
                onClick={() => onPageChange(1)}
            />
            <Button
                className={clsx(cssClass32)}
                icon={<ChevronLeft/>}
                variant="ghost"
                data-sel-role="pagination-button-previous-page"
                isDisabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            />
            <Typography
                variant="caption"
                className={clsx(cssClass32)}
                data-sel-role="pagination-total-rows"
            >
                {`${visibleRowsRangeLeft}-${visibleRowsRangeRight} ${label.of} ${totalNumberOfRows}`}
            </Typography>
            <Typography variant="caption" className={clsx('moonstone-marginRightNano')}>{label.rowsPerPage}</Typography>
            <Dropdown
                className={clsx('alignCenter', cssClass32)}
                size="small"
                data-sel-role="pagination-dropdown-rows-per-page"
                data={rowsPerPageOptions.map((opt: number) => ({label: opt.toString(), value: opt.toString()}))}
                value={rowsPerPage.toString()}
                label={rowsPerPage.toString()}
                onChange={(event: React.MouseEvent, item: DropdownDataOption) => onRowsPerPageChange(parseInt(item.value, 10))}
            />
            <Button
                className={clsx(cssClass32)}
                icon={<ChevronRight/>}
                variant="ghost"
                data-sel-role="pagination-button-next-page"
                isDisabled={lastPage === currentPage}
                onClick={() => onPageChange(currentPage + 1)}
            />
            <Button
                className={clsx(cssClass16)}
                icon={<ChevronLastPage/>}
                variant="ghost"
                data-sel-role="pagination-button-last-page"
                isDisabled={lastPage === currentPage}
                onClick={() => onPageChange(lastPage)}
            />
        </div>
    );
};

DataTablePagination.displayName = 'DataTablePagination';

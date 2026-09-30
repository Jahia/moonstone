import clsx from 'clsx';
import React from 'react';

import { Button, Dropdown, Typography } from '~/components';
import { layout } from '~/globals/css-utils.js';
import { ChevronFirstPage, ChevronLastPage, ChevronLeft, ChevronRight } from '~/icons';

import type { TablePaginationProps } from './TablePagination.types';
import type { DropdownDataOption } from '~/components/Dropdown/Dropdown.types';

import styles from './TablePagination.module.scss';

const cssClass = 'moonstone-tablePagination';
const cssClass32 = 'moonstone-marginRight32';
const cssClass16 = 'moonstone-marginRight16';

export const TablePagination: React.FC<TablePaginationProps> = ({
    className,
    label = {
        rowsPerPage: 'Rows per page',
        of: 'of',
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
        <div
            className={clsx(
                [cssClass, styles[cssClass]],
                ['flexRow_reverse', layout.flexRow_reverse],
                ['alignCenter', layout.alignCenter],
                className,
            )}
            {...props}
        >
            <Typography variant="caption">{label.rowsPerPage}</Typography>
            <Dropdown
                className={clsx('alignCenter', layout.alignCenter, cssClass16, styles[cssClass16])}
                data={rowsPerPageOptions.map(opt => ({
                    label: opt.toString(),
                    value: opt.toString(),
                }))}
                data-sel-role="table-pagination-dropdown-rows-per-page"
                label={rowsPerPage.toString()}
                size="small"
                value={rowsPerPage.toString()}
                onChange={(event: React.MouseEvent, item: DropdownDataOption) => onRowsPerPageChange(parseInt(item.value, 10))}
            />
            <Typography
                className={clsx(
                    [cssClass, styles[cssClass]],
                    ['flexRow_reverse', layout.flexRow_reverse],
                    ['alignCenter', layout.alignCenter],
                    [cssClass32, styles[cssClass32]],
                )}
                data-sel-role="table-pagination-total-rows"
                variant="caption"
            >
                {`${visibleRowsRangeLeft}-${visibleRowsRangeRight} ${label.of} ${totalNumberOfRows}`}
            </Typography>
            <Button
                isDisabled={currentPage === 1}
                className={clsx([cssClass32, styles[cssClass32]])}
                data-sel-role="table-pagination-button-first-page"
                icon={<ChevronFirstPage/>}
                variant="ghost"
                onClick={() => onPageChange(1)}
            />
            <Button
                isDisabled={currentPage === 1}
                className={clsx([cssClass32, styles[cssClass32]])}
                data-sel-role="table-pagination-button-previous-page"
                icon={<ChevronLeft/>}
                variant="ghost"
                onClick={() => onPageChange(currentPage - 1)}
            />
            <Button
                isDisabled={lastPage === currentPage}
                className={clsx([cssClass32, styles[cssClass32]])}
                data-sel-role="table-pagination-button-next-page"
                icon={<ChevronRight/>}
                variant="ghost"
                onClick={() => onPageChange(currentPage + 1)}
            />
            <Button
                isDisabled={lastPage === currentPage}
                className={clsx([cssClass16, styles[cssClass16]])}
                data-sel-role="table-pagination-button-last-page"
                icon={<ChevronLastPage/>}
                variant="ghost"
                onClick={() => onPageChange(lastPage)}
            />
        </div>
    );
};

TablePagination.displayName = 'TablePagination';

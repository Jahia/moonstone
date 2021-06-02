import React from 'react';
import clsx from 'clsx';

import {TablePaginationProps} from './TablePagination.types';
import {Dropdown, Typography, Button} from '~/components';
import {ChevronLeft, ChevronRight, ChevronLastPage, ChevronFirstPage} from '~/icons';
import './TablePagination.scss';

const cssClass = 'moonstone-tablePagination';
const cssClass32 = 'moonstone-marginRight32';
const cssClass16 = 'moonstone-marginRight16';

export const TablePagination: React.FC<TablePaginationProps> = ({
    className,
    label,
    rowsPerPage,
    rowsPerPageOptions,
    totalNumberOfRows,
    currentPage,
    onRowsPerPageChange,
    onPageChange,
    ...props
}) => {

    if (currentPage < 1) {
        throw new Error("currentPage must always be >= 1");
    }

    if (rowsPerPageOptions.indexOf(rowsPerPage) === -1) {
        throw new Error("rowsPerPage must exist in rowsPerPageOptions");
    }

    const lastPage = Math.ceil(totalNumberOfRows / rowsPerPage);
    const visibleRowsRangeLeft = (currentPage - 1) * rowsPerPage + 1;
    const visibleRowsRangeRight = Math.min(totalNumberOfRows, currentPage * rowsPerPage);

    return (
        <div className={clsx(cssClass, className)} {...props}>
            <Typography variant='caption'>{label.rowsPerPage}</Typography>
            <Dropdown className={clsx(cssClass, cssClass32)}
                      data={rowsPerPageOptions.map(opt => ({label: opt.toString(), value: opt.toString()}))}
                      value={rowsPerPage.toString()}
                      label={rowsPerPage.toString()}
                      onChange={(event: any, item: any) => onRowsPerPageChange(parseInt(item.value, 0))}/>
            <Typography variant='caption' className={clsx(cssClass, cssClass32)}>{`${visibleRowsRangeLeft}-${visibleRowsRangeRight} ${label.of} ${totalNumberOfRows}`}</Typography>
            <Button className={clsx(cssClass, cssClass32)} icon={<ChevronFirstPage/>} variant="ghost" isDisabled={currentPage === 1} onClick={() => onPageChange(1)}/>
            <Button className={clsx(cssClass, cssClass32)} icon={<ChevronLeft/>} variant="ghost" isDisabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}/>
            <Button className={clsx(cssClass, cssClass32)} icon={<ChevronRight/>} variant="ghost" isDisabled={lastPage === currentPage} onClick={() => onPageChange(currentPage + 1)}/>
            <Button className={clsx(cssClass, cssClass16)} icon={<ChevronLastPage/>} variant="ghost" isDisabled={lastPage === currentPage} onClick={() => onPageChange(lastPage)}/>
        </div>
    )
};

TablePagination.displayName = 'TablePagination';
TablePagination.defaultProps = {
    rowsPerPage: 10,
    rowsPerPageOptions: [5, 10, 25],
    label: {
        rowsPerPage: 'Rows per page',
        of: 'of'
    }
};

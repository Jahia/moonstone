import React from 'react';
import clsx from 'clsx';

import {TablePaginationProps} from './TablePagination.types';
import {Dropdown, Typography, Button} from '~/components';
import {ChevronBigLeft, ChevronBigRight, ChevronDoubleLeft, ChevronDoubleRight} from '~/icons';
import './TablePagination.scss';

export const TablePagination: React.FC<TablePaginationProps> = ({
    className,
    label,
    rowsPerPage,
    rowsPerPageOptions,
    totalNumberOfRows,
    currentPage,
    onRowsPerPageChange,
    onPageChange
}) => {
    return (
        <div
            className={
                clsx(
                    'moonstone-tablePagination',
                    className
                )
            }
        >
            <Typography>{label.rowsPerPage}</Typography>
            <Dropdown data={rowsPerPageOptions.map(opt => ({label: opt.toString(), value: opt.toString()}))}
                      value={rowsPerPage.toString()}
                      label={rowsPerPage.toString()}
                      onChange={(event: any, item: any) => onRowsPerPageChange(parseInt(item.value, 0))}/>
            <Typography>{label.of}</Typography>
            <Button className="moonstone-tablePagination moonstone-marginRight32" icon={<ChevronDoubleLeft/>} variant="ghost"/>
            <Button className="moonstone-tablePagination moonstone-marginRight32" icon={<ChevronBigLeft/>} variant="ghost"/>
            <Button className="moonstone-tablePagination moonstone-marginRight32" icon={<ChevronBigRight/>} variant="ghost"/>
            <Button className="moonstone-tablePagination moonstone-marginRight16" icon={<ChevronDoubleRight/>} variant="ghost"/>
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

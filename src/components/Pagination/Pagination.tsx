import React from 'react';
import clsx from 'clsx';

import type {DropdownDataOption} from '~/components/Dropdown/Dropdown.types';
import type {PaginationProps} from './Pagination.types';
import {Button, Dropdown, Typography} from '~/components';
import {ChevronFirstPage, ChevronLastPage, ChevronLeft, ChevronRight} from '~/icons';
import './Pagination.scss';

export const Pagination: React.FC<PaginationProps> = ({
    className,
    label = {
        itemsPerPage: 'Items',
        of: 'of'
    },
    itemsPerPage = 10,
    itemsPerPageOptions = [5, 10, 25],
    totalOfItems,
    currentPage,
    onItemsPerPageChange,
    onPageChange,
    ...props
}) => {
    // Runtime validation: Fail fast with clear error messages for invalid props
    if (currentPage < 1) {
        throw new Error('currentPage must always be >= 1');
    }

    if (itemsPerPageOptions.indexOf(itemsPerPage) === -1) {
        throw new Error('itemsPerPage must exist in itemsPerPageOptions');
    }

    const lastPage = Math.ceil(totalOfItems / itemsPerPage);
    const visibleRangeStart = ((currentPage - 1) * itemsPerPage) + 1;
    const visibleRangeEnd = Math.min(totalOfItems, currentPage * itemsPerPage);

    return (
        <div className={clsx('moonstone-pagination', 'flexRow', 'alignCenter', 'justifyEnd', className)} {...props}>
            <div className={clsx('moonstone-pagination_navigation', 'flexRow', 'alignCenter')}>
                <Button
                    icon={<ChevronFirstPage/>}
                    variant="ghost"
                    data-testid="pagination-button-first-page"
                    isDisabled={currentPage === 1}
                    onClick={() => onPageChange(1)}
                />
                <Button
                    icon={<ChevronLeft/>}
                    variant="ghost"
                    data-testid="pagination-button-previous-page"
                    isDisabled={currentPage === 1}
                    onClick={() => onPageChange(currentPage - 1)}
                />
            </div>
            <div className={clsx('moonstone-pagination_info', 'flexRow', 'alignCenter')}>
                <Typography
                    variant="caption"
                    data-testid="pagination-total-items"
                >
                    {`${visibleRangeStart}-${visibleRangeEnd} ${label.of} ${totalOfItems}`}
                </Typography>
                <div className={clsx('moonstone-pagination_itemsPerPage', 'flexRow', 'alignCenter')}>
                    <Typography variant="caption">{label.itemsPerPage}</Typography>
                    <Dropdown
                        size="small"
                        data-testid="pagination-dropdown-items-per-page"
                        data={itemsPerPageOptions.map((opt: number) => ({label: opt.toString(), value: opt.toString()}))}
                        value={itemsPerPage.toString()}
                        onChange={(event: React.MouseEvent, item: DropdownDataOption) => onItemsPerPageChange(parseInt(item.value, 10))}
                    />
                </div>
            </div>
            <div className={clsx('moonstone-pagination_navigation', 'flexRow', 'alignCenter')}>
                <Button
                    icon={<ChevronRight/>}
                    variant="ghost"
                    data-testid="pagination-button-next-page"
                    isDisabled={lastPage === currentPage}
                    onClick={() => onPageChange(currentPage + 1)}
                />
                <Button
                    icon={<ChevronLastPage/>}
                    variant="ghost"
                    data-testid="pagination-button-last-page"
                    isDisabled={lastPage === currentPage}
                    onClick={() => onPageChange(lastPage)}
                />
            </div>
        </div>
    );
};

Pagination.displayName = 'Pagination';

import React, { useState } from 'react';

import { ControlledPagination } from './ControlledPagination';

import type { UncontrolledPaginationProps } from './Pagination.types';

export const UncontrolledPagination: React.FC<UncontrolledPaginationProps> = ({
    itemsPerPageOptions = [25, 50, 100],
    defaultCurrentPage = 1,
    defaultItemsPerPage = itemsPerPageOptions[0],
    totalOfItems,
    onPageChange,
    onItemsPerPageChange,
    ...props
}) => {
    const [currentPage, setCurrentPage] = useState(defaultCurrentPage);
    const [itemsPerPage, setItemsPerPage] = useState(defaultItemsPerPage);

    // Keeps the page in range when totalOfItems shrinks
    const page = Math.min(currentPage, Math.max(1, Math.ceil(totalOfItems / itemsPerPage)));

    return (
        <ControlledPagination
            {...props}
            currentPage={page}
            itemsPerPage={itemsPerPage}
            itemsPerPageOptions={itemsPerPageOptions}
            totalOfItems={totalOfItems}
            onItemsPerPageChange={(value) => {
                setItemsPerPage(value);
                setCurrentPage(1);
                onItemsPerPageChange?.(value);
                if (page !== 1) {
                    onPageChange?.(1);
                }
            }}
            onPageChange={(next) => {
                setCurrentPage(next);
                onPageChange?.(next);
            }}
        />
    );
};

UncontrolledPagination.displayName = 'UncontrolledPagination';

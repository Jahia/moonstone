import React from 'react';

export type TablePaginationProps = Omit<React.ComponentPropsWithoutRef<'div'>, 'className'> & {
    /**
     * Any additional class names to apply
     */
    className?: React.ReactNode;

    /**
     * Current rows per page
     */
    rowsPerPage?: number;

    /**
     * Choices for rows per pages value
     */
    rowsPerPageOptions?: number[];

    /**
     * Callback when rowsPerPage value changes
     * @param rowsPerPage
     */
    onRowsPerPageChange: (rowsPerPage: number) => void

    /**
     * How many rows there will be in total for all the pages currently available (total number of records to display)
     */
    totalNumberOfRows: number;

    /**
     * Number of the current page
     */
    currentPage: number;

    /**
     * Callback when page changes
     * @param page
     */
    onPageChange: (page: number) => void;

    /**
     * Pagination labels
     */
    label: {
        rowsPerPage: string,
        of: string
    }
};

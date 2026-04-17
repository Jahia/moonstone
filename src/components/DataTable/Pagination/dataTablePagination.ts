import type {PaginationProps as ComponentPaginationProps} from '~/components/Pagination';
import type {DataTablePaginationLogicProps} from './dataTablePagination.types';

export const getDataTablePaginationProps = <T extends NonNullable<unknown>>({
    table,
    isPaginationControlled,
    totalItems,
    itemsPerPageOptions,
    i18n,
    paginationProps
}: DataTablePaginationLogicProps<T>): ComponentPaginationProps => ({
        currentPage: table.getState().pagination.pageIndex + 1,
        totalOfItems: isPaginationControlled && totalItems !== undefined ?
            totalItems :
            table.getPrePaginationRowModel().rows.length,
        itemsPerPage: table.getState().pagination.pageSize,
        itemsPerPageOptions,
        i18n,
        onPageChange: (page: number) => table.setPageIndex(page - 1),
        onItemsPerPageChange: (size: number) => table.setPageSize(size),
        ...paginationProps
    });

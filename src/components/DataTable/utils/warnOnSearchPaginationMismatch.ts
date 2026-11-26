import { warnOnce } from '~/utils/warnOnce';

// Search and pagination must be done on the same side (table or consumer), otherwise the item count is wrong
export function warnOnSearchPaginationMismatch(isEnabled: boolean, isTableFiltering: boolean, isTablePaginating: boolean) {
    if (!isEnabled || isTableFiltering === isTablePaginating) {
        return;
    }

    if (isTableFiltering) {
        warnOnce('DataTable.searchTablePaginationConsumer', 'DataTable: the table filters the rows (`searchColumns`) but you paginate them (`currentPage`, `totalItems`), so the item count ignores the search. Do both on the same side.');
    } else {
        warnOnce('DataTable.searchConsumerPaginationTable', 'DataTable: you filter the rows (no `searchColumns`) but the table paginates them, so the item count only reflects the rows it was given. Do both on the same side, or set `enablePagination={false}`.');
    }
}

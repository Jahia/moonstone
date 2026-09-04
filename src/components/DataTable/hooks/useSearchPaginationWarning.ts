import {useRef} from 'react';

// Search and pagination must be done on the same side (table or consumer), otherwise the item count is wrong
export function useSearchPaginationWarning(isEnabled: boolean, isTableFiltering: boolean, isTablePaginating: boolean) {
    const hasWarned = useRef(false);

    if (!isEnabled || isTableFiltering === isTablePaginating || hasWarned.current) {
        return;
    }

    hasWarned.current = true;
    console.warn(isTableFiltering ?
        'DataTable: the table filters the rows (`searchColumns`) but you paginate them (`currentPage`, `totalItems`), so the item count ignores the search. Do both on the same side.' :
        'DataTable: you filter the rows (no `searchColumns`) but the table paginates them, so the item count only reflects the rows it was given. Do both on the same side, or set `enablePagination={false}`.'
    );
}

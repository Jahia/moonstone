import type { ColumnChooserColumn } from '~/components/ColumnChooser';
import type { DataUserFlat } from '~/data/dataTable';

export const collectionBarStatuses: DataUserFlat['status'][] = ['published', 'modified', 'new', 'unpublished', 'deleted'];

export const collectionBarColumns: ColumnChooserColumn[] = [
    { key: 'firstName', label: 'User', isLocked: true },
    { key: 'status', label: 'Status' },
    { key: 'progress', label: 'Progress', isHiddenByDefault: true },
    { key: 'date', label: 'Date' },
];

export type CollectionBarDemoFilters = {
    statuses: string[];
    name: string;
    query: string;
};

/** The filtering that a consumer does on its side: the bar only shows the state */
export const filterUsers = (rows: DataUserFlat[], { statuses, name, query }: CollectionBarDemoFilters) =>
    rows.filter(row => (statuses.length === 0 || statuses.includes(row.status))
        && (!name || `${row.firstName} ${row.lastName}`.toLowerCase().includes(name.toLowerCase()))
        && (!query || JSON.stringify(row).toLowerCase().includes(query.toLowerCase())));

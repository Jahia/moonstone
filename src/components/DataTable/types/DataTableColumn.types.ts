import type {ReactNode} from 'react';

export type DataTableColumn<T> = {
    key: Extract<keyof T, string>;
    label: string;
    render?: (value: T[keyof T], row: T) => ReactNode;
    enableSorting?: boolean;
}

export type DataTableProps<T> = {
    data: T[];
    columns: DataTableColumn<T>[];
    isStructured?: boolean;
    enableSelection?: boolean;
    onChangeSelection?: (selection: string[]) => void;
    enableSorting?: boolean;
    sortBy?: string;
    sortDirection?: 'ascending' | 'descending';
    onClickTableHeadCell?: (columnId: string) => void;
    defaultSelection?: string[];
    defaultSorting?: {
        sortBy: string;
        sortDirection: 'ascending' | 'descending';
    };
}


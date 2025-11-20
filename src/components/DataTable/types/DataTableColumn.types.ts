import type {ReactNode} from 'react';

export type DataTableColumn<T> = {
    key: Extract<keyof T, string>;
    label: string;
    render?: (value: T[keyof T], row: T) => ReactNode;
}

export type DataTableProps<T> = {
    data: T[];
    columns: DataTableColumn<T>[];
    isStructured?: boolean;
    enableRowSelection?: boolean;
}


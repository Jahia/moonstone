import type {ReactNode} from 'react';

export type DataTableColumn<T> = {
    key: Extract<keyof T, string>;
    label: string;
    render?: (value: T[keyof T], row: T) => ReactNode;
    isSortable?: boolean;
}

export type DataTableProps<T> = {
    data: T[];
    columns: DataTableColumn<T>[];
    isStructured?: boolean;
    enableSelection?: boolean;
    onChangeSelection?: (selection: Record<string, boolean>) => void;
    isSortable?: boolean;
}


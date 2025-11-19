import type {ReactNode} from 'react';

export interface MoonstoneTableColumn<T extends Record<string, unknown>> {
    key: keyof T;
    label: string;
    render?: (value: T[keyof T], row: T) => ReactNode;
}

export interface MoonstoneTableProps<T extends Record<string, unknown>> {
    data: T[];
    columns: MoonstoneTableColumn<T>[];
}

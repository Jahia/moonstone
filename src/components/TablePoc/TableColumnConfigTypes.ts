export type TableColumnConfig<T> = {
    key: keyof T;
    header: string;
    cell?: (value: T[keyof T], row: T) => React.ReactNode;
};

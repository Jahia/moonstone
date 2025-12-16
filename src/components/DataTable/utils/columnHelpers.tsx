import {Chip} from '~/index';

type ColumnOptions = {
    locale?: string;
    align?: 'left' | 'center' | 'right';
};

/**
 * Helper for string columns with automatic sorting.
 * Returns content directly - TableBodyCell handles cell rendering.
 */
export const stringColumn = <T, >(get: (row: T) => string, options?: ColumnOptions) => ({
    render: (value: string) => value,
    isSortable: true,
    sortFn: (a: T, b: T) => get(a).localeCompare(get(b)),
    align: options?.align
});

/**
 * Helper for number columns with formatting and sorting.
 * Returns formatted number - TableBodyCell handles cell rendering.
 */
export const numberColumn = <T, >(get: (row: T) => number, options?: ColumnOptions) => ({
    render: (value: number) => value?.toLocaleString(options?.locale) ?? '-',
    isSortable: true,
    sortFn: (a: T, b: T) => get(a) - get(b),
    align: options?.align
});

/**
 * Helper for date columns with formatting and sorting.
 * Returns formatted date - TableBodyCell handles cell rendering.
 */
export const dateColumn = <T, >(get: (row: T) => Date, options?: ColumnOptions) => ({
    render: (value: Date) => value?.toLocaleDateString(options?.locale) ?? '-',
    isSortable: true,
    sortFn: (a: T, b: T) => get(a).getTime() - get(b).getTime(),
    align: options?.align
});

/**
 * Helper for chip/tag array columns.
 * Returns Chip components - TableBodyCell handles cell rendering.
 */
export const chipsColumn = <T, >(get: (row: T) => string[], options?: ColumnOptions) => ({
    render: (value: string[]) => {
        if (!value || value.length === 0) {
            return '-';
        }

        return (
            <>
                {value.map((chip, index) => (
                    <Chip
                        // eslint-disable-next-line react/no-array-index-key
                        key={`${chip}-${index}`}
                        label={chip}
                        color="accent"
                    />
                ))}
            </>
        );
    },
    isSortable: false,
    align: options?.align
});

/**
 * Helper to extract string value from a field that can be string or { value: string }.
 */
export const getStringOrObjectValue = (value: string | { value: string }): string => {
    return typeof value === 'string' ? value : value.value;
};

/**
 * Helper for columns where value can be string or { value: string } object.
 * Handles both formats automatically for render and sort.
 */
export const stringOrObjectColumn = <T, >(
    get: (row: T) => string | { value: string },
    options?: ColumnOptions
) => ({
        render: (value: string | { value: string }) => getStringOrObjectValue(value),
        isSortable: true,
        sortFn: (a: T, b: T) => getStringOrObjectValue(get(a)).localeCompare(getStringOrObjectValue(get(b))),
        align: options?.align
    });

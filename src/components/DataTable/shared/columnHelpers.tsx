import {
    renderString,
    renderNumber,
    renderDate,
    type LocaleOptions
} from './renderHelpers';

type ColumnOptions = Omit<LocaleOptions, 'value'> & {
    align?: 'left' | 'center' | 'right';
};

/**
 * Column helper factories for common data types.
 * These provide pre-configured sorting and rendering logic for typical use cases.
 *
 * @example
 * const columns = [
 *   { key: 'name', label: 'Name', ...stringColumn(row => row.name) },
 *   { key: 'price', label: 'Price', ...numberColumn(row => row.price, { locale: 'en-US' }) },
 *   { key: 'createdAt', label: 'Created', ...dateColumn(row => row.createdAt) },
 * ];
 */
export const stringColumn = <T, >(get: (row: T) => string, options?: ColumnOptions) => ({
    render: (_value: unknown, row: T) => renderString(get(row)),
    isSortable: true,
    sortFn: (a: T, b: T) => get(a).localeCompare(get(b)),
    align: options?.align
});

export const numberColumn = <T, >(get: (row: T) => number, options?: ColumnOptions) => ({
    render: (_value: unknown, row: T) => renderNumber({value: get(row), locale: options?.locale, localeOptions: options?.localeOptions}),
    isSortable: true,
    sortFn: (a: T, b: T) => get(a) - get(b),
    align: options?.align ?? 'right'
});

export const dateColumn = <T, >(get: (row: T) => Date, options?: ColumnOptions) => ({
    render: (_value: unknown, row: T) => renderDate({value: get(row), locale: options?.locale, localeOptions: options?.localeOptions}),
    isSortable: true,
    sortFn: (a: T, b: T) => get(a).getTime() - get(b).getTime(),
    align: options?.align ?? 'right'
});

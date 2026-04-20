import {describe, it, expect, vi} from 'vitest';
import {render, screen} from '@testing-library/react';
import {DataTableColumn} from '~/components/DataTable/DataTable.types';
import {
    renderNumber,
    renderDate,
    stringColumn,
    numberColumn,
    dateColumn,
    createTableColumns,
    renderString
} from './index';

describe('renderString', () => {
    it('should return null if value is not a string', () => {
        expect(renderString(123 as unknown as string)).toBeNull();
    });

    it('should return null if value is null or undefined', () => {
        expect(renderString(null)).toBeNull();
        expect(renderString(undefined)).toBeNull();
    });

    it('should display string value correctly', () => {
        render(
            <>{renderString('test')}</>
        );
        expect(screen.getByText('test')).toBeInTheDocument();
    });
});

describe('renderNumber', () => {
    it('should format number with en-US locale', () => {
        render(<>{renderNumber({value: 1234.56, locale: 'en-US'})}</>);
        expect(screen.getByText('1,234.56')).toBeInTheDocument();
    });

    it('should return null if value is null or undefined', () => {
        expect(renderNumber({value: null})).toBeNull();
        expect(renderNumber({value: undefined})).toBeNull();
    });

    it('should return null if value is not a number', () => {
        expect(renderNumber({value: 'not a number' as unknown as number})).toBeNull();
    });

    it('should format bigint with en-US locale', () => {
        render(<>{renderNumber({value: 9007199254740992n, locale: 'en-US'})}</>);
        expect(screen.getByText('9,007,199,254,740,992')).toBeInTheDocument();
    });

    it('should apply minimumFractionDigits option', () => {
        render(
            <>{renderNumber({
                value: 1234,
                locale: 'en-US',
                localeOptions: {minimumFractionDigits: 2}
            })}
            </>
        );
        expect(screen.getByText('1,234.00')).toBeInTheDocument();
    });
});

describe('renderDate', () => {
    it('should format date with specific options', () => {
        const date = new Date('2023-06-15T12:00:00Z');
        render(
            <>{renderDate({
                value: date,
                locale: 'en-US',
                localeOptions: {year: 'numeric', month: '2-digit', day: '2-digit'}
            })}
            </>
        );
        screen.debug();
        expect(screen.getByText('06/15/2023')).toBeInTheDocument();
    });

    it('should return null if value is null or undefined', () => {
        expect(renderDate({value: null})).toBeNull();
        expect(renderDate({value: undefined})).toBeNull();
    });

    it('should return null if value is not a date', () => {
        expect(renderDate({value: 'not a date' as unknown as Date})).toBeNull();
    });
});

describe('stringColumn', () => {
    it('should return correct config', () => {
        type Row = { val: string };
        const get = (row: Row) => row.val;
        const col = stringColumn<Row>(get, {align: 'center'});
        expect(col.isSortable).toBe(true);
        expect(col.align).toBe('center');

        render(<>{col.render('test')}</>);
        expect(screen.getByText('test')).toBeInTheDocument();

        const rowA = {val: 'a'};
        const rowB = {val: 'b'};
        expect(col.sortFn(rowA, rowB)).toBeLessThan(0);
    });
});

describe('numberColumn', () => {
    it('should return correct config', () => {
        type Row = { val: number };
        const get = (row: Row) => row.val;
        const col = numberColumn<Row>(get);
        expect(col.isSortable).toBe(true);
        expect(col.align).toBe('left');

        const rowA = {val: 10};
        const rowB = {val: 20};
        expect(col.sortFn(rowA, rowB)).toBe(-10);
    });
});

describe('dateColumn', () => {
    it('should return correct config', () => {
        type Row = { val: Date };
        const get = (row: Row) => row.val;
        const col = dateColumn<Row>(get);
        expect(col.isSortable).toBe(true);
        expect(col.align).toBe('right');

        const d1 = new Date('2023-01-01');
        const d2 = new Date('2023-01-02');
        const rowA = {val: d1};
        const rowB = {val: d2};
        expect(col.sortFn(rowA, rowB)).toBeLessThan(0);
    });
});

describe('createTableColumns', () => {
    type TestData = { name: string };

    it('should map columns correctly', () => {
        const columns: DataTableColumn<TestData>[] = [
            {
                key: 'name',
                label: 'Name',
                isSortable: true,
                align: 'center',
                render: (val: string) => val.toUpperCase()
            }
        ];

        const result = createTableColumns(columns);
        expect(result).toHaveLength(1);

        const col = result[0];
        expect(col.header).toBe('Name');
        expect(col.enableSorting).toBe(true);
    });

    it('should use custom sort function if provided', () => {
        const sortFn = vi.fn();
        const columns: DataTableColumn<TestData>[] = [
            {
                key: 'name',
                label: 'Name',
                sortFn
            }
        ];

        const result = createTableColumns(columns);
        const col = result[0];
        expect(typeof col.sortingFn).toBe('function');
    });
});

import {describe, it, expect, vi} from 'vitest';
import {DataTableColumn} from '~/components/DataTable/DataTable.types';
import {
    renderNumber,
    renderDate,
    stringColumn,
    numberColumn,
    dateColumn,
    createTableColumns
} from './index';

describe('renderNumber', () => {
    it('should format number with en-US locale', () => {
        expect(renderNumber({value: 1234.56, locale: 'en-US'})).toBe('1,234.56');
    });

    it('should return null if value is null or undefined', () => {
        expect(renderNumber({value: null})).toBeNull();
        expect(renderNumber({value: undefined})).toBeNull();
    });

    it('should apply minimumFractionDigits option', () => {
        const result = renderNumber({
            value: 1234,
            locale: 'en-US',
            localeOptions: {minimumFractionDigits: 2}
        });
        expect(result).toBe('1,234.00');
    });
});

describe('renderDate', () => {
    it('should format date with specific options', () => {
        const date = new Date('2023-06-15T12:00:00Z');
        const result = renderDate({
            value: date,
            locale: 'en-US',
            localeOptions: {year: 'numeric', month: '2-digit', day: '2-digit'}
        });
        expect(result).toContain('2023');
        expect(result).toContain('06');
        expect(result).toContain('15');
    });

    it('should return null if value is null or undefined', () => {
        expect(renderDate({value: null})).toBeNull();
        expect(renderDate({value: undefined})).toBeNull();
    });
});

describe('stringColumn', () => {
    it('should return correct config', () => {
        type Row = { val: string };
        const get = (row: Row) => row.val;
        const col = stringColumn<Row>(get, {align: 'center'});
        expect(col.isSortable).toBe(true);
        expect(col.align).toBe('center');
        expect(col.render('test')).toBe('test');

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

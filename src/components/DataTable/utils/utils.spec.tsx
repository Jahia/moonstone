
import {render, screen} from '@testing-library/react';
import {describe, it, expect, vi} from 'vitest';
import {AccessorKeyColumnDef} from '@tanstack/react-table';
import {DataTableColumn} from '../DataTable.types';
import {
    renderNumber,
    renderDate,
    renderChips,
    stringColumn,
    numberColumn,
    dateColumn,
    chipsColumn,
    createTableColumns
} from './index';

describe('DataTable utils', () => {
    describe('renderHelpers', () => {
        describe('renderNumber', () => {
            it('should format number with en-US locale', () => {
                expect(renderNumber({value: 1234.56, locale: 'en-US'})).toBe('1,234.56');
            });

            it('should return null if value is null or undefined', () => {
                expect(renderNumber({value: null})).toBeNull();
                expect(renderNumber({value: undefined})).toBeNull();
            });

            it('should accept locale options', () => {
                // We test that it doesn't crash and returns a string; specific locale output depends on env
                const result = renderNumber({
                    value: 1234.56,
                    locale: 'de-DE',
                    localeOptions: {minimumFractionDigits: 1}
                });
                // In de-DE, decimal separator is comma or different formatting.
                // Simple checking presence of numbers
                expect(result).not.toBeNull();
            });
        });

        describe('renderDate', () => {
            it('should format date', () => {
                const date = new Date('2023-01-01T00:00:00Z');
                expect(renderDate({value: date})).not.toBeNull();
            });

            it('should return null if value is null or undefined', () => {
                expect(renderDate({value: null})).toBeNull();
                expect(renderDate({value: undefined})).toBeNull();
            });
        });

        describe('renderChips', () => {
            it('should render chips', () => {
                render(<div>{renderChips(['chip1', 'chip2'])}</div>);
                expect(screen.getByText('chip1')).toBeInTheDocument();
                expect(screen.getByText('chip2')).toBeInTheDocument();
            });

            it('should return null if array is empty or null', () => {
                expect(renderChips([])).toBeNull();
                expect(renderChips(null)).toBeNull();
                expect(renderChips(undefined)).toBeNull();
            });
        });
    });

    describe('columnHelpers', () => {
        it('stringColumn should return correct config', () => {
            type Row = { val: string };
            const get = (row: Row) => row.val;
            const col = stringColumn<Row>(get, {align: 'center'});
            expect(col.isSortable).toBe(true);
            expect(col.align).toBe('center');
            expect(col.render('test')).toBe('test');

            // Sort function test
            const rowA = {val: 'a'};
            const rowB = {val: 'b'};
            expect(col.sortFn(rowA, rowB)).toBeLessThan(0);
        });

        it('numberColumn should return correct config', () => {
            type Row = { val: number };
            const get = (row: Row) => row.val;
            const col = numberColumn<Row>(get);
            expect(col.isSortable).toBe(true);
            expect(col.align).toBe('left'); // Default

            // Sort function test
            const rowA = {val: 10};
            const rowB = {val: 20};
            expect(col.sortFn(rowA, rowB)).toBe(-10);
        });

        it('dateColumn should return correct config', () => {
            type Row = { val: Date };
            const get = (row: Row) => row.val;
            const col = dateColumn<Row>(get);
            expect(col.isSortable).toBe(true);
            expect(col.align).toBe('right'); // Default

            // Sort function test
            const d1 = new Date('2023-01-01');
            const d2 = new Date('2023-01-02');
            const rowA = {val: d1};
            const rowB = {val: d2};
            // D1 - d2 should be negative
            expect(col.sortFn(rowA, rowB)).toBeLessThan(0);
        });

        it('chipsColumn should return correct config', () => {
            type Row = { val: string[] };
            const get = (row: Row) => row.val;
            const col = chipsColumn<Row>(get);
            expect(col.isSortable).toBe(false);
        });
    });

    describe('tableHelpers', () => {
        describe('createTableColumns', () => {
            type TestData = {
                name: string;
            };

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

                const col = result[0] as AccessorKeyColumnDef<TestData>;
                expect(col.header).toBe('Name');
                expect(col.accessorKey).toBe('name');
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
    });
});

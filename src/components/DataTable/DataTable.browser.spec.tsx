import { render, screen } from '@testing-library/react';
import { userEvent } from '@vitest/browser/context';
import { describe, expect, it, vi } from 'vitest';

import { type DataTableColumn, type RenderRowContext, TableCellActions } from './index';
import { Button } from '~/components/Button';
import { DataTable, TableRow } from '~/components/DataTable';

type User = { id: string; name: string; age: number };

const kbData: User[] = [
    { id: '1', name: 'Alice', age: 30 },
    { id: '2', name: 'Bob', age: 25 },
    { id: '3', name: 'Carol', age: 41 },
];

const kbColumns: DataTableColumn<User>[] = [
    { key: 'name', label: 'Name', isSortable: true },
    { key: 'age', label: 'Age', isSortable: true },
];

const renderTable = (props = {}) => {
    render(
        <>
            <button type="button">before</button>
            <DataTable
                columns={kbColumns}
                data={kbData}
                enablePagination={false}
                primaryKey="id"
                {...props}
            />
        </>,
    );
};

const header = (name: string) => screen.getByRole('columnheader', { name });
const row = (name: string) => screen.getByRole('row', { name: new RegExp(name) });

describe('DataTable keyboard', () => {
    it.fails('reaches a sortable column header with Tab', async () => {
        renderTable();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(header('Name')).toHaveFocus();
    });

    it.fails('sorts the column with Enter on a focused sortable header and updates aria-sort', async () => {
        renderTable();
        header('Name').focus();
        await userEvent.keyboard('{Enter}');
        expect(header('Name')).toHaveAttribute('aria-sort', 'ascending');
        await userEvent.keyboard('{Enter}');
        expect(header('Name')).toHaveAttribute('aria-sort', 'descending');
    });

    it.fails('sorts the column with Space on a focused sortable header', async () => {
        const onSortChange = vi.fn();
        renderTable({ enableSorting: true, onSortChange });
        header('Age').focus();
        await userEvent.keyboard(' ');
        expect(onSortChange).toHaveBeenCalledWith('age', 'ascending');
    });

    it('toggles a row selection checkbox with Space', async () => {
        const onChangeSelection = vi.fn();
        renderTable({ enableSelection: true, onChangeSelection });
        const checkbox = screen.getAllByRole('checkbox')[1];
        checkbox.focus();
        await userEvent.keyboard(' ');
        expect(checkbox).toBeChecked();
        expect(onChangeSelection).toHaveBeenCalledWith(['1']);
    });

    it('toggles the select-all checkbox with Space', async () => {
        const onChangeSelection = vi.fn();
        renderTable({ enableSelection: true, onChangeSelection });
        screen.getAllByRole('checkbox')[0].focus();
        await userEvent.keyboard(' ');
        expect(onChangeSelection).toHaveBeenCalledWith(['1', '2', '3']);
    });

    it('makes a row with an onClick focusable', () => {
        renderTable({ rowProps: { onClick: vi.fn() } });
        row('Alice').focus();
        expect(row('Alice')).toHaveFocus();
    });

    it.fails('activates a focused clickable row with Enter', async () => {
        const onClick = vi.fn();
        renderTable({ rowProps: { onClick } });
        row('Alice').focus();
        await userEvent.keyboard('{Enter}');
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it.fails('activates a focused clickable row with Space', async () => {
        const onClick = vi.fn();
        renderTable({ rowProps: { onClick } });
        row('Bob').focus();
        await userEvent.keyboard(' ');
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    describe('TableCellActions actionsOnHover', () => {
        const renderWithActions = () => {
            renderTable({
                renderRow: ({ id, render: renderCells }: RenderRowContext<User>) => (
                    <TableRow key={id}>
                        {renderCells({
                            after: (
                                <TableCellActions
                                    actions={<Button label={`More ${id}`} variant="ghost"/>}
                                    actionsOnHover={<Button label={`Edit ${id}`} variant="ghost"/>}
                                />
                            ),
                        })}
                    </TableRow>
                ),
            });
        };

        it('shows the hover actions when the row itself receives keyboard focus', async () => {
            renderWithActions();
            screen.getByRole('button', { name: 'before' }).focus();
            await userEvent.keyboard('{Tab}');
            await userEvent.keyboard('{Tab}');
            expect(row('Alice')).toHaveFocus();
            expect(screen.getByRole('button', { name: 'Edit 1' })).toBeVisible();
        });

        // TableRow reveals the actions on `:focus-visible`/`:hover` only, never on `:focus-within`.
        it.fails('shows the hover actions when a control inside the row receives focus', () => {
            renderWithActions();
            const more = screen.getByRole('button', { name: 'More 1' });
            more.focus();
            expect(more).toHaveFocus();
            expect(screen.getByRole('button', { name: 'Edit 1' })).toBeVisible();
        });

        it.fails('lets the keyboard reach the hover actions from the focused row with Tab', async () => {
            renderWithActions();
            screen.getByRole('button', { name: 'before' }).focus();
            await userEvent.keyboard('{Tab}');
            await userEvent.keyboard('{Tab}');
            expect(row('Alice')).toHaveFocus();
            await userEvent.keyboard('{Tab}');
            expect(screen.getByRole('button', { name: 'Edit 1' })).toHaveFocus();
        });
    });
});

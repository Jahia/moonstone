import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { userEvent } from 'vitest/browser';

import { type DataTableColumn, type RenderRowContext, TableCellActions, TableCellStatus } from './index';
import { Button } from '~/components/Button';
import { DataTable, TableRow } from '~/components/DataTable';
import { Modal } from '~/components/Modal';

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

const kbStructuredData: (User & { subRows?: User[] })[] = [
    { id: '1', name: 'Alice', age: 30, subRows: [{ id: '1.1', name: 'Bob', age: 25 }] },
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

    it('collapses and expands a structured row with Enter on its toggle and updates aria-expanded', async () => {
        renderTable({ isStructured: true, data: kbStructuredData });
        const toggle = screen.getByRole('button', { name: 'Alice' });
        toggle.focus();
        await userEvent.keyboard('{Enter}');
        expect(toggle).toHaveAttribute('aria-expanded', 'false');
        expect(screen.queryByText('Bob')).not.toBeInTheDocument();
        await userEvent.keyboard('{Enter}');
        expect(toggle).toHaveAttribute('aria-expanded', 'true');
        expect(screen.getByText('Bob')).toBeInTheDocument();
    });

    it('collapses a structured row with Space on its toggle', async () => {
        renderTable({ isStructured: true, data: kbStructuredData });
        screen.getByRole('button', { name: 'Alice' }).focus();
        await userEvent.keyboard(' ');
        expect(screen.queryByText('Bob')).not.toBeInTheDocument();
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

        it('shows the hover actions when a control inside the row receives focus', () => {
            renderWithActions();
            const more = screen.getByRole('button', { name: 'More 1' });
            more.focus();
            expect(more).toHaveFocus();
            expect(screen.getByRole('button', { name: 'Edit 1' })).toBeVisible();
        });

        it('lets the keyboard reach the hover actions from the focused row with Tab', async () => {
            renderWithActions();
            screen.getByRole('button', { name: 'before' }).focus();
            await userEvent.keyboard('{Tab}');
            await userEvent.keyboard('{Tab}');
            expect(row('Alice')).toHaveFocus();
            await userEvent.keyboard('{Tab}');
            expect(screen.getByRole('button', { name: 'Edit 1' })).toHaveFocus();
        });
    });

    describe('TableCellStatus', () => {
        const renderWithStatus = (rowProps = {}) => {
            renderTable({
                renderRow: ({ id, render: renderCells }: RenderRowContext<User>) => (
                    <TableRow key={id} {...rowProps}>
                        {renderCells({ before: <TableCellStatus color="success">{`Status ${id}`}</TableCellStatus> })}
                    </TableRow>
                ),
            });
        };

        it('shows the status panel while its row has keyboard focus', async () => {
            renderWithStatus();
            screen.getByRole('button', { name: 'before' }).focus();
            await userEvent.keyboard('{Tab}');
            await userEvent.keyboard('{Tab}');
            expect(row('Alice')).toHaveFocus();
            await waitFor(() => expect(screen.getByText('Status 1')).toBeVisible());
        });

        it('hides the status panel with Escape until its row loses focus', async () => {
            renderWithStatus();
            screen.getByRole('button', { name: 'before' }).focus();
            await userEvent.keyboard('{Tab}');
            await userEvent.keyboard('{Tab}');
            await userEvent.keyboard('{Escape}');
            expect(row('Alice')).toHaveFocus();
            await waitFor(() => expect(screen.getByText('Status 1')).not.toBeVisible());
            await userEvent.keyboard('{Shift>}{Tab}{/Shift}');
            await userEvent.keyboard('{Tab}');
            expect(row('Alice')).toHaveFocus();
            await waitFor(() => expect(screen.getByText('Status 1')).toBeVisible());
        });

        it('passes the Escape that hides the status panel to the onKeyDown of the row', async () => {
            const onKeyDown = vi.fn();
            renderWithStatus({ onKeyDown });
            screen.getByRole('button', { name: 'before' }).focus();
            await userEvent.keyboard('{Tab}');
            await userEvent.keyboard('{Tab}');
            await waitFor(() => expect(screen.getByText('Status 1')).toBeVisible());
            await userEvent.keyboard('{Escape}');
            expect(onKeyDown).toHaveBeenCalledWith(expect.objectContaining({ key: 'Escape' }));
            await waitFor(() => expect(screen.getByText('Status 1')).not.toBeVisible());
        });

        it('hides the status panel before closing a Modal around the table with Escape', async () => {
            const onOpenChange = vi.fn();
            render(
                <Modal isOpen aria-label="Users" onOpenChange={onOpenChange}>
                    <DataTable
                        columns={kbColumns}
                        data={kbData}
                        enablePagination={false}
                        primaryKey="id"
                        renderRow={({ id, render: renderCells }: RenderRowContext<User>) => (
                            <TableRow key={id}>
                                {renderCells({ before: <TableCellStatus color="success">{`Status ${id}`}</TableCellStatus> })}
                            </TableRow>
                        )}
                    />
                </Modal>,
            );
            // The Modal moves focus into the dialog once open
            await waitFor(() => expect(screen.getByRole('dialog')).toContainElement(document.activeElement as HTMLElement));
            // A key press puts the browser in keyboard mode, so the focused row matches :focus-visible
            await userEvent.keyboard('{Shift}');
            row('Alice').focus();
            expect(row('Alice')).toHaveFocus();
            await waitFor(() => expect(screen.getByText('Status 1')).toBeVisible());
            await userEvent.keyboard('{Escape}');
            expect(onOpenChange).not.toHaveBeenCalled();
            await userEvent.keyboard('{Escape}');
            expect(onOpenChange).toHaveBeenCalledWith(false, expect.anything(), 'escape-key');
        });

        it('closes a Modal around the table with the first Escape on a row without a status panel', async () => {
            const onOpenChange = vi.fn();
            render(
                <Modal isOpen aria-label="Users" onOpenChange={onOpenChange}>
                    <DataTable columns={kbColumns} data={kbData} enablePagination={false} primaryKey="id"/>
                </Modal>,
            );
            // The Modal moves focus into the dialog once open
            await waitFor(() => expect(screen.getByRole('dialog')).toContainElement(document.activeElement as HTMLElement));
            await userEvent.keyboard('{Shift}');
            row('Alice').focus();
            expect(row('Alice')).toHaveFocus();
            await userEvent.keyboard('{Escape}');
            expect(onOpenChange).toHaveBeenCalledWith(false, expect.anything(), 'escape-key');
        });
    });
});

import { render, screen } from '@testing-library/react';
import { userEvent } from '@vitest/browser/context';

import { SortIndicator, Table, TablePagination } from './index';
import { TableBody, TableBodyCell, TableHead, TableHeadCell, TableRow } from './index';

const renderSortableTable = () => {
    const onSort = vi.fn();
    render(
        <>
            <button type="button">before</button>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeadCell aria-sort="ascending" iconEnd={<SortIndicator isSorted direction="ascending"/>} onClick={onSort}>Name</TableHeadCell>
                        <TableHeadCell>Type</TableHeadCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableBodyCell>Home</TableBodyCell>
                        <TableBodyCell>Page</TableBodyCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>,
    );
    return { onSort, header: screen.getByRole('columnheader', { name: /Name/ }) };
};

const renderPagination = (currentPage: number) => {
    const onPageChange = vi.fn();
    const onRowsPerPageChange = vi.fn();
    const { container } = render(
        <>
            <button type="button">before</button>
            <TablePagination
                currentPage={currentPage}
                rowsPerPage={10}
                rowsPerPageOptions={[5, 10, 25]}
                totalNumberOfRows={50}
                onPageChange={onPageChange}
                onRowsPerPageChange={onRowsPerPageChange}
            />
        </>,
    );
    const button = (page: string) => container.querySelector<HTMLElement>(`[data-sel-role="table-pagination-button-${page}-page"]`);
    return { onPageChange, onRowsPerPageChange, button };
};

describe('Table keyboard', () => {
    describe('sortable header', () => {
        it.fails('reaches a sortable column header with Tab', async () => {
            const { header } = renderSortableTable();
            screen.getByRole('button', { name: 'before' }).focus();
            await userEvent.keyboard('{Tab}');
            expect(header).toHaveFocus();
        });

        it.fails('toggles sorting with Enter on a focused sortable header', async () => {
            const { onSort, header } = renderSortableTable();
            header.focus();
            await userEvent.keyboard('{Enter}');
            expect(onSort).toHaveBeenCalledTimes(1);
        });

        it.fails('toggles sorting with Space on a focused sortable header', async () => {
            const { onSort, header } = renderSortableTable();
            header.focus();
            await userEvent.keyboard(' ');
            expect(onSort).toHaveBeenCalledTimes(1);
        });
    });

    describe('pagination', () => {
        it('reaches every pagination control with Tab', async () => {
            const { button } = renderPagination(2);
            screen.getByRole('button', { name: 'before' }).focus();
            await userEvent.keyboard('{Tab}');
            expect(screen.getByRole('listbox')).toHaveFocus();
            await userEvent.keyboard('{Tab}');
            expect(button('first')).toHaveFocus();
            await userEvent.keyboard('{Tab}');
            expect(button('previous')).toHaveFocus();
            await userEvent.keyboard('{Tab}');
            expect(button('next')).toHaveFocus();
            await userEvent.keyboard('{Tab}');
            expect(button('last')).toHaveFocus();
        });

        it('goes to the next page with Enter', async () => {
            const { onPageChange, button } = renderPagination(2);
            button('next').focus();
            await userEvent.keyboard('{Enter}');
            expect(onPageChange).toHaveBeenCalledWith(3);
        });

        it('goes to the previous page with Space', async () => {
            const { onPageChange, button } = renderPagination(2);
            button('previous').focus();
            await userEvent.keyboard(' ');
            expect(onPageChange).toHaveBeenCalledWith(1);
        });

        it('goes to the first page with Enter', async () => {
            const { onPageChange, button } = renderPagination(3);
            button('first').focus();
            await userEvent.keyboard('{Enter}');
            expect(onPageChange).toHaveBeenCalledWith(1);
        });

        it('goes to the last page with Space', async () => {
            const { onPageChange, button } = renderPagination(3);
            button('last').focus();
            await userEvent.keyboard(' ');
            expect(onPageChange).toHaveBeenCalledWith(5);
        });

        it('skips the disabled first and previous buttons on the first page', async () => {
            const { button } = renderPagination(1);
            screen.getByRole('listbox').focus();
            await userEvent.keyboard('{Tab}');
            expect(button('next')).toHaveFocus();
        });

        it('skips the disabled next and last buttons on the last page', async () => {
            const { button } = renderPagination(5);
            button('previous').focus();
            await userEvent.keyboard('{Tab}');
            expect(button('next')).not.toHaveFocus();
            expect(button('last')).not.toHaveFocus();
        });

        it('opens the rows-per-page options with Enter', async () => {
            renderPagination(2);
            screen.getByRole('listbox').focus();
            await userEvent.keyboard('{Enter}');
            expect(await screen.findByRole('option', { name: '25' })).toBeVisible();
        });

        it.fails('changes the rows per page with the keyboard', async () => {
            const { onRowsPerPageChange } = renderPagination(2);
            screen.getByRole('listbox').focus();
            await userEvent.keyboard('{Enter}');
            await screen.findByRole('option', { name: '25' });
            await userEvent.keyboard('{ArrowDown}');
            await userEvent.keyboard('{ArrowDown}');
            await userEvent.keyboard('{Enter}');
            expect(onRowsPerPageChange).toHaveBeenCalledWith(25);
        });
    });
});

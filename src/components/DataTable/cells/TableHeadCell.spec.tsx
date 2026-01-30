import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {vi} from 'vitest';
import {TableHeadCell} from './TableHeadCell';

const TableWrapper: React.FC<{ readonly children: React.ReactNode }> = ({children}) => (
    <table>
        <thead>
            <tr>{children}</tr>
        </thead>
    </table>
);

describe('TableHeadCell', () => {
    it('should render correctly', () => {
        render(
            <TableWrapper>
                <TableHeadCell data-testid="moonstone-TableHeadCell">Header</TableHeadCell>
            </TableWrapper>
        );
        expect(screen.getByTestId('moonstone-TableHeadCell')).toBeInTheDocument();
        expect(screen.getByText('Header')).toBeInTheDocument();
    });

    it('should render as th element', () => {
        render(
            <TableWrapper>
                <TableHeadCell data-testid="moonstone-TableHeadCell">Header</TableHeadCell>
            </TableWrapper>
        );
        const cell = screen.getByTestId('moonstone-TableHeadCell');
        expect(cell.tagName.toLowerCase()).toBe('th');
    });

    it('should handle onClick on the th element', async () => {
        const handleClick = vi.fn();
        render(
            <TableWrapper>
                <TableHeadCell data-testid="moonstone-TableHeadCell" onClick={handleClick}>
                    Header
                </TableHeadCell>
            </TableWrapper>
        );

        await userEvent.click(screen.getByTestId('moonstone-TableHeadCell'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    describe('sorting', () => {
        it('should display sort icon on sorting direction descending', () => {
            render(
                <TableWrapper>
                    <TableHeadCell sorting={{direction: 'descending', isActive: true}} data-testid="cell">Header</TableHeadCell>
                </TableWrapper>
            );
            expect(screen.getByTestId('cell').querySelector('.moonstone-tableHeadCell_sort')).toBeInTheDocument();
        });

        it('should display sort icon on sorting direction ascending', () => {
            render(
                <TableWrapper>
                    <TableHeadCell sorting={{direction: 'ascending', isActive: true}} data-testid="cell">Header</TableHeadCell>
                </TableWrapper>
            );
            expect(screen.getByTestId('cell').querySelector('.moonstone-tableHeadCell_sort')).toBeInTheDocument();
        });

        it('should set aria-sort when isActive is true', () => {
            render(
                <TableWrapper>
                    <TableHeadCell sorting={{direction: 'ascending', isActive: true}} data-testid="cell">Header</TableHeadCell>
                </TableWrapper>
            );
            expect(screen.getByTestId('cell')).toHaveAttribute('aria-sort', 'ascending');
        });

        it('should not set aria-sort when isActive is false', () => {
            render(
                <TableWrapper>
                    <TableHeadCell sorting={{direction: 'ascending', isActive: false}} data-testid="cell">Header</TableHeadCell>
                </TableWrapper>
            );
            expect(screen.getByTestId('cell')).not.toHaveAttribute('aria-sort');
        });

        it('should not display sort icon when column is not sortable', () => {
            render(
                <TableWrapper>
                    <TableHeadCell data-testid="cell">Header</TableHeadCell>
                </TableWrapper>
            );
            expect(screen.getByTestId('cell').querySelector('.moonstone-tableHeadCell_sort')).not.toBeInTheDocument();
        });
    });
});

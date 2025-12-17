import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
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

    it('should handle onClick on the th element', () => {
        const handleClick = vi.fn();
        render(
            <TableWrapper>
                <TableHeadCell data-testid="moonstone-TableHeadCell" onClick={handleClick}>
                    Header
                </TableHeadCell>
            </TableWrapper>
        );

        fireEvent.click(screen.getByTestId('moonstone-TableHeadCell'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    describe('sorting', () => {
        it('should display arrowDown on sortDirection descending', () => {
            render(
                <TableWrapper>
                    <TableHeadCell isSorted sortDirection="descending"/>
                </TableWrapper>
            );
            expect(screen.getByLabelText('Icon for sorting in descending order')).toBeInTheDocument();
        });

        it('should display arrowUp on sortDirection ascending', () => {
            render(
                <TableWrapper>
                    <TableHeadCell isSorted sortDirection="ascending"/>
                </TableWrapper>
            );
            expect(screen.getByLabelText('Icon for sorting in ascending order')).toBeInTheDocument();
        });

        it('should apply sorted active class when isSorted is true', () => {
            render(
                <TableWrapper>
                    <TableHeadCell isSorted sortDirection="ascending" data-testid="cell"/>
                </TableWrapper>
            );
            const sortIcon = screen.getByLabelText('Icon for sorting in ascending order');
            expect(sortIcon).toHaveClass('moonstone-tableCellHead_sortActive');
        });

        it('should not apply sorted active class when isSorted is false', () => {
            render(
                <TableWrapper>
                    <TableHeadCell isSorted={false} sortDirection="ascending" data-testid="cell"/>
                </TableWrapper>
            );
            const sortIcon = screen.getByLabelText('Icon for sorting in ascending order');
            expect(sortIcon).toHaveClass('moonstone-tableCellHead_sort');
            expect(sortIcon).not.toHaveClass('moonstone-tableCellHead_sortActive');
        });

        it('should not display sort icon when sortDirection is undefined', () => {
            render(
                <TableWrapper>
                    <TableHeadCell data-testid="cell">Header</TableHeadCell>
                </TableWrapper>
            );
            expect(screen.queryByLabelText('Icon for sorting in ascending order')).not.toBeInTheDocument();
            expect(screen.queryByLabelText('Icon for sorting in descending order')).not.toBeInTheDocument();
        });
    });
});

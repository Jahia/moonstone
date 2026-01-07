import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { TableRow } from './TableRow';

const TableWrapper: React.FC<{ readonly children: React.ReactNode }> = ({ children }) => (
    <table>
        <tbody>
            {children}
        </tbody>
    </table>
);

describe('TableRow', () => {
    it('should render children', () => {
        render(
            <TableWrapper>
                <TableRow data-testid="row">
                    <td>Cell Content</td>
                </TableRow>
            </TableWrapper>
        );
        expect(screen.getByText('Cell Content')).toBeInTheDocument();
        expect(screen.getByTestId('row').tagName).toBe('TR');
    });

    it('should have tabIndex 0 for keyboard accessibility', () => {
        render(
            <TableWrapper>
                <TableRow data-testid="row">
                    <td>Content</td>
                </TableRow>
            </TableWrapper>
        );
        expect(screen.getByTestId('row')).toHaveAttribute('tabIndex', '0');
    });

    describe('State Classes', () => {
        it('should apply isSelected class', () => {
            render(
                <TableWrapper>
                    <TableRow isSelected data-testid="row">
                        <td>Content</td>
                    </TableRow>
                </TableWrapper>
            );
            expect(screen.getByTestId('row')).toHaveClass('moonstone-TableRow-selected');
        });

        it('should apply isHighlighted class', () => {
            render(
                <TableWrapper>
                    <TableRow isHighlighted data-testid="row">
                        <td>Content</td>
                    </TableRow>
                </TableWrapper>
            );
            expect(screen.getByTestId('row')).toHaveClass('moonstone-TableRow-highlighted');
        });

        it('should apply hasMultipleLines class', () => {
            render(
                <TableWrapper>
                    <TableRow hasMultipleLines data-testid="row">
                        <td>Content</td>
                    </TableRow>
                </TableWrapper>
            );
            expect(screen.getByTestId('row')).toHaveClass('moonstone-TableRow-multipleLines');
        });

        it('should apply multiple state classes together', () => {
            render(
                <TableWrapper>
                    <TableRow isSelected isHighlighted data-testid="row">
                        <td>Content</td>
                    </TableRow>
                </TableWrapper>
            );
            const row = screen.getByTestId('row');
            expect(row).toHaveClass('moonstone-TableRow-selected');
            expect(row).toHaveClass('moonstone-TableRow-highlighted');
        });
    });

    describe('Event Handlers', () => {
        it('should call onClick when clicked', async () => {
            const onClick = vi.fn();
            const user = userEvent.setup();
            render(
                <TableWrapper>
                    <TableRow onClick={onClick} data-testid="row">
                        <td>Content</td>
                    </TableRow>
                </TableWrapper>
            );

            await user.click(screen.getByTestId('row'));
            expect(onClick).toHaveBeenCalledTimes(1);
        });

        it('should call onDoubleClick when double-clicked', async () => {
            const onDoubleClick = vi.fn();
            const user = userEvent.setup();
            render(
                <TableWrapper>
                    <TableRow onDoubleClick={onDoubleClick} data-testid="row">
                        <td>Content</td>
                    </TableRow>
                </TableWrapper>
            );

            await user.dblClick(screen.getByTestId('row'));
            expect(onDoubleClick).toHaveBeenCalledTimes(1);
        });
    });

    it('should forward ref', () => {
        const ref = React.createRef<HTMLElement>();
        render(
            <TableWrapper>
                <TableRow ref={ref}>
                    <td>Content</td>
                </TableRow>
            </TableWrapper>
        );
        expect(ref.current?.tagName).toBe('TR');
    });

    it('should forward className', () => {
        render(
            <TableWrapper>
                <TableRow className="custom-class" data-testid="row">
                    <td>Content</td>
                </TableRow>
            </TableWrapper>
        );
        expect(screen.getByTestId('row')).toHaveClass('custom-class');
        expect(screen.getByTestId('row')).toHaveClass('moonstone-TableRow');
    });
});

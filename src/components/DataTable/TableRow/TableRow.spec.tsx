import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {describe, it, expect, vi} from 'vitest';
import {TableRow} from './TableRow';

const TableWrapper: React.FC<{ readonly children: React.ReactNode }> = ({children}) => (
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

    it('should apply isSelected class and aria-selected', () => {
        render(
            <TableWrapper>
                <TableRow isSelected data-testid="row">
                    <td>Content</td>
                </TableRow>
            </TableWrapper>
        );
        expect(screen.getByTestId('row')).toHaveClass('moonstone-TableRow-selected');
        expect(screen.getByTestId('row')).toHaveAttribute('aria-selected', 'true');
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

    it('should call onClick when clicked', async () => {
        const onClick = vi.fn();
        const user = userEvent.setup();
        render(
            <TableWrapper>
                <TableRow data-testid="row" onClick={onClick}>
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
                <TableRow data-testid="row" onDoubleClick={onDoubleClick}>
                    <td>Content</td>
                </TableRow>
            </TableWrapper>
        );

        await user.dblClick(screen.getByTestId('row'));
        expect(onDoubleClick).toHaveBeenCalledTimes(1);
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

    it('should add custom className', () => {
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

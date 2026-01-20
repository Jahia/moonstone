import React from 'react';
import {render, screen} from '@testing-library/react';
import {describe, it, expect} from 'vitest';
import {TableCell} from './TableCell';

const TableWrapper: React.FC<{ readonly children: React.ReactNode }> = ({children}) => (
    <table>
        <tbody>
            <tr>{children}</tr>
        </tbody>
    </table>
);

describe('TableCell', () => {
    it('should render children', () => {
        render(
            <TableWrapper>
                <TableCell data-testid="cell">Cell Content</TableCell>
            </TableWrapper>
        );
        expect(screen.getByText('Cell Content')).toBeInTheDocument();
        expect(screen.getByTestId('cell').tagName).toBe('TD');
    });

    it('should render as th when component prop is set', () => {
        render(
            <TableWrapper>
                <TableCell data-testid="cell" component="th">Header</TableCell>
            </TableWrapper>
        );
        expect(screen.getByTestId('cell').tagName).toBe('TH');
    });

    it('should apply alignment classes', () => {
        render(
            <TableWrapper>
                <TableCell data-testid="left" align="left">L</TableCell>
                <TableCell data-testid="center" align="center">C</TableCell>
                <TableCell data-testid="right" align="right">R</TableCell>
            </TableWrapper>
        );
        expect(screen.getByTestId('left')).toHaveClass('justifyStart');
        expect(screen.getByTestId('center')).toHaveClass('justifyCenter');
        expect(screen.getByTestId('right')).toHaveClass('justifyEnd');
    });

    it('should apply width style', () => {
        render(
            <TableWrapper>
                <TableCell data-testid="cell" width="100px">W</TableCell>
            </TableWrapper>
        );
        expect(screen.getByTestId('cell')).toHaveStyle({width: '100px'});
    });

    it('should apply vertical align classes', () => {
        render(
            <TableWrapper>
                <TableCell data-testid="cell" verticalAlign="top">V</TableCell>
            </TableWrapper>
        );
        expect(screen.getByTestId('cell')).toHaveClass('moonstone-verticalAlignTop');
    });

    it('should apply scrollable class', () => {
        render(
            <TableWrapper>
                <TableCell isScrollable data-testid="cell">S</TableCell>
            </TableWrapper>
        );
        expect(screen.getByTestId('cell')).toHaveClass('moonstone-tableCellContent');
    });
});


import type {ReactNode} from 'react';
import {render, screen} from '@testing-library/react';
import {describe, expect, it} from 'vitest';
import {TableCellStart} from './TableCellStart';

const BodyTableWrapper = ({children}: {readonly children: ReactNode}) => (
    <table>
        <tbody>
            <tr>{children}</tr>
        </tbody>
    </table>
);

const HeadTableWrapper = ({children}: {readonly children: ReactNode}) => (
    <table>
        <thead>
            <tr>{children}</tr>
        </thead>
    </table>
);

describe('TableCellStart', () => {
    it('should render a td with base class and children', () => {
        render(
            <BodyTableWrapper>
                <TableCellStart data-testid="cell">Status</TableCellStart>
            </BodyTableWrapper>
        );

        const cell = screen.getByTestId('cell');

        expect(cell.tagName).toBe('TD');
        expect(cell).toHaveClass('moonstone-tableCellStart');
        expect(cell).toHaveTextContent('Status');
    });

    it('should render a th when component is set and merge className', () => {
        render(
            <HeadTableWrapper>
                <TableCellStart component="th" className="custom-class" data-testid="cell">
                    Status
                </TableCellStart>
            </HeadTableWrapper>
        );

        const cell = screen.getByTestId('cell');

        expect(cell.tagName).toBe('TH');
        expect(cell).toHaveClass('moonstone-tableCellStart', 'custom-class');
    });
});

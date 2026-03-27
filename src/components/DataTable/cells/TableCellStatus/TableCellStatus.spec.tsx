import {render, screen} from '@testing-library/react';
import {describe, expect, it} from 'vitest';
import {TableCellStatus} from './TableCellStatus';

const TableWrapper = ({children}: {children: React.ReactNode}) => (
    <table>
        <tbody>
            <tr>
                {children}
            </tr>
        </tbody>
    </table>
);

describe('TableCellStatus', () => {
    it('should render text', () => {
        render(
            <TableWrapper>
                <TableCellStatus
                    color="success"
                    text="test"
                    data-testid="status"
                />
            </TableWrapper>
        );
        expect(screen.getByText('test')).toBeInTheDocument();
    });

    it('should display the icon when `iconStart` is provided', () => {
        render(
            <TableWrapper>
                <TableCellStatus
                    color="warning"
                    text="Pending"
                    iconStart={<span data-testid="test-icon">!</span>}
                    data-testid="status"
                />
            </TableWrapper>
        );

        expect(screen.getByTestId('test-icon')).toBeInTheDocument();
    });
});

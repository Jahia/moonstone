import {render, screen} from '@testing-library/react';
import {describe, expect, it} from 'vitest';
import {TableCellStatus} from './TableCellStatus';

const TableWrapper = ({children}: {readonly children: React.ReactNode}) => (
    <table>
        <tbody>
            <tr>
                {children}
            </tr>
        </tbody>
    </table>
);

describe('TableCellStatus', () => {
    it('should render content', () => {
        render(
            <TableWrapper>
                <TableCellStatus color="success">
                    test
                </TableCellStatus>
            </TableWrapper>
        );
        expect(screen.getByText('test')).toBeInTheDocument();
    });
});

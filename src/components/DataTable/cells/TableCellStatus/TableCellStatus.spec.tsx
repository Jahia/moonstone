import {render, screen} from '@testing-library/react';
import {describe, expect, it} from 'vitest';
import {TableCellStatus} from './TableCellStatus';

describe('TableCellStatus', () => {
    it('should render text with base and color classes', () => {
        render(
            <TableCellStatus
                color="success"
                text="Online"
                data-testid="status"
            />
        );

        const status = screen.getByTestId('status');

        expect(status).toHaveClass('moonstone-tableCellStatus', 'moonstone-tableCellStatus_success');
        expect(screen.getByText('Online')).toBeInTheDocument();
    });

    it('should render the icon wrapper when iconStart is provided', () => {
        render(
            <TableCellStatus
                color="warning"
                text="Pending"
                iconStart={<span data-testid="status-icon">!</span>}
                data-testid="status"
            />
        );

        expect(screen.getByTestId('status-icon')).toBeInTheDocument();
        expect(screen.getByTestId('status').querySelector('.moonstone-tableCellStatus_icon')).toBeInTheDocument();
    });

    it('should not render the icon wrapper when iconStart is missing', () => {
        render(
            <TableCellStatus
                color="danger"
                text="Offline"
                data-testid="status"
            />
        );

        expect(screen.getByTestId('status').querySelector('.moonstone-tableCellStatus_icon')).not.toBeInTheDocument();
    });
});

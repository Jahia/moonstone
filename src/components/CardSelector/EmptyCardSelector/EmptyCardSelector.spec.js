import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {EmptyCardSelector} from './index';

describe('EmptyCardSelector', () => {
    it('should display additional class names', () => {
        render(<EmptyCardSelector data-testid="empty-card-selector" className="extra"/>);
        expect(screen.getByTestId('empty-card-selector')).toHaveClass('extra');
    });

    it('should display label', () => {
        render(<EmptyCardSelector label="this label"/>);
        expect(screen.queryByText('this label')).toBeInTheDocument();
    });

    it('should call onClick when clicked', async () => {
        const user = userEvent.setup();
        const onClick = jest.fn();

        render(<EmptyCardSelector data-testid="card-selector" onClick={onClick}/>);
        await user.click(screen.getByTestId('card-selector'));

        expect(onClick).toHaveBeenCalled();
    });

    it('should be disabled', () => {
        render(<EmptyCardSelector isDisabled data-testid="card-selector"/>);
        expect(screen.getByTestId('card-selector')).toHaveClass('moonstone-empty-card-selector_disabled');
    });

    it('should be readOnly', () => {
        render(<EmptyCardSelector isReadOnly data-testid="card-selector"/>);
        expect(screen.getByTestId('card-selector')).toHaveAttribute('aria-readonly', 'true');
    });

    it('should not call onClick when disabled', async () => {
        const user = userEvent.setup();
        const onClick = jest.fn();

        render(<EmptyCardSelector isDisabled data-testid="card-selector" onClick={onClick}/>);
        await user.click(screen.getByTestId('card-selector'));

        expect(onClick).not.toHaveBeenCalled();
    });
});

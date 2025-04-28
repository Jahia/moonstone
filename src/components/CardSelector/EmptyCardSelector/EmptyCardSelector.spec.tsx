import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {EmptyCardSelector} from './index';
import {Love} from '~/icons/index';

describe('EmptyCardSelector', () => {
    it('should display additional class names', () => {
        render(
            <EmptyCardSelector
                data-testid="empty-card-selector"
                className="extra"
            />
        );
        expect(screen.getByTestId('empty-card-selector')).toHaveClass('extra');
    });

    it('should display label', () => {
        render(<EmptyCardSelector label="this label"/>);
        expect(screen.queryByText('this label')).toBeInTheDocument();
    });

    it('should display iconStart', () => {
        render(
            <EmptyCardSelector
                iconStart={<Love data-testid="emptyCardSelector-startIcon"/>}
            />
        );
        expect(
            screen.getByTestId('emptyCardSelector-startIcon')
        ).toBeInTheDocument();
    });

    it('should call onClick when clicked', async () => {
        const user = userEvent.setup();
        const onClick = vi.fn();

        render(
            <EmptyCardSelector data-testid="card-selector" onClick={onClick}/>
        );
        await user.click(screen.getByTestId('card-selector'));

        expect(onClick).toHaveBeenCalled();
    });

    it('should be disabled', () => {
        render(<EmptyCardSelector isDisabled data-testid="card-selector"/>);
        expect(screen.getByTestId('card-selector')).toHaveClass(
            'moonstone-emptyCardSelector_disabled'
        );
    });

    it('should be disabled when isReadOnly', () => {
        render(<EmptyCardSelector isReadOnly data-testid="card-selector"/>);
        expect(screen.getByTestId('card-selector')).toHaveClass(
            'moonstone-emptyCardSelector_disabled'
        );
    });

    it('should not call onClick when disabled', async () => {
        const user = userEvent.setup();
        const onClick = vi.fn();

        render(
            <EmptyCardSelector
                isDisabled
                data-testid="card-selector"
                onClick={onClick}
            />
        );
        await user.click(screen.getByTestId('card-selector'));

        expect(onClick).not.toHaveBeenCalled();
    });
});

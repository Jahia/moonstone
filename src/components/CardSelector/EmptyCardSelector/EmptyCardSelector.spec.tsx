import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { EmptyCardSelector } from './index';
import { Love } from '~/icons';

describe('EmptyCardSelector', () => {
    it('should display additional class names', () => {
        render(
            <EmptyCardSelector
                className="extra"
                data-testid="empty-card-selector"
            />,
        );
        expect(screen.getByTestId('empty-card-selector')).toHaveClass('extra');
    });

    it('should display label', () => {
        render(<EmptyCardSelector label="this label"/>);
        expect(screen.getByText('this label')).toBeInTheDocument();
    });

    it('should display iconStart', () => {
        render(
            <EmptyCardSelector
                iconStart={<Love data-testid="emptyCardSelector-startIcon"/>}
            />,
        );
        expect(
            screen.getByTestId('emptyCardSelector-startIcon'),
        ).toBeInTheDocument();
    });

    it('should call onClick when clicked', async () => {
        const user = userEvent.setup();
        const onClick = vi.fn();

        render(
            <EmptyCardSelector data-testid="card-selector" onClick={onClick}/>,
        );
        await user.click(screen.getByTestId('card-selector'));

        expect(onClick).toHaveBeenCalled();
    });

    it('should be disabled', () => {
        render(<EmptyCardSelector isDisabled data-testid="card-selector"/>);
        expect(screen.getByTestId('card-selector')).toHaveClass(
            'moonstone-emptyCardSelector_disabled',
        );
    });

    it('should be disabled when isReadOnly', () => {
        render(<EmptyCardSelector isReadOnly data-testid="card-selector"/>);
        expect(screen.getByTestId('card-selector')).toHaveClass(
            'moonstone-emptyCardSelector_disabled',
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
            />,
        );
        await user.click(screen.getByTestId('card-selector'));

        expect(onClick).not.toHaveBeenCalled();
    });
});

const renderCard = (props = {}) => {
    const onClick = vi.fn();
    render(
        <>
            <button type="button">before</button>
            <EmptyCardSelector label="No item selected" onClick={onClick} {...props}/>
            <button type="button">after</button>
        </>,
    );
    return { onClick };
};

describe('EmptyCardSelector keyboard', () => {
    it('reaches the card with Tab', async () => {
        renderCard();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('button', { name: 'No item selected' })).toHaveFocus();
    });

    it('activates the focused card with Enter', async () => {
        const { onClick } = renderCard();
        screen.getByRole('button', { name: 'No item selected' }).focus();
        await userEvent.keyboard('{Enter}');
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('activates the focused card with Space', async () => {
        const { onClick } = renderCard();
        screen.getByRole('button', { name: 'No item selected' }).focus();
        await userEvent.keyboard(' ');
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it.fails('keeps focus on the card after it is activated with the keyboard', async () => {
        renderCard();
        const card = screen.getByRole('button', { name: 'No item selected' });
        card.focus();
        await userEvent.keyboard('{Enter}');
        expect(card).toHaveFocus();
    });

    it('skips a disabled card in the tab sequence and does not activate it', async () => {
        const { onClick } = renderCard({ isDisabled: true });
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('button', { name: 'after' })).toHaveFocus();
        screen.getByRole('button', { name: 'No item selected' }).focus();
        await userEvent.keyboard('{Enter} ');
        expect(onClick).not.toHaveBeenCalled();
    });
});

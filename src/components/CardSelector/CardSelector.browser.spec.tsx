import { render, screen } from '@testing-library/react';
import { userEvent } from '@vitest/browser/context';

import { CardSelector } from './index';

const renderCard = (props = {}) => {
    const onClick = vi.fn();
    render(
        <>
            <button type="button">before</button>
            <CardSelector
                displayName="Item name"
                id="card"
                systemName="item-name"
                onClick={onClick}
                {...props}
            />
            <button type="button">after</button>
        </>,
    );
    return { onClick };
};

describe('CardSelector keyboard', () => {
    it('reaches the card with Tab', async () => {
        renderCard();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('button', { name: 'Item name' })).toHaveFocus();
    });

    it('activates the focused card with Enter', async () => {
        const { onClick } = renderCard();
        screen.getByRole('button', { name: 'Item name' }).focus();
        await userEvent.keyboard('{Enter}');
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('activates the focused card with Space', async () => {
        const { onClick } = renderCard();
        screen.getByRole('button', { name: 'Item name' }).focus();
        await userEvent.keyboard(' ');
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it.fails('keeps focus on the card after it is activated with the keyboard', async () => {
        renderCard();
        const card = screen.getByRole('button', { name: 'Item name' });
        card.focus();
        await userEvent.keyboard('{Enter}');
        expect(card).toHaveFocus();
    });

    it('activates the error card with Enter', async () => {
        const { onClick } = renderCard({ hasError: true, errorMessage: 'Broken reference' });
        screen.getByRole('button', { name: 'Broken reference' }).focus();
        await userEvent.keyboard('{Enter}');
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('skips a disabled card in the tab sequence and does not activate it', async () => {
        const { onClick } = renderCard({ isDisabled: true });
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('button', { name: 'after' })).toHaveFocus();
        screen.getByRole('button', { name: 'Item name' }).focus();
        await userEvent.keyboard('{Enter}');
        await userEvent.keyboard(' ');
        expect(onClick).not.toHaveBeenCalled();
    });

    it('skips a read-only card in the tab sequence', async () => {
        renderCard({ isReadOnly: true });
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('button', { name: 'after' })).toHaveFocus();
    });
});

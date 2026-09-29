import { render, screen } from '@testing-library/react';
import { userEvent } from '@vitest/browser/context';

import { EmptyCardSelector } from './index';

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
        await userEvent.keyboard('{Enter}');
        await userEvent.keyboard(' ');
        expect(onClick).not.toHaveBeenCalled();
    });
});

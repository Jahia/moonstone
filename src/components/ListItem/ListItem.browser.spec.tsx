import { render, screen } from '@testing-library/react';
import { userEvent } from '@vitest/browser/context';

import { ListItem } from './index';

const renderItem = () => {
    const onClick = vi.fn();
    render(
        <>
            <button type="button">before</button>
            <ul>
                <ListItem label="Settings" onClick={onClick}/>
            </ul>
        </>,
    );
    return { onClick, item: screen.getByText('Settings').closest('li') };
};

describe('ListItem keyboard', () => {
    it.fails('exposes a clickable list item as a button', () => {
        renderItem();
        expect(screen.getByRole('button', { name: 'Settings' })).toBeVisible();
    });

    it.fails('reaches a clickable list item with Tab', async () => {
        const { item } = renderItem();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(item).toHaveFocus();
    });

    it.fails('activates the focused clickable list item with Enter', async () => {
        const { onClick, item } = renderItem();
        item.focus();
        await userEvent.keyboard('{Enter}');
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it.fails('activates the focused clickable list item with Space', async () => {
        const { onClick, item } = renderItem();
        item.focus();
        await userEvent.keyboard(' ');
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});

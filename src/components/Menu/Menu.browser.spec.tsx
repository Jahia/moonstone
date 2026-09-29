import { render, screen } from '@testing-library/react';
import { userEvent } from '@vitest/browser/context';

import { Menu, MenuItem } from './index';

const renderMenu = (props = {}) => {
    const onClose = vi.fn();
    const onFirst = vi.fn();
    render(
        <>
            <button type="button">before</button>
            <Menu isDisplayed onClose={onClose} {...props}>
                <MenuItem label="First" onClick={onFirst}/>
                <MenuItem label="Second"/>
                <MenuItem isDisabled label="Disabled"/>
                <MenuItem label="Last"/>
            </Menu>
        </>,
    );
    return { onClose, onFirst };
};

const item = (label: string) => screen.getByText(label).closest('li');

describe('Menu keyboard', () => {
    it.fails('exposes each item as a menuitem', () => {
        renderMenu();
        expect(screen.getByRole('menuitem', { name: 'First' })).toBeVisible();
    });

    it('reaches the first item with Tab', async () => {
        renderMenu();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(item('First')).toHaveFocus();
    });

    it('skips disabled items in the tab sequence', async () => {
        renderMenu();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        await userEvent.keyboard('{Tab}');
        await userEvent.keyboard('{Tab}');
        expect(item('Last')).toHaveFocus();
    });

    it.fails('activates the focused item with Enter', async () => {
        const { onFirst } = renderMenu();
        item('First').focus();
        await userEvent.keyboard('{Enter}');
        expect(onFirst).toHaveBeenCalledTimes(1);
    });

    it.fails('activates the focused item with Space', async () => {
        const { onFirst } = renderMenu();
        item('First').focus();
        await userEvent.keyboard(' ');
        expect(onFirst).toHaveBeenCalledTimes(1);
    });

    it('moves focus to the next item with ArrowDown', async () => {
        renderMenu();
        item('First').focus();
        await userEvent.keyboard('{ArrowDown}');
        expect(item('Second')).toHaveFocus();
    });

    it('moves focus to the previous item with ArrowUp', async () => {
        renderMenu();
        item('Second').focus();
        await userEvent.keyboard('{ArrowUp}');
        expect(item('First')).toHaveFocus();
    });

    it.fails('moves focus to the first and last items with Home and End', async () => {
        renderMenu();
        item('Second').focus();
        await userEvent.keyboard('{End}');
        expect(item('Last')).toHaveFocus();
        await userEvent.keyboard('{Home}');
        expect(item('First')).toHaveFocus();
    });

    it.fails('closes with Escape', async () => {
        const { onClose } = renderMenu();
        item('First').focus();
        await userEvent.keyboard('{Escape}');
        expect(onClose).toHaveBeenCalledTimes(1);
    });
});

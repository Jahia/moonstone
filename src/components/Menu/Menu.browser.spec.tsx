import { render, screen, within } from '@testing-library/react';
import { userEvent } from 'vitest/browser';

import { Menu, MenuItem } from './index';
import { Separator } from '~/components';

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
            <button type="button">after</button>
        </>,
    );
    return { onClose, onFirst };
};

const item = (label: string) => screen.getByText(label).closest('li');

describe('Menu keyboard', () => {
    it('exposes each item as a menuitem', () => {
        renderMenu({ 'aria-label': 'Actions' });
        const menu = screen.getByRole('menu', { name: 'Actions' });
        expect(within(menu).getByRole('menuitem', { name: 'First' })).toBeVisible();
    });

    it('exposes each item as an option of a listbox', () => {
        renderMenu({ 'aria-label': 'Fruits', 'role': 'listbox' });
        const listbox = screen.getByRole('listbox', { name: 'Fruits' });
        expect(within(listbox).getByRole('option', { name: 'First' })).toBeVisible();
    });

    it('keeps the search box and the titles out of the items of the menu', () => {
        render(
            <Menu hasSearch isDisplayed>
                <MenuItem label="Section" variant="title"/>
                <MenuItem label="First"/>
            </Menu>,
        );
        const menu = screen.getByRole('menu');
        expect(screen.getByRole('searchbox')).toBeVisible();
        expect(within(menu).queryByRole('searchbox')).not.toBeInTheDocument();
        expect(within(menu).queryByRole('listitem')).not.toBeInTheDocument();
        expect(within(menu).getByText('Section')).toBeVisible();
    });

    it('reaches the first item with Tab', async () => {
        renderMenu();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(item('First')).toHaveFocus();
    });

    it('skips a closed menu with Tab', async () => {
        render(
            <>
                <button type="button">before</button>
                <Menu isDisplayed={false}>
                    <MenuItem label="First"/>
                </Menu>
                <button type="button">after</button>
            </>,
        );
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('button', { name: 'after' })).toHaveFocus();
    });

    it('reaches the selected item with Tab', async () => {
        render(
            <>
                <button type="button">before</button>
                <Menu isDisplayed>
                    <MenuItem label="First"/>
                    <Separator/>
                    <MenuItem isSelected label="Second"/>
                </Menu>
            </>,
        );
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(item('Second')).toHaveFocus();
    });

    it('skips disabled items when moving with the arrow keys', async () => {
        renderMenu();
        item('Second').focus();
        await userEvent.keyboard('{ArrowDown}');
        expect(item('Last')).toHaveFocus();
    });

    it('activates the focused item with Enter', async () => {
        const { onFirst } = renderMenu();
        item('First').focus();
        await userEvent.keyboard('{Enter}');
        expect(onFirst).toHaveBeenCalledTimes(1);
    });

    it('activates the focused item with Space', async () => {
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

    it('moves focus to the first and last items with Home and End', async () => {
        renderMenu();
        item('Second').focus();
        await userEvent.keyboard('{End}');
        expect(item('Last')).toHaveFocus();
        await userEvent.keyboard('{Home}');
        expect(item('First')).toHaveFocus();
    });

    it('closes with Escape', async () => {
        const { onClose } = renderMenu();
        item('First').focus();
        await userEvent.keyboard('{Escape}');
        expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('closes when Tab moves the focus out of it, and leaves the focus there', async () => {
        const { onClose } = renderMenu();
        item('First').focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('button', { name: 'after' })).toHaveFocus();
        expect(onClose).toHaveBeenCalledTimes(1);
        expect(onClose).toHaveBeenCalledWith(expect.objectContaining({ key: 'Tab' }));
    });

    it('closes when Shift+Tab moves the focus out of it', async () => {
        const { onClose } = renderMenu();
        item('First').focus();
        await userEvent.keyboard('{Shift>}{Tab}{/Shift}');
        expect(screen.getByRole('button', { name: 'before' })).toHaveFocus();
        expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('stays open when Tab moves the focus from the search box to the items', async () => {
        const { onClose } = renderMenu({ hasSearch: true });
        expect(screen.getByRole('searchbox')).toHaveFocus();
        await userEvent.keyboard('{Tab}');
        expect(item('First')).toHaveFocus();
        expect(onClose).not.toHaveBeenCalled();
    });

    it('moves focus to the selected item when it shows, and back when it hides', () => {
        const menu = (isDisplayed: boolean) => (
            <>
                <button type="button">trigger</button>
                <Menu isDisplayed={isDisplayed}>
                    <MenuItem label="First"/>
                    <MenuItem isSelected label="Second"/>
                </Menu>
            </>
        );
        const { rerender } = render(menu(false));
        const trigger = screen.getByRole('button', { name: 'trigger' });
        trigger.focus();
        rerender(menu(true));
        expect(item('Second')).toHaveFocus();
        rerender(menu(false));
        expect(trigger).toHaveFocus();
    });

    it('moves focus to an item, not to a field of the content, when it has no search box', () => {
        render(
            <Menu isDisplayed>
                <MenuItem label="First"/>
                <input aria-label="Filter value"/>
            </Menu>,
        );
        expect(item('First')).toHaveFocus();
    });
});

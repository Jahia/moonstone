import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from 'vitest/browser';

import { CustomDropdown, MenuItem } from '~/components';

const renderCustomDropdown = () => {
    const onFirst = vi.fn();
    render(
        <>
            <button type="button">before</button>
            <CustomDropdown label="Actions">
                <MenuItem label="First" onClick={onFirst}/>
                <MenuItem label="Second"/>
                <MenuItem label="Last"/>
            </CustomDropdown>
            <button type="button">after</button>
        </>,
    );
    return { onFirst, trigger: screen.getByRole('button', { name: 'Actions' }) };
};

const getItem = (label: string) => screen.getByText(label).closest('li');

const openWithEnter = async (trigger: HTMLElement) => {
    trigger.focus();
    await userEvent.keyboard('{Enter}');
    await screen.findByRole('list');
};

describe('CustomDropdown keyboard', () => {
    it.fails('should expose each item as a menuitem', async () => {
        const { trigger } = renderCustomDropdown();
        await openWithEnter(trigger);
        expect(screen.getByRole('menuitem', { name: 'First' })).toBeVisible();
    });

    it('should reach the trigger with Tab', async () => {
        const { trigger } = renderCustomDropdown();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(trigger).toHaveFocus();
    });

    it('should open with Enter', async () => {
        const { trigger } = renderCustomDropdown();
        trigger.focus();
        await userEvent.keyboard('{Enter}');
        expect(await screen.findByRole('list')).toBeInTheDocument();
    });

    it('should open with Space', async () => {
        const { trigger } = renderCustomDropdown();
        trigger.focus();
        await userEvent.keyboard(' ');
        expect(await screen.findByRole('list')).toBeInTheDocument();
    });

    it.fails('should open with ArrowDown', async () => {
        const { trigger } = renderCustomDropdown();
        trigger.focus();
        await userEvent.keyboard('{ArrowDown}');
        expect(await screen.findByRole('list')).toBeInTheDocument();
    });

    it('should move focus to the first item when opened with the keyboard', async () => {
        const { trigger } = renderCustomDropdown();
        await openWithEnter(trigger);
        expect(getItem('First')).toHaveFocus();
    });

    it('should move focus between items with ArrowDown and ArrowUp', async () => {
        const { trigger } = renderCustomDropdown();
        await openWithEnter(trigger);
        getItem('First').focus();
        await userEvent.keyboard('{ArrowDown}');
        expect(getItem('Second')).toHaveFocus();
        await userEvent.keyboard('{ArrowUp}');
        expect(getItem('First')).toHaveFocus();
    });

    it('should activate the focused item with Enter', async () => {
        const { trigger, onFirst } = renderCustomDropdown();
        await openWithEnter(trigger);
        getItem('First').focus();
        await userEvent.keyboard('{Enter}');
        expect(onFirst).toHaveBeenCalledTimes(1);
    });

    it('should close with Escape and return focus to the trigger', async () => {
        const { trigger } = renderCustomDropdown();
        await openWithEnter(trigger);
        getItem('First').focus();
        await userEvent.keyboard('{Escape}');
        await waitFor(() => expect(screen.queryByRole('list')).not.toBeInTheDocument());
        expect(trigger).toHaveFocus();
    });

    it.fails('should close when focus leaves the items with Tab', async () => {
        const { trigger } = renderCustomDropdown();
        await openWithEnter(trigger);
        getItem('Last').focus();
        await userEvent.keyboard('{Tab}');
        await waitFor(() => expect(screen.queryByRole('list')).not.toBeInTheDocument());
    });
});

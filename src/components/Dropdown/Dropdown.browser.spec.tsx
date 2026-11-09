import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from 'vitest/browser';

import { Dropdown } from './index';

const data = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Cherry', value: 'cherry' },
    { label: 'Date', value: 'date' },
];

const renderDropdown = (props = {}) => {
    const onChange = vi.fn();
    render(
        <>
            <button type="button">before</button>
            <Dropdown
                hasSearch={false}
                data={data}
                placeholder="Fruit"
                value=""
                onChange={onChange}
                {...props}
            />
            <button type="button">after</button>
        </>,
    );
    return { onChange, trigger: screen.getByRole('listbox') };
};

const getOption = (label: string) => screen.getByRole('option', { name: label });

const openWithEnter = async (trigger: HTMLElement) => {
    trigger.focus();
    await userEvent.keyboard('{Enter}');
    await screen.findByRole('list');
};

describe('Dropdown keyboard', () => {
    it('should reach the trigger with Tab', async () => {
        const { trigger } = renderDropdown();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(trigger).toHaveFocus();
    });

    it('should open with Enter', async () => {
        const { trigger } = renderDropdown();
        trigger.focus();
        await userEvent.keyboard('{Enter}');
        expect(await screen.findByRole('list')).toBeInTheDocument();
    });

    it.fails('should open with Space', async () => {
        const { trigger } = renderDropdown();
        trigger.focus();
        await userEvent.keyboard(' ');
        expect(await screen.findByRole('list')).toBeInTheDocument();
    });

    it.fails('should open with ArrowDown', async () => {
        const { trigger } = renderDropdown();
        trigger.focus();
        await userEvent.keyboard('{ArrowDown}');
        expect(await screen.findByRole('list')).toBeInTheDocument();
    });

    it('should move focus into the options when opened with the keyboard', async () => {
        const { trigger } = renderDropdown();
        await openWithEnter(trigger);
        expect(getOption('Apple')).toHaveFocus();
    });

    it('should move focus between options with ArrowDown and ArrowUp', async () => {
        const { trigger } = renderDropdown();
        await openWithEnter(trigger);
        getOption('Apple').focus();
        await userEvent.keyboard('{ArrowDown}');
        expect(getOption('Banana')).toHaveFocus();
        await userEvent.keyboard('{ArrowUp}');
        expect(getOption('Apple')).toHaveFocus();
    });

    it('should move focus to the first and last options with Home and End', async () => {
        const { trigger } = renderDropdown();
        await openWithEnter(trigger);
        getOption('Banana').focus();
        await userEvent.keyboard('{End}');
        expect(getOption('Date')).toHaveFocus();
        await userEvent.keyboard('{Home}');
        expect(getOption('Apple')).toHaveFocus();
    });

    it('should select the focused option with Enter and close', async () => {
        const { trigger, onChange } = renderDropdown();
        await openWithEnter(trigger);
        getOption('Banana').focus();
        await userEvent.keyboard('{Enter}');
        expect(onChange).toHaveBeenCalledWith(expect.anything(), expect.objectContaining({ value: 'banana' }));
        await waitFor(() => expect(screen.queryByRole('list')).not.toBeInTheDocument());
    });

    it('should close with Escape and return focus to the trigger', async () => {
        const { trigger } = renderDropdown();
        await openWithEnter(trigger);
        getOption('Apple').focus();
        await userEvent.keyboard('{Escape}');
        await waitFor(() => expect(screen.queryByRole('list')).not.toBeInTheDocument());
        expect(trigger).toHaveFocus();
    });

    it.fails('should close when focus leaves the options with Tab', async () => {
        const { trigger } = renderDropdown();
        await openWithEnter(trigger);
        getOption('Date').focus();
        await userEvent.keyboard('{Tab}');
        await waitFor(() => expect(screen.queryByRole('list')).not.toBeInTheDocument());
    });

    it('should filter the options when typing in the search', async () => {
        const { trigger } = renderDropdown({ hasSearch: true });
        await openWithEnter(trigger);
        expect(screen.getByRole('searchbox')).toHaveFocus();
        await userEvent.keyboard('Ban');
        await waitFor(() => expect(screen.queryByText('Apple')).not.toBeInTheDocument());
        expect(getOption('Banana')).toBeInTheDocument();
    });

    it('should toggle the focused option with Space in the multiple variant', async () => {
        const onChange = vi.fn();
        render(
            <Dropdown
                hasSearch={false}
                data={data}
                placeholder="Fruit"
                values={[]}
                onChange={onChange}
            />,
        );
        await openWithEnter(screen.getByRole('listbox'));
        getOption('Banana').focus();
        await userEvent.keyboard(' ');
        expect(onChange).toHaveBeenCalledWith(expect.anything(), expect.objectContaining({ value: 'banana' }));
        expect(screen.getByRole('list')).toBeInTheDocument();
    });
});

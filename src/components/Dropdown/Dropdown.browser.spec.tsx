import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@vitest/browser/context';

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
    it('reaches the trigger with Tab', async () => {
        const { trigger } = renderDropdown();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(trigger).toHaveFocus();
    });

    it('opens with Enter', async () => {
        const { trigger } = renderDropdown();
        trigger.focus();
        await userEvent.keyboard('{Enter}');
        expect(await screen.findByRole('list')).toBeInTheDocument();
    });

    it.fails('opens with Space', async () => {
        const { trigger } = renderDropdown();
        trigger.focus();
        await userEvent.keyboard(' ');
        expect(await screen.findByRole('list')).toBeInTheDocument();
    });

    it.fails('opens with ArrowDown', async () => {
        const { trigger } = renderDropdown();
        trigger.focus();
        await userEvent.keyboard('{ArrowDown}');
        expect(await screen.findByRole('list')).toBeInTheDocument();
    });

    it.fails('moves focus into the options when opened with the keyboard', async () => {
        const { trigger } = renderDropdown();
        await openWithEnter(trigger);
        expect(getOption('Apple')).toHaveFocus();
    });

    it('moves focus between options with ArrowDown and ArrowUp', async () => {
        const { trigger } = renderDropdown();
        await openWithEnter(trigger);
        getOption('Apple').focus();
        await userEvent.keyboard('{ArrowDown}');
        expect(getOption('Banana')).toHaveFocus();
        await userEvent.keyboard('{ArrowUp}');
        expect(getOption('Apple')).toHaveFocus();
    });

    it.fails('moves focus to the first and last options with Home and End', async () => {
        const { trigger } = renderDropdown();
        await openWithEnter(trigger);
        getOption('Banana').focus();
        await userEvent.keyboard('{End}');
        expect(getOption('Date')).toHaveFocus();
        await userEvent.keyboard('{Home}');
        expect(getOption('Apple')).toHaveFocus();
    });

    it('selects the focused option with Enter and closes', async () => {
        const { trigger, onChange } = renderDropdown();
        await openWithEnter(trigger);
        getOption('Banana').focus();
        await userEvent.keyboard('{Enter}');
        expect(onChange).toHaveBeenCalledWith(expect.anything(), expect.objectContaining({ value: 'banana' }));
        await waitFor(() => expect(screen.queryByRole('list')).not.toBeInTheDocument());
    });

    it.fails('closes with Escape and returns focus to the trigger', async () => {
        const { trigger } = renderDropdown();
        await openWithEnter(trigger);
        getOption('Apple').focus();
        await userEvent.keyboard('{Escape}');
        await waitFor(() => expect(screen.queryByRole('list')).not.toBeInTheDocument());
        expect(trigger).toHaveFocus();
    });

    it.fails('closes when focus leaves the options with Tab', async () => {
        const { trigger } = renderDropdown();
        await openWithEnter(trigger);
        getOption('Date').focus();
        await userEvent.keyboard('{Tab}');
        await waitFor(() => expect(screen.queryByRole('list')).not.toBeInTheDocument());
    });

    it('filters the options when typing in the search', async () => {
        const { trigger } = renderDropdown({ hasSearch: true });
        await openWithEnter(trigger);
        expect(screen.getByRole('searchbox')).toHaveFocus();
        await userEvent.keyboard('Ban');
        await waitFor(() => expect(screen.queryByText('Apple')).not.toBeInTheDocument());
        expect(getOption('Banana')).toBeInTheDocument();
    });

    it('toggles the focused option with Space in the multiple variant', async () => {
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

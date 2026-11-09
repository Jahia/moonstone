import { render, screen, waitFor } from '@testing-library/react';
import { useState } from 'react';
import { type Mock } from 'vitest';
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

    it('opens with Space', async () => {
        const { trigger } = renderDropdown();
        trigger.focus();
        await userEvent.keyboard(' ');
        expect(await screen.findByRole('list')).toBeInTheDocument();
    });

    it('opens with ArrowDown', async () => {
        const { trigger } = renderDropdown();
        trigger.focus();
        await userEvent.keyboard('{ArrowDown}');
        expect(await screen.findByRole('list')).toBeInTheDocument();
    });

    it('moves focus into the options when opened with the keyboard', async () => {
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

    it('moves focus to the first and last options with Home and End', async () => {
        const { trigger } = renderDropdown();
        await openWithEnter(trigger);
        getOption('Banana').focus();
        await userEvent.keyboard('{End}');
        expect(getOption('Date')).toHaveFocus();
        await userEvent.keyboard('{Home}');
        expect(getOption('Apple')).toHaveFocus();
    });

    it('should select the focused option with Enter, close and return focus to the trigger', async () => {
        const { trigger, onChange } = renderDropdown();
        await openWithEnter(trigger);
        getOption('Banana').focus();
        await userEvent.keyboard('{Enter}');
        expect(onChange).toHaveBeenCalledWith(expect.anything(), expect.objectContaining({ value: 'banana' }));
        await waitFor(() => expect(screen.queryByRole('list')).not.toBeInTheDocument());
        expect(trigger).toHaveFocus();
    });

    it('should keep the focus where onChange moved it', async () => {
        const { trigger } = renderDropdown({ onChange: () => screen.getByRole('button', { name: 'after' }).focus() });
        await openWithEnter(trigger);
        getOption('Banana').focus();
        await userEvent.keyboard('{Enter}');
        await waitFor(() => expect(screen.queryByRole('list')).not.toBeInTheDocument());
        expect(screen.getByRole('button', { name: 'after' })).toHaveFocus();
    });

    it('closes with Escape and returns focus to the trigger', async () => {
        const { trigger } = renderDropdown();
        await openWithEnter(trigger);
        getOption('Apple').focus();
        await userEvent.keyboard('{Escape}');
        await waitFor(() => expect(screen.queryByRole('list')).not.toBeInTheDocument());
        expect(trigger).toHaveFocus();
    });

    it('should keep focus on the trigger after a clear with Enter, and keep the menu closed', async () => {
        const { trigger } = renderDropdown({ value: 'banana', onClear: vi.fn() });
        screen.getByRole('button', { name: 'Reset' }).focus();
        await userEvent.keyboard('{Enter}');
        expect(trigger).toHaveFocus();
        expect(screen.queryByRole('list')).not.toBeInTheDocument();
    });

    it('should keep focus on the trigger after a click on a Tag', async () => {
        const { trigger } = renderDropdown({ value: undefined, values: ['apple', 'banana'] });
        await userEvent.click(getOption('Apple'));
        expect(trigger).toHaveFocus();
    });

    it('should keep the focus on the trigger after removing a Tag with Delete', async () => {
        const MultipleDropdown = () => {
            const [values, setValues] = useState(['apple', 'banana']);
            return <Dropdown data={data} values={values} onChange={(_e, item) => setValues(values.filter(v => v !== item.value))}/>;
        };
        render(<MultipleDropdown/>);
        getOption('Apple').focus();
        await userEvent.keyboard('{Delete}');
        await waitFor(() => expect(screen.queryByRole('option', { name: 'Apple' })).not.toBeInTheDocument());
        expect(screen.getByRole('listbox')).toHaveFocus();
    });

    describe('onFocus and onBlur', () => {
        const expectOneFocusAndOneBlurOnLeave = async (onFocus: Mock, onBlur: Mock) => {
            expect(onBlur).not.toHaveBeenCalled();
            screen.getByRole('button', { name: 'after' }).focus();
            await waitFor(() => expect(onBlur).toHaveBeenCalledTimes(1));
            expect(onFocus).toHaveBeenCalledTimes(1);
        };

        it('should fire onBlur only when the focus leaves, after a choice', async () => {
            const onFocus = vi.fn();
            const onBlur = vi.fn();
            const { trigger } = renderDropdown({ onFocus, onBlur });
            await openWithEnter(trigger);
            getOption('Banana').focus();
            await userEvent.keyboard('{Enter}');
            await waitFor(() => expect(screen.queryByRole('list')).not.toBeInTheDocument());
            await expectOneFocusAndOneBlurOnLeave(onFocus, onBlur);
        });

        it('should fire onBlur only when the focus leaves, after a clear', async () => {
            const onFocus = vi.fn();
            const onBlur = vi.fn();
            const { trigger } = renderDropdown({ onFocus, onBlur, value: 'banana', onClear: vi.fn() });
            screen.getByRole('button', { name: 'Reset' }).focus();
            await userEvent.keyboard('{Enter}');
            expect(trigger).toHaveFocus();
            await expectOneFocusAndOneBlurOnLeave(onFocus, onBlur);
        });

        it('should fire onBlur only when the focus leaves, after a click on a Tag', async () => {
            const onFocus = vi.fn();
            const onBlur = vi.fn();
            const { trigger } = renderDropdown({ onFocus, onBlur, value: undefined, values: ['apple', 'banana'] });
            await userEvent.click(getOption('Apple'));
            expect(trigger).toHaveFocus();
            await expectOneFocusAndOneBlurOnLeave(onFocus, onBlur);
        });
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

    it('selects the first result with Enter in the search of a grouped Dropdown', async () => {
        const { trigger, onChange } = renderDropdown({ hasSearch: true, data: [{ groupLabel: 'Fruits', options: data }] });
        await openWithEnter(trigger);
        await userEvent.keyboard('Ban');
        await waitFor(() => expect(screen.queryByText('Apple')).not.toBeInTheDocument());
        await userEvent.keyboard('{Enter}');
        expect(onChange).toHaveBeenCalledWith(expect.anything(), expect.objectContaining({ value: 'banana' }));
        expect(trigger).toHaveFocus();
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

import { render, screen } from '@testing-library/react';
import { userEvent } from '@vitest/browser/context';

import { CheckboxItem } from './CheckboxItem';
import { CheckboxGroup } from './index';

const renderGroup = (props = {}) => {
    const onChange = vi.fn();
    render(
        <>
            <button type="button">before</button>
            <CheckboxGroup name="fruits" onChange={onChange} {...props}>
                <CheckboxItem id="apple" label="Apple" value="apple"/>
                <CheckboxItem id="banana" label="Banana" value="banana"/>
                <CheckboxItem id="cherry" label="Cherry" value="cherry"/>
            </CheckboxGroup>
            <button type="button">after</button>
        </>,
    );
    return { onChange };
};

describe('CheckboxGroup keyboard', () => {
    it('reaches every item in turn with Tab', async () => {
        renderGroup();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('checkbox', { name: 'Apple' })).toHaveFocus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('checkbox', { name: 'Banana' })).toHaveFocus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('checkbox', { name: 'Cherry' })).toHaveFocus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('button', { name: 'after' })).toHaveFocus();
    });

    it('toggles the focused item with Space and calls the group onChange', async () => {
        const { onChange } = renderGroup();
        screen.getByRole('checkbox', { name: 'Banana' }).focus();
        await userEvent.keyboard(' ');
        expect(screen.getByRole('checkbox', { name: 'Banana' })).toBeChecked();
        expect(screen.getByRole('checkbox', { name: 'Apple' })).not.toBeChecked();
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(expect.anything(), 'banana', true);
    });

    it('calls the item onChange when toggled with Space', async () => {
        const onItemChange = vi.fn();
        render(
            <CheckboxGroup name="fruits">
                <CheckboxItem id="apple" label="Apple" value="apple" onChange={onItemChange}/>
                <CheckboxItem id="banana" label="Banana" value="banana"/>
            </CheckboxGroup>,
        );
        screen.getByRole('checkbox', { name: 'Apple' }).focus();
        await userEvent.keyboard(' ');
        expect(onItemChange).toHaveBeenCalledWith(expect.anything(), 'apple', true);
    });

    it.fails('skips a disabled item in the tab sequence', async () => {
        render(
            <>
                <button type="button">before</button>
                <CheckboxGroup name="fruits">
                    <CheckboxItem id="apple" label="Apple" value="apple"/>
                    <CheckboxItem isDisabled id="banana" label="Banana" value="banana"/>
                    <CheckboxItem id="cherry" label="Cherry" value="cherry"/>
                </CheckboxGroup>
            </>,
        );
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('checkbox', { name: 'Cherry' })).toHaveFocus();
    });

    it('removes every item from the tab sequence when the group is disabled', async () => {
        renderGroup({ isDisabled: true });
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('button', { name: 'after' })).toHaveFocus();
    });
});

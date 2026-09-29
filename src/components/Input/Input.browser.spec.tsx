import { render, screen } from '@testing-library/react';
import { userEvent } from '@vitest/browser/context';
import { useState } from 'react';

import { Input } from './index';

const ClearableInput = ({ onClear }: { readonly onClear: () => void }) => {
    const [value, setValue] = useState('hello');
    return (
        <Input
            value={value}
            onChange={event => setValue(event.target.value)}
            onClear={() => {
                setValue('');
                onClear();
            }}
        />
    );
};

describe('Input keyboard', () => {
    it('reaches the input with Tab', async () => {
        render(
            <>
                <button type="button">before</button>
                <Input/>
            </>,
        );
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('textbox')).toHaveFocus();
    });

    it('updates the value and calls onChange when typing', async () => {
        const onChange = vi.fn();
        render(<Input onChange={onChange}/>);
        screen.getByRole('textbox').focus();
        await userEvent.keyboard('abc');
        expect(screen.getByRole('textbox')).toHaveValue('abc');
        expect(onChange).toHaveBeenCalledTimes(3);
    });

    it('skips a disabled input in the tab sequence', async () => {
        render(
            <>
                <button type="button">before</button>
                <Input isDisabled/>
                <button type="button">after</button>
            </>,
        );
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('button', { name: 'after' })).toHaveFocus();
    });

    it('reaches the clear button with Tab after the input', async () => {
        render(<ClearableInput onClear={vi.fn()}/>);
        screen.getByRole('textbox').focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('button', { name: 'Reset' })).toHaveFocus();
    });

    it.fails('clears with Enter on the clear button and returns focus to the input', async () => {
        const onClear = vi.fn();
        render(<ClearableInput onClear={onClear}/>);
        screen.getByRole('button', { name: 'Reset' }).focus();
        await userEvent.keyboard('{Enter}');
        expect(onClear).toHaveBeenCalledTimes(1);
        expect(screen.getByRole('textbox')).toHaveValue('');
        expect(screen.getByRole('textbox')).toHaveFocus();
    });

    it.fails('clears with Space on the clear button and returns focus to the input', async () => {
        const onClear = vi.fn();
        render(<ClearableInput onClear={onClear}/>);
        screen.getByRole('button', { name: 'Reset' }).focus();
        await userEvent.keyboard(' ');
        expect(onClear).toHaveBeenCalledTimes(1);
        expect(screen.getByRole('textbox')).toHaveValue('');
        expect(screen.getByRole('textbox')).toHaveFocus();
    });
});

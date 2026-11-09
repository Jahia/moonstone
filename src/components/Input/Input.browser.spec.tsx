import { render, screen } from '@testing-library/react';
import { useState } from 'react';
import { userEvent } from 'vitest/browser';

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
    it('should reach the input with Tab', async () => {
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

    it('should update the value and call onChange when typing', async () => {
        const onChange = vi.fn();
        render(<Input onChange={onChange}/>);
        screen.getByRole('textbox').focus();
        await userEvent.keyboard('abc');
        expect(screen.getByRole('textbox')).toHaveValue('abc');
        expect(onChange).toHaveBeenCalledTimes(3);
    });

    it('should skip a disabled input in the tab sequence', async () => {
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

    it('should reach the clear button with Tab after the input', async () => {
        render(<ClearableInput onClear={vi.fn()}/>);
        screen.getByRole('textbox').focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('button', { name: 'Reset' })).toHaveFocus();
    });

    it('should clear with Enter on the clear button and return focus to the input', async () => {
        const onClear = vi.fn();
        render(<ClearableInput onClear={onClear}/>);
        screen.getByRole('button', { name: 'Reset' }).focus();
        await userEvent.keyboard('{Enter}');
        expect(onClear).toHaveBeenCalledTimes(1);
        expect(screen.getByRole('textbox')).toHaveValue('');
        expect(screen.getByRole('textbox')).toHaveFocus();
    });

    it('should clear with Space on the clear button and return focus to the input', async () => {
        const onClear = vi.fn();
        render(<ClearableInput onClear={onClear}/>);
        screen.getByRole('button', { name: 'Reset' }).focus();
        await userEvent.keyboard(' ');
        expect(onClear).toHaveBeenCalledTimes(1);
        expect(screen.getByRole('textbox')).toHaveValue('');
        expect(screen.getByRole('textbox')).toHaveFocus();
    });
});

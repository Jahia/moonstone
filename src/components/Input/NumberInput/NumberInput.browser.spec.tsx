import { render, screen } from '@testing-library/react';
import { useState } from 'react';
import { userEvent } from 'vitest/browser';

import { NumberInput } from './index';

const ControlledNumberInput = ({ onChange, initialValue = '5', ...props }: { readonly onChange: (value: string) => void; readonly initialValue?: string; readonly min?: number; readonly max?: number; readonly step?: number; readonly allowNegative?: boolean; readonly isReadOnly?: boolean }) => {
    const [value, setValue] = useState(initialValue);
    return (
        <NumberInput
            {...props}
            value={value}
            onChange={(e) => {
                setValue(e.target.value);
                onChange(e.target.value);
            }}
        />
    );
};

describe('NumberInput keyboard', () => {
    it('reaches the input with Tab', async () => {
        render(
            <>
                <button type="button">before</button>
                <NumberInput defaultValue="5"/>
            </>,
        );
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('textbox')).toHaveFocus();
    });

    it('accepts typed digits and calls onChange', async () => {
        const onChange = vi.fn();
        render(<NumberInput onChange={onChange}/>);
        screen.getByRole('textbox').focus();
        await userEvent.keyboard('42');
        expect(screen.getByRole('textbox')).toHaveValue('42');
        expect(onChange).toHaveBeenCalledTimes(2);
    });

    it('increments the value by one step with ArrowUp', async () => {
        render(<NumberInput defaultValue="5" step={2}/>);
        screen.getByRole('textbox').focus();
        await userEvent.keyboard('{ArrowUp}');
        expect(screen.getByRole('textbox')).toHaveValue('7');
    });

    it('decrements the value by one step with ArrowDown', async () => {
        render(<NumberInput defaultValue="5" step={2}/>);
        screen.getByRole('textbox').focus();
        await userEvent.keyboard('{ArrowDown}');
        expect(screen.getByRole('textbox')).toHaveValue('3');
    });

    it('does not step beyond max with ArrowUp', async () => {
        render(<NumberInput defaultValue="9" max={10} step={5}/>);
        screen.getByRole('textbox').focus();
        await userEvent.keyboard('{ArrowUp}');
        expect(screen.getByRole('textbox')).toHaveValue('10');
    });

    it('does not step below min with ArrowDown', async () => {
        render(<NumberInput defaultValue="3" min={2} step={5}/>);
        screen.getByRole('textbox').focus();
        await userEvent.keyboard('{ArrowDown}');
        expect(screen.getByRole('textbox')).toHaveValue('2');
    });

    it('should increment a controlled value and call onChange with ArrowUp', async () => {
        const onChange = vi.fn();
        render(<ControlledNumberInput onChange={onChange}/>);
        screen.getByRole('textbox').focus();
        await userEvent.keyboard('{ArrowUp}');
        expect(onChange).toHaveBeenCalledExactlyOnceWith('6');
        expect(screen.getByRole('textbox')).toHaveValue('6');
    });

    it('should decrement a controlled value and call onChange with ArrowDown', async () => {
        const onChange = vi.fn();
        render(<ControlledNumberInput onChange={onChange}/>);
        screen.getByRole('textbox').focus();
        await userEvent.keyboard('{ArrowDown}');
        expect(onChange).toHaveBeenCalledExactlyOnceWith('4');
        expect(screen.getByRole('textbox')).toHaveValue('4');
    });

    it('should clamp a controlled value to max and call onChange with ArrowUp', async () => {
        const onChange = vi.fn();
        render(<ControlledNumberInput max={6} step={2} onChange={onChange}/>);
        screen.getByRole('textbox').focus();
        await userEvent.keyboard('{ArrowUp}');
        expect(onChange).toHaveBeenCalledExactlyOnceWith('6');
        expect(screen.getByRole('textbox')).toHaveValue('6');
    });

    it('should stop at 0 with ArrowDown when min is not set and allowNegative is false', async () => {
        const onChange = vi.fn();
        render(<ControlledNumberInput step={8} onChange={onChange}/>);
        screen.getByRole('textbox').focus();
        await userEvent.keyboard('{ArrowDown}');
        expect(onChange).toHaveBeenCalledExactlyOnceWith('0');
        expect(screen.getByRole('textbox')).toHaveValue('0');
    });

    it('should leave a read-only value unchanged with ArrowUp', async () => {
        const onChange = vi.fn();
        render(<ControlledNumberInput isReadOnly onChange={onChange}/>);
        screen.getByRole('textbox').focus();
        await userEvent.keyboard('{ArrowUp}');
        expect(onChange).not.toHaveBeenCalled();
        expect(screen.getByRole('textbox')).toHaveValue('5');
    });

    it('should leave a read-only value unchanged with ArrowDown', async () => {
        const onChange = vi.fn();
        render(<ControlledNumberInput isReadOnly onChange={onChange}/>);
        screen.getByRole('textbox').focus();
        await userEvent.keyboard('{ArrowDown}');
        expect(onChange).not.toHaveBeenCalled();
        expect(screen.getByRole('textbox')).toHaveValue('5');
    });

    it('should not call onChange nor send an input event with ArrowDown at 0 when allowNegative is false', async () => {
        const onChange = vi.fn();
        const onInput = vi.fn();
        render(<ControlledNumberInput initialValue="0" onChange={onChange}/>);
        screen.getByRole('textbox').addEventListener('input', onInput);
        screen.getByRole('textbox').focus();
        await userEvent.keyboard('{ArrowDown}');
        expect(onChange).not.toHaveBeenCalled();
        expect(onInput).not.toHaveBeenCalled();
        expect(screen.getByRole('textbox')).toHaveValue('0');
    });

    it('should start from 0 with ArrowUp on an empty field that has a max', async () => {
        const onChange = vi.fn();
        render(<ControlledNumberInput initialValue="" max={10} onChange={onChange}/>);
        screen.getByRole('textbox').focus();
        await userEvent.keyboard('{ArrowUp}');
        expect(onChange).toHaveBeenCalledExactlyOnceWith('1');
        expect(screen.getByRole('textbox')).toHaveValue('1');
    });

    it('should go to min with ArrowUp on an empty field when min is above the step', async () => {
        const onChange = vi.fn();
        render(<ControlledNumberInput initialValue="" min={5} onChange={onChange}/>);
        screen.getByRole('textbox').focus();
        await userEvent.keyboard('{ArrowUp}');
        expect(onChange).toHaveBeenCalledExactlyOnceWith('5');
        expect(screen.getByRole('textbox')).toHaveValue('5');
    });

    it('should set 0 with ArrowDown on an empty field when allowNegative is false', async () => {
        const onChange = vi.fn();
        render(<ControlledNumberInput initialValue="" onChange={onChange}/>);
        screen.getByRole('textbox').focus();
        await userEvent.keyboard('{ArrowDown}');
        expect(onChange).toHaveBeenCalledExactlyOnceWith('0');
        expect(screen.getByRole('textbox')).toHaveValue('0');
    });

    it('should keep a controlled value that has no onChange with ArrowUp', async () => {
        render(<NumberInput value="5"/>);
        screen.getByRole('textbox').focus();
        await userEvent.keyboard('{ArrowUp}');
        expect(screen.getByRole('textbox')).toHaveValue('5');
    });

    it('should move the caret to the start with Home when min and max are set', async () => {
        const onChange = vi.fn();
        render(<NumberInput defaultValue="5" max={10} min={0} onChange={onChange}/>);
        const input = screen.getByRole<HTMLInputElement>('textbox');
        input.focus();
        await userEvent.keyboard('{Home}');
        expect(input).toHaveValue('5');
        expect(input.selectionStart).toBe(0);
        expect(onChange).not.toHaveBeenCalled();
    });

    it('should move the caret to the end with End when min and max are set', async () => {
        const onChange = vi.fn();
        render(<NumberInput defaultValue="5" max={10} min={0} onChange={onChange}/>);
        const input = screen.getByRole<HTMLInputElement>('textbox');
        input.focus();
        input.setSelectionRange(0, 0);
        await userEvent.keyboard('{End}');
        expect(input).toHaveValue('5');
        expect(input.selectionStart).toBe(1);
        expect(onChange).not.toHaveBeenCalled();
    });

    it('moves the caret with Home and End when no bound is set', async () => {
        const onChange = vi.fn();
        render(<NumberInput defaultValue="123" onChange={onChange}/>);
        const input = screen.getByRole<HTMLInputElement>('textbox');
        input.focus();
        await userEvent.keyboard('{Home}');
        expect(input).toHaveValue('123');
        expect(input.selectionStart).toBe(0);
        await userEvent.keyboard('{End}');
        expect(input).toHaveValue('123');
        expect(input.selectionStart).toBe(3);
        expect(onChange).not.toHaveBeenCalled();
    });
});

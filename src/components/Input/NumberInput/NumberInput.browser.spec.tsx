import { render, screen } from '@testing-library/react';
import { useState } from 'react';
import { userEvent } from 'vitest/browser';

import { NumberInput } from './index';

const ControlledNumberInput = ({ onChange, ...props }: { readonly onChange: (value: string) => void; readonly min?: number; readonly max?: number; readonly step?: number }) => {
    const [value, setValue] = useState('5');
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

    it('jumps to min with Home when bounds are set', async () => {
        render(<NumberInput defaultValue="5" max={10} min={0}/>);
        screen.getByRole('textbox').focus();
        await userEvent.keyboard('{Home}');
        expect(screen.getByRole('textbox')).toHaveValue('0');
    });

    it('jumps to max with End when bounds are set', async () => {
        render(<NumberInput defaultValue="5" max={10} min={0}/>);
        screen.getByRole('textbox').focus();
        await userEvent.keyboard('{End}');
        expect(screen.getByRole('textbox')).toHaveValue('10');
    });

    it('should set a controlled value to min and call onChange with Home', async () => {
        const onChange = vi.fn();
        render(<ControlledNumberInput max={10} min={0} onChange={onChange}/>);
        screen.getByRole('textbox').focus();
        await userEvent.keyboard('{Home}');
        expect(onChange).toHaveBeenCalledExactlyOnceWith('0');
        expect(screen.getByRole('textbox')).toHaveValue('0');
    });

    it('should set a controlled value to max and call onChange with End', async () => {
        const onChange = vi.fn();
        render(<ControlledNumberInput max={10} min={0} onChange={onChange}/>);
        screen.getByRole('textbox').focus();
        await userEvent.keyboard('{End}');
        expect(onChange).toHaveBeenCalledExactlyOnceWith('10');
        expect(screen.getByRole('textbox')).toHaveValue('10');
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

    it('should set min with Home and leave End alone when only min is set', async () => {
        const onChange = vi.fn();
        render(<ControlledNumberInput min={2} onChange={onChange}/>);
        screen.getByRole('textbox').focus();
        await userEvent.keyboard('{End}');
        expect(onChange).not.toHaveBeenCalled();
        await userEvent.keyboard('{Home}');
        expect(onChange).toHaveBeenCalledExactlyOnceWith('2');
        expect(screen.getByRole('textbox')).toHaveValue('2');
    });

    it('should set max with End and leave Home alone when only max is set', async () => {
        const onChange = vi.fn();
        render(<ControlledNumberInput max={8} onChange={onChange}/>);
        screen.getByRole('textbox').focus();
        await userEvent.keyboard('{Home}');
        expect(onChange).not.toHaveBeenCalled();
        await userEvent.keyboard('{End}');
        expect(onChange).toHaveBeenCalledExactlyOnceWith('8');
        expect(screen.getByRole('textbox')).toHaveValue('8');
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

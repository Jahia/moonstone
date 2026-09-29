import { render, screen } from '@testing-library/react';
import { userEvent } from '@vitest/browser/context';

import { NumberInput } from './index';

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

    it.fails('jumps to min with Home when bounds are set', async () => {
        render(<NumberInput defaultValue="5" max={10} min={0}/>);
        screen.getByRole('textbox').focus();
        await userEvent.keyboard('{Home}');
        expect(screen.getByRole('textbox')).toHaveValue('0');
    });

    it.fails('jumps to max with End when bounds are set', async () => {
        render(<NumberInput defaultValue="5" max={10} min={0}/>);
        screen.getByRole('textbox').focus();
        await userEvent.keyboard('{End}');
        expect(screen.getByRole('textbox')).toHaveValue('10');
    });
});

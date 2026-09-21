import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { NumberInput } from './index';

describe('NumberInput', () => {
    it('should render', () => {
        render(<NumberInput data-testid="moonstone-numberInput"/>);
        expect(screen.getByTestId('moonstone-numberInput')).toBeInTheDocument();
    });

    it('should have value', () => {
        render(<NumberInput data-testid="moonstone-numberInput" value="15"/>);
        expect(screen.getByTestId('moonstone-numberInput')).toHaveValue('15');
    });

    it('should have default value', () => {
        render(<NumberInput data-testid="moonstone-numberInput" defaultValue="15"/>);
        expect(screen.getByTestId('moonstone-numberInput')).toHaveValue('15');
    });

    it('should have filtered value', () => {
        render(<NumberInput data-testid="moonstone-numberInput" value="test15"/>);
        expect(screen.getByTestId('moonstone-numberInput')).toHaveValue('15');
    });

    it('should have filtered default value', () => {
        render(<NumberInput data-testid="moonstone-numberInput" defaultValue="test15"/>);
        expect(screen.getByTestId('moonstone-numberInput')).toHaveValue('15');
    });

    it('should have attribute inputMode = decimal if allowDecimal', () => {
        render(<NumberInput allowDecimal data-testid="moonstone-numberInput"/>);
        expect(screen.getByTestId('moonstone-numberInput')).toHaveAttribute('inputMode', 'decimal');
    });

    it('should call specified onChange function', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(
            <NumberInput
                data-testid="moonstone-numberInput"
                onChange={handleChange}
            />,
        );
        await user.type(screen.getByTestId('moonstone-numberInput'), '1');

        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('should filter user input', async () => {
        const user = userEvent.setup();

        render(
            <NumberInput
                data-testid="moonstone-numberInput"
            />,
        );
        await user.type(screen.getByTestId('moonstone-numberInput'), 'test1234');

        expect(screen.getByTestId('moonstone-numberInput')).toHaveValue('1234');
    });

    it('should allow negative value', async () => {
        const user = userEvent.setup();

        render(<NumberInput allowNegative data-testid="moonstone-numberInput"/>);
        await user.type(screen.getByTestId('moonstone-numberInput'), '-1');
        expect(screen.getByTestId('moonstone-numberInput')).toHaveValue('-1');
    });

    it('should not allow negative value', async () => {
        const user = userEvent.setup();

        render(<NumberInput data-testid="moonstone-numberInput"/>);
        await user.type(screen.getByTestId('moonstone-numberInput'), '-1');
        expect(screen.getByTestId('moonstone-numberInput')).toHaveValue('1');
    });

    it('should console warn if min or max is negative but allowNegative is false', () => {
        const warning = vi.spyOn(console, 'warn');
        render(<NumberInput min={-3}/>);
        expect(warning).toHaveBeenCalled();
    });

    it('should console warn if min > max', () => {
        const warning = vi.spyOn(console, 'warn');
        render(<NumberInput max={2} min={5}/>);
        expect(warning).toHaveBeenCalled();
    });

    it('should increase value by step on arrowUp', async () => {
        const user = userEvent.setup();

        render(<NumberInput data-testid="moonstone-numberInput" step={1} value="5"/>);
        await user.keyboard('[Tab]');
        await user.keyboard('[ArrowUp]');
        expect(screen.getByTestId('moonstone-numberInput')).toHaveValue('6');
    });

    it('should decrease value by step on arrowDown', async () => {
        const user = userEvent.setup();

        render(<NumberInput data-testid="moonstone-numberInput" step={1} value="5"/>);
        await user.keyboard('[Tab]');
        await user.keyboard('[ArrowDown]');
        expect(screen.getByTestId('moonstone-numberInput')).toHaveValue('4');
    });

    it('should cap value to max on arrowUp', async () => {
        const user = userEvent.setup();

        render(<NumberInput data-testid="moonstone-numberInput" max={10} step={999} value="5"/>);
        await user.keyboard('[Tab]');
        await user.keyboard('[ArrowUp]');
        expect(screen.getByTestId('moonstone-numberInput')).toHaveValue('10');
    });

    it('should cap value to min on arrowDown', async () => {
        const user = userEvent.setup();

        render(<NumberInput data-testid="moonstone-numberInput" min={2} step={999} value="5"/>);
        await user.keyboard('[Tab]');
        await user.keyboard('[ArrowDown]');
        expect(screen.getByTestId('moonstone-numberInput')).toHaveValue('2');
    });
},
);

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

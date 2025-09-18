import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {NumberInput} from './index';

describe('NumberInput', () => {
    it('should render', () => {
        render(<NumberInput data-testid="moonstone-numberInput"/>);
        expect(screen.getByTestId('moonstone-numberInput')).toBeInTheDocument();
    });

    it('should have value', () => {
        render(<NumberInput value="15" data-testid="moonstone-numberInput"/>);
        expect(screen.getByTestId('moonstone-numberInput')).toHaveValue('15');
    });

    it('should have default value', () => {
        render(<NumberInput defaultValue="15" data-testid="moonstone-numberInput"/>);
        expect(screen.getByTestId('moonstone-numberInput')).toHaveValue('15');
    });

    it('should have filtered value', () => {
        render(<NumberInput value="test15" data-testid="moonstone-numberInput"/>);
        expect(screen.getByTestId('moonstone-numberInput')).toHaveValue('15');
    });

    it('should have filtered default value', () => {
        render(<NumberInput defaultValue="test15" data-testid="moonstone-numberInput"/>);
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
                />
        );
        await user.type(screen.getByTestId('moonstone-numberInput'), '1');

        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('should filter user input', async () => {
        const user = userEvent.setup();

        render(
            <NumberInput
                    data-testid="moonstone-numberInput"
                />
        );
        await user.type(screen.getByTestId('moonstone-numberInput'), 'test1234');

        expect(screen.getByTestId('moonstone-numberInput')).toHaveValue('1234');
    });

    it('should allow negative value', async () => {
        const user = userEvent.setup();

        render(<NumberInput data-testid="moonstone-numberInput"/>);
        await user.type(screen.getByTestId('moonstone-numberInput'), '-1');
        expect(screen.getByTestId('moonstone-numberInput')).toHaveValue('-1');
    });

    it('should not allow negative value', async () => {
        const user = userEvent.setup();

        render(<NumberInput allowNegative={false} data-testid="moonstone-numberInput"/>);
        await user.type(screen.getByTestId('moonstone-numberInput'), '-1');
        expect(screen.getByTestId('moonstone-numberInput')).toHaveValue('1');
    });

    it('should console warn if min or max is negative but allowNegative is false', () => {
        const warning = vi.spyOn(console, 'warn');
        render(<NumberInput allowNegative={false} min={-3}/>);
        expect(warning).toHaveBeenCalled();
    });

    it('should console warn if min > max', () => {
        const warning = vi.spyOn(console, 'warn');
        render(<NumberInput max={2} min={5}/>);
        expect(warning).toHaveBeenCalled();
    });

    it('should increase value by step on arrowUp', async () => {
        const user = userEvent.setup();

        render(<NumberInput value="5" step={1} data-testid="moonstone-numberInput"/>);
        await user.keyboard('[Tab]');
        await user.keyboard('[ArrowUp]');
        expect(screen.getByTestId('moonstone-numberInput')).toHaveValue('6');
    });

    it('should decrease value by step on arrowDown', async () => {
        const user = userEvent.setup();

        render(<NumberInput value="5" step={1} data-testid="moonstone-numberInput"/>);
        await user.keyboard('[Tab]');
        await user.keyboard('[ArrowDown]');
        expect(screen.getByTestId('moonstone-numberInput')).toHaveValue('4');
    });

    it('should cap value to max on arrowUp', async () => {
        const user = userEvent.setup();

        render(<NumberInput value="5" step={999} max={10} data-testid="moonstone-numberInput"/>);
        await user.keyboard('[Tab]');
        await user.keyboard('[ArrowUp]');
        expect(screen.getByTestId('moonstone-numberInput')).toHaveValue('10');
    });

    it('should cap value to min on arrowDown', async () => {
        const user = userEvent.setup();

        render(<NumberInput value="5" step={999} min={2} data-testid="moonstone-numberInput"/>);
        await user.keyboard('[Tab]');
        await user.keyboard('[ArrowDown]');
        expect(screen.getByTestId('moonstone-numberInput')).toHaveValue('2');
    });
}
);

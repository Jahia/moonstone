import {useRef} from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {onArrowIncrementation} from './onArrowIncrementation';

type TestInputProps = {readonly step?: number;
    readonly value?: string;
    readonly isNegative?: boolean;
    readonly isDecimal?: boolean;
    readonly min?: number;
    readonly max?: number;
    readonly onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

describe('onArrowIncrementation', () => {
    const TestInput = ({step = 1, value = '5', isNegative = false, min = 2, max = 10, onChange}: TestInputProps) => {
        const inputRef = useRef(null);
        const handleChange = onChange || vi.fn();

        return (
            <input ref={inputRef} type="text" value={value} {...onArrowIncrementation({ref: inputRef, step: step, allowNegative: isNegative, min: min, max: max, onChange: handleChange})}/>
        );
    };

    it('should return if ref is undefined', async () => {
        const user = userEvent.setup();
        render(<input ref={null} type="text" value="5" {...onArrowIncrementation({ref: null, step: 1, allowNegative: true, min: null, max: null, onChange: vi.fn()})}/>);

        await user.keyboard('[Tab]');
        await user.keyboard('[ArrowDown]');
        expect(screen.getByRole('textbox')).toHaveValue('5');
    });

    it('should substract value by step', async () => {
        const user = userEvent.setup();
        render(<TestInput/>);

        await user.keyboard('[Tab]');
        await user.keyboard('[ArrowDown]');
        expect(screen.getByRole('textbox')).toHaveValue('4');
    });

    it('should increment value by step', async () => {
        const user = userEvent.setup();
        render(<TestInput/>);

        await user.keyboard('[Tab]');
        await user.keyboard('[ArrowUp]');
        expect(screen.getByRole('textbox')).toHaveValue('6');
    });

    it('should call the onChange function', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();
        render(<TestInput onChange={handleChange}/>);

        await user.keyboard('[Tab]');
        await user.keyboard('[ArrowDown]');
        expect(handleChange).toHaveBeenCalled();
    });

    it('should not go lower than min', async () => {
        const user = userEvent.setup();
        render(<TestInput value="2"/>);

        await user.keyboard('[Tab]');
        await user.keyboard('[ArrowDown]');
        expect(screen.getByRole('textbox')).toHaveValue('2');
    });

    it('should not go higher than max', async () => {
        const user = userEvent.setup();
        render(<TestInput value="10"/>);

        await user.keyboard('[Tab]');
        await user.keyboard('[ArrowUp]');
        expect(screen.getByRole('textbox')).toHaveValue('10');
    });

    it('should not go under 0 if allowNegative is false', async () => {
        const user = userEvent.setup();
        render(<TestInput min={undefined} value="0"/>);

        await user.keyboard('[Tab]');
        await user.keyboard('[ArrowDown]');
        expect(screen.getByRole('textbox')).toHaveValue('0');
    });

    it('should go under 0 if allowNegative is true', async () => {
        const user = userEvent.setup();
        render(<TestInput isNegative min={null} value="0"/>);

        await user.keyboard('[Tab]');
        await user.keyboard('[ArrowDown]');
        expect(screen.getByRole('textbox')).toHaveValue('-1');
    });
});

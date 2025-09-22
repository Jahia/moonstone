import {useRef} from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {onArrowIncrementation} from './onArrowIncrementation';

type TestInputProps = {readonly step?: number;
    readonly defaultValue?: string;
    readonly isNegative?: boolean;
    readonly isDecimal?: boolean;
    readonly min?: number;
    readonly max?: number;
};

describe('onArrowIncrementation', () => {
    const TestInput = ({step = 1, defaultValue = '5', isNegative = false, min = 2, max = 10}: TestInputProps) => {
        const inputRef = useRef(null);

        return (
            <input ref={inputRef} type="text" defaultValue={defaultValue} {...onArrowIncrementation({ref: inputRef, step: step, allowNegative: isNegative, min: min, max: max})}/>
        );
    };

    it('should return if ref is undefined', async () => {
        const user = userEvent.setup();
        render(<input ref={null} type="text" defaultValue="5" {...onArrowIncrementation({ref: null, step: 1, allowNegative: true, min: null, max: null})}/>);

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

    it('should substract decimal value by step', async () => {
        const user = userEvent.setup();
        render(<TestInput defaultValue="5.05"/>);

        await user.keyboard('[Tab]');
        await user.keyboard('[ArrowDown]');
        expect(screen.getByRole('textbox')).toHaveValue('4.05');
    });

    it('should substract decimal value with comma by step', async () => {
        const user = userEvent.setup();
        render(<TestInput defaultValue="5,05"/>);

        await user.keyboard('[Tab]');
        await user.keyboard('[ArrowDown]');
        expect(screen.getByRole('textbox')).toHaveValue('4,05');
    });

    it('should increment value by step', async () => {
        const user = userEvent.setup();
        render(<TestInput/>);

        await user.keyboard('[Tab]');
        await user.keyboard('[ArrowUp]');
        expect(screen.getByRole('textbox')).toHaveValue('6');
    });

    it('should increment decimal value by step', async () => {
        const user = userEvent.setup();
        render(<TestInput defaultValue="5.05"/>);

        await user.keyboard('[Tab]');
        await user.keyboard('[ArrowUp]');
        expect(screen.getByRole('textbox')).toHaveValue('6.05');
    });

    it('should increment decimal value with comma by step', async () => {
        const user = userEvent.setup();
        render(<TestInput defaultValue="5,05"/>);

        await user.keyboard('[Tab]');
        await user.keyboard('[ArrowUp]');
        expect(screen.getByRole('textbox')).toHaveValue('6,05');
    });

    it('should not go lower than min', async () => {
        const user = userEvent.setup();
        render(<TestInput defaultValue="2"/>);

        await user.keyboard('[Tab]');
        await user.keyboard('[ArrowDown]');
        expect(screen.getByRole('textbox')).toHaveValue('2');
    });

    it('should not go higher than max', async () => {
        const user = userEvent.setup();
        render(<TestInput defaultValue="10"/>);

        await user.keyboard('[Tab]');
        await user.keyboard('[ArrowUp]');
        expect(screen.getByRole('textbox')).toHaveValue('10');
    });

    it('should not go under 0 if allowNegative is false', async () => {
        const user = userEvent.setup();
        render(<TestInput min={undefined} defaultValue="0"/>);

        await user.keyboard('[Tab]');
        await user.keyboard('[ArrowDown]');
        expect(screen.getByRole('textbox')).toHaveValue('0');
    });

    it('should go under 0 if allowNegative is true', async () => {
        const user = userEvent.setup();
        render(<TestInput isNegative min={null} defaultValue="0"/>);

        await user.keyboard('[Tab]');
        await user.keyboard('[ArrowDown]');
        expect(screen.getByRole('textbox')).toHaveValue('-1');
    });
});

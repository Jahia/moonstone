import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {BaseInput} from './index';
import {Love} from '~/icons';

describe('BaseInput', () => {
    it('should render', () => {
        render(<BaseInput data-testid="moonstone-input"/>);
        expect(screen.getByTestId('moonstone-input')).toBeInTheDocument();
    });

    it('should display additional className', () => {
        const {container} = render(<BaseInput className="test-class"/>);
        expect(container.querySelector('.test-class')).toBeInTheDocument();
    });

    it('should display additional attributes', () => {
        const {container} = render(<BaseInput data-test="test"/>);
        expect(
            container.querySelector('[data-test="test"]')
        ).toBeInTheDocument();
    });

    it('should have specified id', () => {
        const {container} = render(<BaseInput id="test-id"/>);
        expect(container.querySelector('#test-id')).toBeInTheDocument();
    });

    it('should have specified placeholder', () => {
        render(<BaseInput placeholder="test-placeholder"/>);
        expect(
            screen.getByPlaceholderText('test-placeholder')
        ).toBeInTheDocument();
    });

    it('should display size class for big input', () => {
        const {container} = render(<BaseInput size="big"/>);
        expect(container.querySelector('.moonstone-big')).toBeInTheDocument();
    });

    it('should be disabled', () => {
        render(<BaseInput isDisabled data-testid="moonstone-input"/>);
        expect(screen.getByTestId('moonstone-input')).toBeDisabled();
    });

    it('should be read only', () => {
        render(<BaseInput isReadOnly data-testid="moonstone-input"/>);
        expect(screen.getByTestId('moonstone-input')).toHaveAttribute(
            'readonly'
        );
    });

    it('should display the specified icon', () => {
        render(<BaseInput icon={<Love data-testid="test-icon"/>}/>);
        expect(screen.getByTestId('test-icon')).toBeInTheDocument();
    });

    it('should work when no value or defaultValue is specified', async () => {
        const user = userEvent.setup();

        render(<BaseInput data-testid="moonstone-input"/>);
        await user.type(screen.getByTestId('moonstone-input'), 'type a value');

        expect(screen.getByDisplayValue('type a value')).toBeInTheDocument();
    });
});

describe('UncontrolledBaseInput', () => {
    it('should have specified defaultValue', () => {
        render(<BaseInput defaultValue="test-default-value"/>);
        expect(
            screen.getByDisplayValue('test-default-value')
        ).toBeInTheDocument();
    });

    it('should update specified defaultValue', async () => {
        const user = userEvent.setup();

        render(
            <BaseInput
                data-testid="moonstone-input"
                defaultValue="test-default-value"
            />
        );
        await user.type(screen.getByTestId('moonstone-input'), '-updated');

        expect(
            screen.getByDisplayValue('test-default-value-updated')
        ).toBeInTheDocument();
    });

    it('should call specified onChange function', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(
            <BaseInput
                data-testid="moonstone-input"
                defaultValue="test-default-value"
                onChange={handleChange}
            />
        );
        await user.type(screen.getByTestId('moonstone-input'), '1');

        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('should call specified onClear function', async () => {
        const user = userEvent.setup();
        const handleClear = vi.fn();

        render(
            <BaseInput
                variant="search"
                defaultValue="test-default-value"
                onClear={handleClear}
            />
        );
        await user.click(screen.getByLabelText('Reset'));

        expect(handleClear).toHaveBeenCalledTimes(1);
    });
});

describe('ControlledBaseInput', () => {
    it('should display specified value', () => {
        render(<BaseInput value="test-value" onChange={() => null}/>);
        expect(screen.getByDisplayValue('test-value')).toBeInTheDocument();
    });

    it('should call specified onChange function', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(
            <BaseInput
                data-testid="moonstone-input"
                value="test-value"
                onChange={handleChange}
            />
        );
        await user.type(screen.getByTestId('moonstone-input'), '1');

        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('should call specified onClear function', async () => {
        const user = userEvent.setup();
        const handleClear = vi.fn();

        render(
            <BaseInput
                variant="search"
                value="test-value"
                onChange={() => null}
                onClear={handleClear}
            />
        );
        await user.click(screen.getByLabelText('Reset'));

        expect(handleClear).toHaveBeenCalledTimes(1);
    });
});

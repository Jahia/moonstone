import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

import { Input } from './index';
import { Love } from '~/icons';

describe('Input', () => {
    it('should render', () => {
        render(<Input data-testid="moonstone-input"/>);
        expect(screen.getByTestId('moonstone-input')).toBeInTheDocument();
    });

    it('should display additional className', () => {
        const { container } = render(<Input className="test-class"/>);
        expect(container.querySelector('.test-class')).toBeInTheDocument();
    });

    it('should display additional attributes', () => {
        const { container } = render(<Input data-test="test"/>);
        expect(
            container.querySelector('[data-test="test"]'),
        ).toBeInTheDocument();
    });

    it('should have specified id', () => {
        const { container } = render(<Input id="test-id"/>);
        expect(container.querySelector('#test-id')).toBeInTheDocument();
    });

    it('should have specified placeholder', () => {
        render(<Input placeholder="test-placeholder"/>);
        expect(
            screen.getByPlaceholderText('test-placeholder'),
        ).toBeInTheDocument();
    });

    it('should display size class for big input', () => {
        const { container } = render(<Input size="big"/>);
        expect(container.querySelector('.moonstone-big')).toBeInTheDocument();
    });

    it('should be disabled', () => {
        render(<Input isDisabled data-testid="moonstone-input"/>);
        expect(screen.getByTestId('moonstone-input')).toBeDisabled();
    });

    it('should be read only', () => {
        render(<Input isReadOnly data-testid="moonstone-input"/>);
        expect(screen.getByTestId('moonstone-input')).toHaveAttribute(
            'readonly',
        );
    });

    it('should display the specified icon', () => {
        render(<Input icon={<Love data-testid="test-icon"/>}/>);
        expect(screen.getByTestId('test-icon')).toBeInTheDocument();
    });

    it('should work when no value or defaultValue is specified', async () => {
        const user = userEvent.setup();

        render(<Input data-testid="moonstone-input"/>);
        await user.type(screen.getByTestId('moonstone-input'), 'type a value');

        expect(screen.getByDisplayValue('type a value')).toBeInTheDocument();
    });

    it('should display SearchInput when variant is set to search', () => {
        render(<Input variant="search"/>);
        expect(screen.getByRole('search')).toBeInTheDocument();
    });
});

describe('UncontrolledBaseInput', () => {
    it('should have specified defaultValue', () => {
        render(<Input defaultValue="test-default-value"/>);
        expect(
            screen.getByDisplayValue('test-default-value'),
        ).toBeInTheDocument();
    });

    it('should update specified defaultValue', async () => {
        const user = userEvent.setup();

        render(
            <Input
                data-testid="moonstone-input"
                defaultValue="test-default-value"
            />,
        );
        await user.type(screen.getByTestId('moonstone-input'), '-updated');

        expect(
            screen.getByDisplayValue('test-default-value-updated'),
        ).toBeInTheDocument();
    });

    it('should call specified onChange function', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(
            <Input
                data-testid="moonstone-input"
                defaultValue="test-default-value"
                onChange={handleChange}
            />,
        );
        await user.type(screen.getByTestId('moonstone-input'), '1');

        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('should call specified onClear function', async () => {
        const user = userEvent.setup();
        const handleClear = vi.fn();

        render(
            <Input defaultValue="test-default-value" onClear={handleClear}/>,
        );
        await user.click(screen.getByLabelText('Reset'));

        expect(handleClear).toHaveBeenCalledTimes(1);
    });
});

describe('ControlledBaseInput', () => {
    it('should display specified value', () => {
        render(<Input value="test-value" onChange={() => null}/>);
        expect(screen.getByDisplayValue('test-value')).toBeInTheDocument();
    });

    it('should call specified onChange function', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(
            <Input
                data-testid="moonstone-input"
                value="test-value"
                onChange={handleChange}
            />,
        );
        await user.type(screen.getByTestId('moonstone-input'), '1');

        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('should call specified onClear function', async () => {
        const user = userEvent.setup();
        const handleClear = vi.fn();

        render(
            <Input
                value="test-value"
                onChange={() => null}
                onClear={handleClear}
            />,
        );
        await user.click(screen.getByLabelText('Reset'));

        expect(handleClear).toHaveBeenCalledTimes(1);
    });
});

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

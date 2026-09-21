import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

import { Checkbox } from './index';

describe('Checkbox', () => {
    it('should display additional class names', () => {
        const className = 'test';
        const { container } = render(
            <Checkbox aria-label="checkbox" className={className}/>,
        );
        expect(container.getElementsByClassName(className)).toBeTruthy();
    });

    it('should add additional attributes', () => {
        const customAttribute = 'test';
        render(
            <Checkbox aria-label="checkbox" data-custom={customAttribute}/>,
        );
        expect(screen.getByRole('checkbox')).toHaveAttribute(
            'data-custom',
            customAttribute,
        );
    });

    it('should call onChange function with checked status', async () => {
        const user = userEvent.setup();
        const handleOnChange = vi.fn((_, value, checked) => [value, checked]);

        render(
            <Checkbox
                data-testid="moonstone-checkbox"
                value="my-value"
                onChange={handleOnChange}
            />,
        );
        await user.click(screen.getByTestId('moonstone-checkbox'));

        expect(handleOnChange).toHaveBeenCalled();
        expect(handleOnChange).toHaveReturnedWith(['my-value', true]); // Checkbox has been checked
    });

    it('should call onChange function with checked status for controlled', async () => {
        const user = userEvent.setup();
        const handleOnChange = vi.fn((_, value, checked) => [value, checked]);

        render(
            <Checkbox
                checked
                data-testid="moonstone-checkbox"
                onChange={handleOnChange}
            />,
        );
        await user.click(screen.getByTestId('moonstone-checkbox'));

        expect(handleOnChange).toHaveBeenCalled();
        expect(handleOnChange).toHaveReturnedWith([undefined, false]); // Checkbox has been unchecked, no value specified
    });

    it('should check off when clicked on', async () => {
        const user = userEvent.setup();

        render(<Checkbox aria-label="checkbox"/>);
        const checkbox = screen.getByRole('checkbox');
        await user.click(checkbox);

        expect(checkbox).toBeChecked();
    });

    it('should un-check when clicked on twice', async () => {
        const user = userEvent.setup();

        render(<Checkbox aria-label="checkbox"/>);
        const checkbox = screen.getByRole('checkbox');
        await user.click(checkbox);
        await user.click(checkbox);

        expect(checkbox).not.toBeChecked();
    });

    it('should be unchecked by default', () => {
        render(<Checkbox aria-label="checkbox"/>);
        expect(screen.getByRole('checkbox')).not.toBeChecked();
    });

    it('should initially be checked on when the defaultChecked prop is set', () => {
        render(<Checkbox defaultChecked aria-label="checkbox"/>);
        expect(screen.getByRole('checkbox')).toBeChecked();
    });

    it('should initially be checked on when the checked prop is set', () => {
        render(<Checkbox checked aria-label="checkbox"/>);
        expect(screen.getByRole('checkbox')).toBeChecked();
    });

    it('should initially be mixed state on when the indeterminate prop is set', () => {
        render(<Checkbox indeterminate aria-label="checkbox"/>);
        expect(screen.getByRole('checkbox')).toBePartiallyChecked();
    });

    it('should have mixed state when specified with the isIndeterminate prop', () => {
        render(
            <Checkbox
                indeterminate
                aria-label="checkbox"
                onChange={() => null}
            />,
        );
        expect(screen.getByRole('checkbox')).toBePartiallyChecked();
    });

    it('should have the default size by default', () => {
        render(<Checkbox aria-label="checkbox"/>);
        expect(screen.getByRole('checkbox')).toHaveClass(
            'moonstone-checkbox_sizeDefault',
        );
    });

    it('should use the set size', () => {
        render(
            <Checkbox
                aria-label="checkbox"
                data-testid="moonstone-checkboxDefault"
                size="default"
            />,
        );
        expect(screen.getByTestId('moonstone-checkboxDefault')).toHaveClass(
            'moonstone-checkbox_sizeDefault',
        );

        render(
            <Checkbox
                aria-label="checkbox"
                data-testid="moonstone-checkboxBig"
                size="big"
            />,
        );
        expect(screen.getByTestId('moonstone-checkboxBig')).toHaveClass(
            'moonstone-checkbox_sizeBig',
        );
    });

    it('should be disabled when isDisabled is set', () => {
        render(<Checkbox isDisabled aria-label="checkbox"/>);
        expect(screen.getByRole('checkbox')).toBeDisabled();
    });

    it('should be read-only when isReadOnly is set', () => {
        render(<Checkbox isReadOnly aria-label="checkbox"/>);
        expect(screen.getByRole('checkbox')).toHaveAttribute(
            'aria-readonly',
            'true',
        );
    });
});

const IndeterminateCheckbox = ({ onChange }: { readonly onChange: (checked: boolean) => void }) => {
    const [checked, setChecked] = useState(false);
    const [indeterminate, setIndeterminate] = useState(true);
    return (
        <Checkbox
            checked={checked}
            indeterminate={indeterminate}
            value="mixed"
            onChange={(_event, _value, nextChecked) => {
                setChecked(nextChecked);
                setIndeterminate(false);
                onChange(nextChecked);
            }}
        />
    );
};

describe('Checkbox keyboard', () => {
    it('reaches the checkbox with Tab', async () => {
        render(
            <>
                <button type="button">before</button>
                <Checkbox value="a"/>
            </>,
        );
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('checkbox')).toHaveFocus();
    });

    it('checks the focused checkbox with Space and calls onChange', async () => {
        const onChange = vi.fn();
        render(<Checkbox value="a" onChange={onChange}/>);
        screen.getByRole('checkbox').focus();
        await userEvent.keyboard(' ');
        expect(screen.getByRole('checkbox')).toBeChecked();
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(expect.anything(), 'a', true);
    });

    it('unchecks a checked checkbox with Space', async () => {
        const onChange = vi.fn();
        render(<Checkbox defaultChecked value="a" onChange={onChange}/>);
        screen.getByRole('checkbox').focus();
        await userEvent.keyboard(' ');
        expect(screen.getByRole('checkbox')).not.toBeChecked();
        expect(onChange).toHaveBeenCalledWith(expect.anything(), 'a', false);
    });

    it('skips a disabled checkbox in the tab sequence', async () => {
        render(
            <>
                <button type="button">before</button>
                <Checkbox isDisabled value="a"/>
                <button type="button">after</button>
            </>,
        );
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('button', { name: 'after' })).toHaveFocus();
    });

    it('becomes checked with Space when indeterminate', async () => {
        const onChange = vi.fn();
        render(<IndeterminateCheckbox onChange={onChange}/>);
        expect(screen.getByRole('checkbox')).toHaveAttribute('aria-checked', 'mixed');
        screen.getByRole('checkbox').focus();
        await userEvent.keyboard(' ');
        expect(onChange).toHaveBeenCalledWith(true);
        expect(screen.getByRole('checkbox')).toBeChecked();
        expect(screen.getByRole('checkbox')).toHaveAttribute('aria-checked', 'true');
    });
});

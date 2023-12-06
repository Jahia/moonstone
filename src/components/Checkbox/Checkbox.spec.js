import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {Checkbox} from './index';

describe('Checkbox', () => {
    it('should display additional class names', () => {
        const className = 'test';
        const {container} = render(<Checkbox aria-label="checkbox" className={className}/>);
        expect(container.getElementsByClassName(className)).toBeTruthy();
    });

    it('should add additional attributes', () => {
        const customAttribute = 'test';
        render(<Checkbox aria-label="checkbox" data-custom={customAttribute}/>);
        expect(screen.getByRole('checkbox')).toHaveAttribute('data-custom', customAttribute);
    });

    it('should call onChange function with checked status', () => {
        const handleOnChange = jest.fn((_, value, checked) => [value, checked]);
        render(<Checkbox data-testid="moonstone-checkbox" value="my-value" onChange={handleOnChange}/>);
        const checkbox = screen.getByTestId('moonstone-checkbox');

        userEvent.click(checkbox);
        expect(handleOnChange).toHaveBeenCalled();
        expect(handleOnChange).toHaveReturnedWith(['my-value', true]); // Checkbox has been checked
    });

    it('should call onChange function with checked status for controlled', () => {
        const handleOnChange = jest.fn((_, value, checked) => [value, checked]);
        render(<Checkbox checked data-testid="moonstone-checkbox" onChange={handleOnChange}/>);
        const checkbox = screen.getByTestId('moonstone-checkbox');

        userEvent.click(checkbox);
        expect(handleOnChange).toHaveBeenCalled();
        expect(handleOnChange).toHaveReturnedWith([undefined, false]); // Checkbox has been unchecked, no value specified
    });

    it('should check off when clicked on', () => {
        render(<Checkbox aria-label="checkbox"/>);
        const checkbox = screen.getByRole('checkbox');
        userEvent.click(checkbox);
        expect(checkbox).toBeChecked();
    });

    it('should un-check when clicked on twice', () => {
        render(<Checkbox aria-label="checkbox"/>);
        const checkbox = screen.getByRole('checkbox');
        userEvent.click(checkbox);
        userEvent.click(checkbox);
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
        render(<Checkbox checked="mixed" aria-label="checkbox" onChange={() => null}/>);
        expect(screen.getByRole('checkbox')).toBePartiallyChecked();
    });

    it('should have the default size by default', () => {
        render(<Checkbox aria-label="checkbox"/>);
        expect(screen.getByRole('checkbox')).toHaveClass('moonstone-checkbox_sizeDefault');
    });

    it('should use the set size', () => {
        render(<Checkbox aria-label="checkbox" size="default" data-testid="moonstone-checkboxDefault"/>);
        expect(screen.getByTestId('moonstone-checkboxDefault')).toHaveClass('moonstone-checkbox_sizeDefault');

        render(<Checkbox aria-label="checkbox" size="big" data-testid="moonstone-checkboxBig"/>);
        expect(screen.getByTestId('moonstone-checkboxBig')).toHaveClass('moonstone-checkbox_sizeBig');
    });

    it('should be disabled when isDisabled is set', () => {
        render(<Checkbox isDisabled aria-label="checkbox"/>);
        expect(screen.getByRole('checkbox')).toBeDisabled();
    });

    it('should be read-only when isReadOnly is set', () => {
        render(<Checkbox isReadOnly aria-label="checkbox"/>);
        expect(screen.getByRole('checkbox')).toHaveAttribute('aria-readonly', 'true');
    });
});

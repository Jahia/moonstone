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

    it('should initially be checked off when the defaultSelected prop is set', () => {
        render(<Checkbox defaultSelected aria-label="checkbox"/>);
        expect(screen.getByRole('checkbox')).toBeChecked();
    });

    it('should have mixed state when specified with the isIndeterminate prop', () => {
        render(<Checkbox isIndeterminate aria-label="checkbox"/>);
        expect(screen.getByRole('checkbox')).toBePartiallyChecked();
    });
});

import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {Switch} from './index';

describe('Switch', () => {
    it('should display additional class names', () => {
        const {container} = render(<Switch className="class-switch"/>);
        expect(container.getElementsByClassName('class-switch')).toBeTruthy();
    });

    it('should add additional attributes', () => {
        render(<Switch aria-label="switch" data-custom="test"/>);
        expect(screen.getByRole('checkbox')).toHaveAttribute(
            'data-custom',
            'test'
        );
    });

    it('should call onChange function with checked status', async () => {
        const user = userEvent.setup();
        const handleOnChange = vi.fn((_, value, checked) => [value, checked]);

        render(
            <Switch
                data-testid="moonstone-switch"
                value="my-value"
                onChange={handleOnChange}
            />
        );
        await user.click(screen.getByTestId('moonstone-switch'));

        expect(handleOnChange).toHaveBeenCalled();
        expect(handleOnChange).toHaveReturnedWith(['my-value', true]); // Switch has been checked
    });

    it('should call onChange function with checked status for controlled', async () => {
        const user = userEvent.setup();
        const handleOnChange = vi.fn((_, value, checked) => [value, checked]);

        render(
            <Switch
                checked
                data-testid="moonstone-switch"
                onChange={handleOnChange}
            />
        );
        await user.click(screen.getByTestId('moonstone-switch'));

        expect(handleOnChange).toHaveBeenCalled();
        expect(handleOnChange).toHaveReturnedWith([undefined, false]); // Switch has been unchecked, no value specified
    });

    it('should check off when clicked on', async () => {
        const user = userEvent.setup();

        render(<Switch aria-label="switch"/>);
        const switchItem = screen.getByRole('checkbox');
        await user.click(switchItem);

        expect(switchItem).toBeChecked();
    });

    it('should un-check when clicked on twice', async () => {
        const user = userEvent.setup();

        render(<Switch aria-label="switch"/>);
        const switchItem = screen.getByRole('checkbox');
        await user.click(switchItem);
        await user.click(switchItem);

        expect(switchItem).not.toBeChecked();
    });

    it('should be unchecked by default', () => {
        render(<Switch aria-label="switch"/>);
        expect(screen.getByRole('checkbox')).not.toBeChecked();
    });

    it('should initially be checked on when the defaultChecked prop is set', () => {
        render(<Switch defaultChecked aria-label="switch"/>);
        expect(screen.getByRole('checkbox')).toBeChecked();
    });

    it('should initially be checked on when the checked prop is set', () => {
        render(<Switch checked aria-label="switch"/>);
        expect(screen.getByRole('checkbox')).toBeChecked();
    });

    it('should be disabled when isDisabled is set', () => {
        render(<Switch isDisabled aria-label="switch"/>);
        expect(screen.getByRole('checkbox')).toBeDisabled();
    });
});

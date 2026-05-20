import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {ButtonToggle} from './index';
import {Apps} from '~/icons/index';

describe('ButtonToggle', () => {
    it('should render', () => {
        render(
            <ButtonToggle
                label="test me"
                data-testid="moonstone-buttonToggle"
            />
        );
        expect(
            screen.getByTestId('moonstone-buttonToggle')
        ).toBeInTheDocument();
    });

    it('should display additional className', () => {
        render(
            <ButtonToggle
                label="test me"
                data-testid="moonstone-buttonToggle"
                className="test-className"
            />
        );
        expect(screen.getByTestId('moonstone-buttonToggle')).toHaveClass(
            'test-className'
        );
    });

    it('should have the specified label', () => {
        render(<ButtonToggle label="test me"/>);
        expect(screen.getByText('test me')).toBeInTheDocument();
    });

    it('should display the iconStart', () => {
        render(
            <ButtonToggle
                iconStart={<Apps data-testid="moonstone-buttonToggleIcon"/>}
            />
        );
        expect(
            screen.getByTestId('moonstone-buttonToggleIcon')
        ).toBeInTheDocument();
    });

    it('should display the iconEnd', () => {
        render(
            <ButtonToggle
                iconEnd={<Apps data-testid="moonstone-buttonToggleIconEnd"/>}
                label="test me"
            />
        );
        expect(
            screen.getByTestId('moonstone-buttonToggleIconEnd')
        ).toBeInTheDocument();
    });

    it('should not display the iconEnd when no label is provided', () => {
        render(
            <ButtonToggle
                iconEnd={<Apps data-testid="moonstone-buttonToggleIconEnd"/>}
            />
        );
        expect(
            screen.queryByTestId('moonstone-buttonToggleIconEnd')
        ).not.toBeInTheDocument();
    });

    it('should have the specified label when an iconStart is provided', () => {
        render(
            <ButtonToggle
                iconStart={<Apps data-testid="moonstone-buttonToggleIcon"/>}
                label="test me"
            />
        );
        expect(
            screen.getByTestId('moonstone-buttonToggleIcon')
        ).toBeInTheDocument();
        expect(screen.getByText('test me')).toBeInTheDocument();
    });

    it('should use default size', () => {
        render(
            <ButtonToggle
                data-testid="moonstone-buttonToggle"
                label="test me"
            />
        );
        expect(screen.getByTestId('moonstone-buttonToggle')).toHaveClass(
            'moonstone-button'
        );
    });

    it('should use size big', () => {
        render(
            <ButtonToggle
                data-testid="moonstone-buttonToggle"
                size="big"
                label="test me"
            />
        );
        expect(screen.getByTestId('moonstone-buttonToggle')).toHaveClass(
            'moonstone-button_big'
        );
    });

    it('should use the reverse mode', () => {
        render(
            <ButtonToggle
                isReversed
                data-testid="moonstone-buttonToggle"
                label="test me"
            />
        );
    });

    it('should be disabled', () => {
        render(
            <ButtonToggle
                isDisabled
                data-testid="moonstone-buttonToggle"
                label="test me"
            />
        );
        expect(screen.getByTestId('moonstone-buttonToggle')).toBeDisabled();
    });

    it('should display a loader when no icon is provided', () => {
        render(
            <ButtonToggle
                isLoading
                data-testid="moonstone-buttonToggle"
                label="test me"
            />
        );
        expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('should display loader when an iconStart is provided', () => {
        render(<ButtonToggle isLoading iconStart={<Apps/>} label="test me"/>);
        expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('should prevent click when the button is loading', async () => {
        const user = userEvent.setup();
        const onClick = vi.fn();

        render(
            <ButtonToggle
                isLoading
                data-testid="moonstone-buttonToggle"
                label="test me"
                onClick={onClick}
            />
        );
        await user.click(screen.getByTestId('moonstone-buttonToggle'));

        expect(onClick).not.toHaveBeenCalled();
    });

    it('should not display iconStart when the button is loading', () => {
        render(
            <ButtonToggle
                isLoading
                iconStart={<Apps data-testid="moonstone-buttonToggleIcon"/>}
                label="test me"
            />
        );
        expect(
            screen.queryByTestId('moonstone-buttonToggleIcon')
        ).not.toBeInTheDocument();
    });

    it('should call onClick function', async () => {
        const user = userEvent.setup();
        const onClick = vi.fn();

        render(
            <ButtonToggle
                data-testid="moonstone-buttonToggle"
                label="test me"
                onClick={onClick}
            />
        );
        await user.click(screen.getByTestId('moonstone-buttonToggle'));

        expect(onClick).toHaveBeenCalled();
    });

    it('should display as pressed when clicked', async () => {
        const user = userEvent.setup();
        const onClick = vi.fn();

        render(
            <ButtonToggle
                data-testid="moonstone-buttonToggle"
                label="test me"
                onClick={onClick}
            />
        );
        await user.click(screen.getByTestId('moonstone-buttonToggle'));

        expect(screen.getByTestId('moonstone-buttonToggle')).toHaveClass(
            'moonstone-buttonToggle_pressed'
        );
    });

    it('should display as default when clicked twice', async () => {
        const user = userEvent.setup();
        const onClick = vi.fn();

        render(
            <ButtonToggle
                data-testid="moonstone-buttonToggle"
                label="test me"
                onClick={onClick}
            />
        );
        await user.click(screen.getByTestId('moonstone-buttonToggle'));
        await user.click(screen.getByTestId('moonstone-buttonToggle'));

        expect(screen.getByTestId('moonstone-buttonToggle')).not.toHaveClass(
            'moonstone-buttonToggle_pressed'
        );
    });

    it('should call onChange function', async () => {
        const user = userEvent.setup();
        const handleOnChange = vi.fn();

        render(
            <ButtonToggle
                data-testid="moonstone-buttonToggle"
                label="test me"
                onChange={handleOnChange}
            />
        );
        await user.click(screen.getByTestId('moonstone-buttonToggle'));

        expect(handleOnChange).toHaveBeenCalled();
    });

    it('should be pressed if isPressed is set', () => {
        render(<ButtonToggle isPressed data-testid="moonstone-buttonToggle"/>);
        expect(screen.getByTestId('moonstone-buttonToggle')).toHaveAttribute(
            'aria-pressed',
            'true'
        );
    });
});

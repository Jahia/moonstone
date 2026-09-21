import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ButtonToggle } from './index';
import { Apps } from '~/icons';

describe('ButtonToggle', () => {
    it('should render', () => {
        render(
            <ButtonToggle
                data-testid="moonstone-buttonToggle"
                label="test me"
            />,
        );
        expect(
            screen.getByTestId('moonstone-buttonToggle'),
        ).toBeInTheDocument();
    });

    it('should display additional className', () => {
        render(
            <ButtonToggle
                className="test-className"
                data-testid="moonstone-buttonToggle"
                label="test me"
            />,
        );
        expect(screen.getByTestId('moonstone-buttonToggle')).toHaveClass(
            'test-className',
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
            />,
        );
        expect(
            screen.getByTestId('moonstone-buttonToggleIcon'),
        ).toBeInTheDocument();
    });

    it('should display the iconEnd', () => {
        render(
            <ButtonToggle
                iconEnd={<Apps data-testid="moonstone-buttonToggleIconEnd"/>}
                label="test me"
            />,
        );
        expect(
            screen.getByTestId('moonstone-buttonToggleIconEnd'),
        ).toBeInTheDocument();
    });

    it('should not display the iconEnd when no label is provided', () => {
        render(
            <ButtonToggle
                iconEnd={<Apps data-testid="moonstone-buttonToggleIconEnd"/>}
            />,
        );
        expect(
            screen.queryByTestId('moonstone-buttonToggleIconEnd'),
        ).not.toBeInTheDocument();
    });

    it('should have the specified label when an iconStart is provided', () => {
        render(
            <ButtonToggle
                iconStart={<Apps data-testid="moonstone-buttonToggleIcon"/>}
                label="test me"
            />,
        );
        expect(
            screen.getByTestId('moonstone-buttonToggleIcon'),
        ).toBeInTheDocument();
        expect(screen.getByText('test me')).toBeInTheDocument();
    });

    it('should use default size', () => {
        render(
            <ButtonToggle
                data-testid="moonstone-buttonToggle"
                label="test me"
            />,
        );
        expect(screen.getByTestId('moonstone-buttonToggle')).toHaveClass(
            'moonstone-button',
        );
    });

    it('should use size big', () => {
        render(
            <ButtonToggle
                data-testid="moonstone-buttonToggle"
                label="test me"
                size="big"
            />,
        );
        expect(screen.getByTestId('moonstone-buttonToggle')).toHaveClass(
            'moonstone-button_big',
        );
    });

    it('should use the reverse mode', () => {
        render(
            <ButtonToggle
                isReversed
                data-testid="moonstone-buttonToggle"
                label="test me"
            />,
        );
    });

    it('should be disabled', () => {
        render(
            <ButtonToggle
                isDisabled
                data-testid="moonstone-buttonToggle"
                label="test me"
            />,
        );
        expect(screen.getByTestId('moonstone-buttonToggle')).toBeDisabled();
    });

    it('should display a loader when no icon is provided', () => {
        render(
            <ButtonToggle
                isLoading
                data-testid="moonstone-buttonToggle"
                label="test me"
            />,
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
            />,
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
            />,
        );
        expect(
            screen.queryByTestId('moonstone-buttonToggleIcon'),
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
            />,
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
            />,
        );
        await user.click(screen.getByTestId('moonstone-buttonToggle'));

        expect(screen.getByTestId('moonstone-buttonToggle')).toHaveClass(
            'moonstone-buttonToggle_pressed',
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
            />,
        );
        await user.click(screen.getByTestId('moonstone-buttonToggle'));
        await user.click(screen.getByTestId('moonstone-buttonToggle'));

        expect(screen.getByTestId('moonstone-buttonToggle')).not.toHaveClass(
            'moonstone-buttonToggle_pressed',
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
            />,
        );
        await user.click(screen.getByTestId('moonstone-buttonToggle'));

        expect(handleOnChange).toHaveBeenCalled();
    });

    it('should be pressed if isPressed is set', () => {
        render(<ButtonToggle isPressed data-testid="moonstone-buttonToggle"/>);
        expect(screen.getByTestId('moonstone-buttonToggle')).toHaveAttribute(
            'aria-pressed',
            'true',
        );
    });
});

const renderToggle = (props = {}) => {
    const onClick = vi.fn();
    render(
        <>
            <button type="button">before</button>
            <ButtonToggle label="Bold" onClick={onClick} {...props}/>
        </>,
    );
    return { onClick };
};

describe('ButtonToggle keyboard', () => {
    it('reaches the toggle button with Tab', async () => {
        renderToggle();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('button', { name: 'Bold' })).toHaveFocus();
    });

    it('toggles the pressed state with Enter', async () => {
        const { onClick } = renderToggle();
        const toggle = screen.getByRole('button', { name: 'Bold' });
        expect(toggle).toHaveAttribute('aria-pressed', 'false');
        toggle.focus();
        await userEvent.keyboard('{Enter}');
        expect(onClick).toHaveBeenCalledTimes(1);
        expect(toggle).toHaveAttribute('aria-pressed', 'true');
    });

    it('toggles the pressed state with Space', async () => {
        const { onClick } = renderToggle({ defaultPressed: true });
        const toggle = screen.getByRole('button', { name: 'Bold' });
        expect(toggle).toHaveAttribute('aria-pressed', 'true');
        toggle.focus();
        await userEvent.keyboard(' ');
        expect(onClick).toHaveBeenCalledTimes(1);
        expect(toggle).toHaveAttribute('aria-pressed', 'false');
    });

    it.fails('keeps focus on the toggle button after it is toggled with the keyboard', async () => {
        renderToggle();
        const toggle = screen.getByRole('button', { name: 'Bold' });
        toggle.focus();
        await userEvent.keyboard('{Enter}');
        expect(toggle).toHaveFocus();
    });

    it('skips a disabled toggle button in the tab sequence and does not toggle it', async () => {
        const { onClick } = renderToggle({ isDisabled: true });
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('button', { name: 'Bold' })).not.toHaveFocus();
        await userEvent.keyboard('{Enter}');
        expect(onClick).not.toHaveBeenCalled();
    });
});

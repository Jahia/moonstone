import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { CustomDropdown, MenuItem, Typography } from '~/components';
import { Love } from '~/icons';

describe('CustomDropdown', () => {
    it('should display', () => {
        render(
            <CustomDropdown
                data-testid="moonstone-dropdown"
                label="dropdown action"
            >
                <Typography>Dropdown children</Typography>
            </CustomDropdown>,
        );
        expect(screen.getByTestId('moonstone-dropdown')).toBeInTheDocument();
    });

    it('should display icon', () => {
        render(
            <CustomDropdown
                icon={<Love data-testid="dropdown-icon"/>}
                label="dropdown action"
            >
                <Typography>Dropdown children</Typography>
            </CustomDropdown>,
        );
        expect(screen.getByTestId('dropdown-icon')).toBeInTheDocument();
    });

    it('should add dropdown_loading class if the dropdown is loading', () => {
        render(
            <CustomDropdown
                isLoading
                data-testid="moonstone-dropdown"
                label="dropdown action"
            >
                <Typography>Dropdown children</Typography>
            </CustomDropdown>,
        );
        expect(screen.getByTestId('moonstone-dropdown')).toHaveClass(
            'moonstone-button_loading',
        );
    });

    it('should add aria-busy attribute if the dropdown is loading', () => {
        render(
            <CustomDropdown
                isLoading
                data-testid="moonstone-dropdown"
                label="dropdown action"
            >
                <Typography>Dropdown children</Typography>
            </CustomDropdown>,
        );
        expect(screen.getByTestId('moonstone-dropdown')).toHaveAttribute(
            'aria-busy',
        );
    });

    it('should not display the menu dropdown by default', () => {
        render(
            <CustomDropdown
                data-testid="moonstone-dropdown"
                label="dropdown action"
            >
                <Typography>Dropdown children</Typography>
            </CustomDropdown>,
        );
        expect(screen.queryByRole('list')).not.toBeInTheDocument();
    });

    it('should display the menu dropdown when dropdown is clicked', async () => {
        const user = userEvent.setup();
        render(
            <CustomDropdown
                data-testid="moonstone-dropdown"
                label="dropdown action"
            >
                <Typography>Dropdown children</Typography>
            </CustomDropdown>,
        );

        await user.click(screen.getByRole('button'));
        expect(screen.getByRole('list')).toBeInTheDocument();
    });

    it('should display the menu dropdown dropdown is focused and Enter is pressed', async () => {
        const user = userEvent.setup();
        render(
            <CustomDropdown
                data-testid="moonstone-dropdown"
                label="dropdown action"
            >
                <Typography>Dropdown children</Typography>
            </CustomDropdown>,
        );

        await user.keyboard('[Tab]');
        await user.keyboard('[Enter]');
        expect(screen.getByRole('list')).toBeInTheDocument();
    });

    it('should not call onBlur when no onFocus was delivered', async () => {
        const user = userEvent.setup();
        const onBlur = vi.fn();
        render(
            <>
                <CustomDropdown label="dropdown action" onBlur={onBlur}>
                    <Typography>Dropdown children</Typography>
                </CustomDropdown>
                <button type="button">after</button>
            </>,
        );

        await user.tab();
        await user.tab();

        expect(screen.getByRole('button', { name: 'after' })).toHaveFocus();
        expect(onBlur).not.toHaveBeenCalled();
    });

    it('should call onFocus once and onBlur once across a round trip through the menu', async () => {
        const user = userEvent.setup();
        const onFocus = vi.fn();
        const onBlur = vi.fn();
        render(
            <>
                <CustomDropdown label="dropdown action" onBlur={onBlur} onFocus={onFocus}>
                    <MenuItem label="item"/>
                </CustomDropdown>
                <button type="button">after</button>
            </>,
        );
        const trigger = screen.getByRole('button', { name: 'dropdown action' });

        await user.click(trigger);
        expect(screen.getByRole('list')).toBeInTheDocument();
        expect(trigger).not.toHaveFocus();
        await user.keyboard('{Escape}');
        expect(trigger).toHaveFocus();
        expect(screen.queryByRole('list')).not.toBeInTheDocument();
        await user.tab();

        expect(onFocus).toHaveBeenCalledTimes(1);
        expect(onBlur).toHaveBeenCalledTimes(1);
    });
});

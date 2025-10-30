import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {CustomDropdown} from './CustomDropdown';
import {Typography} from '~/components';
import {Love} from '~/icons';

describe('CustomDropdown', () => {
    it('should display', () => {
        render(
            <CustomDropdown
                label="dropdown action"
                data-testid="moonstone-dropdown"
            >
                <Typography>Dropdown children</Typography>
            </CustomDropdown>
        );
        expect(screen.getByTestId('moonstone-dropdown')).toBeInTheDocument();
    });

    it('should display icon', () => {
        render(
            <CustomDropdown
                label="dropdown action"
                icon={<Love data-testid="dropdown-icon"/>}
            >
                <Typography>Dropdown children</Typography>
            </CustomDropdown>
        );
        expect(screen.queryByTestId('dropdown-icon')).toBeInTheDocument();
    });

    it('should add dropdown_loading class if the dropdown is loading', () => {
        render(
            <CustomDropdown
                isLoading
                label="dropdown action"
                data-testid="moonstone-dropdown"
            >
                <Typography>Dropdown children</Typography>
            </CustomDropdown>
        );
        expect(screen.getByTestId('moonstone-dropdown')).toHaveClass(
            'moonstone-button_loading'
        );
    });

    it('should add aria-busy attribute if the dropdown is loading', () => {
        render(
            <CustomDropdown
                isLoading
                label="dropdown action"
                data-testid="moonstone-dropdown"
            >
                <Typography>Dropdown children</Typography>
            </CustomDropdown>
        );
        expect(screen.getByTestId('moonstone-dropdown')).toHaveAttribute(
            'aria-busy'
        );
    });

    it('should not display the menu dropdown by default', () => {
        render(
            <CustomDropdown
                label="dropdown action"
                data-testid="moonstone-dropdown"
            >
                <Typography>Dropdown children</Typography>
            </CustomDropdown>
        );
        expect(screen.queryByRole('list')).not.toBeInTheDocument();
    });

    it('should display the menu dropdown when dropdown is clicked', async () => {
        const user = userEvent.setup();
        render(
            <CustomDropdown
                label="dropdown action"
                data-testid="moonstone-dropdown"
            >
                <Typography>Dropdown children</Typography>
            </CustomDropdown>
        );

        await user.click(screen.getByRole('button'));
        expect(screen.getByRole('list')).toBeInTheDocument();
    });

    it('should display the menu dropdown dropdown is focused and Enter is pressed', async () => {
        const user = userEvent.setup();
        render(
            <CustomDropdown
                label="dropdown action"
                data-testid="moonstone-dropdown"
            >
                <Typography>Dropdown children</Typography>
            </CustomDropdown>
        );

        await user.keyboard('[Tab]');
        await user.keyboard('[Enter]');
        expect(screen.getByRole('list')).toBeInTheDocument();
    });
});

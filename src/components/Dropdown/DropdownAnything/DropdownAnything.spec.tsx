import {queryByText, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {DropdownAnything} from './DropdownAnything';
import {Typography} from '~/components';
import {Love} from '~/icons/index';

describe('Dropdown', () => {
    it('should display', () => {
        render(
            <DropdownAnything
                data-testid="moonstone-dropdown"
            >
                <Typography>Dropdown children</Typography>
            </DropdownAnything>
        );
        expect(screen.getByTestId('moonstone-dropdown')).toBeInTheDocument();
    });

    it('should display icon', () => {
        render(
            <DropdownAnything
                icon={<Love data-testid="dropdown-icon"/>}
            >
                <Typography>Dropdown children</Typography>
            </DropdownAnything>
        );
        expect(screen.queryByTestId('dropdown-icon')).toBeInTheDocument();
    });

    it('should add dropdown_loading class if the dropdown is loading', () => {
        render(
            <DropdownAnything
                    isLoading
                    data-testid="moonstone-dropdown"
            >
                <Typography>Dropdown children</Typography>
            </DropdownAnything>
        );
        expect(screen.getByTestId('moonstone-dropdown').firstChild).toHaveClass(
            'moonstone-dropdown_loading'
        );
    });

    it('should add aria-busy attribute if the dropdown is loading', () => {
        render(
            <DropdownAnything
                    isLoading
                    data-testid="moonstone-dropdown"
            >
                <Typography>Dropdown children</Typography>
            </DropdownAnything>
        );
        expect(screen.getByTestId('moonstone-dropdown').firstChild).toHaveAttribute(
            'aria-busy'
        );
    });

    it('should not display the menu dropdown by default', () => {
        render(
            <DropdownAnything
                    data-testid="moonstone-dropdown"
            >
                <Typography>Dropdown children</Typography>
            </DropdownAnything>
        );
        expect(screen.queryByRole('list')).not.toBeInTheDocument();
    });

    it('should display the menu dropdown when I click on the dropdown', async () => {
        const user = userEvent.setup();
        render(
            <DropdownAnything
                    data-testid="moonstone-dropdown"
            >
                <Typography>Dropdown children</Typography>
            </DropdownAnything>
        );

        await user.click(screen.getByRole('listbox'));
        expect(screen.getByRole('list')).toBeInTheDocument();
    });

    it('should display the menu dropdown when I focus the dropdown and press Enter', async () => {
        const user = userEvent.setup();
        render(
            <DropdownAnything
                    data-testid="moonstone-dropdown"
            >
                <Typography>Dropdown children</Typography>
            </DropdownAnything>
        );

        await user.keyboard('[Tab]');
        await user.keyboard('[Enter]');
        expect(screen.getByRole('list')).toBeInTheDocument();
    });

    it('should display the value', () => {
        render(
            <DropdownAnything
                data-testid="moonstone-dropdown"
                value="Test value"
            >
                <Typography>Dropdown children</Typography>
            </DropdownAnything>
        );
        expect(
            queryByText(screen.getByTestId('moonstone-dropdown'), 'Test value')
        ).toBeInTheDocument();
    });

    it('should display the reset button', () => {
        const onClear = vi.fn();
        render(
            <DropdownAnything onClear={onClear}>
                <Typography>Dropdown children</Typography>
            </DropdownAnything>
        );
        expect(screen.getByRole('button', {name: /reset/i})).toHaveAttribute(
            'aria-label',
            'Reset'
        );
    });

    it('should call onClear when the reset button is clicked', async () => {
        const user = userEvent.setup();
        const onClear = vi.fn();
        render(
            <DropdownAnything onClear={onClear}>
                <Typography>Dropdown children</Typography>
            </DropdownAnything>
        );
        await user.click(screen.getByRole('button', {name: /reset/i}));
        expect(onClear).toHaveBeenCalled();
    });
});

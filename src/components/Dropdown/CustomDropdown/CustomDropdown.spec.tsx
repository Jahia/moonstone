import { render, screen, waitFor } from '@testing-library/react';
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
});

const renderCustomDropdown = () => {
    const onFirst = vi.fn();
    render(
        <>
            <button type="button">before</button>
            <CustomDropdown label="Actions">
                <MenuItem label="First" onClick={onFirst}/>
                <MenuItem label="Second"/>
                <MenuItem label="Last"/>
            </CustomDropdown>
            <button type="button">after</button>
        </>,
    );
    return { onFirst, trigger: screen.getByRole('button', { name: 'Actions' }) };
};

const getItem = (label: string) => screen.getByText(label).closest('li');

const openWithEnter = async (trigger: HTMLElement) => {
    trigger.focus();
    await userEvent.keyboard('{Enter}');
    await screen.findByRole('list');
};

describe('CustomDropdown keyboard', () => {
    it('reaches the trigger with Tab', async () => {
        const { trigger } = renderCustomDropdown();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(trigger).toHaveFocus();
    });

    it('opens with Enter', async () => {
        const { trigger } = renderCustomDropdown();
        trigger.focus();
        await userEvent.keyboard('{Enter}');
        expect(await screen.findByRole('list')).toBeInTheDocument();
    });

    it('opens with Space', async () => {
        const { trigger } = renderCustomDropdown();
        trigger.focus();
        await userEvent.keyboard(' ');
        expect(await screen.findByRole('list')).toBeInTheDocument();
    });

    it.fails('opens with ArrowDown', async () => {
        const { trigger } = renderCustomDropdown();
        trigger.focus();
        await userEvent.keyboard('{ArrowDown}');
        expect(await screen.findByRole('list')).toBeInTheDocument();
    });

    it.fails('moves focus to the first item when opened with the keyboard', async () => {
        const { trigger } = renderCustomDropdown();
        await openWithEnter(trigger);
        expect(getItem('First')).toHaveFocus();
    });

    it('moves focus between items with ArrowDown and ArrowUp', async () => {
        const { trigger } = renderCustomDropdown();
        await openWithEnter(trigger);
        getItem('First').focus();
        await userEvent.keyboard('{ArrowDown}');
        expect(getItem('Second')).toHaveFocus();
        await userEvent.keyboard('{ArrowUp}');
        expect(getItem('First')).toHaveFocus();
    });

    it.fails('activates the focused item with Enter', async () => {
        const { trigger, onFirst } = renderCustomDropdown();
        await openWithEnter(trigger);
        getItem('First').focus();
        await userEvent.keyboard('{Enter}');
        expect(onFirst).toHaveBeenCalledTimes(1);
    });

    it.fails('closes with Escape and returns focus to the trigger', async () => {
        const { trigger } = renderCustomDropdown();
        await openWithEnter(trigger);
        getItem('First').focus();
        await userEvent.keyboard('{Escape}');
        await waitFor(() => expect(screen.queryByRole('list')).not.toBeInTheDocument());
        expect(trigger).toHaveFocus();
    });

    it.fails('closes when focus leaves the items with Tab', async () => {
        const { trigger } = renderCustomDropdown();
        await openWithEnter(trigger);
        getItem('Last').focus();
        await userEvent.keyboard('{Tab}');
        await waitFor(() => expect(screen.queryByRole('list')).not.toBeInTheDocument());
    });
});

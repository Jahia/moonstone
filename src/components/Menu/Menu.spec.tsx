import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Menu, MenuItem } from './index';

describe('Menu', () => {
    it('should not display the menu if isDisplayed is false', () => {
        render(<Menu isDisplayed={false} data-testid="moonstone-menu">Here is my content</Menu>);
        expect(screen.getByTestId('moonstone-menu')).toHaveClass('moonstone-hidden');
    });

    it('should not display the menu when children is empty', () => {
        render(<Menu isDisplayed data-testid="moonstone-menu">{[]}</Menu>);
        expect(screen.queryByTestId('moonstone-menu')).not.toBeInTheDocument();
    });

    describe('search functionality', () => {
        it('should show the correct search results', async () => {
            const user = userEvent.setup();

            render(
                <Menu hasSearch isDisplayed data-testid="moonstone-menu">
                    <MenuItem label="Item1"/>
                    <MenuItem label="Item2"/>
                    <MenuItem label="Item3"/>
                </Menu>,
            );
            await user.type(screen.getByRole('searchbox'), 'item2');

            expect(screen.queryByText(/item1/i)).not.toBeInTheDocument();
            expect(screen.getByText(/item2/i)).toBeInTheDocument();
            expect(screen.queryByText(/item3/i)).not.toBeInTheDocument();
        });

        it('should show the correct search results with description', async () => {
            const user = userEvent.setup();

            render(
                <Menu hasSearch isDisplayed data-testid="moonstone-menu">
                    <MenuItem description="Description1" label="Item1"/>
                    <MenuItem description="Description2" label="Item2"/>
                    <MenuItem description="Description3" label="Item3"/>
                </Menu>,
            );
            await user.type(screen.getByRole('searchbox'), 'description2');

            expect(screen.queryByText(/item1/i)).not.toBeInTheDocument();
            expect(screen.getByText(/item2/i)).toBeInTheDocument();
            expect(screen.queryByText(/item3/i)).not.toBeInTheDocument();
        });

        it('should show the correct search results with only description', async () => {
            const user = userEvent.setup();

            render(
                <Menu hasSearch isDisplayed data-testid="moonstone-menu">
                    <MenuItem description="Description1" label=""/>
                    <MenuItem description="Description2" label=""/>
                    <MenuItem description="Description3" label=""/>
                </Menu>,
            );
            await user.type(screen.getByRole('searchbox'), 'description2');

            expect(screen.queryByText(/description1/i)).not.toBeInTheDocument();
            expect(screen.getByText(/description2/i)).toBeInTheDocument();
            expect(screen.queryByText(/description3/i)).not.toBeInTheDocument();
        });

        it('should show the empty search text if there are no search results', async () => {
            const user = userEvent.setup();
            const searchEmptyText = 'No search results';

            render(
                <Menu hasSearch isDisplayed data-testid="moonstone-menu" searchEmptyText={searchEmptyText}>
                    <MenuItem label="Item1"/>
                    <MenuItem label="Item2"/>
                    <MenuItem label="Item3"/>
                </Menu>,
            );
            await user.type(screen.getByRole('searchbox'), 'random search text');

            expect(screen.getByText(searchEmptyText)).toBeInTheDocument();
        });
    });

    describe('search input visibility', () => {
        it('should show search input when autoSearch is enabled (hasSearch=undefined) and exceeds limit', () => {
            render(
                <Menu isDisplayed data-testid="moonstone-menu">
                    <MenuItem label="Item1"/>
                    <MenuItem label="Item2"/>
                    <MenuItem label="Item3"/>
                    <MenuItem label="Item4"/>
                    <MenuItem label="Item5"/>
                    <MenuItem label="Item6"/>
                    <MenuItem label="Item7"/>
                    <MenuItem label="Item8"/>
                </Menu>,
            );
            expect(screen.getByRole('search')).toBeInTheDocument();
        });

        it('should not show search input when autoSearch is enabled (hasSearch=undefined) and does not exceed limit', () => {
            render(
                <Menu isDisplayed data-testid="moonstone-menu">
                    <MenuItem label="Item1"/>
                    <MenuItem label="Item2"/>
                    <MenuItem label="Item3"/>
                </Menu>,
            );
            expect(screen.queryByRole('search')).not.toBeInTheDocument();
        });

        it('should show search input when autoSearch is enabled (hasSearch=undefined) and exceeds specified limit', () => {
            render(
                <Menu isDisplayed autoAddSearchLimit={2} data-testid="moonstone-menu">
                    <MenuItem label="Item1"/>
                    <MenuItem label="Item2"/>
                    <MenuItem label="Item3"/>
                </Menu>,
            );
            expect(screen.getByRole('search')).toBeInTheDocument();
        });

        it('should show search input when hasSearch is enabled', () => {
            render(
                <Menu hasSearch isDisplayed data-testid="moonstone-menu">
                    <MenuItem label="Item1"/>
                    <MenuItem label="Item2"/>
                    <MenuItem label="Item3"/>
                </Menu>,
            );
            expect(screen.getByRole('search')).toBeInTheDocument();
        });

        it('should not show search input when hasSearch is disabled', () => {
            render(
                <Menu hasSearch={false} isDisplayed data-testid="moonstone-menu">
                    <MenuItem label="Item1"/>
                    <MenuItem label="Item2"/>
                    <MenuItem label="Item3"/>
                </Menu>,
            );
            expect(screen.queryByRole('search')).not.toBeInTheDocument();
        });
    });

    it('should show an icon if the iconStart props is passed in', () => {
        const Icon = () => <svg/>;
        render(
            <Menu isDisplayed data-testid="moonstone-menu">
                <MenuItem iconStart={<Icon/>} label="test" value="test"/>
            </Menu>,
        );
        expect(screen.getByTestId('moonstone-menu').querySelector('svg')).toBeInTheDocument();
    });

    it('should add extra classnames to MenuItem', () => {
        render(
            <Menu isDisplayed>
                <MenuItem className="test-custom-class" data-testid="moonstone-menuItem" label="test" value="test"/>
            </Menu>,
        );
        expect(screen.getByTestId('moonstone-menuItem')).toHaveClass('test-custom-class');
    });

    it('should render a sub-contextual menu', () => {
        render(
            <Menu isDisplayed>
                <MenuItem label="Parent Item">
                    <Menu isDisplayed>
                        <MenuItem label="Sub Item"/>
                    </Menu>
                </MenuItem>
            </Menu>,
        );
    });
});

const renderMenu = (props = {}) => {
    const onClose = vi.fn();
    const onFirst = vi.fn();
    render(
        <>
            <button type="button">before</button>
            <Menu isDisplayed onClose={onClose} {...props}>
                <MenuItem label="First" onClick={onFirst}/>
                <MenuItem label="Second"/>
                <MenuItem isDisabled label="Disabled"/>
                <MenuItem label="Last"/>
            </Menu>
        </>,
    );
    return { onClose, onFirst };
};

describe('Menu keyboard', () => {
    it('reaches the first item with Tab', async () => {
        renderMenu();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByText('First').closest('li')).toHaveFocus();
    });

    it('skips disabled items in the tab sequence', async () => {
        renderMenu();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}{Tab}{Tab}');
        expect(screen.getByText('Last').closest('li')).toHaveFocus();
    });

    it.fails('activates the focused item with Enter', async () => {
        const { onFirst } = renderMenu();
        screen.getByText('First').closest('li').focus();
        await userEvent.keyboard('{Enter}');
        expect(onFirst).toHaveBeenCalledTimes(1);
    });

    it.fails('activates the focused item with Space', async () => {
        const { onFirst } = renderMenu();
        screen.getByText('First').closest('li').focus();
        await userEvent.keyboard(' ');
        expect(onFirst).toHaveBeenCalledTimes(1);
    });

    it('moves focus to the next item with ArrowDown', async () => {
        renderMenu();
        screen.getByText('First').closest('li').focus();
        await userEvent.keyboard('{ArrowDown}');
        expect(screen.getByText('Second').closest('li')).toHaveFocus();
    });

    it('moves focus to the previous item with ArrowUp', async () => {
        renderMenu();
        screen.getByText('Second').closest('li').focus();
        await userEvent.keyboard('{ArrowUp}');
        expect(screen.getByText('First').closest('li')).toHaveFocus();
    });

    it.fails('moves focus to the first and last items with Home and End', async () => {
        renderMenu();
        screen.getByText('Second').closest('li').focus();
        await userEvent.keyboard('{End}');
        expect(screen.getByText('Last').closest('li')).toHaveFocus();
        await userEvent.keyboard('{Home}');
        expect(screen.getByText('First').closest('li')).toHaveFocus();
    });

    it.fails('closes with Escape', async () => {
        const { onClose } = renderMenu();
        screen.getByText('First').closest('li').focus();
        await userEvent.keyboard('{Escape}');
        expect(onClose).toHaveBeenCalledTimes(1);
    });
});

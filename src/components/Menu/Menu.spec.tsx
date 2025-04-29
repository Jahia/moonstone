import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Menu} from './index';
import {MenuItem} from './MenuItem';

describe('Menu', () => {
    it('should not display the menu if isDisplayed is false', () => {
        render(<Menu isDisplayed={false} data-testid="moonstone-menu">Here is my content</Menu>);
        expect(screen.getByTestId('moonstone-menu')).toHaveClass('moonstone-hidden');
    });

    it('should not display the menu when children is empty', () => {
        const {queryByTestId} = render(<Menu isDisplayed data-testid="moonstone-menu">{[]}</Menu>);
        expect(queryByTestId('moonstone-menu')).not.toBeInTheDocument();
    });

    it('should show the correct search results', async () => {
        const user = userEvent.setup();

        render(
            <Menu isDisplayed hasSearch data-testid="moonstone-menu">
                <MenuItem label="Item1"/>
                <MenuItem label="Item2"/>
                <MenuItem label="Item3"/>
            </Menu>
        );
        await user.type(screen.getByRole('searchbox'), 'item2');

        expect(screen.queryByText(/item1/i)).not.toBeInTheDocument();
        expect(screen.getByText(/item2/i)).toBeInTheDocument();
        expect(screen.queryByText(/item3/i)).not.toBeInTheDocument();
    });

    it('should show the empty search text if there are no search results', async () => {
        const user = userEvent.setup();
        const searchEmptyText = 'No search results';

        render(
            <Menu isDisplayed hasSearch searchEmptyText={searchEmptyText} data-testid="moonstone-menu">
                <MenuItem label="Item1"/>
                <MenuItem label="Item2"/>
                <MenuItem label="Item3"/>
            </Menu>
        );
        await user.type(screen.getByRole('searchbox'), 'random search text');

        expect(screen.getByText(searchEmptyText)).toBeInTheDocument();
    });

    it('should show an icon if the iconStart props is passed in', () => {
        const Icon = () => <svg/>;
        render(
            <Menu isDisplayed data-testid="moonstone-menu">
                <MenuItem iconStart={<Icon/>} label="test" value="test"/>
            </Menu>
        );
        expect(screen.getByTestId('moonstone-menu').querySelector('svg')).toBeInTheDocument();
    });

    it('should add extra classnames to MenuItem', () => {
        render(
            <Menu isDisplayed>
                <MenuItem data-testid="moonstone-menuItem" className="test-custom-class" label="test" value="test"/>
            </Menu>
        );
        expect(screen.getByTestId('moonstone-menuItem')).toHaveClass('test-custom-class');
    });

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
            </Menu>
        );
        expect(screen.queryByRole('search')).toBeInTheDocument();
    });

    it('should not show search input when autoSearch is enabled (hasSearch=undefined) and does not exceed limit', () => {
        render(
            <Menu isDisplayed data-testid="moonstone-menu">
                <MenuItem label="Item1"/>
                <MenuItem label="Item2"/>
                <MenuItem label="Item3"/>
            </Menu>
        );
        expect(screen.queryByRole('search')).not.toBeInTheDocument();
    });

    it('should show search input when autoSearch is enabled (hasSearch=undefined) and exceeds specified limit', () => {
        render(
            <Menu isDisplayed data-testid="moonstone-menu" autoAddSearchLimit={2}>
                <MenuItem label="Item1"/>
                <MenuItem label="Item2"/>
                <MenuItem label="Item3"/>
            </Menu>
        );
        expect(screen.queryByRole('search')).toBeInTheDocument();
    });

    it('should show search input when hasSearch is enabled', () => {
        render(
            <Menu isDisplayed hasSearch data-testid="moonstone-menu">
                <MenuItem label="Item1"/>
                <MenuItem label="Item2"/>
                <MenuItem label="Item3"/>
            </Menu>
        );
        expect(screen.queryByRole('search')).toBeInTheDocument();
    });

    it('should not show search input when hasSearch is disabled', () => {
        render(
            <Menu isDisplayed hasSearch={false} data-testid="moonstone-menu">
                <MenuItem label="Item1"/>
                <MenuItem label="Item2"/>
                <MenuItem label="Item3"/>
            </Menu>
        );
        expect(screen.queryByRole('search')).not.toBeInTheDocument();
    });
});

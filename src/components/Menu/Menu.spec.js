import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Menu} from './index';
import {MenuItem} from './MenuItem';

describe('Menu', () => {
    it('should not display the menu if isDisplayed is false', () => {
        render(<Menu isDisplayed={false} data-testid="moonstone-menu">Here is my content</Menu>);
        expect(screen.getByTestId('moonstone-menu')).toHaveClass('moonstone-hidden');
    });

    it('should show the correct search results', () => {
        render(
            <Menu isDisplayed hasSearch data-testid="moonstone-menu">
                <MenuItem label="Item1"/>
                <MenuItem label="Item2"/>
                <MenuItem label="Item3"/>
            </Menu>
        );
        userEvent.type(screen.getByRole('textbox'), 'item2');

        expect(screen.queryByText(/item1/i)).not.toBeInTheDocument();
        expect(screen.getByText(/item2/i)).toBeInTheDocument();
        expect(screen.queryByText(/item3/i)).not.toBeInTheDocument();
    });

    it('should show the empty search text if there are no search results', () => {
        const searchEmptyText = 'No search results';
        render(
            <Menu isDisplayed hasSearch searchEmptyText={searchEmptyText} data-testid="moonstone-menu">
                <MenuItem label="Item1"/>
                <MenuItem label="Item2"/>
                <MenuItem label="Item3"/>
            </Menu>
        );
        userEvent.type(screen.getByRole('textbox'), 'random search text');

        expect(screen.getByText(searchEmptyText)).toBeInTheDocument();
    });
});

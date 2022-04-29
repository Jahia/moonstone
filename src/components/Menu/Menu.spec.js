import React from 'react';
import {render, screen} from '@testing-library/react';
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
});

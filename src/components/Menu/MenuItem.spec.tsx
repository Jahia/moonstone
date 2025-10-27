import {render, screen} from '@testing-library/react';
import {Menu} from './index';
import {MenuItem} from './MenuItem';

describe('MenuItem', () => {
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

import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

    it('should call onClick when MenuItem is enabled', async () => {
        const user = userEvent.setup();
        const handleClick = vi.fn();

        render(
            <Menu isDisplayed>
                <MenuItem label="test" value="test" onClick={handleClick}/>
            </Menu>
        );

        await user.click(screen.getByText('test'));

        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should not call onClick when MenuItem is disabled', async () => {
        const user = userEvent.setup();
        const handleClick = vi.fn();

        render(
            <Menu isDisplayed>
                <MenuItem isDisabled label="test" value="test" onClick={handleClick}/>
            </Menu>
        );

        await user.click(screen.getByText('test'));

        expect(handleClick).not.toHaveBeenCalled();
    });
});

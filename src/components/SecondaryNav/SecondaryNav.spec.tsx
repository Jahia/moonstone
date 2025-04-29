import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {SecondaryNav, SecondaryNavHeader} from './index';

const requiredProps = {
    header: 'test header'
};

describe('SecondaryNav', () => {
    it('should display children content', () => {
        render(<SecondaryNav {...requiredProps}>content here</SecondaryNav>);
        expect(screen.queryByText('content here')).toBeInTheDocument();
    });
    it('should display a string in the header', () => {
        render(<SecondaryNav {...requiredProps}>content here</SecondaryNav>);
        expect(screen.queryByText(requiredProps.header)).toBeInTheDocument();
    });

    it('should add extra attribute', () => {
        render(
            <SecondaryNav {...requiredProps} data-testid="secondary-nav" data-custom="extra">
                content here
            </SecondaryNav>
        );
        expect(screen.getByTestId('secondary-nav')).toHaveAttribute(
            'data-custom',
            'extra'
        );
    });

    it('should not be expanded when the menu is hidden', () => {
        render(
            <SecondaryNav {...requiredProps} data-testid="secondary-nav" isDefaultVisible={false}>
                content here
            </SecondaryNav>
        );
        expect(screen.getByTestId('secondary-nav')).toHaveAttribute(
            'aria-expanded',
            'false'
        );
    });

    it('should be expanded when the menu is visible', () => {
        render(
            <SecondaryNav {...requiredProps} data-testid="secondary-nav">
                content here
            </SecondaryNav>
        );
        expect(screen.getByTestId('secondary-nav')).toHaveAttribute(
            'aria-expanded',
            'true'
        );
    });

    it('should set width to zero when the menu is hidden', () => {
        render(
            <SecondaryNav {...requiredProps} data-testid="secondary-nav" isDefaultVisible={false}>
                content here
            </SecondaryNav>
        );
        expect(screen.getByTestId('secondary-nav').style.width).toBe('0px');
    });

    it('should show the navigation by clicking on expand button when the menu is hidden', async () => {
        const user = userEvent.setup();

        render(
            <SecondaryNav
                {...requiredProps}
                data-testid="secondary-nav"
                id="test"
                isDefaultVisible={false}
            >
                content here
            </SecondaryNav>
        );
        await user.click(screen.getByLabelText('Toggle secondary navigation'));

        expect(screen.getByTestId('secondary-nav')).toHaveAttribute(
            'aria-expanded',
            'true'
        );
    });

    it('should hide the navigation by clicking on expand button when the menu is visible', async () => {
        const user = userEvent.setup();

        render(
            <SecondaryNav {...requiredProps} data-testid="secondary-nav">
                content here
            </SecondaryNav>
        );
        await user.click(screen.getByLabelText('Toggle secondary navigation'));

        expect(screen.getByTestId('secondary-nav')).toHaveAttribute(
            'aria-expanded',
            'false'
        );
    });

    it('should not throw error when there is no onToggled defined', async () => {
        const user = userEvent.setup();
        render(
            <SecondaryNav {...requiredProps} data-testid="secondary-nav">
                content here
            </SecondaryNav>
        );
        // No error should occur when there is no onClick defined
        await user.click(screen.getByLabelText('Toggle secondary navigation'));
    });

    it('should call onToggled when clicking on expand button', async () => {
        const user = userEvent.setup();
        const clickHandler = vi.fn();

        render(
            <SecondaryNav {...requiredProps} onToggled={clickHandler}>content here</SecondaryNav>
        );
        await user.click(screen.getByLabelText('Toggle secondary navigation'));

        expect(clickHandler).toHaveBeenCalled();
    });
});

describe('SecondaryNavHeader', () => {
    it('should display', () => {
        render(
            <SecondaryNavHeader data-testid="moonstone-SecondaryNavHeader">
                <span>required children</span>
            </SecondaryNavHeader>
        );
        expect(screen.queryByLabelText('moonstone-secondaryNavHeader')).toBeInTheDocument();
    });
});

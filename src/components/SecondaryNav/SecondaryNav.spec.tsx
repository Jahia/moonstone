import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SecondaryNav, SecondaryNavHeader } from './index';

const requiredProps = {
    header: 'test header',
};

describe('SecondaryNav', () => {
    it('should display children content', () => {
        render(<SecondaryNav {...requiredProps}>content here</SecondaryNav>);
        expect(screen.getByText('content here')).toBeInTheDocument();
    });
    it('should display a string in the header', () => {
        render(<SecondaryNav {...requiredProps}>content here</SecondaryNav>);
        expect(screen.getByText(requiredProps.header)).toBeInTheDocument();
    });

    it('should add extra attribute', () => {
        render(
            <SecondaryNav {...requiredProps} data-custom="extra" data-testid="secondary-nav">
                content here
            </SecondaryNav>,
        );
        expect(screen.getByTestId('secondary-nav')).toHaveAttribute(
            'data-custom',
            'extra',
        );
    });

    it('should not be expanded when the menu is hidden', () => {
        render(
            <SecondaryNav {...requiredProps} isDefaultVisible={false} data-testid="secondary-nav">
                content here
            </SecondaryNav>,
        );
        expect(screen.getByRole('button', { name: 'Toggle secondary navigation' })).toHaveAttribute(
            'aria-expanded',
            'false',
        );
    });

    it('should be expanded when the menu is visible', () => {
        render(
            <SecondaryNav {...requiredProps} data-testid="secondary-nav">
                content here
            </SecondaryNav>,
        );
        expect(screen.getByRole('button', { name: 'Toggle secondary navigation' })).toHaveAttribute(
            'aria-expanded',
            'true',
        );
    });

    it('should set width to zero when the menu is hidden', () => {
        render(
            <SecondaryNav {...requiredProps} isDefaultVisible={false} data-testid="secondary-nav">
                content here
            </SecondaryNav>,
        );
        expect(screen.getByTestId('secondary-nav').style.width).toBe('0px');
    });

    it('should show the navigation by clicking on expand button when the menu is hidden', async () => {
        const user = userEvent.setup();

        render(
            <SecondaryNav
                {...requiredProps}
                isDefaultVisible={false}
                data-testid="secondary-nav"
                id="test"
            >
                content here
            </SecondaryNav>,
        );
        await user.click(screen.getByLabelText('Toggle secondary navigation'));

        expect(screen.getByRole('button', { name: 'Toggle secondary navigation' })).toHaveAttribute(
            'aria-expanded',
            'true',
        );
    });

    it('should hide the navigation by clicking on expand button when the menu is visible', async () => {
        const user = userEvent.setup();

        render(
            <SecondaryNav {...requiredProps} data-testid="secondary-nav">
                content here
            </SecondaryNav>,
        );
        await user.click(screen.getByLabelText('Toggle secondary navigation'));

        expect(screen.getByRole('button', { name: 'Toggle secondary navigation' })).toHaveAttribute(
            'aria-expanded',
            'false',
        );
    });

    it('should not throw error when there is no onToggled defined', async () => {
        const user = userEvent.setup();
        render(
            <SecondaryNav {...requiredProps} data-testid="secondary-nav">
                content here
            </SecondaryNav>,
        );
        // No error should occur when there is no onClick defined
        await user.click(screen.getByLabelText('Toggle secondary navigation'));
    });

    it('should call onToggled when clicking on expand button', async () => {
        const user = userEvent.setup();
        const clickHandler = vi.fn();

        render(
            <SecondaryNav {...requiredProps} onToggled={clickHandler}>content here</SecondaryNav>,
        );
        await user.click(screen.getByLabelText('Toggle secondary navigation'));

        expect(clickHandler).toHaveBeenCalled();
    });

    it('should name the navigation region', () => {
        render(<SecondaryNav {...requiredProps}>content here</SecondaryNav>);
        expect(screen.getByRole('region', { name: 'Secondary navigation' })).toBeInTheDocument();
    });

    it('should use the given labels', () => {
        render(
            <SecondaryNav {...requiredProps} i18n={{ navigationLabel: 'Navigation secondaire', toggleButtonLabel: 'Afficher la navigation' }}>
                content here
            </SecondaryNav>,
        );
        expect(screen.getByRole('region', { name: 'Navigation secondaire' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Afficher la navigation' })).toBeInTheDocument();
    });

    it('should point the toggle button to the content it hides', () => {
        render(<SecondaryNav {...requiredProps}>content here</SecondaryNav>);
        const controlledId = screen.getByRole('button', { name: 'Toggle secondary navigation' }).getAttribute('aria-controls');
        expect(document.getElementById(controlledId)).toHaveTextContent('content here');
    });
});

describe('SecondaryNavHeader', () => {
    it('should display', () => {
        render(
            <SecondaryNavHeader data-testid="moonstone-SecondaryNavHeader">
                <span>required children</span>
            </SecondaryNavHeader>,
        );
        expect(screen.getByText('required children')).toBeInTheDocument();
        expect(screen.getByRole('banner')).not.toHaveAttribute('aria-label');
    });
});

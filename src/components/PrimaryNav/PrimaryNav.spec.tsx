import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { PrimaryNav } from './index';

describe('PrimaryNav', () => {
    const props = {
        modeIcon: <img/>,
    };

    it('should not be expanded initialy', () => {
        render(<PrimaryNav {...props}/>);
        expect(screen.getByRole('button', { name: 'Toggle primary navigation' })).toHaveAttribute('aria-expanded', 'false');
    });

    it('should expand when click on NavButton', async () => {
        const user = userEvent.setup();
        render(<PrimaryNav {...props}/>);

        await user.click(screen.getByLabelText('Toggle primary navigation'));
        expect(screen.getByRole('button', { name: 'Toggle primary navigation' })).toHaveAttribute('aria-expanded', 'true');
    });

    it('should collapse when click twice on NavButton', async () => {
        const user = userEvent.setup();
        render(<PrimaryNav {...props}/>);

        await user.click(screen.getByLabelText('Toggle primary navigation'));
        await user.click(screen.getByLabelText('Toggle primary navigation'));

        expect(screen.getByRole('button', { name: 'Toggle primary navigation' })).toHaveAttribute('aria-expanded', 'false');
    });

    it('should also work when not displaying modeIcon', () => {
        render(<PrimaryNav/>);
    });

    it('should add extra attribute', () => {
        render(<PrimaryNav data-custom="extra" {...props}/>);
        expect(screen.getByRole('navigation')).toHaveAttribute('data-custom', 'extra');
    });

    it('should name the navigation', () => {
        render(<PrimaryNav {...props}/>);
        expect(screen.getByRole('navigation', { name: 'Primary' })).toBeInTheDocument();
    });

    it('should let the consumer name the navigation', () => {
        render(<PrimaryNav {...props} aria-label="Main menu"/>);
        expect(screen.getByRole('navigation', { name: 'Main menu' })).toBeInTheDocument();
    });

    it('should use the given labels', () => {
        render(<PrimaryNav {...props} i18n={{ navigationLabel: 'Principale', toggleButtonLabel: 'Afficher la navigation' }}/>);
        expect(screen.getByRole('navigation', { name: 'Principale' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Afficher la navigation' })).toBeInTheDocument();
    });

    it('should point the toggle button to the navigation', () => {
        render(<PrimaryNav {...props} id="main-nav"/>);
        expect(screen.getByRole('button', { name: 'Toggle primary navigation' })).toHaveAttribute('aria-controls', 'main-nav');
        expect(screen.getByRole('navigation')).toHaveAttribute('id', 'main-nav');
        expect(screen.getByRole('navigation')).not.toHaveAttribute('aria-expanded');
    });
});

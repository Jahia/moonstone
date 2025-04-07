import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {PrimaryNav} from './index';

describe('PrimaryNav', () => {
    const props = {
        modeIcon: <img/>
    };

    it('should not be expanded initialy', () => {
        render(<PrimaryNav {...props}/>);
        expect(screen.getByRole('navigation')).toHaveAttribute('aria-expanded', 'false');
    });

    it('should expand when click on NavButton', async () => {
        const user = userEvent.setup();
        render(<PrimaryNav {...props}/>);

        await user.click(screen.getByRole('primary-nav-control'));
        expect(screen.getByRole('navigation')).toHaveAttribute('aria-expanded', 'true');
    });

    it('should also work when not displaying modeIcon', () => {
        render(<PrimaryNav/>);
    });

    it('should add extra attribute', () => {
        render(<PrimaryNav data-custom="extra" {...props}/>);
        expect(screen.getByRole('navigation')).toHaveAttribute('data-custom', 'extra');
    });
});

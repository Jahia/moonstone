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
        expect(screen.getByTestId('secondary-nav')).toHaveAttribute(
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
        expect(screen.getByTestId('secondary-nav')).toHaveAttribute(
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

        expect(screen.getByTestId('secondary-nav')).toHaveAttribute(
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

        expect(screen.getByTestId('secondary-nav')).toHaveAttribute(
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
});

describe('SecondaryNavHeader', () => {
    it('should display', () => {
        render(
            <SecondaryNavHeader data-testid="moonstone-SecondaryNavHeader">
                <span>required children</span>
            </SecondaryNavHeader>,
        );
        expect(screen.getByLabelText('moonstone-secondaryNavHeader')).toBeInTheDocument();
    });
});

const renderNav = () => {
    const onToggled = vi.fn();
    render(
        <>
            <button type="button">before</button>
            <SecondaryNav header="Header" onToggled={onToggled}>Nav content</SecondaryNav>
        </>,
    );
    return { onToggled };
};

const toggle = () => screen.getByRole('button', { name: 'Toggle secondary navigation' });

describe('SecondaryNav keyboard', () => {
    it('reaches the toggle button with Tab', async () => {
        renderNav();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(toggle()).toHaveFocus();
    });

    it('collapses the nav with Enter and reports it with aria-expanded', async () => {
        const { onToggled } = renderNav();
        expect(screen.getByRole('region')).toHaveAttribute('aria-expanded', 'true');
        toggle().focus();
        await userEvent.keyboard('{Enter}');
        expect(onToggled).toHaveBeenCalledTimes(1);
        expect(screen.getByRole('region')).toHaveAttribute('aria-expanded', 'false');
    });

    it('collapses the nav with Space', async () => {
        const { onToggled } = renderNav();
        toggle().focus();
        await userEvent.keyboard(' ');
        expect(onToggled).toHaveBeenCalledTimes(1);
        expect(screen.getByRole('region')).toHaveAttribute('aria-expanded', 'false');
    });

    it('keeps the toggle button focusable once collapsed and expands again with Enter', async () => {
        renderNav();
        toggle().focus();
        await userEvent.keyboard('{Enter}');
        expect(toggle()).toHaveFocus();
        await userEvent.keyboard('{Enter}');
        expect(screen.getByRole('region')).toHaveAttribute('aria-expanded', 'true');
    });
});

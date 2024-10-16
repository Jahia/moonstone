import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {SecondaryNav} from './index';

describe('SecondaryNav', () => {
    it('should display children content', () => {
        render(<SecondaryNav header="">content here</SecondaryNav>);
        expect(screen.queryByText('content here')).toBeInTheDocument();
    });
    it('should display a string in the header', () => {
        render(<SecondaryNav header="my header">content here</SecondaryNav>);
        expect(screen.queryByText('my header')).toBeInTheDocument();
    });

    it('should add extra attribute', () => {
        render(<SecondaryNav data-testid="secondary-nav" data-custom="extra">content here</SecondaryNav>);
        expect(screen.getByTestId('secondary-nav')).toHaveAttribute('data-custom', 'extra');
    });

    it('should not be expanded when the menu is hidden', () => {
        render(<SecondaryNav data-testid="secondary-nav" isDefaultVisible={false}>content here</SecondaryNav>);
        screen.debug();
        expect(screen.getByTestId('secondary-nav')).toHaveAttribute('aria-expanded', 'false');
    });

    it('should be expanded when the menu is visible', () => {
        render(<SecondaryNav data-testid="secondary-nav">content here</SecondaryNav>);
        expect(screen.getByTestId('secondary-nav')).toHaveAttribute('aria-expanded', 'true');
    });

    it('should set width to zero when the menu is hidden', () => {
        render(<SecondaryNav data-testid="secondary-nav" isDefaultVisible={false}>content here</SecondaryNav>);
        expect(screen.getByTestId('secondary-nav').style.width).toBe('0px');
    });

    it('should show the navigation by clicking on expand button when the menu is hidden', () => {
        render(<SecondaryNav data-testid="secondary-nav" isDefaultVisible={false}>content here</SecondaryNav>);
        userEvent.click(screen.getByRole('button', {class: /moonstone-secondaryNav_buttonToggle/i}));
        expect(screen.getByTestId('secondary-nav')).toHaveAttribute('aria-expanded', 'true');
    });

    it('should hide the navigation by clicking on expand button when the menu is visible', () => {
        render(<SecondaryNav data-testid="secondary-nav">content here</SecondaryNav>);
        userEvent.click(screen.getByRole('button', {class: /moonstone-secondaryNav_buttonToggle/i}));
        expect(screen.getByTestId('secondary-nav')).toHaveAttribute('aria-expanded', 'false');
    });

    it('should not throw error when there is no onToggled defined', () => {
        render(<SecondaryNav data-testid="secondary-nav">content here</SecondaryNav>);
        // No error should occur when there is no onClick defined
        userEvent.click(screen.getByRole('button', {class: /moonstone-secondaryNav_buttonToggle/i}));
    });

    it('should call onToggled when clicking on expand button', () => {
        const clickHandler = jest.fn();
        render(<SecondaryNav onToggled={clickHandler}>content here</SecondaryNav>);
        userEvent.click(screen.getByRole('button', {class: /moonstone-secondaryNav_buttonToggle/i}));
        expect(clickHandler).toHaveBeenCalled();
    });
});

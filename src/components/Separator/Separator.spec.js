import React from 'react';
import {render, screen} from '@testing-library/react';
import {Separator} from './index';

describe('Separator', () => {
    it('should display separator component', () => {
        render(<Separator/>);
        expect(screen.getByRole('separator')).toBeInTheDocument();
    });

    it('should display horizontal separator by default', () => {
        render(<Separator/>);
        expect(screen.getByRole('separator')).toHaveClass('moonstone-separator_horizontal');
    });

    it('should display vertical separator', () => {
        render(<Separator variant="vertical"/>);
        expect(screen.getByRole('separator')).toHaveClass('moonstone-separator_vertical');
    });

    it('should set size props', () => {
        render(<Separator size="medium"/>);
        expect(screen.getByRole('separator')).toHaveClass('moonstone-size_medium');
    });

    it('should set spacing props', () => {
        render(<Separator spacing="medium"/>);
        expect(screen.getByRole('separator')).toHaveClass('moonstone-spacing_medium');
    });

    it('should add extra attribute', () => {
        render(<Separator data-custom="extra"/>);
        expect(screen.getByRole('separator')).toHaveAttribute('data-custom', 'extra');
    });

    it('should add extra classname', () => {
        render(<Separator data-testid="separator" className="extra"/>);
        expect(screen.getByTestId('separator')).toHaveClass('extra');
    });

    // TODO: It will be better to test if the element is visible or not with `toBeVisible` but it seems the style is not applied in the test environment
    it('should have the class invisible_firstChild', () => {
        render(<Separator invisible="firstChild"/>);
        expect(screen.getByRole('separator')).toHaveClass('moonstone-invisible_firstChild');
    });

    it('should have the class invisible_lastChild', () => {
        render(<Separator invisible="lastChild"/>);
        expect(screen.getByRole('separator')).toHaveClass('moonstone-invisible_lastChild');
    });

    it('should have the class invisible_onlyChild', () => {
        render(<Separator invisible="onlyChild"/>);
        expect(screen.getByRole('separator')).toHaveClass('moonstone-invisible_onlyChild');
    });

    it('should have the class invisible_firstOrLastChild', () => {
        render(<Separator invisible="firstOrLastChild"/>);
        expect(screen.getByRole('separator')).toHaveClass('moonstone-invisible_firstOrLastChild');
    });
});

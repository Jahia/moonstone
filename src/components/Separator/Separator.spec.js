import React from 'react';
import {render, screen} from '@testing-library/react';
import {Separator} from './index';

describe('Separator', () => {
    it('should display separator component', () => {
        render(<Separator data-testid="separator"/>);
        expect(screen.getByTestId('separator')).toBeInTheDocument();
    });

    it('should display horizontal separator by default', () => {
        render(<Separator data-testid="separator"/>);
        expect(screen.getByTestId('separator')).toHaveClass('moonstone-separator_horizontal');
    });

    it('should display vertical separator', () => {
        render(<Separator data-testid="separator" variant="vertical"/>);
        expect(screen.getByTestId('separator')).toHaveClass('moonstone-separator_vertical');
    });

    it('should set size props', () => {
        render(<Separator data-testid="separator" size="medium"/>);
        expect(screen.getByTestId('separator')).toHaveClass('moonstone-size_medium');
    });

    it('should set spacing props', () => {
        render(<Separator data-testid="separator" spacing="medium"/>);
        expect(screen.getByTestId('separator')).toHaveClass('moonstone-spacing_medium');
    });

    it('should add extra attribute', () => {
        render(<Separator data-testid="separator" data-custom="extra"/>);
        expect(screen.getByTestId('separator')).toHaveAttribute('data-custom', 'extra');
    });

    it('should add extra classname', () => {
        render(<Separator data-testid="separator" className="extra"/>);
        expect(screen.getByTestId('separator')).toHaveClass('extra');
    });

    it('should have the class invisible_firstChild', () => {
        render(<Separator data-testid="separator" invisible="firstChild"/>);
        expect(screen.getByTestId('separator')).toHaveClass('moonstone-invisible_firstChild');
    });

    it('should have the class invisible_lastChild', () => {
        render(<Separator data-testid="separator" invisible="lastChild"/>);
        expect(screen.getByTestId('separator')).toHaveClass('moonstone-invisible_lastChild');
    });

    it('should have the class invisible_onlyChild', () => {
        render(<Separator data-testid="separator" invisible="onlyChild"/>);
        expect(screen.getByTestId('separator')).toHaveClass('moonstone-invisible_onlyChild');
    });

    it('should have the class invisible_firstOrLastChild', () => {
        render(<Separator data-testid="separator" invisible="firstOrLastChild"/>);
        expect(screen.getByTestId('separator')).toHaveClass('moonstone-invisible_firstOrLastChild');
    });
});

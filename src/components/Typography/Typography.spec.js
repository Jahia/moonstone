import React from 'react';
import {render, screen} from '@testing-library/react';
import {Typography} from './index';
import {variants, weights} from './Typography.types';

describe('Typography', () => {
    it('should display nothing when no children', () => {
        render(<Typography data-testid="typography"/>);
        expect(screen.queryByTestId('typography')).not.toBeInTheDocument();
    });

    it('should display a text children', () => {
        render(<Typography>Content children</Typography>);
        expect(screen.queryByText('Content children')).toBeInTheDocument();
    });

    it('should display a body variant by default', () => {
        render(<Typography data-testid="typography">Content children</Typography>);
        expect(screen.getByTestId('typography')).toHaveClass('moonstone-variant_body');
    });

    test.each(variants)('should display the specified variant', variant => {
        render(<Typography data-testid="typography" variant={variant}>Content children</Typography>);
        expect(screen.getByTestId('typography')).toHaveClass(`moonstone-variant_${variant}`);
    });

    it('should use the default weight', () => {
        render(<Typography data-testid="typography">Content children</Typography>);
        expect(screen.getByTestId('typography')).toHaveClass('moonstone-weight_default');
    });

    test.each(weights)('should use the specified weight', weight => {
        render(<Typography data-testid="typography" weight={weight}>Content children</Typography>);
        expect(screen.getByTestId('typography')).toHaveClass(`moonstone-weight_${weight}`);
    });

    it('should display a text in italic', () => {
        render(<Typography isItalic data-testid="typography">Content children</Typography>);
        expect(screen.getByTestId('typography')).toHaveClass('moonstone-italic');
    });

    it('should not display a text in italic', () => {
        render(<Typography data-testid="typography">Content children</Typography>);
        expect(screen.getByTestId('typography')).not.toHaveClass('moonstone-italic');
    });

    it('should display a text in upper case', () => {
        render(<Typography isUpperCase data-testid="typography">Content children</Typography>);
        expect(screen.getByTestId('typography')).toHaveClass('moonstone-upperCase');
    });

    it('should not display a text in upper case', () => {
        render(<Typography data-testid="typography">Content children</Typography>);
        expect(screen.getByTestId('typography')).not.toHaveClass('moonstone-upperCase');
    });

    it('should display a text with a line-through', () => {
        render(<Typography hasLineThrough data-testid="typography">Content children</Typography>);
        expect(screen.getByTestId('typography')).toHaveClass('moonstone-lineThrough');
    });

    it('should not display a text with a line-through', () => {
        render(<Typography data-testid="typography">Content children</Typography>);
        expect(screen.getByTestId('typography')).not.toHaveClass('moonstone-lineThrough');
    });

    it('should display a tag html p by default', () => {
        const {container} = render(<Typography>Content children</Typography>);
        expect(container.querySelector('p')).toBeInTheDocument();
    });

    it('should display a tag html h1', () => {
        const {container} = render(<Typography component="h1">Content children</Typography>);
        expect(container.querySelector('h1')).toBeInTheDocument();
    });

    it('should add extra attribute', () => {
        render(<Typography data-testid="typography" data-custom="extra">Content children</Typography>);
        expect(screen.getByTestId('typography')).toHaveAttribute('data-custom', 'extra');
    });

    it('should add extra className', () => {
        render(<Typography data-testid="typography" className="extra">Content children</Typography>);
        expect(screen.getByTestId('typography')).toHaveClass('extra');
    });
});

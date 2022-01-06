import React from 'react';
import {render, screen} from '@testing-library/react';
import {LayoutModule} from './index';

describe('LayoutModule', () => {
    it('should display navigation', () => {
        render(<LayoutModule navigation="test-navigation"/>);
        expect(screen.getByText('test-navigation')).toBeInTheDocument();
    });

    it('should display the loader and not the content when LayoutModule is loading', () => {
        render(<LayoutModule isLoading content="my content"/>);
        expect(screen.getByRole('status')).toBeInTheDocument();
        expect(screen.queryByText('my content')).not.toBeInTheDocument();
    });

    it('should display a specific HTML markup when component prop is provided', () => {
        const {container} = render(<LayoutModule component="section"/>);
        expect(container.querySelector('section')).toBeInTheDocument();
    });
});

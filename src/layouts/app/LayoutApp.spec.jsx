import React from 'react';
import {render, screen} from '@testing-library/react';
import {LayoutApp} from './index';

describe('LayoutApp', () => {
    it('should display navigation', () => {
        render(<LayoutApp navigation="test-navigation"/>);
        expect(screen.getByText('test-navigation')).toBeInTheDocument();
    });

    it('should display the loader and not the content when LayoutModule is loading', () => {
        render(<LayoutApp isLoading content="my content"/>);
        expect(screen.getByRole('status')).toBeInTheDocument();
        expect(screen.queryByText('my content')).not.toBeInTheDocument();
    });
});


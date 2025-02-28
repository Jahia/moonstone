import React from 'react';
import {render, screen} from '@testing-library/react';
import {SortIndicator} from './index';

describe('SortIndicator', () => {
    it('should display', () => {
        render(<SortIndicator data-testid="moonstone-SortIndicator"/>);
        expect(screen.getByTestId('moonstone-SortIndicator')).toBeInTheDocument();
    });

    it('should display arrowDown on direction descending', () => {
        render(<SortIndicator direction="descending"/>);
        expect(screen.getByLabelText('Icon for sorting in descending order')).toBeInTheDocument();
    });

    it('should display arrowUp on direction ascending', () => {
        render(<SortIndicator direction="ascending"/>);
        expect(screen.getByLabelText('Icon for sorting in ascending order')).toBeInTheDocument();
    });

    it('should be sorted', () => {
        render(<SortIndicator isSorted data-testid="moonstone-SortIndicator"/>);
        expect(screen.getByTestId('moonstone-SortIndicator')).toHaveClass('moonstone-SortIndicator-sorted');
    });
});

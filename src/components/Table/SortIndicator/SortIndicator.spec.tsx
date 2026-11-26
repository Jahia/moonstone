import { render, screen } from '@testing-library/react';

import { SortIndicator } from './index';

describe('SortIndicator', () => {
    it('should display', () => {
        render(<SortIndicator data-testid="moonstone-SortIndicator"/>);
        expect(screen.getByTestId('moonstone-SortIndicator')).toBeInTheDocument();
    });

    it.each(['descending', 'ascending'] as const)('should hide the arrow from assistive technologies on direction %s', (direction) => {
        render(<SortIndicator data-testid="moonstone-SortIndicator" direction={direction}/>);
        expect(screen.getByTestId('moonstone-SortIndicator')).toHaveAttribute('aria-hidden', 'true');
    });

    it('should be sorted', () => {
        render(<SortIndicator isSorted data-testid="moonstone-SortIndicator"/>);
        expect(screen.getByTestId('moonstone-SortIndicator')).toHaveClass('moonstone-SortIndicator-sorted');
    });
});

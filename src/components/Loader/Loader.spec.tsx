import { render, screen } from '@testing-library/react';

import { Loader } from './Loader';

describe('Loader', () => {
    it('should display', () => {
        render(<Loader data-testid="test-loader"/>);
        expect(screen.getByTestId('test-loader')).toBeInTheDocument();
    });

    it('should display additional className', () => {
        render(<Loader className="custom" data-testid="test-loader"/>);
        expect(screen.getByTestId('test-loader')).toHaveClass('custom');
    });

    it('should display additional attributes', () => {
        render(<Loader data-custom="test" data-testid="test-loader"/>);
        expect(screen.getByTestId('test-loader')).toHaveAttribute('data-custom', 'test');
    });
});

import { render, screen } from '@testing-library/react';

import { ResizableBox } from './index';

describe('ResizableBox', () => {
    it('should display content', () => {
        render(<ResizableBox>My content here</ResizableBox>);
        expect(screen.getByText('My content here')).toBeInTheDocument();
    });

    it('should add extra className', () => {
        render(<ResizableBox className="extra" data-testid="resizable-box">My content here</ResizableBox>);
        expect(screen.getByTestId('resizable-box')).toHaveClass('extra');
    });

    it('should add extra attribute', () => {
        render(<ResizableBox data-custom="extra" data-testid="resizable-box">My content here</ResizableBox>);
        expect(screen.getByTestId('resizable-box')).toHaveAttribute('data-custom', 'extra');
    });

    it('should be named only by the consumer', () => {
        render(<ResizableBox data-testid="resizable-box">My content here</ResizableBox>);
        expect(screen.getByTestId('resizable-box')).not.toHaveAttribute('aria-label');
    });

    it('should forward the consumer name', () => {
        render(<ResizableBox aria-label="Side panel">My content here</ResizableBox>);
        expect(screen.getByRole('region', { name: 'Side panel' })).toBeInTheDocument();
    });
});

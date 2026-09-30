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
});

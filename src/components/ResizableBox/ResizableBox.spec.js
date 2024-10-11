import React from 'react';
import {render, screen} from '@testing-library/react';
import {ResizableBox} from './index';

describe('ResizableBox', () => {
    it('should display content', () => {
        render(<ResizableBox>My content here</ResizableBox>);
        expect(screen.getByText('My content here')).toBeInTheDocument();
    });

    it('should add extra className', () => {
        render(<ResizableBox data-testid="resizable-box" className="fancy">My content here</ResizableBox>);
        expect(screen.getByTestId('resizable-box')).toHaveClass('fancy');
    });

    it('should add extra attribute', () => {
        render(<ResizableBox data-testid="resizable-box" data-custom="test">My content here</ResizableBox>);
        expect(screen.getByTestId('resizable-box')).toHaveAttribute('data-custom', 'test');
    });
});

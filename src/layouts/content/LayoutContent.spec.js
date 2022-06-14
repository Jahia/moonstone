import React from 'react';
import {render, screen} from '@testing-library/react';
import {LayoutContent} from './index';

describe('LayoutContent', () => {
    it('should display header', () => {
        render(<LayoutContent header="test-header"/>);
        expect(screen.getByText('test-header')).toBeInTheDocument();
    });

    it('should display content', () => {
        render(<LayoutContent content="test-content"/>);
        expect(screen.getByText('test-content')).toBeInTheDocument();
    });

    it('should display the loader and not the content when LayoutContent is loading', () => {
        render(<LayoutContent isLoading content="my content"/>);
        expect(screen.getByRole('status')).toBeInTheDocument();
        expect(screen.queryByText('my content')).not.toBeInTheDocument();
    });

    it('should have the class `moonstone-layoutContent_centered` when `isCentered` set to true', () => {
        const {container} = render(<LayoutContent isCentered content="my content"/>);
        expect(container.querySelector('.moonstone-layoutContent_centered')).toBeInTheDocument();
    });
});

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

    // It('should have the class `moonstone-layoutModule_content_centered` when `isCentered` set to true', () => {
    //     const {container} = render(<LayoutModule isCentered content="my content"/>);
    //     expect(container.querySelector('.moonstone-layoutModule_content_centered')).toBeInTheDocument();
    // });

    // it('should have the class `moonstone-layoutModule_content_withNoPadding` when `hasPadding` set to false', () => {
    //     const {container} = render(<LayoutModule hasPadding={false} content="my content"/>);
    //     expect(container.querySelector('.moonstone-layoutModule_content_withNoPadding')).toBeInTheDocument();
    // });
});

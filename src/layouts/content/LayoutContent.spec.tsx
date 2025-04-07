import React from 'react';
import {render, screen} from '@testing-library/react';
import {LayoutContent} from './index';

const requiredProps = {
    content: 'test-content'
};

describe('LayoutContent', () => {
    it('should display header', () => {
        render(<LayoutContent {...requiredProps} header="test-header"/>);
        expect(screen.getByText('test-header')).toBeInTheDocument();
    });

    it('should display content', () => {
        render(<LayoutContent {...requiredProps}/>);
        expect(screen.getByText(requiredProps.content)).toBeInTheDocument();
    });

    it('should display the loader and not the content when LayoutContent is loading', () => {
        render(<LayoutContent isLoading {...requiredProps}/>);
        expect(screen.getByRole('status')).toBeInTheDocument();
        expect(screen.queryByText(requiredProps.content)).not.toBeInTheDocument();
    });

    it('should have the class "moonstone-layoutContent_centered" when "isCentered" set to true', () => {
        const {container} = render(<LayoutContent isCentered {...requiredProps}/>);
        expect(container.querySelector('.moonstone-layoutContent_centered')).toBeInTheDocument();
    });

    it('should not have the class "moonstone-layoutContent_withPadding" when "hasPadding" set to false', () => {
        const {container} = render(<LayoutContent hasPadding={false} {...requiredProps}/>);
        expect(container.querySelector('.moonstone-layoutContent_withPadding')).not.toBeInTheDocument();
    });
});

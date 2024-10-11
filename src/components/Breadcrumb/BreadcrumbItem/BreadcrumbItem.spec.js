import React from 'react';
import {BreadcrumbItem} from '~/components';
import {render, screen} from '@testing-library/react';

describe('BreadcrumbItem', () => {
    it('should display additional className', () => {
        render(<BreadcrumbItem data-testid="breadcrumb-item" className="extra" onClick={() => null}/>);
        expect(screen.getByTestId('breadcrumb-item')).toHaveClass('extra');
    });

    it('should display additional attributes', () => {
        render(<BreadcrumbItem data-testid="breadcrumb-item" data-custom="test" onClick={() => null}/>);
        expect(screen.getByTestId('breadcrumb-item')).toHaveAttribute('data-custom', 'test');
    });

    it('should enforce the ghost button\'s variant', () => {
        render(<BreadcrumbItem data-testid="breadcrumb-item" variant="outlined" onClick={() => null}/>);
        expect(screen.getByRole('button')).toHaveClass('moonstone-variant_ghost');
    });

    it('should enforce the small button\'s size', () => {
        render(<BreadcrumbItem data-testid="breadcrumb-item" size="big" onClick={() => null}/>);
        expect(screen.getByRole('button')).toHaveClass('moonstone-size_small');
    });
});

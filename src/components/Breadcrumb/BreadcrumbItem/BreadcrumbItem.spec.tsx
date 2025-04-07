import React from 'react';
import {BreadcrumbItem} from '~/components';
import {render, screen} from '@testing-library/react';

describe('BreadcrumbItem', () => {
    it('should display additional className', () => {
        render(<BreadcrumbItem data-testid="breadcrumb-item" className="extra" onClick={() => null}/>);
        expect(screen.getByTestId('breadcrumb-item')).toHaveClass('extra');
    });

    it('should display additional attributes', () => {
        render(<BreadcrumbItem data-testid="breadcrumb-item" data-custom="extra" onClick={() => null}/>);
        expect(screen.getByTestId('breadcrumb-item')).toHaveAttribute('data-custom', 'extra');
    });

    it('should enforce the ghost button\'s variant', () => {
        // @ts-expect-error testing overriding variant
        render(<BreadcrumbItem data-testid="breadcrumb-item" variant="outlined" onClick={() => null}/>);
        expect(screen.getByRole('button')).toHaveClass('moonstone-button_ghost');
    });

    it('should enforce the small button\'s size', () => {
        // @ts-expect-error testing overriding size
        render(<BreadcrumbItem data-testid="breadcrumb-item" size="big" onClick={() => null}/>);
        expect(screen.getByRole('button')).toHaveClass('moonstone-button_small');
    });
});

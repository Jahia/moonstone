import { render, screen } from '@testing-library/react';

import { BreadcrumbItem } from '~/components';

describe('BreadcrumbItem', () => {
    it('should display additional className', () => {
        render(<BreadcrumbItem className="extra" data-testid="breadcrumb-item" onClick={() => null}/>);
        expect(screen.getByTestId('breadcrumb-item')).toHaveClass('extra');
    });

    it('should display additional attributes', () => {
        render(<BreadcrumbItem data-custom="extra" data-testid="breadcrumb-item" onClick={() => null}/>);
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

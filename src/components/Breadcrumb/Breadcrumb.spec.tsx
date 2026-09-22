import { render, screen } from '@testing-library/react';

import { Breadcrumb, BreadcrumbItem } from '~/components';

describe('Breadcrumb', () => {
    it('should display additional className', () => {
        render(
            <Breadcrumb className="extra" data-testid="breadcrumb">
                <BreadcrumbItem label="item 1" onClick={() => null}/>
            </Breadcrumb>,
        );
        expect(screen.getByTestId('breadcrumb')).toHaveClass('extra');
    });

    it('should display additional attributes', () => {
        render(
            <Breadcrumb data-custom="extra" data-testid="breadcrumb">
                <BreadcrumbItem label="item 1" onClick={() => null}/>
            </Breadcrumb>,
        );
        expect(screen.getByTestId('breadcrumb')).toHaveAttribute('data-custom', 'extra');
    });

    it('should display nothing when the component has no children', () => {
        render(<Breadcrumb/>);
        expect(screen.queryByRole('breadcrumb-item')).not.toBeInTheDocument();
    });

    it('should display items', () => {
        render(
            <Breadcrumb>
                <BreadcrumbItem label="item 1" onClick={() => null}/>
                <BreadcrumbItem label="item 2" onClick={() => null}/>
            </Breadcrumb>,
        );
        expect(screen.getByText('item 1')).toBeInTheDocument();
    });
});

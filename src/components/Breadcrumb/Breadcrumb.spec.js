import React from 'react';
import {Breadcrumb, BreadcrumbItem} from '~/components';
import {render, screen} from '@testing-library/react';

describe('Breadcrumb', () => {
    it('should display additional className', () => {
        render(
            <Breadcrumb data-testid="breadcrumb" className="extra">
                <BreadcrumbItem label="item 1" onClick={() => null}/>
            </Breadcrumb>
        );
        expect(screen.getByTestId('breadcrumb')).toHaveClass('extra');
    });

    it('should display additional attributes', () => {
        render(
            <Breadcrumb data-testid="breadcrumb" data-custom="test">
                <BreadcrumbItem label="item 1" onClick={() => null}/>
            </Breadcrumb>
        );
        expect(screen.getByTestId('breadcrumb')).toHaveAttribute('data-custom', 'test');
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
            </Breadcrumb>
        );
        expect(screen.getByText('item 1')).toBeInTheDocument();
    });
});

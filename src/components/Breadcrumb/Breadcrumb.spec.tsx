import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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

const renderBreadcrumb = () => {
    const onFirst = vi.fn();
    render(
        <>
            <button type="button">before</button>
            <Breadcrumb>
                <BreadcrumbItem label="First" onClick={onFirst}/>
                <BreadcrumbItem label="Second" onClick={() => undefined}/>
                <BreadcrumbItem label="Last" onClick={() => undefined}/>
            </Breadcrumb>
        </>,
    );
    return { onFirst };
};

const item = (name: string) => screen.getByRole('button', { name });

describe('Breadcrumb keyboard', () => {
    it('reaches each item in order with Tab', async () => {
        renderBreadcrumb();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(item('First')).toHaveFocus();
        await userEvent.keyboard('{Tab}');
        expect(item('Second')).toHaveFocus();
        await userEvent.keyboard('{Tab}');
        expect(item('Last')).toHaveFocus();
    });

    it('marks the last item as the current page', () => {
        renderBreadcrumb();
        expect(item('Last')).toHaveAttribute('aria-current', 'page');
        expect(item('First')).not.toHaveAttribute('aria-current');
    });

    it('activates the focused item with Enter', async () => {
        const { onFirst } = renderBreadcrumb();
        item('First').focus();
        await userEvent.keyboard('{Enter}');
        expect(onFirst).toHaveBeenCalledTimes(1);
    });

    it('activates the focused item with Space', async () => {
        const { onFirst } = renderBreadcrumb();
        item('First').focus();
        await userEvent.keyboard(' ');
        expect(onFirst).toHaveBeenCalledTimes(1);
    });
});

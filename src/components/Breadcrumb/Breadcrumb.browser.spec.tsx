import { render, screen } from '@testing-library/react';
import { userEvent } from '@vitest/browser/context';

import { Breadcrumb, BreadcrumbItem } from '~/components';

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

import { render, screen } from '@testing-library/react';
import { userEvent } from '@vitest/browser/context';

import { Collapsible } from './index';

const renderCollapsible = () => {
    const onClick = vi.fn();
    render(
        <>
            <button type="button">before</button>
            <Collapsible id="section" label="Section" onClick={onClick}>Section content</Collapsible>
        </>,
    );
    return { onClick };
};

const trigger = () => screen.getByRole('button', { name: 'Section' });

describe('Collapsible keyboard', () => {
    it('reaches the trigger with Tab', async () => {
        renderCollapsible();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(trigger()).toHaveFocus();
    });

    it('expands with Enter and reports it with aria-expanded', async () => {
        const { onClick } = renderCollapsible();
        trigger().focus();
        expect(trigger()).toHaveAttribute('aria-expanded', 'false');
        await userEvent.keyboard('{Enter}');
        expect(onClick).toHaveBeenCalledTimes(1);
        expect(trigger()).toHaveAttribute('aria-expanded', 'true');
        expect(await screen.findByText('Section content')).toBeVisible();
    });

    it('expands with Space', async () => {
        const { onClick } = renderCollapsible();
        trigger().focus();
        await userEvent.keyboard(' ');
        expect(onClick).toHaveBeenCalledTimes(1);
        expect(trigger()).toHaveAttribute('aria-expanded', 'true');
    });

    it('collapses again with a second Enter', async () => {
        renderCollapsible();
        trigger().focus();
        await userEvent.keyboard('{Enter}');
        expect(trigger()).toHaveAttribute('aria-expanded', 'true');
        await userEvent.keyboard('{Enter}');
        expect(trigger()).toHaveAttribute('aria-expanded', 'false');
        expect(screen.getByText('Section content')).not.toBeVisible();
    });
});

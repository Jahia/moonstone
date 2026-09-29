import { render, screen } from '@testing-library/react';
import { userEvent } from '@vitest/browser/context';

import { AccordionItem } from './AccordionItem/';
import { Accordion } from './index';

const renderAccordion = () => {
    const onFirst = vi.fn();
    render(
        <>
            <button type="button">before</button>
            <Accordion>
                <AccordionItem id="first" label="First" onClick={onFirst}>Content first</AccordionItem>
                <AccordionItem id="second" label="Second">Content second</AccordionItem>
                <AccordionItem id="last" label="Last">Content last</AccordionItem>
            </Accordion>
        </>,
    );
    return { onFirst };
};

const header = (label: string) => screen.getByText(label).closest('header');

describe('Accordion keyboard', () => {
    it.fails('exposes each header as a button', () => {
        renderAccordion();
        expect(screen.getByRole('button', { name: 'First' })).toBeVisible();
        expect(screen.getByRole('button', { name: 'Second' })).toBeVisible();
    });

    it('reaches each header with Tab', async () => {
        renderAccordion();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(header('First')).toHaveFocus();
        await userEvent.keyboard('{Tab}');
        expect(header('Second')).toHaveFocus();
    });

    it('expands the focused header with Enter and reports it with aria-expanded', async () => {
        const { onFirst } = renderAccordion();
        header('First').focus();
        expect(header('First')).toHaveAttribute('aria-expanded', 'false');
        await userEvent.keyboard('{Enter}');
        expect(onFirst).toHaveBeenCalledTimes(1);
        expect(header('First')).toHaveAttribute('aria-expanded', 'true');
        expect(await screen.findByText('Content first')).toBeVisible();
    });

    it('expands the focused header with Space', async () => {
        const { onFirst } = renderAccordion();
        header('First').focus();
        await userEvent.keyboard(' ');
        expect(onFirst).toHaveBeenCalledTimes(1);
        expect(header('First')).toHaveAttribute('aria-expanded', 'true');
    });

    it('collapses an expanded header with a second Enter', async () => {
        renderAccordion();
        header('First').focus();
        await userEvent.keyboard('{Enter}');
        expect(header('First')).toHaveAttribute('aria-expanded', 'true');
        await userEvent.keyboard('{Enter}');
        expect(header('First')).toHaveAttribute('aria-expanded', 'false');
        expect(screen.queryByText('Content first')).not.toBeInTheDocument();
    });

    it.fails('moves focus to the next header with ArrowDown', async () => {
        renderAccordion();
        header('First').focus();
        await userEvent.keyboard('{ArrowDown}');
        expect(header('Second')).toHaveFocus();
    });

    it.fails('moves focus to the previous header with ArrowUp', async () => {
        renderAccordion();
        header('Second').focus();
        await userEvent.keyboard('{ArrowUp}');
        expect(header('First')).toHaveFocus();
    });

    it.fails('moves focus to the first and last headers with Home and End', async () => {
        renderAccordion();
        header('Second').focus();
        await userEvent.keyboard('{End}');
        expect(header('Last')).toHaveFocus();
        await userEvent.keyboard('{Home}');
        expect(header('First')).toHaveFocus();
    });
});

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AccordionItem } from './AccordionItem/';
import { Accordion } from './index';

describe('Accordion', () => {
    it('should display children content', () => {
        render(
            <Accordion>
                <p data-testid="test"/>
            </Accordion>,
        );
        expect(screen.getByTestId('test')).toBeInTheDocument();
    });

    it('should add reversed class when component is reversed', () => {
        render(
            <Accordion isReversed data-testid="id"><div/></Accordion>,
        );
        expect(screen.getByTestId('id')).toHaveClass('moonstone-reversed');
    });

    it('should add extra attribute on Accordion', () => {
        render(
            <Accordion data-custom="extra" data-testid="id"><div/></Accordion>,
        );
        expect(screen.getByTestId('id')).toHaveAttribute(
            'data-custom',
            'extra',
        );
    });

    it('should display nothing when the component has no children', () => {
        render(<Accordion data-testid="id"><div/></Accordion>);
        expect(screen.queryByRole('accordion-item')).not.toBeInTheDocument();
    });

    describe('withAccordionItem Mock', () => {
        it('should select another item when calling onSetOpenedItem', async () => {
            const user = userEvent.setup();

            render(
                <Accordion>
                    <AccordionItem id="1" label="item 01">content 01</AccordionItem>
                    <AccordionItem id="2" label="item 02">content 02</AccordionItem>
                </Accordion>,
            );
            await user.click(screen.getByText('item 01'));

            expect(screen.getByText('content 01')).toBeInTheDocument();
            expect(screen.queryByText('content 02')).not.toBeInTheDocument();
        });

        it('should open just one item after clicking on two accordions', async () => {
            const user = userEvent.setup();

            render(
                <Accordion>
                    <AccordionItem id="1" label="item 01">content 01</AccordionItem>
                    <AccordionItem id="2" label="item 02">content 02</AccordionItem>
                </Accordion>,
            );
            await user.click(screen.getByText('item 01'));
            await user.click(screen.getByText('item 02'));

            expect(screen.queryByText('content 01')).not.toBeInTheDocument();
            expect(screen.getByText('content 02')).toBeInTheDocument();
        });

        it('should close all accordions when I click twice on the same accordion item', async () => {
            const user = userEvent.setup();

            render(
                <Accordion>
                    <AccordionItem id="1" label="item 01">content 01</AccordionItem>
                    <AccordionItem id="2" label="item 02">content 02</AccordionItem>
                </Accordion>,
            );

            await user.click(screen.getByText('item 02'));
            await user.click(screen.getByText('item 02'));

            expect(screen.queryByText('content 01')).not.toBeInTheDocument();
            expect(screen.queryByText('content 01')).not.toBeInTheDocument();
        });

        it('should open item by default when given the prop `defaultOpenedItem`', () => {
            render(
                <Accordion defaultOpenedItem="2">
                    <AccordionItem id="1" label="item 01">content 01</AccordionItem>
                    <AccordionItem id="2" label="item 02">content 02</AccordionItem>
                </Accordion>,
            );

            expect(screen.queryByText('content 01')).not.toBeInTheDocument();
            expect(screen.getByText('content 02')).toBeInTheDocument();
        });

        it('should open item when given the prop `openedItem`', () => {
            render(
                <Accordion openedItem="2">
                    <AccordionItem id="1" label="item 01">content 01</AccordionItem>
                    <AccordionItem id="2" label="item 02">content 02</AccordionItem>
                </Accordion>,
            );

            expect(screen.queryByText('content 01')).not.toBeInTheDocument();
            expect(screen.getByText('content 02')).toBeInTheDocument();
        });
    });
});

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

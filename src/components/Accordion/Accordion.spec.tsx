import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Accordion} from './index';
import {AccordionItem} from './AccordionItem/';

describe('Accordion', () => {
    it('should display children content', () => {
        render(
            <Accordion>
                <p data-testid="test"/>
            </Accordion>
        );
        expect(screen.getByTestId('test')).toBeInTheDocument();
    });

    it('should add reversed class when component is reversed', () => {
        render(
            <Accordion isReversed data-testid="id"><div/></Accordion>
        );
        expect(screen.getByTestId('id')).toHaveClass('moonstone-reversed');
    });

    it('should add extra attribute on Accordion', () => {
        render(
            <Accordion data-testid="id" data-custom="extra"><div/></Accordion>
        );
        expect(screen.getByTestId('id')).toHaveAttribute(
            'data-custom',
            'extra'
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
                    <AccordionItem id="3" label="item 03">content 03</AccordionItem>
                </Accordion>
            );
            await user.click(screen.getByDisplayValue('item 01'));

            expect(screen.getByText('1 - open')).toBeInTheDocument();
            expect(screen.getByText('2 - close')).toBeInTheDocument();
        });

        it('should open just one item', async () => {
            const user = userEvent.setup();

            render(
                <Accordion>
                    <AccordionItem id="1" label="item 01">content 01</AccordionItem>
                    <AccordionItem id="2" label="item 02">content 02</AccordionItem>
                </Accordion>
            );
            await user.click(screen.getByRole('button', {name: /1/i}));
            await user.click(screen.getByRole('button', {name: /2/i}));

            expect(screen.getByText('1 - close')).toBeInTheDocument();
            expect(screen.getByText('2 - open')).toBeInTheDocument();
        });

        it('should unselect item when calling onSetOpenedItem another time', async () => {
            const user = userEvent.setup();

            render(
                <Accordion>
                    <AccordionItem id="1" label="item 01">content 01</AccordionItem>
                    <AccordionItem id="2" label="item 02">content 02</AccordionItem>
                </Accordion>
            );
            await user.click(screen.getByRole('button', {name: /1/i}));
            await user.click(screen.getByRole('button', {name: /1/i}));

            expect(screen.getByText('1 - close')).toBeInTheDocument();
            expect(screen.getByText('2 - close')).toBeInTheDocument();
        });

        it('should open item by default when given the props', () => {
            render(
                <Accordion defaultOpenedItem="2">
                    <AccordionItem id="1" label="item 01">content 01</AccordionItem>
                    <AccordionItem id="2" label="item 02">content 02</AccordionItem>
                </Accordion>
            );

            expect(screen.getByText('1 - close')).toBeInTheDocument();
            expect(screen.getByText('2 - open')).toBeInTheDocument();
        });

        it('should open item when given the props', () => {
            render(
                <Accordion openedItem="2">
                    <AccordionItem id="1" label="item 01">content 01</AccordionItem>
                    <AccordionItem id="2" label="item 02">content 02</AccordionItem>
                </Accordion>
            );

            expect(screen.getByText('1 - close')).toBeInTheDocument();
            expect(screen.getByText('2 - open')).toBeInTheDocument();
        });
    });
});

import React, {useContext} from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Accordion} from './index';
import {AccordionItem} from './AccordionItem/';
import {AccordionContext} from './Accordion.context';

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
            <Accordion isReversed data-testid="id">
                content
            </Accordion>
        );
        expect(screen.getByTestId('id')).toHaveClass('moonstone-reversed');
    });

    it('should add extra attribute on Accordion', () => {
        render(
            <Accordion data-testid="id" data-custom="extra">
                content
            </Accordion>
        );
        expect(screen.getByTestId('id')).toHaveAttribute('data-custom', 'extra');
    });

    it('should add extra attribute on AccordionItem', () => {
        render(
            <Accordion>
                <AccordionItem data-testid="id" data-custom="extra">
                    content
                </AccordionItem>
            </Accordion>
        );
        expect(screen.getByTestId('id')).toHaveAttribute('data-custom', 'extra');
    });

    it('should display nothing when the component has no children', () => {
        render(<Accordion data-testid="id"/>);
        expect(screen.queryByRole('accordion-item')).not.toBeInTheDocument();
    });

    describe('withAccordionItem Mock', () => {
        // eslint-disable-next-line react/prop-types
        const AccordionItemMock = ({id}) => {
            const context = useContext(AccordionContext);
            const open = context.currentItem === id;

            return (
                <button type="button" id={id} onClick={() => context.onSetOpenedItem(id)}>{id} - {open ? 'open' : 'close'}</button>
            );
        };

        beforeAll(() => {
            // As we are mocking, we won't be good enough for propTypes, so ignore them
            console.oldError = console.error;
            console.error = jest.fn();
        });

        afterAll(() => {
            console.error = console.oldError;
            delete console.oldError;
        });

        it('should select another item when calling onSetOpenedItem', async () => {
            const user = userEvent.setup();

            render(
                <Accordion>
                    <AccordionItemMock id="1"/>
                    <AccordionItemMock id="2"/>
                </Accordion>
            );
            await user.click(screen.getByRole('button', {name: '1 - close'}));

            expect(screen.getByText('1 - open')).toBeInTheDocument();
            expect(screen.getByText('2 - close')).toBeInTheDocument();
        });

        it('should open just one item', async () => {
            const user = userEvent.setup();

            render(
                <Accordion>
                    <AccordionItemMock id="1"/>
                    <AccordionItemMock id="2"/>
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
                    <AccordionItemMock id="1"/>
                    <AccordionItemMock id="2"/>
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
                    <AccordionItemMock id="1"/>
                    <AccordionItemMock id="2"/>
                </Accordion>
            );

            expect(screen.getByText('1 - close')).toBeInTheDocument();
            expect(screen.getByText('2 - open')).toBeInTheDocument();
        });

        it('should open item when given the props', () => {
            render(
                <Accordion openedItem="2">
                    <AccordionItemMock id="1"/>
                    <AccordionItemMock id="2"/>
                </Accordion>
            );

            expect(screen.getByText('1 - close')).toBeInTheDocument();
            expect(screen.getByText('2 - open')).toBeInTheDocument();
        });
    });
});

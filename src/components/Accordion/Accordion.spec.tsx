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
                </Accordion>
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
                </Accordion>
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
                </Accordion>
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
                </Accordion>
            );

            expect(screen.queryByText('content 01')).not.toBeInTheDocument();
            expect(screen.getByText('content 02')).toBeInTheDocument();
        });

        it('should open item when given the prop `openedItem`', () => {
            render(
                <Accordion openedItem="2">
                    <AccordionItem id="1" label="item 01">content 01</AccordionItem>
                    <AccordionItem id="2" label="item 02">content 02</AccordionItem>
                </Accordion>
            );

            expect(screen.queryByText('content 01')).not.toBeInTheDocument();
            expect(screen.getByText('content 02')).toBeInTheDocument();
        });
    });
});

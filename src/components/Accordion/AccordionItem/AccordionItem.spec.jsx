import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {AccordionContext} from '~/components/Accordion';
import {AccordionItem} from './index';

describe('AccordionItem', () => {
    it('should display label', () => {
        render(<AccordionItem label="my label label"/>);
        expect(screen.getByText('my label label')).toBeInTheDocument();
    });

    it('should display icon', () => {
        const Icon = () => <svg data-testid="svg"/>;
        render(<AccordionItem icon={<Icon/>}/>);
        expect(screen.getByTestId('svg')).toBeInTheDocument();
    });

    it('should display additional className', () => {
        render(<AccordionItem data-testid="accordion-item" className="extra"/>);
        expect(screen.getByTestId('accordion-item')).toHaveClass('extra');
    });

    it('should accept reversed accordion', () => {
        render(
            <AccordionContext.Provider value={{
                onSetOpenedItemId: jest.fn(),
                currentItem: 'not correspond',
                isReversed: true
            }}
            >
                <AccordionItem
                    data-testid="accordion-item"
                >
                    content here
                </AccordionItem>
            </AccordionContext.Provider>
        );
        expect(screen.getByTestId('accordion-item')).toHaveClass('moonstone-reversed');
    });

    it('should not display children when id in context not correspond', () => {
        const handleOnClick = jest.fn();

        render(
            <AccordionContext.Provider value={{
                onSetOpenedItemId: jest.fn(),
                currentItem: 'not correspond'
            }}
            >
                <AccordionItem
                    data-testid="accordion-item"
                    label="my label label"
                    onClick={handleOnClick}
                >
                    content here
                </AccordionItem>
            </AccordionContext.Provider>
        );
        expect(screen.getByTestId('accordion-item')).not.toHaveTextContent('content here');
    });

    it('should display children when id in context correspond', () => {
        const handleOnClick = jest.fn();

        render(
            <AccordionContext.Provider value={{
                onSetOpenedItemId: jest.fn(),
                currentItem: 'id'
            }}
            >
                <AccordionItem
                    id="id"
                    data-testid="accordion-item"
                    label="my label label"
                    onClick={handleOnClick}
                >
                    content here
                </AccordionItem>
            </AccordionContext.Provider>
        );

        expect(screen.getByTestId('accordion-item')).toHaveTextContent('content here');
    });

    it('should call onClick when click on item', async () => {
        const user = userEvent.setup();
        const handleOnClick = jest.fn();

        render(
            <AccordionContext.Provider value={{
                onSetOpenedItem: jest.fn(),
                currentItem: 'not correspond'
            }}
            >
                <AccordionItem
                    id="id"
                    label="my label label"
                    onClick={handleOnClick}
                >
                    content here
                </AccordionItem>
            </AccordionContext.Provider>
        );
        await user.click(screen.getByText('my label label'));

        expect(handleOnClick).toHaveBeenCalled();
    });

    it('should onClick callback return true if item has been opened', async () => {
        const user = userEvent.setup();
        const handleOnClick = (e, open) => {
            isOpen = open;
        };

        let isOpen;

        render(
            <AccordionContext.Provider value={{
                onSetOpenedItem: jest.fn(),
                currentItem: 'not correspond'
            }}
            >
                <AccordionItem
                    label="my label label"
                    onClick={handleOnClick}
                >
                    content here
                </AccordionItem>
            </AccordionContext.Provider>
        );
        await user.click(screen.getByRole('accordion-item'));

        expect(isOpen).toBe(true);
    });

    it('should onClick callback return false if item has been closed', async () => {
        const user = userEvent.setup();
        const handleOnClick = (e, open) => {
            isOpen = open;
        };

        let isOpen;

        render(
            <AccordionContext.Provider value={{
                onSetOpenedItem: jest.fn(),
                currentItem: 'id'
            }}
            >
                <AccordionItem
                    id="id"
                    label="my label label"
                    onClick={handleOnClick}
                >
                    content here
                </AccordionItem>
            </AccordionContext.Provider>
        );
        await user.click(screen.getByRole('accordion-item'));

        expect(isOpen).toBe(false);
    });

    it('should not throw error when there is no onClick defined', async () => {
        const user = userEvent.setup();

        render(
            <AccordionContext.Provider value={{
                onSetOpenedItem: jest.fn(),
                currentItem: 'id'
            }}
            >
                <AccordionItem
                    id="id"
                    label="my label label"
                >
                    content here
                </AccordionItem>
            </AccordionContext.Provider>
        );

        // No error should occur when there is no onClickToClose defined
        await user.click(screen.getByRole('accordion-item'));
    });
});

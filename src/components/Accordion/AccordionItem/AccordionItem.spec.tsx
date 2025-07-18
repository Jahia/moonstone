import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {AccordionContext} from '~/components/Accordion';
import {AccordionItem} from './index';

const requiredProps = {
    label: 'accordion label',
    id: 'test-id'
};

describe('AccordionItem', () => {
    it('should display label', () => {
        render(<AccordionItem {...requiredProps}><div/></AccordionItem>);
        expect(screen.getByText(requiredProps.label)).toBeInTheDocument();
    });

    it('should display icon', () => {
        const Icon = () => <svg data-testid="svg"/>;
        render(<AccordionItem {...requiredProps} icon={<Icon/>}><div/></AccordionItem>);
        expect(screen.getByTestId('svg')).toBeInTheDocument();
    });

    it('should display additional className', () => {
        render(
            <AccordionItem {...requiredProps} data-testid="accordion-item-section" className="extra"><div/></AccordionItem>
        );
        expect(screen.getByTestId('accordion-item-section')).toHaveClass('extra');
    });

    it('should add extra attribute on AccordionItem', () => {
        render(<AccordionItem {...requiredProps} data-testid="id" data-custom="extra"><div/></AccordionItem>);
        expect(screen.getByTestId('id')).toHaveAttribute(
            'data-custom',
            'extra'
        );
    });

    it('should accept reversed accordion', () => {
        render(
            <AccordionContext.Provider
                value={{
                    onSetOpenedItem: vi.fn(),
                    currentItem: 'not correspond',
                    isReversed: true
                }}
            >
                <AccordionItem {...requiredProps} data-testid="accordion-item-section">
                    content here
                </AccordionItem>
            </AccordionContext.Provider>
        );
        expect(screen.getByTestId('accordion-item-section')).toHaveClass(
            'moonstone-reversed'
        );
    });

    it('should not display children when id in context not correspond', () => {
        const handleOnClick = vi.fn();

        render(
            <AccordionContext.Provider
                value={{
                    onSetOpenedItem: vi.fn(),
                    currentItem: 'not correspond'
                }}
            >
                <AccordionItem
                    {...requiredProps}
                    data-testid="accordion-item-section"
                    onClick={handleOnClick}
                >
                    content here
                </AccordionItem>
            </AccordionContext.Provider>
        );
        expect(screen.getByTestId('accordion-item-section')).not.toHaveTextContent(
            'content here'
        );
    });

    it('should display children when id in context correspond', () => {
        const handleOnClick = vi.fn();

        render(
            <AccordionContext.Provider
                value={{
                    onSetOpenedItem: vi.fn(),
                    currentItem: 'test-id'
                }}
            >
                <AccordionItem
                    {...requiredProps}
                    data-testid="accordion-item-section"
                    onClick={handleOnClick}
                >
                    content here
                </AccordionItem>
            </AccordionContext.Provider>
        );

        expect(screen.getByTestId('accordion-item-section')).toHaveTextContent(
            'content here'
        );
    });

    it('should call onClick when click on item', async () => {
        const user = userEvent.setup();
        const handleOnClick = vi.fn();

        render(
            <AccordionContext.Provider
                value={{
                    onSetOpenedItem: vi.fn(),
                    currentItem: 'not correspond'
                }}
            >
                <AccordionItem
                    {...requiredProps}
                    onClick={handleOnClick}
                >
                    content here
                </AccordionItem>
            </AccordionContext.Provider>
        );
        await user.click(screen.getByText(requiredProps.label));

        expect(handleOnClick).toHaveBeenCalled();
    });

    it('should onClick callback return true if item has been opened', async () => {
        const user = userEvent.setup();
        const handleOnClick = (e: React.MouseEvent, open: boolean) => {
            isOpen = open;
        };

        let isOpen;

        render(
            <AccordionContext.Provider
                value={{
                    onSetOpenedItem: vi.fn(),
                    currentItem: 'not correspond'
                }}
            >
                <AccordionItem {...requiredProps} onClick={handleOnClick}>
                    content here
                </AccordionItem>
            </AccordionContext.Provider>
        );
        await user.click(screen.getByRole('heading'));

        expect(isOpen).toBe(true);
    });

    it('should onClick callback return false if item has been closed', async () => {
        const user = userEvent.setup();
        const handleOnClick = (e: React.MouseEvent, open:boolean) => {
            isOpen = open;
        };

        let isOpen;

        render(
            <AccordionContext.Provider
                value={{
                    onSetOpenedItem: vi.fn(),
                    currentItem: 'test-id'
                }}
            >
                <AccordionItem
                    {...requiredProps}
                    onClick={handleOnClick}
                >
                    content here
                </AccordionItem>
            </AccordionContext.Provider>
        );
        await user.click(screen.getByRole('heading'));

        expect(isOpen).toBe(false);
    });

    it('should not throw error when there is no onClick defined', async () => {
        const user = userEvent.setup();

        render(
            <AccordionContext.Provider
                value={{
                    onSetOpenedItem: vi.fn(),
                    currentItem: 'test-id'
                }}
            >
                <AccordionItem {...requiredProps}>
                    content here
                </AccordionItem>
            </AccordionContext.Provider>
        );

        // No error should occur when there is no onClickToClose defined
        await user.click(screen.getByRole('heading'));
    });
});

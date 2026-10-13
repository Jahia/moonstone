import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRef } from 'react';

import { useRovingFocus } from './useRovingFocus';

type TestMenuProps = { readonly orientation?: 'vertical' | 'horizontal'; readonly loop?: boolean };

describe('useRovingFocus', () => {
    const TestMenu = ({ orientation, loop }: TestMenuProps) => {
        const ref = useRef(null);
        const rovingFocus = useRovingFocus(ref, { itemSelector: '[data-item]', orientation, loop });

        return (
            <div data-testid="test-menu" ref={ref} {...rovingFocus}>
                <div data-item>Item 1</div>
                <div>Not an Item</div>
                <div data-item>Item 2</div>
                <div data-item>Item 3</div>
            </div>
        );
    };

    it('should keep only the first item in the Tab sequence', () => {
        render(<TestMenu/>);
        expect(screen.queryByText('Item 1')).toHaveAttribute('tabindex', '0');
        expect(screen.queryByText('Item 2')).toHaveAttribute('tabindex', '-1');
        expect(screen.queryByText('Not an Item')).not.toHaveAttribute('tabindex');
    });

    it('should focus next item when arrowDown is pressed', async () => {
        const user = userEvent.setup();
        render(<TestMenu/>);
        await user.keyboard('[Tab]');
        await user.keyboard('[ArrowDown]');
        expect(screen.queryByText('Item 2')).toHaveFocus();
        expect(screen.queryByText('Item 2')).toHaveAttribute('tabindex', '0');
        expect(screen.queryByText('Item 1')).toHaveAttribute('tabindex', '-1');
    });

    it('should focus previous item when arrowUp is pressed', async () => {
        const user = userEvent.setup();
        render(<TestMenu/>);
        await user.keyboard('[Tab]');
        await user.keyboard('[ArrowDown]');
        await user.keyboard('[ArrowUp]');
        expect(screen.queryByText('Item 1')).toHaveFocus();
    });

    it('should focus next item when arrowRight is pressed', async () => {
        const user = userEvent.setup();
        render(<TestMenu orientation="horizontal"/>);
        await user.keyboard('[Tab]');
        await user.keyboard('[ArrowRight]');
        expect(screen.queryByText('Item 2')).toHaveFocus();
    });

    it('should focus previous item when arrowLeft is pressed', async () => {
        const user = userEvent.setup();
        render(<TestMenu orientation="horizontal"/>);
        await user.keyboard('[Tab]');
        await user.keyboard('[ArrowRight]');
        await user.keyboard('[ArrowLeft]');
        expect(screen.queryByText('Item 1')).toHaveFocus();
    });

    it('should focus first and last items when Home and End are pressed', async () => {
        const user = userEvent.setup();
        render(<TestMenu/>);
        await user.keyboard('[Tab]');
        await user.keyboard('[End]');
        expect(screen.queryByText('Item 3')).toHaveFocus();
        await user.keyboard('[Home]');
        expect(screen.queryByText('Item 1')).toHaveFocus();
    });

    it('should wrap around when loop is enabled', async () => {
        const user = userEvent.setup();
        render(<TestMenu/>);
        await user.keyboard('[Tab]');
        await user.keyboard('[ArrowUp]');
        expect(screen.queryByText('Item 3')).toHaveFocus();
    });

    it('should not wrap around when loop is disabled', async () => {
        const user = userEvent.setup();
        render(<TestMenu loop={false}/>);
        await user.keyboard('[Tab]');
        await user.keyboard('[ArrowUp]');
        expect(screen.queryByText('Item 1')).toHaveFocus();
    });
});

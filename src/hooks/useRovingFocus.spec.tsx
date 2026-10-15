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

    it('should keep the page from scrolling on an arrow key', async () => {
        const user = userEvent.setup();
        render(<TestMenu/>);
        await user.keyboard('[Tab]');
        // The document sees the keydown once React has handled it
        const keydown = vi.fn((e: KeyboardEvent) => e.defaultPrevented);
        document.addEventListener('keydown', keydown);
        await user.keyboard('[ArrowDown]');
        document.removeEventListener('keydown', keydown);
        expect(keydown).toHaveReturnedWith(true);
        expect(screen.getByText('Item 2')).toHaveFocus();
    });

    it('should not wrap around when loop is disabled', async () => {
        const user = userEvent.setup();
        render(<TestMenu loop={false}/>);
        await user.keyboard('[Tab]');
        await user.keyboard('[ArrowUp]');
        expect(screen.queryByText('Item 1')).toHaveFocus();
    });
});

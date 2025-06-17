import {useRef} from 'react';
import {onArrowNavigation} from './onArrowNavigation';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

type TestMenuProps = {readonly direction?: 'vertical' | 'horizontal' | 'both'};

describe('onArrowNavigation', () => {
    const TestMenu = ({direction}: TestMenuProps) => {
        const refs = [useRef(null), useRef(null)];

        return (
            <div
                data-testid="test-menu"
            >
                <div ref={refs[0]} {...onArrowNavigation({ref: refs[0], direction: direction, tabIndex: 3})}>Item 1</div>
                <div ref={refs[1]} {...onArrowNavigation({ref: refs[1], direction: direction, tabIndex: 3})}>Item 2</div>
            </div>
        );
    };

    it('should focus next sibling when arrowDown is pressed', async () => {
        const user = userEvent.setup();
        render(<TestMenu/>);
        await user.keyboard('[Tab]');
        await user.keyboard('[ArrowDown]');
        expect(screen.queryByText('Item 2')).toHaveFocus();
    });

    it('should have the right tabIndex', () => {
        render(<TestMenu/>);
        expect(screen.queryByText('Item 2')).toHaveAttribute('tabindex', '3');
    });

    it('should focus previous sibling when arrowUp is pressed', async () => {
        const user = userEvent.setup();
        render(<TestMenu/>);
        await user.keyboard('[Tab]');
        await user.keyboard('[ArrowDown]');
        await user.keyboard('[ArrowUp]');
        expect(screen.queryByText('Item 1')).toHaveFocus();
    });

    it('should focus next sibling when arrowRight is pressed', async () => {
        const user = userEvent.setup();
        render(<TestMenu direction="horizontal"/>);
        await user.keyboard('[Tab]');
        await user.keyboard('[ArrowRight]');
        expect(screen.queryByText('Item 2')).toHaveFocus();
    });

    it('should focus previous sibling when arrowLeft is pressed', async () => {
        const user = userEvent.setup();
        render(<TestMenu direction="horizontal"/>);
        await user.keyboard('[Tab]');
        await user.keyboard('[ArrowRight]');
        await user.keyboard('[ArrowLeft]');
        expect(screen.queryByText('Item 1')).toHaveFocus();
    });

    const TestMenuWithUnfocusableSiblings = () => {
        const refs = [useRef(null), useRef(null)];

        return (
            <div
                data-testid="test-menu"
            >
                <div ref={refs[0]} {...onArrowNavigation({ref: refs[0]})}>Item 1</div>
                <div>Not an Item</div>
                <div ref={refs[1]} {...onArrowNavigation({ref: refs[1]})}>Item 2</div>
            </div>
        );
    };

    it('should focus next focusable sibling when arrowDown is pressed', async () => {
        const user = userEvent.setup();
        render(<TestMenuWithUnfocusableSiblings/>);
        await user.keyboard('[Tab]');
        await user.keyboard('[ArrowDown]');
        expect(screen.queryByText('Item 2')).toHaveFocus();
    });

    it('should focus previous focusable sibling when arrowUp is pressed', async () => {
        const user = userEvent.setup();
        render(<TestMenuWithUnfocusableSiblings/>);
        await user.keyboard('[Tab]');
        await user.keyboard('[ArrowDown]');
        await user.keyboard('[ArrowUp]');
        expect(screen.queryByText('Item 1')).toHaveFocus();
    });

    it('should have the default tabIndex', () => {
        render(<TestMenuWithUnfocusableSiblings/>);
        expect(screen.queryByText('Item 2')).toHaveAttribute('tabindex', '0');
    });
});

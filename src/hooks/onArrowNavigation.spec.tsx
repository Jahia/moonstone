import {useRef} from 'react';
import {onArrowNavigation} from './onArrowNavigation';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('onArrowNavigation', () => {
    let TestMenu = () => {
        const refs = [useRef(null), useRef(null)];

        return (
            <div
                data-testid="test-menu"
            >
                <div ref={refs[0]} {...onArrowNavigation(refs[0])}>Item 1</div>
                <div ref={refs[1]} {...onArrowNavigation(refs[1])}>Item 2</div>
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

    it('should focus previous sibling when arrowUp is pressed', async () => {
        const user = userEvent.setup();
        render(<TestMenu/>);
        await user.keyboard('[Tab]');
        await user.keyboard('[ArrowDown]');
        await user.keyboard('[ArrowUp]');
        expect(screen.queryByText('Item 1')).toHaveFocus();
    });

    TestMenu = () => {
        const refs = [useRef(null), useRef(null)];

        return (
            <div
                data-testid="test-menu"
            >
                <div ref={refs[0]} {...onArrowNavigation(refs[0])}>Item 1</div>
                <div>Not an Item</div>
                <div ref={refs[1]} {...onArrowNavigation(refs[1])}>Item 2</div>
            </div>
        );
    };

    it('should focus next focusable sibling when arrowDown is pressed', async () => {
        const user = userEvent.setup();
        render(<TestMenu/>);
        await user.keyboard('[Tab]');
        await user.keyboard('[ArrowDown]');
        expect(screen.queryByText('Item 2')).toHaveFocus();
    });

    it('should focus previous focusable sibling when arrowUp is pressed', async () => {
        const user = userEvent.setup();
        render(<TestMenu/>);
        await user.keyboard('[Tab]');
        await user.keyboard('[ArrowDown]');
        await user.keyboard('[ArrowUp]');
        expect(screen.queryByText('Item 1')).toHaveFocus();
    });
});

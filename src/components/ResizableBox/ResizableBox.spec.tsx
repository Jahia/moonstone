import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ResizableBox } from './index';

describe('ResizableBox', () => {
    it('should display content', () => {
        render(<ResizableBox>My content here</ResizableBox>);
        expect(screen.getByText('My content here')).toBeInTheDocument();
    });

    it('should add extra className', () => {
        render(<ResizableBox className="extra" data-testid="resizable-box">My content here</ResizableBox>);
        expect(screen.getByTestId('resizable-box')).toHaveClass('extra');
    });

    it('should add extra attribute', () => {
        render(<ResizableBox data-custom="extra" data-testid="resizable-box">My content here</ResizableBox>);
        expect(screen.getByTestId('resizable-box')).toHaveAttribute('data-custom', 'extra');
    });
});

const renderBox = () => {
    const { container } = render(
        <div style={{ width: 400 }}>
            <button type="button">before</button>
            <ResizableBox defaultSize={{ width: 100, height: 100 }} enable={['right']} maxWidth={200} minWidth={50}>
                <div>content</div>
            </ResizableBox>
        </div>,
    );
    const box = screen.getByRole('region', { name: 'resizable-panel' });
    const handle = container.querySelector<HTMLElement>('.moonstone-resizable_handle');
    return { box, handle, width: () => box.getBoundingClientRect().width };
};

describe('ResizableBox keyboard', () => {
    it.fails('reaches the resize handle with Tab', async () => {
        const { handle } = renderBox();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(handle).toHaveFocus();
    });

    it.fails('exposes the resize handle as a separator with a value', () => {
        renderBox();
        const separator = screen.getByRole('separator');
        expect(separator).toHaveAttribute('aria-valuenow');
    });

    it.fails('widens the box with ArrowRight on the focused handle', async () => {
        const { handle, width } = renderBox();
        const initial = width();
        handle.focus();
        await userEvent.keyboard('{ArrowRight}');
        expect(width()).toBeGreaterThan(initial);
    });

    it.fails('narrows the box with ArrowLeft on the focused handle', async () => {
        const { handle, width } = renderBox();
        const initial = width();
        handle.focus();
        await userEvent.keyboard('{ArrowLeft}');
        expect(width()).toBeLessThan(initial);
    });

    it.fails('shrinks the box to its minimum width with Home', async () => {
        const { handle, width } = renderBox();
        handle.focus();
        await userEvent.keyboard('{Home}');
        expect(width()).toBe(50);
    });

    it.fails('grows the box to its maximum width with End', async () => {
        const { handle, width } = renderBox();
        handle.focus();
        await userEvent.keyboard('{End}');
        expect(width()).toBe(200);
    });
});

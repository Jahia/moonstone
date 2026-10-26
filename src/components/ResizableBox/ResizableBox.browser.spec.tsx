import { render, screen } from '@testing-library/react';
import { useState } from 'react';
import { userEvent } from 'vitest/browser';

import { ResizableBox } from './index';

import type { ResizableBoxProps } from './ResizableBox.types';

const renderBox = (props: Partial<ResizableBoxProps> = {}) => {
    render(
        <div style={{ width: 400 }}>
            <button type="button">before</button>
            <ResizableBox
                aria-label="Side panel"
                defaultSize={{ width: 100, height: 100 }}
                enable={['right']}
                maxWidth={200}
                minWidth={50}
                role="region"
                {...props}
            >
                <div>content</div>
            </ResizableBox>
        </div>,
    );
    const box = screen.getByRole('region', { name: 'Side panel' });
    const handle = screen.getByRole('separator');
    return { box, handle, width: () => box.getBoundingClientRect().width };
};

describe('ResizableBox keyboard', () => {
    it('reaches the resize handle with Tab', async () => {
        const { handle } = renderBox();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(handle).toHaveFocus();
    });

    it('exposes the resize handle as a named separator with the width of the box', () => {
        const { handle } = renderBox();
        expect(handle).toHaveAccessibleName('Side panel');
        expect(handle).toHaveAttribute('aria-valuenow', '100');
        expect(handle).toHaveAttribute('aria-valuetext', '100 pixels');
    });

    it('names the resize handle after the box it resizes, and points to it', () => {
        render(<ResizableBox aria-label="Side panel" id="side-panel"><div>content</div></ResizableBox>);
        const handle = screen.getByRole('separator');
        expect(handle).toHaveAccessibleName('Side panel');
        expect(handle).toHaveAttribute('aria-controls', 'side-panel');
    });

    it('names the resize handle "Resize" when the box has no name', () => {
        render(<ResizableBox><div>content</div></ResizableBox>);
        expect(screen.getByRole('separator')).toHaveAccessibleName('Resize');
    });

    it('widens the box with ArrowRight on the focused handle', async () => {
        const { handle, width } = renderBox();
        const initial = width();
        handle.focus();
        await userEvent.keyboard('{ArrowRight}');
        expect(width()).toBeGreaterThan(initial);
    });

    it('narrows the box with ArrowLeft on the focused handle', async () => {
        const { handle, width } = renderBox();
        const initial = width();
        handle.focus();
        await userEvent.keyboard('{ArrowLeft}');
        expect(width()).toBeLessThan(initial);
    });

    it('shrinks the box to its minimum width with Home', async () => {
        const { handle, width } = renderBox();
        handle.focus();
        await userEvent.keyboard('{Home}');
        expect(width()).toBe(50);
    });

    it('grows the box to its maximum width with End', async () => {
        const { handle, width } = renderBox();
        handle.focus();
        await userEvent.keyboard('{End}');
        expect(width()).toBe(200);
    });

    it('calls onKeyboardResize with the new width after a key press', async () => {
        const onKeyboardResize = vi.fn();
        const { handle } = renderBox({ onKeyboardResize });
        handle.focus();
        await userEvent.keyboard('{ArrowRight}');
        expect(onKeyboardResize).toHaveBeenCalledWith(110);
    });

    it('keeps the width of a controlled box until the consumer updates its size', async () => {
        const { handle } = renderBox({ size: { width: 100, height: 100 } });
        handle.focus();
        await userEvent.keyboard('{ArrowRight}');
        expect(handle).toHaveAttribute('aria-valuenow', '100');
    });

    it('resizes a controlled box once the consumer updates its size', async () => {
        const ControlledBox = () => {
            const [size, setSize] = useState({ width: 100, height: 100 });
            return (
                <ResizableBox
                    aria-label="Side panel"
                    maxWidth={200}
                    minWidth={50}
                    role="region"
                    size={size}
                    onKeyboardResize={newWidth => setSize({ width: newWidth, height: 100 })}
                />
            );
        };
        render(<ControlledBox/>);
        const box = screen.getByRole('region', { name: 'Side panel' });
        const handle = screen.getByRole('separator');
        handle.focus();
        await userEvent.keyboard('{ArrowRight}');
        await userEvent.keyboard('{ArrowRight}');
        expect(box.getBoundingClientRect().width).toBe(120);
        expect(handle).toHaveAttribute('aria-valuenow', '120');
    });
});

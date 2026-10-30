import React from 'react';

import type { NumberSize, ResizeCallback, ResizeDirection, ResizeStartCallback, Size } from 're-resizable';

export type EnableZonesProps = {
    // Top?: boolean;
    right?: boolean;
    // Bottom?: boolean;
    // left?: boolean;
    // topRight?: boolean;
    // bottomRight?: boolean;
    // bottomLeft?: boolean;
    // topLeft?: boolean;
};

// WIP
// const zones = ['top', 'right', 'bottom', 'left', 'topRight', 'bottomRight', 'bottomLeft', 'topLeft'];
export const zones: ZonesProps[] = ['right'];

export type ZonesProps = keyof EnableZonesProps;

export type ResizableBoxEnable = 'right';

export type ResizableBoxMinWidth = string | number;

export type ResizableBoxMaxWidth = string | number;

export type ResizableBoxProps = Omit<React.ComponentPropsWithoutRef<'div'>, 'children' | 'className' | 'onResize'> & {
    /**
     * Content of the panel.
     */
    children?: React.ReactNode;
    /**
     * Edges the user drags to resize the box. Only `right` is supported.
     * @default ['right']
     */
    enable?: ResizableBoxEnable[];
    /**
     * Minimum width, in pixels or as a CSS length. Keep it wide enough for the content to stay readable.
     * @default 50
     */
    minWidth?: ResizableBoxMinWidth;
    /**
     * Maximum width, in pixels or as a CSS length.
     * @default 200
     */
    maxWidth?: ResizableBoxMaxWidth;
    /**
     * Size on first render, in uncontrolled mode.
     * @default {width: '100%', height: 'auto'}
     */
    defaultSize?: Size;
    /**
     * Size of the box, in controlled mode: update it in `onResizeStop`. `defaultSize` is then ignored.
     */
    size?: Size;
    /**
     * Additional classname
     */
    className?: string;
    /**
     * ARIA role of the root element. The box has none by default: pass the landmark the panel needs, such as `region`.
     */
    role?: string;
    /**
     * Called when the user starts dragging the handle. A keyboard resize does not call it.
     * @param e - The mouse or touch event.
     * @param dir - The resized edge, `'right'`.
     * @param elementRef - The resized element.
     */
    onResizeStart?: ResizeStartCallback;
    /**
     * Called on every move while the user drags the handle. A keyboard resize does not call it.
     * @param event - The mouse or touch event.
     * @param direction - The resized edge, `'right'`.
     * @param elementRef - The resized element.
     * @param delta - The change of `width` and `height` since the drag began.
     */
    onResizing?: ResizeCallback;
    /**
     * Called when the user releases the handle, and after each key press that resizes the box from the focused handle. With a controlled `size`, apply `delta` to it.
     * @param event - The mouse, touch, or keyboard event.
     * @param direction - The resized edge, `'right'`.
     * @param elementRef - The resized element.
     * @param delta - The change of `width` and `height` since the resize began.
     */
    onResizeStop?: (event: MouseEvent | TouchEvent | KeyboardEvent, direction: ResizeDirection, elementRef: HTMLElement, delta: NumberSize) => void;
    /**
     * Texts read by screen readers. Translate them with the rest of the UI.
     */
    i18n?: {
        /**
         * Accessible name of the resize handle.
         * @default the `aria-label` of the box, else 'Resize'
         */
        handleLabel?: string;
        /**
         * Unit read after the width when the handle is focused, such as "pixels".
         * @default 'pixels'
         */
        widthUnit?: string;
    };
};

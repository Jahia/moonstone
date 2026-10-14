import React from 'react';

import type { ResizeCallback, ResizeStartCallback, Size } from 're-resizable';

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

export type ResizableBoxProps = {
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
     * ARIA role of the root element.
     * @default 'region'
     */
    role?: string;
    /**
     * Called when the user starts a resize, with the event, the resized edge, and the resized element.
     */
    onResizeStart?: ResizeStartCallback;
    /**
     * Called on every move during a resize, with the event, the resized edge, the resized element,
     * and the change of size since the resize began.
     */
    onResizing?: ResizeCallback;
    /**
     * Called when the user ends a resize, with the event, the resized edge, the resized element,
     * and the change of size since the resize began.
     */
    onResizeStop?: ResizeCallback;
};

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

export type ResizableBoxProps = Omit<React.ComponentPropsWithoutRef<'div'>, 'children' | 'className' | 'onResize'> & {
    /**
     * Content of the component
     */
    children?: React.ReactNode;
    /**
     * Set the resizable area of the box
     */
    enable?: ResizableBoxEnable[];
    /**
     * Set the minimum width
     */
    minWidth?: ResizableBoxMinWidth;
    /**
     * Set the maximum width
     */
    maxWidth?: ResizableBoxMaxWidth;
    /**
     * Set the default size
     */
    defaultSize?: Size;
    /**
     * Manage the size
     */
    size?: Size;
    /**
     * Additional classname
     */
    className?: string;
    /**
     * Role
     */
    role?: string;
    /**
     * Function triggered when the resize begins. A keyboard resize does not call it
     * @param {object} e - Mouse event
     * @param {string} dir - Direction resized
     * @param {node} ref - HTML element resized
     */
    onResizeStart?: ResizeStartCallback;
    /**
     * Function on resizing. A keyboard resize does not call it
     * @param {object} e - event
     */
    onResizing?: ResizeCallback;
    /**
     * Function triggered when the resize is finished. A keyboard resize does not call it
     * @param {object} e - Mouse event
     * @param {string} dir - Direction resized
     * @param {node} ref - HTML element resized
     * @param {object} delta - delta between after resize
     */
    onResizeStop?: ResizeCallback;
    /**
     * Function triggered when a key resizes the box from the handle. With a controlled `size`, apply the new width to it
     * @param {number} width - New width, in pixels
     */
    onKeyboardResize?: (width: number) => void;
    /**
     * ResizableBox labels
     */
    i18n?: {
        /**
         * aria-label of the resize handle
         * @default the aria-label of the box, else 'Resize'
         */
        handleLabel?: string;
        /**
         * Unit read after the width of the resize handle, e.g. "300 pixels"
         * @default 'pixels'
         */
        widthUnit?: string;
    };
};

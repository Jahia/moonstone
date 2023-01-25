import * as React from 'react';
import {Size, ResizeStartCallback, ResizeCallback} from 're-resizable';

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
     * Additional classnames
     */
    className?: string;
    /**
     * Role
     */
    role?: string;
    /**
     * Function triggered when the resize begins
     * @param {object} e - Mouse event
     * @param {string} dir - Direction resized
     * @param {node} ref - HTML element resized
     */
    onResizeStart?: ResizeStartCallback;
    /**
     * Function on resizing
     * @param {object} e - event
     */
    onResizing?: ResizeCallback;
    /**
     * Function triggered when the resize is finished
     * @param {object} e - Mouse event
     * @param {string} dir - Direction resized
     * @param {node} ref - HTML element resized
     * @param {object} delta - delta between after resize
     */
    onResizeStop?: ResizeCallback;
}


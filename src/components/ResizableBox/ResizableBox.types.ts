import * as React from 'react';

export type ResizableBoxEnable = "right";

export type ResizableBoxMinWidth = string | number;

export type ResizableBoxMaxWidth = string | number;

export type ResizableBoxDefaultSize = {
    width?: string | number;
    height?: string | number;
}

export type ResizableBoxSize = {
    width?: string | number;
    height?: string | number;
}

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
    defaultSize?: ResizableBoxDefaultSize;
    /**
     * Manage the size
     */
    size?: ResizableBoxSize;
    /**
     * Additional classname
     */
    className?: string;
    /**
     * Function triggered when the resize begins
     * @param {object} e - Mouse event
     * @param {string} dir - Direction resized
     * @param {node} ref - HTML element resized
     */
    onResizeStart?: (...args: any[])=>any;
    /**
     * Function on resizing
     * @param {object} e - event
     */
    onResizing?: (...args: any[])=>any;
    /**
     * Function triggered when the resize is finished
     * @param {object} e - Mouse event
     * @param {string} dir - Direction resized
     * @param {node} ref - HTML element resized
     * @param {object} delta - delta between after resize
     */
    onResizeStop?: (...args: any[])=>any;
}


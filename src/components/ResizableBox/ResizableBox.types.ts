import * as React from 'react';
import {Size} from 're-resizable';

export type EnableZones = {
    // top?: boolean;
    right?: boolean;
    // bottom?: boolean;
    // left?: boolean;
    // topRight?: boolean;
    // bottomRight?: boolean;
    // bottomLeft?: boolean;
    // topLeft?: boolean;
};

// WIP
// const zones = ['top', 'right', 'bottom', 'left', 'topRight', 'bottomRight', 'bottomLeft', 'topLeft'];
export const zones: Zones[] = ['right'];

export type Zones = keyof EnableZones;

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
     * Additional classname
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
    onResizeStart?: (...args: any[]) => void;
    /**
     * Function on resizing
     * @param {object} e - event
     */
    onResizing?: (...args: any[]) => void;
    /**
     * Function triggered when the resize is finished
     * @param {object} e - Mouse event
     * @param {string} dir - Direction resized
     * @param {node} ref - HTML element resized
     * @param {object} delta - delta between after resize
     */
    onResizeStop?: (...args: any[]) => void;
}


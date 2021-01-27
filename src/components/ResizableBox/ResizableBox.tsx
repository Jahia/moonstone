import React from 'react';
import {Resizable} from 're-resizable';
import classnames from 'clsx';
import './ResizableBox.scss';
import HandleResize from '~/icons/HandleResize';
import {ResizableBoxProps} from './ResizableBox.types';

// WIP
// const zones = ['top', 'right', 'bottom', 'left', 'topRight', 'bottomRight', 'bottomLeft', 'topLeft'];
const zones = ['right'];

export const ResizableBox: React.FC<ResizableBoxProps> = ({
    enable = ['right'],
    minWidth = 50,
    maxWidth = 200,
    defaultSize = {width: '100%', height: 'auto'},
    className = '',
    size = {},
    children = null,
    onResizeStart,
    onResizing,
    onResizeStop,
    ...props
}: ResizableBoxProps) => {
    const enableZones = {};

    zones.forEach(zone => {
        enableZones[zone] = enable.indexOf(zone) > -1;
    });

    return (
        <Resizable
            role="resizable-panel"
            enable={enableZones}
            minWidth={minWidth}
            maxWidth={maxWidth}
            size={size}
            defaultSize={defaultSize}
            handleClasses={
                {
                    right: classnames('moonstone-resizable_handle'),
                    left: classnames('moonstone-resizable_handle')
                }
            }
            handleComponent={
                {
                    right: <HandleResize className={classnames('moonstone-resizable_handle_icon')} size="big"/>,
                    left: <HandleResize className={classnames('moonstone-resizable_handle_icon')} size="big"/>
                }
            }
            className={classnames(className)}
            onResize={onResizing}
            onResizeStart={onResizeStart}
            onResizeStop={onResizeStop}
            {...props}
        >
            {children}
        </Resizable>
    );
};

ResizableBox.displayName = 'ResizableBox';

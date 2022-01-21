import React from 'react';
import {Resizable} from 're-resizable';
import clsx from 'clsx';
import './ResizableBox.scss';
import {HandleResize} from '~/icons';
import {zones, EnableZones, ResizableBoxProps} from './ResizableBox.types';

export const ResizableBox: React.FC<ResizableBoxProps> = ({
    enable = ['right'],
    minWidth = 50,
    maxWidth = 200,
    defaultSize = {width: '100%', height: 'auto'},
    className = '',
    size,
    children = null,
    onResizeStart,
    onResizing,
    onResizeStop,
    ...props
}) => {
    const enableZones: EnableZones = {};

    zones.forEach(zone => {
        enableZones[zone] = enable.indexOf(zone as any) > -1;
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
                    right: clsx('moonstone-resizable_handle'),
                    left: clsx('moonstone-resizable_handle')
                }
            }
            handleComponent={
                {
                    right: <HandleResize className={clsx('moonstone-resizable_handle_icon')} size="big"/>,
                    left: <HandleResize className={clsx('moonstone-resizable_handle_icon')} size="big"/>
                }
            }
            className={clsx(className)}
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

import clsx from 'clsx';
import { Resizable } from 're-resizable';
import React from 'react';

import { zones } from './ResizableBox.types';
import { HandleResize } from '~/icons';

import type { EnableZonesProps, ResizableBoxProps } from './ResizableBox.types';

import styles from './ResizableBox.module.scss';

export const ResizableBox: React.FC<ResizableBoxProps> = ({
    enable = ['right'],
    minWidth = 50,
    maxWidth = 200,
    defaultSize = {
        width: '100%',
        height: 'auto',
    },
    className = '',
    size,
    children = null,
    onResizeStart,
    onResizing,
    onResizeStop,
    ...props
}) => {
    const enableZones: EnableZonesProps = {};

    zones.forEach((zone) => {
        enableZones[zone] = enable.indexOf(zone) > -1;
    });

    return (
        <Resizable
            aria-label="resizable-panel"
            className={clsx(className)}
            defaultSize={defaultSize}
            enable={enableZones}
            handleClasses={
                {
                    right: clsx('moonstone-resizable_handle', styles['moonstone-resizable_handle']),
                    left: clsx('moonstone-resizable_handle', styles['moonstone-resizable_handle']),
                }
            }
            handleComponent={
                {
                    right: <HandleResize className={clsx('moonstone-resizable_handle_icon', styles['moonstone-resizable_handle_icon'])} size="big"/>,
                    left: <HandleResize className={clsx('moonstone-resizable_handle_icon', styles['moonstone-resizable_handle_icon'])} size="big"/>,
                }
            }
            maxWidth={maxWidth}
            minWidth={minWidth}
            role="region"
            size={size}
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

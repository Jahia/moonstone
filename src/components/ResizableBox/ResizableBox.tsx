import clsx from 'clsx';
import { Resizable } from 're-resizable';
import React, { useId, useLayoutEffect, useRef, useState } from 'react';

import { zones } from './ResizableBox.types';
import { HandleResize } from '~/icons';

import type { EnableZonesProps, ResizableBoxProps } from './ResizableBox.types';

import styles from './ResizableBox.module.scss';

// Pixels per ArrowLeft or ArrowRight press on the handle
const KEYBOARD_STEP = 10;

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
    onKeyboardResize,
    i18n,
    ...props
}) => {
    const enableZones: EnableZonesProps = {};

    zones.forEach((zone) => {
        enableZones[zone] = enable.indexOf(zone) > -1;
    });

    const resizableRef = useRef<Resizable>(null);
    const [width, setWidth] = useState<number>();
    const generatedId = useId();
    const boxProps = {
        ...props,
        id: props.id ?? generatedId,
    };
    const min = parseFloat(String(minWidth));
    const max = parseFloat(String(maxWidth));

    // A controlled size, such as a collapsed SecondaryNav that expands, changes the width without a resize
    useLayoutEffect(() => {
        setWidth(resizableRef.current?.size.width);
    }, [size?.width]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        const hasModifier = e.shiftKey || e.ctrlKey || e.metaKey || e.altKey;
        if (e.defaultPrevented || hasModifier) {
            return;
        }

        const resizable = resizableRef.current;
        const current = resizable.size.width;
        const targets: Record<string, number> = {
            ArrowLeft: current - KEYBOARD_STEP,
            ArrowRight: current + KEYBOARD_STEP,
            Home: min,
            End: max,
        };
        const target = targets[e.key];

        if (!Number.isFinite(target)) {
            return;
        }

        e.preventDefault();
        const next = Math.min(Math.max(target, Number.isFinite(min) ? min : 0), Number.isFinite(max) ? max : Infinity);
        // A controlled width is drawn from `size`, so the consumer applies it
        if (size?.width === undefined) {
            resizable.updateSize({
                width: next,
                height: resizable.state.height,
            });
            setWidth(next);
        }

        onKeyboardResize?.(next);
    };

    const handle = (
        <div
            aria-controls={boxProps.id}
            aria-label={i18n?.handleLabel || boxProps['aria-label'] || 'Resize'}
            aria-orientation="vertical"
            aria-valuemax={Number.isFinite(max) ? max : undefined}
            aria-valuemin={Number.isFinite(min) ? min : undefined}
            aria-valuenow={width}
            aria-valuetext={width === undefined ? undefined : `${width} ${i18n?.widthUnit || 'pixels'}`}
            className={clsx('moonstone-resizable_handle_control', styles['moonstone-resizable_handle_control'])}
            role="separator"
            tabIndex={0}
            onKeyDown={handleKeyDown}
        >
            <HandleResize className={clsx('moonstone-resizable_handle_icon', styles['moonstone-resizable_handle_icon'])} size="big"/>
        </div>
    );

    return (
        <Resizable
            className={clsx(className)}
            defaultSize={defaultSize}
            enable={enableZones}
            handleClasses={
                {
                    right: clsx('moonstone-resizable_handle', styles['moonstone-resizable_handle']),
                }
            }
            handleComponent={{
                right: handle,
            }}
            maxWidth={maxWidth}
            minWidth={minWidth}
            ref={resizableRef}
            size={size}
            onResize={onResizing}
            onResizeStart={onResizeStart}
            onResizeStop={(e, dir, ref, delta) => {
                setWidth(ref.offsetWidth);
                onResizeStop?.(e, dir, ref, delta);
            }}
            {...boxProps}
        >
            {children}
        </Resizable>
    );
};

ResizableBox.displayName = 'ResizableBox';

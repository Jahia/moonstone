import clsx from 'clsx';
import { Resizable } from 're-resizable';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import { zones } from './ResizableBox.types';
import { HandleResize } from '~/icons';

import type { EnableZonesProps, ResizableBoxMaxWidth, ResizableBoxMinWidth, ResizableBoxProps } from './ResizableBox.types';

import styles from './ResizableBox.module.scss';

// Pixels per ArrowLeft or ArrowRight press on the handle
const KEYBOARD_STEP = 10;

// re-resizable reads a percent bound against the width of the parent
const toPixels = (bound: ResizableBoxMinWidth | ResizableBoxMaxWidth, parentWidth: number) => {
    const pixels = String(bound).endsWith('%') ? (parentWidth * parseFloat(String(bound))) / 100 : parseFloat(String(bound));
    return Number.isFinite(pixels) ? pixels : undefined;
};

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
    i18n = {
        handleLabel: 'Resize',
    },
    ...props
}) => {
    const enableZones: EnableZonesProps = {};

    zones.forEach((zone) => {
        enableZones[zone] = enable.indexOf(zone) > -1;
    });

    const resizableRef = useRef<Resizable>(null);
    const [value, setValue] = useState<{
        now?: number;
        min?: number;
        max?: number;
    }>({});

    const syncValue = useCallback((now?: number) => {
        const resizable = resizableRef.current;
        const parentWidth = resizable?.parentNode?.clientWidth ?? 0;
        setValue({
            now: now ?? resizable?.size.width,
            min: toPixels(minWidth, parentWidth),
            max: toPixels(maxWidth, parentWidth),
        });
    }, [minWidth, maxWidth]);

    useEffect(() => {
        syncValue();
    }, [syncValue, size?.width]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.altKey || e.ctrlKey || e.metaKey) {
            return;
        }

        const resizable = resizableRef.current;
        const current = resizable.size.width;
        const parentWidth = resizable.parentNode?.clientWidth ?? 0;
        const min = toPixels(minWidth, parentWidth) ?? 0;
        const max = toPixels(maxWidth, parentWidth) ?? Infinity;
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
        const next = Math.min(Math.max(target, min), max);
        resizable.updateSize({
            width: next,
            height: resizable.state.height,
        });
        syncValue(next);
        // re-resizable types its callbacks for a pointer event only
        onResizeStop?.(e.nativeEvent as unknown as MouseEvent, 'right', resizable.resizable, {
            width: next - current,
            height: 0,
        });
    };

    const handle = (
        <div
            aria-label={i18n.handleLabel}
            aria-orientation="vertical"
            aria-valuemax={value.max}
            aria-valuemin={value.min}
            aria-valuenow={value.now}
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
            handleComponent={{
                right: handle,
                left: handle,
            }}
            maxWidth={maxWidth}
            minWidth={minWidth}
            ref={resizableRef}
            role="region"
            size={size}
            onResize={onResizing}
            onResizeStart={onResizeStart}
            onResizeStop={(e, dir, ref, delta) => {
                syncValue(ref.offsetWidth);
                onResizeStop?.(e, dir, ref, delta);
            }}
            {...props}
        >
            {children}
        </Resizable>
    );
};

ResizableBox.displayName = 'ResizableBox';

import clsx from 'clsx';
import React, { useEffect, useId, useLayoutEffect, useRef } from 'react';

import { Button } from '~/components/Button';
import { Typography } from '~/components/Typography';
import { usePositioning } from '~/hooks';

import type { CollectionBarFilter } from './CollectionBar.types';

import styles from './CollectionBar.module.scss';

const anchorPosition = {
    top: 4,
    left: 0,
};

const anchorElOrigin = {
    horizontal: 'left',
    vertical: 'bottom',
} as const;

const transformElOrigin = {
    horizontal: 'left',
    vertical: 'top',
} as const;

const FOCUSABLE = 'input:not([disabled]), textarea:not([disabled]), select:not([disabled]), button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])';

type FilterSelectorProps = {
    filter: CollectionBarFilter;
    /** Returns the chip that anchors the selector */
    getAnchor: () => HTMLElement | null;
    closeLabel: string;
    onClose: () => void;
};

/** The selector of a filter: a non-modal dialog anchored below its chip, with the look of a Menu */
export const FilterSelector = ({
    filter,
    getAnchor,
    closeLabel,
    onClose,
}: FilterSelectorProps) => {
    const titleId = useId();
    const anchorRef = useRef<HTMLElement>(null);
    const [stylePosition, dialogRef] = usePositioning(true, anchorPosition, anchorRef, anchorElOrigin, transformElOrigin, 'fixed');

    // Before the effect of usePositioning, which reads the anchor
    useLayoutEffect(() => {
        anchorRef.current = getAnchor();
    }, [getAnchor]);

    // After the layout effects: a Menu that closes in the same render gives the focus back to its button first
    useEffect(() => {
        const dialog = dialogRef.current;
        const body = dialog?.querySelector<HTMLElement>('[data-selector-body]');
        (body?.querySelector<HTMLElement>(FOCUSABLE) ?? dialog?.querySelector<HTMLElement>(FOCUSABLE))?.focus({ preventScroll: true });
    }, [dialogRef]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        const hasModifier = e.shiftKey || e.ctrlKey || e.metaKey || e.altKey;
        if (e.key === 'Escape' && !e.defaultPrevented && !hasModifier) {
            // Stops a Drawer or a Modal around the bar from closing on the same Escape
            e.stopPropagation();
            onClose();
        }
    };

    return (
        <>
            {/* oxlint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- Escape closes the dialog, as in a Menu */}
            <div
                aria-labelledby={titleId}
                className={clsx('moonstone-collectionBar_selector', styles['moonstone-collectionBar_selector'])}
                ref={dialogRef}
                role="dialog"
                style={stylePosition}
                onKeyDown={handleKeyDown}
            >
                <Typography
                    className={clsx('moonstone-collectionBar_selectorTitle', styles['moonstone-collectionBar_selectorTitle'])}
                    id={titleId}
                    variant="caption"
                    weight="bold"
                >
                    {filter.label}
                </Typography>
                <div className={clsx('moonstone-collectionBar_selectorBody', styles['moonstone-collectionBar_selectorBody'])} data-selector-body="">
                    {typeof filter.selector === 'function' ? filter.selector({ close: onClose }) : filter.selector}
                </div>
                <div className={clsx('moonstone-collectionBar_selectorFooter', styles['moonstone-collectionBar_selectorFooter'])}>
                    <Button label={closeLabel} variant="ghost" onClick={onClose}/>
                </div>
            </div>
            <div
                aria-hidden="true"
                className={clsx('moonstone-collectionBar_overlay', styles['moonstone-collectionBar_overlay'])}
                onClick={onClose}
                onContextMenu={onClose}
            />
        </>
    );
};

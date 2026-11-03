import clsx from 'clsx';
import React, { useEffect, useId, useLayoutEffect, useRef } from 'react';

import { Button } from '~/components/Button';
import { Typography } from '~/components/Typography';
import { layout } from '~/globals/css-utils.js';
import { usePositioning } from '~/hooks';

import type { FilterSelectorProps } from './FilterSelector.types';

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

const FOCUSABLE = 'input:not([disabled], [type="hidden"]), textarea:not([disabled]), select:not([disabled]), button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])';

/** The selector of a filter: a modal dialog anchored below its chip, with the look of a Menu */
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
        if (e.defaultPrevented || e.ctrlKey || e.metaKey || e.altKey) {
            return;
        }

        if (e.key === 'Escape' && !e.shiftKey) {
            // Stops a Drawer or a Modal around the bar from closing on the same Escape
            e.stopPropagation();
            onClose();
        } else if (e.key === 'Tab') {
            // The overlay blocks the page, so Tab and Shift+Tab cycle inside the dialog
            const focusables = Array.from(e.currentTarget.querySelectorAll<HTMLElement>(FOCUSABLE));
            const edge = e.shiftKey ? focusables[0] : focusables[focusables.length - 1];
            if (document.activeElement === edge) {
                e.preventDefault();
                (e.shiftKey ? focusables[focusables.length - 1] : focusables[0])?.focus();
            }
        }
    };

    return (
        <>
            {/* oxlint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- Escape closes the dialog, and Tab stays in it */}
            <div
                aria-labelledby={titleId}
                aria-modal="true"
                className={clsx(
                    ['moonstone-collectionBar_selector', styles['moonstone-collectionBar_selector']],
                    ['flexCol_nowrap', layout.flexCol_nowrap],
                )}
                data-filter={filter.key}
                ref={dialogRef}
                role="dialog"
                style={stylePosition}
                onKeyDown={handleKeyDown}
            >
                <div className={clsx('moonstone-collectionBar_selectorTitle', styles['moonstone-collectionBar_selectorTitle'])}>
                    <Typography id={titleId} variant="caption" weight="bold">
                        {filter.label}
                    </Typography>
                </div>
                <div
                    className={clsx(
                        ['moonstone-collectionBar_selectorBody', styles['moonstone-collectionBar_selectorBody']],
                        ['flexCol_nowrap', layout.flexCol_nowrap],
                        ['alignStart', layout.alignStart],
                    )}
                    data-selector-body=""
                >
                    {typeof filter.selector === 'function' ? filter.selector({ close: onClose }) : filter.selector}
                </div>
                <div
                    className={clsx(
                        ['moonstone-collectionBar_selectorFooter', styles['moonstone-collectionBar_selectorFooter']],
                        ['flexRow', layout.flexRow],
                        ['justifyEnd', layout.justifyEnd],
                    )}
                >
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

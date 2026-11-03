import {
    autoUpdate,
    flip,
    FloatingFocusManager,
    FloatingOverlay,
    FloatingPortal,
    offset,
    shift,
    useDismiss,
    useFloating,
    useInteractions,
} from '@floating-ui/react';
import clsx from 'clsx';
import React, { useId, useLayoutEffect } from 'react';

import { Button } from '~/components/Button';
import { Typography } from '~/components/Typography';
import { layout } from '~/globals/css-utils.js';

import type { FilterSelectorProps } from './FilterSelector.types';

import styles from './CollectionBar.module.scss';

/**
 * The selector of a filter: a modal dialog anchored below its chip, with the look of a Menu.
 * It renders in a portal, so a transformed or clipping ancestor of the bar, such as an open Drawer, does not move it
 */
export const FilterSelector = ({
    filter,
    getAnchor,
    getBar,
    closeLabel,
    onClose,
}: FilterSelectorProps) => {
    const titleId = useId();
    const { refs, floatingStyles, context } = useFloating({
        open: true,
        onOpenChange: (isOpen, _event, reason) => {
            if (!isOpen && reason === 'outside-press') {
                onClose('outsidePress');
            }
        },
        placement: 'bottom-start',
        strategy: 'fixed',
        // A transform would become the containing block of a fixed Menu in the selector, such as the menu of a Dropdown
        transform: false,
        middleware: [offset(4), flip({ padding: 8 }), shift({ padding: 8 })],
        whileElementsMounted: autoUpdate,
    });
    // Escape is handled on the dialog, not by the listener of floating-ui on the document, which a Modal around the bar also uses.
    // 'click' closes on the up-event, so a press outside can still be cancelled by dragging away (WCAG 2.5.2)
    const dismiss = useDismiss(context, {
        escapeKey: false,
        // A control of the bar closes the selector itself, with its own reason. A press in a popup of the selector, such as
        // the calendar of a DateTimeInput, passes through the dialog in the React tree, so it counts as inside
        outsidePress: event => !getBar()?.contains(event.target as Node),
        outsidePressEvent: 'click',
    });
    const { getFloatingProps } = useInteractions([dismiss]);

    // The anchor is read once the chip is in the DOM, after each commit: the chip of an added filter mounts with its selector,
    // and a chip remounts when the bar becomes a toolbar
    useLayoutEffect(() => {
        const anchor = getAnchor();
        if (anchor !== refs.domReference.current) {
            refs.setReference(anchor);
        }
    });

    const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
        if (e.defaultPrevented || e.key !== 'Escape' || e.shiftKey || e.ctrlKey || e.metaKey || e.altKey) {
            return;
        }

        // React events bubble through the portal: this stops a Drawer or a Modal around the bar from closing on the same Escape
        e.stopPropagation();
        onClose('escape');
    };

    return (
        <FloatingPortal>
            <FloatingOverlay
                aria-hidden="true"
                className={clsx('moonstone-collectionBar_overlay', styles['moonstone-collectionBar_overlay'])}
                onContextMenu={() => onClose('outsidePress')}
            />
            {/* The focus manager keeps Tab and Shift+Tab in the dialog. The bar gives the focus back, as the chip may leave the bar */}
            <FloatingFocusManager context={context} returnFocus={false}>
                <div
                    aria-labelledby={titleId}
                    aria-modal="true"
                    className={clsx(
                        ['moonstone-collectionBar_selector', styles['moonstone-collectionBar_selector']],
                        ['flexCol_nowrap', layout.flexCol_nowrap],
                    )}
                    data-filter={filter.key}
                    ref={refs.setFloating}
                    role="dialog"
                    style={floatingStyles}
                    {...getFloatingProps({ onKeyDown: handleKeyDown })}
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
                    >
                        {typeof filter.selector === 'function' ? filter.selector({ close: () => onClose('close') }) : filter.selector}
                    </div>
                    <div
                        className={clsx(
                            ['moonstone-collectionBar_selectorFooter', styles['moonstone-collectionBar_selectorFooter']],
                            ['flexRow', layout.flexRow],
                            ['justifyEnd', layout.justifyEnd],
                        )}
                    >
                        <Button label={closeLabel} variant="ghost" onClick={() => onClose('closeButton')}/>
                    </div>
                </div>
            </FloatingFocusManager>
        </FloatingPortal>
    );
};

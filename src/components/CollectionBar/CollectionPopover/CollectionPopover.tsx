import {
    autoUpdate,
    flip,
    FloatingFocusManager,
    FloatingPortal,
    offset,
    shift,
    useDismiss,
    useFloating,
    useInteractions,
} from '@floating-ui/react';
import clsx from 'clsx';
import React, { useEffect, useId } from 'react';

import { Button } from '~/components/Button';
import { Typography } from '~/components/Typography';
import { shouldIgnoreKey } from '~/hooks';
import { ChevronLeft } from '~/icons';

import styles from './CollectionPopover.module.scss';

export type CollectionPopoverCloseReason = 'escape' | 'outsidePress' | 'focusOut';

type CollectionPopoverProps = {
    /** The control that opens the popup, below which it sits */
    anchor: HTMLElement;
    /** Title of the popup, which names the dialog */
    title: string;
    children: React.ReactNode;
    onClose: (reason: CollectionPopoverCloseReason) => void;
    /** Shows a back button before the title, which leads to where the popup came from */
    onBack?: () => void;
    /** Accessible name of the back button */
    backLabel?: string;
    className?: string;
};

const isEscape = (e: KeyboardEvent | React.KeyboardEvent) => e.key === 'Escape' && !shouldIgnoreKey(e);

/**
 * A non-modal dialog below a control of the CollectionBar, with the look of a Menu.
 * It renders in a portal, so a transformed or clipping ancestor of the bar does not move it
 */
export const CollectionPopover = ({
    anchor,
    title,
    children,
    onClose,
    onBack,
    backLabel,
    className,
}: CollectionPopoverProps) => {
    const titleId = useId();
    const { refs, floatingStyles, context } = useFloating({
        open: true,
        onOpenChange: (isOpen, _event, reason) => {
            if (!isOpen) {
                onClose(reason === 'focus-out' ? 'focusOut' : 'outsidePress');
            }
        },
        elements: { reference: anchor },
        placement: 'bottom-start',
        strategy: 'fixed',
        middleware: [offset(4), flip({ padding: 8 }), shift({ padding: 8 })],
        whileElementsMounted: autoUpdate,
    });
    // Escape is handled on the dialog and its anchor, so that a Drawer or a Modal around the bar does not close on the same key
    const dismiss = useDismiss(context, {
        escapeKey: false,
        outsidePressEvent: 'click',
    });
    const { getFloatingProps } = useInteractions([dismiss]);

    // The focus enters the dialog one frame after it opens, and Shift+Tab can bring it back to the anchor
    useEffect(() => {
        const handleAnchorKeyDown = (e: KeyboardEvent) => {
            if (isEscape(e)) {
                e.preventDefault();
                e.stopPropagation();
                onClose('escape');
            }
        };

        anchor.addEventListener('keydown', handleAnchorKeyDown);
        return () => anchor.removeEventListener('keydown', handleAnchorKeyDown);
    }, [anchor, onClose]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
        if (isEscape(e)) {
            e.stopPropagation();
            onClose('escape');
        }
    };

    return (
        <FloatingPortal>
            {/* The focus goes to the content first, after the back button */}
            <FloatingFocusManager context={context} initialFocus={onBack ? 1 : 0} modal={false} returnFocus={false}>
                <div
                    aria-labelledby={titleId}
                    className={clsx(styles.popover, className)}
                    ref={refs.setFloating}
                    role="dialog"
                    style={floatingStyles}
                    {...getFloatingProps({ onKeyDown: handleKeyDown })}
                >
                    <div className={styles.title}>
                        {onBack && (
                            <Button
                                aria-label={backLabel}
                                className={styles.back}
                                icon={<ChevronLeft/>}
                                variant="ghost"
                                onClick={onBack}
                            />
                        )}
                        <Typography id={titleId} variant="caption" weight="bold">{title}</Typography>
                    </div>
                    <div className={styles.body}>
                        {children}
                    </div>
                </div>
            </FloatingFocusManager>
        </FloatingPortal>
    );
};

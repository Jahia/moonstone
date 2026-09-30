import { arrow, flip, FloatingArrow, FloatingPortal, offset, shift, useDismiss, useFloating, useFocus, useHover, useInteractions } from '@floating-ui/react';
import clsx from 'clsx';
import React, { useRef, useState } from 'react';

import { Typography } from '~/components';

import type { TooltipProps } from './Tooltip.types';

import styles from './Tooltip.module.scss';

export const Tooltip = ({
    label,
    children,
    className,
    ...props
}: TooltipProps) => {
    // Floating UI manages everything from the hover to the display by using isOpen
    const [isOpen, setIsOpen] = useState(false);
    const arrowRef = useRef(null);

    const { refs, floatingStyles, context } = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,

        // Flip & shift change the tooltip's position if the default one might cause overflow
        // Arrow adds an arrow pointing to the anchor beside the tooltip
        middleware: [
            offset(10),
            flip(),
            shift(),
            arrow({
                element: arrowRef,
            }),
        ],
    });

    const hover = useHover(context);
    const focus = useFocus(context);
    const dismiss = useDismiss(context);

    const { getReferenceProps, getFloatingProps } = useInteractions([
        hover,
        focus,
        dismiss,
    ]);

    if (children && label) {
        return (
            <div
                className={clsx('moonstone-tooltip', className)}
                ref={refs.setReference}
                {...getReferenceProps()}
                {...props}
            >
                {/* Children is the element to interact with in order for the tooltip to appear */}
                {React.cloneElement(children, {
                    'aria-describedby': 'moonstone-tooltip_label',
                })}
                {isOpen
                    && (
                        <FloatingPortal>
                            <div
                                className={clsx('moonstone-tooltip_label', styles['moonstone-tooltip_label'])}
                                id="moonstone-tooltip_label"
                                ref={refs.setFloating}
                                role="tooltip"
                                style={floatingStyles}
                                {...getFloatingProps()}
                            >
                                <FloatingArrow className={clsx('moonstone-tooltip_arrow', styles['moonstone-tooltip_arrow'])} context={context} ref={arrowRef}/>
                                <Typography>
                                    {label}
                                </Typography>
                            </div>
                        </FloatingPortal>
                    )}
            </div>
        );
    }
};

Tooltip.displayName = 'Tooltip';

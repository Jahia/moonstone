import React, {useRef, useState} from 'react';
import clsx from 'clsx';
import './Tooltip.scss';
import type {TooltipProps} from './Tooltip.types';
import {useHover, useFloating, useInteractions, arrow, offset, FloatingArrow, flip, shift, useFocus} from '@floating-ui/react';

export const Tooltip = ({
    label,
    children,
    className,
    ...props
}: TooltipProps) => {
    // Floating UI manages everything from the hover to the display by using isOpen
    const [isOpen, setIsOpen] = useState(false);
    const arrowRef = useRef(null);

    const {refs, floatingStyles, context} = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,

        // Flip & shift change the tooltip's position if the default one might cause overflow
        // Arrow adds an arrow pointing to the anchor beside the tooltip
        middleware: [
            offset(10),
            flip(),
            shift(),
            arrow({
                element: arrowRef
            })
        ]
    });

    const hover = useHover(context);
    const focus = useFocus(context);

    const {getReferenceProps, getFloatingProps} = useInteractions([
        hover,
        focus
    ]);

    if (children && label) {
        return (
            <div
                ref={refs.setReference}
                className={clsx('moonstone-tooltip', className)}
                {...getReferenceProps()}
                {...props}
            >
                {/* Children is the element to interact with in order for the tooltip to appear */}
                {React.cloneElement(children, {
                'aria-describedby': 'moonstone-tooltip_label'
                })}
                {isOpen &&
                <span
                    ref={refs.setFloating}
                    id="moonstone-tooltip_label"
                    className={clsx('moonstone-tooltip_label')}
                    style={floatingStyles}
                    role="tooltip"
                    {...getFloatingProps()}
                >
                    <FloatingArrow ref={arrowRef} className="moonstone-tooltip_arrow" context={context}/>
                    {label}
                </span>}
            </div>
        );
    }
};

Tooltip.displayName = 'Tooltip';

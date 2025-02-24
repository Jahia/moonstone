import React, {useRef, useState} from 'react';
import clsx from 'clsx';
import './Tooltip.scss';
import type {TooltipProps} from './Tooltip.types';
import {useHover, useFloating, useInteractions, arrow, offset, FloatingArrow, flip, shift} from '@floating-ui/react';

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
        // Arrow add an arrow pointing to the anchor beside the tooltip
        middleware: [
            offset(8),
            flip(),
            shift(),
            arrow({
                element: arrowRef
            })
        ]
    });

    const hover = useHover(context);

    const {getReferenceProps, getFloatingProps} = useInteractions([
        hover
    ]);

    return (
        <div
            ref={refs.setReference}
            className={clsx('moonstone-tooltip', className)}
            {...getReferenceProps()}
            {...props}
        >
            {/* children is the element to interact with in order for the tooltip to appear */}
            {children}
            {isOpen &&
            <span ref={refs.setFloating} className={clsx('moonstone-tooltip_label')} style={floatingStyles} {...getFloatingProps()}>
                <FloatingArrow ref={arrowRef} className="moonstone-tooltip_arrow" context={context}/>
                {label}
            </span>}
        </div>
    );
};

Tooltip.displayName = 'Tooltip';

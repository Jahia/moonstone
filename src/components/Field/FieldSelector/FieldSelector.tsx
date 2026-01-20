import React from 'react';
import clsx from 'clsx';
import './FieldSelector.scss';
import {FieldSelectorProps} from './FieldSelector.types';
import {HandleDrag} from '~/icons';

export const FieldSelector = React.forwardRef<HTMLDivElement, FieldSelectorProps>(({
    buttons,
    selector,
    className,
    isDraggable = false,
    inputId,
    'aria-describedby': ariaDescribedby,
    ...props
}, ref) => {
    const enhancedSelector = React.isValidElement(selector) ?
        React.cloneElement(selector, {
            id: inputId,
            'aria-describedby': ariaDescribedby
        } as React.HTMLAttributes<HTMLElement>) :
        selector;

    return (
        <div
            ref={ref}
            className={clsx(
                'moonstone-fieldSelector',
                'flexRow_nowrap',
                'alignCenter',
                className
            )}
            draggable={isDraggable}
            {...props}
        >
            <div className={clsx('moonstone-cardSelector_dragIcon', 'flexRow_between', 'alignCenter')}>
                {isDraggable && <HandleDrag color="gray" size="big"/>}
            </div>
            <div className={clsx('moonstone-fieldSelector_selector', 'flexCol_nowrap', 'alignStart', 'flexFluid')}>
                {enhancedSelector}
            </div>
            <div className={clsx('moonstone-fieldSelector_buttons', 'flexRow_nowrap')}>
                {buttons &&
                    React.Children.map(buttons, button =>
                        button.props && button.props.children ?
                            (React.Children.map(button.props.children, btn => {
                                const key = btn.props.icon ? btn.props.icon.name : btn.props.label;
                                return (btn && <btn.type key={`btn-${key}`} size="default" variant="ghost" {...btn.props}/>);
                            }
                            )) : (buttons && <buttons.type size="default" variant="ghost" {...buttons.props}/>)
                    )}
            </div>
        </div>
    );
});

FieldSelector.displayName = 'FieldSelector';

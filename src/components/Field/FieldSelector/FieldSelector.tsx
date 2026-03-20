import React from 'react';
import clsx from 'clsx';
import styles from './FieldSelector.module.scss';
import {FieldSelectorProps} from './FieldSelector.types';
import {HandleDrag} from '~/icons';
import {layout} from '~/globals/css-utils.js';

export const FieldSelector = React.forwardRef<HTMLDivElement, FieldSelectorProps>(({
    buttons,
    selector,
    className,
    isDraggable = false,
    ...props
}, ref) => {
    if (!selector) {
        return null;
    }

    return (
        <div
            ref={ref}
            className={clsx(
                ['moonstone-fieldSelector', styles['moonstone-fieldSelector']],
                ['flexRow_nowrap', layout.flexRow_nowrap],
                ['alignCenter', layout.alignCenter],
                className
            )}
            draggable={isDraggable}
            {...props}
        >
            <div
                className={clsx(
                    ['moonstone-cardSelector_dragIcon', styles['moonstone-cardSelector_dragIcon']],
                    ['flexRow_between', layout.flexRow_between],
                    ['alignCenter', layout.alignCenter]
                )}
            >
                {isDraggable && <HandleDrag color="gray" size="big"/>}
            </div>
            <div
                className={clsx(
                    'moonstone-fieldSelector_selector',
                    ['flexCol_nowrap', layout.flexCol_nowrap],
                    ['alignStart', layout.alignStart],
                    ['flexFluid', layout.flexFluid]
                )}
            >
                {selector}
            </div>
            <div
                className={clsx(
                    ['moonstone-fieldSelector_buttons', styles['moonstone-fieldSelector_buttons']],
                    ['flexRow_nowrap', layout.flexRow_nowrap]
                )}
            >
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

import React from 'react';
import './ButtonGroup.scss';
import clsx from 'clsx';
import {ButtonGroupProps} from './ButtonGroup.types';

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
    size = 'default',
    isReversed = false,
    variant = 'default',
    color = 'default',
    className = null,
    children,
    ...props
}) => {
    if (!children || React.Children.count(children) < 1) {
        return null;
    }

    return (
        <div
            role="group"
            className={clsx(
                'moonstone-buttonGroup',
                className,
                'flexRow',
                'alignCenter'
            )}
            {...props}
        >
            {
                React.Children.map(children, button => {
                    if (!React.isValidElement(button)) {
                        return null;
                    }

                    return (
                        <button.type
                            {...button.props}
                            size={size}
                            variant={variant}
                            isReversed={isReversed}
                            color={color}
                        />
                    );
                })
            }
        </div>
    );
};

ButtonGroup.displayName = 'ButtonGroup';

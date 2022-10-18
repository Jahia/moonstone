import React from 'react';
import clsx from 'clsx';
import './Collapsible.scss';
import {CollapsibleProps} from './Collapsible.types';
import {Typography} from '~/components';
import {ChevronRight} from '~/icons/components';

const ControlledCollapsibleForwardRef: React.ForwardRefRenderFunction<HTMLDivElement, CollapsibleProps> = ({
    label,
    className,
    children,
    onClick = () => undefined,
    id = null,
    isExpanded = false,
    ...other
}, ref) => {
    const classNameProps = clsx(
        'moonstone-collapsible',
        className
    );

    return (
        <div
            ref={ref}
            className={classNameProps}
            {...other}
        >
            <button
                type="button"
                className="moonstone-collapsible_button flexRow alignCenter"
                aria-expanded={isExpanded}
                aria-controls={id}
                onClick={e => onClick(e)}
            >
                <ChevronRight className={clsx('moonstone-collapsible_icon', {'moonstone-collapsible_icon_expanded': isExpanded})} size="big"/>
                <Typography
                    isNowrap
                    isUpperCase
                    component="span"
                    variant="heading"
                >
                    {label}
                </Typography>
            </button>
            <div id={id}
                 className={clsx([isExpanded ? 'moonstone-collapsible_content_expanded' : 'moonstone-collapsible_content_collapsed'])}
                 hidden={!isExpanded}
            >
                {children}
            </div>
        </div>
    );
};

export const ControlledCollapsible = React.forwardRef(ControlledCollapsibleForwardRef);

ControlledCollapsible.displayName = 'ControlledCollapsible';

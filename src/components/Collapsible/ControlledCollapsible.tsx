import React from 'react';
import clsx from 'clsx';
import './Collapsible.scss';
import {CollapsibleProps} from './Collapsible.types';
import {Typography} from '~/components';
import {ChevronRight} from '~/icons/components';

export const ControlledCollapsible: React.FC<CollapsibleProps> = ({
    label,
    className,
    children,
    onClick = () => undefined,
    id = null,
    isExpanded = false,
    ...other
}) => {
    const classNameProps = clsx(
        'moonstone-collapsible',
        className
    );

    return (
        <div
            className={classNameProps}
            {...other}
        >
            <button
                className="moonstone-collapsible_button flexRow alignCenter"
                aria-expanded={isExpanded}
                onClick={e => onClick(e)}
                aria-controls={id}
            >
                <ChevronRight className={clsx('moonstone-collapsible_icon', {'moonstone-collapsible_icon_expanded': isExpanded})} size='big'/>
                <Typography
                    isNowrap
                    component="span"
                    variant="heading"
                >
                    {label}
                </Typography>
            </button>
            <div id={id}
                className={clsx([isExpanded ? 'moonstone-collapsible_content_expanded' : 'moonstone-collapsible_content_collapsed'],)}
            >
                {children}
            </div>
        </div>
    );
};

ControlledCollapsible.displayName = 'ControlledCollapsible';

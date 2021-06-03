import React from 'react'
import clsx from 'clsx';

import {ExpansionContainerProps} from './ExpansionContainer.types';
import './ExpansionContainer.scss';
import {ChevronDown, ChevronRight} from '~/icons';

export const ExpansionContainer: React.FC<ExpansionContainerProps> = ({
    canExpand,
    isExpanded,
    depth,
    getToggleRowExpandedProps,
    className,
    children,
    ...props
}) => {
    const paddingLeft = `${depth * 1.5}rem`;
    const marginLeft = '16px';

    if (canExpand) {
        return (
            <div
                {...getToggleRowExpandedProps({style: {paddingLeft}})}
                className={clsx('moonstone-ExpansionContainer', 'flexRow_nowrap', 'alignCenter', className)}
            >
                <span {...props}>
                    {isExpanded ? <ChevronDown/> : <ChevronRight/>}
                </span>
                {children}
            </div>
        );
    }

    return <div style={{marginLeft, paddingLeft}}>{children}</div>;
};

ExpansionContainer.displayName = 'ExpansionContainer';

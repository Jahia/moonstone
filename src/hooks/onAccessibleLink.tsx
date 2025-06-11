import React from 'react';

type onClickProp = (e: React.MouseEvent) => void;

type onAccessibleLinkProps = {
    onClick?: onClickProp;
    disabled?: boolean;
    tabIndex?: number;
    role?: string
};

export const onAccessibleLink = (
    onClick?: onClickProp,
    isDisabled = false,
    tabIndex = 0
): onAccessibleLinkProps => {
    const handleClick = (e: React.MouseEvent) => {
        if ((e.ctrlKey || e.altKey || e.metaKey) && !isDisabled) {
            onClick?.(e);
        }
    };

    return {
        onClick: handleClick,
        disabled: isDisabled,
        tabIndex: tabIndex,
        role: 'link'
    };
};

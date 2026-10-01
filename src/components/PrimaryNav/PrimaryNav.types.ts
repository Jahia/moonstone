import React from 'react';

import type { PrimaryNavItemsGroupProps } from './PrimaryNavItemsGroup/PrimaryNavItemsGroup.types';

export type PrimaryNavContextProps = {
    isExpanded: boolean;
    collapse: () => void;
};

export type PrimaryNavButtonProps = {
    isExpanded: boolean;
    toggleExpand: () => void;
    modeIcon?: React.ReactElement;
};

export type PrimaryNavHeaderProps = {
    headerCaption: string;
    modeIcon?: React.ReactElement;
    headerLogo?: React.ReactNode;
};

export type PrimaryNavProps = React.ComponentPropsWithoutRef<'nav'> & {
    /**
     * Image of logo module
     */
    headerLogo?: React.ReactNode;
    /**
    * Icon shown next to the header caption (and, collapsed, above the toggle button) to indicate the application's mode or environment.
     */
    modeIcon?: React.ReactElement;
    /**
    * Caption shown next to `modeIcon` when expanded, typically naming the application's environment (for example "Production").
     */
    headerCaption?: string;
    /**
     * Primary nav groups displayed at the top
     */
    top?: React.ReactElement<PrimaryNavItemsGroupProps> | React.ReactElement<PrimaryNavItemsGroupProps>[];
    /**
     * Primary nav groups displayed at the bottom
     */
    bottom?: React.ReactElement<PrimaryNavItemsGroupProps> | React.ReactElement<PrimaryNavItemsGroupProps>[];
};

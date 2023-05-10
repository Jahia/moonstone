import * as React from 'react';
import type {PrimaryNavItemsGroupProps} from './PrimaryNavItemsGroup/PrimaryNavItemsGroup.types';

export type PrimaryNavContextProps = {
    isExpanded: boolean;
    collapse: () => void;
};

export type NavButtonProps = {
    isExpanded: boolean;
    toggleExpand: () => void;
    modeIcon?: React.ReactElement;
};

export type NavHeaderProps = {
    headerCaption: string;
    modeIcon?: React.ReactElement;
    headerLogo?: React.ReactNode;
};

export type PrimaryNavProps = React.ComponentPropsWithoutRef<'div'> & {
    /**
     * Image of logo application
     */
    headerLogo?: React.ReactNode;
    /**
     * Image for application mode
     */
    modeIcon?: React.ReactElement;
    /**
     * Application's environment
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

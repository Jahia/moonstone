import React from 'react';

import type { PrimaryNavItemsGroupProps } from './PrimaryNavItemsGroup/PrimaryNavItemsGroup.types';

export type PrimaryNavContextProps = {
    isExpanded: boolean;
    collapse: () => void;
};

export type PrimaryNavButtonProps = {
    isExpanded: boolean;
    controlsId: string;
    label: string;
    toggleExpand: () => void;
    modeIcon?: React.ReactElement;
    buttonRef: React.Ref<HTMLButtonElement>;
};

export type PrimaryNavHeaderProps = {
    headerCaption: string;
    modeIcon?: React.ReactElement;
    headerLogo?: React.ReactNode;
};

export type PrimaryNavProps = React.ComponentPropsWithoutRef<'nav'> & {
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
    /**
     * Primary nav labels
     */
    i18n?: {
        /**
         * aria-label of the navigation
         * @default 'Primary'
         */
        navigationLabel?: string;
        /**
         * aria-label of the button that expands and collapses the navigation
         * @default 'Toggle primary navigation'
         */
        toggleButtonLabel?: string;
    };
};

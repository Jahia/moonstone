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
     * Logo shown in the header of the navigation.
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
     * The PrimaryNavItemsGroup components shown at the top.
     */
    top?: React.ReactElement<PrimaryNavItemsGroupProps> | React.ReactElement<PrimaryNavItemsGroupProps>[];
    /**
     * The PrimaryNavItemsGroup components shown at the bottom.
     */
    bottom?: React.ReactElement<PrimaryNavItemsGroupProps> | React.ReactElement<PrimaryNavItemsGroupProps>[];
    /**
     * Texts of the component, shown on screen or read by screen readers. Translate them with the rest of the UI.
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

import * as React from 'react';

export interface PrimaryNavItemsGroupProps {
    /**
     * Group is visible when the navigation is collapsed
     */
    isDisplayedWhenCollapsed?: boolean;
    /**
     * Items displayed inside the group
     */
    children: React.ReactNode;
}

export const PrimaryNavItemsGroup: React.SFC<PrimaryNavItemsGroupProps>;


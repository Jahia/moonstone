import * as React from 'react';

export type PrimaryNavItemsGroupProps = {
    /**
     * Group is visible when the navigation is collapsed
     */
    isDisplayedWhenCollapsed?: boolean;
    /**
     * Items displayed inside the group
     */
    children: React.ReactNode;
};

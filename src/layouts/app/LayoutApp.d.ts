import * as React from 'react';

export interface LayoutAppProps {
    /**
     * Slot for the application's navigation
     */
    navigation?: React.ReactNode;
    /**
     * Slot for the application's content
     */
    content?: React.ReactNode;
}

export const LayoutApp: React.SFC<LayoutAppProps>;


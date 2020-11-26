import * as React from 'react';

export interface LayoutModuleProps {
    /**
     * Slot for the module's navigation
     */
    navigation?: React.ReactNode;
    /**
     * Slot for the module's content
     */
    content?: React.ReactNode;
    /**
     * The HTML markup used for the content node
     */
    component?: string;
}

export const LayoutModule: React.SFC<LayoutModuleProps>;


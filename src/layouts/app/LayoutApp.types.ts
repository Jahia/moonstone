import * as React from 'react';

export type LayoutAppProps = {
    /**
     * Slot for the application's navigation
     */
    navigation?: React.ReactNode;
    /**
     * Slot for the application's content
     */
    content?: React.ReactNode;
}

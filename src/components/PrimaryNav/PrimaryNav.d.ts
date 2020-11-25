import * as React from 'react';

export type PrimaryNavTop = React.ReactElement<any> | React.ReactElement<any>[];

export type PrimaryNavBottom = React.ReactElement<any> | React.ReactElement<any>[];

export interface PrimaryNavProps {
    /**
     * Image of logo application
     */
    headerLogo?: React.ReactNode;
    /**
     * Image for application mode
     */
    modeIcon?: React.ReactElement<any>;
    /**
     * Application's environment
     */
    headerCaption?: string;
    /**
     * Primary nav groups displayed at the top
     */
    top?: PrimaryNavTop;
    /**
     * Primary nav groups displayed at the bottom
     */
    bottom?: PrimaryNavBottom;
}

export const PrimaryNav: React.SFC<PrimaryNavProps>;


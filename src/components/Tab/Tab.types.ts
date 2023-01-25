import * as React from 'react';
import type {TabItemProps} from './TabItem/TabItem.types';

export type TabProps = React.ComponentPropsWithRef<'div'> & {
    /**
     * Content of the Tab component
     */
    children: React.ReactElement<TabItemProps> | React.ReactElement<TabItemProps>[]

    /**
     * Additional classnames
     */
    className?: string;
}


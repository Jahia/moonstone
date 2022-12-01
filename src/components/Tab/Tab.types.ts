import * as React from 'react';
import type {TabItemProps} from './TabItem/TabItem.types';

export type TabProps = React.ComponentPropsWithRef<'div'> & {
    /**
     * Content of Tab component
     */
    // children: React.ReactNode;
    children: React.ReactElement<TabItemProps>[] | React.ReactElement<TabItemProps>
    /**
     * Additional classname
     */
    className?: string;
}


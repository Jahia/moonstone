import { Composite } from '@floating-ui/react';
import clsx from 'clsx';
import React from 'react';

import { layout } from '~/globals/css-utils.js';
import { mergeHandlers, useRovingTabIndex } from '~/hooks';

import type { TabProps } from './Tab.types';
import type { TabItemProps } from './TabItem/TabItem.types';

import styles from './Tab.module.scss';

export const Tab = React.forwardRef<HTMLDivElement, TabProps>(({ children, className = '', ...props }, ref) => {
    const rovingTabIndex = useRovingTabIndex();

    if (!children || React.Children.count(children) < 1) {
        return null;
    }

    // Focus enters the tab list on the selected tab, else on the first enabled one
    const tabs = React.Children.toArray(children).filter(React.isValidElement) as React.ReactElement<TabItemProps>[];
    const selectedIndex = tabs.findIndex(tab => tab.props.isSelected && !tab.props.isDisabled);
    const initialIndex = selectedIndex === -1 ? Math.max(tabs.findIndex(tab => !tab.props.isDisabled), 0) : selectedIndex;

    return (
        <Composite
            {...rovingTabIndex.getCompositeProps(initialIndex)}
            orientation="horizontal"
            ref={ref}
            render={compositeProps => (
                <div
                    {...compositeProps}
                    {...mergeHandlers(props, {
                        onKeyDown: rovingTabIndex.onKeyDown(compositeProps.onKeyDown),
                        onBlur: rovingTabIndex.onBlur,
                    })}
                    className={clsx(
                        ['moonstone-tab', styles['moonstone-tab']],
                        ['flexRow_center', layout.flexRow_center],
                        ['alignCenter', layout.alignCenter],
                        className,
                    )}
                    role="tablist"
                />
            )}
        >
            {children}
        </Composite>
    );
});

Tab.displayName = 'Tab';

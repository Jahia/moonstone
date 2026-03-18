import React from 'react';
import clsx from 'clsx';
import styles from './Tab.module.scss';
import type {TabProps} from './Tab.types';

export const Tab: React.FC<TabProps> = ({children, className = '', ...props}) => {
    if (!children || React.Children.count(children) < 1) {
        return null;
    }

    return (
        <div
            {...props}
            className={clsx(
                'moonstone-tab',
                styles.tab,
                'flexRow_center',
                'alignCenter',
                className
            )}
            role="tablist"
        >
            {children}
        </div>
    );
};

Tab.displayName = 'Tab';

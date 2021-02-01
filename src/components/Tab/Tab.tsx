import React from 'react';
import classnames from 'clsx';
import './Tab.scss';
import {TabProps} from './Tab.types';

export const Tab: React.FC<TabProps> = ({children, className = '', ...props}: TabProps) => {
    if (!children || React.Children.count(children) < 1) {
        return null;
    }

    return (
        <div
            {...props}
            className={classnames(
                'moonstone-tab',
                'flexRow_center',
                'alignCenter',
                className
            )}
        >
            {children}
        </div>
    );
};

Tab.displayName = 'Tab';

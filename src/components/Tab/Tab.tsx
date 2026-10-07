import clsx from 'clsx';
import React from 'react';

import { layout } from '~/globals/css-utils.js';

import type { TabProps } from './Tab.types';

import styles from './Tab.module.scss';

export const Tab = React.forwardRef<HTMLDivElement, TabProps>(({ children, className = '', ...props }, ref) => {
    if (!children || React.Children.count(children) < 1) {
        return null;
    }

    return (
        <div
            {...props}
            className={clsx(
                ['moonstone-tab', styles['moonstone-tab']],
                ['flexRow_center', layout.flexRow_center],
                ['alignCenter', layout.alignCenter],
                className,
            )}
            ref={ref}
            role="tablist"
        >
            {children}
        </div>
    );
});

Tab.displayName = 'Tab';

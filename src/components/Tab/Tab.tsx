import { useMergeRefs } from '@floating-ui/react';
import clsx from 'clsx';
import React, { useRef } from 'react';

import { layout } from '~/globals/css-utils.js';
import { mergeHandlers, useRovingFocus } from '~/hooks';

import type { TabProps } from './Tab.types';

import styles from './Tab.module.scss';

export const Tab = React.forwardRef<HTMLDivElement, TabProps>(({ children, className = '', ...props }, ref) => {
    const tabRef = useRef<HTMLDivElement>(null);
    const mergedRef = useMergeRefs([tabRef, ref]);
    const rovingFocus = useRovingFocus(tabRef, {
        itemSelector: '[role="tab"]',
        orientation: 'horizontal',
    });

    if (!children || React.Children.count(children) < 1) {
        return null;
    }

    return (
        <div
            {...mergeHandlers(props, rovingFocus)}
            className={clsx(
                ['moonstone-tab', styles['moonstone-tab']],
                ['flexRow_center', layout.flexRow_center],
                ['alignCenter', layout.alignCenter],
                className,
            )}
            ref={mergedRef}
            role="tablist"
        >
            {children}
        </div>
    );
});

Tab.displayName = 'Tab';

import clsx from 'clsx';
import React, { useCallback, useMemo, useRef, useState } from 'react';

import { TableRowContext } from './TableRow.context';
import { layout } from '~/globals/css-utils.js';
import { mergeHandlers } from '~/hooks';

import type { TableRowProps } from './TableRow.types';

import styles from './TableRow.module.scss';

const TableRowForwardRef: React.ForwardRefRenderFunction<HTMLElement, TableRowProps> = (
    {
        className,
        component = 'tr',
        type = 'body',
        isHighlighted = false,
        children,
        ...props
    }, ref) => {
    const hasStatus = useRef(false);
    const [isStatusDismissed, setIsStatusDismissed] = useState(false);
    const registerStatus = useCallback(() => {
        hasStatus.current = true;
        return () => {
            hasStatus.current = false;
        };
    }, []);
    const rowContext = useMemo(() => ({
        isStatusDismissed,
        registerStatus,
    }), [isStatusDismissed, registerStatus]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
        const hasModifier = e.shiftKey || e.ctrlKey || e.metaKey || e.altKey;
        if (e.target !== e.currentTarget || e.defaultPrevented || hasModifier) {
            return;
        }

        // Escape hides the status panel shown on keyboard focus, and stops there: a Modal around the table closes on the next Escape
        if (e.key === 'Escape' && hasStatus.current && !isStatusDismissed && e.currentTarget.matches(':focus-visible')) {
            e.stopPropagation();
            setIsStatusDismissed(true);
        }
    };

    const handleBlur = (e: React.FocusEvent<HTMLElement>) => {
        if (e.target === e.currentTarget) {
            setIsStatusDismissed(false);
        }
    };

    if (!children) {
        return null;
    }

    return React.createElement(
        component,
        {
            'className': clsx(
                layout.flexRow,
                styles.tableRow,
                layout.alignCenter,
                isHighlighted && type === 'body' && styles.highlighted,
                type === 'head' && styles.head,
                className,
            ),
            'aria-selected': isHighlighted && type === 'body' ? true : undefined,
            'tabIndex': 0,
            ...mergeHandlers(props, {
                onKeyDown: handleKeyDown,
                onBlur: handleBlur,
            }),
            ref,
        },
        <TableRowContext.Provider value={rowContext}>{children}</TableRowContext.Provider>,
    );
};

export const TableRow = React.forwardRef(TableRowForwardRef);

TableRow.displayName = 'TableRow';

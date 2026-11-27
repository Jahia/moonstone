import clsx from 'clsx';
import React, { useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react';

import { CollectionBarContext } from './CollectionBar.context';

import type { CollectionBarContextValue, CollectionBarFilterEntry, CollectionBarFocusRequest } from './CollectionBar.context';
import type { CollectionBarProps } from './CollectionBar.types';

import styles from './CollectionBar.module.scss';

// The type of the icon, not the element: a new element for the same icon comes at every render
const isSameEntry = (a: CollectionBarFilterEntry, b: CollectionBarFilterEntry) =>
    a.label === b.label && a.isAddable === b.isAddable && a.hasValue === b.hasValue
    && a.isDisabled === b.isDisabled && a.iconStart?.type === b.iconStart?.type;

const isFocusLost = () => !document.activeElement || document.activeElement === document.body;

const isFocusable = (element?: HTMLButtonElement | null) => Boolean(element?.isConnected && !element.disabled);

export const CollectionBar: React.FC<CollectionBarProps> = ({
    children,
    end,
    openFilterKey,
    defaultOpenFilterKey = null,
    onOpenFilterChange,
    isDisabled = false,
    searchWidth,
    className,
    style,
    ...props
}) => {
    const [innerOpenFilterKey, setInnerOpenFilterKey] = useState(defaultOpenFilterKey);
    const isControlled = openFilterKey !== undefined;
    const currentOpenFilterKey = isControlled ? openFilterKey : innerOpenFilterKey;
    const [filters, setFilters] = useState<CollectionBarFilterEntry[]>([]);
    const [isAddFilterMenuOpen, setAddFilterMenuOpen] = useState(false);
    const [menuFilterKey, setMenuFilterKey] = useState<string | null>(null);
    const addFilterRef = useRef<HTMLButtonElement | null>(null);
    const chipButtons = useRef(new Map<string, HTMLButtonElement>());
    const focusRequest = useRef<CollectionBarFocusRequest | null>(null);
    const lastOpenFilterKey = useRef(currentOpenFilterKey);

    const setOpenFilterKey = useCallback((filterKey: string | null) => {
        if (!isControlled) {
            setInnerOpenFilterKey(filterKey);
        }

        onOpenFilterChange?.(filterKey);
    }, [isControlled, onOpenFilterChange]);

    const openFromMenu = useCallback((filterKey: string) => {
        setAddFilterMenuOpen(false);
        setMenuFilterKey(filterKey);
        setOpenFilterKey(filterKey);
    }, [setOpenFilterKey]);

    const upsert = useCallback((entry: CollectionBarFilterEntry) => {
        setFilters((previous) => {
            const index = previous.findIndex(filter => filter.filterKey === entry.filterKey);
            if (index === -1) {
                return [...previous, entry];
            }

            return isSameEntry(previous[index], entry) ? previous : previous.map((filter, i) => (i === index ? entry : filter));
        });
    }, []);

    const remove = useCallback((filterKey: string) => {
        setFilters(previous => previous.filter(filter => filter.filterKey !== filterKey));
    }, []);

    // A request that no commit used, such as a clear that changed nothing, expires before a later render can use it
    const requestFocus = useCallback((request: CollectionBarFocusRequest) => {
        focusRequest.current = request;
        requestAnimationFrame(() => {
            if (focusRequest.current === request) {
                focusRequest.current = null;
            }
        });
    }, []);

    const setChipButton = useCallback((filterKey: string, button: HTMLButtonElement | null) => {
        if (button) {
            chipButtons.current.set(filterKey, button);
        } else if (chipButtons.current.get(filterKey)?.isConnected === false) {
            chipButtons.current.delete(filterKey);
        }
    }, []);

    // The focus moves once the change is in the DOM: a chip may remount with its value, and an added chip may leave the bar.
    // A popup that the consumer closes, in the controlled form, gives the focus back to its chip as well
    useLayoutEffect(() => {
        const closedKey = lastOpenFilterKey.current !== null && currentOpenFilterKey === null ? lastOpenFilterKey.current : null;
        lastOpenFilterKey.current = currentOpenFilterKey;
        const request = focusRequest.current ?? (closedKey === null ? null : { filterKey: closedKey });
        // A request waits while the focus is still on the control that leaves: the chips update the bar a render later
        if (!request || !isFocusLost()) {
            return;
        }

        focusRequest.current = null;
        if (request === 'none') {
            return;
        }

        const chip = request === 'addFilter' ? null : chipButtons.current.get(request.filterKey);
        const firstChip = [...chipButtons.current.values()].find(isFocusable);
        const target = [chip, addFilterRef.current, firstChip].find(isFocusable);
        target?.focus();
    });

    const context = useMemo<CollectionBarContextValue>(() => ({
        openFilterKey: currentOpenFilterKey,
        setOpenFilterKey,
        filters,
        upsert,
        remove,
        isDisabled,
        requestFocus,
        setChipButton,
        addFilterRef,
        isAddFilterMenuOpen,
        setAddFilterMenuOpen,
        // The popup leads back to the menu only while it is the filter that the menu opened
        menuFilterKey: menuFilterKey === currentOpenFilterKey ? menuFilterKey : null,
        openFromMenu,
    }), [currentOpenFilterKey, setOpenFilterKey, filters, upsert, remove, isDisabled, requestFocus, setChipButton, isAddFilterMenuOpen, menuFilterKey, openFromMenu]);

    // The width of a SearchInput in the bar, read by the stylesheet
    const searchWidthStyle = { '--moon-collectionBar-searchWidth': searchWidth } as React.CSSProperties;
    const barStyle = searchWidth ? Object.assign({}, style, searchWidthStyle) : style;

    // `toArray` drops `false` and `null`, so `{condition && <Block/>}` alone renders no empty bar
    const hasStart = React.Children.toArray(children).length > 0;
    const hasEnd = React.Children.toArray(end).length > 0;
    if (!hasStart && !hasEnd) {
        return null;
    }

    return (
        <CollectionBarContext.Provider value={context}>
            <div
                className={clsx(styles.collectionBar, className)}
                role="group"
                style={barStyle}
                {...props}
                data-moonstone="CollectionBar"
            >
                <div className={styles.start}>{children}</div>
                {hasEnd && <div className={styles.end}>{end}</div>}
            </div>
        </CollectionBarContext.Provider>
    );
};

CollectionBar.displayName = 'CollectionBar';

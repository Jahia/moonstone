import React, { useState } from 'react';

const ITEM_SELECTOR = '[data-roving-item]';

/** Marks an item of the widget, for the keys of this hook and those of nested controls */
export const rovingItemProps = { 'data-roving-item': '' };

/** The items of the widget, in DOM order */
export const getRovingItems = (widget?: Element | null) => Array.from(widget?.querySelectorAll<HTMLElement>(ITEM_SELECTOR) ?? []);

const isEnabled = (item: HTMLElement) => !item.hasAttribute('disabled') && item.getAttribute('aria-disabled') !== 'true';

type InitialItemProps = {
    isSelected?: boolean;
    isDisabled?: boolean;
};

/**
 * The item that holds the Tab stop while focus is outside the widget: the first selected enabled item, else the first enabled one
 * @param items - the props of the items, in the order of the `CompositeItem`s
 */
export const getInitialIndex = (items: InitialItemProps[]) => {
    const selectedIndex = items.findIndex(item => item.isSelected && !item.isDisabled);
    return selectedIndex === -1 ? Math.max(items.findIndex(item => !item.isDisabled), 0) : selectedIndex;
};

/**
 * Roving tabindex of a composite widget (`Tab`, `Menu`, `TreeView`):
 * the widget is one Tab stop, and the arrow keys, Home and End move between its items.
 *
 * - With the `Composite` of floating-ui (`Tab`, `Menu`): spread `getCompositeProps(initialIndex)` on `Composite`,
 *   and `rovingItemProps` on each `CompositeItem`. On the element that `Composite` renders, chain `onKeyDown(compositeProps.onKeyDown)` and `onBlur`.
 * - Without `Composite` (`TreeView`, whose `itemComponent` may not forward its ref): spread `rovingItemProps`, `tabIndex`
 *   (0 on `activeIndex`, else -1) and `onFocus` (`onNavigate(index)`) on each item, and chain `onKeyDown()` and `onBlur` on the widget.
 *   ArrowUp and ArrowDown then move here, without looping.
 * - A disabled item (`disabled` or `aria-disabled="true"`) is skipped.
 *
 * @see https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_roving_tabindex
 */
export const useRovingTabIndex = () => {
    // The item focused in the widget, by its key or else its index, or null once focus has left the items
    const [focusedKey, setFocusedKey] = useState<string | number | null>(null);

    return {
        /**
         * Props of `Composite`
         * @param initialIndex - the item that holds the Tab stop while focus is outside the widget: the selected item, else the first enabled one
         * @param keys - the key of each item, in the order of the items: an item added or removed before the focused one then does not move it
         */
        getCompositeProps: (initialIndex = 0, keys?: string[]) => {
            const focusedIndex = keys ? keys.indexOf(focusedKey as string) : focusedKey as number | null;
            return {
                activeIndex: focusedIndex === null || focusedIndex === -1 ? initialIndex : focusedIndex,
                onNavigate: (index: number) => setFocusedKey(keys ? keys[index] : index),
            };
        },
        /**
         * Keydown of the widget: Home and End here, the arrow keys in `Composite`, or ArrowUp and ArrowDown here without it
         * @param compositeKeyDown - the `onKeyDown` that `Composite` renders, if any
         */
        onKeyDown: (compositeKeyDown?: React.KeyboardEventHandler<HTMLElement>) => (e: React.KeyboardEvent<HTMLElement>) => {
            const hasModifier = e.shiftKey || e.ctrlKey || e.metaKey || e.altKey;
            // A key already handled, held with a modifier, or pressed in a nested control (the search box of a Menu) is left alone
            if (e.defaultPrevented || hasModifier || !(e.target as HTMLElement).matches(ITEM_SELECTOR)) {
                return;
            }

            if (e.key === 'Home' || e.key === 'End') {
                const items = getRovingItems(e.currentTarget).filter(isEnabled);
                e.preventDefault();
                (e.key === 'Home' ? items[0] : items[items.length - 1])?.focus();
                return;
            }

            if (compositeKeyDown) {
                compositeKeyDown(e);
            } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                // The focused item may be disabled, so the next one is searched from it
                const items = getRovingItems(e.currentTarget);
                const step = e.key === 'ArrowDown' ? 1 : -1;
                let next = items.indexOf(e.target as HTMLElement) + step;
                while (items[next] && !isEnabled(items[next])) {
                    next += step;
                }

                if (items[next]) {
                    e.preventDefault();
                    e.stopPropagation();
                    items[next].focus();
                }
            }
        },
        /** Blur of the widget: once focus leaves its items (for the search box of a Menu, or out of the widget), the Tab stop goes back to the initial item */
        onBlur: (e: React.FocusEvent<HTMLElement>) => {
            const next = e.relatedTarget as HTMLElement | null;
            if (!next?.matches(ITEM_SELECTOR) || !e.currentTarget.contains(next)) {
                setFocusedKey(null);
            }
        },
    };
};

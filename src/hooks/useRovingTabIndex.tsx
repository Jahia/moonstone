import React, { useState } from 'react';

const ITEM_SELECTOR = '[data-roving-item]';

/** Marks a `CompositeItem` as an item of the widget, for the arrow keys, Home, End and the keys of nested controls */
export const rovingItemProps = { 'data-roving-item': '' };

const isEnabled = (item: HTMLElement) => !item.hasAttribute('disabled') && item.getAttribute('aria-disabled') !== 'true';

const ARROW_KEYS = {
    horizontal: {
        previous: 'ArrowLeft',
        next: 'ArrowRight',
    },
    vertical: {
        previous: 'ArrowUp',
        next: 'ArrowDown',
    },
} as const;

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

type useRovingTabIndexOptions = {
    /** Axis of the arrow keys that move between the items */
    orientation: 'horizontal' | 'vertical';
    /** The arrow keys go from the last item to the first one and back, `true` by default */
    loop?: boolean;
};

/**
 * Roving tabindex of a composite widget (`Tab`, `Menu`, `TreeView`), on top of the `Composite` of floating-ui:
 * the widget is one Tab stop, and the arrow keys, Home and End move between its items.
 *
 * - Spread `getCompositeProps(initialIndex)` on `Composite`, and `rovingItemProps` on each `CompositeItem`.
 * - On the element that `Composite` renders, chain `onKeyDown` and `onBlur`.
 * - A disabled item (`disabled` or `aria-disabled="true"`) is skipped.
 * - The keys move from the focused element, in the order of the DOM, so the items can change while focus is inside.
 *
 * @see https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_roving_tabindex
 */
export const useRovingTabIndex = ({ orientation, loop = true }: useRovingTabIndexOptions) => {
    // The item focused in the widget, or null once focus has left it
    const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
    const arrows = ARROW_KEYS[orientation];

    return {
        /**
         * Props of `Composite`
         * @param initialIndex - the item that holds the Tab stop while focus is outside the widget: the selected item, else the first enabled one
         */
        getCompositeProps: (initialIndex = 0) => ({
            activeIndex: focusedIndex ?? initialIndex,
            onNavigate: setFocusedIndex,
            orientation,
            loop,
        }),
        /** Keydown of the widget: the arrow keys, Home and End */
        onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => {
            const target = e.target as HTMLElement;
            // A key already handled, or pressed in a nested control (the search box of a Menu), is left alone
            if (e.defaultPrevented || !target.matches(ITEM_SELECTOR)) {
                return;
            }

            const items = Array.from(e.currentTarget.querySelectorAll<HTMLElement>(ITEM_SELECTOR));
            const index = items.indexOf(target);

            if (e.key === 'Tab') {
                // An item added or removed before the focused one moves its index. The browser moves focus before React
                // renders again, so the Tab stop goes back on the focused item in the DOM first, as the next render does.
                if (index !== focusedIndex) {
                    items.forEach((item) => {
                        item.tabIndex = item === target ? 0 : -1;
                    });
                    setFocusedIndex(index);
                }

                return;
            }

            const hasModifier = e.shiftKey || e.ctrlKey || e.metaKey || e.altKey;
            if (hasModifier) {
                return;
            }

            let next: HTMLElement | undefined;
            if (e.key === 'Home') {
                next = items.find(isEnabled);
            } else if (e.key === 'End') {
                next = items.filter(isEnabled).pop();
            } else if (e.key === arrows.next) {
                next = [...items.slice(index + 1), ...(loop ? items.slice(0, index) : [])].find(isEnabled);
            } else if (e.key === arrows.previous) {
                next = [...items.slice(0, index).reverse(), ...(loop ? items.slice(index + 1).reverse() : [])].find(isEnabled);
            }

            if (next) {
                e.preventDefault();
                // The `CompositeItem` takes the Tab stop on focus
                next.focus();
            }
        },
        /** Blur of the widget: once focus leaves it, the Tab stop goes back to the initial item */
        onBlur: (e: React.FocusEvent<HTMLElement>) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                setFocusedIndex(null);
            }
        },
    };
};

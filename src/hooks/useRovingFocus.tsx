import React, { useLayoutEffect, useRef } from 'react';

type UseRovingFocusOptions = {
    itemSelector: string;
    orientation?: 'vertical' | 'horizontal';
    loop?: boolean;
    /** False keeps every item in the Tab sequence and only adds the arrow keys, Home and End (an accordion, a toolbar of consumer buttons) */
    isRoving?: boolean;
};

const arrowKeys = {
    vertical: {
        previous: 'ArrowUp',
        next: 'ArrowDown',
    },
    horizontal: {
        previous: 'ArrowLeft',
        next: 'ArrowRight',
    },
};

const isEnabled = (el: HTMLElement) => !el.matches(':disabled, [aria-disabled="true"]');

// Roving tabindex: the container keeps a single item in the Tab sequence and moves focus with the arrow keys, Home and End
export const useRovingFocus = (
    containerRef: React.RefObject<HTMLElement>,
    {
        itemSelector,
        orientation = 'vertical',
        loop = true,
        isRoving = true,
    }: UseRovingFocusOptions,
) => {
    const activeRef = useRef<HTMLElement | null>(null);

    const getAllItems = () => Array.from(containerRef.current?.querySelectorAll<HTMLElement>(itemSelector) ?? []);

    const setActive = (active: HTMLElement | null) => {
        activeRef.current = active;
        getAllItems().forEach((el) => {
            el.setAttribute('tabindex', el === active ? '0' : '-1');
        });
    };

    // Items are owned by the consumer, so the Tab stop is re-synced on every render
    useLayoutEffect(() => {
        if (!isRoving) {
            return;
        }

        const items = getAllItems().filter(isEnabled);
        const selected = items.find(el => el.getAttribute('aria-selected') === 'true');
        const hasFocus = containerRef.current?.contains(document.activeElement);
        const isActiveValid = items.includes(activeRef.current) && (hasFocus || !selected);
        setActive(isActiveValid ? activeRef.current : (selected ?? items[0] ?? null));
    });

    const onFocus = (e: React.FocusEvent) => {
        const target = e.target as HTMLElement;
        if (isRoving && getAllItems().filter(isEnabled).includes(target)) {
            setActive(target);
        }
    };

    const onKeyDown = (e: React.KeyboardEvent) => {
        // A nested widget or the consumer already handled the key; a modifier keeps the browser shortcuts (Alt+ArrowLeft)
        if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey) {
            return;
        }

        const items = getAllItems().filter(isEnabled);
        const index = items.indexOf(e.target as HTMLElement);
        if (index === -1) {
            return;
        }

        const last = items.length - 1;
        let next: HTMLElement | undefined;
        switch (e.key) {
            case arrowKeys[orientation].previous:
                next = index > 0 ? items[index - 1] : (loop ? items[last] : undefined);
                break;
            case arrowKeys[orientation].next:
                next = index < last ? items[index + 1] : (loop ? items[0] : undefined);
                break;
            case 'Home':
                next = items[0];
                break;
            case 'End':
                next = items[last];
                break;
            default:
                return;
        }

        e.preventDefault();
        next?.focus();
    };

    return {
        onFocus,
        onKeyDown,
    };
};

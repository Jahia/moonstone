import React from 'react';

type onArrowNavigationProps = {
    onKeyUp?: React.KeyboardEventHandler;
    tabIndex?: number;
};

export const onArrowNavigation = (
    ref: React.RefObject<HTMLElement>,
    tabIndex = 0
): onArrowNavigationProps => {
    const handleKeyUp = (e: React.KeyboardEvent) => {
        const element = ref.current;

        if (!element) {
            return;
        }

        const container = element.parentElement;
        if (!container) {
            return;
        }

        const items = Array.from(container.querySelectorAll<HTMLElement>('[tabindex]')).filter(el => el.tabIndex >= 0);
        const currentIndex = items.indexOf(element);

        if (e.key === 'ArrowDown' && currentIndex !== -1) {
            e.preventDefault();
            items[currentIndex + 1]?.focus();
        }

        if (e.key === 'ArrowUp' && currentIndex !== -1) {
            e.preventDefault();
            items[currentIndex - 1]?.focus();
        }
    };

    return {
        onKeyUp: handleKeyUp,
        tabIndex: tabIndex
    };
};

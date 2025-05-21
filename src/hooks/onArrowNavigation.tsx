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
        if (element) {
            if (e.code === 'ArrowDown') {
                e.preventDefault();
                let next = element.nextSibling as HTMLElement;
                // Loops through dom elements until it finds another item with the hook
                while (next && !(next instanceof HTMLElement && next.tabIndex >= 0)) {
                    next = next.nextSibling as HTMLElement;
                }

                next?.focus();
            }

            if (e.code === 'ArrowUp') {
                e.preventDefault();
                let prev = element.previousSibling as HTMLElement;
                while (prev && !(prev instanceof HTMLElement && prev.tabIndex >= 0)) {
                    prev = prev.previousSibling as HTMLElement;
                }

                prev?.focus();
            }
        }
    };

    return {
        onKeyUp: handleKeyUp,
        tabIndex: tabIndex
    };
};

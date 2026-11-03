import React from 'react';

type onToggleProp = (e: React.KeyboardEvent | React.MouseEvent) => void;

type onTreeItemKeysOptions = {
    /** Opens or closes the node */
    onToggle: onToggleProp;
    /** Activates the node on Enter; without it, Enter toggles the node */
    onClick?: onToggleProp;
    /** The node cannot be activated: Enter toggles it instead */
    isDisabled?: boolean;
    /** The node has children and the user can open and close it */
    isExpandable?: boolean;
    /** The children of the node are shown */
    isOpen?: boolean;
    /** Moves focus to the parent node */
    onFocusParent?: () => void;
    /** Moves focus to the first child node */
    onFocusFirstChild?: () => void;
    /** Opens every sibling of the node */
    onExpandSiblings?: onToggleProp;
};

type onTreeItemKeysProps = {
    /** Enter, ArrowLeft, ArrowRight and `*` */
    onKeyDown: React.KeyboardEventHandler;
    /** Space */
    onKeyUp: React.KeyboardEventHandler;
};

// Nodes that saw the keydown of Space: its keyup acts only there, like a native button
const spacePressed = new WeakSet<EventTarget>();

/**
 * Keys of a tree item. ArrowUp, ArrowDown, Home and End move between the items in `useRovingTabIndex`.
 * Enter acts on keydown and Space on keyup, once per press, like a native button.
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/treeview/#keyboardinteraction
 */
export const onTreeItemKeys = ({
    onToggle,
    onClick,
    isDisabled = false,
    isExpandable = false,
    isOpen = false,
    onFocusParent,
    onFocusFirstChild,
    onExpandSiblings,
}: onTreeItemKeysOptions): onTreeItemKeysProps => {
    const onKeyDown = (e: React.KeyboardEvent) => {
        // Shift may be what types `*`, so it only counts as a modifier for the named keys
        const hasModifier = e.ctrlKey || e.metaKey || e.altKey || (e.shiftKey && e.key !== '*');
        // A link or a button inside the node keeps its own keys
        if (e.target !== e.currentTarget || e.defaultPrevented || hasModifier) {
            return;
        }

        const actions: Record<string, () => void> = {
            'Enter': () => (onClick && !isDisabled ? onClick(e) : onToggle(e)),
            'ArrowRight': () => {
                if (isOpen) {
                    onFocusFirstChild?.();
                } else if (isExpandable) {
                    onToggle(e);
                }
            },
            'ArrowLeft': () => (isOpen && isExpandable ? onToggle(e) : onFocusParent?.()),
            '*': () => onExpandSiblings?.(e),
        };

        if (e.key === ' ') {
            // Space acts on keyup; its keydown only keeps the page from scrolling
            e.preventDefault();
            spacePressed.add(e.currentTarget);
            return;
        }

        const action = actions[e.key];
        if (!action) {
            return;
        }

        e.preventDefault();
        // The arrow keys repeat while held; Enter and `*` act once per press
        if (!(e.repeat && (e.key === 'Enter' || e.key === '*'))) {
            action();
        }
    };

    const onKeyUp = (e: React.KeyboardEvent) => {
        if (e.key === ' ' && spacePressed.delete(e.currentTarget)) {
            onToggle(e);
        }
    };

    return {
        onKeyDown,
        onKeyUp,
    };
};

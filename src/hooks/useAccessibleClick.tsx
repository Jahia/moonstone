type onClickProp = (e: React.KeyboardEvent | React.MouseEvent) => void;

type onAccessibleClickProps = {
    /** Called on a click, on Enter keydown and on Space keyup */
    onClick: onClickProp;
    /** Removes the handlers and takes the element out of the Tab sequence */
    disabled?: boolean;
    /** Role of the element, `button` by default */
    role?: string;
    /** Tab index of the element when enabled, `0` by default */
    tabIndex?: number;
};

// Elements that saw the keydown of Space: its keyup acts only there, like a native button
const spacePressed = new WeakSet<EventTarget>();

const handleKeyDown = (e: React.KeyboardEvent, onClick: onClickProp) => {
    const hasModifier = e.shiftKey || e.ctrlKey || e.metaKey || e.altKey;
    // A nested link or button keeps its own keys
    if (e.target !== e.currentTarget || e.defaultPrevented || hasModifier) {
        return;
    }

    if (e.key === 'Enter') {
        e.preventDefault();
        if (!e.repeat) {
            onClick(e);
        }
    } else if (e.key === ' ') {
        // Space acts on keyup; its keydown only keeps the page from scrolling
        e.preventDefault();
        spacePressed.add(e.currentTarget);
    }
};

const handleKeyUp = (e: React.KeyboardEvent, onClick: onClickProp) => {
    if (e.key === ' ' && spacePressed.delete(e.currentTarget)) {
        onClick(e);
    }
};

/**
 * Makes a non-native element act as a button: Enter on keydown, Space on keyup, once per press.
 * Chain it with the consumer's handlers through `{...mergeHandlers(props, onAccessibleClick(…))}`;
 * the precedence of the other consumer props stays with #1431.
 */
export const onAccessibleClick = ({
    onClick,
    disabled = false,
    role = 'button',
    tabIndex = 0,
}: onAccessibleClickProps) => {
    return {
        onClick: disabled ? undefined : onClick,
        onKeyDown: disabled ? undefined : (e: React.KeyboardEvent) => handleKeyDown(e, onClick),
        onKeyUp: disabled ? undefined : (e: React.KeyboardEvent) => handleKeyUp(e, onClick),
        disabled: disabled,
        role: role,
        tabIndex: disabled ? -1 : tabIndex,
    };
};

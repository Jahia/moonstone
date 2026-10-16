type onClickProp = (e: React.KeyboardEvent | React.MouseEvent) => void;

type onAccessibleClickProps = {
    onClick: onClickProp;
    disabled?: boolean;
    onKeyUp?: React.KeyboardEventHandler;
    role?: string;
    tabIndex?: number;
};

const handleKeyDown = (e: React.KeyboardEvent, onClick: onClickProp) => {
    // A nested link or button keeps its native activation
    if (e.target !== e.currentTarget) {
        return;
    }

    if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        if (!e.repeat) {
            onClick(e);
        }
    }
};

export const onAccessibleClick = ({
    onClick,
    disabled = false,
    role = 'button',
    tabIndex = 0,
}: onAccessibleClickProps) => {
    return {
        onClick: disabled ? undefined : onClick,
        onKeyDown: disabled ? undefined : (e: React.KeyboardEvent) => handleKeyDown(e, onClick),
        disabled: disabled,
        role: role,
        tabIndex: disabled ? -1 : tabIndex,
    };
};

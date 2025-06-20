type onClickProp = (e: React.KeyboardEvent | React.MouseEvent) => void;

type onAccessibleClickProps = {
    onClick: onClickProp,
    disabled?: boolean,
    onKeyUp?: React.KeyboardEventHandler,
    role?: string,
    tabIndex?: number
};

const handleKeyUp = (e: React.KeyboardEvent, onClick: onClickProp) => {
    if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault();
        onClick(e);
    }
};

export const onAccessibleClick = ({
    onClick,
    disabled = false,
    role = 'button',
    tabIndex = 0
}: onAccessibleClickProps) => {
    return {
        onClick: disabled ? undefined : onClick,
        onKeyUp: disabled ? undefined : (e: React.KeyboardEvent) => handleKeyUp(e, onClick),
        disabled: disabled,
        role: role,
        tabIndex: disabled ? -1 : tabIndex};
};

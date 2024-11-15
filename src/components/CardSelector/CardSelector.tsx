import React from 'react';
import clsx from 'clsx';
import './CardSelector.scss';
import {CardSelectorProps} from './CardSelector.types';
import {Typography} from '~/components';
import {toIconComponent} from '~/icons/utils';
import {HandleDrag} from '~/icons/components';

const CardSelectorForwardRef: React.ForwardRefRenderFunction<HTMLDivElement, CardSelectorProps> = ({
    displayName,
    systemName,
    chips,
    information,
    image,
    icon,
    className,
    isDraggable = false,
    isDisabled = false,
    cardAction,
    onClick = () => undefined,
    ...other
}, ref) => {
    const classNameProps = clsx(
        'moonstone-card-selector',
        isDisabled && 'moonstone-card-selector_disabled',
        'flexRow',
        'alignCenter',
        className
    );

    const handleOnClick: React.MouseEventHandler = e => {
        onClick(e);
        (e.currentTarget as HTMLElement).blur();
    };

    return (
        <div
        ref={ref}
        className={classNameProps}
        aria-disabled={isDisabled}
        onClick={e => handleOnClick(e)}
        {...other}
        >
            {isDraggable && <HandleDrag color="gray" size="big"/>}
            <figure className={clsx('moonstone-card-selector-thumbnail', 'flexRow_center', 'alignCenter')}>
                {image ? toIconComponent(image) : icon ? icon : toIconComponent('File')}
            </figure>
            <div className={clsx('moonstone-card-selector-body', 'flexCol_nowrap')}>
                <div className={clsx('flexRow_nowrap')}>
                    {displayName && (
                    <Typography
                    isNowrap
                    className={clsx('moonstone-card-selector-displayName', 'flexRow_nowrap')}
                    variant="subheading"
                    weight="default"
                    component="span"
                    >
                        {displayName}
                    </Typography>
                )}
                    {systemName && (
                    <Typography
                    className={clsx('moonstone-card-selector-systemName')}
                    variant="body"
                    weight="default"
                    component="span"
                    >
                        ({systemName})
                    </Typography>
                )}
                </div>
                <div className={clsx('flexRow_nowrap')}>
                    {chips && (
                    chips.map(chip => (chip))
                )}
                    {information && (
                    <Typography
                        variant="caption"
                        weight="default"
                        component="span"
                        className={clsx('moonstone-card-selector-information')}
                    >
                        {information}
                    </Typography>
                )}
                </div>
            </div>
            {cardAction && (
                <div className="moonstone-card-selector-actions flexRow_nowrap alignCenter">
                    {cardAction}
                </div>
        )}
        </div>
    );
};

export const CardSelector = React.forwardRef(CardSelectorForwardRef);

CardSelector.displayName = 'CardSelector';

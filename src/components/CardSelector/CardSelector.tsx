import React from 'react';
import clsx from 'clsx';
import './CardSelector.scss';
import {CardSelectorProps} from './CardSelector.types';
import {Typography} from '~/components';
import {HandleDrag} from '~/icons/components';

const CardSelectorForwardRef: React.ForwardRefRenderFunction<HTMLButtonElement, CardSelectorProps> = ({
    displayName,
    systemName,
    chips,
    information,
    thumbnailURL,
    thumbnailType = 'preview',
    thumbnailAlt,
    id,
    className,
    isDraggable = false,
    isDisabled = false,
    isReadOnly = false,
    cardAction,
    onClick = () => undefined,
    ...other
}, ref) => {
    const classNameProps = clsx(
        'moonstone-card-selector',
        (isDisabled || isReadOnly) && 'moonstone-card-selector_disabled',
        'flexRow',
        'alignCenter',
        className
    );

    const handleOnClick: React.MouseEventHandler = e => {
        if (isReadOnly || isDisabled) {
            return;
        }

        onClick(e);
        (e.currentTarget as HTMLElement).blur();
    };

    return (
        <button
        ref={ref}
        type="button"
        id={id}
        className={classNameProps}
        aria-labelledby={displayName}
        aria-disabled={isDisabled}
        aria-readonly={isReadOnly}
        onClick={e => handleOnClick(e)}
        {...other}
        >
            {isDraggable && <HandleDrag color="gray" size="big"/>}
            <figure className={clsx('moonstone-card-selector-thumbnail', 'flexRow_center', 'alignCenter')}>
                <img className={clsx(`moonstone-card-selector-thumbnail-${thumbnailType}`)} src={thumbnailURL} alt={thumbnailAlt} aria-labelledby={thumbnailAlt}/>
            </figure>
            <div className={clsx('moonstone-card-selector-body', 'flexCol_nowrap')}>
                <div className={clsx('flexRow_nowrap')}>
                    {displayName && (
                    <Typography
                    // isNowrap
                    id={`${id}-displayName`}
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
                    id={`${id}-systemName`}
                    className={clsx('moonstone-card-selector-systemName')}
                    aria-description={systemName}
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
        </button>
    );
};

export const CardSelector = React.forwardRef(CardSelectorForwardRef);

CardSelector.displayName = 'CardSelector';

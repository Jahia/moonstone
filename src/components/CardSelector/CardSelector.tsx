import React from 'react';
import clsx from 'clsx';

import './CardSelector.scss';
import type {CardSelectorProps} from './CardSelector.types';
import {Typography} from '~/components';
import {FileBroken, HandleDrag, Image} from '~/icons/components';

export const CardSelector = React.forwardRef<HTMLDivElement, CardSelectorProps>(({
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
    hasError = false,
    errorMessage,
    onClick,
    ...props
}, ref) => {
    const classNameProps = clsx(
        'moonstone-cardSelector',
        (isDisabled || isReadOnly) && 'moonstone-cardSelector_disabled',
        'flexFluid',
        'flexRow_nowrap',
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

    if (hasError) {
        return (
            <div
                ref={ref}
                id={id}
                className={clsx(
                    'moonstone-cardSelector_error',
                    (isDisabled || isReadOnly) && 'moonstone-cardSelector_disabled',
                    'flexRow_center',
                    'alignCenter')}
                aria-disabled={isDisabled || isReadOnly}
                onClick={e => handleOnClick(e)}
                {...props}
            >
                <FileBroken color="yellow"/>
                <Typography
                    isNowrap
                    variant="caption"
                    component="span"
                >
                    {errorMessage}
                </Typography>
            </div>
        );
    }

    return (
        <div
            ref={ref}
            id={id}
            className={classNameProps}
            aria-labelledby={`${id}-${displayName}`}
            aria-disabled={isDisabled || isReadOnly}
            draggable={isDraggable}
            onClick={e => handleOnClick(e)}
            {...props}
        >
            {isDraggable && <HandleDrag color="gray" size="big" className="moonstone-cardSelector_dragIcon"/>}

            <figure className={clsx('moonstone-cardSelector_thumbnail', 'flexRow_center', 'alignCenter')}>
                {thumbnailURL ? (
                    <img className={clsx(`moonstone-cardSelector_thumbnail_${thumbnailType}`)} src={thumbnailURL} alt={thumbnailAlt} aria-labelledby={thumbnailAlt}/>
                ) : <Image size="big" color="gray"/>}
            </figure>

            <div className={clsx('moonstone-cardSelector_body', 'flexCol_nowrap')}>
                <div className={clsx('flexRow_nowrap flexFluid')}>
                    {displayName && (
                        <Typography
                            isNowrap
                            id={`${id}-displayName`}
                            className={clsx('moonstone-cardSelector_displayName')}
                            variant="subheading"
                            component="span"
                        >
                            {displayName}
                        </Typography>
                    )}

                    {systemName && (
                        <Typography
                            isNowrap
                            id={`${id}-systemName`}
                            className={clsx('moonstone-cardSelector_systemName')}
                            aria-description={systemName}
                            variant="body"
                            component="span"
                        >
                            ({systemName})
                        </Typography>
                    )}
                </div>
                {(chips || information) && (
                    <div className={clsx('flexRow_nowrap')}>
                        {chips && (
                            chips.map(chip => (chip))
                        )}

                        {information && (
                            <Typography
                                isNowrap
                                variant="caption"
                                component="span"
                                className={clsx('moonstone-cardSelector_information')}
                            >
                                {information}
                            </Typography>
                        )}
                    </div>
                )}
            </div>
            {cardAction && (
                <div className="moonstone-cardSelector_actions flexRow_nowrap alignCenter">
                    {cardAction}
                </div>
            )}
        </div>
    );
});

CardSelector.displayName = 'CardSelector';

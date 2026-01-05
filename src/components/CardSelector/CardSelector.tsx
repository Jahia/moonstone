import React from 'react';
import clsx from 'clsx';

import './CardSelector.scss';
import type {CardSelectorProps} from './CardSelector.types';
import {Typography} from '~/components';
import {Thumbnail} from '~/components/Thumbnail';
import {FileBroken} from '~/icons/components';

export const CardSelector = React.forwardRef<HTMLButtonElement, CardSelectorProps>(({
    displayName,
    systemName,
    chips,
    information,
    thumbnail,
    thumbnailType = 'preview',
    thumbnailAlt,
    id,
    className,
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
            <button
                ref={ref}
                id={id}
                type="button"
                className={clsx(
                    'moonstone-cardSelector_error',
                    (isDisabled || isReadOnly) && 'moonstone-cardSelector_disabled',
                    'flexRow_center',
                    'alignCenter'
                )}
                disabled={isDisabled || isReadOnly}
                onClick={handleOnClick}
                {...props}
            >
                <FileBroken/>
                <Typography isNowrap variant="caption" component="span">
                    {errorMessage}
                </Typography>
            </button>
        );
    }

    return (
        <button
            ref={ref}
            id={id}
            type="button"
            className={classNameProps}
            aria-label={displayName}
            disabled={isDisabled || isReadOnly}
            onClick={handleOnClick}
            {...props}
        >
            <Thumbnail
                variant={thumbnailType}
                className="moonstone-cardSelector_thumbnail"
                data-testid="cardSelector-thumbnail"
                {...(typeof thumbnail === 'string' ?
                    {src: thumbnail, alt: thumbnailAlt ?? ''} :
                    {src: thumbnail}
                )}
            />

            <div className={clsx('moonstone-cardSelector_body', 'flexFluid', 'flexCol_nowrap')}>
                <div className={clsx('flexRow_nowrap flexFluid')}>
                    {displayName && (
                        <Typography
                            isNowrap
                            data-testid="cardSelector-displayName"
                            id={id && `${id}-displayName`}
                            className={clsx('moonstone-cardSelector_displayName')}
                            variant="body"
                            component="span"
                        >
                            {displayName}
                        </Typography>
                    )}

                    {systemName && systemName !== displayName && (
                        <Typography
                            isNowrap
                            id={id && `${id}-systemName`}
                            className="moonstone-cardSelector_systemName"
                            data-testid="cardSelector-systemName"
                            variant="body"
                            component="span"
                        >
                            ({systemName})
                        </Typography>
                    )}
                </div>

                {(chips || information) && (
                    <div className={clsx('flexRow_nowrap')}>
                        {chips}
                        {information && (
                            <Typography
                                isNowrap
                                variant="caption"
                                component="span"
                                className={clsx('moonstone-cardSelector_information')}
                                data-testid="cardSelector-information"
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
        </button>
    );
});

CardSelector.displayName = 'CardSelector';

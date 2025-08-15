import React from 'react';
import clsx from 'clsx';

import './CardSelector.scss';
import type {CardSelectorProps, ThumbnailProps} from './CardSelector.types';
import {Typography} from '~/components';
import {FileBroken, Image} from '~/icons/components';

const ThumbnailCmp: React.FC<ThumbnailProps> = ({thumbnail, thumbnailType, thumbnailAlt}) => {
    if (!thumbnail) {
        return <Image size="big" color="gray" data-testid="cardSelector-thumbnail"/>;
    }

    if (typeof thumbnail === 'string') {
        return (
            <img
                className={clsx(`moonstone-cardSelector_thumbnail_${thumbnailType}`)}
                src={thumbnail}
                alt={thumbnailAlt}
                data-testid="cardSelector-thumbnail"
            />
        );
    }

    return (
        <thumbnail.type
            {...thumbnail.props}
            className={clsx(`moonstone-cardSelector_thumbnail_${thumbnailType}`, thumbnail.props.className)}
            data-testid="cardSelector-thumbnail"
        />
    );
};

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
                    'alignCenter')}
                aria-disabled={isDisabled || isReadOnly}
                onClick={e => handleOnClick(e)}
                {...props}
            >
                <FileBroken color={isDisabled || isReadOnly ? 'gray' : 'yellow'}/>
                <Typography
                    isNowrap
                    variant="caption"
                    component="span"
                >
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
            onClick={e => handleOnClick(e)}
            {...props}
        >
            <figure className={clsx('moonstone-cardSelector_thumbnail', 'flexRow_center', 'alignCenter')}>
                <ThumbnailCmp thumbnail={thumbnail} thumbnailType={thumbnailType} thumbnailAlt={thumbnailAlt}/>
            </figure>

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

                    {systemName && (systemName !== displayName) && (
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

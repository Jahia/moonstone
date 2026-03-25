import React from 'react';
import clsx from 'clsx';

import {layout, reset} from '~/globals/css-utils.js';
import styles from './CardSelector.module.scss';
import type {CardSelectorProps} from './CardSelector.types';
import {Thumbnail, Typography} from '~/components';
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
        reset,
        ['moonstone-cardSelector', styles['moonstone-cardSelector']],
        (isDisabled || isReadOnly) && ['moonstone-cardSelector_disabled', styles['moonstone-cardSelector_disabled']],
        ['flexFluid', layout.flexFluid],
        ['flexRow_nowrap', layout.flexRow_nowrap],
        ['alignCenter', layout.alignCenter],
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
                    reset,
                    ['moonstone-cardSelector_error', styles['moonstone-cardSelector_error']],
                    (isDisabled || isReadOnly) && ['moonstone-cardSelector_disabled', styles['moonstone-cardSelector_disabled']],
                    ['flexRow_center', layout.flexRow_center],
                    ['alignCenter', layout.alignCenter])}
                disabled={isDisabled || isReadOnly}
                onClick={e => handleOnClick(e)}
                {...props}
            >
                <FileBroken/>
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
            <Thumbnail
                variant={thumbnailType}
                src={thumbnail}
                alt={thumbnailAlt}
            />

            <div className={clsx(
                    ['moonstone-cardSelector_body', styles['moonstone-cardSelector_body']],
                    ['flexFluid', layout.flexFluid],
                    ['flexCol_nowrap', layout.flexCol_nowrap]
                )}
            >
                <div className={clsx(['flexRow_nowrap', layout.flexRow_nowrap], ['flexFluid', layout.flexFluid])}>
                    {displayName && (
                        <Typography
                            isNowrap
                            data-testid="cardSelector-displayName"
                            id={id && `${id}-displayName`}
                            className={clsx('moonstone-cardSelector_displayName', styles['moonstone-cardSelector_displayName'])}
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
                            className={clsx('moonstone-cardSelector_systemName', styles['moonstone-cardSelector_systemName'])}
                            data-testid="cardSelector-systemName"
                            variant="body"
                            component="span"
                        >
                            ({systemName})
                        </Typography>
                    )}
                </div>
                {(chips || information) && (
                    <div className={clsx('flexRow_nowrap', layout.flexRow_nowrap)}>
                        {chips}
                        {information && (
                            <Typography
                                isNowrap
                                variant="caption"
                                component="span"
                                className={clsx('moonstone-cardSelector_information', styles['moonstone-cardSelector_information'])}
                                data-testid="cardSelector-information"
                            >
                                {information}
                            </Typography>
                        )}
                    </div>
                )}
            </div>
            {cardAction && (
                <div className={clsx(
                        ['moonstone-cardSelector_actions', styles['moonstone-cardSelector_actions']],
                        ['flexRow_nowrap', layout.flexRow_nowrap],
                        ['alignCenter', layout.alignCenter]
                    )}
                >
                    {cardAction}
                </div>
            )}
        </button>
    );
});

CardSelector.displayName = 'CardSelector';

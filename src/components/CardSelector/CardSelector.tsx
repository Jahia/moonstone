import clsx from 'clsx';
import React from 'react';

import { Thumbnail, Typography } from '~/components';
import { layout } from '~/globals/css-utils.js';
import { FileBroken } from '~/icons';

import type { CardSelectorProps } from './CardSelector.types';

import styles from './CardSelector.module.scss';

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
        ['moonstone-cardSelector', styles['moonstone-cardSelector']],
        (isDisabled || isReadOnly) && ['moonstone-cardSelector_disabled', styles['moonstone-cardSelector_disabled']],
        ['flexFluid', layout.flexFluid],
        ['flexRow_nowrap', layout.flexRow_nowrap],
        ['alignCenter', layout.alignCenter],
        className,
    );

    const handleOnClick: React.MouseEventHandler = (e) => {
        if (isReadOnly || isDisabled) {
            return;
        }

        onClick(e);
        (e.currentTarget as HTMLElement).blur();
    };

    if (hasError) {
        return (
            <button
                disabled={isDisabled || isReadOnly}
                className={clsx(
                    ['moonstone-cardSelector_error', styles['moonstone-cardSelector_error']],
                    (isDisabled || isReadOnly) && ['moonstone-cardSelector_disabled', styles['moonstone-cardSelector_disabled']],
                    ['flexRow_center', layout.flexRow_center],
                    ['alignCenter', layout.alignCenter])}
                id={id}
                ref={ref}
                type="button"
                onClick={e => handleOnClick(e)}
                {...props}
            >
                <FileBroken/>
                <Typography
                    isNowrap
                    component="span"
                    variant="caption"
                >
                    {errorMessage}
                </Typography>
            </button>
        );
    }

    return (
        <button
            disabled={isDisabled || isReadOnly}
            aria-label={displayName}
            className={classNameProps}
            id={id}
            ref={ref}
            type="button"
            onClick={e => handleOnClick(e)}
            {...props}
        >
            <Thumbnail
                alt={thumbnailAlt}
                src={thumbnail}
                variant={thumbnailType}
            />

            <div className={clsx(
                ['moonstone-cardSelector_body', styles['moonstone-cardSelector_body']],
                ['flexFluid', layout.flexFluid],
                ['flexCol_nowrap', layout.flexCol_nowrap],
            )}
            >
                <div className={clsx(['flexRow_nowrap', layout.flexRow_nowrap], ['flexFluid', layout.flexFluid])}>
                    {displayName && (
                        <Typography
                            isNowrap
                            className={clsx('moonstone-cardSelector_displayName', styles['moonstone-cardSelector_displayName'])}
                            component="span"
                            data-testid="cardSelector-displayName"
                            id={id && `${id}-displayName`}
                            variant="body"
                        >
                            {displayName}
                        </Typography>
                    )}

                    {systemName && (systemName !== displayName) && (
                        <Typography
                            isNowrap
                            className={clsx('moonstone-cardSelector_systemName', styles['moonstone-cardSelector_systemName'])}
                            component="span"
                            data-testid="cardSelector-systemName"
                            id={id && `${id}-systemName`}
                            variant="body"
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
                                className={clsx('moonstone-cardSelector_information', styles['moonstone-cardSelector_information'])}
                                component="span"
                                data-testid="cardSelector-information"
                                variant="caption"
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
                    ['alignCenter', layout.alignCenter],
                )}
                >
                    {cardAction}
                </div>
            )}
        </button>
    );
});

CardSelector.displayName = 'CardSelector';

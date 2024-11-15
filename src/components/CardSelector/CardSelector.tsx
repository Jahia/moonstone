import React from 'react';
import clsx from 'clsx';
import './CardSelector.scss';
import {CardSelectorProps} from './CardSelector.types';
import {Typography} from '~/components';
import {toIconComponent} from '~/icons/utils';
import {HandleDrag, ArrowUp, ArrowDown, Close} from '~/icons/components';

const CardSelectorForwardRef: React.ForwardRefRenderFunction<HTMLDivElement, CardSelectorProps> = ({
    displayName,
    systemName,
    chips,
    information,
    thumbnail,
    className,
    isDraggable = false,
    isDisabled = false,
    cardActions,
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
                {toIconComponent(thumbnail ? thumbnail : 'File')}
            </figure>
            <div className={clsx('moonstone-card-selector-body', 'flexCol')}>
                <div className={clsx('flexRow')}>
                    {displayName && (
                    <Typography
                    isNowrap
                    className={clsx('moonstone-card-selector-displayName')}
                    variant="subheading"
                    weight="default"
                    component="span"
                    >
                        {displayName}
                    </Typography>
                )}
                    {systemName && (
                    <Typography
                    isNowrap
                    className={clsx('moonstone-card-selector-systemName')}
                    variant="body"
                    weight="default"
                    component="span"
                    >
                        ({systemName})
                    </Typography>
                )}
                </div>
                <div className={clsx('flexRow')}>
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
            {cardActions && (
                <div className="moonstone-card-selector-actions flexRow alignCenter">
                    {/* The actions' order in cardActions defines their display order */}
                    {cardActions.map(action => {
                    switch (action) {
                        case 'orderable':
                            return (
                                <div key="orderIcons" className="flexCol">
                                    <ArrowUp color="gray"/>
                                    <ArrowDown color="gray"/>
                                </div>
                            );
                          case 'closeable':
                            return <Close key="closeIcon" color="gray"/>;
                          default:
                            return null;
                        }
                    }
                    )}
                </div>
        )}
        </div>
    );
};

export const CardSelector = React.forwardRef(CardSelectorForwardRef);

CardSelector.displayName = 'CardSelector';

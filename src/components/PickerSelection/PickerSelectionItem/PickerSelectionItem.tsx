import React from 'react';
import clsx from 'clsx';
import './PickerSelectionItem.scss';
import {PickerSelectionItemProps} from './PickerSelectionItem.types';
import {Typography} from '~/components';
import {toIconComponent} from '~/icons/utils';
import * as Icons from '~/icons';

const PickerSelectionItemForwardRef: React.ForwardRefRenderFunction<HTMLLIElement, PickerSelectionItemProps> = ({
    title,
    subtitle,
    chips,
    description,
    image,
    fileIcon = <Icons.File/>,
    // index,
    className,
    isDraggable = false,
    onClick = () => undefined,
    ...other
}, ref) => {
    const classNameProps = clsx(
        'moonstone-picker-selection-item',
        'flexRow',
        'alignCenter',
        // index && `moonstone-picker-selection-item-index_${index}`,
        className
    );

    const handleOnClick: React.MouseEventHandler = e => {
        onClick(e);
        (e.currentTarget as HTMLElement).blur();
    };

    return (
        <li
        ref={ref}
        className={classNameProps}
        onClick={e => handleOnClick(e)}
        {...other}
        >
            <div className={clsx('leftSide', 'flexRow', 'alignCenter')}>
                {isDraggable && <Icons.HandleDrag color="gray"/>}
                <div className={clsx('moonstone-picker-selection-thumbnail', 'flexRow_center', 'alignCenter')}>
                    {image ? (toIconComponent(image)) : <fileIcon.type/>}
                </div>
            </div>
            <div className="midSide">
                <div className={clsx('topLine', 'flexRow')}>
                    {title && (
                    <Typography
                    isNowrap
                    className={clsx('moonstone-picker-selection-item-title')}
                    variant="subheading"
                    weight="default"
                    component="span"
                    >
                        {title}
                    </Typography>
                )}
                    {subtitle && (
                    <Typography
                    isNowrap
                    className={clsx('moonstone-picker-selection-item-subtitle')}
                    variant="body"
                    weight="default"
                    component="span"
                    >
                        {subtitle}
                    </Typography>
                )}
                </div>
                <div className={clsx('bottomLine', 'flexRow')}>
                    {chips && (
                    chips.map(chip => (chip))
                )}
                    {description && (
                    <Typography
                        variant="caption"
                        weight="default"
                        component="span"
                        className={clsx('moonstone-picker-selection-item-description')}
                    >
                        {description}
                    </Typography>
                )}
                </div>
            </div>
            <div className="rightSide">
                {/* buttons related to actions will be set here */}
                {/* <Icons.Close color="gray"/> */}
            </div>
        </li>
    );
};

export const PickerSelectionItem = React.forwardRef(PickerSelectionItemForwardRef);

PickerSelectionItem.displayName = 'PickerSelectionItem';

import React from 'react';
import clsx from 'clsx';
import './ListItem.scss';
import {Typography} from '~/components/Typography';
import {ListItemProps} from './ListItem.types';

const ListItemForwardRef: React.ForwardRefRenderFunction<HTMLLIElement, ListItemProps> = ({
    label,
    description,
    iconStart,
    iconEnd,
    image,
    imageSize = 'small',
    className = '',
    typographyVariant = 'caption',
    iconSize = 'default',
    ...props
}, ref) => {
    const cssListItem = clsx(
        'moonstone-listItem',
        'flexRow',
        className
    );
    // When an image and an iconStart is provided we display the icon
    const isDisplayImage = image && !iconStart;

    return (
        <li
            ref={ref}
            className={clsx(cssListItem)}
            {...props}
        >
            {isDisplayImage && (
                <figure className={clsx(`moonstone-listItem-image moonstone-listItem-image_${imageSize}`, 'flexRow', 'alignCenter')}>
                    {image}
                </figure>
            )}
            {iconStart && (
                <div className="moonstone-listItem_iconStart flexRow_center alignCenter">
                    <iconStart.type {...iconStart.props} size={iconSize} className={clsx(`moonstone-icon_${iconSize}`, iconStart.props.className)}/>
                </div>
            )}

            <div className={clsx(
                isDisplayImage ? 'flexCol_center' : 'flexCol',
                'flexFluid'
                )}
            >
                <Typography
                    isNowrap
                    className={clsx(isDisplayImage ? null : 'flexFluid')}
                    variant={typographyVariant}
                    component="span"
                >
                    {label}
                </Typography>
                {description && (
                    <Typography
                        variant="caption"
                        weight="default"
                        component="span"
                        className={clsx('moonstone-listItem_description')}
                    >
                        {description}
                    </Typography>
                )}
            </div>

            {iconEnd && (
                <div className="moonstone-listItem_iconEnd">
                    <iconEnd.type {...iconEnd.props} size={iconSize} className={clsx(`moonstone-icon_${iconSize}`, iconEnd.props.className)}/>
                </div>
            )}
        </li>
    );
};

export const ListItem = React.forwardRef(ListItemForwardRef);
ListItem.displayName = 'ListItem';

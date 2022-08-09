import React from 'react';
import clsx from 'clsx';
import './ListItem.scss';
import {Typography} from '~/components/Typography';
import {ListItemProps} from './ListItem.types';

export const ListItem: React.FC<ListItemProps> = ({
    label,
    isHtml = false,
    iconStart = null,
    iconEnd = null,
    tabIndex,
    image,
    imageSize,
    className = '',
    typographyVariant = 'caption',
    iconSize = 'small',
    ...props
}) => {
    const cssListItem = clsx(
        'moonstone-listItem',
        'flexRow',
        'alignCenter',
        className
    );

    return (
        <li
            className={clsx(cssListItem)}
            tabIndex={tabIndex}
            {...props}
        >
            {
                iconStart && !image && (
                    <div className="moonstone-listItem_iconStart flexRow_center alignCenter ">
                        <iconStart.type {...iconStart.props} size={iconSize}/>
                    </div>
                )
            }

            {
                image && !iconStart && (
                    <figure className={clsx(
                        `moonstone-listItem-image_${imageSize}`,
                        'flexRow',
                        'alignCenter'
                    )}
                    >
                        {image}
                    </figure>
                )
            }

            <Typography
                isNowrap
                isHtml={isHtml}
                className={clsx('flexFluid')}
                variant={typographyVariant}
                component="span"
            >
                {label}
            </Typography>

            {
                iconEnd && (
                    <div className="moonstone-listItem_iconEnd">
                        <iconEnd.type {...iconEnd.props} size={iconSize}/>
                    </div>
                )
            }
        </li>
    );
};

ListItem.displayName = 'ListItem';

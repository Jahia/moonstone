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
    ...props
}) => {
    const cssListItem = clsx(
        className,
        'moonstone-listItem',
        'flexRow',
        'alignCenter'
    );

    return (
        <li
            className={clsx(cssListItem)}
            tabIndex={tabIndex}
            {...props}
        >
            {
                iconStart && !image &&
                <div className="moonstone-listItem_iconStart"><iconStart.type {...iconStart.props} size="small"/></div>
            }

            {
                image && !iconStart &&
                <figure className={`moonstone-listItem-image_${imageSize} flexRow`}>{image}</figure>
            }

            <Typography
                isNowrap
                isHtml={isHtml}
                className={clsx('flexFluid')}
                variant="caption"
                component="span"
            >
                {label}
            </Typography>

            {
                iconEnd &&
                <div className="moonstone-listItem_iconEnd"><iconEnd.type {...iconEnd.props} size="small"/></div>
            }
        </li>
    );
};

ListItem.displayName = 'ListItem';

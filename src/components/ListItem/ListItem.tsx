import React from 'react';
import classnames from 'clsx';
import './ListItem.scss';
import {Typography} from '~/components/Typography';

type TListItemImageSize = 'small' | 'big';
enum ListItemImageSize {
    SMALL = 'small',
    BIG = 'big'
}

interface IListItemProps {
    /**
     * Additional classname
     */
    className?: string,

    /**
     * ListItem label
     */
    label: React.ReactNode,

    /**
     * Does the label contain HTML markup
     */
    isHtml?: boolean,

    /**
     * Icon display before the label. Cannot be used in conjunction with the image property.
     */
    iconStart?: React.ReactElement,

    /**
     * Icon display at the end of ListItem
     */
    iconEnd?: React.ReactElement,
    /**
     * Tab index for the element
     */
    tabIndex?: number

    /**
     * Optional image to display to describe the menu item. Cannot be used in conjunction with the iconStart property.
     */
    image?: HTMLImageElement,

    /**
     * If there's an image, it should be this size
     */
    imageSize?: TListItemImageSize,
}

export const ListItem: React.FC<IListItemProps> = ({
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
    const cssListItem = classnames(
        className,
        'moonstone-listItem',
        'flexRow',
        'alignCenter'
    );

    return (
        <li
            className={classnames(cssListItem)}
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
                className={classnames('flexFluid')}
                variant="caption"
                component="span"
            >
                {label}
            </Typography>

            {
                iconEnd &&
                <div className="moonstone-listItem_iconStart"><iconEnd.type {...iconEnd.props} size="small"/></div>
            }
        </li>
    );
};

ListItem.displayName = 'ListItem';

import React from 'react';
import classnames from 'clsx';
import './ListItem.scss';
import {Typography} from '~/components/Typography';

interface ILisItemProps {
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
     * Icon display before the label
     */
    iconStart?: React.ReactElement,

    /**
     * Icon display at the end of ListItem
     */
    iconEnd?: React.ReactElement
}

export const ListItem: React.FC<ILisItemProps> = ({
    label,
    isHtml = false,
    iconStart = null,
    iconEnd = null,
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
        <li className={classnames(cssListItem)}
            {...props}
        >
            {
            iconStart &&
                <iconStart.type {...iconStart.props} size="small" className={classnames('moonstone-listItem_iconStart')}/>
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
                <iconEnd.type {...iconEnd.props} size="small" className={classnames('moonstone-listItem_iconEnd')}/>
            }
        </li>
    );
};

ListItem.displayName = 'ListItem';

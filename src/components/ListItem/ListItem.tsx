import React from 'react';
import clsx from 'clsx';
import './ListItem.scss';
import {Typography} from '~/components/Typography';
import {ListItemProps} from './ListItem.types';

export const ListItem: React.FC<ListItemProps> = ({
    label,
    description,
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
        description ? 'flexCol' : 'flexRow alignCenter',
        className
    );

    return (
        <li
            className={clsx(cssListItem)}
            tabIndex={tabIndex}
            {...props}
        >
            <div className="flexRow flexRow_nowrap alignCenter widthInherit">

                {
                    iconStart && !image && (
                        <div className="moonstone-listItem_iconStart">
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

                {
                    image && !iconStart && (
                        <div className="flexCol">
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
                                description && (
                                    <Typography
                                        variant="caption"
                                        weight="default"
                                        component="span"
                                        className={clsx('moonstone-listItem_description flexRow')}
                                    >
                                        {description}
                                    </Typography>
                                )
                            }
                        </div>
                    )
                }

                {
                    !image && (
                        <Typography
                            isNowrap
                            isHtml={isHtml}
                            className={clsx('flexFluid')}
                            variant={typographyVariant}
                            component="span"
                        >
                            {label}
                        </Typography>
                    )
                }

                {
                    iconEnd && (
                        <div className="moonstone-listItem_iconEnd">
                            <iconEnd.type {...iconEnd.props} size={iconSize}/>
                        </div>
                    )
                }
            </div>

            {
                description && !image && (
                    <Typography
                        variant="caption"
                        weight="default"
                        component="span"
                        className={clsx('moonstone-listItem_description flexRow', {'moonstone-listItem_marginLeft': iconStart})}
                    >
                        {description}
                    </Typography>
                )
            }
        </li>
    );
};

ListItem.displayName = 'ListItem';

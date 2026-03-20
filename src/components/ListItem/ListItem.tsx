import React from 'react';
import clsx from 'clsx';
import styles from './ListItem.module.scss';
import {Typography} from '~/components/Typography';
import {ListItemProps} from './ListItem.types';
import {icons, layout} from '~/globals/css-utils.js';

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
        ['moonstone-listItem', styles['moonstone-listItem']],
        ['flexRow', layout.flexRow],
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
                <figure
                    className={clsx(
                        ['moonstone-listItem-image', styles['moonstone-listItem-image']],
                        [`moonstone-listItem-image_${imageSize}`, styles[`moonstone-listItem-image_${imageSize}`]],
                        ['flexRow', layout.flexRow],
                        ['alignCenter', layout.alignCenter]
                    )}
                >
                    {image}
                </figure>
            )}
            {iconStart && (
                <div
                    className={clsx(
                        ['moonstone-listItem_iconStart', styles['moonstone-listItem_iconStart']],
                        ['flexRow_center', layout.flexRow_center],
                        ['alignCenter', layout.alignCenter]
                    )}
                >
                    <iconStart.type {...iconStart.props} size={iconSize} className={clsx(`moonstone-icon_${iconSize}`, icons[`moonstone-icon_${iconSize}`], iconStart.props.className)}/>
                </div>
            )}

            <div className={clsx(
                isDisplayImage ? ['flexCol_center', layout.flexCol_center] : ['flexCol', layout.flexCol],
                ['flexFluid', layout.flexFluid]
                )}
            >
                <Typography
                    isNowrap
                    className={clsx(isDisplayImage ? null : ['flexFluid', layout.flexFluid])}
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
                        className={clsx('moonstone-listItem_description', styles['moonstone-listItem_description'])}
                    >
                        {description}
                    </Typography>
                )}
            </div>

            {iconEnd && (
                <div className={clsx('moonstone-listItem_iconEnd', styles['moonstone-listItem_iconEnd'])}>
                    <iconEnd.type {...iconEnd.props} size={iconSize} className={clsx(`moonstone-icon_${iconSize}`, icons[`moonstone-icon_${iconSize}`], iconEnd.props.className)}/>
                </div>
            )}
        </li>
    );
};

export const ListItem = React.forwardRef(ListItemForwardRef);
ListItem.displayName = 'ListItem';

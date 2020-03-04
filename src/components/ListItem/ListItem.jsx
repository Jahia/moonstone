import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'clsx';
import styles from './ListItem.scss';
import {Typography} from '~/components';

export const ListItem = ({label, iconStart, iconEnd, className, ...props}) => {
    const cssListItem = classnames(
        className,
        styles.listItem,
        'flexRow',
        'alignCenter'
    );

    return (
        <li className={classnames(cssListItem)}
            {...props}
        >
            {
            iconStart &&
                <iconStart.type size="small" className={classnames(styles.listItem_iconStart)}/>
            }

            <Typography isNowrap className={classnames('flexFluid')} component="span">{label}</Typography>

            {
            iconEnd &&
                <iconEnd.type size="small" className={classnames(styles.listItem_iconEnd)}/>
            }
        </li>
    );
};

ListItem.defaultProps = {
    iconStart: null,
    iconEnd: null,
    className: ''
};

ListItem.propTypes = {
    /**
     * Additional classname
     */
    className: PropTypes.string,

    /**
     * ListItem label
     */
    label: PropTypes.string.isRequired,

    /**
     * Icon display before the label
     */
    iconStart: PropTypes.node,

    /**
     * Icon display at the end of ListItem
     */
    iconEnd: PropTypes.node
};

ListItem.displayName = 'ListItem';

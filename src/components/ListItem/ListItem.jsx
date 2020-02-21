import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'clsx';
import styles from './ListItem.scss';
import {Typography} from '~/components';

export const ListItem = ({label, iconStart, iconEnd, isDisabled, variant, className, onClick, onMouseEnter, onMouseLeave, ...props}) => {
    const cssListItem = classnames(
        className,
        styles.listItem,
        'flexRow',
        'alignCenter'
    );

    return (
        <li tabIndex={isDisabled || variant === 'title' ? null : '0'}
            aria-disabled={isDisabled}
            className={classnames(cssListItem)}
            onClick={e => onClick(e)}
            onMouseEnter={e => onMouseEnter(e)}
            onMouseLeave={e => onMouseLeave(e)}
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
    isDisabled: false,
    iconStart: null,
    iconEnd: null,
    className: '',
    onClick: () => {},
    onMouseEnter: () => {},
    onMouseLeave: () => {}
};

ListItem.propTypes = {
    /**
     * Additional classname
     */
    className: PropTypes.string,

    /**
     * Is item disabled
     */
    isDisabled: PropTypes.bool,

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
    iconEnd: PropTypes.node,

    /**
     * ListItem variants
     */
    variant: PropTypes.oneOf(['default', 'title']),

    /**
     * Function triggered on clicking the item
     */
    onClick: PropTypes.func,

    /**
     * Function triggered when the mouse pointer hovering the item
     */
    onMouseEnter: PropTypes.func,

    /**
     * Function triggered when the mouse pointer move off the item
     */
    onMouseLeave: PropTypes.func
};

ListItem.displayName = 'ListItem';

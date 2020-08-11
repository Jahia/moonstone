import React from 'react';
import {ListItem} from '~/components/ListItem';
import PropTypes from 'prop-types';
import classnames from 'clsx';
import './MenuItem.scss';

export const MenuItem = ({isHover, isSelected, isDisabled, variant, className, ...props}) => (
    <ListItem
        tabIndex={isDisabled || variant === 'title' || isSelected ? null : '0'}
        aria-disabled={isDisabled}
        className={classnames(
            'moonstone-menuItem',
            className,
            {
                'moonstone-hover': isHover,
                'moonstone-selected': isSelected,
                'moonstone-disabled': isDisabled,
                'moonstone-title': variant === 'title'
            }
        )}
        variant={variant}
        {...props}
       />
);

MenuItem.defaultProps = {
    isDisabled: false,
    iconStart: null,
    iconEnd: null,
    className: '',
    isHtml: false,
    onClick: () => {},
    onMouseEnter: () => {},
    onMouseLeave: () => {}
};

MenuItem.propTypes = {
    /**
     * Additional classname
     */
    className: PropTypes.string,

    /**
     * Is item disabled
     */
    isHover: PropTypes.bool,

    /**
     * Is item disabled
     */
    isSelected: PropTypes.bool,

    /**
     * Is item disabled
     */
    isDisabled: PropTypes.bool,

    /**
     * ListItem label
     */
    label: PropTypes.node.isRequired,

    /**
     * Does the label contain HTML markup
     */
    isHtml: PropTypes.bool,

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

MenuItem.displayName = 'MenuItem';

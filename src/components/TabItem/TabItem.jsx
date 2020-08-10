import React from 'react';
import PropTypes from 'prop-types';
import './TabItem.scss';
import classnames from 'clsx';
import {Typography} from '../Typography';

export const tabItemSizes = ['default'];
export const tabItemVariants = ['ghost'];
export const tabItemColors = ['default'];

export const TabItem = ({component, label, size, isReversed, isDisabled, icon, variant, color, className, isSelected, ...props}) =>
    React.createElement(
        component,
        {
            className: classnames(
                'moonstone-tab-item',
                `size_${size}`,
                `variant_${variant}`,
                `color_${color}`,
                {icon: (icon && label)},
                {'icon-tab-item': !label},
                {selected: isSelected},
                {reverse: isReversed},
                className
            ),
            disabled: isDisabled,
            ...props
        },
        <>
            {icon && <icon.type {...icon.props} size={(size === 'big') ? 'default' : size}/>}

            {label &&
            <Typography isNowrap
                        component="span"
                        variant="button"
                        isUpperCase={size === 'big'}
                        weight="default"
            >
                {label}
            </Typography>}
        </>
    );

TabItem.defaultProps = {
    component: 'button',
    label: '',
    size: 'default',
    icon: null,
    variant: 'ghost',
    isDisabled: false,
    isSelected: false,
    color: 'default',
    isReversed: false,
    className: null
};

TabItem.propTypes = {
    /**
     * The component used for the root node
     */
    component: PropTypes.string,

    /**
     * TabItem label
     */
    label: PropTypes.string,

    /**
     * Icon size
     */
    size: PropTypes.oneOf(tabItemSizes),

    /**
     * Icon name, if it's empty the tabItem has no icon
     */
    icon: PropTypes.element,

    /**
     * TabItem style
     */
    variant: PropTypes.oneOf(tabItemVariants),

    /**
     * TabItem color
     */
    color: PropTypes.oneOf(tabItemColors),

    /**
     * Is tabItem disabled
     */
    isDisabled: PropTypes.bool,

    /**
     * Is tabItem selected
     */
    isSelected: PropTypes.bool,

    /**
     * Function trigger on click
     */
    onClick: PropTypes.func.isRequired,

    /**
     * Is tabItem color reversed
     */
    isReversed: PropTypes.bool,

    /**
     * Additional classname
     */
    className: PropTypes.string
};

TabItem.displayName = 'TabItem';

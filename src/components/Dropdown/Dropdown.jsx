import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import classnames from 'clsx';
import './Dropdown.scss';
import spacings from '~/tokens/spacings/spacing.json';

import {Menu, MenuItem} from '~/components/Menu';
import {Typography} from '~/components/Typography';
import {Separator} from '~/components/Separator';
import {ChevronDown} from '~/icons';

export const DropdownVariants = ['default', 'ghost'];
export const DropdownSizes = ['small', 'medium'];

export const Dropdown = (
    {
        data,
        label,
        value,
        isDisabled,
        maxWidth,
        variant,
        size,
        icon,
        onChange,
        className,
        ...props
    }) => {
    const [isOpened, setIsOpened] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [minWidth, setMinWith] = useState(null);
    const isGrouped = typeof data[0].options !== 'undefined';

    const anchorPosition = {
        top: spacings.spacingNano,
        left: 0
    };

    // ---
    // Functions to handle events
    // ---
    const handleOpenMenu = e => {
        setMinWith(`${e.currentTarget.offsetWidth}px`);
        setAnchorEl(e.currentTarget);
        setIsOpened(true);
    };

    const handleSelect = (e, item) => {
        if (item) {
            let canClose = !item.isDisabled;
            if (!item.isDisabled && item.value !== value) {
                e.stopPropagation();
                canClose = onChange(e, item);
            }

            if (canClose !== false) {
                setIsOpened(false);
            }
        }
    };

    const handleCloseMenu = () => {
        setIsOpened(false);
        setAnchorEl(null);
    };

    const handleKeyPress = (e, item) => {
        if (e.key === 'Enter') {
            handleSelect(e, item);
        }
    };

    // ---
    // CSS classes
    // ---
    const cssDropdown = classnames(
        'moonstone-dropdown',
        {
            'moonstone-disabled': isDisabled,
            'moonstone-opened': isOpened
        }
    );

    const cssDropdownLabel = classnames(
        'flexRow',
        'alignCenter',
        'moonstone-dropdown_label',
        `moonstone-${size}`,
        variant
    );

    // ---
    // Generate options
    // ---
    const dropdownOption = (item, handleSelect) => (
        <MenuItem
            key={item.value}
            role="option"
            iconStart={item.iconStart}
            label={item.label}
            iconEnd={item.iconEnd}
            isDisabled={item.isDisabled}
            isSelected={value === item.value}
            onClick={e => handleSelect(e, item)}
            onKeyPress={e => handleKeyPress(e, item)}
            {...item.attributes}
        />
    );

    const dropdownGrouped = (children, groupLabel, index) => {
        return (
            <Fragment key={`${groupLabel}-${index}`}>
                {index > 0 && (
                    <Separator/>
                )}

                <MenuItem variant="title" label={groupLabel}/>

                {children.map(item => {
                    return dropdownOption(item, handleSelect);
                })}
            </Fragment>
        );
    };

    return (
        <div className={classnames(cssDropdown, className)}
             style={{maxWidth: maxWidth}}
             {...props}
             onKeyPress={e => {
                if (e.key === 'Enter') {
                    handleOpenMenu(e);
                }
            }}
        >
            <div className={classnames(cssDropdownLabel)}
                 tabIndex="0"
                 onClick={e => handleOpenMenu(e)}
                 onKeyPress={(e, item) => {
                     if (e.key === 'Enter') {
                         handleSelect(e, item);
                     }
                 }}
            >
                {
                    icon &&
                    <icon.type {...icon.props} size="small" className={classnames('moonstone-dropdown_icon')}/>
                }

                <Typography
                    isNowrap
                    variant="caption"
                    component="span"
                    className={classnames('flexFluid')}
                >
                    {label}
                </Typography>
                <ChevronDown/>
            </div>

            <Menu
                isDisplayed={isOpened}
                anchorPosition={anchorPosition}
                maxHeight="270px"
                maxWidth="250px"
                minWidth={minWidth}
                anchorEl={anchorEl}
                onClose={handleCloseMenu}
            >
                {
                    data.map((item, index) => {
                        if (isGrouped) {
                            item.options.map(o => {
                                return dropdownOption(o, handleSelect);
                            });
                            return dropdownGrouped(item.options, item.groupLabel, index);
                        }

                        return dropdownOption(item, handleSelect);
                    })
                }
            </Menu>
        </div>
    );
};

Dropdown.defaultProps = {
    icon: null,
    variant: 'default',
    size: 'medium',
    maxWidth: '300px',
    isDisabled: false
};

const PropTypesOptions = {
    label: PropTypes.string,
    value: PropTypes.string,
    isDisabled: PropTypes.bool,
    iconStart: PropTypes.node,
    iconEnd: PropTypes.node,
    attributes: PropTypes.object
};

Dropdown.propTypes = {
    /**
     * Content of the dropdown
     */
    data: PropTypes.arrayOf(
        PropTypes.shape({
            ...PropTypesOptions,
            groupLabel: PropTypes.string,
            options: PropTypes.arrayOf(
                PropTypes.shape({
                    ...PropTypesOptions
                })
            )
        })
    ).isRequired,

    /**
     * Label of the dropdown
     */
    label: PropTypes.string,

    /**
     * Value of the dropdown
     */
    value: PropTypes.string,

    /**
     * Icon displays before the dropdown's label
     */
    icon: PropTypes.node,

    /**
     * Dropdown's variants
     */
    variant: PropTypes.oneOf(DropdownVariants),

    /**
     * Dropdown's sizes
     */
    size: PropTypes.oneOf(DropdownSizes),

    /**
     * Max width of the dropdown
     */
    maxWidth: PropTypes.string,

    /**
     * Dropdown is disabled
     */
    isDisabled: PropTypes.bool,

    /**
     * Additional classname
     */
    className: PropTypes.string,

    /**
     * Function trigger on change with the current option as param
     * @param {object} event - Mouse event
     * @param {object} item - The current item selected
     */
    onChange: PropTypes.func.isRequired
};

Dropdown.displayName = 'Dropdown';

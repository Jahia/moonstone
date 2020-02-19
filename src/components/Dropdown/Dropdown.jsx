import React, {useState, Fragment} from 'react';
import PropTypes from 'prop-types';
import classnames from 'clsx';
import styles from './Dropdown.scss';

import {ListItem, Menu, Typography} from '~/components';
import {Separator} from '~/components/Separator';
import {ChevronDown} from '~/tokens/icons';

export const DropdownVariants = ['default', 'ghost'];
export const DropdownSizes = ['small', 'medium'];

export const Dropdown = ({
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
        top: 'var(--spacing-nano)',
        left: '0px'
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
        if (!item.isDisabled && item.value !== value) {
            onChange(e, item);
        }

        if (!item.isDisabled) {
            setIsOpened(false);
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
        styles.dropdown,
        isDisabled ? styles['dropdown-disabled'] : null,
        isOpened ? styles['dropdown-opened'] : null
    );

    const cssDropdownLabel = classnames(
        'flexRow',
        'alignCenter',
        styles.dropdown_label,
        styles[`dropdown-${size}`],
        styles[`dropdown-${variant}`]
    );

    // ---
    // Generate options
    // ---
    const dropdownOption = (item, handleSelect) => {
        const isSelected = value === item.value;

        return (
            <ListItem
                key={item.value}
                iconStart={item.iconStart}
                label={item.label}
                iconEnd={item.iconEnd}
                isDisabled={item.isDisabled}
                className={
                    classnames(
                        styles.dropdownOption,
                        isSelected ? styles.dropdownOption_selected : null,
                        item.isDisabled ? styles.dropdownOption_disabled : null
                    )
                }
                onClick={e => handleSelect(e, item)}
                onKeyPress={e => handleKeyPress(e, item)}
            />
        );
    };

    const dropdownGrouped = (children, groupLabel, index) => {
        return (
            <Fragment key={`${groupLabel}-${index}`}>
                {index > 0 && (
                    <Separator/>
                )}

                <ListItem
                    variant="title"
                    label={groupLabel}
                    className={classnames(styles.dropdownOption_title)}
                />

                {children.map(item => {
                    return dropdownOption(item, handleSelect);
                })}
            </Fragment>
        );
    };

    return (
        <div className={classnames(cssDropdown, className)} style={{maxWidth: maxWidth}} {...props}>
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
                    <icon.type size="small" className={classnames(styles.dropdown_icon)}/>
                }

                <Typography
                    isNowrap
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
    isDisabled: false,
    onChange: () => {}
};

const PropTypesOptions = {
    label: PropTypes.string,
    value: PropTypes.string,
    isDisabled: PropTypes.bool,
    iconStart: PropTypes.node,
    iconEnd: PropTypes.node
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
    onChange: PropTypes.func
};

Dropdown.displayName = 'Dropdown';

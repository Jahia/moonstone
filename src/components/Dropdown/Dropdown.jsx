import React, {useEffect, useState, Fragment} from 'react';
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
    autoFocus,
    defaultOption,
    placeholder,
    isDisabled,
    maxWidth,
    variant,
    size,
    icon,
    onChange
}) => {
    const [isOpened, setIsOpened] = useState(false);
    const [currentOption, setCurrentOption] = useState(defaultOption ? defaultOption : {label: placeholder, value: null});
    const isGrouped = typeof data[0].options !== 'undefined';
    const position = {
        top: size === 'small' ? '30px' : '38px',
        left: '0'
    };
    const refDropdownLabel = React.createRef();

    useEffect(() => {
        onChange(currentOption);

        if (autoFocus) {
            refDropdownLabel.current.focus();
        }
    }, [autoFocus, currentOption, onChange, refDropdownLabel]);

    // ---
    // Functions to handle events
    // ---
    const handleOpenMenu = () => {
        setIsOpened(true);
    };

    const handleSelect = e => {
        const selectOption = e.target.textContent;
        const options = isGrouped ? data.map(items => items.options).flat() : data;
        const newItem = options.filter(option => option.label === selectOption)[0];

        if (!newItem.isDisabled) {
            setCurrentOption(newItem);
            setIsOpened(false);
        }
    };

    const handleCloseMenu = () => {
        setIsOpened(false);
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
    const dropdownOption = (item, currentOption, handleSelect) => {
        const isSelected = currentOption.value === item.value;

        return (
            <ListItem
                key={item.value}
                iconStart={item.icon}
                label={item.label}
                isDisabled={item.isDisabled}
                className={
                    classnames(
                        styles.dropdownOption,
                        isSelected ? styles.dropdownOption_selected : null,
                        item.isDisabled ? styles.dropdownOption_disabled : null
                    )
                }
                onClick={handleSelect}
                onKeyPress={e => {
                    if (e.key === 'Enter') {
                        handleSelect(e);
                    }
                }}
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
                    return dropdownOption(item, currentOption, handleSelect);
                })}
            </Fragment>
        );
    };

    return (
        <div className={classnames(cssDropdown)} style={{maxWidth: maxWidth}}>
            <div ref={refDropdownLabel}
                 className={classnames(cssDropdownLabel)}
                 tabIndex="0"
                 onClick={handleOpenMenu}
                 onKeyPress={e => {
                    if (e.key === 'Enter') {
                        handleSelect(e);
                    }
                }}
            >
                <i className={classnames(styles.dropdown_icon)}>
                    {icon}
                </i>
                <Typography
                    isNowrap
                    component="span"
                    className={classnames('flexFluid')}
                >
                    {currentOption.label}
                </Typography>
                <ChevronDown size="small"/>
            </div>

            <Menu
                isDisplay={isOpened}
                position={position}
                maxWidth="250px"
            >
                {
                    data.map((item, index) => {
                        if (isGrouped) {
                            item.options.map(o => {
                                return dropdownOption(o, currentOption, handleSelect);
                            });
                            return dropdownGrouped(item.options, item.groupLabel, index);
                        }

                        return dropdownOption(item, currentOption, handleSelect);
                    })
                }
            </Menu>

            {isOpened && (
                <div
                    className={classnames(styles.dropdown_overlay)}
                    onClick={handleCloseMenu}
                />
            )}
        </div>
    );
};

Dropdown.defaultProps = {
    defaultOption: null,
    icon: null,
    placeholder: '',
    variant: 'default',
    size: 'medium',
    maxWidth: '300px',
    autoFocus: false,
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
     * Option selected by default
     */
    defaultOption: PropTypes.shape({...PropTypesOptions}),

    /**
     * Icon displays before the dropdown's label
     */
    icon: PropTypes.node,

    /**
     * Placeholder displays when there is no `defaultOption`
     */
    placeholder: PropTypes.string,

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
     * Element is focus on render
     */
    autoFocus: PropTypes.bool,

    /**
     * Dropdown is disabled
     */
    isDisabled: PropTypes.bool,

    /**
     * Function trigger on change with the current option as param
     */
    onChange: PropTypes.func
};

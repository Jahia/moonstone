import React, {useState} from 'react';
import {StoryFn, Meta} from '@storybook/react';

import {FloatingMenu, BreakingMenu} from '../index';
import {MenuItem, Separator, Dropdown} from '~/components';
import {AnchorPosition} from '../../Menu/Menu.types';
import {action} from '@storybook/addon-actions';
import {
    dropdownData,
    dropdownDataTree
} from '~/data';

export default {
    title: 'Components/Floating UI/Other tests',
    component: BreakingMenu,
    tags: ['beta'],
    parameters: {
        layout: 'centered',
        knobs: {disable: true},
        storysource: {disable: true},
        actions: {argTypesRegex: '^on.*'}
    },
    // To prevent "implicit action arg while rendering the story" error
    argTypes: {
        onClick: {action: 'clicked'},
        onMouseEnter: {action: 'mouse-entered'},
        onMouseLeave: {action: 'mouse-left'},
        onClose: {action: 'closed'},
        onEntering: {action: 'entering'},
        onEntered: {action: 'entered'},
        onExiting: {action: 'exiting'},
        onExited: {action: 'exited'}
    }
} as Meta<typeof BreakingMenu>;

const MenuTemplate: StoryFn<typeof FloatingMenu> = args => (
    <FloatingMenu isDisplayed {...args}>
        <MenuItem label="Base items" variant="title"/>
        <MenuItem label="Item1"/>
        <MenuItem label="Item2"/>
        <MenuItem label="Item3"/>
        <Separator/>
        <MenuItem label="Variants" variant="title"/>
        <MenuItem isHover label="Item3 - Hover"/>
        <MenuItem isDisabled label="Item3 - Disabled"/>
        <MenuItem isHighlighted label="Item3 - Highlighted"/>
        <MenuItem isSelected label="Item4 - Selected"/>
    </FloatingMenu>
);

export const FLoatingMenu = {
    render: MenuTemplate
};

export const ContextualMenu = () => {
    const [isDisplayed, setIsDisplayed] = useState(false);
    const [menuPosition, setMenuPosition] = useState<AnchorPosition>();

    const handleOnClick = (e: React.MouseEvent) => {
        if (isDisplayed) {
            handleClose();
        } else {
            setIsDisplayed(true);
            setMenuPosition({
                top: e.clientY,
                left: e.clientX
            });
        }
    };

    const handleClose = () => {
        setIsDisplayed(false);
    };

    return (
        <div
      className="flexRow_center alignCenter"
      style={{transform: 'scale(1)', height: '100vh'}}
      onClick={handleOnClick}
        >
            <p>Click somewhere to display the menu, another click close it</p>
            <BreakingMenu
        isDisplayed={isDisplayed}
        anchorPosition={menuPosition}
        onClose={handleClose}
            >
                <MenuItem label="Item1"/>
                <MenuItem label="Item2"/>
                <MenuItem label="Item3"/>
            </BreakingMenu>
        </div>
    );
};

// Add dropdown story

const DropdownTemplate: StoryFn<typeof Dropdown> = args => {
    const {
        size,
        variant,
        placeholder,
        isDisabled,
        className,
        searchEmptyText,
        hasSearch,
        imageSize,
        isTree,
        multiple,
        withClear
    } = args;
    const [currentOption, setCurrentOption] = useState(null);
    const [currentOptions, setCurrentOptions] = useState([]);

    const handleOnChange = (e, item) => {
        if (multiple) {
            setCurrentOptions(prev =>
                prev.every(p => p.value !== item.value) ?
                    [...prev, item] :
                    prev.filter(i => i.value !== item.value)
            );
        } else {
            setCurrentOption(item);
        }

        action('onChange');
        return true;
    };

    const onClear =
    withClear &&
    (() => {
        if (multiple) {
            setCurrentOptions([]);
        } else {
            setCurrentOption(null);
        }
    });

    return (
        <Dropdown
      hasSearch={hasSearch}
      label="Dropdown with breaking menu"
      placeholder={placeholder}
      className={className}
      value={!multiple && currentOption?.value}
      values={multiple && currentOptions.map(i => i.value)}
      size={size}
      searchEmptyText={searchEmptyText}
      imageSize={imageSize}
      variant={variant}
      isDisabled={isDisabled}
      data={isTree ? null : dropdownData}
      treeData={isTree ? dropdownDataTree : null}
      onClear={onClear}
      onFocus={action('onfocus')}
      onBlur={action('onblur')}
      onChange={(e, item) => handleOnChange(e, item)}
    />
    );
};

export const FloatingDropdownMenu = {
    render: DropdownTemplate
};

const BreakingTemplate: StoryFn<typeof BreakingMenu> = args => (
    <BreakingMenu isDisplayed {...args}>
        <MenuItem label="Base items" variant="title"/>
        <MenuItem label="Item1"/>
        <MenuItem label="Item2"/>
        <MenuItem label="Item3"/>
        <Separator/>
        <MenuItem label="Variants" variant="title"/>
        <MenuItem isHover label="Item3 - Hover"/>
        <MenuItem isDisabled label="Item3 - Disabled"/>
        <MenuItem isHighlighted label="Item3 - Highlighted"/>
        <MenuItem isSelected label="Item4 - Selected"/>
    </BreakingMenu>
);

export const FloatingBreakingMenu = {
    render: BreakingTemplate
};

export const AnchorElOrigin = () => {
    const [isDisplayed, setIsDisplayed] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorPos, setAnchorPos] = useState();
    const buttonEl = React.useRef();

    const handleOnClick = e => {
        setAnchorEl(buttonEl);
        setAnchorPos({left: e.target.offsetLeft, top: (e.target.offsetTop + e.target.offsetHeight)});
        if (isDisplayed) {
            handleClose();
        } else {
            setIsDisplayed(true);
        }
    };

    const handleClose = () => {
        setIsDisplayed(false);
    };

    return (
        <>
            <button
                ref={buttonEl}
                type="button"
                style={{margin: '90px', width: '100px', height: '100px'}}
                onClick={e => handleOnClick(e)}
            >
                Display menu
            </button>
            <BreakingMenu
                isDisplayed={isDisplayed}
                anchorEl={anchorEl}
                anchorPosition={anchorPos}
                onClose={handleClose}
            >
                <MenuItem label="Item1"/>
                <MenuItem label="Item2"/>
                <MenuItem label="Item3"/>
            </BreakingMenu>
        </>
    );
};

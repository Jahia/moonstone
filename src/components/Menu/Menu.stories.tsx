import React, {useState} from 'react';
import {StoryObj} from '@storybook/react-vite';

import {Menu, MenuItem} from './index';
import type {MenuProps, AnchorPosition} from './Menu.types';

import markdownNotes from './Menu.md';
import {Dropdown, ListSelector, Separator} from '~/components';
import {CheckboxChecked, CheckboxUnchecked, HandleDrag} from '~/icons';

export default {
    title: 'Components/Menu',
    component: Menu,
    subcomponents: {MenuItem},
    parameters: {
        notes: {markdown: markdownNotes},
        docs: {
            // Fix issues in the doc tab with firefox
            inlineStories: false,
            IframeHeight: 500
        },
        layout: 'centered'
    }
};

export const Default: StoryObj<MenuProps> = {
    render: args => (
        <Menu {...args}>
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
        </Menu>
    ),

    args: {
        isDisplayed: true,
        maxHeight: '250px',
        style: {zIndex: 10000}
    }
};

export const SpikeMenuWithSelectableChildren = () => {
    const [selected, setSelected] = useState([
        'Statuses',
        'Content type',
        'Created by',
        'Last modified'
    ]);
    const [children, setChildren] = useState([
        'Categories',
        'Created at',
        'Id',
        'Languages',
        'Last modified by',
        'Path',
        'Published',
        'Published by',
        'Tags',
        'Usages'
    ]);
    const MLRS_DRAG = 'mlrs_drag_list_item';
    const [dragged, setDragged] = useState(null);

    const onCheck = (child: string) => {
        setSelected([...selected, child]);
        setChildren(children.filter(value => value !== child));
    };

    const onUncheck = (child: string) => {
        setChildren([...children, child]);
        setSelected(selected.filter(value => value !== child));
    };

    const displaySelected = [...selected];
    if (typeof dragged?.originalIndex === 'number') {
        displaySelected.splice(dragged.originalIndex, 1);
    }

    if (typeof dragged?.index === 'number') {
        displaySelected.splice(dragged.index, 0, dragged.value);
    }

    const onDragStart = (e: React.DragEvent, child: string) => {
        e.stopPropagation();
        (e.currentTarget as HTMLElement).style.opacity = '0';
        e.dataTransfer.setData(MLRS_DRAG, JSON.stringify({type: MLRS_DRAG, value: child}));
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setDragImage(e.currentTarget as Element, 10, 10);
        setDragged({value: child, originalIndex: selected.indexOf(child), index: selected.indexOf(child)});
    };

    const onDragEnd = (e: React.DragEvent) => {
        e.stopPropagation();
        (e.currentTarget as HTMLElement).style.opacity = '1';
        setDragged(null);
    };

    const onDragOver = (e: React.DragEvent, child: string) => {
        e.stopPropagation();
        if (e.dataTransfer.types.includes(MLRS_DRAG)) {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            const rect = e.currentTarget.getBoundingClientRect();
            const clientOffset = {x: e.clientX, y: e.clientY};
            const targetMidPointY = rect.y + (rect.height / 2);
            let newIndex = -1;
            if (child && dragged?.value !== child) {
                if (clientOffset.y < targetMidPointY) {
                    newIndex = selected.filter(f => f !== dragged.value).indexOf(child);
                }

                if (clientOffset.y > targetMidPointY) {
                    newIndex = selected.filter(f => f !== dragged.value).indexOf(child) + 1;
                }
            } else if (!child) {
                newIndex = selected.length;
            }

            if (newIndex !== -1 && dragged.index !== newIndex) {
                setDragged((state: object) => ({
                    ...state,
                    index: newIndex
                }));
            }
        }
    };

    const onDrop = (e: React.DragEvent) => {
        e.stopPropagation();
        if (e.dataTransfer.types.includes(MLRS_DRAG)) {
            setSelected(displaySelected);
            setDragged(null);
        }
    };

    return (
        <Menu
            hasSearch
            isDisplayed
            searchEmptyText="Oh no! It seems like that doesn't exist."
            maxHeight="350px"
            style={{zIndex: 10000, position: 'relative'}}
        >
            <div data-option-type="group" role="group">
                <Separator/>
                <MenuItem label="Visible fields" variant="title"/>
                <MenuItem isDisabled label="Displayable name" iconStart={<CheckboxChecked color="blue"/>}/>
                {displaySelected.map(child => (
                    <MenuItem key={child} draggable label={child} iconStart={<CheckboxChecked color="blue"/>} iconEnd={<HandleDrag/>} onClick={() => onUncheck(child)} onDragStart={e => onDragStart(e, child)} onDragEnd={e => onDragEnd(e)} onDragOver={e => onDragOver(e, child)} onDrop={e => onDrop(e)}/>
                ))}
            </div>
            <div data-option-type="group" role="group">
                <Separator/>
                <MenuItem label="Hidden fields" variant="title"/>
                {children.map(child => (
                    <MenuItem key={child} label={child} iconStart={<CheckboxUnchecked/>} onClick={() => onCheck(child)}/>
                ))}
            </div>

        </Menu>
    );
};

export const SpikeWithVisibleAndDropdowns = () => {
    const [selected, setSelected] = useState([
        'Statuses',
        'Content type',
        'Created by',
        'Last modified'
    ]);
    const firstDropdownData = [
        {value: '1', label: 'Status'},
        {value: '2', label: 'Name'},
        {value: '3', label: 'Content type'},
        {value: '4', label: 'Last modified'},
        {value: '5', label: 'Created at'}
    ];
    const secondDropdownData = [
        {value: 'asc', label: 'Ascending (A-Z)'},
        {value: 'desc', label: 'Descending (Z-A)'}
    ];

    const MLRS_DRAG = 'mlrs_drag_list_item';
    const [dragged, setDragged] = useState(null);

    const displaySelected = [...selected];
    if (typeof dragged?.originalIndex === 'number') {
        displaySelected.splice(dragged.originalIndex, 1);
    }

    if (typeof dragged?.index === 'number') {
        displaySelected.splice(dragged.index, 0, dragged.value);
    }

    const onDragStart = (e: React.DragEvent, child: string) => {
        e.stopPropagation();
        (e.currentTarget as HTMLElement).style.opacity = '0';
        e.dataTransfer.setData(MLRS_DRAG, JSON.stringify({type: MLRS_DRAG, value: child}));
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setDragImage(e.currentTarget as Element, 10, 10);
        setDragged({value: child, originalIndex: selected.indexOf(child), index: selected.indexOf(child)});
    };

    const onDragEnd = (e: React.DragEvent) => {
        e.stopPropagation();
        (e.currentTarget as HTMLElement).style.opacity = '1';
        setDragged(null);
    };

    const onDragOver = (e: React.DragEvent, child: string) => {
        e.stopPropagation();
        if (e.dataTransfer.types.includes(MLRS_DRAG)) {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            const rect = e.currentTarget.getBoundingClientRect();
            const clientOffset = {x: e.clientX, y: e.clientY};
            const targetMidPointY = rect.y + (rect.height / 2);
            let newIndex = -1;
            if (child && dragged?.value !== child) {
                if (clientOffset.y < targetMidPointY) {
                    newIndex = selected.filter(f => f !== dragged.value).indexOf(child);
                }

                if (clientOffset.y > targetMidPointY) {
                    newIndex = selected.filter(f => f !== dragged.value).indexOf(child) + 1;
                }
            } else if (!child) {
                newIndex = selected.length;
            }

            if (newIndex !== -1 && dragged.index !== newIndex) {
                setDragged((state: object) => ({
                    ...state,
                    index: newIndex
                }));
            }
        }
    };

    const onDrop = (e: React.DragEvent) => {
        e.stopPropagation();
        if (e.dataTransfer.types.includes(MLRS_DRAG)) {
            setSelected(displaySelected);
            setDragged(null);
        }
    };

    return (
        <Menu
            isDisplayed
            hasSearch={false}
            maxHeight="350px"
            style={{zIndex: 10000, position: 'relative', padding: 10}}
        >
            <MenuItem label="Visible fields" variant="title"/>
            <MenuItem isDisabled label="Displayable name" iconStart={<CheckboxChecked color="blue"/>}/>
            {displaySelected.map(child => (
                <MenuItem key={child} draggable label={child} iconStart={<CheckboxChecked color="blue"/>} iconEnd={<HandleDrag/>} onDragStart={e => onDragStart(e, child)} onDragEnd={e => onDragEnd(e)} onDragOver={e => onDragOver(e, child)} onDrop={e => onDrop(e)}/>
                ))}
            <Separator/>
            <MenuItem label="Sort by" variant="title"/>
            <Dropdown variant="outlined" data={firstDropdownData} value="4"/>
            <Separator/>
            <MenuItem label="Direction" variant="title"/>
            <Dropdown variant="outlined" data={secondDropdownData} value="asc"/>
        </Menu>
    );
};

export const SpikeWithOnlyDropdowns = () => {
    const firstDropdownData = [
        {value: '1', label: 'Status'},
        {value: '2', label: 'Name'},
        {value: '3', label: 'Content type'},
        {value: '4', label: 'Last modified'},
        {value: '5', label: 'Created at'}
    ];
    const secondDropdownData = [
        {value: 'asc', label: 'Ascending (A-Z)'},
        {value: 'desc', label: 'Descending (Z-A)'}
    ];

    return (
        <Menu
            isDisplayed
            maxHeight="250px"
            style={{zIndex: 10000, position: 'relative', padding: 10}}
        >
            <MenuItem label="Sort by" variant="title"/>
            <Dropdown variant="outlined" data={firstDropdownData} value="4"/>
            <Separator/>
            <MenuItem label="Direction" variant="title"/>
            <Dropdown variant="outlined" data={secondDropdownData} value="asc"/>
        </Menu>
    );
};

// Search is not working on this one
export const SpikeWithModifiedListselector = () => {
    const [arrayValue, setArrayValue] = useState(['2', '5', '8', '9']);
    const options = [
        {value: '1', label: 'Status'},
        {value: '2', label: 'Name'},
        {value: '3', label: 'Content type'},
        {value: '4', label: 'Last modified'},
        {value: '5', label: 'Created at'},
        {value: '6', label: 'Created by'},
        {value: '7', label: 'Path'},
        {value: '8', label: 'Published'},
        {value: '9', label: 'Tags'}
    ];
    return (
        <Menu
            hasSearch
            isDisplayed
            searchEmptyText="Oh no! It seems like that doesn't exist."
            maxHeight="350px"
            style={{zIndex: 10000, position: 'relative', padding: 10}}
        >
            <ListSelector
                    className="menu-listSelector"
                    label={{
                      rightListTitle: 'Visible fields',
                      leftListTitle: 'Hidden fields',
                      addAllTitle: 'Add all',
                      removeAllTitle: 'Remove all',
                      selected: `${arrayValue.length} item(s) selected`
                    }}
                    options={options}
                    values={arrayValue}
                    onChange={setArrayValue}
                  />
        </Menu>
    );
};

export const SpikeWithListselector = () => {
    const [arrayValue, setArrayValue] = useState(['2', '5', '8', '9']);
    const options = [
        {value: '1', label: 'Status'},
        {value: '2', label: 'Name'},
        {value: '3', label: 'Content type'},
        {value: '4', label: 'Last modified'},
        {value: '5', label: 'Created at'},
        {value: '6', label: 'Created by'},
        {value: '7', label: 'Path'},
        {value: '8', label: 'Published'},
        {value: '9', label: 'Tags'}
    ];
    return (
        <Menu
            isDisplayed
            searchEmptyText="Oh no! It seems like that doesn't exist."
            maxHeight="350px"
            style={{zIndex: 10000, position: 'relative', padding: 10}}
        >
            <ListSelector
                    label={{
                      rightListTitle: 'Visible fields',
                      leftListTitle: 'Hidden fields',
                      addAllTitle: 'Add all',
                      removeAllTitle: 'Remove all',
                      selected: `${arrayValue.length} item(s) selected`
                    }}
                    options={options}
                    values={arrayValue}
                    onChange={setArrayValue}
                  />
        </Menu>
    );
};

export const ContextualMenu = () => {
    const [isDisplayed, setIsDisplayed] = useState<boolean>(false);
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
            <Menu
        isDisplayed={isDisplayed}
        anchorPosition={menuPosition}
        onClose={handleClose}
            >
                <MenuItem label="Item1"/>
                <MenuItem label="Item2"/>
                <MenuItem label="Item3"/>
            </Menu>
        </div>
    );
};

export const AnchorElOrigin = () => {
    const [isDisplayed, setIsDisplayed] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const buttonEl = React.useRef();

    const handleOnClick = () => {
        setAnchorEl(buttonEl);
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
        onClick={handleOnClick}
            >
                Display menu
            </button>
            <Menu
        isDisplayed={isDisplayed}
        anchorEl={anchorEl}
        anchorPosition={{top: 0, left: 0}}
        anchorElOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        transformElOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        onClose={handleClose}
            >
                <MenuItem label="Item1"/>
                <MenuItem label="Item2"/>
                <MenuItem label="Item3"/>
            </Menu>
        </>
    );
};

export const PositionAbsolute = () => {
    return (
    // <div style={{transform: 'scale(1)', height: '100vh'}}>
    // </div>
        <div
      style={{
        position: 'relative',
        transform: 'translate(90px, 90px)',
        width: '100px',
        height: '100px'
      }}
        >
            <div
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: 'var(--color-accent)',
          cursor: 'pointer',
          padding: '10px'
        }}
            >
                Parent div is position: relative.
            </div>
            <Menu
        isDisplayed
        position="absolute"
        anchorPosition={{top: 4, left: 0}}
        anchorElOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        transformElOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
            >
                <MenuItem label="Item1"/>
                <MenuItem label="Item2"/>
                <MenuItem label="Item3"/>
            </Menu>
        </div>
    );
};

export const BigImageMenuItems = () => (
    <div style={{transform: 'scale(1)', height: '100vh'}}>
        <Menu
      isDisplayed
      maxWidth="400px"
      maxHeight="440px"
      style={{zIndex: 10000}}
        >
            <MenuItem label="Menu Items with Big Images Title" variant="title"/>
            <MenuItem
        label="Big image MenuItem"
        image={<img src="https://via.placeholder.com/500?text=MenuItemImage" alt="big image"/>}
        imageSize="big"
      />
            <MenuItem
        label="Big image MenuItem"
        image={<img src="https://via.placeholder.com/500?text=MenuItemImage" alt="big image"/>}
        imageSize="big"
      />
            <MenuItem
        isSelected
        label="Big image MenuItem - selected"
        image={<img src="https://via.placeholder.com/500?text=MenuItemImage" alt="big image"/>}
        imageSize="big"
      />
            <MenuItem
        label="Big image MenuItem - lots of words lots of words lots of words"
        image={<img src="https://via.placeholder.com/300x500?text=MenuItemImage" alt="big image"/>}
        imageSize="big"
      />
            <MenuItem
        label="Big image MenuItem - lots of words lots of words lots of words"
        image={<img src="https://via.placeholder.com/500x300?text=MenuItemImage" alt="big image"/>}
        imageSize="big"
      />
        </Menu>
    </div>
);

export const SmallImageMenuItems = () => (
    <div style={{transform: 'scale(1)', height: '100vh'}}>
        <Menu
      isDisplayed
      maxWidth="264px"
      maxHeight="320px"
      style={{zIndex: 10000}}
        >
            <MenuItem label="Menu Items with Small Images Title" variant="title"/>
            <MenuItem
        label="Small image MenuItem"
        image={<img src="https://via.placeholder.com/500?text=MenuItemImage" alt="small image"/>}
        imageSize="small"
      />
            <MenuItem
        label="Small image MenuItem"
        image={<img src="https://via.placeholder.com/500?text=MenuItemImage" alt="small image"/>}
        imageSize="small"
      />
            <MenuItem
        isSelected
        label="Small image MenuItem - selected"
        image={<img src="https://via.placeholder.com/500?text=MenuItemImage" alt="small image"/>}
        imageSize="small"
      />
            <MenuItem
        label="Small image MenuItem - lots of words lots of words lots of words"
        image={<img src="https://via.placeholder.com/300x500?text=MenuItemImage" alt="small image"/>}
        imageSize="small"
      />
            <MenuItem
        label="Small image MenuItem - lots of words lots of words lots of words"
        image={<img src="https://via.placeholder.com/500x300?text=MenuItemImage" alt="small image"/>}
        imageSize="small"
      />
        </Menu>
    </div>
);

export const WithSearch = () => (
    <div style={{transform: 'scale(1)', height: '100vh'}}>
        <Menu
      hasSearch
      isDisplayed
      searchEmptyText="Oh no! It seems like that doesn't exist."
      maxHeight="250px"
      style={{zIndex: 10000}}
        >
            <MenuItem label="Base items" variant="title"/>
            <MenuItem label="Item1"/>
            <MenuItem label="Item2"/>
            <MenuItem label="Item3"/>
            <MenuItem label="Item4"/>
            <MenuItem label="Item5"/>
            <MenuItem label="Item6"/>
            <MenuItem label="Item7"/>
            <MenuItem label="Item8"/>
            <MenuItem label="Item9"/>
        </Menu>
    </div>
);

export const Reversed = () => (
    <div
    className="moonstone-reversed"
    style={{
      transform: 'scale(1)',
      height: '100vh',
      background: 'var(--color-gray_dark)'
    }}
    >
        <Menu
      hasSearch
      isDisplayed
      searchEmptyText="Oh no! It seems like that doesn't exist."
      maxHeight="250px"
      style={{zIndex: 10000}}
        >
            <MenuItem label="Base items" variant="title"/>
            <MenuItem label="Item1"/>
            <MenuItem label="Item2"/>
            <MenuItem label="Item3"/>
            <MenuItem label="Item4"/>
            <MenuItem label="Item5"/>
            <MenuItem label="Item6"/>
            <MenuItem label="Item7"/>
            <MenuItem label="Item8"/>
            <MenuItem label="Item9"/>
        </Menu>
    </div>
);

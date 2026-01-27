import React, {useState} from 'react';
import preview from '~storybook/preview';
import {Menu, MenuItem} from './index';
import type {AnchorPosition, MenuProps} from './Menu.types';
import markdownNotes from './Menu.md';
import {Separator} from '~/components';

const meta = preview.meta({
    title: 'Components/Menu',
    component: Menu,
    subcomponents: {MenuItem},
    parameters: {
        notes: {markdown: markdownNotes},
        docs: {
            inlineStories: false,
            IframeHeight: 500
        }
    },
    argTypes: {
        children: {table: {disable: true}}
    }
});

export const Default = meta.story({
    args: {
        isDisplayed: true,
        maxHeight: '250px',
        style: {zIndex: 10000},
        children: null
    },
    render: (args: MenuProps) => (
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
    )
});

export const ContextualMenu = meta.story({

    render: (args: MenuProps) => {
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
                    {...args}
                >
                    <MenuItem label="Item1"/>
                    <MenuItem label="Item2"/>
                    <MenuItem label="Item3"/>
                </Menu>
            </div>
        );
    },
    args: {
        isDisplayed: true,
        children: null
    }
});

export const AnchorElOrigin = meta.story({

    render: (args: MenuProps) => {
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
                    {...args}
                >
                    <MenuItem label="Item1"/>
                    <MenuItem label="Item2"/>
                    <MenuItem label="Item3"/>
                </Menu>
            </>
        );
    },
    args: {
        isDisplayed: true,
        children: null
    }
});

export const PositionAbsolute = meta.story({

    render: (args: MenuProps) => (
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
                {...args}
            >
                <MenuItem label="Item1"/>
                <MenuItem label="Item2"/>
                <MenuItem label="Item3"/>
            </Menu>
        </div>
    ),
    args: {
        isDisplayed: true,
        children: null
    }
});

export const BigImageMenuItems = meta.story({

    render: (args: MenuProps) => (
        <div style={{transform: 'scale(1)', height: '100vh'}}>
            <Menu
                isDisplayed
                maxWidth="400px"
                maxHeight="440px"
                style={{zIndex: 10000}}
                {...args}
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
    ),
    args: {
        isDisplayed: false,
        children: null
    }
});

export const SmallImageMenuItems = meta.story({

    render: (args: MenuProps) => (
        <div style={{transform: 'scale(1)', height: '100vh'}}>
            <Menu
                isDisplayed
                maxWidth="264px"
                maxHeight="320px"
                style={{zIndex: 10000}}
                {...args}
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
    ),
    args: {
        isDisplayed: true,
        children: null
    }
});

export const WithSearch = meta.story({

    render: (args: MenuProps) => (
        <div style={{transform: 'scale(1)', height: '100vh'}}>
            <Menu
                hasSearch
                isDisplayed
                searchEmptyText="Oh no! It seems like that doesn't exist."
                maxHeight="250px"
                style={{zIndex: 10000}}
                {...args}
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
    ),
    args: {
        isDisplayed: true,
        children: null
    }
});

export const Reversed = meta.story({

    render: (args: MenuProps) => (
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
                {...args}
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
    ),
    args: {
        isDisplayed: true,
        children: null
    }
});

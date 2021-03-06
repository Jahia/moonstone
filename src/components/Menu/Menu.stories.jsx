import React, {useState} from 'react';
import {storiesOf} from '@storybook/react';
import {boolean, number, select, text, withKnobs} from '@storybook/addon-knobs';
import markdownNotes from './Menu.md';
import {Menu, MenuItem} from './index';
import {Separator} from '~/components';

storiesOf('Components/Menu', module)
    .addParameters({
        component: Menu,
        notes: {markdown: markdownNotes},
        subcomponents: {'Menu Item': MenuItem}
    })
    .addDecorator(withKnobs)
    .add('Default', () => (
        <div style={{transform: 'scale(1)', height: '100vh'}}>
            <Menu
                isDisplayed={boolean('display', true)}
                maxHeight={text('Max-height', '250px')}
                style={{zIndex: 10000}}
            >
                <MenuItem label="Base items" variant="title"/>
                <MenuItem label="Item1"/>
                <MenuItem label="Item2"/>
                <MenuItem label="Item3"/>
                <Separator/>
                <MenuItem label="Variants" variant="title"/>
                <MenuItem isHover label="Item3 - Hover"/>
                <MenuItem isDisabled label="Item3 - Disabled"/>
                <MenuItem isSelected label="Item3 - Selected"/>
            </Menu>
        </div>
    ))
    .add('onClick', () => {
        const [isDisplayed, setIsDisplayed] = useState(false);
        const [menuPosition, setMenuPosition] = useState();

        const handleOnClick = e => {
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
            <div style={{transform: 'scale(1)', height: '100vh'}} onClick={handleOnClick}>
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
    })
    .add('anchorElOrigin', () => {
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
            <div style={{transform: 'scale(1)', height: '100vh'}}>
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
                    anchorPosition={{top: number('top', 0), left: number('left', 0)}}
                    anchorElOrigin={{
                        vertical: select('anchor-vertical', ['top', 'bottom', 'center'], 'bottom'),
                        horizontal: select('anchor-horizontal', ['left', 'right', 'center'], 'left')
                    }}
                    transformElOrigin={{
                        vertical: select('transform-vertical', ['top', 'bottom'], 'top'),
                        horizontal: select('transform-horizontal', ['left', 'right'], 'left')
                    }}
                    onClose={handleClose}
                >
                    <MenuItem label="Item1"/>
                    <MenuItem label="Item2"/>
                    <MenuItem label="Item3"/>
                </Menu>
            </div>
        );
    })
    .add('Position Absolute', () => {
        return (
            <div style={{transform: 'scale(1)', height: '100vh'}}>
                <div style={{position: 'relative', transform: 'translate(90px, 90px)', width: '100px', height: '100px'}}>
                    <div
                        style={{height: '100%', width: '100%', backgroundColor: 'var(--color-accent)', cursor: 'pointer', padding: '10px'}}
                    >
                        Parent div is position: relative.
                    </div>
                    <Menu
                        isDisplayed={boolean('display', true)}
                        position={select('position', ['absolute', 'fixed'], 'absolute')}
                        anchorPosition={{top: number('top', 4), left: number('left', 0)}}
                        anchorElOrigin={{
                            vertical: select('anchor-vertical', ['top', 'bottom', 'center'], 'bottom'),
                            horizontal: select('anchor-horizontal', ['left', 'right', 'center'], 'left')
                        }}
                        transformElOrigin={{
                            vertical: select('transform-vertical', ['top', 'bottom'], 'top'),
                            horizontal: select('transform-horizontal', ['left', 'right'], 'left')
                        }}
                    >
                        <MenuItem label="Item1"/>
                        <MenuItem label="Item2"/>
                        <MenuItem label="Item3"/>
                    </Menu>
                </div>
            </div>
        );
    })
    .add('Big Image Menu Items', () => (
        <div style={{transform: 'scale(1)', height: '100vh'}}>
            <Menu
                isDisplayed={boolean('display', true)}
                maxWidth="400px"
                maxHeight="440px"
                style={{zIndex: 10000}}
            >
                <MenuItem label="Menu Items with Big Images Title" variant="title"/>
                <MenuItem
                    label="Big image MenuItem"
                    image={<img src="https://via.placeholder.com/500x500?text=MenuItemImage"/>}
                    imageSize="big"
                />
                <MenuItem
                    label="Big image MenuItem"
                    image={<img src="https://via.placeholder.com/500x500?text=MenuItemImage"/>}
                    imageSize="big"
                />
                <MenuItem
                    isSelected
                    label="Big image MenuItem - selected"
                    image={<img src="https://via.placeholder.com/500x500?text=MenuItemImage"/>}
                    imageSize="big"
                />
                <MenuItem
                    label="Big image MenuItem - lots of words lots of words lots of words"
                    image={<img src="https://via.placeholder.com/300x500?text=MenuItemImage"/>}
                    imageSize="big"
                />
                <MenuItem
                    label="Big image MenuItem - lots of words lots of words lots of words"
                    image={<img src="https://via.placeholder.com/500x300?text=MenuItemImage"/>}
                    imageSize="big"
                />
            </Menu>
        </div>
    ))
    .add('Small Image Menu Items', () => (
        <div style={{transform: 'scale(1)', height: '100vh'}}>
            <Menu
                isDisplayed={boolean('display', true)}
                maxWidth="264px"
                maxHeight="320px"
                style={{zIndex: 10000}}
            >
                <MenuItem label="Menu Items with Small Images Title" variant="title"/>
                <MenuItem
                    label="Small image MenuItem"
                    image={<img src="https://via.placeholder.com/500x500?text=MenuItemImage"/>}
                    imageSize="small"
                />
                <MenuItem
                    label="Small image MenuItem"
                    image={<img src="https://via.placeholder.com/500x500?text=MenuItemImage"/>}
                    imageSize="small"
                />
                <MenuItem
                    isSelected
                    label="Small image MenuItem - selected"
                    image={<img src="https://via.placeholder.com/500x500?text=MenuItemImage"/>}
                    imageSize="small"
                />
                <MenuItem
                    label="Small image MenuItem - lots of words lots of words lots of words"
                    image={<img src="https://via.placeholder.com/300x500?text=MenuItemImage"/>}
                    imageSize="small"
                />
                <MenuItem
                    label="Small image MenuItem - lots of words lots of words lots of words"
                    image={<img src="https://via.placeholder.com/500x300?text=MenuItemImage"/>}
                    imageSize="small"
                />
            </Menu>
        </div>
    ))
    .add('With Search', () => (
        <div style={{transform: 'scale(1)', height: '100vh'}}>
            <Menu
                hasSearch
                isDisplayed={boolean('display', true)}
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
    ));

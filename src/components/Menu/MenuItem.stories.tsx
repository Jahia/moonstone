import { Menu, MenuItem } from './index';
import markdownNotes from './MenuItem.md?raw';

import type { MenuItemProps } from './MenuItem.types';
import type { StoryObj } from '@storybook/react-vite';

export default {
    title: 'Components/MenuItem',
    component: MenuItem,
    parameters: {
        actions: { argTypesRegex: '^on.*' },
        componentSubtitle: 'One entry of a Menu.',
        docs: { description: { component: markdownNotes } },
    },
};

export const Playground: StoryObj<MenuItemProps> = {
    args: { label: 'Rename' },
    render: args => (
        <Menu isDisplayed style={{ zIndex: 10000 }}>
            <MenuItem {...args}/>
            <MenuItem label="Delete"/>
        </Menu>
    ),
};

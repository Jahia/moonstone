import React from 'react';
import {Story} from '@storybook/react';

import {ListItemChip} from './index';
import type {ListItemChipProps} from './ListItemChip.types';

export default {
    title: 'Components/ListItemChip',
    component: ListItemChip,

    parameters: {
        layout: 'centered'
    }
};

export const Default: Story<ListItemChipProps> = args => (
    <ListItemChip {...args}/>
);
Default.args = {
    label: 'ListItem label'
};

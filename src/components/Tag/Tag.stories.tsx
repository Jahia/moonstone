import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Tag} from './index';

export default {
    title: 'Components/Tag',
    component: Tag,
    parameters: {
        layout: 'fullscreen',
        knobs: {disable: true},
        storysource: {disable: true},
        actions: {argTypesRegex: '^on.*'}
    }
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = args => (
    <Tag label="Tag" value="tag01" {...args}/>
);

export const Default = Template.bind({});

// Const clickme = (e, item) => {
//     console.log('trigger clickme');
//     console.log(item.value);
// };

// export const Click: ComponentStory<typeof Tag> = args => (
//     <Tag label="Tag" value="tag01" onClick={clickme} {...args}/>
// );

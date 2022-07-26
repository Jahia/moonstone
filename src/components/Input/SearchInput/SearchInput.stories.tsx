import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '~/__storybook__/storybook.scss';

import {SearchInput} from './index';

export default {
    title: 'Components/Input',
    component: SearchInput,
    layout: 'centered',
    parameters: {
        knobs: {disable: true}
    },
    args: {
        placeholder: 'Search and press Enter'
    },
    argTypes: {
        onChange: { action: 'onChange'},
        onClick: { action: 'onClick' },
        onBlur: { action: 'onBlur'},
        onFocus: { action: 'onFocus'}
    }
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = args => (
    <section className="storyWrapper">
        <SearchInput {...args}/>
    </section>
);

export const Search = Template.bind({});

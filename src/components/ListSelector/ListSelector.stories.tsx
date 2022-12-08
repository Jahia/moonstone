import React, {useState} from 'react';
import '~/__storybook__/storybook.scss';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {ListSelector} from './index';

export default {
    title: 'Components/ListSelector',
    component: ListSelector,
    parameters: {
        layout: 'centered',
        knobs: {disable: true},
        storysource: {disable: true},
        componentSubtitle: 'RadioGroup & RadioItem',
        actions: {argTypesRegex: '^on.*'}
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }
} as ComponentMeta<typeof ListSelector>;

const Template: ComponentStory<typeof ListSelector> = args => (
    <ListSelector {...args}/>
);

export const Basic = Template.bind({});
Basic.args = {
    isReadOnly: false,
    options: [{value: '1', label: 'One'}, {value: '2', label: 'Two'}, {value: '3', label: 'Three'}, {value: '4', label: 'Four'}, {value: '5', label: 'Five'}],
    arrayValue: ['1', '3', '5'],
    onChange: (v: string[]) => console.log(v)
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
    isReadOnly: true,
    options: [{value: '1', label: 'One'}, {value: '2', label: 'Two'}, {value: '3', label: 'Three'}, {value: '4', label: 'Four'}, {value: '5', label: 'Five'}],
    arrayValue: ['1', '3', '5'],
    onChange: (v: string[]) => console.log(v)
};

export const Controlled: ComponentStory<typeof ListSelector> = args => {
    const [arrayValue, setArrayValue] = useState([]);

    const options = [{value: '1', label: 'One'}, {value: '2', label: 'Two'}, {value: '3', label: 'Three'}, {value: '4', label: 'Four'}, {value: '5', label: 'Five'}];

    return <ListSelector {...args} options={options} values={arrayValue} onChange={setArrayValue}/>;
};

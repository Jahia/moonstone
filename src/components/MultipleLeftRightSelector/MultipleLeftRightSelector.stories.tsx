import React, {useState} from 'react';
import '~/__storybook__/storybook.scss';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {MultipleLeftRightSelector} from './index';

export default {
    title: 'Components/MultipleLeftRightSelector',
    component: MultipleLeftRightSelector,
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
} as ComponentMeta<typeof MultipleLeftRightSelector>;

const Template: ComponentStory<typeof MultipleLeftRightSelector> = args => (
    <MultipleLeftRightSelector {...args}/>
);

export const Basic = Template.bind({});
Basic.args = {
    readOnly: false,
    options: [{value: '1', label: 'One'}, {value: '2', label: 'Two'}, {value: '3', label: 'Three'}, {value: '4', label: 'Four'}, {value: '5', label: 'Five'}],
    arrayValue: ['1', '3', '5'],
    onChange: (v: string[]) => console.log(v)
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
    readOnly: true,
    options: [{value: '1', label: 'One'}, {value: '2', label: 'Two'}, {value: '3', label: 'Three'}, {value: '4', label: 'Four'}, {value: '5', label: 'Five'}],
    arrayValue: ['1', '3', '5'],
    onChange: (v: string[]) => console.log(v)
};

export const Controlled: ComponentStory<typeof MultipleLeftRightSelector> = args => {
    const [arrayValue, setArrayValue] = useState([]);

    const options = [{value: '1', label: 'One'}, {value: '2', label: 'Two'}, {value: '3', label: 'Three'}, {value: '4', label: 'Four'}, {value: '5', label: 'Five'}]

    return <MultipleLeftRightSelector options={options} arrayValue={arrayValue} onChange={setArrayValue}/>;
};

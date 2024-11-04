/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react';
import '~/__storybook__/storybook.scss';
import {StoryObj, Meta} from '@storybook/react';

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
} as Meta<typeof ListSelector>;

export const Basic = {
    args: {
        isReadOnly: false,
        label: {
            addAllTitle: 'Add all',
            removeAllTitle: 'Remove all',
            selected: '0 items selected'
        },
        options: [
            {value: '1', label: 'One'},
            {value: '2', label: 'Two'},
            {value: '3', label: 'Three'},
            {value: '4', label: 'Four'},
            {value: '5', label: 'Five'}
        ],
        values: ['1', '3', '5'],
        onChange: (v: string[]) => console.log(v)
    }
};

export const ReadOnly = {
    args: {
        isReadOnly: true,
        label: {
            addAllTitle: 'Add all',
            removeAllTitle: 'Remove all',
            selected: '0 items selected'
        },
        options: [
            {value: '1', label: 'One'},
            {value: '2', label: 'Two'},
            {value: '3', label: 'Three'},
            {value: '4', label: 'Four'},
            {value: '5', label: 'Five'}
        ],
        values: ['1', '3', '5'],
        onChange: (v: string[]) => console.log(v)
    }
};

export const Controlled: StoryObj<typeof ListSelector> = {
    render: args => {
        const [arrayValue, setArrayValue] = useState([]);

        const options = [
            {value: '1', label: 'One'},
            {value: '2', label: 'Two'},
            {value: '3', label: 'Three'},
            {value: '4', label: 'Four'},
            {value: '5', label: 'Five'}
        ];

        return (
            <ListSelector
        {...args}
        label={{
          rightListTitle: 'Label for the right list',
          leftListTitle: 'Label for the left list',
          addAllTitle: 'Add all',
          removeAllTitle: 'Remove all',
          selected: `${arrayValue.length} item(s) selected`
        }}
        options={options}
        values={arrayValue}
        onChange={setArrayValue}
      />
        );
    }
};

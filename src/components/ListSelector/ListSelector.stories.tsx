import { useState } from 'react';

import { ListSelector } from './index';
import { listSelectorData } from '~/data/listSelectorData';

import type { Meta, StoryObj } from '@storybook/react-vite';

import '~/__storybook__/storybook.scss';

export default {
    title: 'Components/ListSelector',
    component: ListSelector,
    parameters: {
        layout: 'centered',
        knobs: { disable: true },
        storysource: { disable: true },
        componentSubtitle: 'RadioGroup & RadioItem',
        actions: { argTypesRegex: '^on.*' },
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            },
        },
    },
} as Meta<typeof ListSelector>;

export const Basic = {
    args: {
        options: listSelectorData,
        values: ['1', '3', '5'],
        onChange: (v: string[]) => console.log(v),
    },
};

export const ReadOnly = {
    args: {
        isReadOnly: true,
        options: listSelectorData,
        values: ['1', '3', '5'],
        onChange: (v: string[]) => console.log(v),
    },
};

export const Controlled: StoryObj<typeof ListSelector> = {
    render: (args) => {
        const [arrayValue, setArrayValue] = useState([]);

        const options = listSelectorData;

        return (
            <ListSelector
                {...args}
                options={options}
                values={arrayValue}
                onChange={setArrayValue}
            />
        );
    },
};

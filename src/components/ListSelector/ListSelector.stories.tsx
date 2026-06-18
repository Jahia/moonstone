import {useState} from 'react';
import '~/__storybook__/storybook.scss';
import preview from '~/__storybook__/preview';

import {ListSelector} from './index';
import {listSelectorData} from '~/data/listSelectorData';

const meta = preview.meta({
    title: 'Components/ListSelector',
    component: ListSelector,
    parameters: {
        layout: 'centered',
        knobs: {disable: true},
        storysource: {disable: true},
        docs: {
            subtitle: 'ListSelector'
        },
        actions: {argTypesRegex: '^on.*'}
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }
});

const defaultArgs = {
    label: {
        rightListTitle: 'Right list',
        leftListTitle: 'Left list',
        addAllTitle: 'Add all',
        removeAllTitle: 'Remove all',
        selected: '3 item(s) selected'
    },
    options: listSelectorData,
    values: ['1', '3', '5'],
    onChange: (v: string[]) => console.log(v)
};

export const Basic = meta.story({
    args: {
        ...defaultArgs
    }
});

export const ReadOnly = meta.story({
    args: {
        ...defaultArgs,
        isReadOnly: true
    }
});

export const Controlled = meta.story({
    render: args => {
        const [arrayValue, setArrayValue] = useState<string[]>([]);

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
                values={arrayValue}
                onChange={setArrayValue}
            />
        );
    },
    args: {
        ...defaultArgs
    }
});

import {useState} from 'react';
import preview from '../../../.storybook/preview';
import '~/__storybook__/storybook.scss';
import {ListSelector} from './index';
import {listSelectorData} from '~/data/listSelectorData';
import {ListSelectorSelectorProps} from './ListSelector.types';

const meta = preview.meta({
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
        children: {table: {disable: true}}
    }
});

export const Basic = meta.story({
    args: {
        options: listSelectorData,
        values: ['1', '3', '5'],
        onChange: (v: string[]) => console.log(v),
        label: {
            rightListTitle: 'Right List',
            leftListTitle: 'Left List',
            addAllTitle: 'Add All',
            removeAllTitle: 'Remove All',
            selected: 'Selected'
        }
    }
});

export const ReadOnly = Basic.extend({
    args: {
        isReadOnly: true
    }
});

export const Controlled = meta.story({
    args: {
        onChange: () => undefined,
        label: {
            rightListTitle: '',
            leftListTitle: '',
            addAllTitle: '',
            removeAllTitle: '',
            selected: ''
        }
    },
    render: (args: ListSelectorSelectorProps) => {
        const [arrayValue, setArrayValue] = useState<string[]>([]);

        const options = listSelectorData;

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
});

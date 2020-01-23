import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, boolean, select, text} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import markdownNotes from './Dropdown.md';

import {Dropdown, DropdownSizes} from './index';
import {Love} from '~/tokens/icons';

const data = [
    {
        label: 'option 1',
        value: '1'
    },
    {
        label: 'option 2',
        value: '2'
    },
    {
        label: 'option 3 with very long long label label label label label label label label',
        value: '3'
    },
    {
        label: 'option 4',
        value: '4',
        isDisabled: true
    }
];

const dataLanguages = [
    {
        label: 'FR',
        value: 'fr'
    },
    {
        label: 'EN-US',
        value: 'en'
    },
    {
        label: 'DE',
        value: '3'
    },
    {
        label: 'ES',
        value: '4',
        isDisabled: true
    }
];

const dataGrouped = [
    {
        groupLabel: 'test',
        options: [
            {
                label: 'option 1',
                value: '1'
            },
            {
                label: 'option 2',
                value: '2'
            }
        ]
    },
    {
        groupLabel: 'test 2',
        options: [
            {
                label: 'option 3 with very long long label label label label label label label label',
                value: '3'
            },
            {
                label: 'option 4',
                value: '4',
                isDisabled: true
            }

        ]
    }
];

storiesOf('Components|Dropdown', module)
    .addParameters({
        component: Dropdown,
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .add('default', () => {
        return (
            <div style={{transform: 'scale(1)', height: '100vh'}}>
                <Dropdown
                    icon={<Love size="small"/>}
                    placeholder="Select a value"
                    size={select('Size', DropdownSizes, DropdownSizes[0])}
                    autoFocus={boolean('Auto-focus', false)}
                    isDisabled={boolean('Disabled', false)}
                    maxWidth={text('Max width', '120px')}
                    data={data}
                    onChange={action('on-change')}
                />
            </div>
        );
    })
    .add('with default value', () => {
        return (
            <div style={{transform: 'scale(1)', height: '100vh'}}>
                <Dropdown
                    autoFocus
                    isDisabled={boolean('Disabled', false)}
                    size={select('Size', DropdownSizes, DropdownSizes[0])}
                    DefaultItem={dataLanguages[1]}
                    placeholder="Set your language"
                    data={dataLanguages}
                    onChange={action('on-change')}
                />
            </div>
        );
    })
    .add('Grouped', () => {
        return (
            <div style={{transform: 'scale(1)', height: '100vh'}}>
                <Dropdown
                    isDisabled={boolean('Disabled', false)}
                    size={select('Size', DropdownSizes, DropdownSizes[0])}
                    maxWidth={text('Max width', '120px')}
                    defaultItem={dataGrouped[1].options[0]}
                    placeholder="Set me"
                    data={dataGrouped}
                />
            </div>
        );
    });

import React, {useState} from 'react';
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
        value: 'fr',
        iconStart: <Love/>,
        attributes: {
            id: 'option-fr'
        }
    },
    {
        label: 'EN-US',
        value: 'en',
        iconStart: <Love/>,
        attributes: {
            id: 'option-en'
        }
    },
    {
        label: 'DE',
        value: '3',
        iconStart: <Love/>,
        attributes: {
            id: 'option-de'
        }
    },
    {
        label: 'ES',
        value: '4',
        isDisabled: true,
        iconEnd: <Love/>,
        attributes: {
            id: 'option-es'
        }
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
        const [currentOption, setCurrentOption] = useState({label: 'Select something', value: null});

        const handleOnChange = (e, item) => {
            setCurrentOption(item);
            action('onChange');
            return true;
        };

        return (
            <div style={{transform: 'scale(1)', height: '100vh', padding: '90px'}}>
                <Dropdown
                    icon={<Love/>}
                    label={currentOption.label}
                    value={currentOption.value}
                    size={select('Size', DropdownSizes, DropdownSizes[0])}
                    isDisabled={boolean('Disabled', false)}
                    maxWidth={text('Max width', '120px')}
                    data={data}
                    onChange={(e, item) => handleOnChange(e, item)}
                />
            </div>
        );
    })
    .add('with default value', () => {
        const [currentOption, setCurrentOption] = useState({label: dataLanguages[1].label, value: dataLanguages[1].value});

        const handleOnChange = (e, item) => {
            setCurrentOption(item);
            action('onChange');
            return true;
        };

        return (
            <div style={{transform: 'scale(1)', height: '100vh'}}>
                <Dropdown
                    isDisabled={boolean('Disabled', false)}
                    label={currentOption.label}
                    value={currentOption.value}
                    size={select('Size', DropdownSizes, DropdownSizes[0])}
                    data={dataLanguages}
                    onChange={(e, item) => handleOnChange(e, item)}
                />
            </div>
        );
    })
    .add('Grouped', () => {
        const [currentOption, setCurrentOption] = useState({label: 'Select something', value: null});

        const handleOnChange = (e, item) => {
            setCurrentOption(item);
            action('onChange');
            return true;
        };

        return (
            <div style={{transform: 'scale(1)', height: '100vh'}}>
                <Dropdown
                    isDisabled={boolean('Disabled', false)}
                    label={currentOption.label}
                    value={currentOption.value}
                    size={select('Size', DropdownSizes, DropdownSizes[0])}
                    maxWidth={text('Max width', '120px')}
                    data={dataGrouped}
                    onChange={(e, item) => handleOnChange(e, item)}
                />
            </div>
        );
    });
